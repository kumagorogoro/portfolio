const footer = document.querySelector("footer");
const images = document.querySelectorAll(".footer-container img");
let currentImageIndex = 0;
let isSlideshowRunning = false;
let intervalId = null;

function startSlideshow() {
  if (isSlideshowRunning) return;
  isSlideshowRunning = true;
  images[currentImageIndex].classList.add("active");
  intervalId = setInterval(() => {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
    if (currentImageIndex === images.length - 1) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 500);
}

function resetSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
  isSlideshowRunning = false;
  currentImageIndex = 0;
  images.forEach((image) => image.classList.remove("active"));
}
window.addEventListener("scroll", function () {
  const footerPosition = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (footerPosition < windowHeight && !isSlideshowRunning) {
    footer.classList.add("visible");
    startSlideshow();
  } else if (footerPosition > windowHeight) {
    footer.classList.remove("visible");
    resetSlideshow();
  }
});
