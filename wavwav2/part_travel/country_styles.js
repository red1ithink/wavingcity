let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", () => {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.opacity = 1;
});

nextButton.addEventListener("click", () => {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
});
