document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
  
    function autoSlide() {
      slider.appendChild(slider.firstElementChild.cloneNode(true));
      slider.removeChild(slider.firstElementChild);
    }
  
    let slideInterval = setInterval(autoSlide, 3000); // Slide every 3 seconds
  
    rightBtn.addEventListener("click", () => {
      autoSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(autoSlide, 3000);
    });
  
    leftBtn.addEventListener("click", () => {
      const lastCard = slider.lastElementChild.cloneNode(true);
      slider.insertBefore(lastCard, slider.firstElementChild);
      slider.removeChild(slider.lastElementChild);
      clearInterval(slideInterval);
      slideInterval = setInterval(autoSlide, 3000);
    });
  });
  