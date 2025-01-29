document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star-rating span");
    const options = document.querySelectorAll(".option");
  
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        stars.forEach((s) => s.classList.remove("selected"));
        star.classList.add("selected");
      });
    });
  
    options.forEach((option) => {
      option.addEventListener("click", () => {
        option.classList.toggle("active");
        option.style.backgroundColor = option.classList.contains("active") ? "#d0d0d0" : "#f0f0f0";
      });
    });
  
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", () => {
      alert("Feedback submitted. Thank you!");
    });
  });