/* Modul P.1 Luas Permukaan dan Volume Bangun Ruang Sisi Datar — MPI Matematika Kelas 9
   Semua kunci localStorage berawalan "mpi-mtk9-p1-".
   Blok data soal dipisahkan dari logika DOM agar bisa diverifikasi di Node. */
"use strict";

var PREFIX = "mpi-mtk9-p1-";

/* ================= DATA SOAL ================= */

var PRASYARAT = [
  {
    q: "Luas persegi panjang berukuran 9 cm × 4 cm adalah …",
    options: ["26 cm²", "36 cm²", "24 cm²", "45 cm²"],
    answer: 1,
    explain: "Luas persegi panjang = panjang × lebar = 9 × 4 = 36 cm².",
    remedial: "Luas persegi panjang adalah panjang dikali lebar. Angka 26 cm adalah kelilingnya (2 × (9 + 4)), bukan luasnya — perhatikan satuannya: luas memakai cm²."
  },
  {
    q: "Luas segitiga dengan alas 10 cm dan tinggi 6 cm adalah …",
    options: ["60 cm²", "30 cm²", "16 cm²", "36 cm²"],
    answer: 1,
    explain: "Luas segitiga = ½ × alas × tinggi = ½ × 10 × 6 = 30 cm².",
    remedial: "Jangan lupa faktor ½-nya: segitiga adalah separuh dari persegi panjang berukuran alas × tinggi. Tanpa ½ hasilnya 60 cm² — itu luas persegi panjangnya."
  },
  {
    q: "1 liter sama dengan … cm³.",
    options: ["10", "100", "1.000", "10.000"],
    answer: 2,
    explain: "1 liter = 1 dm³, dan 1 dm³ = 1.000 cm³. Jadi 1 liter = 1.000 cm³.",
    remedial: "Ingat tangga satuan volume: 1 dm³ = 1.000 cm³, dan 1 liter tepat sama dengan 1 dm³. Satuan ini akan sering dipakai saat mengubah volume cm³ menjadi liter."
  },
  {
    q: "Luas persegi dengan panjang sisi 7 cm adalah …",
    options: ["28 cm²", "49 cm²", "14 cm²", "42 cm²"],
    answer: 1,
    explain: "Luas persegi = sisi × sisi = 7 × 7 = 49 cm² — inilah luas satu sisi kubus berusuk 7 cm pada jaring-jaringnya.",
    remedial: "Luas persegi adalah sisi dikali sisi (bukan 4 × sisi = 28 cm, itu kelilingnya). Di modul G.5, setiap persegi pada jaring-jaring kubus luasnya seperti ini."
  }
];

var ISIAN_LP = [
  {
    label: "Luas permukaan kubus dengan rusuk 4 cm adalah …",
    answer: 96,
    satuan: "cm²",
    explain: "LP kubus = 6 × s² = 6 × 4² = 6 × 16 = 96 cm²."
  },
  {
    label: "Luas permukaan balok berukuran 6 cm × 4 cm × 3 cm adalah …",
    answer: 108,
    satuan: "cm²",
    explain: "LP balok = 2 × (6×4 + 6×3 + 4×3) = 2 × (24 + 18 + 12) = 2 × 54 = 108 cm²."
  },
  {
    label: "Luas permukaan kubus dengan rusuk 9 cm adalah …",
    answer: 486,
    satuan: "cm²",
    explain: "LP kubus = 6 × s² = 6 × 9² = 6 × 81 = 486 cm²."
  }
];

var ISIAN_V = [
  {
    label: "Volume balok berukuran 7 cm × 3 cm × 2 cm adalah …",
    answer: 42,
    satuan: "cm³",
    explain: "V balok = p × l × t = 7 × 3 × 2 = 42 cm³."
  },
  {
    label: "Volume kubus dengan rusuk 8 cm adalah …",
    answer: 512,
    satuan: "cm³",
    explain: "V kubus = s³ = 8 × 8 × 8 = 512 cm³."
  },
  {
    label: "Volume limas dengan luas alas 20 cm² dan tinggi 9 cm adalah …",
    answer: 60,
    satuan: "cm³",
    explain: "V limas = ⅓ × L alas × t = ⅓ × 20 × 9 = 60 cm³. Jangan lupa faktor ⅓-nya."
  }
];

var CEK = [
  {
    topic: "Luas Permukaan Kubus",
    q: "Nilai pernyataan berikut: “Luas permukaan kubus berusuk 3 cm adalah 54 cm².”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. LP kubus = 6 × s² = 6 × 3² = 6 × 9 = 54 cm²."
  },
  {
    topic: "Volume Limas",
    q: "Nilai pernyataan berikut: “Volume limas sama dengan volume prisma yang alas dan tingginya sama.”",
    options: ["Benar", "Salah"],
    answer: 1,
    explain: "Salah. Volume limas hanya ⅓ dari volume prisma yang alas dan tingginya sama — terbukti dari percobaan menuang pasir sebanyak 3 kali."
  },
  {
    topic: "Satuan",
    q: "Nilai pernyataan berikut: “Satuan luas permukaan adalah cm³.”",
    options: ["Benar", "Salah"],
    answer: 1,
    explain: "Salah. Luas permukaan memakai satuan persegi (cm²); cm³ adalah satuan volume. Satuan adalah petunjuk tercepat untuk membedakan kedua konsep ini."
  },
  {
    topic: "Luas Permukaan Balok",
    q: "Nilai pernyataan berikut: “Balok berukuran 4 cm × 3 cm × 2 cm berluas permukaan 52 cm².”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. LP balok = 2 × (4×3 + 4×2 + 3×2) = 2 × (12 + 8 + 6) = 2 × 26 = 52 cm²."
  },
  {
    topic: "Luas Permukaan Limas",
    q: "Nilai pernyataan berikut: “Luas permukaan limas segiempat beraturan = luas alas + 4 × luas satu segitiga tegak.”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. Pada limas segiempat beraturan, keempat segitiga tegaknya kongruen, jadi luas permukaan = luas alas persegi + 4 × luas satu segitiga tegak."
  }
];

