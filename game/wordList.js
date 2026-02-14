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
  ['Amazon', 'Trendyol'], ['Zoom', 'Teams'], ['Reddit', 'Forum'],

  // === EK MEYVELER & SEBZELER ===
  ['İncir', 'Hurma'], ['Nar', 'Vişne'], ['Avokado', 'Mango'],
  ['Hindistan Cevizi', 'Avokado'], ['Böğürtlen', 'Dut'],
  ['Ayva', 'Armut'], ['Malta Eriği', 'Greyfurt'],
  ['Kivi', 'Çarkıfelek'], ['Papaya', 'Mango'],
  ['Bamya', 'Bezelye'], ['Enginar', 'Kereviz'],
  ['Lahana', 'Marul'], ['Pırasa', 'Soğan'],
  ['Maydanoz', 'Dereotu'], ['Roka', 'Nane'],
  ['Kestane', 'Fındık'], ['Ceviz', 'Badem'],
  ['Fıstık', 'Leblebi'], ['Susam', 'Çörek Otu'],

  // === MARKALAR & ARABALAR ===
  ['Mercedes', 'BMW'], ['Audi', 'Volkswagen'], ['Ford', 'Chevrolet'],
  ['Toyota', 'Honda'], ['Ferrari', 'Lamborghini'], ['Porsche', 'Maserati'],
  ['Tesla', 'Rivian'], ['Hyundai', 'Kia'], ['Fiat', 'Renault'],
  ['Volvo', 'Saab'], ['Rolls Royce', 'Bentley'], ['Jeep', 'Land Rover'],
  ['Nike', 'Adidas'], ['Puma', 'Reebok'], ['Zara', 'H&M'],
  ['Gucci', 'Prada'], ['Louis Vuitton', 'Chanel'], ['Rolex', 'Omega'],
  ['Apple', 'Samsung'], ['Sony', 'Panasonic'], ['LG', 'Philips'],
  ['Canon', 'Nikon'], ['Dell', 'HP'], ['Lenovo', 'Asus'],
  ['Coca Cola', 'Pepsi'], ['Burger King', 'McDonald\'s'],
  ['Starbucks', 'Caribou'], ['IKEA', 'Koçtaş'],

  // === DANS & SANAT ===
  ['Bale', 'Modern Dans'], ['Tango', 'Vals'], ['Salsa', 'Bachata'],
  ['Hip Hop', 'Breakdans'], ['Zeybek', 'Horon'], ['Halay', 'Hora'],
  ['Samba', 'Rumba'], ['Flamenco', 'Tango'],
  ['Heykel', 'Balmumu'], ['Resim', 'Çizim'], ['Grafiti', 'Mural'],
  ['Mozaik', 'Vitray'], ['Seramik', 'Porselen'], ['Ebru', 'Kaligrafi'],
  ['Karikatür', 'Çizgi Roman'], ['Opera', 'Müzikal'],

  // === MUTFAK ARAÇLARI ===
  ['Tencere', 'Tava'], ['Çatal', 'Kaşık'], ['Bıçak', 'Satır'],
  ['Tabak', 'Kase'], ['Bardak', 'Fincan'], ['Tepsi', 'Sini'],
  ['Süzgeç', 'Kevgir'], ['Rende', 'Doğrayıcı'], ['Merdane', 'Oklava'],
  ['Düdüklü Tencere', 'Güveç'], ['Fırın', 'Ocak'],
  ['Blender', 'Mikser'], ['Tost Makinesi', 'Izgara'],

  // === OYUNCAKLAR & OYUNLAR ===
  ['Lego', 'Puzzle'], ['Barbie', 'Ken'], ['Monopoly', 'Risk'],
  ['Jenga', 'Uno'], ['Rubik Küp', 'Bulmaca'], ['Dart', 'Bilardo'],
  ['Tavla', 'Satranç'], ['Okey', 'Rummy'], ['Domino', 'Mahjong'],
  ['Tombala', 'Piyango'], ['Yapboz', 'Sudoku'],
  ['İsim Şehir', 'Tabu'], ['Pictionary', 'Taboo'],

  // === DENİZ & SU ===
  ['Tekne', 'Yat'], ['Kayık', 'Sandal'], ['Feribot', 'Vapur'],
  ['Sürat Teknesi', 'Jet Ski'], ['Yelkenli', 'Katamaran'],
  ['Deniz Yıldızı', 'Denizkestanesi'], ['İstiridye', 'Midye'],
  ['Yengeç', 'Istakoz'], ['Karides', 'Yengeç'],
  ['Levrek', 'Çipura'], ['Hamsi', 'Sardalya'], ['Palamut', 'Lüfer'],
  ['Ton', 'Somon'], ['Alabalık', 'Sazan'],
  ['Denizanası', 'Ahtapot'], ['Fok', 'Mors'],
  ['Mersin Balığı', 'Yılan Balığı'],

  // === MESLEKİ EK ===
  ['Armatör', 'Kaptan'], ['Sanatçı', 'Zanaatkar'],
  ['Diplomat', 'Büyükelçi'], ['Dedektif', 'Müfettiş'],
  ['Komiser', 'Müfettiş'], ['General', 'Amiral'],
  ['Başkomutan', 'General'], ['Programcı', 'Yazılımcı'],
  ['Tasarımcı', 'İllüstratör'], ['Editör', 'Yayıncı'],
  ['Komedyen', 'Şovmen'], ['Sihirbaz', 'İllüzyonist'],
  ['Dansçı', 'Koreograf'], ['Şef', 'Aşçıbaşı'],
  ['Ebe', 'Hemşire'], ['Fizyoterapist', 'Masör'],
  ['Eczacı', 'Kimyager'], ['Biyolog', 'Zoolog'],
  ['Fizikçi', 'Matematikçi'], ['Tarihçi', 'Arkeolog'],

  // === RENKLER & TONLAR ===
  ['Kırmızı', 'Turuncu'], ['Mavi', 'Lacivert'], ['Yeşil', 'Turkuaz'],
  ['Sarı', 'Altın'], ['Mor', 'Lila'], ['Pembe', 'Somon'],
  ['Bej', 'Krem'], ['Gri', 'Gümüş'], ['Kahverengi', 'Bronz'],
  ['Bordo', 'Şarap'], ['İndigo', 'Kobalt'], ['Mercan', 'Turuncu'],
  ['Zümrüt', 'Yeşim'], ['Bakır', 'Bronz'],

  // === DUYGULAR & HİSSİYAT ===
  ['Sevinç', 'Coşku'], ['Üzüntü', 'Melankoli'], ['Öfke', 'Hiddet'],
  ['Kaygı', 'Stres'], ['Hüzün', 'Keder'], ['Şefkat', 'Merhamet'],
  ['Hayranlık', 'Saygı'], ['Utanç', 'Mahcubiyet'],
  ['Minnet', 'Şükran'], ['Pişmanlık', 'Vicdan'],
  ['Endişe', 'Tedirginlik'], ['Hırs', 'Azim'],
  ['Özlem', 'Hasret'], ['Bıkkınlık', 'Bezginlik'],

  // === MOBİLYA & EV ===
  ['Kanepe', 'Divan'], ['Gardırop', 'Şifonyer'], ['Komodin', 'Sehpa'],
  ['Vitrin', 'Büfe'], ['Raf', 'Kitaplık'], ['Çalışma Masası', 'Sekreter'],
  ['Tabure', 'Puf'], ['Bank', 'Bahçe Koltuğu'],
  ['Beşik', 'Ranza'], ['Yer Yatağı', 'Şilte'],
  ['Ayna', 'Konsol'], ['Şömine', 'Soba'],
  ['Klima', 'Vantilatör'], ['Aspiratör', 'Davlumbaz'],

  // === TATLILAR & PASTANE ===
  ['Profiterol', 'Supangle'], ['Tiramisu', 'Magnolia'],
  ['Cheesecake', 'Brownie'], ['Sufle', 'Fondü'],
  ['Muhallebi', 'Sütlaç'], ['Kazandibi', 'Tavuk Göğsü'],
  ['Aşure', 'Keşkül'], ['Revani', 'Şambali'],
  ['Kadayıf', 'Ekmek Kadayıfı'], ['Tulumba', 'Lokma'],
  ['Trileçe', 'Tres Leches'], ['Dondurmalı Şerbet', 'Sorbe'],
  ['Makaron', 'Kurabiye'], ['Kruvasan', 'Poğaça'],
  ['Donut', 'Berliner'], ['Eclair', 'Profiterol'],

  // === UZAY & BİLİM ===
  ['Mars', 'Venüs'], ['Jüpiter', 'Satürn'], ['Merkür', 'Neptün'],
  ['Plüton', 'Asteropit'], ['Meteor', 'Kuyruklu Yıldız'],
  ['Galaksi', 'Nebula'], ['Kara Delik', 'Kuasar'],
  ['Astronot', 'Kozmonot'], ['Teleskop', 'Uydu'],
  ['Atom', 'Molekül'], ['Proton', 'Nötron'], ['Elektron', 'Foton'],
  ['DNA', 'RNA'], ['Hücre', 'Bakteri'], ['Virüs', 'Bakteri'],
  ['Gen', 'Kromozom'], ['Enzim', 'Hormon'],

  // === EĞİTİM & KİTAP ===
  ['Roman', 'Hikaye'], ['Şiir', 'Destan'], ['Biyografi', 'Otobiyografi'],
  ['Ansiklopedi', 'Sözlük'], ['Atlas', 'Harita'],
  ['Dergi', 'Gazete'], ['Blog', 'Vlog'],
  ['Kütüphane', 'Arşiv'], ['Okul', 'Kreş'],
  ['Lise', 'Ortaokul'], ['Fakülte', 'Yüksekokul'],
  ['Seminer', 'Konferans'], ['Workshop', 'Atölye'],
  ['Diploma', 'Sertifika'], ['Tez', 'Makale'],

  // === SAVAŞ & TARİH EK ===
  ['Ok', 'Yay'], ['Kılıç', 'Kalkan'], ['Mızrak', 'Balta'],
  ['Top', 'Tüfek'], ['Tank', 'Zırhlı Araç'], ['Uçak Gemisi', 'Denizaltı'],
  ['Hisar', 'Kale'], ['Burç', 'Kule'], ['Hendek', 'Siper'],
  ['Mancınık', 'Trebuchet'], ['Zırh', 'Miğfer'],
  ['İmparatorluk', 'Krallık'], ['Savaş', 'Barış'],
  ['Fetih', 'İşgal'], ['İsyan', 'Devrim'],

  // === MÜZİK TÜRÜ ===
  ['Pop', 'Rock'], ['Jazz', 'Blues'], ['Rap', 'Hip Hop'],
  ['Klasik Müzik', 'Opera'], ['Country', 'Folk'],
  ['Reggae', 'Ska'], ['Metal', 'Punk'], ['EDM', 'Techno'],
  ['R&B', 'Soul'], ['Arabesk', 'Fantezi'],
  ['Türkü', 'Halk Müziği'], ['Enstrümantal', 'Akustik'],

  // === EVCIL HAYVAN & BAKIM ===
  ['Mama', 'Kemik'], ['Tasma', 'Kayış'], ['Kafes', 'Akvaryum'],
  ['Kedi Kumu', 'Kedi Evi'], ['Tırmalama Tahtası', 'Kedi Ağacı'],
  ['Köpek Yatağı', 'Köpek Kulübesi'],
  ['Muhabbet Kuşu', 'Kanarya'], ['Civciv', 'Ördek Yavrusu'],
  ['Kedi Maması', 'Köpek Maması'],

  // === ULAŞIM & TRAFİK ===
  ['Otoyol', 'Cadde'], ['Köprü', 'Tünel'], ['Kavşak', 'Dönel Kavşak'],
  ['Otopark', 'Garaj'], ['Trafik Lambası', 'Dur İşareti'],
  ['Taksi', 'Dolmuş'], ['Tramvay', 'Metro'], ['Teleferik', 'Feribot'],
  ['Ambulans', 'İtfaiye Aracı'], ['Polis Arabası', 'Ambulans'],
  ['Kamyon', 'Tır'], ['Minibüs', 'Otobüs'],
  ['Vespa', 'Scooter'], ['ATV', 'UTV'],

  // === MEKAN EK ===
  ['Hamam', 'Sauna'], ['Spa', 'Termal'], ['Yüzme Havuzu', 'Jakuzi'],
  ['Sinagog', 'Havra'], ['Mescit', 'Cami'], ['Katedral', 'Şapel'],
  ['Manastır', 'Tekke'], ['Türbe', 'Anıtkabir'],
  ['Fuar', 'Sergi'], ['Panayır', 'Festival'],
  ['Tiyatro', 'Amfi'], ['Planetaryum', 'Gözlemevi'],
  ['Saray', 'Köşk'], ['Villa', 'Yalı'],
  ['Apartman', 'Rezidans'], ['Çiftlik', 'Mandıra'],
  ['Fabrika', 'Atölye'], ['Depo', 'Hangar'],

  // === HAVA & İKLİM ===
  ['Dolu', 'Kar'], ['Çiğ', 'Kırağı'], ['Pus', 'Sis'],
  ['Hortum', 'Kasırga'], ['Tayfun', 'Siklon'],
  ['Muson', 'Yağmur Mevsimi'], ['Kuraklık', 'Sel'],
  ['Buzlanma', 'Don'], ['Çığ', 'Heyelan'],
  ['Sıcak Dalga', 'Soğuk Dalga'],

  // === İNTERNET & SOSYAL MEDYA ===
  ['Podcast', 'Webinar'], ['Meme', 'GIF'], ['Hashtag', 'Etiket'],
  ['Influencer', 'Blogger'], ['Streamer', 'YouTuber'],
  ['Tweet', 'Post'], ['Story', 'Reel'],
  ['Like', 'Beğeni'], ['Takipçi', 'Abone'],
  ['DM', 'Mesaj'], ['Spam', 'Reklam'],
  ['Avatar', 'Profil'], ['Feed', 'Timeline'],

  // === BEDEN & SAĞLIK ===
  ['Aşı', 'İlaç'], ['Antibiyotik', 'Ağrı Kesici'],
  ['Röntgen', 'Ultrason'], ['MR', 'Tomografi'],
  ['Tansiyon', 'Nabız'], ['Ateş', 'Titreme'],
  ['Grip', 'Soğuk Algınlığı'], ['Alerji', 'Astım'],
  ['Diyet', 'Detoks'], ['Yoga', 'Pilates'],
  ['Fitness', 'CrossFit'], ['Koşu', 'Yürüyüş'],
  ['Masaj', 'Akupunktur'], ['Meditasyon', 'Nefes Egzersizi'],

  // === GEOMETRİ & MATEMATİK ===
  ['Kare', 'Dikdörtgen'], ['Üçgen', 'Piramit'], ['Daire', 'Elips'],
  ['Küp', 'Küre'], ['Silindir', 'Koni'], ['Prizma', 'Piramit'],
  ['Paralel', 'Dik'], ['Simetri', 'Yansıma'],
  ['Toplama', 'Çıkarma'], ['Çarpma', 'Bölme'],
  ['Kesir', 'Ondalık'], ['Oran', 'Yüzde'],

  // === FANTASTİK & MİTOLOJİ ===
  ['Ejderha', 'Anka Kuşu'], ['Tek Boynuzlu At', 'Pegasus'],
  ['Deniz Kızı', 'Siren'], ['Vampir', 'Kurt Adam'],
  ['Zombi', 'Hayalet'], ['Cadı', 'Büyücü'],
  ['Peri', 'Cin'], ['Dev', 'Troll'],
  ['Medusa', 'Minotaur'], ['Sfenks', 'Grifon'],
  ['Zeus', 'Poseidon'], ['Hades', 'Ares'],
  ['Thor', 'Odin'], ['Loki', 'Thor'],
  ['Excalibur', 'Mjolnir'], ['Olimpos', 'Valhalla'],

  // === BAHARAT & SOS ===
  ['Tuz', 'Karabiber'], ['Kekik', 'Biberiye'], ['Tarçın', 'Zencefil'],
  ['Safran', 'Zerdeçal'], ['Kimyon', 'Kişniş'],
  ['Sumak', 'Pul Biber'], ['Defne', 'Mersin'],
  ['Ketçap', 'Mayonez'], ['Hardal', 'Wasabi'],
  ['Soya Sosu', 'Teriyaki'], ['Pesto', 'Guacamole'],
  ['Hummus', 'Tahin'], ['Acı Sos', 'BBQ Sos'],

  // === KUMAŞ & GİYİM EK ===
  ['İpek', 'Saten'], ['Pamuk', 'Keten'], ['Yün', 'Kaşmir'],
  ['Denim', 'Kord'], ['Kadife', 'Süet'], ['Deri', 'Suni Deri'],
  ['Polyester', 'Naylon'], ['Dantel', 'Tül'],
  ['Eşarp', 'Şal'], ['Fular', 'Bandana'],
  ['Kemer', 'Askı'], ['Cüzdan', 'Kartlık'],
  ['Bilezik', 'Kolye'], ['Küpe', 'Yüzük'],
  ['Baret', 'Kask'], ['Çizme', 'Bot'],

  // === DİNLENME & HOBİ ===
  ['Balık Tutma', 'Avcılık'], ['Bahçecilik', 'Botanik'],
  ['Origami', 'Kağıt Kesme'], ['Örgü', 'Nakış'],
  ['Maket', 'Diorama'], ['Koleksiyon', 'Antika'],
  ['Fotoğrafçılık', 'Video'], ['Yazarlık', 'Şairlik'],
  ['Amatör Telsiz', 'Radyo'], ['Model Uçak', 'Drone'],
  ['Bonsai', 'Teraryum'], ['Akvaryum', 'Teraryum'],

  // === TÜRK KÜLTÜRÜ ===
  ['Nazar Boncuğu', 'Muska'], ['Hamam', 'Kaplıca'], ['Çay Bardağı', 'Fincan'],
  ['Semazen', 'Derviş'], ['Osmanlı', 'Selçuklu'], ['Harem', 'Saray'],
  ['Sultan', 'Vezir'], ['Yeniçeri', 'Sipahi'], ['Tuğra', 'Mühür'],
  ['Kilim', 'Halı'], ['Çini', 'Seramik'], ['İznik', 'Kütahya'],
  ['Hamam Kesesi', 'Lif'], ['Nargile', 'Pipo'], ['Tavla', 'Okey'],
  ['Karagöz', 'Hacivat'], ['Meddah', 'Ortaoyunu'],

  // === OKUL & SINIF ===
  ['Tahta', 'Projeksiyon'], ['Tebeşir', 'Kalem'], ['Sıra', 'Masa'],
  ['Ödev', 'Proje'], ['Sınav', 'Quiz'], ['Not', 'Puan'],
  ['Teneffüs', 'Öğle Arası'], ['Kantın', 'Yemekhane'],
  ['Müdür', 'Öğretmen'], ['Rehber', 'Danışman'],
  ['Karne', 'Transkript'], ['Burs', 'Kredi'],

  // === İŞ DÜNYASI ===
  ['Toplantı', 'Sunum'], ['Rapor', 'Analiz'], ['Bütçe', 'Maliyet'],
  ['Maaş', 'Prim'], ['Terfi', 'Zam'], ['Patron', 'Müdür'],
  ['Stajyer', 'Asistan'], ['Freelancer', 'Danışman'],
  ['Startup', 'Girişim'], ['Yatırım', 'Tasarruf'],
  ['Hisse', 'Tahvil'], ['Borsa', 'Kripto'],
  ['Fatura', 'Fiş'], ['Vergi', 'KDV'],

  // === AİLE & İLİŞKİ ===
  ['Anne', 'Baba'], ['Kardeş', 'Kuzen'], ['Dede', 'Nine'],
  ['Amca', 'Dayı'], ['Teyze', 'Hala'], ['Gelin', 'Damat'],
  ['Kayınvalide', 'Kayınpeder'], ['Yeğen', 'Torun'],
  ['Komşu', 'Arkadaş'], ['Nişan', 'Düğün'],
  ['Evlilik', 'Nişan'], ['Doğum', 'Vaftiz'],

  // === TATIL & SEYAHAT ===
  ['Pasaport', 'Vize'], ['Bavul', 'Sırt Çantası'],
  ['Otel', 'Pansiyon'], ['Tatil Köyü', 'Kamp Alanı'],
  ['Havalimanı', 'İstasyon'], ['Bilet', 'Rezervasyon'],
  ['Rehber', 'Turist'], ['Hediyelik', 'Suvenir'],
  ['Plaj', 'Kayak Merkezi'], ['Safari', 'Tur'],
  ['Gezi', 'Keşif'], ['Harita', 'Navigasyon'],

  // === PARA & FİNANS ===
  ['Dolar', 'Euro'], ['Sterlin', 'Frank'], ['Lira', 'Peso'],
  ['Yen', 'Yuan'], ['Bitcoin', 'Doge'], ['Ethereum', 'Solana'],
  ['Banka', 'Sigorta'], ['Kredi', 'Taksit'],
  ['ATM', 'POS'], ['Nakit', 'Kart'],
  ['Çek', 'Senet'], ['Faiz', 'Enflasyon'],

  // === YAZILIM & BİLİŞİM ===
  ['Python', 'Java'], ['JavaScript', 'TypeScript'],
  ['HTML', 'CSS'], ['React', 'Vue'],
  ['Backend', 'Frontend'], ['API', 'SDK'],
  ['Bug', 'Hata'], ['Debug', 'Test'],
  ['Sunucu', 'Cloud'], ['Database', 'Cache'],
  ['Git', 'SVN'], ['Linux', 'Windows'],

  // === HABERLEŞME ===
  ['Mektup', 'Kargo'], ['Telefon', 'Telsiz'], ['E-posta', 'SMS'],
  ['Faks', 'Telgraf'], ['Posta Güvercini', 'Haberci'],
  ['Gazete', 'Televizyon'], ['Radyo', 'Podcast'],
  ['Haber', 'Röportaj'], ['Basın', 'Medya'],

  // === SÜPERKAHRAMAN ===
  ['Superman', 'Batman'], ['Iron Man', 'Captain America'],
  ['Thor', 'Hulk'], ['Wonder Woman', 'Supergirl'],
  ['Flash', 'Quicksilver'], ['Aquaman', 'Namor'],
  ['Wolverine', 'Deadpool'], ['Professor X', 'Magneto'],
  ['Black Panther', 'Doctor Strange'],

  // === MÜZİK EK ===
  ['Melodi', 'Ritim'], ['Nota', 'Akor'], ['Solo', 'Düet'],
  ['Koro', 'Orkestra'], ['Beste', 'Aranjman'],
  ['Şarkı', 'Türkü'], ['Marş', 'Ağıt'],
  ['Albüm', 'Single'], ['Klip', 'Konser'],
  ['DJ', 'Prodüktör'], ['Mikser', 'Amplifikatör'],

  // === ZAMAN & TAKVİM ===
  ['Geçmiş', 'Gelecek'], ['Dün', 'Bugün'], ['Saat', 'Dakika'],
  ['Saniye', 'Milisaniye'], ['Yıl', 'Asır'],
  ['Çağ', 'Dönem'], ['Milat', 'Takvim'],
  ['Gündönümü', 'Ekinoks'], ['Doğum Günü', 'Yıldönümü'],

  // === ÇOCUKLUK ===
  ['Salıncak', 'Kaydırak'], ['Tahterevalli', 'Dönme Dolap'],
  ['Kum Havuzu', 'Trambolin'], ['Uçurtma', 'Balon'],
  ['Misket', 'Bilye'], ['Topaç', 'Yoyo'],
  ['Saklambaç', 'Körebe'], ['İp Atlama', 'Seksek'],
  ['Çizgi Film', 'Masal'], ['Ninni', 'Tekerleme'],

  // === EK CROSS-KATEGORİ ===
  ['Anahtar', 'Kilit'], ['İğne', 'İplik'], ['Çivi', 'Vida'],
  ['Matkap', 'Tornavida'], ['Pense', 'Kerpeten'],
  ['Cetvel', 'Pergel'], ['Testere', 'Balta'],
  ['Boya', 'Vernik'], ['Alçı', 'Çimento'],
  ['Tuğla', 'Beton'], ['Cam', 'Pleksiglas'],
  ['Plastik', 'Metal'], ['Ahşap', 'Bambu'],
  ['Mermer', 'Granit'], ['Kum', 'Çakıl'],
  ['Halat', 'Zincir'], ['Çapa', 'Kürek'],
  ['Düdük', 'Zil'], ['Bayrak', 'Flama'],
  ['Madalya', 'Kupa'], ['Ödül', 'Plaket'],

  // === TV DİZİLERİ ===
  ['Breaking Bad', 'Better Call Saul'], ['Game of Thrones', 'Vikings'],
  ['Friends', 'How I Met Your Mother'], ['The Office', 'Parks and Rec'],
  ['Stranger Things', 'Dark'], ['Money Heist', 'Lupin'],
  ['Squid Game', 'Alice in Borderland'], ['Wednesday', 'Sabrina'],
  ['Peaky Blinders', 'Narcos'], ['Sherlock', 'Elementary'],
  ['The Witcher', 'Lord of the Rings'], ['Black Mirror', 'Twilight Zone'],
  ['Walking Dead', 'Last of Us'], ['Prison Break', 'Escape Plan'],
  ['Lost', 'Manifest'], ['Dexter', 'You'],
  ['Lucifer', 'Good Omens'], ['Mandalorian', 'Boba Fett'],

  // === EMOJİ & İFADE ===
  ['Gülümseme', 'Kahkaha'], ['Ağlama', 'Hıçkırık'],
  ['Göz Kırpma', 'Selam'], ['Alkış', 'Bravo'],
  ['Öpücük', 'Sarılma'], ['Şaşırma', 'Hayret'],
  ['Kızgınlık', 'Sinir'], ['Hayal Kırıklığı', 'Üzüntü'],
  ['Dans Etme', 'Kutlama'], ['Uyuma', 'Horlama'],
  ['Düşünme', 'Merak'], ['El Sallama', 'Veda'],

  // === KAHVALTI ===
  ['Yumurta', 'Menemen'], ['Peynir', 'Zeytin'],
  ['Reçel', 'Bal'], ['Tereyağı', 'Kaymak'],
  ['Simit', 'Poğaça'], ['Pankek', 'Waffle'],
  ['Müsli', 'Granola'], ['Sucuklu Yumurta', 'Pastırmalı Yumurta'],
  ['Çay', 'Portakal Suyu'], ['Börek', 'Açma'],
  ['Kaşarlı Tost', 'Kumru'], ['Croissant', 'Pain au Chocolat'],

  // === SOKAK YEMEKLERİ ===
  ['Kestane', 'Mısır'], ['Midye Dolma', 'Midye Tava'],
  ['Islak Hamburger', 'Tombik'], ['Kokoreç', 'Tantuni'],
  ['Döner', 'Dürüm'], ['Kumru', 'Ayvalık Toast'],
  ['Balık Ekmek', 'Çiğ Köfte Dürüm'], ['Lokma', 'Tulumba'],
  ['Kağıt Kebap', 'Adana Dürüm'], ['Nohut Pilav', 'Kuru Fasulye'],
  ['Lahmacun', 'Etli Ekmek'], ['Kumpir', 'Patates Tava'],

  // === TÜRK DİZİLERİ ===
  ['Kurtlar Vadisi', 'Ezel'], ['Muhteşem Yüzyıl', 'Diriliş Ertuğrul'],
  ['İçerde', 'Çukur'], ['Yaprak Dökümü', 'Aşk-ı Memnu'],
  ['Behzat Ç', 'Arka Sokaklar'], ['Leyla ile Mecnun', 'Jet Sosyete'],
  ['Kardeş Payı', 'Avrupa Yakası'], ['Recep İvedik', 'Hababam Sınıfı'],
  ['Bizimkiler', 'Yedi Numara'], ['Seksenler', 'Dokuz Sekiz'],

  // === YOUTUBER & İNTERNET KÜLTÜRÜ ===
  ['Meme', 'Vine'], ['Troll', 'Spam'], ['Clickbait', 'Reklam'],
  ['Unboxing', 'Review'], ['Tutorial', 'How-To'],
  ['Prank', 'Challenge'], ['ASMR', 'Lofi'],
  ['Speedrun', 'Walkthrough'], ['Let\'s Play', 'Stream'],
  ['Cosplay', 'Kostüm'], ['Fan Art', 'Fan Fiction'],

  // === RETRO & NOSTALJİ ===
  ['Kaset', 'Plak'], ['VHS', 'DVD'], ['Walkman', 'Discman'],
  ['Atari', 'Commodore'], ['Tetris', 'Pac-Man'],
  ['Super Mario', 'Sonic'], ['Game Boy', 'Tamagotchi'],
  ['Floppy Disk', 'CD'], ['Dial-Up', 'ADSL'],
  ['Nokia 3310', 'Motorola Razr'], ['MSN', 'ICQ'],
  ['Pager', 'Telefon'], ['Polaroid', 'Film Kamera'],
  ['Daktilo', 'Bilgisayar'], ['Telgraf', 'Mektup'],

  // === KORKU & GERİLİM ===
  ['Karanlık', 'Gölge'], ['Çığlık', 'Fısıltı'],
  ['Labirent', 'Tuzak'], ['Zincirleme', 'Kilit'],
  ['Perili Ev', 'Mezarlık'], ['Yeraltı', 'Bodrum'],
  ['Kabus', 'Uyurgezer'], ['Gizemli', 'Tekinsiz'],
  ['İz', 'Parmak İzi'], ['Dedektif', 'Suçlu'],
  ['İpucu', 'Kanıt'], ['Maske', 'Kostüm'],

  // === DÜĞÜN & TÖREN ===
  ['Gelin', 'Damat'], ['Nikah', 'Düğün'],
  ['Nişan Yüzüğü', 'Alyans'], ['Gelinlik', 'Damatlık'],
  ['Pasta', 'Davetiye'], ['DJ', 'Orkestra'],
  ['Kına Gecesi', 'Bekarlığa Veda'], ['Balayı', 'Tatil'],
  ['Çiçek Buketi', 'Araba Süsleme'],
  ['Düğün Salonu', 'Kır Düğünü'],

  // === BEBEK & ÇOCUK ===
  ['Biberon', 'Emzik'], ['Bebek Arabası', 'Kanguru'],
  ['Çıngırak', 'Oyuncak'], ['Alt Bezi', 'Islak Mendil'],
  ['Mama Sandalyesi', 'Yürüteç'], ['Oyun Parkı', 'Beşik'],
  ['Diş Kaşıyıcı', 'Emzik'], ['Lullaby', 'Ninni'],
  ['Boyama', 'Hamur'], ['Oyun Hamuru', 'Slime'],

  // === OKUL DERSLERİ ===
  ['Matematik', 'Fizik'], ['Türkçe', 'Edebiyat'],
  ['Tarih', 'Coğrafya'], ['Biyoloji', 'Kimya'],
  ['İngilizce', 'Almanca'], ['Müzik', 'Resim'],
  ['Beden Eğitimi', 'Jimnastik'], ['Felsefe', 'Psikoloji'],
  ['Geometri', 'Cebir'], ['Astronomi', 'Jeoloji'],
  ['Ekonomi', 'Sosyoloji'], ['Hukuk', 'Siyaset'],

  // === PARTİ & GECE HAYATI ===
  ['Kulüp', 'Bar'], ['Disko', 'Rave'],
  ['Barmen', 'DJ'], ['Dans Pisti', 'VIP'],
  ['Karaoke', 'Stand-Up'], ['Happy Hour', 'Ladies Night'],
  ['Konfeti', 'Balon'], ['Havai Fişek', 'Maytap'],
  ['Kostüm Partisi', 'Tema Parti'], ['Pool Party', 'House Party'],

  // === PLAJ & YAZ ===
  ['Güneş Kremi', 'Şapka'], ['Güneş Gözlüğü', 'Şemsiye'],
  ['Şezlong', 'Hamak'], ['Şnorkel', 'Palet'],
  ['Kum Kalesi', 'Deniz Kabuğu'], ['Sörf Tahtası', 'Kürek'],
  ['Deniz Yatağı', 'Şişme Bot'], ['Plaj Topu', 'Frizbi'],
  ['Mayo', 'Bikini'], ['Havlu', 'Pareo'],

  // === KIŞ & KAR ===
  ['Kardan Adam', 'Kar Topu'], ['Buz Pateni', 'Kızak'],
  ['Kayak', 'Snowboard'], ['Sıcak Çikolata', 'Sahlep'],
  ['Atkı', 'Bere'], ['Eldiven', 'Kar Botu'],
  ['Şömine', 'Battaniye'], ['Kış Lastiği', 'Zincir'],
  ['Buz Tutan Göl', 'Kar Fırtınası'], ['İglo', 'Kar Mağarası'],

  // === TÜRK YEMEKLERİ (DETAYLI) ===
  ['Ali Nazik', 'Beyti'], ['Çığ Börek', 'Su Böreği'],
  ['İçli Köfte', 'Çiğ Köfte'], ['Hamsili Pilav', 'Kuymak'],
  ['Patlıcan Kebabı', 'Urfa Kebabı'], ['İskender', 'Bursa Kebabı'],
  ['Çerkez Tavuğu', 'Tavuk Sote'], ['Kısır', 'Bulgur Pilavı'],
  ['Zeytinyağlı Yaprak Sarma', 'Etli Yaprak Sarma'],
  ['Mercimek Çorbası', 'Ezogelin Çorbası'],
  ['Tirit', 'Keşkek'], ['Kabak Tatlısı', 'Ayva Tatlısı'],

  // === DÜNYA MUTFAĞI ===
  ['Sushi', 'Ramen'], ['Pad Thai', 'Pho'],
  ['Paella', 'Risotto'], ['Fish and Chips', 'Bangers and Mash'],
  ['Tacos', 'Burritos'], ['Dim Sum', 'Gyoza'],
  ['Moussaka', 'Börek'], ['Croissant', 'Baguette'],
  ['Tiramisu', 'Panna Cotta'], ['Churros', 'Donut'],
  ['Kebab', 'Shawarma'], ['Falafel', 'Hummus'],
  ['Kimchi', 'Miso'], ['Curry', 'Tikka Masala'],
  ['Goulash', 'Schnitzel'], ['Empanada', 'Samosa'],

  // === ENSTRÜMAN AİLELERİ ===
  ['Elektro Gitar', 'Akustik Gitar'], ['Bas Gitar', 'Kontrabas'],
  ['Piyano', 'Klavye'], ['Dijital Piyano', 'Synthesizer'],
  ['Keman', 'Viola'], ['Çello', 'Kontrabas'],
  ['Trombon', 'Tuba'], ['Klarnet', 'Obua'],
  ['Pikolo', 'Flüt'], ['Timpani', 'Ksilofon'],
  ['Marimba', 'Vibraphone'], ['Banjo', 'Mandolin'],

  // === TAKIM & KULÜP ===
  ['Galatasaray', 'Fenerbahçe'], ['Beşiktaş', 'Trabzonspor'],
  ['Real Madrid', 'Barcelona'], ['Manchester United', 'Liverpool'],
  ['Bayern Münih', 'Dortmund'], ['PSG', 'Marseille'],
  ['Juventus', 'AC Milan'], ['Inter', 'Roma'],
  ['Lakers', 'Celtics'], ['Warriors', 'Bulls'],
  ['Yankees', 'Red Sox'], ['Ferrari', 'Red Bull'],

  // === MASAL & ÇİZGİ FİLM ===
  ['Pamuk Prenses', 'Külkedisi'], ['Rapunzel', 'Frozen'],
  ['Alaaddin', 'Sinbad'], ['Robin Hood', 'Zorro'],
  ['Pinokyo', 'Çirkin Ördek Yavrusu'], ['Kırmızı Başlıklı Kız', 'Hansel ve Gretel'],
  ['Tom ve Jerry', 'Oggy'], ['Bugs Bunny', 'Mickey Mouse'],
  ['SpongeBob', 'Patrick'], ['Scooby Doo', 'Garfield'],
  ['Pepee', 'Caillou'], ['Heidi', 'Pollyanna'],
  ['Ninja Kaplumbağalar', 'Power Rangers'], ['Transformers', 'Voltron'],

  // === HAVAALİMANI & UÇUŞ ===
  ['Check-in', 'Boarding'], ['Pasaport Kontrol', 'Gümrük'],
  ['Duty Free', 'Gate'], ['Kalkış', 'İniş'],
  ['Pilot', 'Hostes'], ['Birinci Sınıf', 'Ekonomi'],
  ['Bagaj', 'El Bagajı'], ['Uçak Bileti', 'Biniş Kartı'],
  ['Türbülans', 'Rota'], ['Aktarma', 'Direkt Uçuş'],

  // === OYUN KARAKTERLERİ ===
  ['Mario', 'Luigi'], ['Pikachu', 'Charizard'], ['Link', 'Zelda'],
  ['Master Chief', 'Doom Guy'], ['Kratos', 'Dante'],
  ['Lara Croft', 'Nathan Drake'], ['Sonic', 'Knuckles'],
  ['Pac-Man', 'Donkey Kong'], ['Cloud', 'Sephiroth'],
  ['Geralt', 'Yennefer'], ['Ezio', 'Altair'],
  ['Arthur Morgan', 'John Marston'], ['Kirby', 'Yoshi'],
  ['Mega Man', 'Zero'], ['Samus', 'Metroid'],

  // === SOSYAL MEDYA TERİMLERİ ===
  ['Viral', 'Trend'], ['Follow', 'Unfollow'],
  ['Share', 'Repost'], ['Comment', 'Reply'],
  ['Block', 'Mute'], ['Notification', 'Ping'],
  ['Filter', 'Efekt'], ['Boomerang', 'Time-lapse'],
  ['Carousel', 'Grid'], ['Caption', 'Bio'],
  ['Verified', 'Public'], ['Private', 'Restricted'],

  // === CAFE & KAHVE ===
  ['Americano', 'Filtre Kahve'], ['Macchiato', 'Cortado'],
  ['Mocha', 'White Mocha'], ['Cold Brew', 'Iced Coffee'],
  ['Affogato', 'Irish Coffee'], ['V60', 'French Press'],
  ['Chemex', 'Aeropress'], ['Türk Kahvesi', 'Dibek Kahvesi'],
  ['Matcha Latte', 'Chai Latte'], ['Flat White', 'Cappuccino'],
  ['Espresso', 'Ristretto'], ['Doppio', 'Lungo'],

  // === AYAKKABI & AKSESUAR ===
  ['Sneaker', 'Spor Ayakkabı'], ['Topuklu', 'Stiletto'],
  ['Sandalet', 'Terlik'], ['Mokasen', 'Loafer'],
  ['Converse', 'Vans'], ['Air Jordan', 'Yeezy'],
  ['Oxford', 'Derby'], ['Chelsea Bot', 'Kovboy Çizme'],
  ['Sırt Çantası', 'Postacı Çantası'], ['Clutch', 'Tote'],
  ['Kol Saati', 'Akıllı Saat'], ['Güneş Gözlüğü', 'Optik'],

  // === EV TEMİZLİĞİ ===
  ['Süpürge', 'Paspas'], ['Deterjan', 'Yumuşatıcı'],
  ['Çamaşır Suyu', 'Sirke'], ['Sünger', 'Bez'],
  ['Elektrik Süpürgesi', 'Robot Süpürge'],
  ['Bulaşık Makinesi', 'Çamaşır Makinesi'],
  ['Ütü', 'Buharlı Ütü'], ['Kurutma Makinesi', 'Çamaşır İpi'],
  ['Toz Bezi', 'Cam Sileceği'], ['Çöp Torbası', 'Poşet'],

  // === SAKAL & BAKIM ===
  ['Sakal', 'Bıyık'], ['Favor', 'Sakal'],
  ['Tıraş Bıçağı', 'Tıraş Makinesi'], ['Jel', 'Wax'],
  ['Parfüm', 'Kolonya'], ['Deodorant', 'Roll-on'],
  ['Şampuan', 'Saç Kremi'], ['Saç Spreyi', 'Saç Köpüğü'],
  ['Manikür', 'Pedikür'], ['Maske', 'Peeling'],
  ['Nemlendirici', 'Güneş Kremi'], ['Fondöten', 'Kapatıcı'],

  // === MEKAN & MİMARİ ===
  ['Gökdelen', 'Kule'], ['Köprü', 'Viyadük'],
  ['Amfi', 'Stadyum'], ['Müze', 'Sanat Galerisi'],
  ['Kütüphane', 'Kitapçı'], ['Cami', 'Minare'],
  ['Çan Kulesi', 'Saat Kulesi'], ['Kervansaray', 'Han'],
  ['Medrese', 'Külliye'], ['Bedesten', 'Çarşı'],
  ['Hamam', 'Türbe'], ['Sur', 'Kale'],

  // === PIZZA ÇEŞİTLERİ ===
  ['Margarita', 'Napoli'], ['Pepperoni', 'Sucuklu'],
  ['Karışık', 'Vejeteryan'], ['Hawaii', 'BBQ Tavuk'],
  ['Calzone', 'Stromboli'], ['Dört Peynirli', 'Üç Mantarlı'],
  ['Lahmacun', 'Pide'], ['New York Pizza', 'İtalyan Pizza'],
  ['Thin Crust', 'Deep Dish'], ['Acılı', 'Soğanlı'],

  // === TATIL BÖLGELERİ ===
  ['Antalya', 'Muğla'], ['Bodrum', 'Çeşme'],
  ['Fethiye', 'Kaş'], ['Marmaris', 'Datça'],
  ['Alanya', 'Side'], ['Kuşadası', 'Didim'],
  ['Ayvalık', 'Cunda'], ['Alaçatı', 'Çeşme'],
  ['Kapadokya', 'Pamukkale'], ['Olimpos', 'Kabak'],
  ['Sapanca', 'Abant'], ['Uzungöl', 'Ayder'],

  // === KOKU & PARFÜM ===
  ['Vanilya', 'Misk'], ['Lavanta', 'Yasemin'],
  ['Gül', 'Sümbül'], ['Sandal Ağacı', 'Sedir'],
  ['Bergamot', 'Portakal Çiçeği'], ['Amber', 'Oud'],
  ['Karamel', 'Kakao'], ['Tarçın', 'Karanfil'],
  ['Okyanus', 'Yağmur'], ['Taze Çimen', 'Orman'],

  // === DANS TÜRÜ ===
  ['Valse', 'Foxtrot'], ['Cha-Cha', 'Merengue'],
  ['Swing', 'Jive'], ['Bolero', 'Paso Doble'],
  ['Polka', 'İrlanda Dansı'], ['Belly Dance', 'Flamenko'],
  ['Capoeira', 'Breakdance'], ['Twerk', 'Shuffle'],
  ['Moonwalk', 'Robot Dansı'], ['Kolbastı', 'Lezginka'],

  // === PODCAST KATEGORİLERİ ===
  ['True Crime', 'Gizem'], ['Komedi', 'Stand-Up'],
  ['Bilim', 'Teknoloji'], ['Sağlık', 'Wellness'],
  ['Politika', 'Ekonomi'], ['Spor', 'E-Spor'],
  ['Felsefe', 'Tarih'], ['Kişisel Gelişim', 'Motivasyon'],
  ['Sanat', 'Edebiyat'], ['Girişimcilik', 'İnovasyon'],

  // === KAMP & DOĞA ===
  ['Çadır', 'Karavan'], ['Uyku Tulumu', 'Mat'],
  ['Kamp Ateşi', 'Mangal'], ['Matara', 'Termos'],
  ['Pusula', 'GPS'], ['Bıçak', 'Çakı'],
  ['Fener', 'Kafa Lambası'], ['İp', 'Karabina'],
  ['Olta', 'Ağ'], ['Dürbün', 'Teleskop'],
  ['Harita', 'Pusula'], ['Yürüyüş Botu', 'Trekking Ayakkabı'],

  // === FİTNESS & SPOR SALONU ===
  ['Dambıl', 'Barbell'], ['Bench Press', 'Squat'],
  ['Deadlift', 'Shoulder Press'], ['Pull-up', 'Push-up'],
  ['Plank', 'Crunch'], ['Burpee', 'Mountain Climber'],
  ['Treadmill', 'Eliptik'], ['Rowing', 'Step'],
  ['Kettlebell', 'Medicine Ball'], ['TRX', 'Resistance Band'],
  ['HIIT', 'Tabata'], ['Spinning', 'Aerobik'],

  // === POSTA & KARGO ===
  ['Zarf', 'Paket'], ['Pul', 'Damga'],
  ['Kurye', 'Postacı'], ['Kargo', 'Teslimat'],
  ['APS', 'Taahhütlü'], ['Iade', 'Değişim'],
  ['Takip Numarası', 'Barkod'], ['Posta Kutusu', 'Kapıda Teslimat'],

  // === CEZVE & MUTFAK EK ===
  ['Cezve', 'Çaydanlık'], ['Demlik', 'Süzgeç'],
  ['Tuzluk', 'Biberlik'], ['Yağdanlık', 'Sirkelik'],
  ['Peçetelik', 'Ekmeklik'], ['Şekerlik', 'Bal Kavanozu'],
  ['Termos', 'Sürahi'], ['Buz Kalıbı', 'Buz Kovası'],
  ['Spatula', 'Servis Kaşığı'], ['Maşa', 'Cımbız'],

  // === ARABA PARÇALARI ===
  ['Direksiyon', 'Vites'], ['Fren', 'Gaz'],
  ['Debriyaj', 'El Freni'], ['Ayna', 'Cam'],
  ['Far', 'Sinyal'], ['Klakson', 'Silecek'],
  ['Lastik', 'Jant'], ['Motor', 'Şanzıman'],
  ['Egzoz', 'Katalizör'], ['Tampon', 'Çamurluk'],
  ['Torpido', 'Bagaj'], ['Sunroof', 'Tavan'],

  // === MASA OYUNLARI ===
  ['Catan', 'Ticket to Ride'], ['Codenames', 'Dixit'],
  ['Carcassonne', 'Azul'], ['Pandemic', 'Forbidden Island'],
  ['7 Wonders', 'Splendor'], ['King of Tokyo', 'Munchkin'],
  ['Sequence', 'Clue'], ['Scrabble', 'Bananagrams'],
  ['Trivial Pursuit', 'Cranium'], ['Connect 4', 'Mastermind'],

  // === MAKARNA TÜRLERİ ===
  ['Spagetti', 'Linguine'], ['Penne', 'Rigatoni'],
  ['Fusilli', 'Farfalle'], ['Fettuccine', 'Tagliatelle'],
  ['Ravioli', 'Tortellini'], ['Lasagna', 'Cannelloni'],
  ['Gnocchi', 'Orzo'], ['Carbonara', 'Bolognese'],
  ['Alfredo', 'Arrabbiata'], ['Pesto', 'Aglio Olio'],

  // === KUŞLAR DETAY ===
  ['Bülbül', 'Kanarya'], ['Sığırcık', 'Ötleğen'],
  ['Çaylak', 'Doğan'], ['Atmaca', 'Kerkenez'],
  ['Turna', 'Leylek'], ['Kuğu', 'Pelikan'],
  ['Papağan', 'Kakadu'], ['İspinoz', 'Serçe'],
  ['Çalıkuşu', 'Saksağan'], ['Alakarga', 'Kuzgun'],

  // === BÜYÜKŞEHIR & SEMT ===
  ['Kadıköy', 'Beşiktaş'], ['Beyoğlu', 'Şişli'],
  ['Üsküdar', 'Fatih'], ['Bakırköy', 'Florya'],
  ['Taksim', 'Galata'], ['Bostancı', 'Moda'],
  ['Kızılay', 'Çankaya'], ['Alsancak', 'Konak'],
  ['Bornova', 'Karşıyaka'], ['Lara', 'Konyaaltı'],

  // === BANYO & TUVALET ===
  ['Sabun', 'Duş Jeli'], ['Diş Fırçası', 'Diş Macunu'],
  ['Havlu', 'Bornoz'], ['Duş Başlığı', 'Musluk'],
  ['Ayna', 'Tartı'], ['Tuvalet Kağıdı', 'Islak Mendil'],
  ['Saç Kurutma Makinesi', 'Düzleştirici'],
  ['Tıraş Köpüğü', 'After Shave'],
  ['Banyo Halısı', 'Paspas'], ['Sabunluk', 'Dispenser'],

  // === TATIL AKTİVİTELERİ ===
  ['Parasailing', 'Jet Ski'], ['Banana', 'Ringo'],
  ['Dalış', 'Şnorkel'], ['Tekne Turu', 'Jeep Safari'],
  ['Quad', 'Buggy'], ['Yamaç Paraşütü', 'Bungee'],
  ['Trekking', 'Bisiklet Turu'], ['At Binme', 'Safari'],
  ['Rafting', 'Kanyoning'], ['Zipline', 'Via Ferrata'],

  // === BİLGİSAYAR OYUNLARI ===
  ['GTA', 'Watch Dogs'], ['FIFA', 'PES'],
  ['Call of Duty', 'Battlefield'], ['Counter-Strike', 'Valorant'],
  ['League of Legends', 'Dota 2'], ['Overwatch', 'Apex Legends'],
  ['Among Us', 'Fall Guys'], ['Rocket League', 'Trackmania'],
  ['The Sims', 'Animal Crossing'], ['Civilization', 'Age of Empires'],
  ['Diablo', 'Path of Exile'], ['World of Warcraft', 'Final Fantasy'],
  ['Resident Evil', 'Silent Hill'], ['Dark Souls', 'Elden Ring'],

  // === TÜRK MARKALARI ===
  ['Ülker', 'ETİ'], ['Beko', 'Arçelik'], ['THY', 'Pegasus'],
  ['Vestel', 'Altus'], ['LC Waikiki', 'DeFacto'],
  ['Migros', 'BİM'], ['A101', 'ŞOK'],
  ['Turkcell', 'Vodafone'], ['Getir', 'Yemeksepeti'],
  ['Trendyol', 'Hepsiburada'], ['Sahibinden', 'Letgo'],
  ['Garanti', 'İş Bankası'], ['Akbank', 'Yapı Kredi'],

  // === ÇEREZ & ATIŞTI RMALIK ===
  ['Cips', 'Patlamış Mısır'], ['Kraker', 'Grissini'],
  ['Çubuk Kraker', 'Tuzlu Fıstık'], ['Kuru Üzüm', 'Kuru Kayısı'],
  ['Leblebi', 'Ay Çekirdeği'], ['Çekirdek', 'Fıstık'],
  ['Gofret', 'Bisküvi'], ['Çikolatalı Bar', 'Protein Bar'],
  ['Sakız', 'Şeker'], ['Lolipop', 'Bonbon'],
  ['Jelibon', 'Yumuşak Şeker'], ['Marşmelov', 'Pamuk Şeker'],

  // === MEŞRUBAT ===
  ['Fanta', 'Yedigün'], ['Sprite', 'Seven Up'],
  ['Schweppes', 'Tonik'], ['Enerji İçeceği', 'Kahve'],
  ['Ayran', 'Şalgam'], ['Şerbet', 'Komposto'],
  ['Limonata', 'Vişne Suyu'], ['Buzlu Çay', 'Soğuk Kahve'],
  ['Smoothie', 'Açaí Bowl'], ['Kombucha', 'Kefir'],

  // === DOĞUM GÜNÜ ===
  ['Pasta', 'Mum'], ['Balon', 'Konfeti'],
  ['Hediye', 'Sürpriz'], ['Şapka', 'Düdük'],
  ['Davetiye', 'Misafir'], ['Oyun', 'Animasyon'],
  ['Fotoğraf', 'Video'], ['Dilekler', 'Şarkı'],

  // === EV HAYVANLARI DETAY ===
  ['British Shorthair', 'Scottish Fold'], ['Persian', 'Siyam'],
  ['Golden Retriever', 'Labrador'], ['Husky', 'Malamute'],
  ['Poodle', 'Bichon'], ['Bulldog', 'Pug'],
  ['German Shepherd', 'Belgian Malinois'], ['Beagle', 'Cocker Spaniel'],
  ['Chihuahua', 'Yorkshire'], ['Kangal', 'Akbaş'],

  // === MEVSIM MEYVELERI ===
  ['Çilek', 'Kiraz'], ['Karpuz', 'Kavun'],
  ['Şeftali', 'Nektarin'], ['İncir', 'Dut'],
  ['Nar', 'Ayva'], ['Mandalina', 'Portakal'],
  ['Kestane', 'Hurma'], ['Erik', 'Kayısı'],

  // === KIRTASİYE ===
  ['Kurşun Kalem', 'Uçlu Kalem'], ['Tükenmez', 'Dolma Kalem'],
  ['Silgi', 'Düzeltme Kalemi'], ['Cetvel', 'Açıölçer'],
  ['Pergel', 'İletki'], ['Boya Kalemi', 'Pastel'],
  ['Keçeli Kalem', 'Fosforlu'], ['Makas', 'Yapıştırıcı'],
  ['Zımba', 'Delgeç'], ['Dosya', 'Klasör'],
  ['Post-it', 'Not Defteri'], ['Kalemtıraş', 'Silgi'],

  // === BANKA & PARA İŞLEMLERİ ===
  ['Havale', 'EFT'], ['İnternet Bankacılığı', 'Mobil Banka'],
  ['Kredi Kartı', 'Banka Kartı'], ['Vadeli', 'Vadesiz'],
  ['Döviz', 'Altın'], ['Fon', 'Hisse'],
  ['Sigorta', 'Emeklilik'], ['İpotek', 'Kefalet'],

  // === ANTRENMAN TÜRÜ ===
  ['Koşu', 'Sprint'], ['Jogging', 'Tempolu Koşu'],
  ['Interval', 'Fartlek'], ['Ağırlık', 'Vücut Ağırlığı'],
  ['Esneme', 'Isınma'], ['Soğuma', 'Recovery'],
  ['Kardiyo', 'Güç'], ['Fonksiyonel', 'İzometrik'],

  // === HAYVAN SESLERİ ===
  ['Miyav', 'Hav'], ['Möö', 'Meee'],
  ['Gıdak', 'Vak'], ['Cik Cik', 'Ötme'],
  ['Kükreme', 'Uluma'], ['Hırlama', 'Havlama'],
  ['Vızıltı', 'Cırıldama'], ['Fokurdama', 'Tıslama'],

  // === İNŞAAT & YAPI ===
  ['Vinç', 'Kepçe'], ['Buldozer', 'Ekskavatör'],
  ['Beton Mikseri', 'Silindir'], ['İskele', 'Kalıp'],
  ['Çimento', 'Harç'], ['Tuğla', 'Briket'],
  ['Demir', 'Çelik'], ['Kereste', 'Kontrplak'],
  ['Yalıtım', 'İzolasyon'], ['Çatı', 'Teras'],

  // === SARI SAYFALAR ===
  ['Tesisatçı', 'Elektrikçi'], ['Boyacı', 'Badanacı'],
  ['Çilingir', 'Anahtarcı'], ['Döşemeci', 'Tapetçi'],
  ['Sobacı', 'Klimacı'], ['Cam Ustası', 'Doğramacı'],
  ['Marangoz', 'Mobilyacı'], ['Kaporta', 'Boyacı'],

  // === TAKVİYE & VİTAMİN ===
  ['Vitamin C', 'Vitamin D'], ['Omega 3', 'Balık Yağı'],
  ['Probiyotik', 'Prebiyotik'], ['Protein Tozu', 'BCAA'],
  ['Kreatin', 'Glutamin'], ['Demir', 'Çinko'],
  ['Magnezyum', 'Kalsiyum'], ['Kolajen', 'Hyaluronik Asit'],

  // === KUAFÖR & GÜZELLİK ===
  ['Röfle', 'Ombre'], ['Balayage', 'Highlight'],
  ['Düz Kesim', 'Katman'], ['Perma', 'Bigudi'],
  ['Keratin', 'Botoks'], ['Saç Boyası', 'Sprey'],
  ['Fön', 'Maşa'], ['Topuz', 'Örgü'],

  // === AKTİVİTE & WORKSHOP ===
  ['El Yapımı Mum', 'Sabun Yapımı'], ['Seramik Atölyesi', 'Cam Üfleme'],
  ['Resim Kursu', 'Heykel Atölyesi'], ['Aşçılık Kursu', 'Barista Eğitimi'],
  ['Fotoğraf Turu', 'Şehir Turu'], ['Wine Tasting', 'Çikolata Tadımı'],
  ['Yoga Retreat', 'Meditasyon Kampı'], ['Dans Kursu', 'Müzik Dersi'],

  // === ANİME & MANGA ===
  ['Naruto', 'Sasuke'], ['Goku', 'Vegeta'],
  ['Luffy', 'Zoro'], ['Light', 'L'],
  ['Eren', 'Mikasa'], ['Levi', 'Erwin'],
  ['Tanjiro', 'Zenitsu'], ['Gon', 'Killua'],
  ['Edward', 'Alphonse'], ['Spike', 'Jet'],
  ['Sailor Moon', 'Cardcaptor'], ['Dragon Ball', 'One Piece'],
  ['Naruto', 'Bleach'], ['Attack on Titan', 'Demon Slayer'],
  ['My Hero Academia', 'Jujutsu Kaisen'], ['Cowboy Bebop', 'Samurai Champloo'],

  // === ASTROLOJİ & BURÇLAR ===
  ['Koç', 'Boğa'], ['İkizler', 'Yengeç'],
  ['Aslan', 'Başak'], ['Terazi', 'Akrep'],
  ['Yay', 'Oğlak'], ['Kova', 'Balık'],
  ['Güneş Burcu', 'Yükselen'], ['Retrograd', 'Transit'],
  ['Astroloji', 'Astronomi'], ['Natal Harita', 'Sinastri'],

  // === FİLM TÜRÜ ===
  ['Aksiyon', 'Macera'], ['Komedi', 'Romantik Komedi'],
  ['Dram', 'Gerilim'], ['Korku', 'Psikolojik'],
  ['Bilim Kurgu', 'Fantastik'], ['Western', 'Savaş'],
  ['Animasyon', 'Stop Motion'], ['Belgesel', 'Biyopi'],
  ['Noir', 'Neo-noir'], ['Musical', 'Dans Filmi'],
  ['Aksiyon Komedi', 'Buddy Film'], ['Distopya', 'Ütopya'],

  // === TÜRK FİLMLERİ ===
  ['Babam ve Oğlum', 'Ayla'], ['GORA', 'AROG'],
  ['Nefes', 'Dağ'], ['Kelebeğin Rüyası', 'Mucize'],
  ['Vizontele', 'Pardon'], ['Düğün Dernek', 'Eyyvah Eyvah'],
  ['Recep İvedik', 'Kolpaçino'], ['Eşkıya', 'Züğürt Ağa'],
  ['Hababam Sınıfı', 'Süt Kardeşler'], ['Tosun Paşa', 'Şaban'],

  // === TİKTOK & TREND ===
  ['Reel', 'Shorts'], ['Duet', 'Stitch'],
  ['FYP', 'Explore'], ['Sound', 'Remix'],
  ['Trend', 'Challenge'], ['POV', 'Storytime'],
  ['GRWM', 'OOTD'], ['Transition', 'Efekt'],
  ['Aesthetic', 'Cottagecore'], ['Dark Academia', 'Light Academia'],

  // === TATLI ÇEŞİTLERİ DETAY ===
  ['Fıstıklı Baklava', 'Cevizli Baklava'], ['Burma Kadayıf', 'Tel Kadayıf'],
  ['San Sebastian', 'New York Cheesecake'], ['Red Velvet', 'Carrot Cake'],
  ['Lemon Curd', 'Key Lime'], ['Croquembouche', 'Profiterol Kule'],
  ['Mochi', 'Dango'], ['Churros', 'Waffle'],
  ['Cookie', 'Muffin'], ['Brownie', 'Blondie'], ['Tart', 'Pie'],

  // === ÇİÇEKLER DETAY ===
  ['Karanfil', 'Kasımpatı'], ['Menekşe', 'Leylak'],
  ['Gelincik', 'Sardunya'], ['Yıldız Çiçeği', 'Dahlia'],
  ['Mimoza', 'Akasya'], ['Ortanca', 'Lavanta'],
  ['Zambak', 'Nilüfer'], ['Nergis', 'Sümbül'],
  ['Begonya', 'Fuchsia'], ['Açelya', 'Kamelya'],
  ['Glayöl', 'Iris'], ['Çuha Çiçeği', 'Yasemin'],

  // === BAYRAM & ÖZEL GÜN ===
  ['Ramazan', 'Kurban'], ['Bayram Şekeri', 'Çikolata'],
  ['Yılbaşı', 'Noel'], ['Sevgililer Günü', 'Anneler Günü'],
  ['Babalar Günü', 'Öğretmenler Günü'], ['23 Nisan', '19 Mayıs'],
  ['29 Ekim', '30 Ağustos'], ['Cadılar Bayramı', 'Şükran Günü'],
  ['Paskalya', 'Hanuka'], ['Karnaval', 'Festival'],

  // === MÜZİKALLER & SAHNE ===
  ['Phantom', 'Les Misérables'], ['Hamilton', 'Dear Evan Hansen'],
  ['West Side Story', 'Grease'], ['Cats', 'Chicago'],
  ['Lion King', 'Wicked'], ['Mamma Mia', 'Moulin Rouge'],
  ['Rent', 'Hairspray'], ['Annie', 'Oliver'],

  // === DÜNYA HARİKALARI ===
  ['Çin Seddi', 'Machu Picchu'], ['Petra', 'Chichen Itza'],
  ['Kolezyum', 'Tac Mahal'], ['Cristo Redentor', 'Eyfel Kulesi'],
  ['Özgürlük Heykeli', 'Big Ben'], ['Acropolis', 'Stonehenge'],
  ['Angkor Wat', 'Borobudur'], ['Niagara', 'İguazu'],
  ['Grand Canyon', 'Uluru'], ['Büyük Set Resifi', 'Amazon'],

  // === SABAH & GECE RUTİNİ ===
  ['Alarm', 'Erteleme'], ['Kahvaltı', 'Duş'],
  ['Diş Fırçalama', 'Saç Yapma'], ['Giyinme', 'Makyaj'],
  ['Egzersiz', 'Meditasyon'], ['Cilt Bakımı', 'Banyo'],
  ['Günlük', 'Planlama'], ['Uyku', 'Rüya'],

  // === OTOMOBİL MARKALARI EK ===
  ['Nissan', 'Mazda'], ['Subaru', 'Mitsubishi'],
  ['Peugeot', 'Citroen'], ['Alfa Romeo', 'Lancia'],
  ['Seat', 'Skoda'], ['Opel', 'Vauxhall'],
  ['Lexus', 'Infiniti'], ['Acura', 'Genesis'],
  ['Bugatti', 'Pagani'], ['McLaren', 'Aston Martin'],

  // === SOKAK İFADELERİ ===
  ['Efsane', 'Destansı'], ['Harika', 'Muhteşem'],
  ['Süper', 'Mükemmel'], ['Bomba', 'Fırtına'],
  ['Kral', 'Patron'], ['Moruk', 'Kanka'],
  ['Reis', 'Şef'], ['Chill', 'Relax'],
  ['Flex', 'Vibe'], ['Slay', 'Iconic'],

  // === TARİHİ KİŞİLER ===
  ['Fatih Sultan Mehmet', 'Kanuni'], ['Atatürk', 'İnönü'],
  ['Napoleon', 'Wellington'], ['Caesar', 'Brutus'],
  ['Kleopatra', 'Nefertiti'], ['Da Vinci', 'Michelangelo'],
  ['Einstein', 'Newton'], ['Edison', 'Tesla'],
  ['Mozart', 'Beethoven'], ['Shakespeare', 'Moliere'],
  ['Marco Polo', 'Kristof Kolomb'], ['Magellan', 'Vasco da Gama'],

  // === YEMEK PİŞİRME YÖNTEMLERİ ===
  ['Kızartma', 'Fırınlama'], ['Haşlama', 'Buğulama'],
  ['Izgara', 'Mangal'], ['Sote', 'Kavurma'],
  ['Marine', 'Terbiye'], ['Fermantasyon', 'Turşu'],
  ['Sous Vide', 'Dumanlama'], ['Tandır', 'Güveç'],

  // === TATLAR & AROMALAR ===
  ['Tatlı', 'Ekşi'], ['Acı', 'Tuzlu'],
  ['Umami', 'Bitter'], ['Baharatlı', 'Aromatik'],
  ['Kremamsı', 'Gevrek'], ['Tütsülenmiş', 'Karamelize'],
  ['Fermente', 'Turşu'], ['Nane', 'Mentol'],

  // === DENİZ ARAÇLARI ===
  ['Gulet', 'Yelkenli'], ['Katamaran', 'Trimaran'],
  ['Ponton', 'Duba'], ['Kruvaziyer', 'Feribot'],
  ['Tanker', 'Kargo Gemisi'], ['Balıkçı Teknesi', 'Trol'],

  // === HAYVANLARIN YAŞAM ALANLARI ===
  ['Yuva', 'Kovuk'], ['İn', 'Barınak'],
  ['Kovan', 'Karınca Yuvası'], ['Akuaryum', 'Teraryum'],
  ['Ağıl', 'Ahır'], ['Kümes', 'Samanlık'],
  ['Çiftlik', 'Ağıl'], ['Bataklık', 'Sazlık']
];

// Tüm kelimeleri tek liste halinde al
function getAllWords() {
  const allWords = [];
  for (const category of Object.values(wordCategories)) {
    allWords.push(...category);
  }
  return [...new Set(allWords)];
}

// Rastgele kelime seç (kullanılmış kelimeleri hariç tut)
function getRandomWord(excludeWords = []) {
  let words = getAllWords();
  if (excludeWords.length > 0) {
    const excludeSet = new Set(excludeWords);
    const filtered = words.filter(w => !excludeSet.has(w));
    if (filtered.length > 0) words = filtered;
    // Tüm kelimeler tükendiyse sıfırla (full list kullan)
  }
  return words[Math.floor(Math.random() * words.length)];
}

// Benzer kelime çifti seç (kullanılmış çiftleri hariç tut)
function getRandomSimilarPair(excludePairs = []) {
  let pairs = similarWordPairs;
  if (excludePairs.length > 0) {
    const excludeSet = new Set(excludePairs.map(p => p.sort().join('||')));
    const filtered = pairs.filter(p => {
      const key = [...p].sort().join('||');
      return !excludeSet.has(key);
    });
    if (filtered.length > 0) pairs = filtered;
    // Tüm çiftler tükendiyse sıfırla (full list kullan)
  }
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
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
