
const tombolMenu = document.getElementById('tombol-menu');
const menu = document.querySelector('.menu');

tombolMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});