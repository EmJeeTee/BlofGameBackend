class VotingSystem {
    // Oy ver
    static submitVote(room, voterId, targetId) {
        const voter = room.players.find(p => p.id === voterId);
        const target = room.players.find(p => p.id === targetId);

        if (!voter || !target) {
            return { error: 'Geçersiz oyuncu.' };
        }
        if (voterId === targetId) {
            return { error: 'Kendinize oy veremezsiniz.' };
        }

        const isRevote = room.state === 'revoting';

        if (isRevote) {
            // Revote'da sadece eligible oyunculara oy verilebilir
            if (!room.revoteEligible.includes(targetId)) {
                return { error: 'Bu oyuncuya oy veremezsiniz.' };
            }
            room.revoteVotes[voterId] = targetId;
        } else {
            room.votes[voterId] = targetId;
        }

        // Tüm bağlı oyuncular oy verdi mi kontrol et
        const activePlayers = room.players.filter(p => p.connected);
        const votes = isRevote ? room.revoteVotes : room.votes;
        const allVoted = activePlayers.every(p => votes[p.id] !== undefined);

        return { success: true, allVoted };
    }

    // Oylama sonuçlarını hesapla
    static calculateResult(room) {
        const isRevote = room.state === 'revoting';
        const votes = isRevote ? room.revoteVotes : room.votes;

        // Oy sayımı
        const voteCounts = {};
        for (const targetId of Object.values(votes)) {
            voteCounts[targetId] = (voteCounts[targetId] || 0) + 1;
        }

        // En yüksek oy
        const maxVotes = Math.max(...Object.values(voteCounts), 0);

        if (maxVotes === 0) {
            // Kimse oy almadı - Blöfçi kazanır
            room.state = 'result';
            return {
                winner: 'bluffer',
                bluffPlayerIds: room.bluffPlayerIds,
                voteCounts,
                reason: 'Kimse oy almadı. Blöfçi kazandı!'
            };
        }

        // En çok oy alanlar
        const topVoted = Object.entries(voteCounts)
            .filter(([_, count]) => count === maxVotes)
            .map(([playerId]) => playerId);

        if (topVoted.length === 1) {
            // Tek bir kişi en çok oyu aldı
            const eliminatedId = topVoted[0];
            const isBluffer = room.bluffPlayerIds.includes(eliminatedId);

            room.state = 'result';

            if (isBluffer) {
                return {
                    winner: 'players',
                    eliminatedId,
                    bluffPlayerIds: room.bluffPlayerIds,
                    voteCounts,
                    reason: `${room.players.find(p => p.id === eliminatedId)?.name} blöfçiydi! Diğer oyuncular kazandı! 🎉`
                };
            } else {
                return {
                    winner: 'bluffer',
                    eliminatedId,
                    bluffPlayerIds: room.bluffPlayerIds,
                    voteCounts,
                    reason: `${room.players.find(p => p.id === eliminatedId)?.name} blöfçi değildi! Blöfçi kazandı! 🎭`
                };
            }
        } else {
            // Beraberlik
            if (isRevote) {
                // İkinci beraberlik - Blöfçi kazanır
                room.state = 'result';
                return {
                    winner: 'bluffer',
                    bluffPlayerIds: room.bluffPlayerIds,
                    voteCounts,
                    tiedPlayers: topVoted,
                    reason: 'İkinci beraberlik! Blöfçi kazandı! 🎭'
                };
            } else {
                // İlk beraberlik - Tekrar oylama
                room.state = 'revoting';
                room.revoteEligible = topVoted;
                room.revoteVotes = {};
                return {
                    winner: null,
                    tiedPlayers: topVoted,
                    voteCounts,
                    reason: 'Beraberlik! Sadece berabere kalan oyuncular arasında tekrar oylama yapılacak.',
                    needsRevote: true,
                    revoteEligible: topVoted
                };
            }
        }
    }

    // Eğlence modu: "Herkes Masum" twist'i - kimse blöfçi değilse
    // Oylama sonucunda en çok oy alan kişi elenir, herkes kazanır veya kaybeder
    static calculateFunResult(room) {
        if (room.twist && room.twist.id === 'all_innocent') {
            const votes = room.state === 'revoting' ? room.revoteVotes : room.votes;
            const voteCounts = {};
            for (const targetId of Object.values(votes)) {
                voteCounts[targetId] = (voteCounts[targetId] || 0) + 1;
            }

            room.state = 'result';
            return {
                winner: 'nobody',
                bluffPlayerIds: [],
                voteCounts,
                reason: 'Sürpriz! Kimse blöfçi değildi! Herkes masumdu! 😇'
            };
        }

        if (room.twist && room.twist.id === 'all_suspect') {
            const votes = room.state === 'revoting' ? room.revoteVotes : room.votes;
            const voteCounts = {};
            for (const targetId of Object.values(votes)) {
                voteCounts[targetId] = (voteCounts[targetId] || 0) + 1;
            }

            room.state = 'result';
            return {
                winner: 'chaos',
                bluffPlayerIds: room.bluffPlayerIds,
                voteCounts,
                playerWords: room.playerWords,
                reason: 'Kaos modu! Herkes farklı kelime görüyordu! 🤔'
            };
        }

        // Diğer twist'ler standart hesaplama
        return VotingSystem.calculateResult(room);
    }
}

module.exports = VotingSystem;
