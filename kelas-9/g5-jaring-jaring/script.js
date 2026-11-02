/* Modul G.5 Jaring-Jaring Bangun Ruang — MPI Matematika Kelas 9
   Semua kunci localStorage berawalan "mpi-mtk9-g5-".
   Blok data soal dipisahkan dari logika DOM agar bisa diverifikasi di Node. */
"use strict";

var PREFIX = "mpi-mtk9-g5-";

/* ================= DATA SOAL ================= */

var PRASYARAT = [
  {
    q: "Banyak sisi kubus adalah …",
    options: ["4", "6", "8", "12"],
    answer: 1,
    explain: "Kubus mempunyai 6 sisi: depan, belakang, kiri, kanan, atas, dan bawah.",
    remedial: "Sisi adalah bidang datar yang membatasi bangun ruang. Hitung sisi kubus dengan membayangkan dadu: ada 6 permukaan."
  },
  {
    q: "Banyak rusuk balok adalah …",
    options: ["6", "8", "10", "12"],
    answer: 3,
    explain: "Balok mempunyai 12 rusuk: 4 rusuk panjang, 4 rusuk lebar, dan 4 rusuk tinggi.",
    remedial: "Rusuk adalah garis pertemuan dua sisi. Balok dan kubus sama-sama mempunyai 12 rusuk — bedanya pada kubus semua rusuk sama panjang."
  },
  {
    q: "Luas persegi dengan panjang sisi 9 cm adalah …",
    options: ["18 cm²", "36 cm²", "81 cm²", "90 cm²"],
    answer: 2,
    explain: "Luas persegi = sisi × sisi = 9 × 9 = 81 cm².",
    remedial: "Luas persegi adalah sisi dikali sisi (bukan sisi ditambah sisi, dan bukan keliling 4 × sisi = 36 cm)."
  },
  {
    q: "Bangun ruang yang semua sisinya berupa persegi yang sama besar adalah …",
    options: ["balok", "kubus", "prisma segitiga", "limas segiempat"],
    answer: 1,
    explain: "Kubus: keenam sisinya persegi yang sama besar. Balok sisinya persegi panjang, prisma segitiga punya sisi segitiga, dan limas segiempat alasnya saja yang persegi.",
    remedial: "Perhatikan dua syaratnya sekaligus: semua sisi berbentuk persegi DAN sama besar. Hanya kubus yang memenuhi keduanya."
  },
  {
    q: "Bangun datar yang menyusun jaring-jaring limas segiempat adalah …",
    options: ["persegi dan lingkaran", "persegi dan segitiga", "segitiga dan jajar genjang", "persegi panjang dan segitiga"],
    answer: 1,
    explain: "Limas segiempat beralas persegi dan mempunyai empat sisi tegak segitiga, jadi jaring-jaringnya tersusun dari persegi dan segitiga.",
    remedial: "Pikirkan bentuk setiap sisi limas segiempat: alasnya satu persegi, lalu keempat sisi miringnya segitiga."
  }
];

