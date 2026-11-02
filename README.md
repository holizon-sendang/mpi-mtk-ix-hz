# MPI Matematika Kelas 9

Media Pembelajaran Interaktif (MPI) Matematika SMP **khusus Kelas 9**, Kurikulum Merdeka, dengan pendekatan **Pembelajaran Mendalam**. Proyek ini berbeda dari MPI Matematika sebelumnya (`holizon-sendang/MPI`, Kelas 7–9): di sini fokusnya hanya Kelas 9 dengan materi yang lebih mendalam — setiap modul memiliki cek prasyarat, eksplorasi, pembahasan miskonsepsi, proyek mini, kuis 10 soal, dan 5 soal tantangan terpisah.

- **Sumber:** ATP Matematika Fase D, MGMP Matematika SMP Kabupaten Lampung Tengah, Tahun Pelajaran 2026/2027 (disaring untuk Kelas 9 saja).
- **Repo tujuan:** `github.com/holizon-sendang/mpi-mtk-ix-hz` *(belum di-push; saat ini baru dibangun lokal)*
- **Visual:** Biru Samudra (utama `#2563EB`, gelap `#1E3A8A`, lembut `#DBEAFE`, latar `#F8FAFF`, tinta `#0F172A`) dengan amber (`#F59E0B`, gelap `#D97706`, lembut `#FEF3C7`) yang lebih dominan sebagai identitas Kelas 9.
- **Responsif:** mobile-first untuk HP (≤480px), tablet (≥768px), laptop (≥1024px), dan PID/layar lebar (≥1440px, kontainer melebar sampai 1360px, sasaran sentuh dan teks membesar). Judul sub-bab aman dari pil navigasi lengket (`scroll-margin-top: 140px`).

## Peta Modul (8 TP, 98 JP)

| Kode | Modul | JP | Semester | Status |
|---|---|---|---|---|
| A.7 | Sistem Persamaan Linear Dua Variabel (SPLDV) | 18 | 1 | ✅ **Aktif — prototipe** |
| G.5 | Jaring-jaring Bangun Ruang | 6 | 1 | ✅ **Aktif** |
| P.1 | Luas Permukaan & Volume Bangun Ruang Sisi Datar | 12 | 1 | ✅ **Aktif** |
| P.2 | Lingkaran | 10 | 1 | ✅ **Aktif** |
| P.3 | Bangun Ruang Sisi Lengkung | 18 | 2 | Segera |
| G.6 | Transformasi Geometri | 18 | 2 | Segera |
| D.5 | Ruang Sampel & Peluang | 8 | 2 | Segera |
| D.6 | Frekuensi Relatif & Frekuensi Harapan | 8 | 2 | Segera |

## Template Modul (terkunci, 8 sub-bab)

1. Pemantik
2. Cek Prasyarat
3. Eksplorasi + Memahami Konsep 1
4. Memahami Konsep 2
5. Cek Pemahaman + Miskonsepsi
6. Aplikasi & Pemecahan Masalah
7. Proyek Mini + Rangkuman
8. Kuis (10 soal, kunci seimbang) & Refleksi — plus blok **Soal Tantangan** (5 soal) yang terpisah dengan skor sendiri

## Struktur Berkas

```
mpi-mtk-ix-hz/
├── index.html                  # Hub Kelas 9 (8 kartu modul + pencarian/filter)
├── assets/
│   ├── css/main.css            # Gaya bersama
│   └── js/main.js              # Logika hub (pencarian, ringkasan progres A.7, G.5, P.1 & P.2)
└── kelas-9/
    ├── a7-spldv/
    │   ├── index.html          # Modul A.7 SPLDV (8 sub-bab)
    │   ├── style.css           # Gaya khusus modul
    │   └── script.js           # Data soal + logika interaktif modul
    ├── g5-jaring-jaring/
    │   ├── index.html          # Modul G.5 Jaring-Jaring Bangun Ruang (8 sub-bab)
    │   ├── style.css           # Gaya khusus modul
    │   └── script.js           # Data soal + logika interaktif modul
    ├── p1-luas-volume/
    │   ├── index.html          # Modul P.1 Luas Permukaan & Volume Bangun Ruang Sisi Datar (8 sub-bab)
    │   ├── style.css           # Gaya khusus modul
    │   └── script.js           # Data soal + logika interaktif modul
    └── p2-lingkaran/
        ├── index.html          # Modul P.2 Lingkaran (8 sub-bab)
        ├── style.css           # Gaya khusus modul
        └── script.js           # Data soal + logika interaktif modul
```

Menambah modul berikutnya cukup dengan menambah satu folder baru di `kelas-9/` tanpa menyentuh modul lain.

## Menjalankan Lokal

