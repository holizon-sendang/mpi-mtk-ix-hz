/* Modul P.2 Lingkaran — MPI Matematika Kelas 9
   Semua kunci localStorage berawalan "mpi-mtk9-p2-".
   Blok data soal dipisahkan dari logika DOM agar bisa diverifikasi di Node. */
"use strict";

var PREFIX = "mpi-mtk9-p2-";

/* ================= DATA SOAL ================= */

var PRASYARAT = [
  {
    q: "Nilai π yang paling tepat dipakai untuk lingkaran berjari-jari 14 cm adalah …",
    options: ["3,14", "22/7", "3", "22"],
    answer: 1,
    explain: "Jari-jari 14 adalah kelipatan 7, jadi π = 22/7 membuat hitungannya bersih: K = 2 × 22/7 × 14 = 88 cm.",
    remedial: "Aturannya: bila jari-jari atau diameter adalah kelipatan 7 (7, 14, 21, 28, …), pakai π = 22/7. Bila bukan kelipatan 7, pakai π = 3,14."
  },
  {
    q: "Hasil dari ¼ × 360° adalah …",
    options: ["45°", "120°", "90°", "180°"],
    answer: 2,
    explain: "¼ × 360° = 360° ÷ 4 = 90°. Pecahan dari sudut penuh ini adalah kunci menghitung busur dan juring.",
    remedial: "Sudut satu putaran penuh adalah 360°. Seperempatnya berarti 360 dibagi 4, hasilnya 90° — sudut siku-siku."
  },
  {
    q: "Nilai dari 14² adalah …",
    options: ["28", "169", "196", "144"],
    answer: 2,
    explain: "14² = 14 × 14 = 196. Nilai ini dipakai langsung pada luas lingkaran berjari-jari 14: L = 22/7 × 196 = 616 cm².",
    remedial: "Menguadratkan artinya mengalikan bilangan dengan dirinya sendiri: 14² = 14 × 14 = 196, bukan 14 × 2 = 28. (169 itu 13² dan 144 itu 12².)"
  },
  {
    q: "Hasil dari 3,14 × 10 adalah …",
    options: ["31,4", "0,314", "314", "34,1"],
    answer: 0,
    explain: "3,14 × 10 = 31,4 — koma bergerak satu tempat ke kanan. Hasil ini adalah keliling lingkaran berjari-jari 5 cm.",
    remedial: "Mengalikan desimal dengan 10 menggeser koma satu tempat ke kanan: 3,14 menjadi 31,4. Bukan 314 (itu × 100) dan bukan 0,314 (itu ÷ 10)."
  }
];

var BENDA_PI = [
  { nama: "Koin", d: "2,5", K: "7,85", kd: "3,14" },
  { nama: "Tutup botol", d: "3", K: "9,4", kd: "3,13" },
  { nama: "Piring", d: "20", K: "62,8", kd: "3,14" },
  { nama: "Baskom", d: "30", K: "94,2", kd: "3,14" },
  { nama: "Roda sepeda", d: "56", K: "176", kd: "3,14" }
];

var ISIAN_UNSUR = [
  {
    label: "Diameter lingkaran yang berjari-jari 9 cm adalah …",
    answer: 18,
    satuan: "cm",
    explain: "d = 2 × r = 2 × 9 = 18 cm."
  },
  {
    label: "Jari-jari lingkaran yang berdiameter 30 cm adalah …",
    answer: 15,
    satuan: "cm",
    explain: "r = d ÷ 2 = 30 ÷ 2 = 15 cm."
  },
  {
    label: "Diameter lingkaran yang berjari-jari 7 cm adalah …",
    answer: 14,
    satuan: "cm",
    explain: "d = 2 × r = 2 × 7 = 14 cm."
  }
];

