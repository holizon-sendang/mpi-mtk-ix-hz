/* Modul P.3 Bangun Ruang Sisi Lengkung — MPI Matematika Kelas 9
   Semua kunci localStorage berawalan "mpi-mtk9-p3-".
   Blok data soal dipisahkan dari logika DOM agar bisa diverifikasi di Node. */
"use strict";

var PREFIX = "mpi-mtk9-p3-";

/* ================= DATA SOAL ================= */

var PRASYARAT = [
  {
    q: "Luas lingkaran berjari-jari 7 cm (pakai π = 22/7) adalah …",
    options: ["44 cm²", "154 cm²", "616 cm²", "308 cm²"],
    answer: 1,
    explain: "L = π × r² = 22/7 × 7² = 22/7 × 49 = 154 cm². Angka 44 cm adalah kelilingnya.",
    remedial: "Rumus luas adalah L = π × r² — jari-jari dikuadratkan dulu: 7² = 49, lalu 22/7 × 49 = 154. Angka 44 cm adalah kelilingnya (2πr), bukan luasnya."
  },
  {
    q: "Keliling lingkaran berjari-jari 10 cm (pakai π = 3,14) adalah …",
    options: ["31,4 cm", "314 cm", "62,8 cm", "628 cm"],
    answer: 2,
    explain: "K = 2 × π × r = 2 × 3,14 × 10 = 62,8 cm.",
    remedial: "Keliling memakai K = 2 × π × r. Untuk r = 10 dan π = 3,14: 2 × 3,14 × 10 = 62,8. Angka 314 adalah luasnya (πr²), bukan kelilingnya."
  },
  {
    q: "Sebuah segitiga siku-siku mempunyai sisi tegak 3 cm dan 4 cm. Panjang sisi miringnya adalah …",
    options: ["7 cm", "5 cm", "6 cm", "25 cm"],
    answer: 1,
    explain: "Sisi miring = √(3² + 4²) = √(9 + 16) = √25 = 5 cm — pola yang sama persis untuk garis pelukis kerucut.",
    remedial: "Teorema Pythagoras: sisi miring² = 3² + 4² = 9 + 16 = 25, jadi sisi miring = √25 = 5 cm. Bukan 3 + 4 = 7 — sisi-sisinya harus dikuadratkan dulu."
  },
  {
    q: "Volume kubus dengan rusuk 5 cm adalah …",
    options: ["25 cm³", "75 cm³", "125 cm³", "150 cm³"],
    answer: 2,
    explain: "V = 5 × 5 × 5 = 125 cm³.",
    remedial: "Volume kubus = rusuk × rusuk × rusuk = 5³ = 125 cm³. Angka 25 adalah luas satu sisinya (5 × 5) dan 150 adalah luas permukaannya (6 × 25)."
  }
];

var ISIAN_JARING = [
  {
    label: "Keliling alas sebuah tabung berjari-jari 7 cm (pakai π = 22/7) adalah …",
    answer: 44,
    satuan: "cm",
    explain: "K = 2 × 22/7 × 7 = 44 cm — inilah panjang persegi panjang selimut tabung itu."
  },
  {
    label: "Luas alas sebuah tabung berjari-jari 14 cm (pakai π = 22/7) adalah …",
    answer: 616,
    satuan: "cm²",
    explain: "L = 22/7 × 14² = 22/7 × 196 = 616 cm²."
  },
  {
    label: "Garis pelukis kerucut berjari-jari 6 cm dan tinggi 8 cm adalah …",
    answer: 10,
    satuan: "cm",
    explain: "s = √(6² + 8²) = √(36 + 64) = √100 = 10 cm."
  }
];

var ISIAN_LPV = [
  {
    label: "Volume tabung berjari-jari 7 cm dan tinggi 5 cm (pakai π = 22/7) adalah …",
    answer: 770,
    satuan: "cm³",
    explain: "V = 22/7 × 7² × 5 = 154 × 5 = 770 cm³."
  },
  {
    label: "Luas permukaan tabung berjari-jari 10 cm dan tinggi 5 cm (pakai π = 3,14) adalah …",
    answer: 942,
    satuan: "cm²",
    explain: "LP = 2 × 3,14 × 10 × (10 + 5) = 62,8 × 15 = 942 cm²."
  },
  {
    label: "Volume tabung berdiameter 20 cm dan tinggi 10 cm (pakai π = 3,14) adalah …",
    answer: 3140,
    satuan: "cm³",
    explain: "Jari-jarinya 20 ÷ 2 = 10 cm. V = 3,14 × 10² × 10 = 3.140 cm³."
  }
];

