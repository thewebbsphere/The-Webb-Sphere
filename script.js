// Removed image-card functionality
function adjustLayout() {
    const mainSection = document.querySelector('.main-section');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');

    if (window.innerWidth <= 768) {
        // Move rightSide to the top
        mainSection.insertBefore(rightSide, leftSide);

        // Hide leftSide content
        leftSide.style.display = 'none';
    } else {
        // Revert to original order if screen is larger
        if (mainSection.firstChild !== leftSide) {
            mainSection.insertBefore(leftSide, rightSide);
        }

        // Show leftSide content
        leftSide.style.display = 'grid';
    }
}

// Remove scroll-triggered animation for About Section
function handleScroll() {
    const aboutSection = document.querySelector('.about-section');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
    } else {
        aboutSection.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleScroll);

// Footer fade-in animation on scroll
function handleFooterVisibility() {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;
    const rect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight - 40) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
}
window.addEventListener('scroll', handleFooterVisibility);
window.addEventListener('load', handleFooterVisibility);

// Adjust window.onload to remove stacking effect logic
window.onload = () => {
    adjustLayout();
};
window.addEventListener('resize', adjustLayout);