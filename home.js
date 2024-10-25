// Mendapatkan elemen tombol menu dan menu
const tombolMenu = document.getElementById('tombol-menu');
const navbarMenu = document.querySelector('.navbar .menu');

// Fungsi untuk toggle (buka/tutup) menu
tombolMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
});