var CEK = [
  {
    topic: "Susunan Kubus",
    q: "Jaring-jaring kubus tersusun dari … persegi yang sama besar.",
    options: ["5", "6", "8", "11"],
    answer: 1,
    explain: "Kubus mempunyai 6 sisi, jadi jaring-jaringnya tersusun dari 6 persegi. Angka 11 adalah banyaknya pola jaring-jaring kubus yang berbeda, bukan banyak perseginya."
  },
  {
    topic: "Pola 1-4-1",
    q: "Pada pola 1-4-1, barisan terpanjang pada jaring-jaring kubus berisi … persegi.",
    options: ["3", "4", "5", "6"],
    answer: 1,
    explain: "Angka tengah pada nama pola 1-4-1 menunjukkan barisan terpanjangnya berisi 4 persegi, dengan 1 persegi menempel di atas dan 1 di bawah barisan itu."
  },
  {
    topic: "Sisi Berhadapan",
    q: "Manakah pernyataan yang benar tentang dua sisi kubus yang berhadapan, dilihat pada jaring-jaringnya?",
    options: [
      "Keduanya selalu bersebelahan (berbagi rusuk) pada jaring-jaring.",
      "Keduanya tidak pernah berbagi rusuk pada jaring-jaring.",
      "Keduanya selalu terletak di ujung barisan yang sama.",
      "Keduanya selalu menempel pada satu persegi yang sama."
    ],
    answer: 1,
    explain: "Sisi yang berhadapan tidak pernah menempel satu sama lain pada jaring-jaring. Justru kalau dua persegi berbagi rusuk pada jaring-jaring, keduanya pasti bersebelahan pada kubusnya."
  },
  {
    topic: "Jaring-Jaring Balok",
    q: "Pada jaring-jaring balok, sisi berukuran p × l berhadapan dengan sisi berukuran …",
    options: ["p × t", "l × t", "p × l", "p + l"],
    answer: 2,
    explain: "Sisi yang berhadapan pada balok harus kongruen: sisi p × l berhadapan dengan sisi p × l yang lain."
  },
  {
    topic: "Limas Segiempat",
    q: "Banyak sisi limas segiempat adalah …",
    options: ["4", "5", "6", "8"],
    answer: 1,
    explain: "Limas segiempat mempunyai 5 sisi: 1 alas persegi dan 4 sisi tegak segitiga."
  },
  {
    topic: "Susunan yang Bukan Jaring-Jaring",
    q: "Enam persegi disusun dalam satu baris lurus. Susunan itu bukan jaring-jaring kubus karena …",
    options: [
      "banyak perseginya kurang dari enam",
      "saat dilipat ada sisi yang bertumpuk dan ada sisi kubus yang kosong",
      "semua perseginya berwarna sama",
      "barisnya terlalu pendek untuk digunting"
    ],
    answer: 1,
    explain: "Barisan 6 persegi melingkari kubus hanya sampai 4 sisi; persegi ke-5 dan ke-6 menumpuk sisi yang sudah tertutup, sementara dua sisi lain (misalnya atas dan bawah) kosong."
  }
];

var MISKONSEPSI = [
  {
    salah: "“Semua susunan 6 persegi adalah jaring-jaring kubus.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, asalkan banyak perseginya tepat enam.",
      "Hanya 11 dari 35 susunan enam persegi (heksomino) yang benar-benar terlipat menjadi kubus — contoh penyangkalnya Susunan B dan Susunan D pada Uji Lipat.",
      "Semua susunan 6 persegi salah, kubus tidak mempunyai jaring-jaring."
    ],
    answer: 1,
    explain: "Dari 35 susunan enam persegi yang mungkin, hanya 11 yang menjadi kubus. Susunan B membuat sisi bertumpuk, dan Susunan D membuat dua persegi memperebutkan posisi yang sama."
  },
  {
    salah: "“Dua sisi yang letaknya tampak berjauhan pada jaring-jaring pasti berhadapan.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, semakin jauh letaknya semakin pasti berhadapan.",
      "Belum tentu — gunakan aturan loncat satu dan lacak lipatannya. Pada Jaring A, A dan D tampak berjauhan tetapi tidak berhadapan; yang berhadapan dengan A adalah C.",
      "Dua sisi yang berhadapan selalu bersebelahan pada jaring-jaring."
    ],
    answer: 1,
    explain: "Jarak tampak pada gambar tidak menentukan pasangan berhadapan. Pada deretan A–B–C–D, pasangan yang benar adalah A–C dan B–D menurut aturan loncat satu; A dan D justru bersebelahan setelah dilipat."
  },
  {
    salah: "“Segitiga pada jaring-jaring limas segiempat boleh menempel di sisi mana saja, yang penting jumlahnya empat.”",
    q: "Pembetulan yang benar adalah …",
    options: [
      "Benar, posisi segitiga bebas selama jumlahnya empat.",
      "Alas setiap segitiga harus sama panjang dengan sisi persegi tempatnya menempel, dan keempat segitiga harus bertemu di satu titik puncak saat dilipat.",
      "Segitiga cukup menempel pada dua sisi persegi saja."
    ],
    answer: 1,
    explain: "Kalau alas segitiga lebih panjang atau lebih pendek dari sisi persegi yang ditempelinya, lipatannya menganga atau bertumpuk dan limasnya tidak tertutup rapi."
  }
];

