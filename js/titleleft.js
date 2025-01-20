window.addEventListener("scroll", checkScroll);
checkScroll();

function checkScroll() {
  const element = document.querySelector(".half-circle-wrapper");
  const position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document
      .querySelector(".half-circle-text")
      .classList.add("start-animation");
  }
}
