// Türkçe kelime havuzu - Kategorilere ayrılmış geniş liste
const wordCategories = {
  yiyecekler: [
    'Pizza', 'Hamburger', 'Sushi', 'Döner', 'Lahmacun', 'Pide', 'Börek', 'Çiğ Köfte',
    'Baklava', 'Künefe', 'Tavuk', 'Kebap', 'Mantı', 'Pilav', 'Makarna', 'Salata',
    'Çorba', 'Köfte', 'Sarma', 'Gözleme', 'Kumpir', 'Waffle', 'Krep', 'Simit',
    'Poğaça', 'Tost', 'Sandviç', 'Çikolata', 'Dondurma', 'Pasta', 'Kurabiye',
    'Patates Kızartması', 'Lokum', 'Helva', 'Sucuk', 'Peynir', 'Zeytin', 'Bal',
    'Reçel', 'Yumurta', 'Ekmek', 'Midye', 'Kokoreç', 'İskender', 'Tantuni',
    'Karnıyarık', 'İmam Bayıldı', 'Hünkar Beğendi', 'Mercimek', 'Fasulye'
  ],
  içecekler: [
    'Çay', 'Kahve', 'Ayran', 'Limonata', 'Kola', 'Meyve Suyu', 'Smoothie',
    'Türk Kahvesi', 'Sahlep', 'Boza', 'Şalgam', 'Süt', 'Soda', 'Gazoz',
    'Milkshake', 'Frappe', 'Latte', 'Espresso', 'Cappuccino', 'Mojito'
  ],
  hayvanlar: [
    'Kedi', 'Köpek', 'Aslan', 'Kaplan', 'Fil', 'Zürafa', 'Penguen', 'Yunus',
    'Kartal', 'Papağan', 'Tavşan', 'At', 'İnek', 'Koyun', 'Keçi', 'Maymun',
    'Panda', 'Kurt', 'Tilki', 'Ayı', 'Balina', 'Köpekbalığı', 'Ahtapot',
    'Kaplumbağa', 'Yılan', 'Timsah', 'Flamingo', 'Baykuş', 'Karga', 'Arı',
    'Kelebek', 'Karınca', 'Örümcek', 'Sincap', 'Kirpi', 'Hamster', 'Koala',
    'Kanguru', 'Zebra', 'Gergedan', 'Suaygırı', 'Leopar', 'Çita', 'Deve',
    'Tavuk', 'Ördek', 'Güvercin', 'Serçe', 'Şahin', 'Akbaba'
  ],
  meslekler: [
    'Doktor', 'Avukat', 'Mühendis', 'Öğretmen', 'Pilot', 'Aşçı', 'Polis',
    'İtfaiyeci', 'Astronot', 'Mimar', 'Hemşire', 'Diş Hekimi', 'Eczacı',
    'Gazeteci', 'Futbolcu', 'Müzisyen', 'Ressam', 'Aktör', 'Yönetmen',
    'Fotoğrafçı', 'Kasap', 'Berber', 'Terzi', 'Çiftçi', 'Kaptan',
    'Garson', 'Şoför', 'Postacı', 'Dalgıç', 'Cerrah', 'Psikolog',
    'Arkeolog', 'Veteriner', 'Savcı', 'Hakim', 'Profesör', 'Antrenör'
  ],
  spor: [
    'Futbol', 'Basketbol', 'Voleybol', 'Tenis', 'Yüzme', 'Boks', 'Güreş',
    'Atletizm', 'Jimnastik', 'Bisiklet', 'Kayak', 'Snowboard', 'Karate',
    'Judo', 'Tekvando', 'Okçuluk', 'Eskrim', 'Golf', 'Beyzbol', 'Hokey',
    'Rugby', 'Badminton', 'Masa Tenisi', 'Hentbol', 'Kriket', 'Buz Pateni',
    'Sörf', 'Yelken', 'Dalış', 'Paraşüt', 'Dağcılık', 'Bowling', 'Bilardo',
    'Satranç', 'Dart', 'Halter', 'Kürek', 'Kano', 'Triatlon', 'Maraton'
  ],
  ülkeler: [
    'Türkiye', 'Japonya', 'Brezilya', 'İtalya', 'Fransa', 'İspanya', 'Almanya',
    'İngiltere', 'Rusya', 'Kanada', 'Meksika', 'Mısır', 'Hindistan', 'Çin',
    'Avustralya', 'Arjantin', 'Norveç', 'İsveç', 'Yunanistan', 'Portekiz',
    'Hollanda', 'Belçika', 'İsviçre', 'Avusturya', 'Polonya', 'Tayland',
    'Vietnam', 'Güney Kore', 'İran', 'Fas', 'Küba', 'Peru', 'Şili', 'Kolombiya'
  ],
  şehirler: [
    'İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Trabzon', 'Paris',
    'Londra', 'Tokyo', 'New York', 'Roma', 'Barcelona', 'Berlin', 'Amsterdam',
    'Prag', 'Viyana', 'Dubai', 'Singapur', 'Seul', 'Bangkok', 'Venedik',
    'Mardin', 'Kapadokya', 'Bodrum', 'Fethiye', 'Gaziantep', 'Eskişehir'
  ],
  objeler: [
    'Telefon', 'Bilgisayar', 'Televizyon', 'Buzdolabı', 'Çamaşır Makinesi',
    'Araba', 'Bisiklet', 'Uçak', 'Gemi', 'Tren', 'Otobüs', 'Helikopter',
    'Roket', 'Denizaltı', 'Motosiklet', 'Kaykay', 'Scooter', 'Balon',
    'Kitap', 'Kalem', 'Defter', 'Saat', 'Ayna', 'Şemsiye', 'Çanta',
    'Gözlük', 'Anahtar', 'Mum', 'Fener', 'Pusula', 'Dürbün', 'Teleskop',
    'Mikroskop', 'Kamera', 'Mikrofon', 'Kulaklık', 'Pil', 'Şarj Aleti',
    'Terlik', 'Havlu', 'Yastık', 'Yorgan', 'Halı', 'Perde', 'Lamba',
    'Masa', 'Sandalye', 'Koltuk', 'Dolap', 'Raf', 'Çerçeve', 'Vazo'
  ],
  doğa: [
    'Güneş', 'Ay', 'Yıldız', 'Bulut', 'Yağmur', 'Kar', 'Gökkuşağı', 'Şimşek',
    'Rüzgar', 'Fırtına', 'Deprem', 'Yanardağ', 'Tsunami', 'Kasırga', 'Tornado',
    'Orman', 'Çöl', 'Okyanus', 'Deniz', 'Göl', 'Nehir', 'Şelale', 'Dağ',
    'Vadi', 'Mağara', 'Ada', 'Buzul', 'Plaj', 'Kayalık', 'Bataklık',
    'Çimen', 'Çiçek', 'Gül', 'Papatya', 'Lale', 'Orkide', 'Kaktüs',
    'Meşe', 'Çam', 'Palmiye', 'Bambu', 'Mantar', 'Yosun', 'Mercan'
  ],
  eğlence: [
    'Sinema', 'Tiyatro', 'Konser', 'Festival', 'Sirk', 'Lunapark', 'Karaoke',
    'Bowling', 'Paintball', 'Lazer Tag', 'Kaçış Odası', 'Bungee Jumping',
    'ATV', 'Rafting', 'Zipline', 'Piknik', 'Kamp', 'Barbekü', 'Parti',
    'Düğün', 'Doğum Günü', 'Yılbaşı', 'Bayram', 'Karnaval', 'Havuz Partisi'
  ],
  müzik: [
    'Gitar', 'Piyano', 'Keman', 'Davul', 'Flüt', 'Saksafon', 'Trompet',
    'Bateri', 'Bas Gitar', 'Ukulele', 'Arp', 'Akordeon', 'Org', 'Bağlama',
    'Ney', 'Kanun', 'Ud', 'Zurna', 'Darbuka', 'Tambur', 'Kemençe'
  ],
  filmler_diziler: [
    'Harry Potter', 'Star Wars', 'Matrix', 'Avatar', 'Titanic', 'Inception',
    'Interstellar', 'Joker', 'Batman', 'Spider-Man', 'Avengers', 'Toy Story',
    'Shrek', 'Frozen', 'Minions', 'Cars', 'Nemo', 'Up', 'Coco', 'Ratatouille',
    'Gladyatör', 'Yüzüklerin Efendisi', 'Hobbit', 'Jurassic Park', 'Indiana Jones',
    'James Bond', 'Mission Impossible', 'Fast Furious', 'Rocky', 'Karate Kid'
  ],
  kavramlar: [
    'Aşk', 'Dostluk', 'Özgürlük', 'Barış', 'Adalet', 'Cesaret', 'Mutluluk',
    'Nostalji', 'Hayal', 'Umut', 'Sabır', 'Merhamet', 'Tutku', 'Merak',
    'Gurur', 'Kıskançlık', 'Korku', 'Heyecan', 'Sürpriz', 'Macera',
    'Gizem', 'Sihir', 'Şans', 'Kader', 'Zaman', 'İnanç', 'Bilgelik'
  ],
  teknoloji: [
    'Robot', 'Yapay Zeka', 'Drone', 'Hologram', 'Sanal Gerçeklik', 'Blockchain',
    'Bitcoin', 'WiFi', 'Bluetooth', 'GPS', 'QR Kod', 'Emoji', 'Hashtag',
    'Selfie', 'TikTok', 'Instagram', 'YouTube', 'Netflix', 'Spotify', 'WhatsApp',
    'Google', 'iPhone', 'PlayStation', 'Xbox', 'Nintendo', 'Minecraft', 'Fortnite'
  ],
  tarih: [
    'Piramit', 'Kolezyum', 'Gladyatör', 'Şövalye', 'Viking', 'Samurai', 'Ninja',
    'Korsan', 'Firavun', 'Padişah', 'Kral', 'Kraliçe', 'Prens', 'Prenses',
    'Kale', 'Saray', 'Tapınak', 'Antik', 'Hazine', 'Harita', 'Pusula'
  ]
};

