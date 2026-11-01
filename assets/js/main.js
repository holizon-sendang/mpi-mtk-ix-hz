/* MPI Matematika Kelas 9 — logika hub
   Pencarian/filter kartu modul + ringkasan progres modul A.7 dari localStorage.
   Semua kunci modul A.7 berawalan "mpi-mtk9-a7-". */
(function () {
  "use strict";

  var PREFIX = "mpi-mtk9-a7-";

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

  /* ---------- Ringkasan progres A.7 ---------- */
  function bacaJSON(kunci, bawaan) {
    try {
      var mentah = localStorage.getItem(kunci);
      return mentah ? JSON.parse(mentah) : bawaan;
    } catch (e) { return bawaan; }
  }

  var dikunjungi = bacaJSON(PREFIX + "visited", []);
  var jumlahSub = 8;
  var persen = Math.round((dikunjungi.length / jumlahSub) * 100);
  var skorKuis = localStorage.getItem(PREFIX + "quiz-best");
  var skorTantangan = localStorage.getItem(PREFIX + "tantangan-best");

  var elBar = document.getElementById("progres-a7-bar");
  var elTeks = document.getElementById("progres-a7-teks");
  if (elBar) { elBar.style.width = persen + "%"; }
  if (elTeks) {
    elTeks.textContent = dikunjungi.length === 0
      ? "Belum dimulai — ayo mulai dari Pemantik!"
      : "Kemajuan: " + dikunjungi.length + " dari " + jumlahSub + " sub-bab (" + persen + "%)";
  }

  var elRingkasan = document.getElementById("ringkasan-progres");
  if (elRingkasan) {
    var bagian = [];
    bagian.push("Modul A.7: <b>" + persen + "%</b> selesai (" + dikunjungi.length + "/8 sub-bab)");
    if (skorKuis !== null) { bagian.push("Skor kuis terbaik: <b>" + skorKuis + "/10</b>"); }
    if (skorTantangan !== null) { bagian.push("Skor tantangan terbaik: <b>" + skorTantangan + "/5</b>"); }
    elRingkasan.innerHTML = bagian.join(" · ");
  }
})();
