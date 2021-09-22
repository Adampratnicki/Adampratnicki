var win = $(window),
  body = $('body');

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 *
 * TOP
 *
 */
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
// SVGアニメーションの設定
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
var section = $('.section');
var SVG_easing = 'cubicBezier(.71, 0, .13, 1.01)'; //イージング
//var SVG_easing = 'cubicBezier(.785,.135,.15,.86)'; //イージング
//var SVG_easing = 'easeInOutQuart'; //イージング
var SVG_duration = 1400; //アニメーションにかける時間
//var SVG_delay = 500;
var svg_play_flg = false; // SVG出現アニメーションをローディング後1回だけ発火

var try_show,
  try_hide,
  about_show,
  about_hide,
  products_show,
  products_hide,
  news_show,
  news_hide,
  contact_show,
  contact_hide;

var all_counter = $('.topAllCounter');

/**
 * anime.jsの設定
 * SVGを表示するアニメーション
 */

// TRY
try_show = anime({
  easing: SVG_easing,
  targets: '#topTrySec path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});

// ABOUT
about_show = anime({
  easing: SVG_easing,
  targets: '#topAboutUsSec path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});

// PRODUCTS
products_show = anime({
  easing: SVG_easing,
  targets: '#topProductsSec path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});

// NEWS
news_show = anime({
  easing: SVG_easing,
  targets: '#topNewsSec path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});

// CONTACT
contact_show = anime({
  easing: SVG_easing,
  targets: '#topContactSec path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});

fullpage();

if ($('#fullpage').length) {
  $.fn.fullpage.setAllowScrolling(false); //fullpageのスクロールを無効化
}

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
// ローディング
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//

// Cookieがある場合
if ($.cookie('isLoadingAnimation')) {
  console.log('Cookieがある');
  hasCookie();


// Cookieがない場合
} else {
  console.log('Cookieがない');
  loadingAnim();
  //ブラウザを閉じたらcookieリセット
  $.cookie('isLoadingAnimation' , 'true' , { path: '/' });
}

/**
 * ローディングアニメーション
 */
function loadingAnim() {
  setTimeout(function () {
    body.addClass('-loading');
    setTimeout(function () {
      topAnimation();
    }, 2700);
  }, 1500);
}

function hasCookie() {
  body.addClass('-loadingHasCookie -loading');
  setTimeout(function () {
    topAnimation();
  }, 1700);
  // setTimeout(function () {
  //   body.addClass('-loadingHasCookie');
  //   $('#js-topLoading__overlay').fadeOut(500, function () {
  //     topAnimation();
  //   })
  // }, 1500);
}

/**
 * ローディング後コンテンツを表示
 */
function topAnimation() {
  // 最初の1回だけ発火
  if (!svg_play_flg) {
    //console.log({ svg_play_flg });
    // SVGを表示するアニメーション
    try_show.play();

    //「TRY」の文字出現アニメーション
    $('#topTrySec').addClass('action');

    // 各コンテンツをフェードイン表示
    body.addClass('-loadingComplete');

    //ループアニメーション
    loopNews();

    if ($('#fullpage').length) {
      $.fn.fullpage.setAllowScrolling(true); //fullpageのスクロールを有効化
    }
    svg_play_flg = true;
  }
}


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
// NEWS
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * 日付を一文字ずつspanで囲む
 */
function enclosedTag() {
  var newsTime = document.querySelectorAll('.topNews__date');
  for (var i = 0; i < newsTime.length; i++) {
    var timeText = newsTime[i].textContent; //文字列を取得
    newsTime[i].innerHTML = ''; //テキストを空にする
    var timeTextArray = timeText.split(''); //文字列を分割する

    timeTextArray.forEach(function(c) {
      newsTime[i].innerHTML += '<span>' + c + '</span>';
    });
  }
}
enclosedTag();

/**
 * ニュース記事のループ
 */
function loopNews() {
  var	elm  = $('.topNews__link'),
      elm_num = elm.length,
      speed   = 3500;
  function slideAnimation($images) {
    $images.each(function(index) {
      var $image = $(this);

      // 「次の要素」の取得
      // 最後のループの場合は一番最初の要素
      var $nextImage = (index == elm_num - 1)? $images.eq(0) : $image.next();

      setTimeout(function() {
        // 自身に .active 付与
        $image.removeClass('-leave').addClass('-active');
        $nextImage.removeClass('-leave'); //クラス削除

        setTimeout(function() {
          //自身の .-active を削除し .-leaveに変更
          //次の要素を.- active に変更
          $image.removeClass('-active').addClass('-leave');
          $nextImage.addClass('-active');
        }, speed - 500);
      }, speed * index);

    });
  }

  if (elm.length) {
    // 記事が1個の場合4個に複製
    if (elm.length == 1) {
      for (var i = 1; i < 2; i++) {
        $('.topNews__link').clone(true).appendTo(".topNews__list");
      }
      elm_num = $('.topNews__link').length;
      elm = $('.topNews__link');
    }
    // 記事が2個の場合4個に複製
    if (elm.length == 2) {
      $('.topNews__link').each(function (index) {
        $(this).clone(true).appendTo(".topNews__list");
        elm_num = $('.topNews__link').length;
      });
      elm = $('.topNews__link');
    }

    // 即時関数で初回処理
    setInterval((function loop() {
      slideAnimation(elm);
      return loop;
    }()), speed * elm_num);
  }

}

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
// fullpage.jsの設定
// スクロール切り替え
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
function fullpage() {
  $('#fullpage').fullpage({
    loopTop: true,
    loopBottom: true,
    scrollingSpeed: SVG_duration * 2, //スクロールの動く速度を遅くすることで、連続スクロールを防止する

    // コンテンツスクロール開始時に呼び出される関数(セクションを離れた時のイベント)
    onLeave: function (index, nextIndex, direction) {

      /**
       * 文字のアニメーション
       */

      //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
      // setTimeout(function () {
      //   section.eq(index - 1).addClass('leave'); //文字退場アニメーション
      //   section.eq(nextIndex - 1).addClass('action'); //文字出現アニメーション
      // }, SVG_duration / 2);
      //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//

      section.eq(index - 1).addClass('leave'); //文字退場アニメーション
      setTimeout(function () {
        section.eq(nextIndex - 1).addClass('action'); //文字出現アニメーション
        //}, SVG_duration / 2);
      }, SVG_duration);
      //ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//

      setTimeout(function () {
        section.eq(index - 1).removeClass('leave action'); //アニメーション削除
      }, SVG_duration + 500);


      if (index == 1) { //TRYの場合
        console.log('try');

        // SVGが消えていくアニメーション
        anime({
          easing: SVG_easing,
          targets: '#topTrySec path',
          direction: 'reverse',
          duration: function (el, i) {
            return SVG_duration;
          },
          strokeDashoffset: [anime.setDashoffset, 0],
          complete: function (anim) { //アニメーション終了時に一度だけ呼び出されます。

            if (nextIndex === 5) { //前のセクションに戻る

              // 「CONTACT」のSVGを表示するアニメーション
              contact_show.play();
              all_counter.addClass('-show');

            } else if (nextIndex === index + 1) { // 次のセクションに進む
              // 「ABOUT」のSVGを表示するアニメーション
              about_show.play();
              all_counter.addClass('-show');
            }

          }
        });


      } else if (index == 2) { //ABOUTの場合
        console.log('aboutus');

        // SVGが消えていくアニメーション
        anime({
          easing: SVG_easing,
          targets: '#topAboutUsSec path',
          direction: 'reverse',
          duration: function (el, i) {
            return SVG_duration;
          },
          strokeDashoffset: [anime.setDashoffset, 0],
          complete: function (anim) { //アニメーション終了時に一度だけ呼び出されます。

            if (nextIndex === index - 1) { //前のセクションに戻る

              // 「TRY」のSVGを表示するアニメーション
              try_show.play();
              all_counter.removeClass('-show');

            } else if (nextIndex === index + 1) { // 次のセクションに進む

              // 「PRODUCTS」のSVGを表示するアニメーション
              products_show.play();

            }

          }
        });

      } else if (index == 3) { //PRODUCTSの場合
        console.log('products');

        // SVGが消えていくアニメーション
        anime({
          easing: SVG_easing,
          targets: '#topProductsSec path',
          direction: 'reverse',
          duration: function (el, i) {
            return SVG_duration;
          },
          strokeDashoffset: [anime.setDashoffset, 0],
          complete: function (anim) { //アニメーション終了時に一度だけ呼び出されます。

            if (nextIndex === index - 1) { //前のセクションに戻る

              // 「ABOUT」のSVGを表示するアニメーション
              about_show.play();

            } else if (nextIndex === index + 1) { // 次のセクションに進む

              // 「NEWS」のSVGを表示するアニメーション
              news_show.play();

            }

          }
        });


      } else if (index == 4) { //NEWSの場合
        console.log('news');

        // SVGが消えていくアニメーション
        anime({
          easing: SVG_easing,
          targets: '#topNewsSec path',
          direction: 'reverse',
          duration: function (el, i) {
            return SVG_duration;
          },
          strokeDashoffset: [anime.setDashoffset, 0],
          complete: function (anim) { //アニメーション終了時に一度だけ呼び出されます。

            if (nextIndex === index - 1) { //前のセクションに戻る

              // 「PRODUCTS」のSVGを表示するアニメーション
              products_show.play();

            } else if (nextIndex === index + 1) { // 次のセクションに進む

              // 「CONTACT」のSVGを表示するアニメーション
              contact_show.play();

            }

          }
        });



      } else if (index == 5) { //CONACTの場合
        console.log('contact');

        // SVGが消えていくアニメーション
        anime({
          easing: SVG_easing,
          targets: '#topContactSec path',
          direction: 'reverse',
          duration: function (el, i) {
            return SVG_duration;
          },
          strokeDashoffset: [anime.setDashoffset, 0],
          complete: function (anim) { //アニメーション終了時に一度だけ呼び出されます。

            if (nextIndex === index - 1) { //前のセクションに戻る

              // 「NEWS」のSVGを表示するアニメーション
              news_show.play();

            } else if (nextIndex === 1) { // 次のセクションに進む

              // 「TRY」のSVGを表示するアニメーション
              try_show.play();
              all_counter.removeClass('-show');

            }

          }
        });

      }

    }


  });
}