var PASANGKAN = [
  {
    q: "Balok tersusun dari …",
    options: [
      "6 persegi yang sama besar",
      "3 pasang persegi panjang yang kongruen dan saling berhadapan",
      "2 segitiga dan 3 persegi panjang",
      "1 persegi dan 4 segitiga"
    ],
    answer: 1,
    explain: "Balok mempunyai 3 pasang sisi persegi panjang yang kongruen: p × l, p × t, dan l × t — setiap ukuran muncul sepasang dan saling berhadapan."
  },
  {
    q: "Prisma segitiga tersusun dari …",
    options: [
      "2 segitiga dan 3 persegi panjang",
      "3 segitiga dan 2 persegi panjang",
      "5 persegi panjang",
      "1 persegi dan 4 segitiga"
    ],
    answer: 0,
    explain: "Prisma segitiga: 2 sisi segitiga (alas dan tutup) dan 3 sisi tegak persegi panjang — total 5 sisi."
  },
  {
    q: "Limas segiempat tersusun dari …",
    options: [
      "5 segitiga",
      "4 persegi panjang dan 1 segitiga",
      "1 persegi dan 4 segitiga",
      "2 persegi dan 3 segitiga"
    ],
    answer: 2,
    explain: "Limas segiempat: alasnya 1 persegi dan sisi tegaknya 4 segitiga — total 5 sisi."
  }
];

var KUIS = [
  {
    topic: "Konsep",
    q: "Pengertian jaring-jaring bangun ruang adalah …",
    options: [
      "gambar bangun ruang yang dilihat dari berbagai arah",
      "bangun datar yang diperoleh dengan membuka bangun ruang menurut rusuk-rusuknya lalu membentangkannya pada bidang datar",
      "rangka bangun ruang yang dibentuk dari lidi dan plastisin",
      "pola warna pada permukaan bangun ruang"
    ],
    answer: 1,
    explain: "Jaring-jaring adalah hasil membuka bangun ruang menurut rusuk-rusuknya dan membentangkannya rata — dari lembaran datar itulah bangun ruang dilipat kembali."
  },
  {
    topic: "Konsep",
    q: "Banyak jaring-jaring kubus yang berbeda ada …",
    options: ["6", "9", "11", "35"],
    answer: 2,
    explain: "Tepat 11 jaring-jaring kubus: pola 1-4-1 (6), 2-3-1 (3), 2-2-2 (1), dan 3-3 (1). Angka 6 adalah banyak sisi kubus, dan 35 adalah banyak seluruh susunan enam persegi."
  },
  {
    topic: "Uji Lipat",
    q: "Perhatikan susunan persegi berikut. <svg class='jaring-svg' viewBox='0 0 196 100' role='img' aria-label='Susunan enam persegi: blok dua kali dua dengan dua persegi memanjang ke kanan bawah'><rect x='2' y='2' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><rect x='50' y='2' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><rect x='2' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><rect x='50' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><rect x='98' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><rect x='146' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/></svg> Susunan pada gambar jika dilipat, maka akan …",
    options: [
      "menjadi kubus yang tertutup sempurna",
      "menjadi balok",
      "menjadi kubus tanpa tutup",
      "bukan jaring-jaring kubus karena ada dua sisi yang bertumpuk (bertindih) saat dilipat"
    ],
    answer: 3,
    explain: "Susunan itu mengandung blok 2 × 2 dengan ekor dua persegi. Saat dilipat, dua perseginya memperebutkan satu posisi sisi yang sama sehingga bertumpuk, dan satu sisi kubus lainnya kosong."
  },
  {
    topic: "Sisi Berhadapan",
    q: "Perhatikan Jaring A berikut. <svg class='jaring-svg' viewBox='0 0 196 148' role='img' aria-label='Jaring A: empat persegi sebaris A B C D, E di atas B, F di bawah B'><rect x='2' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='24' y='79' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>A</text><rect x='50' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='72' y='79' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>B</text><rect x='98' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='120' y='79' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>C</text><rect x='146' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='168' y='79' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>D</text><rect x='50' y='2' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='72' y='31' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>E</text><rect x='50' y='98' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='72' y='127' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>F</text></svg> Sisi yang berhadapan dengan sisi B adalah …",
    options: ["D", "C", "E", "F"],
    answer: 0,
    explain: "Pada deretan A–B–C–D berlaku aturan loncat satu: persegi ke-2 (B) berhadapan dengan persegi ke-4 (D). Pasangan lengkapnya A–C, B–D, dan E–F."
  },
  {
    topic: "Balok",
    q: "Pasangan sisi yang berhadapan pada balok selalu …",
    options: [
      "berbeda bentuk dan ukurannya",
      "salah satunya berbentuk persegi",
      "menempel satu sama lain pada jaring-jaring",
      "kongruen, yaitu sama bentuk dan ukurannya"
    ],
    answer: 3,
    explain: "Sisi balok yang berhadapan selalu kongruen — karena itulah balok mempunyai tepat 3 pasang sisi yang sama: p × l, p × t, dan l × t."
  },
  {
    topic: "Prisma Segitiga",
    q: "Prisma segitiga memiliki sisi sebanyak …",
    options: ["4", "5", "6", "9"],
    answer: 1,
    explain: "Sisi prisma segitiga ada 5: 2 segitiga dan 3 persegi panjang. Angka 9 adalah banyak rusuknya, bukan banyak sisinya."
  },
  {
    topic: "Limas Segiempat",
    q: "Jaring-jaring limas segiempat tersusun dari …",
    options: [
      "1 persegi dan 4 segitiga",
      "1 persegi dan 3 segitiga",
      "4 persegi dan 1 segitiga",
      "2 persegi dan 4 segitiga"
    ],
    answer: 0,
    explain: "Alas limas segiempat adalah 1 persegi, dan keempat sisi tegaknya segitiga — seperti bunga dengan persegi di tengah."
  },
  {
    topic: "Aturan Loncat Satu",
    q: "Pada deretan lurus empat persegi (1)–(2)–(3)–(4) pada jaring-jaring kubus, persegi yang berhadapan dengan persegi (2) adalah persegi …",
    options: ["(1)", "(3)", "(4)", "tidak ada, deretan lurus tidak punya pasangan"],
    answer: 2,
    explain: "Aturan loncat satu: persegi ke-2 berhadapan dengan persegi ke-4 (meloncati persegi ke-3), dan persegi ke-1 berhadapan dengan persegi ke-3."
  },
  {
    topic: "Dadu Standar",
    q: "Pada dadu standar, jumlah mata dua sisi yang berhadapan selalu 7. Mata yang berhadapan dengan mata 5 adalah …",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explain: "Karena jumlahnya selalu 7, pasangan mata 5 adalah 7 − 5 = 2."
  },
  {
    topic: "Aplikasi Balok",
    q: "Sebuah kemasan balok 10 cm × 6 cm × 4 cm dibuat dari jaring-jaring satu baris berisi empat sisi tegak, dengan tutup menempel di atas dan di bawah salah satu sisi. Panjang bentangan jaring-jaring itu adalah …",
    options: ["20 cm", "26 cm", "30 cm", "32 cm"],
    answer: 3,
    explain: "Panjang bentangan = jumlah lebar keempat sisi tegak = 10 + 6 + 10 + 6 = 2 × (10 + 6) = 32 cm, sama dengan keliling alas balok."
  }
];

