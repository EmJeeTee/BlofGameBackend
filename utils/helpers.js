const { v4: uuidv4 } = require('uuid');

// 6 haneli alfanumerik oda kodu üret
function generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Karıştırılabilecek karakterler çıkarıldı (0,O,1,I)
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Oyuncu ID üret
function generatePlayerId() {
    return uuidv4().slice(0, 8);
}

// Diziyi karıştır (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Rastgele N eleman seç
function pickRandom(array, n) {
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, n);
}

module.exports = {
    generateRoomCode,
    generatePlayerId,
    shuffleArray,
    pickRandom
};
