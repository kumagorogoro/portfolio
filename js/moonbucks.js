function checkScroll() {
  const element = document.querySelector(".half-circle-wrapper");
  const position = element.getBoundingClientRect();
  if (position.top < window.innerHeight && position.bottom >= 0) {
    document
      .querySelector(".half-circle-text")
      .classList.add("start-animation");
  }
}
// スクロールイベントのリスナーを追加
window.addEventListener("scroll", checkScroll);

// 初回チェック（ページロード時）
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
