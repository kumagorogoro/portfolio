window.addEventListener("load", function () {
  const firstSec = document.querySelector(".half-circle-wrapper2");
  firstSec
    .querySelector(".half-circle-text2")
    .classList.add("start-animation2");
});

document.addEventListener("DOMContentLoaded", function () {
  // slider1の処理 (左から右に流れる)
  const slider1 = document.querySelector(".slider");
  const images1 = document.querySelectorAll(".slider .thumbnail");
  const totalImages1 = images1.length;
  let scrollPosition1 = 0;
  const imageWidth1 = images1[0].offsetWidth + 1;
  const totalWidth1 = imageWidth1 * totalImages1;

  // スライダーの内容を複製して、最初のセットと連結させる
  const clonedImages1 = slider1.innerHTML;
  slider1.innerHTML += clonedImages1;
  slider1.style.width = `${totalWidth1 * 2}px`;

  // スライドを左方向に流し続ける関数
  function continuousScroll1() {
    scrollPosition1 += 0.3; // 左方向に1pxずつ進める

    // スライドが完全に移動したら、最初の画像に戻す
    if (scrollPosition1 >= totalWidth1) {
      scrollPosition1 = 0; // 位置をリセットしてスムーズに繋げる
    }

    slider1.style.transform = `translateX(-${scrollPosition1}px)`; // スライダーを左方向に移動
  }
  setInterval(continuousScroll1, 10); // この値で流れる速さを調整できます

  // slider2の処理 (右から左に流れる)
  const slider2 = document.querySelector(".slider2");
  const images2 = document.querySelectorAll(".slider2 .thumbnail");
  const totalImages2 = images2.length;
  let scrollPosition2 = 0;
  const imageWidth2 = images2[0].offsetWidth + 1;
  const totalWidth2 = imageWidth2 * totalImages2;

  // スライダーの内容を複製して、最初のセットと連結させる
  const clonedImages2 = slider2.innerHTML;
  slider2.innerHTML += clonedImages2;
  slider2.style.width = `${totalWidth2 * 2}px`; // スライドを右方向に流し続ける関数
  function continuousScroll2() {
    scrollPosition2 += 0.3; // 右方向に1pxずつ進める

    // スライドが完全に移動したら、最初の画像に戻す
    if (scrollPosition2 <= -totalWidth2) {
      scrollPosition2 = 0; // 位置をリセットしてスムーズに繋げる

      // リセット後に次のセットの画像がスムーズに流れるように調整
      const firstImage = slider2.querySelector(".thumbnail");
      slider2.appendChild(firstImage); // 最初の画像を一番後ろに移動
    }

    slider2.style.transform = `translateX(${scrollPosition2}px)`; // スライダーを右方向に移動
  }
  setInterval(continuousScroll2, 10); // この値で流れる速さを調整できます
});
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
