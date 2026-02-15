const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const RoomManager = require('./game/RoomManager');
const GameEngine = require('./game/GameEngine');
const VotingSystem = require('./game/VotingSystem');

const app = express();
const server = http.createServer(app);

// CORS ayarları - dinamik origin kontrolü
function isAllowedOrigin(origin) {
    if (!origin) return true; // Server-to-server istekleri
    const allowed = [
        'http://localhost:3000',
        'http://localhost:3001',
    ];
    if (process.env.FRONTEND_URL) {
        allowed.push(process.env.FRONTEND_URL);
    }
    // Tüm vercel.app subdomain'lerini kabul et
    if (origin.endsWith('.vercel.app')) return true;
    return allowed.includes(origin);
}

app.use(cors({
    origin: function (origin, callback) {
        if (isAllowedOrigin(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS izni yok'));
        }
    },
    credentials: true
}));

const io = new Server(server, {
    cors: {
        origin: function (origin, callback) {
            if (isAllowedOrigin(origin)) {
                callback(null, true);
            } else {
                callback(new Error('CORS izni yok'));
            }
        },
        methods: ['GET', 'POST'],
        credentials: true
    },
    pingTimeout: 60000,
    pingInterval: 25000
});

const roomManager = new RoomManager();

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Blöf Oyunu Backend Sunucusu',
        rooms: roomManager.rooms.size
    });
});

// ========== Admin API ==========
const ADMIN_KEY = process.env.ADMIN_KEY || 'blof-admin-2024';

function adminAuth(req, res, next) {
    const key = req.headers['x-admin-key'];
    if (key !== ADMIN_KEY) {
        return res.status(401).json({ error: 'Yetkisiz erişim.' });
    }
    next();
}

// Tüm odaları listele
app.get('/admin/rooms', adminAuth, (req, res) => {
    const rooms = [];
    for (const [code, room] of roomManager.rooms) {
        rooms.push({
            code,
            state: room.state,
            mode: room.mode,
            playerCount: room.players.filter(p => p.connected).length,
            totalPlayers: room.players.length,
            players: room.players.map(p => ({
                name: p.name,
                connected: p.connected,
                isHost: p.isHost
            })),
            createdAt: room.createdAt,
            ageMinutes: Math.round((Date.now() - room.createdAt) / 60000)
        });
    }
    res.json({ rooms, total: rooms.length });
});

// Belirli bir odayı sil
app.delete('/admin/rooms/:code', adminAuth, (req, res) => {
    const code = req.params.code.toUpperCase();
    const room = roomManager.getRoom(code);
    if (!room) {
        return res.status(404).json({ error: 'Oda bulunamadı.' });
    }

    // Socket mapping'leri temizle
    for (const player of room.players) {
        if (player.socketId) {
            // Oyuncuya bildirim gönder
            io.to(player.socketId).emit('room-closed', { reason: 'Oda admin tarafından kapatıldı.' });
            roomManager.socketToRoom.delete(player.socketId);
        }
    }
    roomManager.rooms.delete(code);

    res.json({ success: true, message: `Oda ${code} silindi.` });
});

// Tüm odaları sil
app.delete('/admin/rooms', adminAuth, (req, res) => {
    const count = roomManager.rooms.size;

    for (const [code, room] of roomManager.rooms) {
        for (const player of room.players) {
            if (player.socketId) {
                io.to(player.socketId).emit('room-closed', { reason: 'Tüm odalar temizlendi.' });
                roomManager.socketToRoom.delete(player.socketId);
            }
        }
    }
    roomManager.rooms.clear();

    res.json({ success: true, message: `${count} oda silindi.` });
});

