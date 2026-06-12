const openBtn = document.querySelector('.header__open-mobile-menu');
const closeBtn = document.querySelector('.close__mobile-menu');
const mobileMenu = document.querySelector('.mobile__menu');
const mobileLinks = document.querySelectorAll('.mobile__nav-link');

openBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});