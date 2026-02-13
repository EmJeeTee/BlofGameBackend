const { getRandomWord, getRandomSimilarPair } = require('./wordList');
const { shuffleArray, pickRandom } = require('../utils/helpers');

// Eğlence modu twist'leri
const TWISTS = [
    {
        id: 'double_agent',
        name: 'Çift Ajan',
        emoji: '🕵️',
        description: 'Blöfçi sayısı 2 katına çıktı!'
    },
    {
        id: 'all_innocent',
        name: 'Herkes Masum',
        emoji: '😇',
        description: 'Kimse blöfçi değil! Herkes aynı kelimeyi görüyor.'
    },
    {
        id: 'all_suspect',
        name: 'Herkes Şüpheli',
        emoji: '🤔',
        description: 'Herkes farklı kelime görüyor!'
    },
    {
        id: 'reverse',
        name: 'Ters Köşe',
        emoji: '🔄',
        description: 'Blöfçiler çoğunlukta, masumlar azınlıkta!'
    },
    {
        id: 'silent_round',
        name: 'Sessiz Tur',
        emoji: '🤫',
        description: 'Bir turda konuşma yasak! Sadece mimik ve jestler.'
    },
    {
        id: 'time_pressure',
        name: 'Zaman Baskısı',
        emoji: '⏱️',
        description: 'Her tur 30 saniye ile sınırlı!'
    },
    {
        id: 'similar_word',
        name: 'Kelime Yakını',
        emoji: '🔤',
        description: 'Blöfçi tamamen farklı kelime yerine benzer bir kelime görüyor!'
    }
];

class GameEngine {
    // Standart modda blöfçi sayısını hesapla
    static getStandardBluffCount(playerCount) {
        // 2-3 oyuncu: 1 blöfçi
        // 4-7 oyuncu: 1 blöfçi
        // 8-11 oyuncu: 2 blöfçi
        // 12-15 oyuncu: 3 blöfçi
        // vs.
        return Math.max(1, Math.floor(playerCount / 4));
    }

    // Oyunu başlat
    static startGame(room, mode = 'standard') {
        room.mode = mode;
        room.state = 'playing';
        room.currentRound = 1;
        room.votes = {};
        room.revoteEligible = [];
        room.revoteVotes = {};

        const activePlayers = room.players.filter(p => p.connected);
        const playerCount = activePlayers.length;

        if (playerCount < 2) {
            return { error: 'En az 2 oyuncu gerekli.' };
        }

        let bluffCount;
        let word;
        let twist = null;
        let bluffWord = null;

        if (mode === 'fun') {
            // Eğlence modu - rastgele twist seç
            twist = TWISTS[Math.floor(Math.random() * TWISTS.length)];
            room.twist = twist;

            switch (twist.id) {
                case 'double_agent':
                    bluffCount = Math.min(
                        Math.max(2, GameEngine.getStandardBluffCount(playerCount) * 2),
                        playerCount - 1
                    );
                    word = getRandomWord();
                    break;

                case 'all_innocent':
                    bluffCount = 0;
                    word = getRandomWord();
                    break;

                case 'all_suspect':
                    bluffCount = playerCount; // Herkes farklı kelime
                    word = null;
                    break;

                case 'reverse':
                    // Masumlar azınlıkta
                    const innocentCount = Math.max(1, Math.floor(playerCount / 4));
                    bluffCount = playerCount - innocentCount;
                    word = getRandomWord();
                    break;

                case 'silent_round':
                    bluffCount = GameEngine.getStandardBluffCount(playerCount);
                    word = getRandomWord();
                    room.silentRound = Math.floor(Math.random() * 3) + 1; // 1, 2 veya 3
                    break;

                case 'time_pressure':
                    bluffCount = GameEngine.getStandardBluffCount(playerCount);
                    word = getRandomWord();
                    room.timerDuration = 30; // 30 saniye
                    break;

                case 'similar_word':
                    bluffCount = GameEngine.getStandardBluffCount(playerCount);
                    const pair = getRandomSimilarPair();
                    word = pair[0];
                    bluffWord = pair[1];
                    break;

                default:
                    bluffCount = GameEngine.getStandardBluffCount(playerCount);
                    word = getRandomWord();
            }
        } else {
            // Standart mod
            bluffCount = GameEngine.getStandardBluffCount(playerCount);
            word = getRandomWord();
        }

        room.word = word;

        // Blöfçileri seç
        if (twist && twist.id === 'all_suspect') {
            // Herkes farklı kelime görüyor
            room.bluffPlayerIds = activePlayers.map(p => p.id);
            const allWords = require('./wordList').getAllWords();
            const shuffled = require('../utils/helpers').shuffleArray([...allWords]);
            const playerWords = {};
            for (let i = 0; i < activePlayers.length; i++) {
                playerWords[activePlayers[i].id] = shuffled[i % shuffled.length];
            }
            room.playerWords = playerWords;
        } else if (bluffCount === 0) {
            // Herkes masum
            room.bluffPlayerIds = [];
        } else {
            const bluffPlayers = pickRandom(activePlayers, bluffCount);
            room.bluffPlayerIds = bluffPlayers.map(p => p.id);
        }

        room.bluffWord = bluffWord;

        // Her oyuncunun kelimesini hesapla
        const assignments = {};
        for (const player of activePlayers) {
            if (twist && twist.id === 'all_suspect') {
                assignments[player.id] = {
                    word: room.playerWords[player.id],
                    isBluff: true
                };
            } else if (room.bluffPlayerIds.includes(player.id)) {
                assignments[player.id] = {
                    word: bluffWord || 'BLÖF',
                    isBluff: true
                };
            } else {
                assignments[player.id] = {
                    word: word,
                    isBluff: false
                };
            }
        }

        return {
            success: true,
            assignments,
            twist,
            bluffCount,
            timerDuration: room.timerDuration,
            silentRound: room.silentRound
        };
    }

    // Turu sonlandır
    static endRound(room) {
        if (room.currentRound >= room.totalRounds) {
            room.state = 'voting';
            return { nextState: 'voting', round: room.currentRound };
        }

        room.currentRound += 1;
        return { nextState: 'playing', round: room.currentRound };
    }

    // Twist listesini dön
    static getTwists() {
        return TWISTS;
    }
}

module.exports = GameEngine;
