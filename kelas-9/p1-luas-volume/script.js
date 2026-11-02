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