var MISKONSEPSI = [
  {
    salah: "“Untuk mengetahui banyak air yang muat di dalam akuarium, hitunglah luas permukaannya.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, luas permukaan dan volume pada dasarnya ukuran yang sama.",
      "Banyak air yang muat adalah volume (isi, satuannya cm³ atau liter). Luas permukaan menjawab pertanyaan bahan — misalnya luas kaca untuk membuat akuariumnya — satuannya cm².",
      "Banyak air yang muat dihitung dari keliling alas akuarium."
    ],
    answer: 1,
    explain: "Luas permukaan dan volume menjawab dua pertanyaan berbeda: bahan/kulit (cm²) versus isi (cm³/liter). Tertukar keduanya adalah kesalahan paling mendasar di topik ini."
  },
  {
    salah: "“Volume limas = luas alas × tinggi, sama seperti prisma.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, limas dan prisma memakai rumus volume yang sama.",
      "Volume limas = ⅓ × luas alas × tinggi. Percobaan menuang pasir menunjukkan isi limas harus dituang 3 kali untuk memenuhi prisma beralas dan bertinggi sama.",
      "Volume limas = ½ × luas alas × tinggi, seperti rumus segitiga."
    ],
    answer: 1,
    explain: "Faktor limas adalah ⅓ (dari percobaan tuang pasir 3 kali), bukan ½ dan bukan tanpa faktor. Lupakan ⅓ ini dan jawabanmu menjadi 3 kali terlalu besar."
  },
  {
    salah: "“Luas kaca akuarium tanpa tutup dihitung dengan rumus luas permukaan balok utuh.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, rumus balok utuh selalu dipakai apa pun bentuk bukaannya.",
      "Akuarium tanpa tutup hanya mempunyai 5 sisi: alas + 4 dinding. Hitung kelima sisi yang benar-benar dibuat itu; tutup tidak dihitung. Pada akuarium 60 × 40 × 50 hasilnya 12.400 cm², bukan 14.800 cm².",
      "Akuarium tanpa tutup cukup dihitung alas dan dua dindingnya saja."
    ],
    answer: 1,
    explain: "Rumus balok utuh menghitung 6 sisi. Untuk bangun terbuka, selalu sesuaikan dengan sisi yang benar-benar ada — baca soal baik-baik sebelum memilih cara menghitung."
  }
];

var APLIKASI_CEK = [
  {
    q: "Periksa pemahamanmu: luas kaca yang dibutuhkan untuk akuarium tanpa tutup itu adalah …",
    options: ["14.800 cm²", "12.400 cm²", "10.400 cm²", "24.800 cm²"],
    answer: 1,
    explain: "Alas 2.400 + dinding depan-belakang 6.000 + dinding kiri-kanan 4.000 = 12.400 cm². Angka 14.800 cm² adalah hasil jika tutup ikut dihitung — padahal akuariumnya terbuka."
  },
  {
    q: "Periksa pemahamanmu: banyak air yang muat di bak itu adalah …",
    options: ["24 liter", "240 liter", "2.400 liter", "480 liter"],
    answer: 1,
    explain: "V = 80 × 60 × 50 = 240.000 cm³, dan 240.000 cm³ ÷ 1.000 = 240 liter."
  },
  {
    q: "Periksa pemahamanmu: volume udara di dalam tenda limas itu adalah …",
    options: ["48 m³", "24 m³", "16 m³", "12 m³"],
    answer: 2,
    explain: "V limas = ⅓ × 16 × 3 = 16 m³. Angka 48 m³ muncul jika faktor ⅓ dilupakan."
  }
];

var KUIS = [
  {
    topic: "Luas Permukaan Kubus",
    q: "Luas permukaan kubus dengan rusuk 5 cm adalah …",
    options: ["100 cm²", "150 cm²", "125 cm²", "180 cm²"],
    answer: 1,
    explain: "LP kubus = 6 × s² = 6 × 25 = 150 cm². Angka 125 cm³ adalah volumenya — jangan tertukar."
  },
  {
    topic: "Luas Permukaan Balok",
    q: "Luas permukaan balok berukuran 6 cm × 4 cm × 2 cm adalah …",
    options: ["48 cm²", "64 cm²", "88 cm²", "96 cm²"],
    answer: 2,
    explain: "LP balok = 2 × (6×4 + 6×2 + 4×2) = 2 × (24 + 12 + 8) = 2 × 44 = 88 cm²."
  },
  {
    topic: "Volume Kubus",
    q: "Volume kubus dengan rusuk 6 cm adalah …",
    options: ["108 cm³", "180 cm³", "200 cm³", "216 cm³"],
    answer: 3,
    explain: "V kubus = s³ = 6 × 6 × 6 = 216 cm³."
  },
  {
    topic: "Volume Balok",
    q: "Volume balok berukuran 10 cm × 5 cm × 4 cm adalah …",
    options: ["200 cm³", "100 cm³", "140 cm³", "400 cm³"],
    answer: 0,
    explain: "V balok = p × l × t = 10 × 5 × 4 = 200 cm³."
  },
  {
    topic: "Volume Prisma",
    q: "Sebuah prisma segitiga mempunyai alas segitiga dengan alas 6 cm dan tinggi 4 cm. Jika tinggi prisma 10 cm, volumenya adalah …",
    svg: '<svg viewBox="0 0 340 218" role="img" aria-label="Ilustrasi prisma segitiga: alas segitiga 6 cm, tinggi segitiga 4 cm, tinggi prisma 10 cm"><polygon points="60,168 150,168 282,142 192,142" fill="#DBEAFE" opacity="0.7"/><polygon points="60,168 105,78 237,52 192,142" fill="#DBEAFE"/><polygon points="105,78 150,168 282,142 237,52" fill="#BFDBFE"/><polygon points="192,142 282,142 237,52" fill="#FDE68A"/><polygon points="60,168 150,168 105,78" fill="#FEF3C7"/><polygon points="60,168 150,168 282,142 192,142" fill="none" stroke="#2563EB" stroke-width="2"/><polygon points="60,168 105,78 237,52 192,142" fill="none" stroke="#2563EB" stroke-width="2"/><polygon points="105,78 150,168 282,142 237,52" fill="none" stroke="#2563EB" stroke-width="2"/><polygon points="192,142 282,142 237,52" fill="none" stroke="#D97706" stroke-width="2"/><polygon points="60,168 150,168 105,78" fill="none" stroke="#D97706" stroke-width="2"/><line x1="105" y1="78" x2="105" y2="168" stroke="#1E3A8A" stroke-width="2" stroke-dasharray="6 4"/><polyline points="105,156 117,156 117,168" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><text x="95" y="123" text-anchor="middle" transform="rotate(-90 95 123)" font-size="12.5" font-weight="700" fill="#1E3A8A">4 cm</text><text x="105" y="192" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E3A8A">6 cm</text><text x="178" y="38" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E3A8A">tinggi prisma = 10 cm</text></svg>',
    options: ["60 cm³", "240 cm³", "80 cm³", "120 cm³"],
    answer: 3,
    explain: "Luas alas segitiga = ½ × 6 × 4 = 12 cm². V prisma = L alas × t = 12 × 10 = 120 cm³."
  },
  {
    topic: "Luas Permukaan Limas",
    q: "Limas segiempat beraturan mempunyai alas persegi 6 cm × 6 cm dan tinggi setiap segitiga tegaknya 5 cm. Luas permukaannya adalah …",
    options: ["66 cm²", "96 cm²", "120 cm²", "156 cm²"],
    answer: 1,
    explain: "Luas alas = 36 cm². Setiap segitiga tegak = ½ × 6 × 5 = 15 cm², ada 4 → 60 cm². LP = 36 + 60 = 96 cm²."
  },
  {
    topic: "Volume Limas",
    q: "Volume limas dengan luas alas 30 cm² dan tinggi 12 cm adalah …",
    options: ["120 cm³", "360 cm³", "180 cm³", "90 cm³"],
    answer: 0,
    explain: "V limas = ⅓ × 30 × 12 = 120 cm³. Angka 360 cm³ adalah volume prisma pasangannya."
  },
  {
    topic: "Satuan Volume",
    q: "Volume 2 liter sama dengan …",
    options: ["200 cm³", "20 cm³", "2.000 cm³", "20.000 cm³"],
    answer: 2,
    explain: "1 liter = 1.000 cm³, jadi 2 liter = 2.000 cm³."
  },
  {
    topic: "Aplikasi Luas Permukaan",
    q: "Sebuah kotak kubus tanpa tutup mempunyai rusuk 8 cm. Luas karton minimum untuk membuat kotak itu adalah …",
    options: ["384 cm²", "320 cm²", "512 cm²", "256 cm²"],
    answer: 1,
    explain: "Tanpa tutup, sisinya hanya 5: LP = 5 × 8² = 5 × 64 = 320 cm². Angka 384 cm² adalah LP kubus utuh (6 sisi)."
  },
  {
    topic: "Prisma vs Limas",
    q: "Sebuah prisma dan sebuah limas mempunyai luas alas dan tinggi yang sama. Jika volume prisma 90 cm³, volume limas adalah …",
    svg: '<svg viewBox="0 0 400 226" role="img" aria-label="Ilustrasi prisma dan limas dengan alas dan tinggi yang sama: volume prisma 90 cm persegi, volume limas ditanyakan"><polygon points="20,70 130,70 170,42 60,42" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/><polygon points="130,70 170,42 170,150 130,178" fill="#BFDBFE" stroke="#2563EB" stroke-width="2"/><line x1="60" y1="42" x2="60" y2="150" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.55"/><line x1="60" y1="150" x2="170" y2="150" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.55"/><line x1="60" y1="150" x2="20" y2="178" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.55"/><rect x="20" y="70" width="110" height="108" fill="#DBEAFE" fill-opacity="0.8" stroke="#2563EB" stroke-width="2"/><line x1="34" y1="76" x2="34" y2="172" stroke="#1E3A8A" stroke-width="2" stroke-dasharray="6 4"/><text x="44" y="128" font-size="12.5" font-weight="700" fill="#1E3A8A">t</text><text x="197" y="106" text-anchor="middle" font-size="22" font-weight="700" fill="#0F172A">=</text><text x="197" y="134" text-anchor="middle" font-size="17" font-weight="700" fill="#0F172A">3 ×</text><polygon points="265,150 375,150 300,56" fill="#FDE68A" opacity="0.55"/><polygon points="225,178 335,178 375,150 265,150" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/><polygon points="335,178 375,150 300,56" fill="#FDE68A" stroke="#D97706" stroke-width="2"/><polygon points="225,178 335,178 300,56" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/><line x1="300" y1="56" x2="300" y2="164" stroke="#1E3A8A" stroke-width="2" stroke-dasharray="6 4"/><polyline points="300,154 310,154 310,164" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><text x="290" y="110" text-anchor="middle" transform="rotate(-90 290 110)" font-size="12.5" font-weight="700" fill="#1E3A8A">t</text><text x="95" y="204" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E3A8A">V prisma = 90 cm³</text><text x="300" y="204" text-anchor="middle" font-size="12.5" font-weight="700" fill="#92400E">V limas = ?</text></svg>',
    options: ["270 cm³", "90 cm³", "45 cm³", "30 cm³"],
    answer: 3,
    explain: "Volume limas selalu ⅓ dari bangun lurus pasangannya: ⅓ × 90 = 30 cm³."
  }
];

