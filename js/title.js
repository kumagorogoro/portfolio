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
  const element2 = document.querySelector(".half-circle-wrapper2");
  const position2 = element2.getBoundingClientRect();
  if (position2.top < window.innerHeight && position2.bottom >= 0) {
    document
      .querySelector(".half-circle-text2")
      .classList.add("start-animation2");
  }
}

