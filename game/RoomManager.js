const { generateRoomCode, generatePlayerId } = require('../utils/helpers');

class RoomManager {
    constructor() {
        // Map<roomCode, Room>
        this.rooms = new Map();
        // Map<socketId, { roomCode, playerId }>
        this.socketToRoom = new Map();
    }

    createRoom(hostName, socketId) {
        let code;
        do {
            code = generateRoomCode();
        } while (this.rooms.has(code));

        const playerId = generatePlayerId();

        const room = {
            code,
            hostId: playerId,
            hostSocketId: socketId,
            players: [
                {
                    id: playerId,
                    name: hostName,
                    socketId,
                    isHost: true,
                    connected: true
                }
            ],
            state: 'lobby', // lobby | playing | voting | revoting | result
            mode: 'standard', // standard | fun
            wordType: 'similar', // similar | random
            currentRound: 0,
            totalRounds: 3,
            word: null,
            bluffPlayerIds: [],
            twist: null,
            votes: {},
            revoteEligible: [],
            revoteVotes: {},
            timerDuration: null,
            silentRound: null,
            usedWords: [], // Kullanılmış kelimeler (tekrar engelleme)
            createdAt: Date.now()
        };

        this.rooms.set(code, room);
        this.socketToRoom.set(socketId, { roomCode: code, playerId });

        return { room, playerId };
    }

    joinRoom(code, playerName, socketId) {
        const room = this.rooms.get(code);
        if (!room) {
            return { error: 'Oda bulunamadı. Kodu kontrol edin.' };
        }
        if (room.state !== 'lobby') {
            return { error: 'Oyun zaten başlamış. Yeni oyuncular katılamaz.' };
        }

        // Aynı isimde oyuncu kontrolü
        const nameExists = room.players.some(
            p => p.name.toLowerCase() === playerName.toLowerCase() && p.connected
        );
        if (nameExists) {
            return { error: 'Bu isim zaten kullanılıyor. Farklı bir isim seçin.' };
        }

        const playerId = generatePlayerId();
        const player = {
            id: playerId,
            name: playerName,
            socketId,
            isHost: false,
            connected: true
        };

        room.players.push(player);
        this.socketToRoom.set(socketId, { roomCode: code, playerId });

        return { room, playerId, player };
    }

    getRoom(code) {
        return this.rooms.get(code) || null;
    }

    getPlayerInfo(socketId) {
        return this.socketToRoom.get(socketId) || null;
    }

    removePlayer(socketId) {
        const info = this.socketToRoom.get(socketId);
        if (!info) return null;

        const { roomCode, playerId } = info;
        const room = this.rooms.get(roomCode);
        if (!room) return null;

        // Oyuncuyu bağlantısız olarak işaretle
        const player = room.players.find(p => p.id === playerId);
        if (player) {
            player.connected = false;
            player.socketId = null;
        }

        this.socketToRoom.delete(socketId);

        // Bağlı oyuncu kalmadıysa odayı sil
        const connectedPlayers = room.players.filter(p => p.connected);
        if (connectedPlayers.length === 0) {
            this.rooms.delete(roomCode);
            return { room, deleted: true };
        }

        // Host ayrıldıysa yeni host ata
        if (playerId === room.hostId && connectedPlayers.length > 0) {
            const newHost = connectedPlayers[0];
            newHost.isHost = true;
            room.hostId = newHost.id;
            room.hostSocketId = newHost.socketId;
        }

        return { room, deleted: false, disconnectedPlayer: player };
    }

    // Oyuncuyu yeniden bağla (reconnect)
    reconnectPlayer(code, playerId, socketId) {
        const room = this.rooms.get(code);
        if (!room) return null;

        const player = room.players.find(p => p.id === playerId);
        if (!player) return null;

        player.connected = true;
        player.socketId = socketId;
        this.socketToRoom.set(socketId, { roomCode: code, playerId });

        if (player.id === room.hostId) {
            room.hostSocketId = socketId;
        }

        return { room, player };
    }

    // Lobiye sıfırla (tekrar oyna)
    resetRoom(code) {
        const room = this.rooms.get(code);
        if (!room) return null;

        room.state = 'lobby';
        room.currentRound = 0;
        room.word = null;
        room.bluffPlayerIds = [];
        room.twist = null;
        room.votes = {};
        room.revoteEligible = [];
        room.revoteVotes = {};
        room.timerDuration = null;
        room.silentRound = null;
        // usedWords sıfırlanmaz - aynı masada kelime tekrarı olmasın

        return room;
    }

    // Clean up - 2 saatten eski odaları sil
    cleanup() {
        const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000;
        for (const [code, room] of this.rooms) {
            if (room.createdAt < twoHoursAgo) {
                // Socket mapping'leri de temizle
                for (const player of room.players) {
                    if (player.socketId) {
                        this.socketToRoom.delete(player.socketId);
                    }
                }
                this.rooms.delete(code);
            }
        }
    }
}

module.exports = RoomManager;
