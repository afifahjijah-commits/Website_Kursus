/* =====================================================================
   FITUR 1: DARK MODE DAN LIGHT MODE
   Konsep JS: DOM Selection, Event Listener, dan classList.toggle()
   ===================================================================== */
// Mengambil elemen tombol tema berdasarkan ID "theme"
const tombolTema = document.getElementById("theme");

// Menambahkan event ketika tombol tema diklik
tombolTema.addEventListener("click", function() {
    // Menambah atau menghapus class "dark-mode" pada tag <body>
    document.body.classList.toggle("dark-mode");

    // Kondisi IF-ELSE untuk mengubah tulisan pada tombol sesuai tema aktif
    if (document.body.classList.contains("dark-mode")) {
        tombolTema.textContent = "Mode Terang";
    } else {
        tombolTema.textContent = "Mode Gelap";
    }
});


/* =====================================================================
   FITUR 2: MENU NAVIGASI RESPONSIF (TOMBOL HAMBURGER)
   Konsep JS: Event Click dan Manipulasi Class DOM
   ===================================================================== */
// Mengambil elemen daftar menu dan tombol hamburger
const menu = document.getElementById("menu");
const tombolHamburger = document.getElementById("hamburger");

// Ketika tombol hamburger diklik, tampilkan atau sembunyikan menu
tombolHamburger.addEventListener("click", function() {
    menu.classList.toggle("active");
});


/* =====================================================================
   FITUR 3: PENCARIAN PROGRAM KURSUS
   Konsep JS: Variabel, Perulangan (forEach), Kondisi, dan includes()
   ===================================================================== */
function cariProgram() {
    // Mengambil teks yang diketik pengguna lalu mengubahnya menjadi huruf kecil
    let input = document.getElementById("cari").value.toLowerCase();

    // Mengambil semua kartu program kursus yang memiliki class "program-item"
    let daftarProgram = document.querySelectorAll(".program-item");

    // Melakukan perulangan untuk memeriksa setiap kartu program satu per satu
    daftarProgram.forEach(function(item) {
        // Mengambil seluruh teks di dalam kartu dan ubah ke huruf kecil
        let isiTeks = item.textContent.toLowerCase();

        // Mengecek apakah teks kartu mengandung kata kunci yang dicari
        if (isiTeks.includes(input)) {
            item.style.display = "flex"; // Tampilkan kartu jika cocok
        } else {
            item.style.display = "none"; // Sembunyikan kartu jika tidak cocok
        }
    });
}


/* =====================================================================
   FITUR 4: VALIDASI FORMULIR PENDAFTARAN KURSUS
   Konsep JS: Function, Form Event (preventDefault), dan Kondisi IF-ELSE
   ===================================================================== */
function validasiPendaftaran(event) {
    // Mencegah halaman melakukan reload otomatis saat tombol submit diklik
    event.preventDefault();

    // Mengambil nilai (value) dari setiap kolom input formulir
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let telepon = document.getElementById("telepon").value;
    let kursus = document.getElementById("pilihan-kursus").value;

    // Mengecek apakah ada kolom wajib yang masih kosong
    if (nama === "" || email === "" || telepon === "" || kursus === "") {
        alert("Peringatan: Harap lengkapi semua kolom yang bertanda bintang (*)!");
    } else {
        // Jika semua kolom terisi, tampilkan pesan konfirmasi pendaftaran
        alert("Terima kasih, " + nama + "! Pendaftaran Anda untuk program '" + kursus + "' berhasil divalidasi.");
        
        // Mengosongkan kembali formulir setelah berhasil
        document.getElementById("form-pendaftaran").reset();
    }
}


/* =====================================================================
   FITUR 5: GALERI FOTO INTERAKTIF (MODAL / POPUP)
   Konsep JS: querySelectorAll, Perulangan, dan Manipulasi Atribut DOM
   ===================================================================== */
// Mengambil elemen modal dan komponen di dalamnya
const modal = document.getElementById("modal-galeri");
const gambarBesar = document.getElementById("gambar-besar");
const captionGambar = document.getElementById("caption-gambar");
const tombolTutup = document.getElementById("tutup-modal");

// Mengambil semua gambar di galeri yang memiliki class "foto-galeri"
const semuaFoto = document.querySelectorAll(".foto-galeri");

// Memberikan event klik pada setiap foto galeri
semuaFoto.forEach(function(foto) {
    foto.addEventListener("click", function() {
        modal.style.display = "flex"; // Menampilkan modal popup
        gambarBesar.src = this.src; // Menyalin sumber gambar yang diklik ke modal
        captionGambar.textContent = this.alt; // Menampilkan teks alt sebagai keterangan
    });
});

// Menutup modal saat tombol silang (X) diklik
tombolTutup.addEventListener("click", function() {
    modal.style.display = "none";
});


/* =====================================================================
   FITUR 6: TOMBOL KEMBALI KE ATAS (BACK TO TOP)
   Konsep JS: Window Scroll Event dan window.scrollTo()
   ===================================================================== */
const tombolAtas = document.getElementById("top");

// Mendeteksi saat pengguna menggulir (scroll) halaman
window.addEventListener("scroll", function() {
    // Jika halaman digulir lebih dari 200px ke bawah, munculkan tombol
    if (window.scrollY > 200) {
        tombolAtas.style.display = "block";
    } else {
        tombolAtas.style.display = "none";
    }
});

// Ketika tombol diklik, gulir layar kembali ke posisi paling atas secara halus
tombolAtas.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =====================================================================
   FITUR 7: FAQ ACCORDION (BUKA-TUTUP JAWABAN PERTANYAAN)
   Konsep JS: Perulangan, Event Click, dan parentElement.classList.toggle()
   ===================================================================== */
// Mengambil semua tombol pertanyaan FAQ
const semuaPertanyaan = document.querySelectorAll(".faq-question");

semuaPertanyaan.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
        // Mengambil elemen pembungkus (.faq-item) dari tombol yang diklik
        const parentItem = this.parentElement;
        
        // Menambah/menghapus class "active" untuk membuka/menutup jawaban
        parentItem.classList.toggle("active");
    });
});


/* =====================================================================
   FITUR SAPAAN OTOMATIS & JAM DIGITAL REAL-TIME
   Konsep JS: Objek Date(), Kondisi Waktu, dan setInterval()
   ===================================================================== */
function perbaruiWaktu() {
    const sekarang = new Date(); // Mengambil waktu sistem saat ini
    const jam = sekarang.getHours();
    const menit = String(sekarang.getMinutes()).padStart(2, "0");
    const detik = String(sekarang.getSeconds()).padStart(2, "0");

    // Menentukan sapaan berdasarkan jam saat ini
    let sapaan = "Selamat Malam";
    if (jam >= 4 && jam < 11) {
        sapaan = "Selamat Pagi";
    } else if (jam >= 11 && jam < 15) {
        sapaan = "Selamat Siang";
    } else if (jam >= 15 && jam < 18) {
        sapaan = "Selamat Sore";
    }

    // Menampilkan sapaan dan jam digital ke elemen HTML
    const elemenSapaan = document.getElementById("sapaan-waktu");
    elemenSapaan.textContent = sapaan + " | Pukul " + jam + ":" + menit + ":" + detik + " WIB";
}

// Jalankan fungsi setiap 1000 milidetik (1 detik) agar jam terus berjalan
setInterval(perbaruiWaktu, 1000);
perbaruiWaktu(); // Panggil langsung saat halaman pertama kali dibuka