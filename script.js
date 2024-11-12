// サムネイル画像のクリックイベントを処理
const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("Modal");
const modalImage = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");
const img = new Image(); // 新しいImageオブジェクトを作成
const width = img.width;
const height = img.height;

// クリックしたサムネイル画像を拡大表示
thumbnails.forEach(function (item) {
  item.addEventListener("click", function () {
    img.src = this.src;
    img.onload = function () {
      // 横向きの写真（横幅 > 縦幅）の場合
      if (width > height) {
        modalImage.style.maxWidth = "700px";
        //横長の写真の最大表示サイズ
      }
      // 縦向きの写真（縦幅 > 横幅）の場合
      else if (height > width) {
        modalImage.style.maxWidth = "380px";
        //縦長の写真の最大表示サイズ
      }
      // 正方形の写真の場合
      else {
        modalImage.style.maxWidth = "600px";
        //正方形の写真の最大表示サイズ
      }
    };
    // モーダルに画像を設定し、表示
    modalImage.src = this.src;
    modal.style.display = "flex";
  });
});

// 閉じるボタンをクリックしたとき
closeBtn.addEventListener("click", function () {
  modal.style.display = "none"; // モーダル非表示
});

// モーダル外をクリックした場合にも閉じる
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none"; // モーダル非表示
  }
});
