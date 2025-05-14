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

// Adjust window.onload to remove stacking effect logic
window.onload = () => {
    adjustLayout();
};
window.addEventListener('resize', adjustLayout);