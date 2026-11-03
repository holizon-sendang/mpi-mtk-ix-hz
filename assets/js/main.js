/* MPI Matematika Kelas 9 — logika hub
   Pencarian/filter kartu modul + ringkasan progres modul aktif (A.7, G.5, P.1, P.2, dan P.3) dari localStorage.
   Kunci modul berawalan "mpi-mtk9-a7-" untuk A.7, "mpi-mtk9-g5-" untuk G.5, "mpi-mtk9-p1-" untuk P.1, "mpi-mtk9-p2-" untuk P.2, dan "mpi-mtk9-p3-" untuk P.3. */
(function () {
  "use strict";

  /* ---------- Pencarian & filter semester ---------- */
  var inputCari = document.getElementById("cari-modul");
  var pilihSemester = document.getElementById("filter-semester");
  var kartu = Array.prototype.slice.call(document.querySelectorAll(".kartu-modul[data-cari]"));
  var pesanKosong = document.getElementById("hasil-kosong");

  function terapkanFilter() {
    var kata = inputCari ? inputCari.value.trim().toLowerCase() : "";
    var sem = pilihSemester ? pilihSemester.value : "semua";
    var tampak = 0;
    kartu.forEach(function (k) {
      var cocokKata = !kata || k.getAttribute("data-cari").toLowerCase().indexOf(kata) !== -1;
      var cocokSem = sem === "semua" || k.getAttribute("data-semester") === sem;
      var tampil = cocokKata && cocokSem;
      k.style.display = tampil ? "" : "none";
      if (tampil) { tampak++; }
    });
    document.querySelectorAll(".judul-semester").forEach(function (judul) {
      var grup = judul.nextElementSibling;
      var ada = false;
      if (grup) {
        Array.prototype.forEach.call(grup.children, function (anak) {
          if (anak.style.display !== "none") { ada = true; }
        });
      }
      judul.style.display = ada ? "" : "none";
      if (grup) { grup.style.display = ada ? "" : "none"; }
    });
    if (pesanKosong) { pesanKosong.style.display = tampak === 0 ? "block" : "none"; }
  }

  if (inputCari) { inputCari.addEventListener("input", terapkanFilter); }
  if (pilihSemester) { pilihSemester.addEventListener("change", terapkanFilter); }

  /* ---------- Ringkasan progres modul aktif (A.7, G.5, P.1, P.2 & P.3) ---------- */
  function bacaJSON(kunci, bawaan) {
    try {
      var mentah = localStorage.getItem(kunci);
      return mentah ? JSON.parse(mentah) : bawaan;
    } catch (e) { return bawaan; }
  }

  var jumlahSub = 8;
  var MODUL_AKTIF = [
    { kode: "A.7", prefix: "mpi-mtk9-a7-", bar: "progres-a7-bar", teks: "progres-a7-teks" },
    { kode: "G.5", prefix: "mpi-mtk9-g5-", bar: "progres-g5-bar", teks: "progres-g5-teks" },
    { kode: "P.1", prefix: "mpi-mtk9-p1-", bar: "progres-p1-bar", teks: "progres-p1-teks" },
    { kode: "P.2", prefix: "mpi-mtk9-p2-", bar: "progres-p2-bar", teks: "progres-p2-teks" },
    { kode: "P.3", prefix: "mpi-mtk9-p3-", bar: "progres-p3-bar", teks: "progres-p3-teks" }
  ];

  var bagian = [];
  MODUL_AKTIF.forEach(function (m) {
    var dikunjungi = bacaJSON(m.prefix + "visited", []);
    var persen = Math.round((dikunjungi.length / jumlahSub) * 100);
    var skorKuis = localStorage.getItem(m.prefix + "quiz-best");
    var skorTantangan = localStorage.getItem(m.prefix + "tantangan-best");

    var elBar = document.getElementById(m.bar);
    var elTeks = document.getElementById(m.teks);
    if (elBar) { elBar.style.width = persen + "%"; }
    if (elTeks) {
      elTeks.textContent = dikunjungi.length === 0
        ? "Belum dimulai — ayo mulai dari Pemantik!"
        : "Kemajuan: " + dikunjungi.length + " dari " + jumlahSub + " sub-bab (" + persen + "%)";
    }

    bagian.push("Modul " + m.kode + ": <b>" + persen + "%</b> selesai (" + dikunjungi.length + "/8 sub-bab)");
    if (skorKuis !== null) { bagian.push("Skor kuis terbaik " + m.kode + ": <b>" + skorKuis + "/10</b>"); }
    if (skorTantangan !== null) { bagian.push("Skor tantangan terbaik " + m.kode + ": <b>" + skorTantangan + "/5</b>"); }
  });

  var elRingkasan = document.getElementById("ringkasan-progres");
  if (elRingkasan) { elRingkasan.innerHTML = bagian.join(" · "); }
})();
