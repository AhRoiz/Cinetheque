<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS"/>
</p>

<h1 align="center">
  🎬 Arsip Film
</h1>

<p align="center">
  <strong>Jurnal Reflektif Personal untuk Cinephile & Anime Enthusiast</strong>
</p>

<p align="center">
  <em>"Film bukan sekadar gambar bergerak; ia adalah arsitektur alam bawah sadar."</em>
</p>

---

## ✨ Tentang Proyek

**Arsip Film** adalah jurnal digital personal yang dirancang untuk para pecinta film dan anime. Bukan sekadar watchlist biasa — ini adalah *ruang refleksi* di mana setiap tontonan direkam bersama konteks emosional, insight filosofis, dan perubahan perspektif yang ditinggalkannya.

Aplikasi ini memungkinkan kamu untuk:
- 📝 Menulis refleksi mendalam tentang setiap film/anime yang ditonton
- 📊 Melacak metrik personal seperti *Impact Score*, *Emotional Weight*, dan *Rewatch Value*
- 🏷️ Mengeksplorasi koleksi berdasarkan tag dan mood
- 🔒 Menyimpan catatan privat dengan fitur *Private Vault*
- 📅 Melihat timeline perjalanan cinematik dengan visualisasi yang estetik

---

## 🖼️ Fitur Utama

### 🏠 Dashboard Interaktif
Halaman utama menampilkan timeline vertikal dengan kartu film yang indah. Dilengkapi dengan:
- **Analytics Overview** — Total film, rata-rata resonansi, mood dominan, dan jam menonton
- **Kategori Filter** — Beralih antara koleksi Film dan Anime
- **Multi-Sort** — Urutkan berdasarkan terbaru, dampak, atau bobot emosional

### 📖 Halaman Detail Film
Setiap entri memiliki halaman detail yang kaya dengan:
- **Hero Section** — Poster dengan ambient blur backdrop
- **Quote Favorit** — Kutipan ikonik dari film
- **Journal Entry** — Refleksi panjang dengan fitur *expand/collapse*
- **The Synthesis** — Takeaway utama dalam satu kalimat
- **Personal Metrics** — Visualisasi bar untuk Impact, Rewatch Value, dan Emotional Weight
- **Viewing Context** — Konteks menonton (lokasi, fase hidup, cuaca)
- **Private Vault Mode** — Toggle untuk melihat catatan brutal dan jujur

### 🏷️ Tag Explorer
Jelajahi koleksi berdasarkan tag seperti **Romance**, **Sci-Fi**, **Masterpiece**, **Tragedy**, dan banyak lagi. Klik tag dari halaman detail untuk langsung masuk ke eksplorasi.

### 👤 Profil Author
Halaman profil menampilkan:
- **Manifesto cinematik** personal
- **Statistik menonton** (total logged, jam menonton, rata-rata resonansi)
- **Film DNA** — Sutradara favorit, obsesi tematik, dan era kesukaan

---

## 🛠️ Tech Stack

| Teknologi | Deskripsi |
|-----------|-----------|
| **React 19** | Library UI dengan fitur terbaru |
| **Vite 7** | Build tool modern yang super cepat |
| **TailwindCSS 3** | Utility-first CSS framework |
| **Lucide React** | Icon library yang elegan |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Instalasi

```bash
# Clone repository
git clone https://github.com/username/film-journal.git

# Masuk ke direktori
cd film-journal

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Proyek

```
film-journal/
├── public/              # Static assets
├── src/
│   ├── assets/          # Gambar & media
│   ├── components/      # Komponen reusable
│   │   ├── GlobalStyles.jsx   # Style animations
│   │   └── UI.jsx             # Badge, MetricBar, dll
│   ├── data/
│   │   └── store.js     # Data film & profile
│   ├── views/           # Halaman utama
│   │   ├── Dashboard.jsx      # Homepage + timeline
│   │   ├── FilmDetail.jsx     # Detail entri
│   │   ├── TagExplorer.jsx    # Eksplorasi tag
│   │   └── Profile.jsx        # Profil author
│   ├── Cinetheque.jsx   # Main router/controller
│   ├── App.jsx          # Entry point
│   └── main.jsx         # React DOM render
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 📝 Menambah Entri Baru

Edit file `src/data/store.js` dan tambahkan objek baru ke array `journalEntries`:

```javascript
{
  id: 700,                    // ID unik
  category: 'anime',          // 'anime' atau 'film'
  title: "Judul Film",
  originalTitle: "Original Title",
  year: "2024",
  director: "Nama Sutradara",
  duration: "2h 10m",
  watchedDate: "01 Jan 2024",
  poster: "URL_POSTER",
  impactScore: 95,            // 0-100
  rewatchValue: 80,           // 0-100
  emotionalWeight: 90,        // 0-100
  mood: "Emotional",
  visibility: "public",       // 'public' atau 'private'
  shortReflection: "Ringkasan singkat...",
  longReflection: `
    Refleksi panjang multiline...
  `,
  keyTakeaway: "Pesan utama dari film ini.",
  changeInPerspective: "Bagaimana film ini mengubah cara pandangmu.",
  quote: "Kutipan favorit dari film.",
  tags: ["Drama", "Romance", "Masterpiece"],
  
  // Optional untuk entri private
  context: {
    time: "Late Night",
    location: "Bedroom",
    lifePhase: "Self-Discovery",
    weather: "Rainy"
  },
  privateNotes: "Catatan jujur yang tidak dibagikan..."
}
```

---

## 🎨 Customization

### Mengubah Tema Warna
Edit file `tailwind.config.js` untuk menyesuaikan color palette. Tema default menggunakan:
- **Background**: Stone-900/Black (`#0c0a09`)
- **Accent**: Amber-500/700
- **Text**: Stone-200/300/400

### Mengubah Profil Author
Edit objek `authorProfile` di `src/data/store.js`:

```javascript
export const authorProfile = {
  name: "Nama Kamu",
  handle: "@username",
  avatar: "path/to/avatar.jpg",
  manifesto: "Filosofi filmmu...",
  stats: { ... },
  dna: { ... }
};
```

---

## 🌟 Design Philosophy

Arsip Film didesain dengan prinsip:

1. **Minimalist Elegance** — Interface gelap yang fokus pada konten
2. **Emotional Depth** — Bukan sekadar rating, tapi refleksi bermakna  
3. **Personal Archive** — Seperti diary cinematik yang intim
4. **Visual Storytelling** — Poster dan ambient backdrop yang immersive

---

## 📜 Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview build hasil |
| `npm run lint` | Menjalankan ESLint |

---

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:
1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  <strong>Dibuat dengan 🎬 dan ☕ oleh Pecinta Sinema</strong>
</p>

<p align="center">
  <em>Karena setiap film yang kita tonton membentuk siapa kita.</em>
</p>