var TANTANGAN = [
  {
    q: "Perhatikan Jaring Z berikut. <svg class='jaring-svg' viewBox='0 0 196 148' role='img' aria-label='Jaring Z: tangga M N O P Q R'><rect x='2' y='98' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='24' y='127' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>M</text><rect x='50' y='98' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='72' y='127' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>N</text><rect x='50' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='72' y='79' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>O</text><rect x='98' y='50' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='120' y='79' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>P</text><rect x='98' y='2' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='120' y='31' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>Q</text><rect x='146' y='2' width='44' height='44' fill='#DBEAFE' stroke='#2563EB' stroke-width='2'/><text x='168' y='31' text-anchor='middle' font-size='17' font-weight='700' fill='#1E3A8A'>R</text></svg> Sisi yang berhadapan dengan sisi O adalah …",
    options: ["M", "N", "Q", "R"],
    answer: 3,
    explain: "Jaring Z berbentuk tangga 2-2-2: M–N, N–O, O–P, P–Q, Q–R. Melacak lipatannya (atau aturan loncatan pada tangga) memberi pasangan M–P, N–Q, dan O–R. Jadi yang berhadapan dengan O adalah R."
  },
  {
    q: "Masih pada Jaring Z di atas: jika sisi M menjadi alas kubus, sisi yang menjadi tutupnya (berhadapan dengan M) adalah …",
    options: ["N", "P", "Q", "R"],
    answer: 1,
    explain: "Pasangan berhadapan pada Jaring Z adalah M–P, N–Q, dan O–R. Alas M berarti tutupnya adalah sisi yang berhadapan dengannya, yaitu P."
  },
  {
    q: "Pada jaring-jaring balok, sisi berukuran 8 cm × 5 cm berhadapan dengan sisi berukuran …",
    options: ["5 cm × 4 cm", "8 cm × 4 cm", "8 cm × 5 cm", "10 cm × 5 cm"],
    answer: 2,
    explain: "Sisi balok yang berhadapan selalu kongruen — sama persis bentuk dan ukurannya — jadi pasangan sisi 8 cm × 5 cm adalah sisi 8 cm × 5 cm yang lain."
  },
  {
    q: "Banyak rusuk prisma segitiga adalah …",
    options: ["6", "9", "12", "15"],
    answer: 1,
    explain: "Rusuk prisma segitiga: 3 rusuk pada alas segitiga, 3 rusuk pada tutup segitiga, dan 3 rusuk tegak penghubungnya — total 9 rusuk. (Banyak sisinya 5 dan titik sudutnya 6.)"
  },
  {
    q: "Jaring-jaring kubus dengan panjang rusuk 6 cm digunting dari selembar kertas. Luas kertas yang membentuk kubus itu (tanpa bagian lem) adalah …",
    options: ["36 cm²", "72 cm²", "144 cm²", "216 cm²"],
    answer: 3,
    explain: "Jaring-jaring berisi 6 persegi, masing-masing luasnya 6 × 6 = 36 cm². Totalnya 6 × 36 = 216 cm² — sama dengan luas permukaan kubus."
  }
];

