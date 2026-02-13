# Blöf Oyunu - Backend

Çok oyunculu kelime blöf oyunu için Node.js + Socket.IO backend sunucusu.

## Kurulum

```bash
npm install
```

## Çalıştırma

```bash
# Geliştirme
npm run dev

# Prodüksiyon
npm start
```

Sunucu `http://localhost:3001` adresinde çalışır.

## Environment Variables

| Değişken | Açıklama | Varsayılan |
|----------|----------|------------|
| `PORT` | Sunucu portu | `3001` |
| `FRONTEND_URL` | Frontend URL (CORS için) | `http://localhost:3000` |

## Railway.app Deploy

1. GitHub'a push et
2. [railway.app](https://railway.app) → New Project → Deploy from GitHub Repo
3. Environment variable ekle: `FRONTEND_URL=https://blof-game.vercel.app` (Vercel URL'in)
4. Deploy! 🚀
