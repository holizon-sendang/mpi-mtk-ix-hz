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

/* ================= SIMULASI LIPATAN 3D (Eksplorasi Uji Lipat) =================
   Setiap susunan dilipat mengikuti pohon sambungan (BFS) dari sel akar:
   tiap sel anak berputar pada engsel rusuk bersama dengan sudut yang sama.
   Geometri lipatannya sama dengan yang dipakai memverifikasi keabsahan
   jaring-jaring ini: susunan valid menutup menjadi kubus, susunan tidak
   valid memperlihatkan sisi yang bertumpuk dan sisi kubus yang kosong. */
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var SIM3D = {
      a: { cells: [[0, 0], [1, 0], [2, 0], [3, 0], [1, 1], [1, -1]], root: 1, valid: true,
           pesanJadi: "✓ Terbentuk kubus tertutup — keenam persegi menempati sisi yang berbeda-beda." },
      b: { cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, 1]], root: 2, valid: false,
           pesanJadi: "✗ Perhatikan hasil akhirnya: ada persegi yang bertumpuk menempati posisi yang sama (berwarna merah — putar gambarnya untuk melihatnya), dan ada sisi kubus yang kosong. Itulah sebabnya Susunan B bukan jaring-jaring kubus." },
      c: { cells: [[0, 1], [1, 1], [2, 1], [3, 1], [0, 0], [1, 2]], root: 1, valid: true,
           pesanJadi: "✓ Terbentuk kubus tertutup — pola 2-3-1 ini memang jaring-jaring kubus." },
      d: { cells: [[0, 1], [1, 1], [0, 0], [1, 0], [2, 0], [3, 0]], root: 2, valid: false,
           pesanJadi: "✗ Perhatikan hasil akhirnya: ada persegi yang bertumpuk memperebutkan satu posisi sisi (berwarna merah), dan ada sisi kubus yang kosong. Itulah sebabnya Susunan D bukan jaring-jaring kubus." }
    };
    var PESAN_AWAL = "Klik “Lipat Jadi Kubus” atau geser sudut lipatannya. Seret gambar untuk memutar pandangan.";

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

    function bangunPohon(spec) {
      var peta = {};
      spec.cells.forEach(function (sel, i) { peta[sel[0] + "," + sel[1]] = i; });
      var induk = {};
      induk[spec.root] = -1;
      var antre = [spec.root];
      var urut = [spec.root];
      while (antre.length) {
        var i = antre.shift();
        var sel = spec.cells[i];
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (dd) {
          var k = (sel[0] + dd[0]) + "," + (sel[1] + dd[1]);
          if (k in peta) {
            var j = peta[k];
            if (!(j in induk)) { induk[j] = i; antre.push(j); urut.push(j); }
          }
        });
      }
      return { induk: induk, urut: urut };
    }

    function hitungBingkai(spec, pohon, theta) {
      var hasil = {};
      var akar = spec.cells[spec.root];
      hasil[spec.root] = { c: [akar[0], akar[1], 0], R: [1, 0, 0], U: [0, 1, 0], N: [0, 0, 1] };
      pohon.urut.forEach(function (i) {
        if (i === spec.root) { return; }
        var p = pohon.induk[i];
        var bp = hasil[p];
        var sel = spec.cells[i];
        var selp = spec.cells[p];
        var d = vAdd(vScale(bp.R, sel[0] - selp[0]), vScale(bp.U, sel[1] - selp[1]));
        var sumbu = vCross(bp.N, d);
        var tengah = vAdd(bp.c, vScale(d, 0.5));
        var geser = rotSumbu(vScale(d, 0.5), sumbu, theta);
        hasil[i] = {
          c: vAdd(tengah, geser),
          R: rotSumbu(bp.R, sumbu, theta),
          U: rotSumbu(bp.U, sumbu, theta),
          N: rotSumbu(bp.N, sumbu, theta)
        };
      });
      return hasil;
    }

    document.querySelectorAll(".sim3d-kanvas").forEach(function (kanvas) {
      var kunci = kanvas.getAttribute("data-net");
      var spec = SIM3D[kunci];
      if (!spec) { return; }
      var ctx = kanvas.getContext("2d");
      var pohon = bangunPohon(spec);
      var xs = spec.cells.map(function (s) { return s[0]; });
      var ys = spec.cells.map(function (s) { return s[1]; });
      var geserPusat = [-(Math.min.apply(null, xs) + Math.max.apply(null, xs)) / 2,
                        -(Math.min.apply(null, ys) + Math.max.apply(null, ys)) / 2, 0];
      var lebarSel = Math.max.apply(null, xs) - Math.min.apply(null, xs) + 1;
      var skala = Math.min(110, 600 / lebarSel);
      // Sel yang bertabrakan pada lipatan penuh (khusus susunan tidak valid):
      // dua sel menempati slot sisi kubus yang sama (pusat + normal sama pada 90°).
      var tabrak = {};
      (function () {
        var b90 = hitungBingkai(spec, pohon, Math.PI / 2);
        var slot = {};
        spec.cells.forEach(function (sel, i) {
          var b = b90[i];
          var pus = vAdd(b.c, b.N);
          var k = pus.map(function (v) { return Math.round(v * 100); }).join(",");
          if (k in slot) { tabrak[i] = true; tabrak[slot[k]] = true; }
          else { slot[k] = i; }
        });
      })();
      var st = { theta: 0, target: 0, yaw: -0.42, pitch: 0.34, raf: 0 };
      var tombol = document.querySelector('.btn-lipat[data-net="' + kunci + '"]');
      var geserEl = document.querySelector('.sim3d-geser[data-net="' + kunci + '"]');
      var statusEl = document.querySelector('.sim3d-status[data-net="' + kunci + '"]');
      if (statusEl) { statusEl.textContent = PESAN_AWAL; }

      function perbaruiStatus() {
        if (!statusEl) { return; }
        if (st.theta >= 89.5) { statusEl.textContent = spec.pesanJadi; }
        else if (st.theta <= 0.5) { statusEl.textContent = PESAN_AWAL; }
        else { statusEl.textContent = "Sedang melipat… sudut " + Math.round(st.theta) + "° dari 90°."; }
        if (tombol) {
          tombol.textContent = st.target >= 90 ? "↺ Buka Lagi" : "▶ Lipat Jadi Kubus";
        }
      }

      function gambar() {
        var W = kanvas.width, H = kanvas.height;
        ctx.clearRect(0, 0, W, H);
        var theta = st.theta * Math.PI / 180;
        var bingkai = hitungBingkai(spec, pohon, theta);
        function putar(v) {
          return rotSumbu(rotSumbu(v, [0, 1, 0], st.yaw), [1, 0, 0], st.pitch);
        }
        var wajah = [];
        spec.cells.forEach(function (sel, i) {
          var b = bingkai[i];
          var c = putar(vAdd(b.c, geserPusat));
          var R = putar(b.R), U = putar(b.U), N = putar(b.N);
          var sudut = [];
          [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]].forEach(function (k) {
            var titik = vAdd(c, vAdd(vScale(R, k[0]), vScale(U, k[1])));
            sudut.push([W / 2 + titik[0] * skala, H / 2 - titik[1] * skala]);
          });
          wajah.push({ sudut: sudut, dalam: c[2], nz: N[2], idx: i, tabrak: !!tabrak[i] });
        });
        wajah.sort(function (p, q) { return (p.dalam + p.idx * 0.002) - (q.dalam + q.idx * 0.002); });
        var sudutDerajat = st.theta;
        wajah.forEach(function (w) {
          var t = (w.nz + 1) / 2;
          var r = Math.round(147 + (219 - 147) * t);
          var g = Math.round(197 + (234 - 197) * t);
          var b = Math.round(253 + (254 - 253) * t);
          var garis = "#1E3A8A";
          if (w.tabrak && sudutDerajat > 55) {
            // Sisi yang bertumpuk diwarnai merah, makin jelas menjelang lipatan penuh.
            var f = Math.min(1, (sudutDerajat - 55) / 35);
            var rr = Math.round(220 + (254 - 220) * t);
            var gg = Math.round(90 + (202 - 90) * t);
            var bb = Math.round(90 + (202 - 90) * t);
            r = Math.round(r + (rr - r) * f);
            g = Math.round(g + (gg - g) * f);
            b = Math.round(b + (bb - b) * f);
            if (f > 0.6) { garis = "#B91C1C"; }
          }
          ctx.beginPath();
          w.sudut.forEach(function (s, i) { if (i === 0) { ctx.moveTo(s[0], s[1]); } else { ctx.lineTo(s[0], s[1]); } });
          ctx.closePath();
          ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",0.88)";
          ctx.fill();
          ctx.strokeStyle = garis;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        });
      }

      function animasi() {
        cancelAnimationFrame(st.raf);
        var dari = st.theta, ke = st.target, t0 = null;
        function langkah(ts) {
          if (!t0) { t0 = ts; }
          var p = Math.min(1, (ts - t0) / 1500);
          var e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          st.theta = dari + (ke - dari) * e;
          if (geserEl) { geserEl.value = st.theta; }
          gambar();
          perbaruiStatus();
          if (p < 1) { st.raf = requestAnimationFrame(langkah); }
        }
        st.raf = requestAnimationFrame(langkah);
      }

      if (tombol) {
        tombol.addEventListener("click", function () {
          st.target = st.target >= 90 ? 0 : 90;
          perbaruiStatus();
          animasi();
        });
      }
      if (geserEl) {
        geserEl.addEventListener("input", function () {
          cancelAnimationFrame(st.raf);
          st.theta = parseFloat(geserEl.value);
          st.target = st.theta >= 89.5 ? 90 : 0;
          gambar();
          perbaruiStatus();
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
        gambar();
      });
      ["pointerup", "pointercancel", "pointerleave"].forEach(function (nama) {
        kanvas.addEventListener(nama, function () { seret = null; });
      });

      gambar();
      perbaruiStatus();
    });
  });
}