// Benzer kelime çiftleri (similar_word twist'i için)
const similarWordPairs = [
  ['Kedi', 'Köpek'], ['Pizza', 'Hamburger'], ['Futbol', 'Basketbol'],
  ['Gitar', 'Keman'], ['Güneş', 'Ay'], ['Deniz', 'Okyanus'],
  ['Doktor', 'Hemşire'], ['Polis', 'İtfaiyeci'], ['Araba', 'Motosiklet'],
  ['Çay', 'Kahve'], ['Sinema', 'Tiyatro'], ['Dağ', 'Vadi'],
  ['Yağmur', 'Kar'], ['Kitap', 'Defter'], ['Telefon', 'Bilgisayar'],
  ['Kuş', 'Kelebek'], ['Aslan', 'Kaplan'], ['İstanbul', 'Ankara'],
  ['Gül', 'Papatya'], ['Karate', 'Judo'], ['Piyano', 'Org'],
  ['Batman', 'Spider-Man'], ['Baklava', 'Künefe'], ['Türk Kahvesi', 'Espresso'],
  ['Japonya', 'Çin'], ['İtalya', 'İspanya'], ['Fransa', 'İngiltere'],
  ['Robot', 'Drone'], ['Kayak', 'Snowboard'], ['Uçak', 'Helikopter'],
  ['Tren', 'Otobüs'], ['Aşk', 'Dostluk'], ['Sabır', 'Cesaret'],
  ['Mağara', 'Vadi'], ['Orman', 'Çöl'], ['Göl', 'Nehir'],
  ['Şövalye', 'Samurai'], ['Kral', 'Padişah'], ['Viking', 'Korsan'],
  ['Simit', 'Poğaça'], ['Döner', 'İskender'], ['Mantı', 'Börek'],
  ['Masa Tenisi', 'Badminton'], ['Bisiklet', 'Scooter'], ['Gözlük', 'Dürbün']
];

// Tüm kelimeleri tek liste halinde al
function getAllWords() {
  const allWords = [];
  for (const category of Object.values(wordCategories)) {
    allWords.push(...category);
  }
  // Tekrar edenleri kaldır
  return [...new Set(allWords)];
}

// Rastgele kelime seç
function getRandomWord() {
  const words = getAllWords();
  return words[Math.floor(Math.random() * words.length)];
}

// Benzer kelime çifti seç
function getRandomSimilarPair() {
  const pair = similarWordPairs[Math.floor(Math.random() * similarWordPairs.length)];
  return pair;
}

// Belirli kategoriden kelime seç
function getWordFromCategory(category) {
  const words = wordCategories[category];
  if (!words) return getRandomWord();
  return words[Math.floor(Math.random() * words.length)];
}

module.exports = {
  wordCategories,
  similarWordPairs,
  getAllWords,
  getRandomWord,
  getRandomSimilarPair,
  getWordFromCategory
};