Buka `index.html` langsung di peramban, atau jalankan server statis sederhana dari folder ini:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000/
```

## Penyimpanan Lokal (localStorage)

Semua kunci modul A.7 berawalan `mpi-mtk9-a7-*` agar tidak bertabrakan dengan situs MPI lain pada domain yang sama, antara lain:

| Kunci | Isi |
|---|---|
| `mpi-mtk9-a7-visited` | Daftar sub-bab yang sudah dikunjungi (progres) |
| `mpi-mtk9-a7-poll` | Pilihan polling Pemantik |
| `mpi-mtk9-a7-guess` | Tebakan awal harga di Pemantik |
| `mpi-mtk9-a7-prasyarat` | Jawaban Cek Prasyarat |
| `mpi-mtk9-a7-tebakuji` | Percobaan terakhir Tebak & Uji |
| `mpi-mtk9-a7-cek` | Jawaban Cek Pemahaman |
| `mpi-mtk9-a7-miskonsepsi` | Jawaban pembetulan miskonsepsi |
| `mpi-mtk9-a7-aplikasi` | Hasil pemeriksaan soal Aplikasi |
| `mpi-mtk9-a7-proyek` | Formulir proyek Detektif Harga Kantin |
| `mpi-mtk9-a7-quiz-best` | Skor terbaik kuis inti (dari 10) |
| `mpi-mtk9-a7-tantangan-best` | Skor terbaik Soal Tantangan (dari 5) |
| `mpi-mtk9-a7-refleksi` | Teks refleksi akhir modul |

Modul G.5 memakai pola yang sama dengan awalan `mpi-mtk9-g5-*`:

| Kunci | Isi |
|---|---|
| `mpi-mtk9-g5-visited` | Daftar sub-bab yang sudah dikunjungi (progres) |
| `mpi-mtk9-g5-poll` | Pilihan polling Pemantik |
| `mpi-mtk9-g5-guess` | Tebakan awal banyak persegi di Pemantik |
| `mpi-mtk9-g5-prasyarat` | Jawaban Cek Prasyarat |
| `mpi-mtk9-g5-ujilipat` | Penilaian Uji Lipat (Sub-bab 3) |
| `mpi-mtk9-g5-pasangkan` | Jawaban Pasangkan Bangun ↔ Susunan Sisinya |
| `mpi-mtk9-g5-cek` | Jawaban Cek Pemahaman |
| `mpi-mtk9-g5-miskonsepsi` | Jawaban pembetulan miskonsepsi |
| `mpi-mtk9-g5-aplikasi-1/2/3` | Jawaban cek mandiri soal Aplikasi |
| `mpi-mtk9-g5-proyek` | Formulir proyek Desainer Kemasan |
| `mpi-mtk9-g5-quiz-best` | Skor terbaik kuis inti (dari 10) |
| `mpi-mtk9-g5-tantangan-best` | Skor terbaik Soal Tantangan (dari 5) |
| `mpi-mtk9-g5-refleksi` | Teks refleksi akhir modul |

Modul P.1 memakai pola yang sama dengan awalan `mpi-mtk9-p1-*`:

| Kunci | Isi |
|---|---|
| `mpi-mtk9-p1-visited` | Daftar sub-bab yang sudah dikunjungi (progres) |
| `mpi-mtk9-p1-poll` | Pilihan polling Pemantik |
| `mpi-mtk9-p1-guess` | Tebakan awal luas karton kotak kubus tanpa tutup |
| `mpi-mtk9-p1-prasyarat` | Jawaban Cek Prasyarat |
| `mpi-mtk9-p1-isian-lp` | Jawaban Isian Cepat luas permukaan (Sub-bab 3) |
| `mpi-mtk9-p1-isian-v` | Jawaban Isian Cepat volume (Sub-bab 4) |
| `mpi-mtk9-p1-cek` | Jawaban Cek Pemahaman (nilai Benar/Salah) |
| `mpi-mtk9-p1-miskonsepsi` | Jawaban pembetulan miskonsepsi |
| `mpi-mtk9-p1-aplikasi-1/2/3` | Jawaban cek mandiri soal Aplikasi |
| `mpi-mtk9-p1-proyek` | Checklist + formulir proyek Kemasan Cerdas |
| `mpi-mtk9-p1-quiz-best` | Skor terbaik kuis inti (dari 10) |
| `mpi-mtk9-p1-tantangan-best` | Skor terbaik Soal Tantangan (dari 5) |
| `mpi-mtk9-p1-refleksi` | Teks refleksi akhir modul |

Modul P.2 memakai pola yang sama dengan awalan `mpi-mtk9-p2-*`:

| Kunci | Isi |
|---|---|
| `mpi-mtk9-p2-visited` | Daftar sub-bab yang sudah dikunjungi (progres) |
| `mpi-mtk9-p2-poll` | Pilihan polling Pemantik |
| `mpi-mtk9-p2-guess` | Tebakan awal keliling roda berdiameter 56 cm |
| `mpi-mtk9-p2-prasyarat` | Jawaban Cek Prasyarat |
| `mpi-mtk9-p2-eksplorasi` | Pilihan benda pada Eksplorasi π (Sub-bab 3) |
| `mpi-mtk9-p2-isian-unsur` | Jawaban Isian Cepat unsur (r ↔ d) (Sub-bab 3) |
| `mpi-mtk9-p2-isian-kl` | Jawaban Isian Cepat keliling & luas (Sub-bab 4) |
| `mpi-mtk9-p2-cek` | Jawaban Cek Pemahaman (nilai Benar/Salah) |
| `mpi-mtk9-p2-miskonsepsi` | Jawaban pembetulan miskonsepsi |
| `mpi-mtk9-p2-aplikasi-1/2/3` | Jawaban cek mandiri soal Aplikasi |
| `mpi-mtk9-p2-proyek` | Checklist + formulir proyek Lingkaran di Sekitarku |
| `mpi-mtk9-p2-quiz-best` | Skor terbaik kuis inti (dari 10) |
| `mpi-mtk9-p2-tantangan-best` | Skor terbaik Soal Tantangan (dari 5) |
| `mpi-mtk9-p2-refleksi` | Teks refleksi akhir modul |
