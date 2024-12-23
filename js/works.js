window.addEventListener("load", function () {
  const firstSec = document.querySelector(".half-circle-wrapper2");
  firstSec
    .querySelector(".half-circle-text2")
    .classList.add("start-animation2");
});
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

  // 各span要素に対してクラスをトグル
  span.classList.toggle("close");
  span2.classList.toggle("none");
  span3.classList.toggle("close2");

  // 'sp'の表示・非表示をトグル
  if (sp.classList.contains("open")) {
    sp.classList.add("open"); // 'open'がある場合、表示
    cloud.classList.add("cloudopen");
  } else {
    sp.classList.remove("open");
    cloud.classList.remove("cloudopen");
    // 'sp' と 'cloud' の非表示設定
    sp.classList.add("cloudclose"); // クラス名の修正
    cloud.classList.add("cloudclose"); // クラス名の修正
  }
}

// ハンバーガーメニューのクリックイベント
ham.addEventListener("click", menu);

// メニュー外をクリックした場合にメニューを閉じる
window.addEventListener("click", function (e) {
  // ハンバーガーメニューやメニューの要素がクリックされていない場合にメニューを閉じる
  if (
    !ham.contains(e.target) &&
    !sp.contains(e.target) &&
    !cloud.contains(e.target)
  ) {
    // メニューを閉じる
    if (sp.classList.contains("open")) {
      menu();
    }
  }
});

$(function () {
  $(".slider").slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
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
    speed: 5000, // スライドが流れる速度を設定
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

// footer要素の取得
const footer = document.querySelector("footer");
const images = document.querySelectorAll(".footer-container img");
let currentImageIndex = 0; // 現在表示している画像のインデックス
let isSlideshowRunning = false; // スライドショーが動作中かどうかのフラグ
let intervalId = null; // スライドショーを制御するためのintervalID

// スライドショーを開始する関数
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
  }, 500); // 500ミリ秒ごとに画像が切り替わる
}

// スライドショーをリセットする関数
function resetSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
  isSlideshowRunning = false;
  currentImageIndex = 0;
  images.forEach((image) => image.classList.remove("active"));
}

// スクロールイベントを監視
window.addEventListener("scroll", function () {
  const footerPosition = footer.getBoundingClientRect().top; // footerの位置を取得
  const windowHeight = window.innerHeight; // ビューの高さ

  // footerが画面内に表示された場合
  if (footerPosition < windowHeight && !isSlideshowRunning) {
    footer.classList.add("visible"); // footerの表示アニメーションを開始
    startSlideshow(); // スライドショーを開始
  } else if (footerPosition > windowHeight) {
    footer.classList.remove("visible"); // footerの表示をリセット
    resetSlideshow(); // スライドショーをリセット
  }
});
