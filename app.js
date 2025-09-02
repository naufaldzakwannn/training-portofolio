const scriptURL = "https://script.google.com/macros/s/AKfycbx3iOB2O5JSmF7o-OnZ6Q4JNk6VAsnN7iCwD2ZkGLYkkjmrDomqJuNR9OqAiGT_rvdH/exec";
const form = document.forms["contact"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const dAlert = document.querySelector(".d-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Ambil semua input
  const nama = form["nama"].value.trim();
  const email = form["email"].value.trim();
  const pesan = form["pesan"].value.trim();

  // Validasi input kosong
  if (nama === "" || email === "" || pesan === "") {
    // Tampilkan alert error
    dAlert.classList.remove("d-none");

    // Sembunyikan alert setelah 5 detik (opsional)
    setTimeout(() => {
      dAlert.classList.add("d-none");
    }, 5000);

    return; // Hentikan proses kirim
  }

  // Input valid: lanjut kirim
  dAlert.classList.add("d-none"); // Pastikan alert disembunyikan

  // ketika tombol submit diklik
  // tampilkan tombol loading dan hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // Tampilkan Alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);

      // Sembunyikan alert sukses setelah 5 detik (opsional)
      setTimeout(() => {
        myAlert.classList.add("d-none");
        console.log("Data Timeout");
      }, 5000);
    })
    .catch((error) => console.error("Error!", error.message));
});

AOS.init();

const audio = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
let isPlaying = false;

musicToggle.addEventListener("click", function (e) {
  e.preventDefault();
  if (isPlaying) {
    audio.pause();
    musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    musicToggle.title = "Play Music";
  } else {
    audio.play();
    musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    musicToggle.title = "Pause Music";
  }
  isPlaying = !isPlaying;
});