var APLIKASI_CEK = [
  {
    q: "Periksa pemahamanmu: pada dadu di atas, mata yang berhadapan dengan mata 6 adalah …",
    options: ["1", "2", "3", "4"],
    answer: 0,
    explain: "Pasangan B–D adalah mata 1–6. Cek dengan aturan dadu standar: 1 + 6 = 7 ✓."
  },
  {
    q: "Periksa pemahamanmu: panjang bentangan (lebar total barisan empat sisi tegak) jaring-jaring kemasan itu adalah …",
    options: ["16 cm", "20 cm", "32 cm", "40 cm"],
    answer: 2,
    explain: "Lebar barisan = 10 + 6 + 10 + 6 = 32 cm. Angka 16 cm adalah tinggi bentangannya, bukan panjangnya."
  },
  {
    q: "Periksa pemahamanmu: pada Jaring C, sisi yang berhadapan dengan H adalah …",
    options: ["G", "I", "J", "L"],
    answer: 2,
    explain: "Pada deretan G–H–I–J, aturan loncat satu memberi H berhadapan dengan J (meloncati I). Pasangan lengkapnya G–I, H–J, dan K–L."
  }
];

var UJI_LIPAT = {
  a: { benar: true, pesan: "Susunan A memang jaring-jaring kubus — pola 1-4-1: empat persegi sebaris dengan satu sayap di atas dan satu di bawah. Susunan inilah yang akan kita beri huruf pada contoh terbimbing di bawah." },
  b: { benar: false, pesan: "Susunan B bukan jaring-jaring kubus: baris lurusnya berisi 5 persegi. Barisan 4 persegi sudah melingkari keempat sisi tegak kubus, sehingga persegi kelima bertumpuk dengan persegi pertama — dan sisi alas/tutupnya kosong." },
  c: { benar: true, pesan: "Susunan C memang jaring-jaring kubus — pola 2-3-1. Saat dilipat, semua persegi menempati sisi yang berbeda dan kubusnya tertutup sempurna." },
  d: { benar: false, pesan: "Susunan D bukan jaring-jaring kubus: blok 2 × 2-nya membuat dua persegi memperebutkan satu posisi sisi yang sama saat dilipat, sehingga ada sisi yang bertumpuk dan ada sisi kubus yang kosong." }
};

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
        u.textContent = "Pilihan pollingmu sudah tersimpan. Di Sub-bab 3 kamu akan membongkar susunan persegi sungguhan lewat Uji Lipat!";
      }
      b.addEventListener("click", function () {
        document.querySelectorAll("#polling .opsi").forEach(function (x) { x.classList.remove("terpilih"); });
        b.classList.add("terpilih");
        simpan("poll", b.getAttribute("data-poll"));
        var u = $("polling-umpan");
        u.className = "umpan info tampil";
        u.textContent = "Tersimpan! Sekarang tulis tebakan awalmu di bawah — berapa persegi yang menyusun jaring-jaring kubus?";
      });
    });

    function umpanTebakan(n) {
      var u = $("tebakan-umpan");
      u.className = "umpan info tampil";
      u.textContent = n === 6
        ? "Tebakanmu tepat! Jaring-jaring kubus memang tersusun dari 6 persegi — sama banyak dengan sisi kubus. Di Sub-bab 3 kamu akan melihat pola-polanya."
        : "Tersimpan! Faktanya, jaring-jaring kubus tersusun dari 6 persegi — tepat sama dengan banyak sisi kubus. Tebakanmu tadi " + n + ". Kita pelajari pola-polanya di Sub-bab 3.";
    }
    var tebakan = baca("guess", null);
    if (tebakan) {
      $("tebak-persegi").value = tebakan.persegi;
      tampilTersimpan($("tebakan-tersimpan"));
      umpanTebakan(tebakan.persegi);
    }
    $("simpan-tebakan").addEventListener("click", function () {
      var n = parseFloat($("tebak-persegi").value);
      if (isNaN(n)) { alert("Isi dulu tebakan banyak perseginya, ya."); return; }
      simpan("guess", { persegi: n });
      tampilTersimpan($("tebakan-tersimpan"));
      umpanTebakan(n);
    });

    /* ---------- Sub-bab 2: prasyarat ---------- */
    buatKelompokSoal($("prasyarat-wadah"), PRASYARAT, "prasyarat", $("prasyarat-skor"), "Skor prasyarat", false, true);

    /* ---------- Sub-bab 3: Uji Lipat ---------- */
    var ujiTersimpan = baca("ujilipat", {});
    document.querySelectorAll(".btn-uji").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var kunci = btn.getAttribute("data-uji");
        var nilai = btn.getAttribute("data-nilai") === "true";
        ujiTersimpan[kunci] = nilai;
        simpan("ujilipat", ujiTersimpan);
        warnaiUji(kunci);
      });
    });
    function warnaiUji(kunci) {
      var spec = UJI_LIPAT[kunci];
      var pilihan = ujiTersimpan[kunci];
      var umpan = $("uji-umpan-" + kunci);
      document.querySelectorAll('.btn-uji[data-uji="' + kunci + '"]').forEach(function (b) {
        var nilai = b.getAttribute("data-nilai") === "true";
        var sudahBenar = pilihan !== undefined && pilihan === spec.benar;
        b.disabled = sudahBenar || (pilihan !== undefined && nilai === pilihan && nilai !== spec.benar);
        b.classList.toggle("benar", pilihan !== undefined && nilai === spec.benar);
        b.classList.toggle("salah", pilihan !== undefined && nilai === pilihan && nilai !== spec.benar);
      });
      if (pilihan !== undefined && umpan) {
        var tepat = pilihan === spec.benar;
        umpan.className = "umpan tampil " + (tepat ? "ok" : "no");
        umpan.textContent = (tepat ? "✓ Tepat! " : "✗ Belum tepat. ") + spec.pesan + (tepat ? "" : " Coba nilai lagi susunan ini.");
      }
    }
    Object.keys(UJI_LIPAT).forEach(function (k) { warnaiUji(k); });

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

    /* ---------- Sub-bab 4: pasangkan bangun ---------- */
    buatKelompokSoal($("pasangkan-wadah"), PASANGKAN, "pasangkan", $("pasangkan-skor"), "Skor pasangkan", false, true);

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

    /* ---------- Sub-bab 7: proyek ---------- */
    var kolomProyek = ["bangun", "ukuran", "susunan", "pasangan"];
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
    PASANGKAN: PASANGKAN,
    KUIS: KUIS,
    TANTANGAN: TANTANGAN,
    APLIKASI_CEK: APLIKASI_CEK,
    UJI_LIPAT: UJI_LIPAT
  };
}