var ISIAN_KL = [
  {
    label: "Keliling lingkaran berjari-jari 14 cm (pakai π = 22/7) adalah …",
    answer: 88,
    satuan: "cm",
    explain: "K = 2 × π × r = 2 × 22/7 × 14 = 88 cm."
  },
  {
    label: "Luas lingkaran berjari-jari 5 cm (pakai π = 3,14) adalah …",
    answer: 78.5,
    satuan: "cm²",
    explain: "L = π × r² = 3,14 × 5² = 3,14 × 25 = 78,5 cm²."
  },
  {
    label: "Keliling lingkaran berdiameter 56 cm (pakai π = 22/7) adalah …",
    answer: 176,
    satuan: "cm",
    explain: "K = π × d = 22/7 × 56 = 176 cm — sama dengan roda pada tebak awal Sub-bab 1."
  }
];

var CEK = [
  {
    topic: "Keliling Lingkaran",
    q: "Nilai pernyataan berikut: “Keliling lingkaran berjari-jari 7 cm adalah 44 cm.”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. K = 2 × π × r = 2 × 22/7 × 7 = 44 cm."
  },
  {
    topic: "Luas vs Keliling",
    q: "Nilai pernyataan berikut: “Luas lingkaran berjari-jari 10 cm adalah 62,8 cm².”",
    options: ["Benar", "Salah"],
    answer: 1,
    explain: "Salah. Angka 62,8 cm adalah kelilingnya (2 × 3,14 × 10). Luasnya L = π × r² = 3,14 × 100 = 314 cm²."
  },
  {
    topic: "Unsur Lingkaran",
    q: "Nilai pernyataan berikut: “Diameter adalah tali busur terpanjang pada lingkaran.”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. Diameter adalah tali busur yang melewati titik pusat, dan tidak ada tali busur yang lebih panjang darinya."
  },
  {
    topic: "Jari-jari dan Diameter",
    q: "Nilai pernyataan berikut: “Jika jari-jari sebuah lingkaran 5 cm, maka diameternya 25 cm.”",
    options: ["Benar", "Salah"],
    answer: 1,
    explain: "Salah. Diameter = 2 × jari-jari = 2 × 5 = 10 cm. Angka 25 adalah 5² — itu urusan luas, bukan diameter."
  },
  {
    topic: "Panjang Busur",
    q: "Nilai pernyataan berikut: “Panjang busur dengan sudut pusat 180° pada lingkaran berjari-jari 7 cm adalah 22 cm.”",
    options: ["Benar", "Salah"],
    answer: 0,
    explain: "Benar. Busur = (180/360) × keliling = ½ × 44 = 22 cm — setengah lingkaran, setengah keliling."
  }
];

