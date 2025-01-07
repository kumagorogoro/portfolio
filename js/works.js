function checkScroll() {
  const element = document.querySelector(".half-circle-wrapper");
  const position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document
      .querySelector(".half-circle-text")
      .classList.add("start-animation");
  }
}
window.addEventListener("scroll", checkScroll);
checkScroll();

const ham = document.querySelector(".ham");
const sp = document.querySelector(".sp");
const cloud = document.querySelector(".cloud");
const span = document.querySelector(".hamwrapper span:nth-child(1)");
const span2 = document.querySelector(".hamwrapper span:nth-child(2)");
const span3 = document.querySelector(".hamwrapper span:nth-child(3)");
function menu() {
  sp.classList.toggle("open");
  sp.classList.remove("cloudclose");
  cloud.classList.toggle("cloudopen");
  cloud.classList.remove("cloudclose");
  span.classList.toggle("close");
  span2.classList.toggle("none");
  span3.classList.toggle("close2");
  if (sp.classList.contains("open")) {
    sp.classList.add("open");
    cloud.classList.add("cloudopen");
  } else {
    sp.classList.remove("open");
    cloud.classList.remove("cloudopen");
    sp.classList.add("cloudclose");
    cloud.classList.add("cloudclose");
  }
}
ham.addEventListener("click", menu);
window.addEventListener("click", function (e) {
  if (
    !ham.contains(e.target) &&
    !sp.contains(e.target) &&
    !cloud.contains(e.target)
  ) {
    if (sp.classList.contains("open")) {
      menu();
    }
  }
});

$(function () {
  $(".slider").slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 7000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 6, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, //画面幅750px以下でスライド3枚表示
        },
      },
    ],
  });
});

$(function () {
  $(".slider2").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 7000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 6, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    rtl: true, // スライダーを左から右に流す（逆向き）
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

$(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "20%",
    arrows: false,
  });
});

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