var TANTANGAN = [
  {
    q: "Sebuah kotak berbentuk balok tanpa tutup berukuran 12 cm × 8 cm × 5 cm. Luas karton minimum untuk membuatnya adalah …",
    options: ["392 cm²", "200 cm²", "296 cm²", "96 cm²"],
    answer: 2,
    explain: "Alas = 12 × 8 = 96. Dinding: 2 × (12 × 5) + 2 × (8 × 5) = 120 + 80 = 200. Total = 96 + 200 = 296 cm². Angka 392 cm² adalah luas permukaan balok utuh dengan tutup."
  },
  {
    q: "Sebuah bangun gabungan terdiri dari balok 4 cm × 3 cm × 2 cm dengan limas beralas 4 cm × 3 cm dan tinggi 3 cm tepat di atasnya. Volume bangun gabungan itu adalah …",
    svg: '<svg viewBox="0 0 340 232" role="img" aria-label="Ilustrasi bangun gabungan: balok 4 kali 3 kali 2 cm dengan limas beralas 4 kali 3 cm dan tinggi 3 cm tepat di atasnya"><polygon points="128,120 288,120 184,69" fill="#FDE68A" opacity="0.55"/><polygon points="80,150 240,150 288,120 128,120" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/><polygon points="240,150 288,120 288,164 240,194" fill="#BFDBFE" stroke="#2563EB" stroke-width="2"/><rect x="80" y="150" width="160" height="44" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/><polygon points="80,150 128,120 184,69" fill="#FEF3C7" opacity="0.85"/><polygon points="240,150 288,120 184,69" fill="#FDE68A" stroke="#D97706" stroke-width="2"/><polygon points="80,150 240,150 184,69" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/><line x1="184" y1="69" x2="184" y2="135" stroke="#1E3A8A" stroke-width="2" stroke-dasharray="6 4"/><text x="175" y="103" text-anchor="middle" transform="rotate(-90 175 103)" font-size="11.5" font-weight="700" fill="#1E3A8A">t limas = 3 cm</text><text x="63" y="173" text-anchor="middle" transform="rotate(-90 63 173)" font-size="11.5" font-weight="700" fill="#1E3A8A">t balok = 2 cm</text><text x="160" y="214" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E3A8A">4 cm</text><text x="278" y="200" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E3A8A">3 cm</text></svg>',
    options: ["36 cm³", "24 cm³", "48 cm³", "60 cm³"],
    answer: 0,
    explain: "V balok = 4 × 3 × 2 = 24 cm³. V limas = ⅓ × (4 × 3) × 3 = 12 cm³. Total = 24 + 12 = 36 cm³."
  },
  {
    q: "Luas permukaan sebuah kubus adalah 294 cm². Panjang rusuk kubus itu adalah …",
    options: ["5 cm", "6 cm", "8 cm", "7 cm"],
    answer: 3,
    explain: "6 × s² = 294 → s² = 49 → s = 7 cm."
  },
  {
    q: "Prisma segitiga siku-siku mempunyai sisi alas 3 cm, 4 cm, dan 5 cm, dengan tinggi prisma 10 cm. Luas permukaan prisma itu adalah …",
    svg: '<svg viewBox="0 0 340 218" role="img" aria-label="Ilustrasi prisma segitiga siku-siku: sisi alas segitiga 3 cm, 4 cm, dan 5 cm, tinggi prisma 10 cm"><polygon points="70,180 160,180 310,150 220,150" fill="#DBEAFE" opacity="0.7"/><polygon points="70,180 70,80 220,50 220,150" fill="#DBEAFE"/><polygon points="160,180 70,80 220,50 310,150" fill="#BFDBFE"/><polygon points="220,150 310,150 220,50" fill="#FDE68A"/><polygon points="70,180 160,180 70,80" fill="#FEF3C7"/><polygon points="70,180 160,180 310,150 220,150" fill="none" stroke="#2563EB" stroke-width="2"/><polygon points="70,180 70,80 220,50 220,150" fill="none" stroke="#2563EB" stroke-width="2"/><polygon points="160,180 70,80 220,50 310,150" fill="none" stroke="#2563EB" stroke-width="2"/><polygon points="220,150 310,150 220,50" fill="none" stroke="#D97706" stroke-width="2"/><polygon points="70,180 160,180 70,80" fill="none" stroke="#D97706" stroke-width="2"/><polyline points="70,164 86,164 86,180" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><text x="60" y="135" text-anchor="end" font-size="12.5" font-weight="700" fill="#1E3A8A">4 cm</text><text x="100" y="112" text-anchor="end" font-size="12.5" font-weight="700" fill="#92400E">5 cm</text><text x="115" y="204" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E3A8A">3 cm</text><text x="150" y="38" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E3A8A">tinggi prisma = 10 cm</text></svg>',
    options: ["120 cm²", "132 cm²", "144 cm²", "60 cm²"],
    answer: 1,
    explain: "Luas satu alas segitiga = ½ × 3 × 4 = 6 cm², dua alas = 12 cm². Selimut = keliling alas × tinggi prisma = (3 + 4 + 5) × 10 = 120 cm². LP = 12 + 120 = 132 cm²."
  },
  {
    q: "Sebuah akuarium berukuran 50 cm × 30 cm × 40 cm diisi air sampai penuh. Air yang dibutuhkan adalah …",
    options: ["6 liter", "600 liter", "60 liter", "16 liter"],
    answer: 2,
    explain: "V = 50 × 30 × 40 = 60.000 cm³ = 60 liter."
  }
];