var MISKONSEPSI = [
  {
    salah: "“Lingkaran berdiameter 14 cm mempunyai keliling 2 × 22/7 × 14 = 88 cm.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, rumus keliling memang selalu 2 × π × bilangan yang diketahui.",
      "Diameter 14 cm berarti r = 7 cm, jadi K = 2 × 22/7 × 7 = 44 cm. Cara lain yang sama benarnya: K = π × d = 22/7 × 14 = 44 cm. Angka 88 cm adalah dua kali lipatnya karena diameter dipakai seolah-olah jari-jari.",
      "Kelilingnya adalah 22/7 × 14² = 616 cm."
    ],
    answer: 1,
    explain: "Kesalahan paling umum di topik ini adalah tertukar r dan d. Rumus 2πr menuntut jari-jari; bila yang diketahui diameter, bagi dua dulu (r = d/2) atau pakai langsung K = πd."
  },
  {
    salah: "“Luas lingkaran berjari-jari 10 cm adalah 3,14 × 2 × 10 = 62,8 cm².”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, 62,8 cm² adalah luasnya.",
      "Luasnya adalah 3,14 × 10 = 31,4 cm².",
      "Yang dihitung itu rumus keliling (2πr). Luas memakai L = π × r² = 3,14 × 10² = 3,14 × 100 = 314 cm². Petunjuk cepatnya: luas selalu bersatuan cm² dan untuk r = 10 hasilnya ratusan, bukan puluhan."
    ],
    answer: 2,
    explain: "Keliling dan luas adalah dua rumus yang berbeda: K = 2πr (mengelilingi) dan L = πr² (menutupi daerah). Tertukar keduanya membuat jawaban meleset jauh."
  },
  {
    salah: "“Untuk jari-jari 10 cm, pakai saja π = 22/7 supaya hasilnya dalam pecahan yang bagus.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Jari-jari 10 bukan kelipatan 7, jadi pakai π = 3,14: hitungannya desimal yang ringkas dan tepat, misalnya L = 3,14 × 100 = 314 cm². π = 22/7 dipakai bila r atau d kelipatan 7 (7, 14, 21, …) agar pembagiannya habis.",
      "Benar, 22/7 selalu lebih tepat untuk semua jari-jari.",
      "Untuk jari-jari 10, π yang benar adalah 3 saja."
    ],
    answer: 0,
    explain: "22/7 × 100 = 314,2857… — desimal yang tidak habis dan menyulitkan. Memilih π sesuai kelipatan 7 adalah keterampilan kecil yang membuat seluruh hitungan lingkaran menjadi bersih."
  },
  {
    salah: "“Luas lingkaran berjari-jari 7 cm adalah 22/7 × 7 = 22 cm².”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, karena π × r memang 22/7 × 7 = 22.",
      "Jari-jarinya harus dikuadratkan dulu: L = π × r² = 22/7 × 7² = 22/7 × 49 = 154 cm². Angka 22 bahkan bukan kelilingnya — keliling lingkaran ini 44 cm.",
      "Luasnya adalah 22/7 × 7 × 2 = 44 cm²."
    ],
    answer: 1,
    explain: "Pada rumus luas, r selalu muncul sebagai r². Lupa menguadratkan adalah kesalahan kedua yang paling sering terjadi setelah tertukar r dan d."
  }
];

var APLIKASI_CEK = [
  {
    q: "Periksa pemahamanmu: jarak yang ditempuh sepeda itu adalah …",
    options: ["17,6 m", "176 m", "1.760 m", "56 m"],
    answer: 1,
    explain: "K = 22/7 × 56 = 176 cm per putaran. 100 putaran → 17.600 cm = 176 m."
  },
  {
    q: "Periksa pemahamanmu: luas taman berbentuk juring itu adalah …",
    options: ["616 m²", "154 m²", "308 m²", "44 m²"],
    answer: 1,
    explain: "Luas juring = (90/360) × 22/7 × 14² = ¼ × 616 = 154 m². Angka 616 m² adalah luas lingkaran penuhnya."
  },
  {
    q: "Periksa pemahamanmu: besar sudut keliling ACB adalah …",
    options: ["160°", "80°", "40°", "20°"],
    answer: 2,
    explain: "Sudut keliling = ½ × sudut pusat yang menghadap busur yang sama = ½ × 80° = 40°."
  }
];

