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

// Benzer kelime çiftleri - Geniş havuz
// Her çift [gerçek kelime, benzer kelime] formatında
const similarWordPairs = [
  // === YİYECEKLER ===
  ['Pizza', 'Hamburger'], ['Pizza', 'Tost'], ['Hamburger', 'Sandviç'],
  ['Döner', 'İskender'], ['Döner', 'Kebap'], ['Lahmacun', 'Pide'],
  ['Börek', 'Gözleme'], ['Börek', 'Poğaça'], ['Mantı', 'Ravioli'],
  ['Baklava', 'Künefe'], ['Baklava', 'Lokum'], ['Pasta', 'Kurabiye'],
  ['Köfte', 'Kebap'], ['Simit', 'Poğaça'], ['Simit', 'Açma'],
  ['Pilav', 'Makarna'], ['Çorba', 'Salata'], ['Sarma', 'Dolma'],
  ['Kokoreç', 'Midye'], ['Tantuni', 'Dürüm'], ['Waffle', 'Krep'],
  ['Dondurma', 'Milkshake'], ['Çikolata', 'Şeker'], ['Peynir', 'Tereyağı'],
  ['Sucuk', 'Sosis'], ['Bal', 'Reçel'], ['Ekmek', 'Simit'],
  ['Karnıyarık', 'İmam Bayıldı'], ['Mercimek', 'Fasulye'],
  ['Patates Kızartması', 'Cips'], ['Tost', 'Sandviç'],

  // === İÇECEKLER ===
  ['Çay', 'Kahve'], ['Çay', 'Bitki Çayı'], ['Türk Kahvesi', 'Espresso'],
  ['Latte', 'Cappuccino'], ['Ayran', 'Kefir'], ['Kola', 'Gazoz'],
  ['Limonata', 'Portakal Suyu'], ['Smoothie', 'Milkshake'],
  ['Sahlep', 'Boza'], ['Soda', 'Maden Suyu'], ['Frappe', 'Latte'],

  // === HAYVANLAR ===
  ['Kedi', 'Köpek'], ['Aslan', 'Kaplan'], ['Aslan', 'Leopar'],
  ['Kurt', 'Tilki'], ['Kurt', 'Köpek'], ['Tilki', 'Çakal'],
  ['Ayı', 'Panda'], ['Fil', 'Gergedan'], ['Fil', 'Suaygırı'],
  ['Zürafa', 'Deve'], ['Zebra', 'At'], ['Kanguru', 'Koala'],
  ['Penguen', 'Martı'], ['Yunus', 'Balina'], ['Köpekbalığı', 'Yunus'],
  ['Tavşan', 'Sincap'], ['Tavşan', 'Hamster'], ['Kirpi', 'Sincap'],
  ['Kaplumbağa', 'Timsah'], ['Yılan', 'Kertenkele'], ['Timsah', 'İguana'],
  ['Kartal', 'Şahin'], ['Baykuş', 'Yarasa'], ['Papağan', 'Muhabbet Kuşu'],
  ['Flamingo', 'Pelikan'], ['Karga', 'Güvercin'], ['Ördek', 'Kaz'],
  ['Arı', 'Eşek Arısı'], ['Kelebek', 'Yusufçuk'], ['Karınca', 'Böcek'],
  ['Örümcek', 'Akrep'], ['Ahtapot', 'Kalamar'], ['Maymun', 'Goril'],
  ['İnek', 'Manda'], ['Koyun', 'Keçi'], ['At', 'Eşek'],
  ['Çita', 'Leopar'], ['Deve', 'Lama'], ['Tavuk', 'Hindi'],

  // === MESLEKLER ===
  ['Doktor', 'Hemşire'], ['Doktor', 'Eczacı'], ['Doktor', 'Veteriner'],
  ['Avukat', 'Savcı'], ['Avukat', 'Hakim'], ['Polis', 'İtfaiyeci'],
  ['Polis', 'Asker'], ['Pilot', 'Kaptan'], ['Öğretmen', 'Profesör'],
  ['Mühendis', 'Mimar'], ['Aktör', 'Yönetmen'], ['Ressam', 'Heykeltıraş'],
  ['Gazeteci', 'Editör'], ['Fotoğrafçı', 'Kameraman'], ['Kasap', 'Fırıncı'],
  ['Berber', 'Kuaför'], ['Terzi', 'Modacı'], ['Garson', 'Barmen'],
  ['Şoför', 'Pilot'], ['Cerrah', 'Doktor'], ['Psikolog', 'Psikiyatrist'],

  // === SPOR ===
  ['Futbol', 'Basketbol'], ['Futbol', 'Hentbol'], ['Basketbol', 'Voleybol'],
  ['Tenis', 'Masa Tenisi'], ['Tenis', 'Badminton'], ['Boks', 'Güreş'],
  ['Karate', 'Judo'], ['Karate', 'Tekvando'], ['Kayak', 'Snowboard'],
  ['Yüzme', 'Dalış'], ['Sörf', 'Yelken'], ['Bisiklet', 'Scooter'],
  ['Golf', 'Bowling'], ['Beyzbol', 'Kriket'], ['Hokey', 'Buz Pateni'],
  ['Okçuluk', 'Eskrim'], ['Dağcılık', 'Paraşüt'], ['Atletizm', 'Maraton'],
  ['Halter', 'Güreş'], ['Bilardo', 'Dart'], ['Rugby', 'Amerikan Futbolu'],

  // === ÜLKELER ===
  ['Japonya', 'Çin'], ['Japonya', 'Güney Kore'], ['İtalya', 'İspanya'],
  ['Fransa', 'İngiltere'], ['Fransa', 'Belçika'], ['Almanya', 'Avusturya'],
  ['İsveç', 'Norveç'], ['Kanada', 'ABD'], ['Brezilya', 'Arjantin'],
  ['Meksika', 'Kolombiya'], ['Mısır', 'Fas'], ['Hindistan', 'Pakistan'],
  ['Türkiye', 'Yunanistan'], ['Avustralya', 'Yeni Zelanda'],
  ['İsviçre', 'Avusturya'], ['Hollanda', 'Belçika'], ['İran', 'Irak'],
  ['Tayland', 'Vietnam'], ['Peru', 'Şili'], ['Küba', 'Jamaika'],

  // === ŞEHİRLER ===
  ['İstanbul', 'Ankara'], ['İstanbul', 'İzmir'], ['Antalya', 'Bodrum'],
  ['Paris', 'Londra'], ['Paris', 'Roma'], ['Tokyo', 'Seul'],
  ['New York', 'Londra'], ['Barcelona', 'Madrid'], ['Berlin', 'Viyana'],
  ['Dubai', 'Abu Dabi'], ['Amsterdam', 'Brüksel'], ['Mardin', 'Şanlıurfa'],
  ['Trabzon', 'Rize'], ['Gaziantep', 'Adana'], ['Fethiye', 'Bodrum'],

  // === OBJELER ===
  ['Telefon', 'Tablet'], ['Telefon', 'Bilgisayar'], ['Bilgisayar', 'Laptop'],
  ['Araba', 'Motosiklet'], ['Araba', 'Kamyon'], ['Uçak', 'Helikopter'],
  ['Tren', 'Otobüs'], ['Tren', 'Metro'], ['Gemi', 'Denizaltı'],
  ['Bisiklet', 'Motosiklet'], ['Kaykay', 'Paten'], ['Roket', 'Uçak'],
  ['Kitap', 'Defter'], ['Kitap', 'Dergi'], ['Kalem', 'Tükenmez'],
  ['Saat', 'Kronometre'], ['Gözlük', 'Lens'], ['Gözlük', 'Dürbün'],
  ['Şemsiye', 'Yağmurluk'], ['Çanta', 'Sırt Çantası'], ['Ayna', 'Cam'],
  ['Mum', 'Fener'], ['Kamera', 'Fotoğraf Makinesi'], ['Kulaklık', 'Hoparlör'],
  ['Yastık', 'Yorgan'], ['Sandalye', 'Koltuk'], ['Masa', 'Sehpa'],
  ['Lamba', 'Avize'], ['Halı', 'Kilim'], ['Perde', 'Stor'],

  // === DOĞA ===
  ['Güneş', 'Ay'], ['Yıldız', 'Gezegen'], ['Bulut', 'Sis'],
  ['Yağmur', 'Kar'], ['Yağmur', 'Dolu'], ['Fırtına', 'Kasırga'],
  ['Deprem', 'Tsunami'], ['Yanardağ', 'Jeotermal'], ['Şimşek', 'Gök Gürültüsü'],
  ['Orman', 'Çöl'], ['Orman', 'Bataklık'], ['Deniz', 'Okyanus'],
  ['Göl', 'Nehir'], ['Dağ', 'Tepe'], ['Vadi', 'Kanyon'],
  ['Mağara', 'Tünel'], ['Ada', 'Yarımada'], ['Plaj', 'Sahil'],
  ['Şelale', 'Çağlayan'], ['Buzul', 'Buz Dağı'],
  ['Gül', 'Papatya'], ['Gül', 'Lale'], ['Lale', 'Sümbül'],
  ['Çam', 'Meşe'], ['Palmiye', 'Hurma'], ['Kaktüs', 'Aloe Vera'],
  ['Mantar', 'Yosun'], ['Mercan', 'Deniz Yıldızı'],

  // === EĞLENCE ===
  ['Sinema', 'Tiyatro'], ['Konser', 'Festival'], ['Sirk', 'Lunapark'],
  ['Piknik', 'Kamp'], ['Barbekü', 'Mangal'], ['Parti', 'Düğün'],
  ['Doğum Günü', 'Yılbaşı'], ['Bowling', 'Bilardo'],
  ['Paintball', 'Lazer Tag'], ['Kaçış Odası', 'Bulmaca'],
  ['Rafting', 'Kano'], ['ATV', 'Safari'],

  // === MÜZİK ===
  ['Gitar', 'Bas Gitar'], ['Gitar', 'Ukulele'], ['Piyano', 'Org'],
  ['Keman', 'Viyola'], ['Keman', 'Çello'], ['Davul', 'Bateri'],
  ['Davul', 'Darbuka'], ['Flüt', 'Klarnet'], ['Saksafon', 'Trompet'],
  ['Bağlama', 'Ud'], ['Ney', 'Kaval'], ['Kanun', 'Arp'],
  ['Zurna', 'Klarnet'], ['Tambur', 'Kemençe'], ['Akordeon', 'Armonika'],

  // === FİLMLER ===
  ['Harry Potter', 'Yüzüklerin Efendisi'], ['Batman', 'Spider-Man'],
  ['Batman', 'Superman'], ['Star Wars', 'Star Trek'], ['Joker', 'Deadpool'],
  ['Shrek', 'Toy Story'], ['Frozen', 'Tangled'], ['Nemo', 'Dory'],
  ['Matrix', 'Inception'], ['Avengers', 'Justice League'],
  ['Jurassic Park', 'King Kong'], ['Rocky', 'Karate Kid'],
  ['James Bond', 'Mission Impossible'], ['Fast Furious', 'Need for Speed'],
  ['Hobbit', 'Yüzüklerin Efendisi'], ['Cars', 'Turbo'],

  // === KAVRAMLAR ===
  ['Aşk', 'Tutku'], ['Aşk', 'Dostluk'], ['Dostluk', 'Kardeşlik'],
  ['Özgürlük', 'Bağımsızlık'], ['Barış', 'Huzur'], ['Adalet', 'Eşitlik'],
  ['Cesaret', 'Kahramanlık'], ['Mutluluk', 'Neşe'], ['Korku', 'Dehşet'],
  ['Hayal', 'Rüya'], ['Umut', 'İnanç'], ['Sabır', 'Metanet'],
  ['Merak', 'Heyecan'], ['Gurur', 'Onur'], ['Kıskançlık', 'Haset'],
  ['Macera', 'Keşif'], ['Gizem', 'Sır'], ['Sihir', 'Büyü'],
  ['Şans', 'Kader'], ['Nostalji', 'Özlem'],

  // === TEKNOLOJİ ===
  ['Robot', 'Yapay Zeka'], ['Robot', 'Drone'], ['Drone', 'Helikopter'],
  ['Hologram', 'Sanal Gerçeklik'], ['Bitcoin', 'Ethereum'],
  ['WiFi', 'Bluetooth'], ['GPS', 'Pusula'], ['TikTok', 'Instagram'],
  ['YouTube', 'Twitch'], ['Netflix', 'Disney Plus'], ['Spotify', 'Apple Music'],
  ['WhatsApp', 'Telegram'], ['Google', 'Bing'], ['iPhone', 'Samsung'],
  ['PlayStation', 'Xbox'], ['Minecraft', 'Roblox'], ['Fortnite', 'PUBG'],
  ['Nintendo', 'Sega'], ['Selfie', 'Fotoğraf'], ['Emoji', 'Sticker'],

  // === TARİH ===
  ['Piramit', 'Sfenks'], ['Kolezyum', 'Arena'], ['Gladyatör', 'Savaşçı'],
  ['Şövalye', 'Samurai'], ['Viking', 'Korsan'], ['Ninja', 'Samurai'],
  ['Firavun', 'Padişah'], ['Kral', 'İmparator'], ['Kraliçe', 'Prenses'],
  ['Kale', 'Saray'], ['Tapınak', 'Kilise'], ['Hazine', 'Altın'],

  // === KARIŞIK CROSS-KATEGORİ ===
  ['Araba', 'Uçak'], ['Dağ', 'Deniz'], ['Yaz', 'Kış'],
  ['Gece', 'Gündüz'], ['Sabah', 'Akşam'], ['Güneş', 'Yağmur'],
  ['Ateş', 'Su'], ['Sıcak', 'Soğuk'], ['Büyük', 'Küçük'],
  ['Hızlı', 'Yavaş'], ['Sessiz', 'Gürültülü'], ['Tatlı', 'Tuzlu'],
  ['Okul', 'Üniversite'], ['Doğu', 'Batı'], ['Kuzey', 'Güney'],
  ['Altın', 'Gümüş'], ['Elmas', 'Yakut'], ['Ipek', 'Kadife'],
  ['Kalem', 'Silgi'], ['Çekiç', 'Tornavida'], ['Makas', 'Bıçak'],

  // === MEKANLAR ===
  ['Hastane', 'Eczane'], ['Okul', 'Kütüphane'], ['Market', 'Bakkal'],
  ['Restoran', 'Kafe'], ['Otel', 'Hostel'], ['Cami', 'Kilise'],
  ['Müze', 'Galeri'], ['Havalimanı', 'Otogar'], ['Stadyum', 'Arena'],
  ['Park', 'Bahçe'], ['Plaj', 'Havuz'], ['AVM', 'Çarşı'],
  ['Postane', 'Kargo'], ['Banka', 'ATM'], ['Hastane', 'Klinik'],

  // === GİYSİLER ===
  ['Gömlek', 'Tişört'], ['Pantolon', 'Şort'], ['Ceket', 'Mont'],
  ['Etek', 'Elbise'], ['Çorap', 'Terlik'], ['Şapka', 'Bere'],
  ['Eldiven', 'Atkı'], ['Bot', 'Ayakkabı'], ['Kravat', 'Papyon'],
  ['Pijama', 'Eşofman'], ['Mayo', 'Bikini'], ['Yelek', 'Hırka'],

  // === MEVSİMLER & ZAMAN ===
  ['İlkbahar', 'Sonbahar'], ['Yaz', 'İlkbahar'], ['Kış', 'Sonbahar'],
  ['Ocak', 'Şubat'], ['Pazartesi', 'Salı'], ['Hafta Sonu', 'Tatil'],

  // === MEYVELER & SEBZELER ===
  ['Elma', 'Armut'], ['Portakal', 'Mandalina'], ['Çilek', 'Ahududu'],
  ['Karpuz', 'Kavun'], ['Üzüm', 'Kiraz'], ['Muz', 'Ananas'],
  ['Limon', 'Greyfurt'], ['Şeftali', 'Kayısı'], ['Erik', 'Vişne'],
  ['Domates', 'Biber'], ['Salatalık', 'Kabak'], ['Patlıcan', 'Biber'],
  ['Havuç', 'Turp'], ['Soğan', 'Sarımsak'], ['Marul', 'Ispanak'],
  ['Brokoli', 'Karnabahar'], ['Bezelye', 'Fasulye'], ['Patates', 'Yer Elması'],

  // === EK YİYECEK ÇİFTLERİ ===
  ['Çiğ Köfte', 'Falafel'], ['Sushi', 'Sashimi'], ['Kumpir', 'Cağ Kebap'],
  ['Helva', 'Lokum'], ['Tavuk', 'Hindi'], ['Salata', 'Meze'],
  ['Yumurta', 'Omlet'], ['Çorba', 'Güveç'], ['Makarna', 'Erişte'],

  // === EK HAYVAN ÇİFTLERİ ===
  ['Serçe', 'Saka'], ['Akbaba', 'Kartal'], ['Suaygırı', 'Gergedan'],
  ['Leopar', 'Jaguar'], ['Hamster', 'Kobay'], ['Koala', 'Ağaç Faresi'],
  ['Güvercin', 'Kumru'], ['Tavus Kuşu', 'Flamingo'], ['Fok', 'Deniz Aslanı'],

  // === EK SPOR ÇİFTLERİ ===
  ['Voleybol', 'Hentbol'], ['Jimnastik', 'Bale'], ['Kano', 'Kürek'],
  ['Satranç', 'Dama'], ['Triatlon', 'Maraton'], ['Buz Pateni', 'Paten'],

  // === EK TEKNOLOJİ ===
  ['Laptop', 'Tablet'], ['Akıllı Saat', 'Bileklik'], ['VR', 'AR'],
  ['ChatGPT', 'Google'], ['Twitter', 'Facebook'], ['Uber', 'Taksi'],
  ['Amazon', 'Trendyol'], ['Zoom', 'Teams'], ['Reddit', 'Forum']
];

// Tüm kelimeleri tek liste halinde al
function getAllWords() {
  const allWords = [];
  for (const category of Object.values(wordCategories)) {
    allWords.push(...category);
  }
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
  // %50 ihtimalle çifti ters çevir (böylece her iki kelime de ana kelime olabilir)
  if (Math.random() < 0.5) {
    return [pair[1], pair[0]];
  }
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
