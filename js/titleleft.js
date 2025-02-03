checkScroll();
window.addEventListener("scroll", checkScroll);

function checkScroll() {
  const element = document.querySelector(".half-circle-wrapper");
  const OffsetTop = element.offsetTop;
  const windowScrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  if (windowScrollY + windowHeight > OffsetTop) {
    document
      .querySelector(".half-circle-text")
      .classList.add("start-animation");
  }
}
