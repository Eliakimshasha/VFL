document.addEventListener("DOMContentLoaded", function () {
    // Simulated Visitor Counter (Stored in Local Storage)
    let visitorCount = localStorage.getItem("visitorCount") || 100;
    document.getElementById("visitorCount").innerText = visitorCount;
    visitorCount++;
    localStorage.setItem("visitorCount", visitorCount);
  });
  