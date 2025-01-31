let index = 0;
const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function getCardsPerView() {
    if (window.innerWidth <= 768) {
        return 1; 
    } else if (window.innerWidth <= 1024) {
        return 2; 
    } else {
        return 3; 
    }
}

function updateSlidePosition() {
    const cardsPerView = getCardsPerView();
    const cardWidth = slider.clientWidth / cardsPerView;
    const newTransformValue = -index * cardWidth + "px";
    slider.style.transform = `translateX(${newTransformValue})`;
}

// Auto-slide every 3 seconds
function autoSlide() {
    const cardsPerView = getCardsPerView();
    const totalSlides = Math.ceil(totalCards / cardsPerView);
    index = (index + 1) % totalSlides; // Loop smoothly to the next slide
    updateSlidePosition();
}

let slideInterval = setInterval(autoSlide, 3000); // Slide every 3 seconds

document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    // Update the slider position when the right button is clicked
    rightBtn.addEventListener("click", () => {
        autoSlide();
        clearInterval(slideInterval);  // Reset the interval when user clicks to move the slider
        slideInterval = setInterval(autoSlide, 3000);  // Restart the auto sliding
    });

    // Update the slider position when the left button is clicked
    leftBtn.addEventListener("click", () => {
        const totalSlides = Math.ceil(totalCards / getCardsPerView());
        index = (index - 1 + totalSlides) % totalSlides; // Loop smoothly back
        updateSlidePosition();
        clearInterval(slideInterval);  // Reset the interval when user clicks to move the slider
        slideInterval = setInterval(autoSlide, 3000);  // Restart the auto sliding
    });
});

// Update on window resize
window.addEventListener("resize", updateSlidePosition);