/* ================= LOGIKA (hanya di browser) ================= */

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    function $(id) { return document.getElementById(id); }
    function simpan(kunci, nilai) {
      try { localStorage.setItem(PREFIX + kunci, JSON.stringify(nilai)); } catch (e) {}
    }
    function baca(kunci, bawaan) {
      try {
        var m = localStorage.getItem(PREFIX + kunci);
        return m ? JSON.parse(m) : bawaan;
      } catch (e) { return bawaan; }
    }
    function tampilTersimpan(el) { if (el) { el.classList.add("tampil"); } }
    function formatAngka(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }

    /* ---------- Render kelompok soal pilihan (umpan balik langsung) ---------- */
    function buatKelompokSoal(wadah, data, kunciSimpan, elSkor, labelSkor, pakaiTopik, bolehUlang) {
      var jawaban = kunciSimpan ? baca(kunciSimpan, {}) : {};
      var huruf = ["A", "B", "C", "D"];

      function skor() {
        var n = 0;
        data.forEach(function (soal, i) { if (jawaban[i] === soal.answer) { n++; } });
        return n;
      }
      function perbaruiSkor() {
        if (elSkor) {
          var terjawab = Object.keys(jawaban).length;
          elSkor.textContent = labelSkor + ": " + skor() + " benar dari " + data.length + " soal" +
            (terjawab < data.length ? " (" + terjawab + " terjawab)" : "") + ".";
        }
      }

      data.forEach(function (soal, i) {
        var blok = document.createElement("div");
        blok.className = "soal";
        var html = "";
        if (pakaiTopik && soal.topic) { html += '<span class="tagik">' + soal.topic + "</span>"; }
        html += '<p class="tanya">' + (i + 1) + ". " + soal.q + "</p>";
        blok.innerHTML = html;

        if (soal.svg) {
          var wadahGambar = document.createElement("div");
          wadahGambar.className = "gambar-soal";
          wadahGambar.innerHTML = soal.svg;
          blok.appendChild(wadahGambar);
        }

        var grup = document.createElement("div");
        grup.className = "opsi-grup";
        soal.options.forEach(function (teks, j) {
          var b = document.createElement("button");
          b.className = "opsi";
          b.textContent = (soal.options.length > 2 ? huruf[j] + ". " : "") + teks;
          b.addEventListener("click", function () {
            if (!bolehUlang && jawaban[i] !== undefined) { return; } /* kuis: jawaban pertama terkunci */
            if (jawaban[i] === soal.answer) { return; } /* latihan: terkunci setelah benar */
            jawaban[i] = j;
            if (kunciSimpan) { simpan(kunciSimpan, jawaban); }
            warnai();
          });
          grup.appendChild(b);
        });
        blok.appendChild(grup);

        var umpan = document.createElement("div");
        umpan.className = "umpan";
        blok.appendChild(umpan);

        if (soal.remedial) {
          var rem = document.createElement("p");
          rem.className = "remedial";
          rem.style.display = "none";
          rem.textContent = "Petunjuk perbaikan: " + soal.remedial;
          blok.appendChild(rem);
          blok._remedial = rem;
        }

        function warnai() {
          var pilihan = jawaban[i];
          Array.prototype.forEach.call(grup.children, function (b, j) {
            /* Mode latihan (bolehUlang): terkunci total hanya bila sudah dijawab benar; bila
               salah, tombol yang salah dinonaktifkan tetapi siswa boleh mencoba pilihan lain.
               Mode kuis: semua tombol terkunci setelah jawaban pertama. */
            b.disabled = bolehUlang
              ? (pilihan === soal.answer || (pilihan !== undefined && j === pilihan && j !== soal.answer))
              : (pilihan !== undefined);
            b.classList.toggle("benar", pilihan !== undefined && j === soal.answer);
            b.classList.toggle("salah", pilihan !== undefined && j === pilihan && j !== soal.answer);
          });
          if (pilihan !== undefined) {
            umpan.className = "umpan tampil " + (pilihan === soal.answer ? "ok" : "no");
            umpan.textContent = (pilihan === soal.answer ? "✓ Benar. " : "✗ Belum tepat. ") + soal.explain;
            if (blok._remedial) { blok._remedial.style.display = pilihan === soal.answer ? "none" : "block"; }
          }
          perbaruiSkor();
        }
        blok._warnai = warnai;
        wadah.appendChild(blok);
        warnai();
      });

      perbaruiSkor();
      return { skor: skor, jumlah: data.length };
    }

    /* ---------- Render kelompok isian cepat (cek otomatis) ---------- */
    function buatKelompokIsian(wadah, data, kunciSimpan) {
      var tersimpan = baca(kunciSimpan, {});
      data.forEach(function (soal, i) {
        var blok = document.createElement("div");
        blok.className = "soal";
        var label = document.createElement("p");
        label.className = "tanya";
        label.textContent = (i + 1) + ". " + soal.label;
        blok.appendChild(label);

        var baris = document.createElement("div");
        baris.className = "isian-baris";
        var masukan = document.createElement("input");
        masukan.type = "number";
        masukan.inputMode = "decimal";
        masukan.setAttribute("aria-label", "Jawaban soal isian " + (i + 1));
        masukan.placeholder = "tulis jawabanmu";
        var satuan = document.createElement("span");
        satuan.className = "satuan";
        satuan.textContent = soal.satuan;
        var tombol = document.createElement("button");
        tombol.className = "btn btn-biru";
        tombol.textContent = "Periksa";
        baris.appendChild(masukan);
        baris.appendChild(satuan);
        baris.appendChild(tombol);
        blok.appendChild(baris);

        var umpan = document.createElement("div");
        umpan.className = "umpan";
        blok.appendChild(umpan);
        wadah.appendChild(blok);

        function nilaiBenar() {
          var v = tersimpan[i];
          return v !== undefined && Math.abs(parseFloat(v) - soal.answer) < 0.001;
        }
        function warnai() {
          if (tersimpan[i] !== undefined) {
            masukan.value = tersimpan[i];
            var benar = nilaiBenar();
            umpan.className = "umpan tampil " + (benar ? "ok" : "no");
            umpan.textContent = (benar ? "✓ Benar. " : "✗ Belum tepat. ") + soal.explain;
            masukan.disabled = benar;
            tombol.disabled = benar;
            if (benar) { tombol.textContent = "Sudah Benar ✓"; }
          }
        }
        tombol.addEventListener("click", function () {
          var v = parseFloat(String(masukan.value).replace(",", "."));
          if (isNaN(v)) { alert("Isi dulu jawabanmu dengan angka, ya."); return; }
          tersimpan[i] = v;
          simpan(kunciSimpan, tersimpan);
          warnai();
        });
        warnai();
      });
    }

    /* ---------- Sub-bab 1: polling ---------- */
    var pollingTersimpan = baca("poll", null);
    document.querySelectorAll("#polling .opsi").forEach(function (b) {
      if (pollingTersimpan && b.getAttribute("data-poll") === pollingTersimpan) {
        b.classList.add("terpilih");
        var u = $("polling-umpan");
        u.className = "umpan info tampil";
        u.textContent = "Pilihan pollingmu sudah tersimpan. Keduanya memang penting — luas permukaan untuk bahan, volume untuk isi. Kita pelajari satu per satu mulai Sub-bab 3.";
      }
      b.addEventListener("click", function () {
        document.querySelectorAll("#polling .opsi").forEach(function (x) { x.classList.remove("terpilih"); });
        b.classList.add("terpilih");
        simpan("poll", b.getAttribute("data-poll"));
        var u = $("polling-umpan");
        u.className = "umpan info tampil";
        u.textContent = "Tersimpan! Pilihan yang baik — membuat kotak memang menuntut keduanya: luas permukaan untuk bahannya, volume untuk isinya. Sekarang coba tebak awal di bawah.";
      });
    });

    /* ---------- Sub-bab 1: tebak awal (pilihan, tersimpan) ---------- */
    var tebakanTersimpan = baca("guess", null);
    function umpanTebakan(idx) {
      var u = $("tebakan-umpan");
      u.className = "umpan info tampil";
      u.textContent = idx === 1
        ? "Tebakanmu tepat! Kotak tanpa tutup mempunyai 5 sisi, masing-masing 10 × 10 = 100 cm², jadi karton minimumnya 5 × 100 = 500 cm². Kita bahas tuntas di Sub-bab 3 dan 5."
        : "Tersimpan! Jawaban yang benar adalah 500 cm²: kotak tanpa tutup hanya mempunyai 5 sisi — 5 × (10 × 10) = 500 cm² (600 cm² itu kubus utuh 6 sisi). Kita bahas tuntas di Sub-bab 3 dan 5.";
      document.querySelectorAll("#tebakan .opsi").forEach(function (b) {
        var j = parseInt(b.getAttribute("data-tebak"), 10);
        b.classList.toggle("benar", j === 1);
        b.classList.toggle("salah", j === idx && j !== 1);
        b.disabled = true;
      });
    }
    if (tebakanTersimpan && tebakanTersimpan.jawaban !== undefined) { umpanTebakan(tebakanTersimpan.jawaban); }
    document.querySelectorAll("#tebakan .opsi").forEach(function (b) {
      b.addEventListener("click", function () {
        var idx = parseInt(b.getAttribute("data-tebak"), 10);
        simpan("guess", { jawaban: idx });
        umpanTebakan(idx);
      });
    });

    /* ---------- Sub-bab 2: prasyarat ---------- */
    buatKelompokSoal($("prasyarat-wadah"), PRASYARAT, "prasyarat", $("prasyarat-skor"), "Skor prasyarat", false, true);

    /* ---------- Langkah bertahap (Sub-bab 3 & 4) ---------- */
    document.querySelectorAll(".btn-langkah").forEach(function (btn) {
      var wadahLangkah = $(btn.getAttribute("data-target"));
      var langkah = wadahLangkah.querySelectorAll(".langkah");
      var indeks = 0;
      btn.addEventListener("click", function () {
        if (indeks < langkah.length) {
          langkah[indeks].classList.add("tampil");
          indeks++;
          if (indeks === langkah.length) {
            btn.textContent = "Semua langkah sudah tampil ✓";
            btn.disabled = true;
          }
        }
      });
    });

    /* ---------- Sub-bab 3: Lab Luas ---------- */
    function perbaruiLabLuas() {
      var p = parseInt($("lab-p").value, 10);
      var l = parseInt($("lab-l").value, 10);
      var t = parseInt($("lab-t").value, 10);
      $("lab-p-nilai").textContent = p + " cm";
      $("lab-l-nilai").textContent = l + " cm";
      $("lab-t-nilai").textContent = t + " cm";
      var pl = p * l, pt = p * t, lt = l * t;
      var lp = 2 * (pl + pt + lt);
      $("lab-luas-hasil").innerHTML =
        "Pasangan sisi yang berhadapan: p × l = <b>" + pl + " cm²</b> (sepasang), p × t = <b>" + pt + " cm²</b> (sepasang), l × t = <b>" + lt + " cm²</b> (sepasang).<br>" +
        "Luas permukaan = 2 × (" + pl + " + " + pt + " + " + lt + ") = <span class=\"angka-besar\">" + formatAngka(lp) + " cm²</span><br>" +
        "Setiap ukuran sisi selalu muncul <b>sepasang dan berhadapan</b> — itulah mengapa rumusnya dikalikan 2.";
    }
    ["lab-p", "lab-l", "lab-t"].forEach(function (id) {
      $(id).addEventListener("input", perbaruiLabLuas);
    });
    perbaruiLabLuas();

    /* ---------- Sub-bab 3: isian cepat luas permukaan ---------- */
    buatKelompokIsian($("isian-lp-wadah"), ISIAN_LP, "isian-lp");

    /* ---------- Sub-bab 4: Pembanding Prisma–Limas ---------- */
    function perbaruiPembanding() {
      var alas = parseInt($("banding-alas").value, 10);
      var t = parseInt($("banding-t").value, 10);
      $("banding-alas-nilai").textContent = alas + " cm²";
      $("banding-t-nilai").textContent = t + " cm";
      var vPrisma = alas * t;
      var vLimas = vPrisma / 3;
      $("banding-prisma").innerHTML = "V = L<sub>alas</sub> × t = " + alas + " × " + t + " = <b>" + formatAngka(vPrisma) + " cm³</b>";
      $("banding-limas").innerHTML = "V = ⅓ × L<sub>alas</sub> × t = ⅓ × " + alas + " × " + t + " = <b>" + formatAngka(vLimas) + " cm³</b>";
      $("banding-hasil").innerHTML = "Limas selalu tepat <b>⅓-nya</b> prisma: " + formatAngka(vLimas) + " adalah ⅓ dari " + formatAngka(vPrisma) + ". Perlu <b>3 limas</b> untuk memenuhi 1 prisma yang alas dan tingginya sama.";
    }
    ["banding-alas", "banding-t"].forEach(function (id) {
      $(id).addEventListener("input", perbaruiPembanding);
    });
    perbaruiPembanding();

    /* ---------- Sub-bab 4: isian cepat volume ---------- */
    buatKelompokIsian($("isian-v-wadah"), ISIAN_V, "isian-v");

    /* ---------- Sub-bab 5: cek pemahaman + miskonsepsi ---------- */
    buatKelompokSoal($("cek-wadah"), CEK, "cek", $("cek-skor"), "Skor cek pemahaman", true, true);

    var wadahMis = $("miskonsepsi-wadah");
    MISKONSEPSI.forEach(function (m, i) {
      var judul = document.createElement("h3");
      judul.textContent = "Miskonsepsi " + (i + 1);
      wadahMis.appendChild(judul);
      var salah = document.createElement("p");
      salah.innerHTML = "<i>Cara berpikir yang keliru:</i> " + m.salah;
      wadahMis.appendChild(salah);
    });
    var wadahMisSoal = document.createElement("div");
    wadahMis.appendChild(wadahMisSoal);
    buatKelompokSoal(wadahMisSoal, MISKONSEPSI.map(function (m) {
      return { q: m.q, options: m.options, answer: m.answer, explain: m.explain };
    }), "miskonsepsi", null, "", false, true);

    /* ---------- Sub-bab 6: aplikasi (cek mandiri per masalah) ---------- */
    [1, 2, 3].forEach(function (n) {
      buatKelompokSoal($("aplikasi-wadah-" + n), [APLIKASI_CEK[n - 1]], "aplikasi-" + n, null, "", false, true);
    });

    /* ---------- Sub-bab 7: proyek (checklist + isian tersimpan) ---------- */
    var kolomProyek = ["bangun", "ukuran", "lp", "volume"];
    var proyek = baca("proyek", null) || {};
    var cekProyek = proyek.ceklist || {};
    document.querySelectorAll("#proyek-ceklist label").forEach(function (label) {
      var idx = label.getAttribute("data-cek");
      var kotak = label.querySelector("input[type=checkbox]");
      if (cekProyek[idx]) {
        kotak.checked = true;
        label.classList.add("tercentang");
      }
      kotak.addEventListener("change", function () {
        cekProyek[idx] = kotak.checked;
        label.classList.toggle("tercentang", kotak.checked);
        proyek.ceklist = cekProyek;
        simpan("proyek", proyek);
      });
    });
    kolomProyek.forEach(function (k) {
      var el = $("proyek-" + k);
      if (el && proyek[k]) { el.value = proyek[k]; }
    });
    if (proyek.bangun || proyek.ukuran || proyek.lp || proyek.volume) { tampilTersimpan($("proyek-tersimpan")); }
    $("simpan-proyek").addEventListener("click", function () {
      kolomProyek.forEach(function (k) { proyek[k] = $("proyek-" + k).value.trim(); });
      proyek.ceklist = cekProyek;
      simpan("proyek", proyek);
      tampilTersimpan($("proyek-tersimpan"));
    });

    /* ---------- Sub-bab 8: kuis inti ---------- */
    var kuis = buatKelompokSoal($("kuis-wadah"), KUIS, null, null, "", true, false);
    $("selesai-kuis").addEventListener("click", function () {
      var s = kuis.skor();
      var terbaik = baca("quiz-best", null);
      if (terbaik === null || s > terbaik) { simpan("quiz-best", s); terbaik = s; }
      var h = $("kuis-hasil");
      h.className = "umpan tampil " + (s >= 7 ? "ok" : "info");
      h.textContent = "Skor kuismu: " + s + " dari 10. Skor terbaikmu sejauh ini: " + terbaik + " dari 10." +
        (s < 10 ? " Soal yang belum tepat sudah ditandai beserta penjelasannya — pelajari lagi, lalu coba jawab ulang dengan memuat ulang halaman." : " Sempurna! Lanjutkan ke Soal Tantangan di bawah.");
    });

    /* ---------- Sub-bab 8: tantangan (skor terpisah) ---------- */
    var tantangan = buatKelompokSoal($("tantangan-wadah"), TANTANGAN, null, null, "", false, false);
    $("selesai-tantangan").addEventListener("click", function () {
      var s = tantangan.skor();
      var terbaik = baca("tantangan-best", null);
      if (terbaik === null || s > terbaik) { simpan("tantangan-best", s); terbaik = s; }
      var h = $("tantangan-hasil");
      h.className = "umpan tampil " + (s >= 4 ? "ok" : "info");
      h.textContent = "Skor tantanganmu: " + s + " dari 5 (terbaik: " + terbaik + " dari 5). Skor ini terpisah dan tidak mengubah skor kuis inti.";
    });

    /* ---------- Sub-bab 8: refleksi ---------- */
    var refleksi = baca("refleksi", null);
    if (refleksi) {
      [1, 2, 3].forEach(function (n) {
        var el = $("refleksi-" + n);
        if (el && refleksi["r" + n]) { el.value = refleksi["r" + n]; }
      });
      tampilTersimpan($("refleksi-tersimpan"));
    }
    $("simpan-refleksi").addEventListener("click", function () {
      simpan("refleksi", {
        r1: $("refleksi-1").value.trim(),
        r2: $("refleksi-2").value.trim(),
        r3: $("refleksi-3").value.trim()
      });
      tampilTersimpan($("refleksi-tersimpan"));
    });

    /* ---------- Progres: sub-bab yang dikunjungi ---------- */
    var dikunjungi = {};
    baca("visited", []).forEach(function (id) { dikunjungi[id] = true; });

    function perbaruiProgres() {
      var daftar = Object.keys(dikunjungi);
      simpan("visited", daftar);
      var persen = Math.round((daftar.length / 8) * 100);
      $("bar-progres").style.width = persen + "%";
      $("teks-progres").textContent = "Kemajuan belajar: " + daftar.length + " dari 8 sub-bab (" + persen + "%)";
      document.querySelectorAll("#pil-sub a").forEach(function (a) {
        var id = a.getAttribute("href").slice(1);
        a.classList.toggle("selesai", !!dikunjungi[id]);
      });
    }
    function tandai(id) {
      if (!dikunjungi[id]) { dikunjungi[id] = true; perbaruiProgres(); }
    }
    ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8"].forEach(function (id) {
      var el = $(id);
      if (!el) { return; }
      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entri) {
          entri.forEach(function (e) { if (e.isIntersecting) { tandai(id); } });
        }, { threshold: 0.25 });
        io.observe(el);
      } else {
        tandai(id);
      }
    });
    var elTantangan = $("sub8-tantangan");
    if (elTantangan && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entri) {
        entri.forEach(function (e) { if (e.isIntersecting) { tandai("sub8"); } });
      }, { threshold: 0.25 }).observe(elTantangan);
    }
    document.querySelectorAll("#pil-sub a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.querySelectorAll("#pil-sub a").forEach(function (x) { x.classList.remove("aktif"); });
        a.classList.add("aktif");
        tandai(a.getAttribute("href").slice(1));
      });
    });
    perbaruiProgres();
  });
}

