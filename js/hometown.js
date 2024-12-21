window.addEventListener("load", function () {
  // デバイスの幅が1024px以下の場合のみ処理を実行
  if (window.innerWidth <= 1024) {
    // ページ読み込み時に最初の .sec に is-active クラスを追加
    const firstSec = document.querySelector(".sec");
    if (firstSec) {
      firstSec.classList.add("is-active");
    }
  }
});
window.addEventListener("load", function () {
  // 1024px以下の場合、ページ読み込み時に最初の .sec に is-active クラスを追加
  if (window.innerWidth <= 1024) {
    const firstSec = document.querySelector(".sec");
    if (firstSec) {
      firstSec.classList.add("is-active");
    }
  } else {
    // 1024px以上の場合、スクロールした際に .sec に is-active クラスを追加
    const sec = document.querySelector(".sec");
    if (sec) {
      window.addEventListener("scroll", function () {
        const rect = sec.getBoundingClientRect();
        // .sec が画面上に表示された時に is-active クラスを追加
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          sec.classList.add("is-active");
        }
      });
    }
  }
});

window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll(".sec");

  boxes.forEach(function (box) {
    const distanceToBox = box.offsetTop;
    // スクロール位置 + ウィンドウの高さが、ボックスの位置を超えたら .is-active を追加
    if (scroll + windowHeight > distanceToBox) {
      box.classList.add("is-active");
    }
  });
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