// ========== Socket.IO Event Handlers ==========
io.on('connection', (socket) => {
    console.log(`Bağlandı: ${socket.id}`);

    // ---- Odaya Yeniden Bağlan (sayfa geçişi/refresh sonrası) ----
    socket.on('rejoin-room', ({ roomCode, playerId }, callback) => {
        try {
            const room = roomManager.getRoom(roomCode);
            if (!room) {
                callback({ success: false, error: 'Oda bulunamadı.' });
                return;
            }

            // Oyuncuyu bul ve socket bilgisini güncelle
            const player = room.players.find(p => p.id === playerId);
            if (!player) {
                callback({ success: false, error: 'Oyuncu bulunamadı.' });
                return;
            }

            // Eski socket mapping'i temizle
            if (player.socketId && player.socketId !== socket.id) {
                roomManager.socketToRoom.delete(player.socketId);
            }

            // Yeni socket bilgilerini güncelle
            player.socketId = socket.id;
            player.connected = true;
            roomManager.socketToRoom.set(socket.id, { roomCode, playerId });

            // Host kontrolü
            if (player.id === room.hostId) {
                room.hostSocketId = socket.id;
            }

            // Socket.IO odasına katıl
            socket.join(roomCode);

            console.log(`Yeniden bağlandı: ${player.name} → ${roomCode} (state: ${room.state})`);

            // Oyun devam ediyorsa game state'i de gönder
            let gameState = null;
            if (room.state === 'playing' && room.assignments && room.assignments[playerId]) {
                gameState = {
                    word: room.assignments[playerId].word,
                    isBluff: room.assignments[playerId].isBluff,
                    round: room.currentRound,
                    totalRounds: room.totalRounds,
                    mode: room.mode
                };
            }

            callback({
                success: true,
                room: sanitizeRoom(room),
                gameState
            });

            // Diğer oyunculara bildir
            io.to(roomCode).emit('room-updated', {
                room: sanitizeRoom(room)
            });

            // Reconnect bildirimi gönder
            socket.to(roomCode).emit('player-reconnected', {
                playerName: player.name
            });
        } catch (err) {
            console.error('Yeniden bağlanma hatası:', err);
            callback({ success: false, error: 'Yeniden bağlanılamadı.' });
        }
    });

    // ---- Oda Oluştur ----
    socket.on('create-room', ({ hostName }, callback) => {
        try {
            const { room, playerId } = roomManager.createRoom(hostName, socket.id);
            socket.join(room.code);

            console.log(`Oda oluşturuldu: ${room.code} (Host: ${hostName})`);

            callback({
                success: true,
                roomCode: room.code,
                playerId,
                room: sanitizeRoom(room)
            });
        } catch (err) {
            console.error('Oda oluşturma hatası:', err);
            callback({ success: false, error: 'Oda oluşturulamadı.' });
        }
    });

    // ---- Odaya Katıl ----
    socket.on('join-room', ({ code, playerName }, callback) => {
        try {
            const upperCode = code.toUpperCase();
            const room = roomManager.getRoom(upperCode);

            // Aynı isimle disconnected oyuncu varsa reconnect yap
            if (room) {
                const disconnectedPlayer = room.players.find(
                    p => p.name.toLowerCase() === playerName.toLowerCase() && !p.connected
                );
                if (disconnectedPlayer) {
                    // Reconnect
                    disconnectedPlayer.socketId = socket.id;
                    disconnectedPlayer.connected = true;
                    roomManager.socketToRoom.set(socket.id, { roomCode: upperCode, playerId: disconnectedPlayer.id });

                    if (disconnectedPlayer.id === room.hostId) {
                        room.hostSocketId = socket.id;
                    }

                    socket.join(upperCode);
                    console.log(`${playerName} tekrar bağlandı: ${upperCode}`);

                    // Oyun devam ediyorsa game state gönder
                    let gameState = null;
                    if (room.state === 'playing' && room.assignments && room.assignments[disconnectedPlayer.id]) {
                        gameState = {
                            word: room.assignments[disconnectedPlayer.id].word,
                            isBluff: room.assignments[disconnectedPlayer.id].isBluff,
                            round: room.currentRound,
                            totalRounds: room.totalRounds,
                            mode: room.mode
                        };
                    }

                    io.to(upperCode).emit('room-updated', {
                        room: sanitizeRoom(room)
                    });

                    callback({
                        success: true,
                        roomCode: upperCode,
                        playerId: disconnectedPlayer.id,
                        room: sanitizeRoom(room),
                        gameState
                    });
                    return;
                }
            }

            const result = roomManager.joinRoom(upperCode, playerName, socket.id);

            if (result.error) {
                callback({ success: false, error: result.error });
                return;
            }

            socket.join(result.room.code);

            console.log(`${playerName} odaya katıldı: ${result.room.code}`);

            // Odadaki herkese güncel oyuncu listesini gönder
            io.to(result.room.code).emit('room-updated', {
                room: sanitizeRoom(result.room)
            });

            callback({
                success: true,
                roomCode: result.room.code,
                playerId: result.playerId,
                room: sanitizeRoom(result.room)
            });
        } catch (err) {
            console.error('Odaya katılma hatası:', err);
            callback({ success: false, error: 'Odaya katılamadı.' });
        }
    });

    // ---- Oyunu Başlat ----
    socket.on('start-game', ({ roomCode, mode, wordType }, callback) => {
        try {
            const room = roomManager.getRoom(roomCode);
            if (!room) {
                callback({ success: false, error: 'Oda bulunamadı.' });
                return;
            }

            // Sadece host başlatabilir
            const playerInfo = roomManager.getPlayerInfo(socket.id);
            if (!playerInfo || playerInfo.playerId !== room.hostId) {
                callback({ success: false, error: 'Sadece masa sahibi oyunu başlatabilir.' });
                return;
            }

            const result = GameEngine.startGame(room, mode, wordType || 'similar');
            if (result.error) {
                callback({ success: false, error: result.error });
                return;
            }

            console.log(`Oyun başladı: ${roomCode} (Mod: ${mode}, Kelime Türü: ${wordType || 'similar'}, Blöfçi: ${result.bluffCount})`);

            // Her oyuncuya kendi kelimesini gönder
            const activePlayers = room.players.filter(p => p.connected);
            for (const player of activePlayers) {
                const assignment = result.assignments[player.id];
                if (player.socketId) {
                    io.to(player.socketId).emit('game-started', {
                        word: assignment.word,
                        isBluff: assignment.isBluff,
                        round: 1,
                        totalRounds: room.totalRounds,
                        mode
                    });
                }
            }

            callback({ success: true });
        } catch (err) {
            console.error('Oyun başlatma hatası:', err);
            callback({ success: false, error: 'Oyun başlatılamadı.' });
        }
    });

    // ---- Turu Sonlandır ----
    socket.on('end-round', ({ roomCode }, callback) => {
        try {
            const room = roomManager.getRoom(roomCode);
            if (!room) {
                callback({ success: false, error: 'Oda bulunamadı.' });
                return;
            }

            const playerInfo = roomManager.getPlayerInfo(socket.id);
            if (!playerInfo || playerInfo.playerId !== room.hostId) {
                callback({ success: false, error: 'Sadece masa sahibi turu sonlandırabilir.' });
                return;
            }

            const result = GameEngine.endRound(room);

            console.log(`Tur sonlandırıldı: ${roomCode} → ${result.nextState} (Tur ${result.round})`);

            io.to(roomCode).emit('round-ended', {
                nextState: result.nextState,
                round: result.round,
                totalRounds: room.totalRounds
            });

            callback({ success: true, ...result });
        } catch (err) {
            console.error('Tur sonlandırma hatası:', err);
            callback({ success: false, error: 'Tur sonlandırılamadı.' });
        }
    });

    // ---- Kelime Değiştirme İsteği (Host) ----
    socket.on('skip-word-request', ({ roomCode }, callback) => {
        try {
            const room = roomManager.getRoom(roomCode);
            if (!room) {
                callback({ success: false, error: 'Oda bulunamadı.' });
                return;
            }

            const playerInfo = roomManager.getPlayerInfo(socket.id);
            if (!playerInfo || playerInfo.playerId !== room.hostId) {
                callback({ success: false, error: 'Sadece masa sahibi kelime değiştirme önerebilir.' });
                return;
            }

            if (room.state !== 'playing') {
                callback({ success: false, error: 'Kelime sadece oyun sırasında değiştirilebilir.' });
                return;
            }

            if (room.skipVoteActive) {
                callback({ success: false, error: 'Zaten bir oylama devam ediyor.' });
                return;
            }

            // Oylama başlat
            room.skipVoteActive = true;
            room.skipVotes = {};
            // Host otomatik evet oyu verir
            room.skipVotes[playerInfo.playerId] = true;

            const activePlayers = room.players.filter(p => p.connected);

            console.log(`Kelime değiştirme oylaması: ${roomCode}`);

            io.to(roomCode).emit('skip-word-vote-started', {
                requestedBy: playerInfo.playerId,
                votedCount: 1,
                totalPlayers: activePlayers.length
            });

            // Tek oyuncu varsa veya host tek kişi ise otomatik geç
            if (activePlayers.length <= 1) {
                const result = GameEngine.changeWord(room);
                room.skipVoteActive = false;
                room.skipVotes = {};

                for (const player of activePlayers) {
                    const assignment = result.assignments[player.id];
                    if (player.socketId) {
                        io.to(player.socketId).emit('word-changed', {
                            word: assignment.word,
                            isBluff: assignment.isBluff
                        });
                    }
                }
            }

            callback({ success: true });
        } catch (err) {
            console.error('Kelime değiştirme hatası:', err);
            callback({ success: false, error: 'İşlem başarısız.' });
        }
    });

    // ---- Kelime Değiştirme Oyu ----
    socket.on('skip-word-vote', ({ roomCode, vote }, callback) => {
        try {
            const room = roomManager.getRoom(roomCode);
            if (!room || !room.skipVoteActive) {
                callback({ success: false, error: 'Aktif oylama bulunamadı.' });
                return;
            }

            const playerInfo = roomManager.getPlayerInfo(socket.id);
            if (!playerInfo) {
                callback({ success: false, error: 'Geçersiz oyuncu.' });
                return;
            }

            room.skipVotes[playerInfo.playerId] = vote;

            const activePlayers = room.players.filter(p => p.connected);
            const votedCount = Object.keys(room.skipVotes).length;
            const yesCount = Object.values(room.skipVotes).filter(v => v === true).length;

            // Oy durumunu bildir
            io.to(roomCode).emit('skip-word-vote-update', {
                votedCount,
                totalPlayers: activePlayers.length
            });

            // Herkes oy verdi mi?
            if (votedCount >= activePlayers.length) {
                const majority = yesCount > activePlayers.length / 2;

                if (majority) {
                    // Kelimeyi değiştir
                    const result = GameEngine.changeWord(room);
                    room.skipVoteActive = false;
                    room.skipVotes = {};

                    // Yeni assignments'ı kaydet
                    room.assignments = { ...room.assignments, ...result.assignments };

                    console.log(`Kelime değiştirildi: ${roomCode} → ${result.word}`);

                    for (const player of activePlayers) {
                        const assignment = result.assignments[player.id];
                        if (player.socketId) {
                            io.to(player.socketId).emit('word-changed', {
                                word: assignment.word,
                                isBluff: assignment.isBluff,
                                approved: true
                            });
                        }
                    }
                } else {
                    // Reddedildi
                    room.skipVoteActive = false;
                    room.skipVotes = {};

                    io.to(roomCode).emit('skip-word-rejected', {
                        yesCount,
                        noCount: votedCount - yesCount
                    });
                }
            }

            callback({ success: true });
        } catch (err) {
            console.error('Skip vote hatası:', err);
            callback({ success: false, error: 'Oy verilemedi.' });
        }
    });

    // ---- Oy Ver ----
    socket.on('submit-vote', ({ roomCode, targetId }, callback) => {
        try {
            const room = roomManager.getRoom(roomCode);
            if (!room) {
                callback({ success: false, error: 'Oda bulunamadı.' });
                return;
            }

            const playerInfo = roomManager.getPlayerInfo(socket.id);
            if (!playerInfo) {
                callback({ success: false, error: 'Geçersiz oyuncu.' });
                return;
            }

            const result = VotingSystem.submitVote(room, playerInfo.playerId, targetId);
            if (result.error) {
                callback({ success: false, error: result.error });
                return;
            }

            // Kalan oy sayısını hesapla
            const activePlayers = room.players.filter(p => p.connected);
            const votes = room.state === 'revoting' ? room.revoteVotes : room.votes;
            const votedCount = Object.keys(votes).length;

            io.to(roomCode).emit('vote-update', {
                votedCount,
                totalPlayers: activePlayers.length
            });

            console.log(`Oy verildi: ${roomCode} (${votedCount}/${activePlayers.length})`);

            if (result.allVoted) {
                // Tüm oylar verildi, sonucu hesapla
                let gameResult;
                if (room.mode === 'fun' && room.twist &&
                    (room.twist.id === 'all_innocent' || room.twist.id === 'all_suspect')) {
                    gameResult = VotingSystem.calculateFunResult(room);
                } else {
                    gameResult = VotingSystem.calculateResult(room);
                }

                if (gameResult.needsRevote) {
                    // Beraberlik - tekrar oylama
                    io.to(roomCode).emit('revote-needed', {
                        tiedPlayers: gameResult.tiedPlayers.map(id => {
                            const player = room.players.find(p => p.id === id);
                            return { id: player.id, name: player.name };
                        }),
                        voteCounts: gameResult.voteCounts,
                        reason: gameResult.reason
                    });
                } else {
                    // Sonuç - kelime dağılımını da gönder
                    const playerNames = {};
                    room.players.forEach(p => { playerNames[p.id] = p.name; });

                    // Her oyuncunun kelimesini hazırla
                    const wordAssignments = {};
                    if (room.assignments) {
                        for (const [id, assignment] of Object.entries(room.assignments)) {
                            wordAssignments[id] = assignment.word;
                        }
                    }

                    io.to(roomCode).emit('game-result', {
                        ...gameResult,
                        playerNames,
                        word: room.word,
                        bluffWord: room.bluffWord,
                        wordAssignments
                    });
                }
            }

            callback({ success: true });
        } catch (err) {
            console.error('Oy verme hatası:', err);
            callback({ success: false, error: 'Oy verilemedi.' });
        }
    });

    // ---- Tekrar Oyna ----
    socket.on('play-again', ({ roomCode }, callback) => {
        try {
            const room = roomManager.resetRoom(roomCode);
            if (!room) {
                callback({ success: false, error: 'Oda bulunamadı.' });
                return;
            }

            console.log(`Tekrar oyna: ${roomCode}`);

            io.to(roomCode).emit('room-updated', {
                room: sanitizeRoom(room)
            });

            callback({ success: true });
        } catch (err) {
            console.error('Tekrar oynama hatası:', err);
            callback({ success: false, error: 'İşlem başarısız.' });
        }
    });

    // ---- Bağlantı Kopması ----
    socket.on('disconnect', () => {
        console.log(`Bağlantı koptu: ${socket.id}`);

        const result = roomManager.removePlayer(socket.id);
        if (result && !result.deleted) {
            io.to(result.room.code).emit('room-updated', {
                room: sanitizeRoom(result.room)
            });

            if (result.disconnectedPlayer) {
                io.to(result.room.code).emit('player-disconnected', {
                    playerName: result.disconnectedPlayer.name
                });
            }
        }
    });
});

// Hassas bilgileri çıkararak odayı gönder
function sanitizeRoom(room) {
    return {
        code: room.code,
        hostId: room.hostId,
        state: room.state,
        mode: room.mode,
        currentRound: room.currentRound,
        totalRounds: room.totalRounds,
        twist: room.twist,
        timerDuration: room.timerDuration,
        silentRound: room.silentRound,
        revoteEligible: room.revoteEligible,
        skipVoteActive: room.skipVoteActive || false,
        players: room.players
            .filter(p => p.connected)
            .map(p => ({
                id: p.id,
                name: p.name,
                isHost: p.isHost,
                connected: p.connected
            }))
    };
}

// Her 30 dakikada eski odaları temizle
setInterval(() => {
    roomManager.cleanup();
}, 30 * 60 * 1000);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`🎭 Blöf Oyunu sunucusu çalışıyor: http://localhost:${PORT}`);
});