var KUIS = [
  {
    topic: "Keliling Lingkaran",
    q: "Keliling lingkaran berjari-jari 7 cm adalah …",
    options: ["22 cm", "44 cm", "154 cm", "88 cm"],
    answer: 1,
    explain: "K = 2 × π × r = 2 × 22/7 × 7 = 44 cm. Angka 154 cm² adalah luasnya — perhatikan satuannya."
  },
  {
    topic: "Keliling dari Diameter",
    q: "Keliling lingkaran berdiameter 20 cm adalah …",
    options: ["31,4 cm", "125,6 cm", "62,8 cm", "628 cm"],
    answer: 2,
    explain: "d = 20 bukan kelipatan 7, jadi π = 3,14. K = π × d = 3,14 × 20 = 62,8 cm."
  },
  {
    topic: "Luas Lingkaran",
    q: "Luas lingkaran berjari-jari 14 cm adalah …",
    options: ["88 cm²", "154 cm²", "308 cm²", "616 cm²"],
    answer: 3,
    explain: "L = π × r² = 22/7 × 14² = 22/7 × 196 = 616 cm². Angka 88 cm adalah kelilingnya."
  },
  {
    topic: "Luas Lingkaran",
    q: "Luas lingkaran berjari-jari 10 cm adalah …",
    options: ["314 cm²", "62,8 cm²", "628 cm²", "125,6 cm²"],
    answer: 0,
    explain: "L = π × r² = 3,14 × 10² = 3,14 × 100 = 314 cm². Jangan lupa menguadratkan jari-jarinya."
  },
  {
    topic: "Panjang Busur",
    q: "Panjang busur lingkaran berjari-jari 14 cm dengan sudut pusat 90° adalah …",
    svg: '<svg class="gambar-75" viewBox="0 0 240 215" role="img" aria-label="Ilustrasi juring lingkaran berjari-jari 14 cm dengan sudut pusat 90 derajat dan busur yang ditanyakan"><circle cx="105" cy="105" r="78" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/><path d="M105,105 L183,105 A78,78 0 0 0 105,27 Z" fill="#FEF3C7"/><path d="M183,105 A78,78 0 0 0 105,27" fill="none" stroke="#D97706" stroke-width="5"/><line x1="105" y1="105" x2="183" y2="105" stroke="#2563EB" stroke-width="2"/><line x1="105" y1="105" x2="105" y2="27" stroke="#2563EB" stroke-width="2"/><polyline points="117,105 117,93 105,93" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><circle cx="105" cy="105" r="4" fill="#1E3A8A"/><text x="126" y="86" font-size="12.5" font-weight="700" fill="#1E3A8A">90°</text><text x="146" y="124" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E3A8A">r = 14 cm</text><text x="176" y="46" text-anchor="middle" font-size="12.5" font-weight="700" fill="#92400E">busur = ?</text></svg>',
    options: ["11 cm", "44 cm", "88 cm", "22 cm"],
    answer: 3,
    explain: "Busur = (90/360) × keliling = ¼ × 88 = 22 cm. Keliling penuhnya 2 × 22/7 × 14 = 88 cm."
  },
  {
    topic: "Luas Juring",
    q: "Luas juring lingkaran berjari-jari 7 cm dengan sudut pusat 180° adalah …",
    options: ["154 cm²", "77 cm²", "38,5 cm²", "44 cm²"],
    answer: 1,
    explain: "Juring = (180/360) × luas = ½ × 154 = 77 cm². Luas penuhnya 22/7 × 7² = 154 cm²."
  },
  {
    topic: "Sudut Keliling",
    q: "Sudut pusat sebuah lingkaran besarnya 80°. Sudut keliling yang menghadap busur yang sama besarnya …",
    options: ["40°", "160°", "80°", "20°"],
    answer: 0,
    explain: "Sudut keliling = ½ × sudut pusat = ½ × 80° = 40°."
  },
  {
    topic: "Sudut Pusat",
    q: "Sudut keliling sebuah lingkaran besarnya 35°. Sudut pusat yang menghadap busur yang sama besarnya …",
    options: ["17,5°", "35°", "70°", "140°"],
    answer: 2,
    explain: "Sudut pusat = 2 × sudut keliling = 2 × 35° = 70°."
  },
  {
    topic: "Aplikasi Keliling",
    q: "Roda berdiameter 56 cm berputar sebanyak 25 kali. Jarak yang ditempuh roda itu adalah …",
    options: ["17,6 m", "44 m", "4,4 m", "176 m"],
    answer: 1,
    explain: "Keliling roda = 22/7 × 56 = 176 cm. Jarak = 25 × 176 = 4.400 cm = 44 m."
  },
  {
    topic: "Unsur Lingkaran",
    q: "Ruas garis lurus yang menghubungkan dua titik pada lingkaran dan melewati titik pusat disebut …",
    options: ["jari-jari", "tali busur", "apotema", "diameter"],
    answer: 3,
    explain: "Itulah diameter: tali busur terpanjang yang selalu melewati titik pusat, dan panjangnya 2 × jari-jari."
  }
];

