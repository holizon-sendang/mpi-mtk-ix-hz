/* Modul A.7 SPLDV — MPI Matematika Kelas 9
   Semua kunci localStorage berawalan "mpi-mtk9-a7-".
   Blok data soal dipisahkan dari logika DOM agar bisa diverifikasi di Node. */
"use strict";

var PREFIX = "mpi-mtk9-a7-";

/* ================= DATA SOAL ================= */

var PRASYARAT = [
  {
    q: "Nilai x yang memenuhi x + 7 = 12 adalah …",
    options: ["3", "5", "7", "19"],
    answer: 1,
    explain: "x = 12 − 7 = 5.",
    remedial: "Ingat kembali PLSV Kelas 8 (A.2): kurangkan kedua ruas dengan 7 agar x sendirian."
  },
  {
    q: "Nilai y yang memenuhi 3y = 21 adalah …",
    options: ["6", "7", "18", "24"],
    answer: 1,
    explain: "y = 21 : 3 = 7.",
    remedial: "Ingat kembali PLSV Kelas 8 (A.2): bagilah kedua ruas dengan 3."
  },
  {
    q: "Apakah pasangan (3, 2) memenuhi persamaan x + y = 5?",
    options: ["Ya", "Tidak"],
    answer: 0,
    explain: "Substitusikan: 3 + 2 = 5, sesuai dengan ruas kanan. Jadi ya, (3, 2) memenuhinya.",
    remedial: "Cara memeriksa pasangan (x, y): gantikan x dan y ke persamaan, lalu lihat apakah kedua ruas sama (fondasi dari A.6 Kelas 8)."
  },
  {
    q: "Jika y = 10 − 2x dan x = 3, maka nilai y adalah …",
    options: ["2", "4", "6", "16"],
    answer: 1,
    explain: "y = 10 − 2(3) = 10 − 6 = 4.",
    remedial: "Ini adalah inti metode substitusi: gantikan nilai variabel yang diketahui ke dalam rumus (latih lagi operasi bentuk aljabar A.1 Kelas 8)."
  },
  {
    q: "Koefisien y pada persamaan 4x − 3y = 12 adalah …",
    options: ["3", "−3", "4", "12"],
    answer: 1,
    explain: "Koefisien adalah bilangan yang menempel pada variabel, termasuk tandanya: koefisien y adalah −3.",
    remedial: "Ingat unsur-unsur bentuk aljabar (A.1 Kelas 8): suku, koefisien, variabel, dan konstanta — tanda negatif ikut terbawa."
  }
];

var CEK = [
  {
    topic: "Mengenali SPLDV",
    q: "Manakah yang merupakan SPLDV?",
    options: [
      "x + y = 9 (hanya satu persamaan)",
      "x + y = 9 dan x − y = 3",
      "x² + y = 9 dan x + y = 3",
      "x + y + z = 9 dan x − y = 3"
    ],
    answer: 1,
    explain: "SPLDV terdiri dari dua persamaan linear dengan dua variabel yang sama. Pilihan lain gagal karena hanya satu persamaan, mengandung x², atau mengandung tiga variabel."
  },
  {
    topic: "Memeriksa Pasangan Penyelesaian",
    q: "Apakah pasangan (2, 5) merupakan penyelesaian dari x + y = 7 dan 2x − y = −1?",
    options: ["Ya", "Tidak"],
    answer: 0,
    explain: "Periksa kedua persamaan: 2 + 5 = 7 ✓ dan 2(2) − 5 = −1 ✓. Keduanya terpenuhi, jadi (2, 5) adalah penyelesaiannya."
  },
  {
    topic: "Substitusi",
    q: "Jika y = 2x dan x + y = 9, penyelesaiannya adalah …",
    options: ["(3, 6)", "(6, 3)", "(4, 5)", "(2, 7)"],
    answer: 0,
    explain: "Gantikan y: x + 2x = 9 → 3x = 9 → x = 3, lalu y = 2(3) = 6. Penyelesaiannya (3, 6)."
  },
  {
    topic: "Eliminasi",
    q: "Penyelesaian dari x + y = 8 dan x − y = 2 adalah …",
    options: ["(3, 5)", "(4, 4)", "(5, 3)", "(6, 2)"],
    answer: 2,
    explain: "Jumlahkan kedua persamaan: 2x = 10 → x = 5. Lalu y = 8 − 5 = 3. Penyelesaiannya (5, 3)."
  },
  {
    topic: "Makna Titik Potong Grafik",
    q: "Pada metode grafik, titik potong kedua garis menyatakan …",
    options: [
      "koefisien dari kedua persamaan",
      "pasangan (x, y) yang memenuhi kedua persamaan sekaligus",
      "titik tertinggi dari grafik",
      "selisih kedua persamaan"
    ],
    answer: 1,
    explain: "Titik potong terletak pada kedua garis, artinya koordinatnya memenuhi kedua persamaan — itulah penyelesaian SPLDV."
  },
  {
    topic: "Memilih Model SPLDV",
    q: "Harga 2 roti dan 1 susu adalah Rp15.000. Harga 1 roti dan 2 susu adalah Rp18.000. Jika r = harga 1 roti dan s = harga 1 susu, model SPLDV yang benar adalah …",
    options: [
      "2r + s = 18.000 dan r + 2s = 15.000",
      "r + s = 15.000 dan r + s = 18.000",
      "2r + s = 15.000 dan r + 2s = 18.000",
      "2s + r = 15.000 dan s + 2r = 18.000"
    ],
    answer: 2,
    explain: "Informasi pertama: 2 roti (2r) + 1 susu (s) = 15.000. Informasi kedua: 1 roti (r) + 2 susu (2s) = 18.000. Itulah model pada pilihan ketiga."
  }
];