var CEK = [
  {
    topic: "Volume Tabung",
    q: "Nilai pernyataan berikut: “Volume tabung berjari-jari 7 cm dan tinggi 10 cm adalah 1.540 cm³.”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. V = 22/7 × 7² × 10 = 154 × 10 = 1.540 cm³."
  },
  {
    topic: "Luas Permukaan Bola",
    q: "Nilai pernyataan berikut: “Luas permukaan bola berjari-jari 7 cm adalah 154 cm².”",
    options: ["Benar", "Salah"],
    answer: 1,
    explain: "Salah. Angka 154 cm² adalah luas lingkaran berjari-jari 7 (πr²). Luas permukaan bola adalah empat kali lipatnya: LP = 4πr² = 4 × 154 = 616 cm²."
  },
  {
    topic: "Jaring-jaring Kerucut",
    q: "Nilai pernyataan berikut: “Jaring-jaring kerucut terdiri atas sebuah juring lingkaran dan sebuah lingkaran.”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. Juringnya adalah selimut kerucut yang dibuka (jari-jari juring = garis pelukis s), dan lingkarannya adalah alas kerucut."
  },
  {
    topic: "Volume Kerucut",
    q: "Nilai pernyataan berikut: “Volume kerucut berjari-jari 7 cm dan tinggi 24 cm adalah 3.696 cm³.”",
    options: ["Benar", "Salah"],
    answer: 1,
    explain: "Salah. Angka 3.696 cm³ adalah volume tabung pasangannya (πr²t). Volume kerucut wajib dikali ⅓: ⅓ × 3.696 = 1.232 cm³."
  },
  {
    topic: "Garis Pelukis",
    q: "Nilai pernyataan berikut: “Garis pelukis kerucut berjari-jari 3 cm dan tinggi 4 cm adalah 5 cm.”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. s = √(3² + 4²) = √25 = 5 cm — tripel Pythagoras 3-4-5."
  }
];

var MISKONSEPSI = [
  {
    salah: "“Luas permukaan tabung berjari-jari 7 cm dan tinggi 10 cm adalah 440 + 154 = 594 cm².”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, tabung memang hanya mempunyai satu tutup.",
      "Tabung tertutup mempunyai DUA tutup. Selimutnya 2πrt = 440 cm² dan kedua tutupnya 2 × πr² = 2 × 154 = 308 cm², jadi LP = 440 + 308 = 748 cm². Angka 594 cm² adalah luas tabung TANPA tutup.",
      "Luas permukaannya adalah 440 + 616 = 1.056 cm²."
    ],
    answer: 1,
    explain: "Kesalahan ini muncul karena jaring-jaring tabung dibayangkan kurang satu lingkaran. Selalu periksa: tabung tertutup = selimut + alas + tutup."
  },
  {
    salah: "“Luas selimut kerucut berjari-jari 7 cm dan tinggi 24 cm adalah 22/7 × 7 × 24 = 528 cm².”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, selimut kerucut memang memakai tinggi kerucut.",
      "Luas selimutnya adalah 22/7 × 7 × 7 = 154 cm².",
      "Selimut kerucut memakai GARIS PELUKIS, bukan tinggi: s = √(7² + 24²) = 25 cm, jadi luas selimut = πrs = 22/7 × 7 × 25 = 550 cm². Tinggi t dipakai untuk volume, bukan untuk selimut."
    ],
    answer: 2,
    explain: "Pada jaring-jaring kerucut, selimut adalah juring yang jari-jarinya garis pelukis s. Tinggi t hanya muncul pada volume dan pada perhitungan s lewat Pythagoras."
  },
  {
    salah: "“Luas permukaan bola berjari-jari 7 cm adalah 22/7 × 7² = 154 cm².”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Luas permukaan bola adalah EMPAT kali luas lingkaran berjari-jari sama: LP = 4πr² = 4 × 154 = 616 cm². Angka 154 cm² baru luas satu lingkarannya.",
      "Benar, permukaan bola sama luasnya dengan satu lingkaran berjari-jari sama.",
      "Luas permukaan bola adalah 2 × 154 = 308 cm²."
    ],
    answer: 0,
    explain: "Rumusnya LP = 4πr². Faktor 4 ini yang paling sering tertinggal — bayangkan kulit satu bola utuh: ia menutupi tepat empat lingkaran berjari-jari sama."
  },
  {
    salah: "“Volume kerucut berjari-jari 7 cm dan tinggi 24 cm adalah 22/7 × 7² × 24 = 3.696 cm³.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, volume kerucut sama dengan volume tabung pasangannya.",
      "Volume kerucut selalu SEPERTIGA tabung pasangannya: V = ⅓ × πr²t = ⅓ × 3.696 = 1.232 cm³. Angka 3.696 cm³ adalah volume tabung dengan alas dan tinggi yang sama.",
      "Volumenya adalah 3.696 ÷ 2 = 1.848 cm³."
    ],
    answer: 1,
    explain: "Faktor ⅓ pada volume kerucut adalah pasangan fakta 3 : 1 yang kamu lihat pada Pembanding Tabung–Kerucut di Sub-bab 4."
  }
];

