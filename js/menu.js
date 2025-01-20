const ham = document.querySelector(".ham");
const menuul = document.querySelector(".menu");
const cloud = document.querySelector(".cloud");
const span = document.querySelector(".hamwrapper span:nth-child(1)");
const span2 = document.querySelector(".hamwrapper span:nth-child(2)");
const span3 = document.querySelector(".hamwrapper span:nth-child(3)");

function menu() {
  menuul.classList.toggle("open");
  menuul.classList.remove("close");
  cloud.classList.toggle("cloudopen");
  cloud.classList.remove("cloudclose");
  span.classList.toggle("close");
  span2.classList.toggle("none");
  span3.classList.toggle("close2");
}

ham.addEventListener("click", menu);
window.addEventListener("click", function (e) {
  if (
    !ham.contains(e.target) &&
    !menuul.contains(e.target) &&
    !cloud.contains(e.target)
  ) {
    menuul.classList.remove("open");
    cloud.classList.remove("cloudopen");
    menuul.classList.add("close");
    cloud.classList.add("cloudclose");
    span.classList.remove("close");
    span2.classList.remove("none");
    span3.classList.remove("close2");
  }
});
