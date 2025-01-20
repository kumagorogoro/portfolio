$(function () {
  $(".slider").slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 7000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 10, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 8, // 1100px以下でスライド6枚表示
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6, // 1100px以下でスライド6枚表示
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 750px以下でスライド3枚表示
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
    slidesToShow: 10, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    rtl: true, // スライダーを左から右に流す（逆向き）
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 8, // 1100px以下でスライド6枚表示
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6, // 1100px以下でスライド6枚表示
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 750px以下でスライド3枚表示
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

