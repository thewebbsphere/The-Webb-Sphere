// filepath: /home/Cl1nt/Documents/GitHub/The-Webb-Sphere/script.js
function adjustLayout() {
    const mainSection = document.querySelector('.main-section');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    let imageCard = document.querySelector('.image-card'); // Get existing or null

    if (window.innerWidth <= 768) {
        // Move rightSide to the top
        mainSection.insertBefore(rightSide, leftSide);

        // Create imageCard if it doesn't exist
        if (!imageCard) {
            imageCard = document.createElement('div');
            imageCard.classList.add('image-card');

            // Move small images into the imageCard
            const smallImage1 = leftSide.querySelector('.right-column img:nth-child(1)');
            const smallImage2 = leftSide.querySelector('.right-column img:nth-child(2)');

            imageCard.appendChild(smallImage1);
            imageCard.appendChild(smallImage2);

            rightSide.appendChild(imageCard); // Append to rightSide
        }

        // Hide leftSide content
        leftSide.style.display = 'none';
    } else {
        // Revert to original order if screen is larger
        if (mainSection.firstChild !== leftSide) {
            mainSection.insertBefore(leftSide, rightSide);
        }

        // Show leftSide content
        leftSide.style.display = 'grid';

        // Remove imageCard if it exists
        if (imageCard) {
            // Move images back to leftSide
            const smallImage1 = imageCard.querySelector('img:nth-child(1)');
            const smallImage2 = imageCard.querySelector('img:nth-child(2)');

            const rightColumn = leftSide.querySelector('.right-column');
            rightColumn.appendChild(smallImage1);
            rightColumn.appendChild(smallImage2);

            imageCard.remove();
        }
    }
}

function startImageSlider() {
    const imageCard = document.querySelector('.image-card');
    if (!imageCard) return; // Exit if imageCard doesn't exist

    const images = imageCard.querySelectorAll('img');
    let currentImageIndex = 0;

    setInterval(() => {
        // Remove active class from current image
        images[currentImageIndex].classList.remove('active');

        // Increment index or reset to 0
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Add active class to the next image
        images[currentImageIndex].classList.add('active');
    }, 3000); // Change image every 3 seconds
}

// Call this function after adjustLayout
window.onload = () => {
    adjustLayout();
    startImageSlider();
};
window.addEventListener('resize', adjustLayout);