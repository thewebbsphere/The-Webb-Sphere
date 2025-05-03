document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    // Open Mobile Menu
    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    // Close Mobile Menu
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});