var MISKONSEPSI = [
  {
    salah: "“Pasangan (3, 5) sama saja dengan (5, 3) sebagai penyelesaian masalah kantin — urutan angkanya tidak penting.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, urutan pasangan memang tidak berpengaruh.",
      "Urutan itu penting: komponen pertama selalu x dan kedua y. (3, 5) bukan penyelesaian karena 2(3) + 5 = 11 ≠ 13.",
      "Keduanya penyelesaian karena jumlah angkanya sama-sama 8."
    ],
    answer: 1,
    explain: "Pasangan berurutan artinya urutan menentukan makna. Untuk masalah kantin, penyelesaian yang benar adalah (5, 3): 2(5) + 3 = 13 ✓ dan 5 + 2(3) = 11 ✓."
  },
  {
    salah: "“Mensubstitusi y = x + 1 ke 2x + y = 10 boleh ditulis 2(x + 1) = 2x + 1.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "2(x + 1) = 2x + 2, karena 2 harus dikalikan ke kedua suku di dalam kurung.",
      "2(x + 1) = 2x + 1, karena angka di luar kurung hanya mengalikan x.",
      "2(x + 1) = x + 3."
    ],
    answer: 0,
    explain: "Sifat distributif berlaku untuk semua suku di dalam kurung: 2(x + 1) = 2x + 2. Melupakan ini membuat seluruh langkah berikutnya salah."
  },
  {
    salah: "“Sudah ketemu x = 5, berarti soal SPLDV-nya selesai.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Betul, nilai y tidak perlu dicari lagi.",
      "Belum selesai: cari y dengan substitusi balik, lalu periksa pasangan (x, y) ke kedua persamaan.",
      "Ulangi saja dari awal dengan metode yang lain."
    ],
    answer: 1,
    explain: "Penyelesaian SPLDV adalah sepasang nilai (x, y). Satu variabel saja belum menjawab apa pun — dan pemeriksaan ke kedua persamaan adalah langkah pemodelan kelima."
  }
];