/* ================= SIMULASI LIPATAN 3D BANGUN LAIN (Sub-bab 4) =================
   Mesin lipat umum untuk sisi berbentuk poligon (persegi panjang & segitiga).
   Setiap sisi anak berputar pada engsel rusuk bersamanya dengan sudut khas
   bangunnya: balok semua 90°; prisma mengikuti sudut segitiganya
   (126,87° dan 106,26°, tutup 90°); limas 126,87° sampai keempat puncak
   segitiga bertemu di satu titik. Semua sudut dan titik-temu sudah
   diverifikasi numerik sebelum modul ini dibangun. */
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    function rect(x0, y0, x1, y1) { return [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]; }

    var SIM3DB = {
      balok: {
        pesanJadi: "✓ Terbentuk balok tertutup — perhatikan: sisi yang berhadapan selalu sama ukurannya (p × t dengan p × t, l × t dengan l × t, dan kedua tutup p × l berwarna kuning).",
        faces: [
          { poly: rect(0, 0, 3, 1.6), ref: [1.5, 0.8], parent: -1 },
          { poly: rect(3, 0, 5, 1.6), ref: [4, 0.8], parent: 0, dir: [1, 0], pHalf: 1.5, maxAng: 90 },
          { poly: rect(5, 0, 8, 1.6), ref: [6.5, 0.8], parent: 1, dir: [1, 0], pHalf: 1.0, maxAng: 90 },
          { poly: rect(8, 0, 10, 1.6), ref: [9, 0.8], parent: 2, dir: [1, 0], pHalf: 1.5, maxAng: 90 },
          { poly: rect(0, 1.6, 3, 3.6), ref: [1.5, 2.6], parent: 0, dir: [0, 1], pHalf: 0.8, maxAng: 90, amber: true },
          { poly: rect(0, -2, 3, 0), ref: [1.5, -1], parent: 0, dir: [0, -1], pHalf: 0.8, maxAng: 90, amber: true }
        ]
      },
      prisma: {
        pesanJadi: "✓ Terbentuk prisma segitiga tertutup — ketiga persegi panjang melingkungi sisi segitiga, dan kedua segitiga kuning menjadi alas dan tutup yang kongruen.",
        faces: [
          { poly: rect(0, 0, 2.4, 3), ref: [1.2, 1.5], parent: -1 },
          { poly: rect(2.4, 0, 4.4, 3), ref: [3.4, 1.5], parent: 0, dir: [1, 0], pHalf: 1.2, maxAng: 126.8699 },
          { poly: rect(4.4, 0, 6.4, 3), ref: [5.4, 1.5], parent: 1, dir: [1, 0], pHalf: 1.0, maxAng: 106.2602 },
          { poly: [[2.4, 3], [4.4, 3], [3.84, 4.92]], ref: [3.547, 3.64], parent: 1, dir: [0, 1], pHalf: 1.5, maxAng: 90, amber: true },
          { poly: [[0, 0], [2.4, 0], [1.2, -1.6]], ref: [1.2, -0.533], parent: 0, dir: [0, -1], pHalf: 1.5, maxAng: 90, amber: true }
        ]
      },
      limas: {
        pesanJadi: "✓ Terbentuk limas segiempat — keempat segitiga kuning naik dan bertemu tepat di satu titik puncak di atas pusat persegi.",
        faces: [
          { poly: rect(0, 0, 2.4, 2.4), ref: [1.2, 1.2], parent: -1 },
          { poly: [[0, 2.4], [2.4, 2.4], [1.2, 4.4]], ref: [1.2, 3.067], parent: 0, dir: [0, 1], pHalf: 1.2, maxAng: 126.8699, amber: true },
          { poly: [[0, 0], [2.4, 0], [1.2, -2.0]], ref: [1.2, -0.667], parent: 0, dir: [0, -1], pHalf: 1.2, maxAng: 126.8699, amber: true },
          { poly: [[2.4, 0], [2.4, 2.4], [4.4, 1.2]], ref: [3.067, 1.2], parent: 0, dir: [1, 0], pHalf: 1.2, maxAng: 126.8699, amber: true },
          { poly: [[0, 0], [0, 2.4], [-2.0, 1.2]], ref: [-0.667, 1.2], parent: 0, dir: [-1, 0], pHalf: 1.2, maxAng: 126.8699, amber: true }
        ]
      }
    };
    var PESAN_AWAL_B = "Klik tombol lipat atau geser proses lipatannya. Seret gambar untuk memutar pandangan.";

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

    function hitungBingkaiB(spec, prog) {
      var hasil = [];
      spec.faces.forEach(function (f, i) {
        if (f.parent < 0) {
          hasil[i] = { c: [f.ref[0], f.ref[1], 0], R: [1, 0, 0], U: [0, 1, 0], N: [0, 0, 1] };
          return;
        }
        var pf = spec.faces[f.parent];
        var bp = hasil[f.parent];
        var d = vAdd(vScale(bp.R, f.dir[0]), vScale(bp.U, f.dir[1]));
        var sumbu = vCross(bp.N, d);
        var ang = f.maxAng * prog * Math.PI / 180;
        var hinge = vAdd(bp.c, vScale(d, f.pHalf));
        var hingeNet = [pf.ref[0] + f.dir[0] * f.pHalf, pf.ref[1] + f.dir[1] * f.pHalf];
        var offNet = vAdd(vScale(bp.R, f.ref[0] - hingeNet[0]), vScale(bp.U, f.ref[1] - hingeNet[1]));
        var off = rotSumbu(offNet, sumbu, ang);
        hasil[i] = {
          c: vAdd(hinge, off),
          R: rotSumbu(bp.R, sumbu, ang),
          U: rotSumbu(bp.U, sumbu, ang),
          N: rotSumbu(bp.N, sumbu, ang)
        };
      });
      return hasil;
    }

    document.querySelectorAll(".sim3d-kanvas-b").forEach(function (kanvas) {
      var kunci = kanvas.getAttribute("data-bangun");
      var spec = SIM3DB[kunci];
      if (!spec) { return; }
      var ctx = kanvas.getContext("2d");
      var semuaX = [], semuaY = [];
      spec.faces.forEach(function (f) {
        f.poly.forEach(function (titik) { semuaX.push(titik[0]); semuaY.push(titik[1]); });
      });
      var geserPusat = [-(Math.min.apply(null, semuaX) + Math.max.apply(null, semuaX)) / 2,
                        -(Math.min.apply(null, semuaY) + Math.max.apply(null, semuaY)) / 2, 0];
      var lebarNet = Math.max.apply(null, semuaX) - Math.min.apply(null, semuaX);
      var tinggiNet = Math.max.apply(null, semuaY) - Math.min.apply(null, semuaY);
      var skalaDasar = Math.min(600 / lebarNet, 420 / tinggiNet);
      var st = { prog: 0, target: 0, yaw: -0.5, pitch: 0.38, raf: 0 };
      if (kunci === "limas") { st.yaw = 2.85; st.pitch = 0.45; }
      var tombol = document.querySelector('.btn-lipat[data-bangun="' + kunci + '"]');
      var labelLipat = tombol ? tombol.textContent : "";
      var geserEl = document.querySelector('.sim3d-geser-b[data-bangun="' + kunci + '"]');
      var statusEl = document.querySelector('.sim3d-status-b[data-bangun="' + kunci + '"]');
      if (statusEl) { statusEl.textContent = PESAN_AWAL_B; }

      function perbaruiStatus() {
        if (!statusEl) { return; }
        if (st.prog >= 0.995) { statusEl.textContent = spec.pesanJadi; }
        else if (st.prog <= 0.005) { statusEl.textContent = PESAN_AWAL_B; }
        else { statusEl.textContent = "Sedang melipat… " + Math.round(st.prog * 100) + "% menuju bangun utuh."; }
        if (tombol) { tombol.textContent = st.target >= 1 ? "↺ Buka Lagi" : labelLipat; }
      }

      function gambar() {
        var W = kanvas.width, H = kanvas.height;
        ctx.clearRect(0, 0, W, H);
        var bingkai = hitungBingkaiB(spec, st.prog);
        function putar(v) {
          return rotSumbu(rotSumbu(v, [0, 1, 0], st.yaw), [1, 0, 0], st.pitch);
        }
        var mentah = [];
        var minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
        spec.faces.forEach(function (f, i) {
          var b = bingkai[i];
          var N = putar(b.N);
          var sudut = [];
          var zRata = 0;
          f.poly.forEach(function (titik) {
            var dunia = vAdd(vAdd(b.c, geserPusat), vAdd(vScale(b.R, titik[0] - f.ref[0]), vScale(b.U, titik[1] - f.ref[1])));
            var pv = putar(dunia);
            sudut.push(pv);
            zRata += pv[2];
            if (pv[0] < minX) { minX = pv[0]; }
            if (pv[0] > maxX) { maxX = pv[0]; }
            if (pv[1] < minY) { minY = pv[1]; }
            if (pv[1] > maxY) { maxY = pv[1]; }
          });
          mentah.push({ sudut: sudut, dalam: zRata / f.poly.length, nz: N[2], idx: i, amber: !!f.amber });
        });
        // Pas-kan & pusatkan hasil render saat ini ke kanvas pada setiap sudut lipatan.
        var rentangX = Math.max(0.001, maxX - minX);
        var rentangY = Math.max(0.001, maxY - minY);
        var skala = Math.min((W - 48) / rentangX, (H - 48) / rentangY, skalaDasar * 2.4);
        var pusX = (minX + maxX) / 2, pusY = (minY + maxY) / 2;
        var wajah = mentah.map(function (w) {
          return {
            sudut: w.sudut.map(function (pv) {
              return [W / 2 + (pv[0] - pusX) * skala, H / 2 - (pv[1] - pusY) * skala];
            }),
            dalam: w.dalam, nz: w.nz, idx: w.idx, amber: w.amber
          };
        });
        wajah.sort(function (p, q) { return (p.dalam + p.idx * 0.002) - (q.dalam + q.idx * 0.002); });
        wajah.forEach(function (w) {
          var t = (w.nz + 1) / 2;
          var r, g, b, garis;
          if (w.amber) {
            r = Math.round(217 + (254 - 217) * t);
            g = Math.round(119 + (243 - 119) * t);
            b = Math.round(6 + (199 - 6) * t);
            garis = "#92400E";
          } else {
            r = Math.round(147 + (219 - 147) * t);
            g = Math.round(197 + (234 - 197) * t);
            b = Math.round(253 + (254 - 253) * t);
            garis = "#1E3A8A";
          }
          ctx.beginPath();
          w.sudut.forEach(function (s, i) { if (i === 0) { ctx.moveTo(s[0], s[1]); } else { ctx.lineTo(s[0], s[1]); } });
          ctx.closePath();
          ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",0.92)";
          ctx.fill();
          ctx.strokeStyle = garis;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        });
      }

      function animasi() {
        cancelAnimationFrame(st.raf);
        var dari = st.prog, ke = st.target, t0 = null;
        function langkah(ts) {
          if (!t0) { t0 = ts; }
          var p = Math.min(1, (ts - t0) / 1800);
          var e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          st.prog = dari + (ke - dari) * e;
          if (geserEl) { geserEl.value = st.prog * 100; }
          gambar();
          perbaruiStatus();
          if (p < 1) { st.raf = requestAnimationFrame(langkah); }
        }
        st.raf = requestAnimationFrame(langkah);
      }

      if (tombol) {
        tombol.addEventListener("click", function () {
          st.target = st.target >= 1 ? 0 : 1;
          perbaruiStatus();
          animasi();
        });
      }
      if (geserEl) {
        geserEl.addEventListener("input", function () {
          cancelAnimationFrame(st.raf);
          st.prog = parseFloat(geserEl.value) / 100;
          st.target = st.prog >= 0.995 ? 1 : 0;
          gambar();
          perbaruiStatus();
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
        gambar();
      });
      ["pointerup", "pointercancel", "pointerleave"].forEach(function (nama) {
        kanvas.addEventListener(nama, function () { seret = null; });
      });

      gambar();
      perbaruiStatus();
    });
  });
}
