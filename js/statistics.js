// Statistics 
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    
    counters.forEach(counter => {
      counter.innerText = "0";
      
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 50);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCounter();
    });
  });
  