var KUIS = [
  {
    topic: "Konsep",
    q: "Manakah yang merupakan SPLDV?",
    options: [
      "x + y = 7",
      "x + y = 7 dan 2x − y = 5",
      "x² + y = 7 dan x + y = 3",
      "x + y + z = 7 dan x − y = 2"
    ],
    answer: 1,
    explain: "SPLDV adalah dua persamaan linear dengan dua variabel yang sama. Satu persamaan saja bukan sistem; x² bukan linear; z menjadikannya tiga variabel."
  },
  {
    topic: "Konsep",
    q: "Pasangan berurutan (x, y) disebut penyelesaian SPLDV apabila …",
    options: [
      "memenuhi kedua persamaan sekaligus",
      "memenuhi salah satu persamaan saja",
      "memenuhi persamaan pertama saja",
      "membuat kedua persamaan bernilai sama besar"
    ],
    answer: 0,
    explain: "Penyelesaian harus memenuhi kedua persamaan sekaligus — memenuhi satu saja belum cukup."
  },
  {
    topic: "Grafik",
    q: "Kedua garis suatu SPLDV berpotongan di titik (2, 5). Penyelesaian SPLDV itu adalah …",
    options: ["(5, 2)", "(0, 5)", "(2, 5)", "(5, 5)"],
    answer: 2,
    explain: "Titik potong kedua garis adalah penyelesaiannya, dibaca sebagai pasangan (x, y) = (2, 5). Hati-hati, jangan tertukar urutannya."
  },
  {
    topic: "Grafik",
    q: "Jika grafik kedua persamaan SPLDV berupa dua garis sejajar, maka SPLDV tersebut …",
    options: [
      "mempunyai satu penyelesaian",
      "mempunyai dua penyelesaian",
      "penyelesaiannya tak hingga banyaknya",
      "tidak mempunyai penyelesaian"
    ],
    answer: 3,
    explain: "Garis sejajar tidak pernah berpotongan, jadi tidak ada pasangan (x, y) yang memenuhi kedua persamaan."
  },
  {
    topic: "Substitusi",
    q: "Diketahui y = x − 2 dan x + y = 8. Nilai x adalah …",
    options: ["3", "5", "6", "7"],
    answer: 1,
    explain: "Substitusi: x + (x − 2) = 8 → 2x = 10 → x = 5 (dan y = 3)."
  },
  {
    topic: "Substitusi",
    q: "Jika x = 2y dan x + y = 12, penyelesaiannya adalah …",
    options: ["(8, 4)", "(4, 8)", "(6, 6)", "(9, 3)"],
    answer: 0,
    explain: "Substitusi: 2y + y = 12 → 3y = 12 → y = 4, lalu x = 2(4) = 8. Penyelesaiannya (8, 4)."
  },
  {
    topic: "Eliminasi & Campuran",
    q: "Dari x + y = 10 dan x − y = 4, nilai x adalah …",
    options: ["3", "6", "7", "14"],
    answer: 2,
    explain: "Eliminasi y dengan menjumlahkan: 2x = 14 → x = 7 (dan y = 3)."
  },
  {
    topic: "Eliminasi & Campuran",
    q: "Penyelesaian dari 2x + 3y = 17 dan x − y = 1 adalah …",
    options: ["(3, 4)", "(4, 3)", "(5, 2)", "(2, 5)"],
    answer: 1,
    explain: "Dari persamaan kedua x = y + 1. Substitusi: 2(y + 1) + 3y = 17 → 5y = 15 → y = 3, x = 4. Periksa: 2(4) + 3(3) = 17 ✓."
  },
  {
    topic: "Pemodelan",
    q: "Harga 2 tiket dewasa dan 3 tiket anak adalah Rp70.000; harga 1 tiket dewasa dan 2 tiket anak adalah Rp40.000. Jika d = harga tiket dewasa dan a = harga tiket anak, model SPLDV yang benar adalah …",
    options: [
      "d + a = 70.000 dan d + a = 40.000",
      "2d + 3a = 40.000 dan d + 2a = 70.000",
      "3d + 2a = 70.000 dan 2d + a = 40.000",
      "2d + 3a = 70.000 dan d + 2a = 40.000"
    ],
    answer: 3,
    explain: "Informasi pertama menjadi 2d + 3a = 70.000 dan informasi kedua menjadi d + 2a = 40.000 — koefisien mengikuti jumlah tiket dan total mengikuti harganya."
  },
  {
    topic: "Pemodelan",
    q: "Jumlah dua bilangan adalah 30 dan selisihnya 6. Bilangan yang lebih besar adalah …",
    options: ["12", "15", "24", "18"],
    answer: 3,
    explain: "Model: m + n = 30 dan m − n = 6. Jumlahkan: 2m = 36 → m = 18 (bilangan lainnya 12). Periksa: 18 + 12 = 30 ✓, 18 − 12 = 6 ✓."
  }
];

