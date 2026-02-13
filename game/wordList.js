// Türkçe kelime havuzu - kategorilere ayrılmış
const wordCategories = {
  hayvanlar: [
    'Kedi', 'Köpek', 'Aslan', 'Kaplan', 'Fil', 'Zürafa', 'Penguen', 'Kartal',
    'Yunus', 'Kaplumbağa', 'Tavşan', 'Papağan', 'Flamingo', 'Timsah', 'Panda',
    'Kurt', 'Tilki', 'Baykuş', 'Arı', 'Kelebek'
  ],
  yiyecekler: [
    'Pizza', 'Hamburger', 'Sushi', 'Lahmacun', 'Döner', 'Börek', 'Baklava',
    'Çikolata', 'Dondurma', 'Makarna', 'Pilav', 'Kebap', 'Waffle', 'Popcorn',
    'Patates', 'Mango', 'Çilek', 'Karpuz', 'Portakal', 'Ananas'
  ],
  meslekler: [
    'Doktor', 'Pilot', 'Astronot', 'Aşçı', 'Ressam', 'Müzisyen', 'Mimar',
    'Kaptan', 'Dedektif', 'Cerrah', 'Fotoğrafçı', 'Dansçı', 'Sihirbaz',
    'Kasap', 'Berber', 'Garson', 'Çiftçi', 'Tesisatçı', 'Arkeolog', 'Hemşire'
  ],
  sporlar: [
    'Futbol', 'Basketbol', 'Tenis', 'Voleybol', 'Yüzme', 'Boks', 'Karate',
    'Okçuluk', 'Eskrim', 'Güreş', 'Bisiklet', 'Kayak', 'Sörf', 'Golf',
    'Badminton', 'Hokey', 'Kriket', 'Rugby', 'Atletizm', 'Jimnastik'
  ],
  nesneler: [
    'Masa', 'Sandalye', 'Telefon', 'Ayna', 'Saat', 'Lamba', 'Kitap',
    'Kalem', 'Gözlük', 'Şemsiye', 'Bavul', 'Anahtar', 'Mum', 'Halı',
    'Yastık', 'Bardak', 'Tabak', 'Çatal', 'Makas', 'Dürbün'
  ],
  yerler: [
    'Hastane', 'Okul', 'Sinema', 'Müze', 'Kütüphane', 'Havalimanı',
    'Stadyum', 'Restoran', 'Otel', 'Plaj', 'Orman', 'Çöl', 'Ada',
    'Şelale', 'Mağara', 'Köprü', 'Kale', 'Saray', 'Cami', 'Fener'
  ],
  kavramlar: [
    'Özgürlük', 'Barış', 'Cesaret', 'Macera', 'Hayal', 'Nostalji',
    'Gizem', 'Sürpriz', 'Tutku', 'Umut', 'Merak', 'Gurur', 'Kıskançlık',
    'Sabır', 'Erdem', 'Şans', 'Kader', 'İlham', 'Zafer', 'Hüzün'
  ]
};

// Eğlence modu: Kelime Yakını twist'i için benzer kelime çiftleri
const similarWordPairs = [
  ['Kedi', 'Köpek'],
  ['Pizza', 'Hamburger'],
  ['Doktor', 'Hemşire'],
  ['Futbol', 'Basketbol'],
  ['Masa', 'Sandalye'],
  ['Kalem', 'Silgi'],
  ['Güneş', 'Ay'],
  ['Deniz', 'Okyanus'],
  ['Dağ', 'Tepe'],
  ['Yağmur', 'Kar'],
  ['Gitar', 'Piyano'],
  ['Araba', 'Kamyon'],
  ['Elma', 'Armut'],
  ['Aslan', 'Kaplan'],
  ['Sinema', 'Tiyatro'],
  ['Şapka', 'Bere'],
  ['Çay', 'Kahve'],
  ['Sabah', 'Akşam'],
  ['Yaz', 'Kış'],
  ['Gül', 'Papatya']
];

// Tüm kelimeleri düz liste olarak al
function getAllWords() {
  const allWords = [];
  for (const category of Object.values(wordCategories)) {
    allWords.push(...category);
  }
  return allWords;
}

// Rastgele kelime seç
function getRandomWord(excludeWords = []) {
  const allWords = getAllWords().filter(w => !excludeWords.includes(w));
  return allWords[Math.floor(Math.random() * allWords.length)];
}

// Benzer kelime çifti seç (Kelime Yakını twist'i için)
function getRandomSimilarPair() {
  const pair = similarWordPairs[Math.floor(Math.random() * similarWordPairs.length)];
  return { realWord: pair[0], similarWord: pair[1] };
}

module.exports = {
  wordCategories,
  similarWordPairs,
  getAllWords,
  getRandomWord,
  getRandomSimilarPair
};
