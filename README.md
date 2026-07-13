# Kayu Bara

Landing page dan sistem reservasi online untuk **Kayu Bara**, restoran grill dengan konsep bakaran kayu otentik.

## Tentang

Kayu Bara menyajikan hidangan grill premium yang dimasak di atas bara api kayu pilihan, menghadirkan cita rasa otentik khas panggangan tradisional dengan sentuhan modern.

## Fitur

- **Landing page** — hero section, tentang kami, dan highlight menu andalan
- **Menu lengkap** — daftar menu dengan kategori (Signature, Seafood, Ayam & Unggas, Vegetarian, Minuman) beserta fitur pencarian
- **Reservasi online** — form reservasi meja dengan pemilihan tanggal, jumlah tamu, dan jam kedatangan fleksibel yang otomatis menyesuaikan jam operasional
- **Testimoni pelanggan**
- **Navigasi responsif** dengan informasi kontak dan jam operasional di footer

## Jam Operasional

| Hari | Jam |
|---|---|
| Senin - Jumat | 12:00 - 22:00 WIB |
| Sabtu - Minggu | 12:00 - 23:00 WIB |

*Dapur terakhir menerima pesanan 45 menit sebelum jam tutup.*

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — styling

## Menjalankan Secara Lokal

Clone repository ini terlebih dahulu, lalu install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## Struktur Project

```
kayu-bara/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Halaman beranda
│   │   ├── menu/              # Halaman menu lengkap
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── ReservationWidget.tsx
│       ├── Testimonials.tsx
│       └── Footer.tsx
└── public/
```

## Lisensi

Hak cipta © Kayu Bara. Seluruh hak dilindungi.