/* Ekspor data untuk verifikasi di Node (tidak berpengaruh di browser). */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PREFIX: PREFIX,
    PRASYARAT: PRASYARAT,
    ISIAN_LP: ISIAN_LP,
    ISIAN_V: ISIAN_V,
    CEK: CEK,
    MISKONSEPSI: MISKONSEPSI,
    APLIKASI_CEK: APLIKASI_CEK,
    KUIS: KUIS,
    TANTANGAN: TANTANGAN
  };
}

/* ================= PERCOBAAN TUANG PASIR 3D (Sub-bab 4) =================
   Sebuah limas (alas & tinggi sama dengan prisma kaca di sebelahnya)
   dituang berulang kali; permukaan pasir di dalam prisma naik ⅓ setiap
   tuangan dan prisma tepat penuh pada tuangan ke-3. */
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var kanvas = document.querySelector(".tuang-kanvas");
    if (!kanvas) { return; }
    var ctx = kanvas.getContext("2d");
    var tombol = document.querySelector(".btn-tuang");
    var tombolUlang = document.querySelector(".btn-tuang-ulang");
    var statusEl = document.querySelector(".tuang-status");

    var HB = 1.1;          /* setengah sisi alas persegi */
    var T = 2.6;           /* tinggi prisma & limas */
    var POS_DIAM = [3.35, 0, 0];
    var POS_ATAS = [-0.5, 4.55, 0];
    var MIRING_ATAS = -2.6;

    var st = {
      tuang: 0,            /* tuangan selesai */
      level: 0,            /* tinggi pasir saat ini (satuan dunia) */
      anim: null,          /* {mulai} saat animasi berjalan */
      partikel: [],
      yaw: -0.55, pitch: 0.32
    };

    var TEKS_AWAL = "Prisma masih kosong (0 dari 3 tuangan). Limas di samping beralas dan bertinggi sama persis dengan prisma — tuang dan buktikan sendiri.";
    var TEKS_ISI = [
      "",
      "Tuangan ke-1 selesai: prisma baru terisi ⅓. Masih jauh dari penuh — satu limas memang belum cukup.",
      "Tuangan ke-2 selesai: prisma terisi ⅔. Tinggal satu tuangan lagi…",
      "✓ PENUH! Tepat 3 tuangan limas untuk memenuhi 1 prisma yang alas dan tingginya sama. Jadi isi limas adalah ⅓ dari isi prisma: V limas = ⅓ × V prisma."
    ];

    function vAdd(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
    function vScale(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }
    function vCross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
    function vDot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
    function rotSumbu(v, sumbu, rad) {
      var c = Math.cos(rad), s = Math.sin(rad);
      var silang = vCross(sumbu, v);
      var d = vDot(sumbu, v);
      return [
        v[0] * c + silang[0] * s + sumbu[0] * d * (1 - c),
        v[1] * c + silang[1] * s + sumbu[1] * d * (1 - c),
        v[2] * c + silang[2] * s + sumbu[2] * d * (1 - c)
      ];
    }
    function rotZ(v, rad) {
      var c = Math.cos(rad), s = Math.sin(rad);
      return [v[0] * c - v[1] * s, v[0] * s + v[1] * c, v[2]];
    }
    function halus(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
    function campur(a, b, k) { return a + (b - a) * k; }

    /* Keadaan limas pada waktu animasi p (0..1); tanpa animasi: diam di samping. */
    function keadaanLimas() {
      if (!st.anim) { return { pos: POS_DIAM, miring: 0, menuang: false }; }
      var p = Math.min(1, (performance.now() - st.anim.mulai) / 2400);
      var m;
      if (p < 0.3) { m = halus(p / 0.3); }
      else if (p < 0.78) { m = 1; }
      else { m = 1 - halus((p - 0.78) / 0.22); }
      return {
        pos: [campur(POS_DIAM[0], POS_ATAS[0], m), campur(POS_DIAM[1], POS_ATAS[1], m), 0],
        miring: MIRING_ATAS * m,
        menuang: p >= 0.3 && p <= 0.75,
        p: p
      };
    }
    function levelSaatIni() {
      if (!st.anim) { return st.level; }
      var p = Math.min(1, (performance.now() - st.anim.mulai) / 2400);
      var naik = halus((p - 0.3) / 0.45);
      return (st.anim.dari + naik) / 3 * T;
    }

    var ALAS = [[-HB, 0, -HB], [HB, 0, -HB], [HB, 0, HB], [-HB, 0, HB]];
    var PUNCAK = [0, T, 0];

    function titikLimas(lokal, keadaan) {
      return vAdd(rotZ(lokal, keadaan.miring), keadaan.pos);
    }

    function perbaruiUI() {
      if (statusEl) {
        if (st.anim) { statusEl.textContent = "Menuang limas ke-" + (st.tuang + 1) + "… perhatikan permukaan pasirnya naik."; }
        else if (st.tuang === 0) { statusEl.textContent = TEKS_AWAL; }
        else { statusEl.textContent = TEKS_ISI[st.tuang]; }
      }
      if (tombol) {
        if (st.tuang >= 3) { tombol.textContent = "Sudah Penuh ✓"; tombol.disabled = true; }
        else {
          tombol.textContent = "▶ Tuang Limas ke-" + (st.tuang + 1);
          tombol.disabled = !!st.anim;
        }
      }
    }

    function gambar() {
      var W = kanvas.width, H = kanvas.height;
      ctx.clearRect(0, 0, W, H);
      var keadaan = keadaanLimas();
      var level = levelSaatIni();
      function putar(v) {
        return rotSumbu(rotSumbu(v, [0, 1, 0], st.yaw), [1, 0, 0], st.pitch);
      }
      /* titik dunia */
      var wadahBawah = ALAS.map(function (t) { return t; });
      var wadahAtas = ALAS.map(function (t) { return [t[0], T, t[2]]; });
      var pasirAtas = ALAS.map(function (t) { return [t[0], level, t[2]]; });
      var limasAlas = ALAS.map(function (t) { return titikLimas(t, keadaan); });
      var limasPuncak = titikLimas(PUNCAK, keadaan);

      /* pas-kan ke kanvas dari kotak pembungkus prisma + limas */
      var semua = wadahBawah.concat(wadahAtas, limasAlas, [limasPuncak]).map(putar);
      var minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
      semua.forEach(function (pv) {
        if (pv[0] < minX) { minX = pv[0]; }
        if (pv[0] > maxX) { maxX = pv[0]; }
        if (pv[1] < minY) { minY = pv[1]; }
        if (pv[1] > maxY) { maxY = pv[1]; }
      });
      var skala = Math.min((W - 110) / Math.max(0.001, maxX - minX), (H - 100) / Math.max(0.001, maxY - minY), 120);
      var pusX = (minX + maxX) / 2, pusY = (minY + maxY) / 2;
      function layar(v) {
        var pv = putar(v);
        return [W / 2 + (pv[0] - pusX) * skala, H / 2 - (pv[1] - pusY) * skala, pv[2]];
      }

      var wajah = [];
      function tambahWajah(titik, r, g, b, alfa, garis) {
        var pts = titik.map(layar);
        var z = 0;
        pts.forEach(function (p) { z += p[2]; });
        wajah.push({ pts: pts, z: z / pts.length, warna: "rgba(" + r + "," + g + "," + b + "," + alfa + ")", garis: garis || null });
      }
      /* pasir di dalam prisma */
      if (level > 0.02) {
        for (var s = 0; s < 4; s++) {
          var a1 = ALAS[s], a2 = ALAS[(s + 1) % 4];
          tambahWajah([a1, a2, [a2[0], level, a2[2]], [a1[0], level, a1[2]]], 245, 158, 11, 0.9);
        }
        tambahWajah(pasirAtas, 253, 230, 138, 0.95);
      }
      /* kaca prisma: alas + 4 sisi tembus pandang */
      tambahWajah(wadahBawah, 191, 219, 254, 0.5);
      for (var k = 0; k < 4; k++) {
        var b1 = wadahBawah[k], b2 = wadahBawah[(k + 1) % 4], t2 = wadahAtas[(k + 1) % 4], t1 = wadahAtas[k];
        tambahWajah([b1, b2, t2, t1], 219, 234, 254, 0.13);
      }
      /* limas */
      var urutan = [0, 1, 2, 3];
      urutan.forEach(function (i) {
        tambahWajah([limasAlas[i], limasAlas[(i + 1) % 4], limasPuncak], 254, 243, 199, 0.95, "#D97706");
      });
      tambahWajah(limasAlas, 254, 243, 199, 0.45, "#D97706");

      wajah.sort(function (p, q) { return p.z - q.z; });
      wajah.forEach(function (w) {
        ctx.beginPath();
        w.pts.forEach(function (p, i) { if (i === 0) { ctx.moveTo(p[0], p[1]); } else { ctx.lineTo(p[0], p[1]); } });
        ctx.closePath();
        ctx.fillStyle = w.warna;
        ctx.fill();
        if (w.garis) { ctx.strokeStyle = w.garis; ctx.lineWidth = 2; ctx.stroke(); }
      });

      /* rusuk prisma */
      ctx.strokeStyle = "#2563EB";
      ctx.lineWidth = 2.5;
      function garis3(a, b) {
        var pa = layar(a), pb = layar(b);
        ctx.beginPath(); ctx.moveTo(pa[0], pa[1]); ctx.lineTo(pb[0], pb[1]); ctx.stroke();
      }
      for (var e = 0; e < 4; e++) {
        garis3(wadahBawah[e], wadahBawah[(e + 1) % 4]);
        garis3(wadahAtas[e], wadahAtas[(e + 1) % 4]);
        garis3(wadahBawah[e], wadahAtas[e]);
      }
      /* penanda ⅓ dan ⅔ pada rusuk depan */
      ctx.fillStyle = "#1E3A8A";
      ctx.font = "700 17px system-ui, sans-serif";
      ctx.textAlign = "right";
      [1, 2].forEach(function (n) {
        var yTanda = T * n / 3;
        var titik = layar([-HB, yTanda, HB]);
        ctx.beginPath();
        ctx.moveTo(titik[0] - 12, titik[1]);
        ctx.lineTo(titik[0] + 2, titik[1]);
        ctx.strokeStyle = "#1E3A8A";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillText(n === 1 ? "⅓" : "⅔", titik[0] - 16, titik[1] + 6);
      });
      ctx.textAlign = "left";

      /* partikel pasir */
      if (keadaan.menuang) {
        for (var j = 0; j < 3; j++) {
          st.partikel.push({
            x: limasPuncak[0] + (Math.random() - 0.5) * 0.3,
            y: limasPuncak[1] - 0.1,
            z: limasPuncak[2] + (Math.random() - 0.5) * 0.3,
            v: 0
          });
        }
      }
      st.partikel = st.partikel.filter(function (pt) { return pt.y > level + 0.05; });
      st.partikel.forEach(function (pt) {
        pt.v += 0.012;
        pt.y -= pt.v;
        var p = layar([pt.x, pt.y, pt.z]);
        ctx.beginPath();
        ctx.arc(p[0], p[1], 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(217,119,6,0.9)";
        ctx.fill();
      });
    }

    function bingkai() {
      gambar();
      if (st.anim) {
        var p = (performance.now() - st.anim.mulai) / 2400;
        if (p >= 1) {
          st.tuang += 1;
          st.level = st.tuang / 3 * T;
          st.anim = null;
          st.partikel = [];
          perbaruiUI();
          gambar();
          return;
        }
        requestAnimationFrame(bingkai);
      }
    }

    if (tombol) {
      tombol.addEventListener("click", function () {
        if (st.anim || st.tuang >= 3) { return; }
        st.anim = { mulai: performance.now(), dari: st.tuang };
        perbaruiUI();
        requestAnimationFrame(bingkai);
      });
    }
    if (tombolUlang) {
      tombolUlang.addEventListener("click", function () {
        st.tuang = 0;
        st.level = 0;
        st.anim = null;
        st.partikel = [];
        perbaruiUI();
        gambar();
      });
    }
    var seret = null;
    kanvas.addEventListener("pointerdown", function (ev) {
      seret = { x: ev.clientX, y: ev.clientY };
      try { kanvas.setPointerCapture(ev.pointerId); } catch (e) {}
    });
    kanvas.addEventListener("pointermove", function (ev) {
      if (!seret) { return; }
      st.yaw += (ev.clientX - seret.x) * 0.01;
      st.pitch += (ev.clientY - seret.y) * 0.01;
      if (st.pitch > 1.2) { st.pitch = 1.2; }
      if (st.pitch < -1.2) { st.pitch = -1.2; }
      seret = { x: ev.clientX, y: ev.clientY };
      if (!st.anim) { gambar(); }
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach(function (nama) {
      kanvas.addEventListener(nama, function () { seret = null; });
    });

    perbaruiUI();
    gambar();
  });
}