var TANTANGAN = [
  {
    q: "Penyelesaian dari 2x + y = 7 dan x + 3y = 9 adalah …",
    options: ["(2, 3)", "(12/5, 11/5)", "(11/5, 12/5)", "(3, 1)"],
    answer: 1,
    explain: "Dari persamaan pertama y = 7 − 2x. Substitusi: x + 3(7 − 2x) = 9 → −5x = −12 → x = 12/5, lalu y = 7 − 24/5 = 11/5. Penyelesaian pecahan seperti ini sulit dibaca persis dari grafik — di sinilah metode aljabar menang."
  },
  {
    q: "Nilai k agar kedua garis x + 2y = 4 dan 2x + 4y = k berimpit adalah …",
    options: ["4", "6", "8", "16"],
    answer: 2,
    explain: "Persamaan kedua adalah 2 kali persamaan pertama di ruas kiri (2x + 4y), jadi ruas kanannya pun harus 2 × 4 = 8 agar kedua persamaan setara dan garisnya berimpit. Untuk k ≠ 8, garisnya sejajar."
  },
  {
    q: "Keliling sebuah persegi panjang 44 cm dan selisih panjang dan lebarnya 4 cm. Panjang dan lebarnya adalah …",
    options: ["12 cm dan 10 cm", "13 cm dan 9 cm", "14 cm dan 8 cm", "15 cm dan 7 cm"],
    answer: 1,
    explain: "Model: 2p + 2l = 44 (atau p + l = 22) dan p − l = 4. Jumlahkan: 2p = 26 → p = 13, l = 9. Periksa keliling: 2(13 + 9) = 44 ✓."
  },
  {
    q: "Jumlah umur seorang ibu dan anaknya 48 tahun dan selisih umur mereka 24 tahun. Umur ibu dan anak adalah …",
    options: ["30 dan 18 tahun", "34 dan 14 tahun", "36 dan 12 tahun", "40 dan 8 tahun"],
    answer: 2,
    explain: "Model: i + a = 48 dan i − a = 24. Jumlahkan: 2i = 72 → i = 36, lalu a = 12. Periksa: 36 + 12 = 48 ✓, 36 − 12 = 24 ✓."
  },
  {
    q: "Dua barang berharga x dan y ribu rupiah memenuhi 4x + 3y = 19 dan 2x + y = 9. Nilai x + y adalah …",
    options: ["4", "5", "6", "9"],
    answer: 1,
    explain: "Dari persamaan kedua y = 9 − 2x. Substitusi: 4x + 3(9 − 2x) = 19 → −2x = −8 → x = 4, lalu y = 1. Jadi x + y = 5 (ribu rupiah)."
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

    /* ---------- Sub-bab 1: polling + tebakan awal ---------- */
    var pollingTersimpan = baca("poll", null);
    document.querySelectorAll("#polling .opsi").forEach(function (b) {
      if (pollingTersimpan && b.getAttribute("data-poll") === pollingTersimpan) {
        b.classList.add("terpilih");
        var u = $("polling-umpan");
        u.className = "umpan info tampil";
        u.textContent = "Pilihan pollingmu sudah tersimpan. Kita buktikan benar atau tidaknya di Sub-bab 3!";
      }
      b.addEventListener("click", function () {
        document.querySelectorAll("#polling .opsi").forEach(function (x) { x.classList.remove("terpilih"); });
        b.classList.add("terpilih");
        simpan("poll", b.getAttribute("data-poll"));
        var u = $("polling-umpan");
        u.className = "umpan info tampil";
        u.textContent = "Tersimpan! Simpan juga tebakan hargamu di bawah — nanti kita periksa lagi di Sub-bab 3.";
      });
    });

    var tebakan = baca("guess", null);
    if (tebakan) {
      $("tebak-buku").value = tebakan.buku;
      $("tebak-pensil").value = tebakan.pensil;
      tampilTersimpan($("tebakan-tersimpan"));
    }
    $("simpan-tebakan").addEventListener("click", function () {
      var buku = parseFloat($("tebak-buku").value);
      var pensil = parseFloat($("tebak-pensil").value);
      if (isNaN(buku) || isNaN(pensil)) { alert("Isi dulu kedua tebakan harga, ya."); return; }
      simpan("guess", { buku: buku, pensil: pensil });
      tampilTersimpan($("tebakan-tersimpan"));
    });

    /* ---------- Sub-bab 2: prasyarat ---------- */
    buatKelompokSoal($("prasyarat-wadah"), PRASYARAT, "prasyarat", $("prasyarat-skor"), "Skor prasyarat", false, true);

    /* ---------- Sub-bab 3: Tebak & Uji ---------- */
    $("tombol-uji").addEventListener("click", function () {
      var x = parseFloat($("uji-x").value);
      var y = parseFloat($("uji-y").value);
      var u1 = $("uji-umpan-1"), u2 = $("uji-umpan-2"), uh = $("uji-umpan-hasil");
      if (isNaN(x) || isNaN(y)) {
        uh.className = "umpan tampil no";
        uh.textContent = "Isi dulu nilai x dan y (dalam ribu rupiah).";
        return;
      }
      var h1 = 2 * x + y, h2 = x + 2 * y;
      var ok1 = Math.abs(h1 - 13) < 1e-9, ok2 = Math.abs(h2 - 11) < 1e-9;
      u1.className = "umpan tampil info";
      u1.textContent = "Persamaan 1: 2(" + x + ") + " + y + " = " + h1 + (ok1 ? " → terpenuhi ✓ (harus 13)" : " → belum terpenuhi (hasilnya " + h1 + ", seharusnya 13)");
      u2.className = "umpan tampil info";
      u2.textContent = "Persamaan 2: " + x + " + 2(" + y + ") = " + h2 + (ok2 ? " → terpenuhi ✓ (harus 11)" : " → belum terpenuhi (hasilnya " + h2 + ", seharusnya 11)");
      if (ok1 && ok2) {
        uh.className = "umpan tampil ok";
        uh.textContent = "🎉 Tepat! (" + x + ", " + y + ") memenuhi KEDUA persamaan — itulah penyelesaian SPLDV ini: harga buku Rp" + (x * 1000).toLocaleString("id-ID") + " dan pensil Rp" + (y * 1000).toLocaleString("id-ID") + ".";
      } else {
        uh.className = "umpan tampil no";
        uh.textContent = "Belum menjadi penyelesaian: pasangan (x, y) harus memenuhi kedua persamaan sekaligus. Coba ubah tebakanmu.";
      }
      simpan("tebakuji", { x: x, y: y, benar: ok1 && ok2 });

      var awal = baca("guess", null);
      var banding = $("uji-bandingkan");
      if (awal) {
        var sama = Math.abs(awal.buku - x * 1000) < 1e-9 && Math.abs(awal.pensil - y * 1000) < 1e-9;
        banding.textContent = sama
          ? "Tebakan awalmu di Sub-bab 1 sama dengan pasangan yang sedang kamu uji ini."
          : "Bandingkan: tebakan awalmu di Sub-bab 1 adalah buku Rp" + awal.buku.toLocaleString("id-ID") + " dan pensil Rp" + awal.pensil.toLocaleString("id-ID") + ".";
      }
    });

    /* ---------- Sub-bab 4: langkah bertahap ---------- */
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

    /* ---------- Sub-bab 6: aplikasi ---------- */
    var JAWABAN_APLIKASI = {
      "1": { id: ["apl1-dewasa", "apl1-anak"], nilai: [20000, 10000], pesan: "Tepat: tiket dewasa Rp20.000 dan tiket anak Rp10.000. Periksa: 2(20.000) + 3(10.000) = 70.000 ✓ dan 20.000 + 2(10.000) = 40.000 ✓." },
      "2": { id: ["apl2-besar", "apl2-kecil"], nilai: [27, 18], pesan: "Tepat: kedua bilangannya 27 dan 18. Periksa: 27 + 18 = 45 ✓ dan 27 − 18 = 9 ✓." },
      "3": { id: ["apl3-total"], nilai: [21000], pesan: "Tepat: 3(5.000) + 2(3.000) = 15.000 + 6.000 = Rp21.000 ✓ — konsisten dengan penyelesaian SPLDV kantin." }
    };
    var hasilAplikasi = baca("aplikasi", {});
    document.querySelectorAll(".btn-aplikasi").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var kunci = btn.getAttribute("data-aplikasi");
        var spec = JAWABAN_APLIKASI[kunci];
        var umpan = $("apl-umpan-" + kunci);
        var isi = spec.id.map(function (id) { return parseFloat($(id).value); });
        if (isi.some(isNaN)) {
          umpan.className = "umpan tampil no";
          umpan.textContent = "Isi dulu semua jawabannya, ya.";
          return;
        }
        var benar = isi.every(function (v, i) { return Math.abs(v - spec.nilai[i]) < 1e-9; });
        umpan.className = "umpan tampil " + (benar ? "ok" : "no");
        umpan.textContent = benar ? "✓ " + spec.pesan : "✗ Belum tepat. Ikuti lagi langkah pemodelannya pada tabel di atas, lalu coba lagi.";
        hasilAplikasi[kunci] = benar;
        simpan("aplikasi", hasilAplikasi);
      });
    });

    /* ---------- Sub-bab 7: proyek ---------- */
    var kolomProyek = ["kelompok", "beli1", "beli2", "model", "metode", "hasil", "simpulan"];
    var proyek = baca("proyek", null);
    if (proyek) {
      kolomProyek.forEach(function (k) {
        var el = $("proyek-" + k);
        if (el && proyek[k]) { el.value = proyek[k]; }
      });
      tampilTersimpan($("proyek-tersimpan"));
    }
    $("simpan-proyek").addEventListener("click", function () {
      var data = {};
      kolomProyek.forEach(function (k) { data[k] = $("proyek-" + k).value.trim(); });
      simpan("proyek", data);
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
    CEK: CEK,
    MISKONSEPSI: MISKONSEPSI,
    KUIS: KUIS,
    TANTANGAN: TANTANGAN
  };
}
