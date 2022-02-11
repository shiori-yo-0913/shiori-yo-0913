particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,//この数値を変更すると雪の数が増減できる
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",//形状は画像を指定
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "image": {
        "src": "img/snow.png",//【重要】画像を指定！雪の画像を設定してください。
        "width": 120,
        "height": 120
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 2,//この数値を小さくするとゆっくりな動きになる
      "direction": "bottom",//下に向かって落ちる
      "random": true,//動きはランダム
      "straight": false,//動きをとどめない
      "out_mode": "out",//画面の外に出るように描写
      "bounce": false,//跳ね返りなし
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
      "resize": true
    }
  },
  "retina_detect": true
});

//ギャラリー
lightbox.option({
  'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
  'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
})

// スムーズスクロール
        $(function(){
          $('a[href^="#"]').click(function(){
            var speed = 600;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            //ヘッダーの高さを取得
            var header = $('header').height();
            //ヘッダーの高さを引く
            var position = target.offset().top - header;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
          });
        });