var APLIKASI_CEK = [
  {
    q: "Periksa pemahamanmu: kapasitas tangki air itu adalah …",
    options: ["78,5 liter", "785 liter", "7.850 liter", "785.000 liter"],
    answer: 1,
    explain: "V = 3,14 × 50² × 100 = 785.000 cm³, dan 785.000 cm³ ÷ 1.000 = 785 liter."
  },
  {
    q: "Periksa pemahamanmu: luas karton untuk satu topi itu adalah …",
    options: ["550 cm²", "704 cm²", "528 cm²", "1.232 cm²"],
    answer: 0,
    explain: "Topi hanya selimut: s = √(7² + 24²) = 25 cm, lalu πrs = 22/7 × 7 × 25 = 550 cm². Angka 704 cm² menghitung alasnya juga; 528 cm² memakai t, bukan s."
  },
  {
    q: "Periksa pemahamanmu: luas permukaan kubah yang dicat adalah …",
    options: ["154 m²", "308 m²", "616 m²", "462 m²"],
    answer: 1,
    explain: "Lengkung setengah bola = 2πr² = 2 × 22/7 × 7² = 308 m². Angka 616 m² adalah bola penuh dan 462 m² termasuk alasnya."
  }
];

var KUIS = [
  {
    topic: "Volume Tabung",
    q: "Volume tabung berjari-jari 7 cm dan tinggi 10 cm (pakai π = 22/7) adalah …",
    options: ["1.232 cm³", "1.540 cm³", "748 cm³", "4.620 cm³"],
    answer: 1,
    explain: "V = π × r² × t = 22/7 × 49 × 10 = 154 × 10 = 1.540 cm³. Angka 748 adalah luas permukaannya dan 1.232 adalah volume kerucut pasangannya."
  },
  {
    topic: "Luas Permukaan Tabung",
    q: "Luas permukaan tabung berjari-jari 7 cm dan tinggi 10 cm (pakai π = 22/7) adalah …",
    options: ["440 cm²", "594 cm²", "748 cm²", "1.540 cm²"],
    answer: 2,
    explain: "LP = 2πr(r + t) = 2 × 22/7 × 7 × 17 = 44 × 17 = 748 cm². Angka 440 adalah selimutnya saja dan 594 adalah luas tanpa tutup."
  },
  {
    topic: "Garis Pelukis Kerucut",
    q: "Garis pelukis kerucut berjari-jari 7 cm dan tinggi 24 cm adalah …",
    options: ["17 cm", "31 cm", "24 cm", "25 cm"],
    answer: 3,
    explain: "s = √(r² + t²) = √(49 + 576) = √625 = 25 cm — tripel Pythagoras 7-24-25."
  },
  {
    topic: "Volume Kerucut",
    q: "Volume kerucut berjari-jari 7 cm dan tinggi 24 cm (pakai π = 22/7) adalah …",
    options: ["1.232 cm³", "3.696 cm³", "616 cm³", "550 cm³"],
    answer: 0,
    explain: "V = ⅓ × 22/7 × 49 × 24 = ⅓ × 3.696 = 1.232 cm³. Angka 3.696 adalah volume tabung pasangannya — jangan lupa faktor ⅓."
  },
  {
    topic: "Luas Permukaan Bola",
    q: "Luas permukaan bola berjari-jari 7 cm (pakai π = 22/7) adalah …",
    svg: '<svg class="gambar-setengah" viewBox="0 0 200 160" role="img" aria-label="Ilustrasi bola berjari-jari 7 cm dengan luas permukaan yang ditanyakan"><circle cx="80" cy="80" r="58" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/><ellipse cx="80" cy="80" rx="58" ry="17" fill="none" stroke="#2563EB" stroke-width="1.5"/><line x1="80" y1="80" x2="138" y2="80" stroke="#D97706" stroke-width="2.5"/><circle cx="80" cy="80" r="4" fill="#1E3A8A"/><text x="109" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#92400E">r = 7 cm</text><text x="172" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">LP = ?</text></svg>',
    options: ["154 cm²", "308 cm²", "462 cm²", "616 cm²"],
    answer: 3,
    explain: "LP = 4πr² = 4 × 22/7 × 49 = 4 × 154 = 616 cm². Angka 154 adalah luas satu lingkarannya dan 462 adalah luas setengah bola padat."
  },
  {
    topic: "Luas Permukaan Kerucut",
    q: "Luas permukaan kerucut berjari-jari 7 cm dengan garis pelukis 25 cm (pakai π = 22/7) adalah …",
    options: ["550 cm²", "704 cm²", "1.232 cm²", "154 cm²"],
    answer: 1,
    explain: "LP = πr(r + s) = 22/7 × 7 × (7 + 25) = 22 × 32 = 704 cm². Angka 550 adalah selimutnya saja — alasnya (154) belum ditambahkan."
  },
  {
    topic: "Tabung Tanpa Tutup",
    q: "Luas permukaan tabung TANPA tutup berjari-jari 7 cm dan tinggi 10 cm (pakai π = 22/7) adalah …",
    options: ["594 cm²", "748 cm²", "440 cm²", "286 cm²"],
    answer: 0,
    explain: "Tanpa tutup berarti selimut + satu alas: 2πrt + πr² = 440 + 154 = 594 cm². Angka 748 adalah luas tabung tertutup penuh."
  },
  {
    topic: "Jaring-jaring Tabung",
    q: "Jaring-jaring tabung terdiri atas …",
    options: ["1 lingkaran dan 1 persegi panjang", "2 lingkaran dan 1 juring lingkaran", "2 lingkaran dan 1 persegi panjang", "3 lingkaran dan 1 persegi panjang"],
    answer: 2,
    explain: "Alas dan tutupnya adalah 2 lingkaran yang sama besar, dan selimutnya bila dibuka adalah 1 persegi panjang yang panjangnya sama dengan keliling alas."
  },
  {
    topic: "Setengah Bola",
    q: "Luas permukaan setengah bola PADAT berjari-jari 7 cm (pakai π = 22/7) adalah …",
    options: ["308 cm²", "462 cm²", "616 cm²", "154 cm²"],
    answer: 1,
    explain: "Setengah bola padat = lengkung (2πr² = 308) + alas lingkaran (πr² = 154) = 462 cm² — atau langsung 3πr²."
  },
  {
    topic: "Luas Permukaan Tabung (π = 3,14)",
    q: "Luas permukaan tabung berjari-jari 10 cm dan tinggi 15 cm (pakai π = 3,14) adalah …",
    options: ["942 cm²", "1.256 cm²", "628 cm²", "1.570 cm²"],
    answer: 3,
    explain: "LP = 2πr(r + t) = 2 × 3,14 × 10 × 25 = 62,8 × 25 = 1.570 cm². Angka 942 adalah selimutnya saja."
  }
];

