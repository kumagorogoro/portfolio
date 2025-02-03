const ham = document.querySelector(".ham");
const menuul = document.querySelector(".menu");
const cloud = document.querySelector(".cloud");
const span = document.querySelector(".hamwrapper span:nth-child(1)");
const span2 = document.querySelector(".hamwrapper span:nth-child(2)");
const span3 = document.querySelector(".hamwrapper span:nth-child(3)");



ham.addEventListener("click", function () {
  menuul.classList.toggle("open");
  cloud.classList.toggle("cloudopen");
  span.classList.toggle("close");
  span2.classList.toggle("none");
  span3.classList.toggle("close2");
});

window.addEventListener("click", function (e) {
  if (
    !ham.contains(e.target) &&
    !menuul.contains(e.target) &&
    !cloud.contains(e.target)
  ) {
    menuul.classList.remove("open"); 
    cloud.classList.remove("cloudopen");
    span.classList.remove("close");
    span2.classList.remove("none");
    span3.classList.remove("close2");
  }
});
