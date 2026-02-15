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
  ['Kedi', 'Köpek', 'Tavşan'], ['Aslan', 'Kaplan', 'Leopar', 'Çita'],
  ['Kurt', 'Tilki', 'Çakal'], ['Ayı', 'Panda', 'Koala'],
  ['Fil', 'Gergedan', 'Suaygırı'], ['Zürafa', 'Deve', 'Lama'],
  ['Zebra', 'At', 'Eşek'], ['Kanguru', 'Koala', 'Panda'],
  ['Penguen', 'Martı', 'Pelikan'], ['Yunus', 'Balina', 'Fok'],
  ['Köpekbalığı', 'Yunus', 'Balina'], ['Tavşan', 'Sincap', 'Hamster', 'Kirpi'],
  ['Kaplumbağa', 'Timsah', 'İguana'], ['Yılan', 'Kertenkele', 'Bukalemun'],
  ['Kartal', 'Şahin', 'Akbaba'], ['Baykuş', 'Yarasa', 'Guguk Kuşu'],
  ['Papağan', 'Muhabbet Kuşu', 'Kanarya'], ['Flamingo', 'Pelikan', 'Leylek'],
  ['Karga', 'Güvercin', 'Serçe'], ['Ördek', 'Kaz', 'Kuğu'],
  ['Arı', 'Eşek Arısı', 'Yaban Arısı'], ['Kelebek', 'Yusufçuk', 'Ateş Böceği'],
  ['Karınca', 'Böcek', 'Örümcek'], ['Ahtapot', 'Kalamar', 'Denizanası'],
  ['Maymun', 'Goril', 'Şempanze', 'Orangutan'], ['İnek', 'Manda', 'Bizon'],
  ['Koyun', 'Keçi', 'Kuzu'], ['Tavuk', 'Hindi', 'Bıldırcın'],

  // === MESLEKLER ===
  ['Doktor', 'Hemşire', 'Eczacı', 'Veteriner'], ['Avukat', 'Savcı', 'Hakim'],
  ['Polis', 'İtfaiyeci', 'Asker'], ['Pilot', 'Kaptan', 'Hostes'],
  ['Öğretmen', 'Profesör', 'Akademisyen'], ['Mühendis', 'Mimar', 'Tasarımcı'],
  ['Aktör', 'Yönetmen', 'Senarist'], ['Ressam', 'Heykeltıraş', 'İllüstratör'],
  ['Gazeteci', 'Editör', 'Muhabir'], ['Fotoğrafçı', 'Kameraman', 'Yönetmen'],
  ['Kasap', 'Fırıncı', 'Manav'], ['Berber', 'Kuaför', 'Güzellik Uzmanı'],
  ['Terzi', 'Modacı', 'Stilist'], ['Garson', 'Barmen', 'Aşçı'],
  ['Psikolog', 'Psikiyatrist', 'Terapist'], ['Cerrah', 'Doktor', 'Anestezist'],

  // === SPOR ===
  ['Futbol', 'Basketbol', 'Voleybol', 'Hentbol'],
  ['Tenis', 'Masa Tenisi', 'Badminton'], ['Boks', 'Güreş', 'Halter'],
  ['Karate', 'Judo', 'Tekvando', 'Aikido'], ['Kayak', 'Snowboard', 'Buz Pateni'],
  ['Yüzme', 'Dalış', 'Sörf', 'Yelken'], ['Bisiklet', 'Scooter', 'Paten'],
  ['Golf', 'Bowling', 'Bilardo', 'Dart'], ['Beyzbol', 'Kriket', 'Softbol'],
  ['Okçuluk', 'Eskrim', 'Atıcılık'], ['Dağcılık', 'Paraşüt', 'Yamaç Paraşütü'],
  ['Atletizm', 'Maraton', 'Triatlon'], ['Rugby', 'Amerikan Futbolu', 'Hokey'],

  // === ÜLKELER ===
  ['Japonya', 'Çin', 'Güney Kore'], ['İtalya', 'İspanya', 'Portekiz'],
  ['Fransa', 'İngiltere', 'Belçika'], ['Almanya', 'Avusturya', 'İsviçre'],
  ['İsveç', 'Norveç', 'Danimarka', 'Finlandiya'], ['Kanada', 'ABD', 'Meksika'],
  ['Brezilya', 'Arjantin', 'Kolombiya'], ['Mısır', 'Fas', 'Tunus'],
  ['Hindistan', 'Pakistan', 'Bangladeş'], ['Türkiye', 'Yunanistan', 'İtalya'],
  ['Avustralya', 'Yeni Zelanda', 'Fiji'], ['Hollanda', 'Belçika', 'Lüksemburg'],
  ['İran', 'Irak', 'Suriye'], ['Tayland', 'Vietnam', 'Kamboçya'],
  ['Peru', 'Şili', 'Bolivya'], ['Küba', 'Jamaika', 'Porto Riko'],

  // === ŞEHİRLER ===
  ['İstanbul', 'Ankara', 'İzmir'], ['Antalya', 'Bodrum', 'Fethiye'],
  ['Paris', 'Londra', 'Roma', 'Berlin'], ['Tokyo', 'Seul', 'Pekin'],
  ['New York', 'Londra', 'Los Angeles'], ['Barcelona', 'Madrid', 'Lizbon'],
  ['Dubai', 'Abu Dabi', 'Doha'], ['Amsterdam', 'Brüksel', 'Kopenhag'],
  ['Mardin', 'Şanlıurfa', 'Diyarbakır'], ['Trabzon', 'Rize', 'Artvin'],
  ['Gaziantep', 'Adana', 'Mersin'],

  // === OBJELER ===
  ['Telefon', 'Tablet', 'Bilgisayar'], ['Araba', 'Motosiklet', 'Kamyon'],
  ['Uçak', 'Helikopter', 'Roket'], ['Tren', 'Otobüs', 'Metro'],
  ['Gemi', 'Denizaltı', 'Feribot'], ['Bisiklet', 'Motosiklet', 'Scooter'],
  ['Kaykay', 'Paten', 'Scooter'], ['Kitap', 'Defter', 'Dergi'],
  ['Kalem', 'Tükenmez', 'Kurşun Kalem'], ['Saat', 'Kronometre', 'Kum Saati'],
  ['Gözlük', 'Lens', 'Dürbün'], ['Şemsiye', 'Yağmurluk', 'Pardestü'],
  ['Çanta', 'Sırt Çantası', 'Bavul'], ['Ayna', 'Cam', 'Kristal'],
  ['Mum', 'Fener', 'El Feneri'], ['Kamera', 'Fotoğraf Makinesi', 'Kamera'],
  ['Kulaklık', 'Hoparlör', 'Mikrofon'], ['Yastık', 'Yorgan', 'Battaniye'],
  ['Sandalye', 'Koltuk', 'Tabure'], ['Masa', 'Sehpa', 'Çalışma Masası'],
  ['Lamba', 'Avize', 'Abajur'], ['Halı', 'Kilim', 'Paspas'],

  // === DOĞA ===
  ['Güneş', 'Ay', 'Yıldız'], ['Bulut', 'Sis', 'Pus'],
  ['Yağmur', 'Kar', 'Dolu'], ['Fırtına', 'Kasırga', 'Hortum'],
  ['Deprem', 'Tsunami', 'Sel'], ['Yanardağ', 'Şimek', 'Gök Gürültüsü'],
  ['Orman', 'Çöl', 'Bataaklık'], ['Deniz', 'Okyanus', 'Göl'],
  ['Dağ', 'Tepe', 'Vadi', 'Kanyon'], ['Mağara', 'Tünel', 'Yeraltı'],
  ['Ada', 'Yarımada', 'Atol'], ['Plaj', 'Sahil', 'Şelale'],
  ['Buzul', 'Buz Dağı', 'Kutup'], ['Gül', 'Papatya', 'Lale', 'Sümbül'],
  ['Çam', 'Meşe', 'Sedir', 'Çınar'], ['Palmiye', 'Hurma', 'Bambu'],
  ['Kaktüs', 'Aloe Vera', 'Bonsai'], ['Mantar', 'Yosun', 'Mercan'],

  // === EĞLENCE ===
  ['Sinema', 'Tiyatro', 'Opera'], ['Konser', 'Festival', 'Fuar'],
  ['Sirk', 'Lunapark', 'Akvaryum'], ['Piknik', 'Kamp', 'Barbekü'],
  ['Parti', 'Düğün', 'Doğum Günü'], ['Bowling', 'Bilardo', 'Dart'],
  ['Paintball', 'Lazer Tag', 'Kaçış Odası'], ['Rafting', 'Kano', 'Jet Ski'],
  ['ATV', 'Safari', 'Zipline'],

  // === MÜZİK ===
  ['Gitar', 'Bas Gitar', 'Ukulele'], ['Piyano', 'Org', 'Klavye'],
  ['Keman', 'Viyola', 'Çello'], ['Davul', 'Bateri', 'Darbuka'],
  ['Flüt', 'Klarnet', 'Obua'], ['Saksafon', 'Trompet', 'Trombon'],
  ['Bağlama', 'Ud', 'Tambur'], ['Ney', 'Kaval', 'Zurna'],
  ['Kanun', 'Arp', 'Santur'], ['Akordeon', 'Armonika', 'Banjo'],

  // === FİLMLER ===
  ['Harry Potter', 'Yüzüklerin Efendisi', 'Hobbit'],
  ['Batman', 'Spider-Man', 'Superman'], ['Star Wars', 'Star Trek', 'Dune'],
  ['Joker', 'Deadpool', 'Wolverine'], ['Shrek', 'Toy Story', 'Cars'],
  ['Frozen', 'Tangled', 'Moana'], ['Nemo', 'Dory', 'Ratatouille'],
  ['Matrix', 'Inception', 'Interstellar'], ['Avengers', 'Justice League', 'X-Men'],
  ['Jurassic Park', 'King Kong', 'Godzilla'], ['Rocky', 'Karate Kid', 'Creed'],
  ['James Bond', 'Mission Impossible', 'Jason Bourne'],
  ['Fast Furious', 'Need for Speed', 'Cars'],

  // === KAVRAMLAR ===
  ['Aşk', 'Tutku', 'Dostluk'], ['Dostluk', 'Kardeşlik', 'Sadakat'],
  ['Özgürlük', 'Bağımsızlık', 'Adalet'], ['Barış', 'Huzur', 'Sükun'],
  ['Cesaret', 'Kahramanlık', 'Fedakarlık'], ['Mutluluk', 'Neşe', 'Coşku'],
  ['Korku', 'Dehşet', 'Panik'], ['Hayal', 'Rüya', 'Fan'],
  ['Umut', 'İnanç', 'Azim'], ['Sabır', 'Metanet', 'Kararlılık'],
  ['Merak', 'Heyecan', 'Macera'], ['Gurur', 'Onur', 'Şeref'],
  ['Kıskançlık', 'Haset', 'İmrenme'], ['Gizem', 'Sır', 'Muamma'],
  ['Sihir', 'Büyü', 'İllüzyon'], ['Şans', 'Kader', 'Talih'],

  // === TEKNOLOJİ ===
  ['Robot', 'Yapay Zeka', 'Drone'], ['Hologram', 'Sanal Gerçeklik', 'Artırılmış Gerçeklik'],
  ['Bitcoin', 'Ethereum', 'Dogecoin'], ['WiFi', 'Bluetooth', '5G'],
  ['GPS', 'Pusula', 'Harita'], ['TikTok', 'Instagram', 'Snapchat'],
  ['YouTube', 'Twitch', 'Kick'], ['Netflix', 'Disney Plus', 'Amazon Prime'],
  ['Spotify', 'Apple Music', 'Deezer'], ['WhatsApp', 'Telegram', 'Signal'],
  ['Google', 'Bing', 'Yahoo'], ['iPhone', 'Samsung', 'Xiaomi'],
  ['PlayStation', 'Xbox', 'Nintendo'], ['Minecraft', 'Roblox', 'Fortnite'],
  ['Selfie', 'Fotoğraf', 'Video'], ['Emoji', 'Sticker', 'GIF'],

  // === TARİH ===
  ['Piramit', 'Sfenks', 'Kolezeum'], ['Gladyatör', 'Savaşçı', 'Şövalye'],
  ['Şövalye', 'Samurai', 'Ninja'], ['Viking', 'Korsan', 'Gladyatör'],
  ['Firavun', 'Padişah', 'İmparator'], ['Kral', 'İmparator', 'Sultan'],
  ['Kraliçe', 'Prenses', 'Düşes'], ['Kale', 'Saray', 'Hisar'],
  ['Tapınak', 'Kilise', 'Cami'], ['Hazine', 'Altın', 'Mücevher'],

  // === KARIŞIK CROSS-KATEGORİ ===
  ['Yaş', 'Kış', 'İlkbahar', 'Sonbahar'], ['Gece', 'Gündüz', 'Alacakaranlık'],
  ['Ateş', 'Su', 'Toprak', 'Hava'], ['Sıcak', 'Soğuk', 'İlık'],
  ['Hızlı', 'Yavaş', 'Orta'], ['Tatlı', 'Tuzlu', 'Ekşi', 'Acı'],
  ['Altın', 'Gümüş', 'Bronz'], ['Elmas', 'Yakut', 'Zümrüt', 'Safir'],
  ['Çekiç', 'Tornavida', 'Pense'], ['Makas', 'Bıçak', 'Testere'],

  // === MEKANLAR ===
  ['Hastane', 'Eczane', 'Klinik'], ['Okul', 'Kütüphane', 'Üniversite'],
  ['Market', 'Bakkal', 'Manav'], ['Restoran', 'Kafe', 'Bistro'],
  ['Otel', 'Hostel', 'Pansiyon'], ['Cami', 'Kilise', 'Sinagog'],
  ['Müze', 'Galeri', 'Sergi'], ['Havalimanı', 'Otogar', 'İstasyon'],
  ['Stadyum', 'Arena', 'Spor Salonu'], ['Park', 'Bahçe', 'Orman'],
  ['AVM', 'Çarşı', 'Pazar'], ['Postane', 'Kargo', 'Kurye'],

  // === GİYSİLER ===
  ['Gömlek', 'Tişört', 'Polo'], ['Pantolon', 'Şort', 'Taşyt'],
  ['Ceket', 'Mont', 'Parka', 'Yelek'], ['Etek', 'Elbise', 'Tulum'],
  ['Şapka', 'Bere', 'Keş'], ['Eldiven', 'Atkı', 'Eşarp'],
  ['Bot', 'Ayakkabı', 'Sandalet'], ['Kravat', 'Papyon', 'Fular'],
  ['Pijama', 'Eşofman', 'Gece elbisesi'], ['Mayo', 'Bikini', 'Sort'],

  // === MEVSİMLER & ZAMAN ===
  ['İlkbahar', 'Sonbahar', 'Yaz', 'Kış'],
  ['Ocak', 'Şubat', 'Mart'], ['Pazartesi', 'Salı', 'Çarşamba'],

  // === MEYVELER & SEBZELER ===
  ['Karpuz', 'Kavun', 'Hıyar'], ['Muz', 'Ananas', 'Kivi'],
  ['Limon', 'Greyfurt', 'Bergamot'], ['Şeftali', 'Kayisı', 'Nektarin'],
  ['Erik', 'Vişne', 'Kiraz'], ['Brokoli', 'Karnabahar', 'Lahana'],
  ['Patlican', 'Biber', 'Sivri Biber'], ['Marul', 'Ispanak', 'Roka'],

  // === EK YİYECEK ===
  ['Çiğ Köfte', 'Falafel', 'Hummus'], ['Sushi', 'Sashimi', 'Ramen'],
  ['Helva', 'Lokum', 'Aşure'], ['Yumurta', 'Omlet', 'Menemen'],
  ['Çorba', 'Güveç', 'Yahni'], ['Makarna', 'Erişte', 'Noodle'],

  // === EK HAYVAN ===
  ['Serçe', 'Saka', 'Saksğgan'], ['Suaygırı', 'Gergedan', 'Bizon'],
  ['Leopar', 'Jaguar', 'Çita'], ['Hamster', 'Kobay', 'Çinçilla'],
  ['Güvercin', 'Kumru', 'Baldırçın'], ['Tavus Kuşu', 'Flamingo', 'Turna'],
  ['Fok', 'Deniz Aslanı', 'Mors'],

  // === EK SPOR ===
  ['Jimnastik', 'Bale', 'Dans'], ['Kano', 'Kürek', 'Rafting'],
  ['Satranç', 'Dama', 'Go'], ['Buz Pateni', 'Paten', 'Kaykay'],

  // === EK TEKNOLOJİ ===
  ['Laptop', 'Tablet', 'Akıllı Saat'], ['VR', 'AR', 'Metaverse'],
  ['ChatGPT', 'Google', 'Siri', 'Alexa'], ['Twitter', 'Facebook', 'LinkedIn'],
  ['Uber', 'Taksi', 'Dolmuş'], ['Amazon', 'Trendyol', 'Hepsiburada'],
  ['Zoom', 'Teams', 'Discord'],

  // === EK MEYVELER & SEBZELER ===
  ['İncir', 'Hurma'], ['Domates', 'Biber', 'Salatalık'], ['Kabak', 'Patlıcan', 'Sivri Biber'],
  ['Ispanak', 'Semizotu', 'Roka'], ['Havuç', 'Turp', 'Pancar'],
  ['Patates', 'Soğan', 'Sarımsak'], ['Elma', 'Armut', 'Ayva'],
  ['Portakal', 'Mandalina', 'Greyfurt'], ['Çilek', 'Ahududu', 'Böğürtlen', 'Frambuaz'],
  ['Üzüm', 'Vişne', 'Kiraz'], ['Kivi', 'Çarkıfelek', 'Papaya', 'Mango'],
  ['Bamya', 'Bezelye', 'Fasulye'], ['Enginar', 'Kereviz', 'Pırasa'],
  ['Lahana', 'Marul', 'Kıvırcık'], ['Maydanoz', 'Dereotu', 'Nane', 'Roka'],
  ['Kestane', 'Fındık', 'Ceviz', 'Badem'],
  ['Fıstık', 'Leblebi', 'Susam', 'Çörek Otu'],

  // === MARKALAR & ARABALAR ===
  ['Mercedes', 'BMW', 'Audi'], ['Volkswagen', 'Ford', 'Chevrolet', 'Opel'],
  ['Toyota', 'Honda', 'Mazda', 'Nissan'], ['Ferrari', 'Lamborghini', 'Porsche', 'Maserati'],
  ['Tesla', 'Rivian'], ['Hyundai', 'Kia'], ['Fiat', 'Renault', 'Peugeot', 'Citroen'],
  ['Volvo', 'Saab'], ['Rolls Royce', 'Bentley', 'Maybach'],
  ['Jeep', 'Land Rover', 'Range Rover'],
  ['Nike', 'Adidas', 'Puma', 'Reebok'], ['Zara', 'H&M', 'Mango'],
  ['Gucci', 'Prada', 'Louis Vuitton', 'Chanel'], ['Rolex', 'Omega', 'Tag Heuer'],
  ['Apple', 'Samsung', 'Huawei'], ['Sony', 'Panasonic', 'LG', 'Philips'],
  ['Canon', 'Nikon', 'Sony'], ['Dell', 'HP', 'Lenovo', 'Asus'],
  ['Coca Cola', 'Pepsi', 'Fanta'], ['Burger King', 'McDonald\'s', 'KFC'],
  ['Starbucks', 'Caribou'], ['IKEA', 'Koçtaş'],

  // === DANS & SANAT ===
  ['Bale', 'Modern Dans', 'Tango'], ['Vals', 'Salsa', 'Bachata'],
  ['Hip Hop', 'Breakdans', 'Shuffle'], ['Zeybek', 'Horon', 'Halay', 'Hora'],
  ['Samba', 'Rumba', 'Flamenco'],
  ['Heykel', 'Balmumu', 'Seramik'], ['Resim', 'Çizim', 'Grafiti'],
  ['Mozaik', 'Vitray', 'Ebru'], ['Kaligrafi', 'Karikatür', 'Çizgi Roman'],
  ['Opera', 'Müzikal', 'Tiyatro'],

  // === MUTFAK ARAÇLARI ===
  ['Tencere', 'Tava', 'Güveç'], ['Çatal', 'Kaşık', 'Bıçak'],
  ['Tabak', 'Kase', 'Fincan'], ['Bardak', 'Sürahi', 'Kupkek'],
  ['Tepsi', 'Sini'], ['Süzgeç', 'Kevgir', 'Rende'],
  ['Merdane', 'Oklava'], ['Fırın', 'Ocak', 'Izgara'],
  ['Blender', 'Mikser', 'Robot'],

  // === OYUNCAKLAR & OYUNLAR ===
  ['Lego', 'Puzzle', 'Yapboz'], ['Monopoly', 'Risk', 'Catan'],
  ['Jenga', 'Uno', 'Domino'], ['Rubik Küp', 'Bulmaca', 'Sudoku'],
  ['Dart', 'Bilardo', 'Bowling'], ['Tavla', 'Satranç', 'Dama'],
  ['Okey', 'Rummy', 'Mahjong'], ['Tombala', 'Piyango'],
  ['İsim Şehir', 'Tabu', 'Pictionary'],

  // === DENİZ & SU ===
  ['Tekne', 'Yat', 'Yelkenli'], ['Kayık', 'Sandal', 'Kano'],
  ['Feribot', 'Vapur', 'Gemi'], ['Sürat Teknesi', 'Jet Ski', 'Parasail'],
  ['Deniz Yıldızı', 'Denizkestanesi', 'Deniz Kabuğu'],
  ['İstiridye', 'Midye', 'Yengeç'], ['Karides', 'Istakoz', 'Pavurya'],
  ['Levrek', 'Çipura', 'Alabalık'], ['Hamsi', 'Sardalya', 'Palamut'],
  ['Ton', 'Somon', 'Uskumru'], ['Fok', 'Mors', 'Deniz Aslanı'],

  // === MESLEKİ EK ===
  ['Armatör', 'Kaptan', 'Denizci'], ['Diplomat', 'Büyükelçi', 'Konsolos'],
  ['Komiser', 'Müfettiş', 'Dedektif'], ['General', 'Amiral', 'Komutan'],
  ['Programcı', 'Yazılımcı', 'DevOps'], ['Tasımcı', 'İllüstratör', 'Grafiker'],
  ['Komedyen', 'Şovmen', 'Sihirbaz'], ['Danscı', 'Koreograf', 'Balet'],
  ['Şef', 'Aşçıbaşı', 'Pastacı'], ['Eczacı', 'Kimyager', 'Biyolog'],
  ['Fizikçi', 'Matematikçi', 'Astronom'], ['Tarihçi', 'Arkeolog', 'Antropolog'],

  // === RENKLER & TONLAR ===
  ['Kırmızı', 'Turuncu', 'Bordo'], ['Mavi', 'Lacivert', 'Gök Mavisi'],
  ['Yeşil', 'Turkuaz', 'Zümrüt'], ['Sarı', 'Altın', 'Limon Sarısı'],
  ['Mor', 'Lila', 'İndigo'], ['Pembe', 'Somon', 'Mercan'],
  ['Bej', 'Krem', 'Kemik'], ['Gri', 'Gümüş', 'Kül Rengi'],
  ['Kahverengi', 'Bronz', 'Bakır'],

  // === DUYGULAR & HİSSİYAT ===
  ['Sevinç', 'Coşku', 'Mutluluk'], ['Üzüntü', 'Melankoli', 'Keder'],
  ['Öfke', 'Hiddet', 'Sinir'], ['Kaygı', 'Stres', 'Endişe'],
  ['Şefkat', 'Merhamet', 'Empati'], ['Hayranlık', 'Saygı', 'Takdir'],
  ['Utanç', 'Mahcubiyet', 'Pişmanlık'], ['Hırs', 'Azim', 'Kararlılık'],
  ['Özlem', 'Hasret', 'Nostalji'], ['Minnet', 'Şükran', 'Tefekkür'],

  // === MOBİLYA & EV ===
  ['Kanepe', 'Divan', 'Koltuk'], ['Gardırop', 'Şifonyer', 'Komodin'],
  ['Vitrin', 'Büfe', 'Konsol'], ['Raf', 'Kitaplık', 'Dolap'],
  ['Tabure', 'Puf', 'Bank'], ['Beşik', 'Ranza', 'Yer Yatağı'],
  ['Şömine', 'Soba', 'Klima', 'Vanilatör'],
  ['Klima', 'Vantilatör'], ['Aspiratör', 'Davlumbaz'],

  // === TATLILAR & PASTANE ===
  ['Profiterol', 'Supangle', 'Tiramisu'], ['Cheesecake', 'Brownie', 'Sufle'],
  ['Muhallebi', 'Sütlaç', 'Kazandibi', 'Tavuk Göğsü'],
  ['Aşure', 'Keşkül', 'Güllaç'], ['Revani', 'Şambali', 'Trileçe'],
  ['Kadayıf', 'Ekmek Kadayıfı', 'Künefe'],
  ['Tulumba', 'Lokma', 'Donut'], ['Makaron', 'Kurabiye', 'Bisq'],
  ['Kruvasan', 'Poğaça', 'Açma'], ['Eclair', 'Profiterol', 'Berliner'],

  // === UZAY & BİLİM ===
  ['Mars', 'Venüs', 'Merkür'], ['Jüpiter', 'Satürn', 'Neptün'],
  ['Meteor', 'Kuyruklu Yıldız', 'Asteroit'], ['Galaksi', 'Nebula', 'Kara Delik'],
  ['Astronot', 'Kozmonot', 'Pilot'], ['Teleskop', 'Uydu', 'Radar'],
  ['Atom', 'Molekül', 'Hücre'], ['Proton', 'Nötron', 'Elektron'],
  ['DNA', 'RNA', 'Gen'], ['Virüs', 'Bakteri', 'Parazit'],
  ['Enzim', 'Hormon', 'Protein'],

  // === EĞİTİM & KİTAP ===
  ['Roman', 'Hikaye', 'Şiir'], ['Biyografi', 'Otobiyografi', 'Anı'],
  ['Ansiklopedi', 'Sözlük', 'Atlas'], ['Dergi', 'Gazete', 'Blog'],
  ['Kütüphane', 'Arşiv', 'Müze'], ['Okul', 'Kreş', 'Anaokulu'],
  ['Lise', 'Ortaokul', 'İlkokul'], ['Fakülte', 'Yüksekokul', 'Enstitü'],
  ['Seminer', 'Konferans', 'Workshop'], ['Diploma', 'Sertifika', 'Lisans'],

  // === SAVAŞ & TARİH EK ===
  ['Ok', 'Yay', 'Mızrak'], ['Kılıç', 'Kalkan', 'Zırh'],
  ['Top', 'Tüfek', 'Tabanca'], ['Tank', 'Zırhlı Araç', 'Obüs'],
  ['Hisar', 'Kale', 'Sur'], ['Burç', 'Kule', 'Gözetleme'],
  ['Mancınık', 'Trebuchet', 'Koç Başı'],
  ['İmparatorluk', 'Krallık', 'Cumhuriyet'], ['Fetih', 'İşgal', 'İsyan'],

  // === MÜZİK TÜRÜ ===
  ['Pop', 'Rock', 'Alternatif'], ['Jazz', 'Blues', 'Soul'],
  ['Rap', 'Hip Hop', 'Trap'], ['Klasik Müzik', 'Opera', 'Senfonik'],
  ['Country', 'Folk', 'Bluegrass'], ['Reggae', 'Ska', 'Dancehall'],
  ['Metal', 'Punk', 'Grunge'], ['EDM', 'Techno', 'House'],
  ['Arabesk', 'Fantezi', 'Popçu'], ['Türkü', 'Halk Müziği', 'Sanat Müziği'],

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
  ['Hamam', 'Sauna', 'Spa'], ['Yüzme Havuzu', 'Jakuzi', 'Termal'],
  ['Katedral', 'Şapel', 'Bazilika'], ['Manastır', 'Tekke', 'Türbe'],
  ['Fuar', 'Sergi', 'Panayır'], ['Tiyatro', 'Amfi', 'Planetaryum'],
  ['Saray', 'Köşk', 'Yolı'], ['Villa', 'Yalı', 'Konak'],
  ['Apartman', 'Rezidans', 'Çiftlik'], ['Fabrika', 'Atölye', 'Depo'],

  // === HAVA & İKLİM ===
  ['Dolu', 'Kar', 'Çiğ'], ['Pus', 'Sis', 'Bulut'],
  ['Hortum', 'Kasırga', 'Tayfun'], ['Kuraklık', 'Sel', 'Taşkın'],
  ['Buzlanma', 'Don', 'Kırağı'], ['Çığ', 'Heyelan', 'Toprak Kayması'],

  // === İNTERNET & SOSYAL MEDYA ===
  ['Podcast', 'Webinar', 'Yayın'], ['Meme', 'GIF', 'Sticker'],
  ['Influencer', 'Blogger', 'YouTuber'], ['Streamer', 'Gamer', 'Content Creator'],
  ['Tweet', 'Post', 'Story'], ['Like', 'Beğeni', 'Takipçi'],
  ['DM', 'Mesaj', 'Mail'], ['Avatar', 'Profil', 'Bio'],

  // === BEDEN & SAĞLIK ===
  ['Aşı', 'İlaç', 'Vitamin'], ['Röntgen', 'Ultrason', 'MR', 'Tomografi'],
  ['Grip', 'Soğuk Algınlığı', 'Alerji'], ['Diyet', 'Detoks', 'Oruç'],
  ['Yoga', 'Pilates', 'Meditasyon'], ['Fitness', 'CrossFit', 'Aerobik'],
  ['Koşu', 'Yürüyüş', 'Bisiklet'], ['Masaj', 'Akupunktur', 'Fizyoterapi'],

  // === GEOMETRİ & MATEMATİK ===
  ['Kare', 'Dikdörtgen', 'Üçgen'], ['Daire', 'Elips', 'Oval'],
  ['Küp', 'Küre', 'Silindir', 'Koni'], ['Prizma', 'Piramit', 'Öçlü'],
  ['Toplama', 'Çıkarma', 'Çarpma', 'Bölme'],
  ['Kesir', 'Ondalık', 'Yüzde'],

  // === FANTASTİK & MİTOLOJİ ===
  ['Ejderha', 'Anka Kuşu', 'Grifon'], ['Tek Boynuzlu At', 'Pegasus', 'Hipogri'],
  ['Deniz Kızı', 'Siren', 'Selkie'], ['Vampir', 'Kurt Adam', 'Zombi'],
  ['Cadı', 'Büyücü', 'Simyacı'], ['Peri', 'Cin', 'Hayalet'],
  ['Dev', 'Troll', 'Golem'], ['Medusa', 'Minotaur', 'Sfenks'],
  ['Zeus', 'Poseidon', 'Hades'], ['Thor', 'Odin', 'Loki'],
  ['Excalibur', 'Mjolnir', 'Trident'], ['Olimpos', 'Valhalla', 'Asgard'],

  // === BAHARAT & SOS ===
  ['Tuz', 'Karabiber', 'Pul Biber'], ['Kekik', 'Biberiye', 'Defne'],
  ['Tarçın', 'Zencefil', 'Kakule'], ['Safran', 'Zerdeçal', 'Kimyon'],
  ['Sumak', 'Kişniş', 'Köri'], ['Ketçap', 'Mayonez', 'Hardal'],
  ['Wasabi', 'Soya Sosu', 'Teriyaki'], ['Pesto', 'Guacamole', 'Hummus'],
  ['Acı Sos', 'BBQ Sos', 'Ranch'],

  // === KUMAŞ & GİYİM EK ===
  ['İpek', 'Saten', 'Kadife'], ['Pamuk', 'Keten', 'Keşi'],
  ['Yün', 'Kaşmir', 'Angora'], ['Denim', 'Kord', 'Süet'],
  ['Deri', 'Suni Deri', 'Nubuk'], ['Dantel', 'Tül', 'Organze'],
  ['Eşarp', 'Şal', 'Fular'], ['Bilezik', 'Kolye', 'Küpe', 'Yüzük'],
  ['Cüzdan', 'Kartlık', 'Çanta'], ['Baret', 'Kask', 'Miğfer'],

  // === DİNLENME & HOBİ ===
  ['Balık Tutma', 'Avcılık', 'Safari'], ['Bahçecilik', 'Botanik', 'Bonsai'],
  ['Origami', 'Kağıt Kesme', 'Örgü'], ['Maket', 'Diorama', 'Minyatür'],
  ['Koleksiyon', 'Antika', 'Pul'], ['Fotoğrafçılık', 'Video', 'Drone'],
  ['Yazarlık', 'Şairlik', 'Bloggerlık'], ['Akvaryum', 'Teraryum', 'Vivaryum'],

  // === TÜRK KÜLTÜRÜ ===
  ['Nazar Boncuğu', 'Muska', 'Tılsım'], ['Hamam', 'Kaplıca', 'Iılıca'],
  ['Semazen', 'Derviş', 'Sufi'], ['Osmanlı', 'Selçuklu', 'Bizans'],
  ['Sultan', 'Vezir', 'Padişah'], ['Yeniçeri', 'Sipahi', 'Akıncı'],
  ['Tuğra', 'Mühür', 'Ferman'], ['Çini', 'Seramik', 'Mozaik'],
  ['Narigile', 'Pipo', 'Tespih'], ['Karagöz', 'Hacivat', 'Meddah'],

  // === OKUL & SINIF ===
  ['Tahta', 'Projeksiyon', 'Akıllı Tahta'], ['Tebeşir', 'Kalem', 'Marker'],
  ['Ödev', 'Proje', 'Sunum'], ['Sınav', 'Quiz', 'Test'],
  ['Teneffüs', 'Öğle Arası', 'Kantın'], ['Müdür', 'Öğretmen', 'Rehber'],
  ['Karne', 'Transkript', 'Diploma'], ['Burs', 'Kredi', 'Burs'],

  // === İŞ DÜNYASI ===
  ['Toplantı', 'Sunum', 'Brifing'], ['Rapor', 'Analiz', 'Grafik'],
  ['Maaş', 'Prim', 'Terfi'], ['Patron', 'Müdür', 'CEO'],
  ['Stajyer', 'Asistan', 'Junior'], ['Startup', 'Girişim', 'KOBİ'],
  ['Yatırım', 'Tasarruf', 'Borsa'], ['Hisse', 'Tahvil', 'Kripto'],
  ['Fatura', 'Fiş', 'Makbuz'],

  // === AİLE & İLİŞKİ ===
  ['Anne', 'Baba', 'Kardeş'], ['Dede', 'Nine', 'Torun'],
  ['Amca', 'Dayı', 'Enişte'], ['Teyze', 'Hala', 'Yenge'],
  ['Gelin', 'Damat', 'Nikah'], ['Kayınvalide', 'Kayınpeder', 'Görümce'],

  // === TATİL & SEYAHAT ===
  ['Pasaport', 'Vize', 'Bilet'], ['Bavul', 'Sırt Çantası', 'Valiz'],
  ['Otel', 'Pansiyon', 'Tatil Köyü'], ['Havalimanı', 'İstasyon', 'Otogar'],
  ['Rehber', 'Turist', 'Gezgin'], ['Hediyelik', 'Suvenir', 'Magnet'],
  ['Gezi', 'Keşif', 'Macera'], ['Harita', 'Navigasyon', 'Pusula'],

  // === PARA & FİNANS ===
  ['Dolar', 'Euro', 'Sterlin'], ['Yen', 'Yuan', 'Rupi'],
  ['Bitcoin', 'Doge', 'Ethereum', 'Solana'],
  ['Kredi', 'Taksit', 'Borç'], ['ATM', 'POS', 'Online'],
  ['Nakit', 'Kart', 'Kripto'], ['Faiz', 'Enflasyon', 'Deflasyon'],

  // === YAZILIM & BİLİŞİM ===
  ['Python', 'Java', 'C++'], ['JavaScript', 'TypeScript', 'Dart'],
  ['HTML', 'CSS', 'JavaScript'], ['React', 'Vue', 'Angular'],
  ['Backend', 'Frontend', 'Full Stack'], ['API', 'SDK', 'Framework'],
  ['Bug', 'Hata', 'Crash'], ['Sunucu', 'Cloud', 'Hosting'],
  ['Git', 'SVN', 'GitHub'], ['Linux', 'Windows', 'macOS'],

  // === HABERLEŞME ===
  ['Mektup', 'Kargo', 'Kurye'], ['E-posta', 'SMS', 'Faks'],
  ['Gazete', 'Televizyon', 'Radyo'], ['Haber', 'Röportaj', 'Belgesel'],

  // === SÜPERKAHRAMAN ===
  ['Superman', 'Batman', 'Wonder Woman'], ['Iron Man', 'Captain America', 'Thor'],
  ['Hulk', 'Wolverine', 'Deadpool'], ['Flash', 'Quicksilver', 'Aquaman'],
  ['Professor X', 'Magneto', 'Phoenix'], ['Black Panther', 'Doctor Strange', 'Spider-Man'],

  // === MÜZİK EK ===
  ['Melodi', 'Ritim', 'Armoni'], ['Nota', 'Akor', 'Gam'],
  ['Solo', 'Düet', 'Koro'], ['Orkestra', 'Bando', 'Korusu'],
  ['Beste', 'Aranjman', 'Şarkı'], ['Albüm', 'Single', 'EP'],
  ['DJ', 'Prodüktör', 'Remixer'],

  // === ZAMAN & TAKVİM ===
  ['Geçmiş', 'Gelecek', 'Şimdi'], ['Saat', 'Dakika', 'Saniye'],
  ['Yıl', 'Asır', 'Bin Yıl'], ['Çağ', 'Dönem', 'Era'],

  // === ÇOCUKLUK ===
  ['Salıncak', 'Kaydırak', 'Tahterevalli'], ['Kum Havuzu', 'Trambolin', 'Dönme Dolap'],
  ['Uçurtma', 'Balon', 'Kurşun Asker'], ['Misket', 'Bilye', 'Topaç'],
  ['Saklambaç', 'Körebe', 'Seksek'], ['İp Atlama', 'Ebeş', 'Yağ Sat'],
  ['Çizgi Film', 'Masal', 'Ninni'],

  // === EK CROSS-KATEGORİ ===
  ['Anahtar', 'Kilit', 'Şifre'], ['İğne', 'İplik', 'Makara'],
  ['Çivi', 'Vida', 'Cvataf'], ['Matkap', 'Tornavida', 'Pense'],
  ['Cetvel', 'Pergel', 'Gönye'], ['Boya', 'Vernik', 'Tiner'],
  ['Tuğla', 'Beton', 'Çimento'], ['Mermer', 'Granit', 'Traverten'],
  ['Halat', 'Zincr', 'İp'], ['Bayrak', 'Flama', 'Sancak'],
  ['Madalya', 'Kupa', 'Ödül'],

  // === TV DİZİLERİ ===
  ['Breaking Bad', 'Better Call Saul', 'Ozark'], ['Game of Thrones', 'Vikings', 'The Witcher'],
  ['Friends', 'How I Met Your Mother', 'The Office'], ['Stranger Things', 'Dark', 'Black Mirror'],
  ['Money Heist', 'Lupin', 'Narcos'], ['Squid Game', 'Alice in Borderland', 'Wednesday'],
  ['Peaky Blinders', 'Narcos', 'Sopranos'], ['Sherlock', 'Elementary', 'Dexter'],
  ['Walking Dead', 'Last of Us', 'Fallout'], ['Mandalorian', 'Boba Fett', 'Andor'],

  // === EMOJİ & İFADE ===
  ['Gülümseme', 'Kahkaha', 'Kıkırdama'], ['Ağlama', 'Hıçkırık', 'Gözyaşı'],
  ['Alkış', 'Bravo', 'Tebrik'], ['Öpücük', 'Sarılma', 'Tokalaşma'],
  ['Kızgınlık', 'Sinir', 'Öfke'], ['Dans Etme', 'Kutlama', 'Eğlenme'],
  ['Düşünme', 'Merak', 'Şaşırma'],

  // === KAHVALTI ===
  ['Yumurta', 'Menemen', 'Omlet'], ['Peynir', 'Zeytin', 'Bal'],
  ['Reçel', 'Bal', 'Kaymak'], ['Simit', 'Poğaça', 'Açma'],
  ['Pankek', 'Waffle', 'Krep'], ['Müsli', 'Granola', 'Yılurt'],
  ['Çay', 'Portakal Suyu', 'Kahve'], ['Börek', 'Gozleme', 'Sac Böreği'],

  // === SOKAK YEMEKLERİ ===
  ['Kestane', 'Mısır', 'Midye'], ['Kokorec', 'Tantuni', 'Döner'],
  ['Döner', 'Dürüm', 'Kebap'], ['Balık Ekmek', 'Çiğ Köfte Dürüm', 'Kumru'],
  ['Nohut Pilav', 'Kuru Fasulye', 'Pilav Üstü'], ['Lahmacun', 'Etli Ekmek', 'Pide'],
  ['Kumpir', 'Patates Tava', 'Cig Köfte'],

  // === TÜRK DİZİLERİ ===
  ['Kurtlar Vadisi', 'Ezel', 'İçerde'], ['Muhteşem Yüzyıl', 'Diriliş Ertuğrul', 'Kuruduş Osman'],
  ['Yaprak Dökümü', 'Aşk-ı Memnu', 'Çukur'], ['Behzat Ç', 'Arka Sokaklar', 'Poyraz Karayel'],
  ['Leyla ile Mecnun', 'Jet Sosyete', 'Avrupa Yakası'], ['Recep İvedik', 'Hababam Sınıfı', 'Arıza'],
  ['Bizimkiler', 'Yedi Numara', 'Seksenler'],

  // === YOUTUBER & İNTERNET KÜLTÜRÜ ===
  ['Troll', 'Spam', 'Clickbait'], ['Unboxing', 'Review', 'Tutorial'],
  ['Prank', 'Challenge', 'Trend'], ['ASMR', 'Lofi', 'Ambient'],
  ['Speedrun', 'Walkthrough', 'Let\'s Play'], ['Cosplay', 'Fan Art', 'Fan Fiction'],

  // === RETRO & NOSTALJİ ===
  ['Kaset', 'Plak', 'CD'], ['VHS', 'DVD', 'Blu-ray'],
  ['Walkman', 'Discman', 'iPod'], ['Atari', 'Commodore', 'Nintendo'],
  ['Tetris', 'Pac-Man', 'Space Invaders'], ['Super Mario', 'Sonic', 'Mega Man'],
  ['Game Boy', 'Tamagotchi', 'Brick Game'], ['Floppy Disk', 'CD', 'USB'],
  ['Dial-Up', 'ADSL'],
  ['Nokia 3310', 'Motorola Razr'],
  ['MSN', 'ICQ', 'Mirc'],
  ['Pager', 'Telefon'],
  ['Polaroid', 'Film Kamera', 'Daktilo'],
  ['Daktilo', 'Bilgisayar'], ['Telgraf', 'Mektup'],

  // === KORKU & GERİLİM ===
  ['Karanlık', 'Gölge', 'Sis'], ['Çığlık', 'Fısıltı', 'Hışırtı'],
  ['Labirent', 'Tuzak', 'Kaçış'], ['Zincirleme', 'Kilit'],
  ['Perili Ev', 'Mezarlık', 'Bodrum'],
  ['Yeraltı', 'Bodrum'],
  ['Kabus', 'Uyurgezer', 'Hayalet'], ['Gizemli', 'Tekinsiz'],
  ['İz', 'Parmak İzi'], ['Dedektif', 'Suçlu'],
  ['İpucu', 'Kanıt', 'Parmak İzi'], ['Maske', 'Kostüm', 'Gızlk'],

  // === DÜĞÜN & TÖREN ===
  ['Gelin', 'Damat'],
  ['Nikah', 'Düğün', 'Kına Gecesi'], ['Nişan Yüzüğü', 'Alyans', 'Kutu'],
  ['Gelinlik', 'Damatlık', 'Takı'], ['Pasta', 'Davetiye', 'Süsleme'],
  ['DJ', 'Orkestra'],
  ['Kına Gecesi', 'Bejaarlığa Veda', 'Balayı'],
  ['Balayı', 'Tatil'],
  ['Çiçek Buketi', 'Araba Süsleme'],
  ['Düğün Salonu', 'Kır Düğünü', 'Otel Düğünü'],

  // === BEBEK & ÇOCUK ===
  ['Biberon', 'Emzik', 'Diş Kaşıyıcı'], ['Bebek Arabası', 'Kanguru', 'Oto Koltuğu'],
  ['Çıngırak', 'Oyuncak'],
  ['Alt Bezi', 'Islak Mendil', 'Pudra'],
  ['Mama Sandalyesi', 'Yürüteç', 'Oyun Parkı'], ['Oyun Parkı', 'Beşik'],
  ['Diş Kaşıyıcı', 'Emzik'], ['Lullaby', 'Ninni'],
  ['Boyama', 'Hamur', 'Slime'],
  ['Oyun Hamuru', 'Slime'],

  // === OKUL DERSLERİ ===
  ['Matematik', 'Fizik', 'Kimya'], ['Türkçe', 'Edebiyat', 'Dil Bilgisi'],
  ['Tarih', 'Coğrafya', 'Felsefe'], ['Biyoloji', 'Kimya', 'Genetrik'],
  ['İngilizce', 'Almanca', 'Fransızca'], ['Müzik', 'Resim', 'Drama'],
  ['Beden Eğitimi', 'Jimnastik'], ['Felsefe', 'Psikoloji'],
  ['Geometri', 'Cebir', 'Analiz'], ['Astronomi', 'Jeoloji'],
  ['Ekonomi', 'Sosyoloji', 'Hukuk'], ['Hukuk', 'Siyaset'],

  // === PARTİ & GECE HAYATI ===
  ['Kulüp', 'Bar', 'Pub'], ['Disko', 'Rave', 'Festival'],
  ['Barmen', 'DJ'], ['Dans Pisti', 'VIP'],
  ['Karaoke', 'Stand-Up', 'Sahne'], ['Happy Hour', 'Ladies Night'],
  ['Konfeti', 'Balon', 'Havai Fişek'], ['Havai Fişek', 'Maytap'],
  ['Kostüm Partisi', 'Tema Parti', 'Pool Party'], ['Pool Party', 'House Party'],

  // === PLAJ & YAZ ===
  ['Güneş Kremi', 'Şapka', 'Güneş Gözlüğü'], ['Güneş Gözlüğü', 'Şemsiye'],
  ['Şezlong', 'Hamak', 'Şemsiye'], ['Şnorkel', 'Palet', 'Dalış Maskesi'],
  ['Kum Kalesi', 'Deniz Kabuğu', 'Plaj Topu'], ['Sörf Tahtası', 'Kürek'],
  ['Deniz Yatağı', 'Şişme Bot', 'Sörf Tahtası'], ['Plaj Topu', 'Frizbi'],
  ['Mayo', 'Bikini'], ['Havlu', 'Pareo', 'Mayo'],

  // === KIŞ & KAR ===
  ['Kardan Adam', 'Kar Topu', 'Kızak'], ['Buz Pateni', 'Kızak'],
  ['Kayak', 'Snowboard', 'Buz Pateni'], ['Sıcak Çikolata', 'Sahlep', 'Glühwein'],
  ['Atkı', 'Bere', 'Eldiven'], ['Eldiven', 'Kar Botu'],
  ['Şömine', 'Battaniye', 'Sıcak Çay'], ['Kış Lastiği', 'Zincir'],
  ['Buz Tutan Göl', 'Kar Fırtınası'], ['İglo', 'Kar Mağarası', 'Kulbe'],

  // === TÜRK YEMEKLERİ (DETAYLI) ===
  ['Ali Nazik', 'Beyti', 'İskender'], ['Çığ Börek', 'Su Böreği', 'Sigara Böreği'],
  ['İçli Köfte', 'Çiğ Köfte', 'Kadınbudu Köfte'], ['Hamsili Pilav', 'Kuymak'],
  ['Patlıcan Kebabı', 'Urfa Kebabı', 'Adana'], ['İskender', 'Bursa Kebabı'],
  ['Çerkez Tavğu', 'Tavuk Sote', 'Tavuk Şiş'], ['Kısır', 'Bulgur Pilavı'],
  ['Zeytinyağlı Yaprak Sarma', 'Etli Yaprak Sarma'],
  ['Mercimek Çorbası', 'Ezogelin Çorbası', 'Tarhana'],
  ['Tirit', 'Keşkek'], ['Kabak Tatlısı', 'Ayva Tatlısı', 'Künefe'],

  // === DÜNYA MUTFAĞI ===
  ['Sushi', 'Ramen', 'Udon'], ['Pad Thai', 'Pho', 'Tom Yum'],
  ['Pizza', 'Pasta', 'Risotto'], ['Tacos', 'Burritos', 'Nachos'],
  ['Dim Sum', 'Gyoza', 'Spring Roll'], ['Croissant', 'Baguette', 'Brioche'],
  ['Tiramisu', 'Panna Cotta', 'Gelato'], ['Churros', 'Donut', 'Waffle'],
  ['Kebab', 'Shawarma', 'Falafel'], ['Kimchi', 'Miso', 'Tofu'],
  ['Curry', 'Tikka Masala', 'Biryani'], ['Empanada', 'Samosa', 'Goulash'],

  // === ENSTRÜMAN AİLELERİ ===
  ['Elektro Gitar', 'Akustik Gitar', 'Bas Gitar'],
  ['Piyano', 'Klavye', 'Synthesizer'], ['Keman', 'Viola', 'Çello'],
  ['Trombon', 'Tuba', 'Körnö'], ['Klarnet', 'Obua', 'Pikolo'],
  ['Timpani', 'Ksilofon', 'Marimba'], ['Banjo', 'Mandolin', 'Ukulele'],

  // === TAKIM & KULÜP ===
  ['Galatasaray', 'Fenerbahçe', 'Beşiktaş'], ['Real Madrid', 'Barcelona', 'Atletico'],
  ['Manchester United', 'Liverpool', 'Chelsea'], ['Bayern Münih', 'Dortmund', 'Leipzig'],
  ['PSG', 'Marseille', 'Lyon'], ['Juventus', 'AC Milan', 'Inter'],
  ['Lakers', 'Celtics', 'Warriors'], ['Ferrari', 'Red Bull', 'Mercedes'],

  // === MASAL & ÇİZGİ FİLM ===
  ['Pamuk Prenses', 'Külkedisi', 'Rapunzel'], ['Alaaddin', 'Sinbad', 'Robin Hood'],
  ['Pinokyo', 'Kırmızı Başlıklı Kız', 'Hansel ve Gretel'],
  ['Tom ve Jerry', 'Oggy', 'Bugs Bunny'], ['SpongeBob', 'Patrick', 'Garfield'],
  ['Pepee', 'Caillou', 'Heidi'], ['Ninja Kaplumbağalar', 'Power Rangers', 'Transformers'],

  // === HAVAALI MANI & UÇUŞ ===
  ['Check-in', 'Boarding', 'Gate'], ['Pasaport Kontrol', 'Gümrük', 'Vize'],
  ['Duty Free', 'Lounge', 'Terminal'], ['Kalkış', 'İniş', 'Aktğrma'],
  ['Pilot', 'Hostes', 'Kaptan'], ['Birinci Sınıf', 'Ekonomi', 'Business'],
  ['Bagaj', 'El Bagajı', 'Binİş Kartı'],

  // === OYUN KARAKTERLERİ ===
  ['Mario', 'Luigi', 'Toad'], ['Pikachu', 'Charizard', 'Eevee'],
  ['Link', 'Zelda', 'Ganondorf'], ['Kratos', 'Dante', 'Bayonetta'],
  ['Lara Croft', 'Nathan Drake', 'Indiana Jones'], ['Sonic', 'Knuckles', 'Tails'],
  ['Geralt', 'Yennefer', 'Ciri'], ['Ezio', 'Altair', 'Bayek'],
  ['Arthur Morgan', 'John Marston', 'Dutch'], ['Mega Man', 'Zero', 'Samus'],

  // === SOSYAL MEDYA TERİMLERİ ===
  ['Viral', 'Trend', 'Hype'], ['Follow', 'Unfollow', 'Block'],
  ['Share', 'Repost', 'Quote'], ['Filter', 'Efekt', 'Boomerang'],
  ['Verified', 'Public', 'Private'],

  // === CAFE & KAHVE ===
  ['Americano', 'Filtre Kahve', 'Espresso'], ['Macchiato', 'Cortado', 'Flat White'],
  ['Mocha', 'White Mocha', 'Latte'], ['Cold Brew', 'Iced Coffee', 'Frappuccino'],
  ['V60', 'French Press', 'Chemex'], ['Türk Kahvesi', 'Dibek Kahvesi', 'Menengiç'],
  ['Matcha Latte', 'Chai Latte', 'Turmeric Latte'], ['Espresso', 'Ristretto', 'Doppio'],

  // === AYAKKABI & AKSESUAR ===
  ['Sneaker', 'Spor Ayakkabı', 'Koşu Ayakkabısı'], ['Topuklu', 'Stiletto', 'Babet'],
  ['Sandalet', 'Terlik', 'Crocs'], ['Converse', 'Vans', 'Nike'],
  ['Air Jordan', 'Yeezy', 'New Balance'], ['Oxford', 'Derby', 'Chelsea Bot'],
  ['Sırt Çantası', 'Postacı Çantası', 'Tote'], ['Kol Saati', 'Akıllı Saat', 'Cep Saati'],

  // === EV TEMİZLİĞİ ===
  ['Süpürge', 'Paspas', 'Mop'], ['Deterjan', 'Yumuşatıcı', 'Çamaşır Suyu'],
  ['Sünger', 'Bez', 'Fırça'], ['Elektrik Süpürgesi', 'Robot Süpürge', 'Şarjlı Süpürge'],
  ['Bulaşık Makinesi', 'Çamaşır Makinesi', 'Kurutucu'],
  ['Ütü', 'Buharlı Ütü', 'Terzilik'],

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

// Benzer kelime grubu seç (kullanılmış grupları hariç tut)
// Grup 2-5 kelime içerebilir, rastgele 2 farklı kelime seçer
function getRandomSimilarGroup(excludePairs = []) {
  let groups = similarWordPairs;
  if (excludePairs.length > 0) {
    const excludeSet = new Set(excludePairs.map(p => [...p].sort().join('||')));
    const filtered = groups.filter(g => {
      const key = [...g].sort().join('||');
      return !excludeSet.has(key);
    });
    if (filtered.length > 0) groups = filtered;
  }
  const group = groups[Math.floor(Math.random() * groups.length)];
  // Gruptan rastgele 2 farklı kelime seç
  const shuffled = [...group].sort(() => Math.random() - 0.5);
  return { word: shuffled[0], bluffWord: shuffled[1], group };
}

// Eski fonksiyon uyumluluğu: 2 elemanlı array döner
function getRandomSimilarPair(excludePairs = []) {
  const result = getRandomSimilarGroup(excludePairs);
  return [result.word, result.bluffWord];
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
  getRandomSimilarGroup,
  getWordFromCategory
};