var TANTANGAN = [
  {
    q: "Volume bola berjari-jari 21 cm (pakai π = 22/7) adalah …",
    svg: '<svg class="gambar-setengah" viewBox="0 0 200 160" role="img" aria-label="Ilustrasi bola berjari-jari 21 cm dengan volume yang ditanyakan"><circle cx="80" cy="80" r="58" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/><ellipse cx="80" cy="80" rx="58" ry="17" fill="none" stroke="#2563EB" stroke-width="1.5"/><line x1="80" y1="80" x2="138" y2="80" stroke="#D97706" stroke-width="2.5"/><circle cx="80" cy="80" r="4" fill="#1E3A8A"/><text x="109" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#92400E">r = 21 cm</text><text x="172" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">V = ?</text></svg>',
    options: ["12.936 cm³", "5.544 cm³", "38.808 cm³", "19.404 cm³"],
    answer: 2,
    explain: "V = 4/3 × 22/7 × 21³ = 4/3 × 29.106 = 38.808 cm³. Angka 5.544 adalah luas permukaannya (4πr²)."
  },
  {
    q: "Volume kerucut berjari-jari 14 cm dan tinggi 48 cm (pakai π = 22/7) adalah …",
    options: ["9.856 cm³", "29.568 cm³", "4.928 cm³", "616 cm³"],
    answer: 0,
    explain: "V = ⅓ × 22/7 × 14² × 48 = ⅓ × 616 × 48 = ⅓ × 29.568 = 9.856 cm³. Angka 29.568 adalah volume tabung pasangannya."
  },
  {
    q: "Luas permukaan kerucut berjari-jari 14 cm dengan garis pelukis 50 cm (pakai π = 22/7) adalah …",
    options: ["2.200 cm²", "616 cm²", "2.816 cm²", "2.508 cm²"],
    answer: 2,
    explain: "LP = πr(r + s) = 22/7 × 14 × (14 + 50) = 44 × 64 = 2.816 cm². Angka 2.200 adalah selimutnya saja dan 616 adalah alasnya saja."
  },
  {
    q: "Volume tabung berdiameter 20 cm dan tinggi 21 cm (pakai π = 3,14) adalah …",
    options: ["1.570 cm³", "3.297 cm³", "13.188 cm³", "6.594 cm³"],
    answer: 3,
    explain: "Hati-hati: 20 cm adalah diameternya, jadi jari-jarinya 10 cm. V = 3,14 × 10² × 21 = 314 × 21 = 6.594 cm³."
  },
  {
    q: "Luas permukaan kerucut berjari-jari 6 cm dan tinggi 8 cm (pakai π = 3,14) adalah …",
    svg: '<svg class="gambar-setengah" viewBox="0 0 200 160" role="img" aria-label="Ilustrasi kerucut berjari-jari 6 cm dan tinggi 8 cm dengan luas permukaan yang ditanyakan"><path d="M80,14 L32,124 A48,11 0 0 0 128,124 Z" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/><ellipse cx="80" cy="124" rx="48" ry="11" fill="#FDE68A" stroke="#D97706" stroke-width="2"/><line x1="80" y1="14" x2="80" y2="124" stroke="#1E3A8A" stroke-width="2" stroke-dasharray="5 4"/><line x1="80" y1="124" x2="128" y2="124" stroke="#2563EB" stroke-width="2.5"/><text x="68" y="74" text-anchor="end" font-size="12.5" font-weight="700" fill="#1E3A8A">t = 8 cm</text><text x="104" y="116" text-anchor="middle" font-size="12.5" font-weight="700" fill="#2563EB">r = 6 cm</text><text x="172" y="86" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">LP = ?</text></svg>',
    options: ["188,4 cm²", "301,44 cm²", "376,8 cm²", "113,04 cm²"],
    answer: 1,
    explain: "Garis pelukisnya s = √(6² + 8²) = 10 cm. LP = πr(r + s) = 3,14 × 6 × 16 = 301,44 cm². Angka 188,4 adalah selimutnya saja dan 113,04 adalah alasnya saja."
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
    function formatDes(n) {
      if (Math.abs(n - Math.round(n)) < 0.0001) { return formatAngka(Math.round(n)); }
      var s = n.toFixed(2).replace(".", ",");
      if (s.indexOf(",") >= 0) { s = s.replace(/0+$/, "").replace(/,$/, ""); }
      return s;
    }

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
        u.textContent = "Pilihan pollingmu sudah tersimpan. Tabung, kerucut, dan bola semuanya akan kita bedah di modul ini — unsur, jaring-jaring, luas permukaan, dan volumenya.";
      }
      b.addEventListener("click", function () {
        document.querySelectorAll("#polling .opsi").forEach(function (x) { x.classList.remove("terpilih"); });
        b.classList.add("terpilih");
        simpan("poll", b.getAttribute("data-poll"));
        var u = $("polling-umpan");
        u.className = "umpan info tampil";
        u.textContent = "Tersimpan! Benda sisi lengkung memang ada di mana-mana. Sekarang coba tebak awal tentang label kaleng susu di bawah ini.";
      });
    });

    /* ---------- Sub-bab 1: tebak awal (pilihan, tersimpan) ---------- */
    var tebakanTersimpan = baca("guess", null);
    function umpanTebakan(idx) {
      var u = $("tebakan-umpan");
      u.className = "umpan info tampil";
      u.textContent = idx === 1
        ? "Tebakanmu tepat! Selimut tabung adalah persegi panjang berukuran keliling alas × tinggi: 2 × 22/7 × 7 × 10 = 440 cm². Kita bahas tuntas di Sub-bab 3 dan 4."
        : "Tersimpan! Jawaban yang benar adalah 440 cm²: selimut tabung = keliling alas × tinggi = (2 × 22/7 × 7) × 10 = 44 × 10 = 440 cm². (748 cm² adalah luas permukaan seluruh kaleng termasuk tutupnya.) Kita bahas tuntas di Sub-bab 3 dan 4.";
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

    /* ---------- Langkah bertahap (Sub-bab 4) ---------- */
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

    /* ---------- Sub-bab 3: Lab Tabung ---------- */
    function piUntuk(r) {
      return r % 7 === 0 ? { v: 22 / 7, label: "22/7" } : { v: 3.14, label: "3,14" };
    }
    function perbaruiLabTabung() {
      var r = parseInt($("lab-r").value, 10);
      var t = parseInt($("lab-t").value, 10);
      var pi = piUntuk(r);
      $("lab-r-nilai").textContent = r + " cm";
      $("lab-t-nilai").textContent = t + " cm";
      var alas = pi.v * r * r;
      var selimut = 2 * pi.v * r * t;
      var LP = 2 * pi.v * r * (r + t);
      var V = pi.v * r * r * t;
      $("lab-tabung-hasil").innerHTML =
        "π yang dipakai: <b>" + pi.label + "</b> (r = " + r + (r % 7 === 0 ? " adalah kelipatan 7" : " bukan kelipatan 7") + ")<br>" +
        "Luas alas: π × " + r + "² = <b>" + formatDes(alas) + " cm²</b><br>" +
        "Luas selimut: 2 × π × " + r + " × " + t + " = <b>" + formatDes(selimut) + " cm²</b><br>" +
        "Luas permukaan: LP = <span class=\"angka-besar\">" + formatDes(LP) + " cm²</span><br>" +
        "Volume: V = <span class=\"angka-besar\">" + formatDes(V) + " cm³</span>";
      $("lab-tabung-catatan").textContent = r % 7 === 0
        ? "r = " + r + " adalah kelipatan 7, jadi π = 22/7 memberi hasil bilangan bulat yang bersih."
        : "r = " + r + " bukan kelipatan 7, jadi π = 3,14 membuat hitungan desimalnya ringkas.";
    }
    $("lab-r").addEventListener("input", perbaruiLabTabung);
    $("lab-t").addEventListener("input", perbaruiLabTabung);
    perbaruiLabTabung();

    /* ---------- Sub-bab 3: isian cepat jaring-jaring ---------- */
    buatKelompokIsian($("isian-jaring-wadah"), ISIAN_JARING, "isian-jaring");

    /* ---------- Sub-bab 4: Pembanding Tabung–Kerucut ---------- */
    function perbaruiPembanding() {
      var r = parseInt($("banding-r").value, 10);
      var t = parseInt($("banding-t").value, 10);
      var pi = piUntuk(r);
      $("banding-r-nilai").textContent = r + " cm";
      $("banding-t-nilai").textContent = t + " cm";
      var vTab = pi.v * r * r * t;
      var vKer = vTab / 3;
      $("pembanding-hasil").innerHTML =
        "Alas dan tinggi sama: r = " + r + " cm, t = " + t + " cm (π = " + pi.label + ")<br>" +
        "Volume tabung: V = π × " + r + "² × " + t + " = <span class=\"angka-besar\">" + formatDes(vTab) + " cm³</span><br>" +
        "Volume kerucut: V = ⅓ × volume tabung = <span class=\"angka-besar\">" + formatDes(vKer) + " cm³</span><br>" +
        "Perbandingannya selalu <b>3 : 1</b> — kerucut tepat ⅓ tabung pasangannya.";
      $("pembanding-catatan").textContent = "Geser r dan t sesukamu: perbandingan 3 : 1 itu tidak pernah berubah, selama alas dan tinggi kedua bangun sama.";
    }
    $("banding-r").addEventListener("input", perbaruiPembanding);
    $("banding-t").addEventListener("input", perbaruiPembanding);
    perbaruiPembanding();

    /* ---------- Sub-bab 4: isian cepat luas permukaan & volume ---------- */
    buatKelompokIsian($("isian-lpv-wadah"), ISIAN_LPV, "isian-lpv");

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
    var kolomProyek = ["benda", "ukuran", "luas", "volume"];
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
    if (proyek.ukuran || proyek.luas || proyek.volume) { tampilTersimpan($("proyek-tersimpan")); }
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
    ISIAN_JARING: ISIAN_JARING,
    ISIAN_LPV: ISIAN_LPV,
    CEK: CEK,
    MISKONSEPSI: MISKONSEPSI,
    APLIKASI_CEK: APLIKASI_CEK,
    KUIS: KUIS,
    TANTANGAN: TANTANGAN
  };
}