var TANTANGAN = [
  {
    q: "Luas lingkaran berjari-jari 21 cm adalah …",
    options: ["132 cm²", "616 cm²", "1.386 cm²", "693 cm²"],
    answer: 2,
    explain: "L = π × r² = 22/7 × 21² = 22/7 × 441 = 1.386 cm². Angka 132 cm adalah kelilingnya dan 693 cm² adalah luas setengah lingkarannya."
  },
  {
    q: "Panjang busur lingkaran berjari-jari 21 cm dengan sudut pusat 120° adalah …",
    options: ["44 cm", "22 cm", "66 cm", "132 cm"],
    answer: 0,
    explain: "Busur = (120/360) × keliling = ⅓ × 132 = 44 cm. Keliling penuhnya 2 × 22/7 × 21 = 132 cm."
  },
  {
    q: "Luas juring lingkaran berjari-jari 14 cm dengan sudut pusat 90° adalah …",
    options: ["616 cm²", "308 cm²", "154 cm²", "88 cm²"],
    answer: 2,
    explain: "Juring = (90/360) × luas = ¼ × 616 = 154 cm². Angka 308 cm² adalah juring 180°-nya (setengah lingkaran)."
  },
  {
    q: "Titik C terletak pada lingkaran yang diameternya AB. Besar sudut ACB adalah …",
    options: ["45°", "180°", "60°", "90°"],
    answer: 3,
    explain: "Sudut keliling yang menghadap diameter selalu 90°: sudut pusatnya berupa garis lurus 180°, dan sudut keliling adalah setengahnya."
  },
  {
    q: "Sebuah taman berbentuk setengah lingkaran berjari-jari 14 m. Keliling taman itu seluruhnya — termasuk sisi lurusnya — adalah …",
    options: ["44 m", "72 m", "88 m", "116 m"],
    answer: 1,
    explain: "Bagian lengkung = ½ × 88 = 44 m, sisi lurusnya adalah diameter = 28 m. Keliling seluruhnya = 44 + 28 = 72 m. Angka 44 m melupakan sisi lurusnya."
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
        u.textContent = "Pilihan pollingmu sudah tersimpan. Roda, makanan bundar, dan jam dinding semuanya akan muncul lagi di modul ini — pada keliling, juring, dan sudut lingkaran.";
      }
      b.addEventListener("click", function () {
        document.querySelectorAll("#polling .opsi").forEach(function (x) { x.classList.remove("terpilih"); });
        b.classList.add("terpilih");
        simpan("poll", b.getAttribute("data-poll"));
        var u = $("polling-umpan");
        u.className = "umpan info tampil";
        u.textContent = "Tersimpan! Benda melingkar memang ada di mana-mana. Sekarang coba tebak awal tentang roda sepeda di bawah ini.";
      });
    });

    /* ---------- Sub-bab 1: tebak awal (pilihan, tersimpan) ---------- */
    var tebakanTersimpan = baca("guess", null);
    function umpanTebakan(idx) {
      var u = $("tebakan-umpan");
      u.className = "umpan info tampil";
      u.textContent = idx === 1
        ? "Tebakanmu tepat! Keliling = π × d = 22/7 × 56 = 176 cm — satu putaran roda menempuh jarak sejauh itu. Kita bahas tuntas di Sub-bab 3 dan 4."
        : "Tersimpan! Jawaban yang benar adalah 176 cm: K = π × d = 22/7 × 56 = 176 cm. (88 cm muncul bila yang dimasukkan 28 cm — jari-jarinya, bukan diameternya.) Kita bahas tuntas di Sub-bab 3 dan 4.";
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

    /* ---------- Sub-bab 3: Eksplorasi π (pilih benda) ---------- */
    var bendaTerpilih = baca("eksplorasi", 0);
    function tampilBenda(idx) {
      var b = BENDA_PI[idx];
      $("pi-hasil").innerHTML =
        "<b>" + b.nama + "</b>: diameter d = <b>" + b.d + " cm</b>, keliling terukur K = <b>" + b.K + " cm</b>.<br>" +
        "K ÷ d = " + b.K + " ÷ " + b.d + " = <span class=\"angka-besar\">" + b.kd + "</span><br>" +
        "Hasil baginya selalu sekitar 3,14 — bilangan tetap inilah π. Coba benda lain dan bandingkan!";
      document.querySelectorAll("#pi-benda .opsi").forEach(function (x, j) {
        x.classList.toggle("terpilih", j === idx);
      });
    }
    document.querySelectorAll("#pi-benda .opsi").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var idx = parseInt(btn.getAttribute("data-benda"), 10);
        bendaTerpilih = idx;
        simpan("eksplorasi", idx);
        tampilBenda(idx);
      });
    });
    tampilBenda(bendaTerpilih || 0);

    /* ---------- Sub-bab 3: isian cepat unsur ---------- */
    buatKelompokIsian($("isian-unsur-wadah"), ISIAN_UNSUR, "isian-unsur");

    /* ---------- Sub-bab 4: Lab Lingkaran ---------- */
    var piPilihan = "227";
    function nilaiPi() { return piPilihan === "227" ? 22 / 7 : 3.14; }
    function labelPi() { return piPilihan === "227" ? "22/7" : "3,14"; }
    function perbaruiLabLingkaran() {
      var r = parseInt($("lab-r").value, 10);
      var pi = nilaiPi();
      $("lab-r-nilai").textContent = r + " cm";
      var d = 2 * r;
      var K = 2 * pi * r;
      var L = pi * r * r;
      $("lab-lingkaran-hasil").innerHTML =
        "Diameter: d = 2 × " + r + " = <b>" + d + " cm</b><br>" +
        "Keliling: K = 2 × " + labelPi() + " × " + r + " = <span class=\"angka-besar\">" + formatDes(K) + " cm</span><br>" +
        "Luas: L = " + labelPi() + " × " + r + "² = <span class=\"angka-besar\">" + formatDes(L) + " cm²</span>";
      var cat = $("lab-lingkaran-catatan");
      if (r % 7 === 0) {
        cat.textContent = piPilihan === "227"
          ? "Tepat! r = " + r + " adalah kelipatan 7, jadi π = 22/7 memberikan hasil bilangan bulat yang bersih."
          : "r = " + r + " adalah kelipatan 7 — hasil dengan π = 3,14 tetap benar, tetapi π = 22/7 akan memberi bilangan bulat yang bersih. Coba klik π = 22/7!";
      } else {
        cat.textContent = piPilihan === "227"
          ? "r = " + r + " bukan kelipatan 7, jadi π = 22/7 menghasilkan desimal yang panjang (ditampilkan terbulatkan). π = 3,14 biasanya lebih praktis di sini."
          : "Pilihan tepat: r = " + r + " bukan kelipatan 7, jadi π = 3,14 membuat hitungan desimalnya ringkas.";
      }
    }
    ["pi-227", "pi-314"].forEach(function (id) {
      $(id).addEventListener("click", function () {
        piPilihan = $(id).getAttribute("data-pi");
        document.querySelectorAll(".pi-pilihan .opsi").forEach(function (x) { x.classList.remove("terpilih"); });
        $(id).classList.add("terpilih");
        perbaruiLabLingkaran();
      });
    });
    $("lab-r").addEventListener("input", perbaruiLabLingkaran);
    perbaruiLabLingkaran();

    /* ---------- Sub-bab 4: isian cepat keliling & luas ---------- */
    buatKelompokIsian($("isian-kl-wadah"), ISIAN_KL, "isian-kl");

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
    var kolomProyek = ["benda", "ukuran", "keliling", "luas"];
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
    if (proyek.ukuran || proyek.keliling || proyek.luas) { tampilTersimpan($("proyek-tersimpan")); }
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
    BENDA_PI: BENDA_PI,
    ISIAN_UNSUR: ISIAN_UNSUR,
    ISIAN_KL: ISIAN_KL,
    CEK: CEK,
    MISKONSEPSI: MISKONSEPSI,
    APLIKASI_CEK: APLIKASI_CEK,
    KUIS: KUIS,
    TANTANGAN: TANTANGAN
  };
}
