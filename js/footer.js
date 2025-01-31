document.addEventListener("DOMContentLoaded", function () {
    // Update Year Automatically
    document.getElementById("year").innerText = new Date().getFullYear();
  
    // Handle Partner Form Submission
    document.getElementById("partnerForm").addEventListener("submit", function (event) {
      event.preventDefault();
      
      const name = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
  
      if (name && email && phone) {
        alert(`Thank you, ${name}! Your details have been submitted.`);
        this.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  });
  