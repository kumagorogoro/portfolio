window.addEventListener("load", function () {
  const firstSec = document.querySelector(".half-circle-wrapper");
  firstSec.querySelector(".half-circle-text").classList.add("start-animation");
});

// スクロール時にアニメーションを開始する関数
function checkScroll() {
  // skillセクションのチェック
  const element2 = document.querySelector(".half-circle-wrapper2");
  const position2 = element2.getBoundingClientRect();
  if (position2.top < window.innerHeight && position2.bottom >= 0) {
    document
      .querySelector(".half-circle-text2")
      .classList.add("start-animation2");
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

// ハンバーガーメニューのクリックイベント
ham.addEventListener("click", function () {
  // 'open'クラスをトグル（追加または削除）
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
});

// 画像を格納した配列
const images = document.querySelectorAll(".footer-container img");
let currentImageIndex = 0; // 現在表示している画像のインデックス
let isSlideshowRunning = false; // スライドショーが動作中かどうかのフラグ
let intervalId = null; // スライドショーを制御するためのintervalID

// スライドショーを開始する関数
function startSlideshow() {
  // すでにスライドショーが動作している場合は終了
  if (isSlideshowRunning) return;

  isSlideshowRunning = true; // スライドショー開始フラグを立てる

  // 最初の画像を表示
  images[currentImageIndex].classList.add("active");

  // 次の画像を表示するためのタイマー
  intervalId = setInterval(() => {
    // 現在の画像を非表示にする
    images[currentImageIndex].classList.remove("active");

    // インデックスを更新
    currentImageIndex = (currentImageIndex + 1) % images.length; // 画像が終わったら最初に戻る

    // 新しい画像を表示
    images[currentImageIndex].classList.add("active");

    // 最後の画像まで行ったらスライドショーを停止
    if (currentImageIndex === images.length - 1) {
      // 最後の画像が表示されたままにする
      clearInterval(intervalId); // スライドショーを停止
      intervalId = null; // intervalIDをリセット
    }
  }, 500); // 3秒ごとに画像が切り替わる
}

// スライドショーをリセットする関数
function resetSlideshow() {
  clearInterval(intervalId); // スライドショーを停止
  intervalId = null; // intervalIDをリセット
  isSlideshowRunning = false; // スライドショーの状態をリセット
  currentImageIndex = 0; // 最初の画像に戻す

  // すべての画像を非表示にする
  images.forEach((image) => image.classList.remove("active"));
}

// スクロールイベントを監視
window.addEventListener("scroll", function () {
  const footer = document.querySelector(".footer-container");
  const footerPosition = footer.getBoundingClientRect().top; // フッターの位置を取得
  const windowHeight = window.innerHeight; // ビューの高さ

  // フッターが画面内に表示された場合
  if (footerPosition < windowHeight && !isSlideshowRunning) {
    startSlideshow(); // スライドショーを開始
  }

  // フッターが画面外に出た場合
  if (footerPosition > windowHeight) {
    resetSlideshow(); // スライドショーをリセット
  }
});
