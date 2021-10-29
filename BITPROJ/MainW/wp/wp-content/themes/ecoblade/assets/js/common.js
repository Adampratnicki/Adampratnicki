(function ($) {
  'use strict';

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
var win = $(window),
  body        = $('body'),
  easing      = 'easeOutQuart',
  scrollSpeed = 600,
  hSize       = win.height();

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * 共通関数
 */

/**
 * オブジェクトレイヤーのサイズ設定
 * iOSのスクロールバー対策
 */
var underObj_img = $('#js-underObj__img');
win.on('load resize', function() {
  hSize = win.height();
  underObj_img.height(hSize);
});



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * About UsのSVG設定
 */
var target = '#js-ourMind__list';
var target_philosophy = '#philosophy';
var target_vision = '#vision';
var target_mission = '#mission';
var controller = new ScrollMagic.Controller(); // 全体を制御する

/**
 * 固定表示
 */
//エリアに入ったら固定させる
var scene = new ScrollMagic.Scene({
  triggerElement: target,
  triggerHook: 'onLeave',
})
.setClassToggle(target, '-fixed') // クラスの追加・削除を行う
.addTo(controller); // Controllerに追加

//エリアを過ぎたら固定解除
var scene = new ScrollMagic.Scene({
  triggerElement: target_mission,
  triggerHook: 'onLeave',
})
.on("enter", function (event) {
  $(target).removeClass('-fixed');
  $(target).addClass('-end');
})
.on("leave", function (event) {
  $(target).addClass('-fixed');
  $(target).removeClass('-end');
})
  .addTo(controller); // Controllerに追加

/**
 * anime.jsの設定
 * SVGを表示するアニメーション
 */
var SVG_easing = 'cubicBezier(.71, 0, .13, 1.01)'; //イージング
var svg_no1_pc, svg_no2_pc, svg_no3_pc;
var svg_no1_sp, svg_no2_sp, svg_no3_sp;
var SVG_duration = 1000; //アニメーションにかける時間
var svg_no1_pc_flg = false; //1回だけ発火
var svg_no2_pc_flg = false;
var svg_no3_pc_flg = false;
var svg_no1_sp_flg = false;
var svg_no2_sp_flg = false;
var svg_no3_sp_flg = false;


// 1番目に再生するSVG
// PC
svg_no1_pc = anime({
  easing: SVG_easing,
  targets: '.js-svg__no1_pc path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});
// SP
svg_no1_sp = anime({
  easing: SVG_easing,
  targets: '.js-svg__no1_sp path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});

// 2番目に再生するSVG
// PC
svg_no2_pc = anime({
  easing: SVG_easing,
  targets: '.js-svg__no2_pc path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});
// SP
svg_no2_sp = anime({
  easing: SVG_easing,
  targets: '.js-svg__no2_sp path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});

// 3番目に再生するSVG
// PC
svg_no3_pc = anime({
  easing: SVG_easing,
  targets: '.js-svg__no3_pc path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});
// SP
svg_no3_sp = anime({
  easing: SVG_easing,
  targets: '.js-svg__no3_sp path',
  autoplay: false,
  duration: function(el, i) {
    return SVG_duration;
  },
  strokeDashoffset: [anime.setDashoffset, 0]
});


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * ハンバーガーメニューの白黒設定
 */

// 黒に設定
var scene = new ScrollMagic.Scene({
  triggerElement: "#contents",
  triggerHook: 'onLeave',
  offset: -80
}) // Sceneの指定
.on("enter", function (event) {
  body.addClass('-black');
})
.on("leave", function (event) {
  body.removeClass('-black');
})
.addTo(controller); // Controllerに追加

// 白に戻す
var scene = new ScrollMagic.Scene({
  triggerElement: "#footer",
  triggerHook: 'onLeave',
  //offset: -60
}) // Sceneの指定
.on("enter", function (event) {
  body.removeClass('-black');
})
.on("leave", function (event) {
  body.addClass('-black');
})
.addTo(controller); // Controllerに追加


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * ページ遷移
 */
function pageMoveAnim() {
  // ブラウザバック時に強制リロード(safari対策)
  window.onpageshow = function(event) {
    if (event.persisted) {
      window.location.reload();
    }
  };

// ページ遷移してきた時のアニメーション
setTimeout(function () {
  // レイヤーを表示
  body.addClass('-pageLoad');

  setTimeout(function () {
    body.addClass('-pageLoadComplete'); // 読み込み後のアニメーションを実行
    scrollAddClass(); // スクロールアニメーションを実行
    aboutUsSvgAnim(); // About UsのSVGアニメーションを実行
  }, 500);
}, 1000);

// ページ遷移する時のアニメーション
// .js-linkが付与されているリンクはページ遷移アニメーションを実行
$('.js-link, .news__pagenavi a, .news__pager a').on('click', function () {
  var url = $(this).attr("href");
  body.addClass('-pageMove'); //アニメーション用クラス付与
  setTimeout(function () {
    location.href = url;
  }, 1000); //秒数後にページ遷移
  return false;
});
}
pageMoveAnim();



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * ページ遷移時のアンカースクロール
 */
function pageAnchorScroll() {
  win.on('load', function () {
    var url = $(location).attr('href');
    if (url.indexOf('?id=') == -1) {
    } else {
      var url_sp = url.split('?id=');
      var hash = '#' + url_sp[url_sp.length - 1];
      var tgt = $(hash);
      var pos = tgt.offset().top;
      $('html, body').animate({ scrollTop: pos }, 100);
    }
  });
}
pageAnchorScroll();



//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * パララックス
 */
var rellax_contents_topLayer,
  rellax_parallaxObj_target,
  rellax_aboutus_block,
  rellax_types_obj;

function parallax() {
  // 下層ページ共通のコンテンツ上
  rellax_contents_topLayer = new Rellax('.js-contents__topLayer', {
    //speed: 10
    speed: 3
  });

  // 下層ページ共通の画像パララックス
  rellax_parallaxObj_target = new Rellax('.js-parallaxObj__target', {
    center: true,
    speed: -1
  });

  // ABOUT US 白ブロック
  rellax_aboutus_block = new Rellax('.js-aboutus__block', {
    center: true,
    speed: 2
  });

  // PRODUCTS オブジェクト
  rellax_types_obj = new Rellax('.js-types__obj', {
    center: true,
    speed: 1
  });
}
parallax();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * スクロールアニメーション
 */
function scrollAddClass() {
  var animeTarget = document.querySelectorAll('.js-target');
  var controller = new ScrollMagic.Controller();
  var defaltTriggerRatio = '0.8';

  for (var i=0; i<animeTarget.length; i++) {

    var scene = new ScrollMagic.Scene({
      triggerElement: animeTarget[i],
      triggerHook: defaltTriggerRatio,
      reverse: false,
      offset: 0
    })
    .setClassToggle(animeTarget[i], 'js-action')
    .addTo(controller);
  }
}


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * セレクトボックスのスタイル
 */
function languageSelect() {
  // 選択項目のdivを生成
  $(".languageSelect").each(function () {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");


    // 選択項目の文字列を取得
    var template = '<div class="languageSelect generated-select">';
    template += '<div class="languageSelect-trigger"><span class="languageSelect-trigger-text">Language</span></div>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
      var selection_class;
      $(this).prop('selected') ? selection_class = 'selection' : '';
      var self_option_class;
      $(this).attr("class") ? self_option_class = $(this).attr("class") : self_option_class = ''; // optionにクラス名が設定されているか確認
      template += '<span class="custom-option ' + self_option_class + ' ' + selection_class + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="languageSelect-wrapper"></div>');
    $(this).after(template);
  });

  // クリック時に選択項目を表示
  $(".languageSelect-trigger").on("click", function (e) {

    // ▼ クリックアニメーション ▼
    var self = $(this);
    var $clickAnime = '<div class="clickAnim" style="top: ' + e.offsetY + 'px; left: ' + e.offsetX + 'px"></div>';
    self.append($clickAnime);
    setTimeout(function () {
      self.find('.clickAnim').addClass('is-anime')
    }, 1);
    // ▲ クリックアニメーションここまで ▲

    $('html').one('click', function () {
      $(".languageSelect").removeClass("opened");
    });

    var opened_flg = false
    if ($(this).parents(".languageSelect").hasClass('opened')) opened_flg = true;

    $(".languageSelect").each(function () {
      $(this).removeClass("opened");
    })

    opened_flg ?
      $(this).parents(".languageSelect").removeClass("opened") :
      $(this).parents(".languageSelect").addClass("opened");

    event.stopPropagation();
  });

  // 選択項目をクリックした時のイベント
  $(".custom-option").on("click", function (e) {
    // ▼ クリックアニメーション ▼
    var self = $(this);
    var $clickAnime = '<div class="clickAnim" style="top: ' + e.offsetY + 'px; left: ' + e.offsetX + 'px"></div>';
    self.append($clickAnime);
    setTimeout(function () {
      self.find('.clickAnim').addClass('is-anime')
    }, 1);
    // ▲ クリックアニメーションここまで ▲

    $(this).parents(".languageSelect-wrapper").find("select").val($(this).data("value")).change();
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".languageSelect").removeClass("opened");
  });

  // リンク遷移
  var selected = $(".languageSelect");
  selected.on('change', function(){
    var url = selected.val();
    if (url) {
      window.open(url); //別窓表示
    }
  });
}
languageSelect();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * ヘッダー
 */
function headerNav() {
  var headerNav = $('#js-headerNav'),
    headerNavMenu = $('#js-headerNavMenu'),
    headerOverlay = $('#js-headerOverlay'),
    navFlag = false,
    navScrollpos;

  /**
   * パララックス要素のtransform値を配列に格納しておく
   * ヘッダー開閉時に位置がずれるため
   */
  // 要素を配列に格納(1)
  // .js-rellax をすべて取得する
  var parallaxList = $('.js-rellax');
  // .js-rellax の個数分ループし、配列に格納する
  var parallaxListArray = [];


  headerNavMenu.on('click', function () {
    if (navFlag) {
    //if (body.hasClass('-navOpen')) {
      // ナビを閉じる
      headerNavClose();
    } else {
      // ナビを開く
      headerNavOpen();
    }
  });

  headerOverlay.on('click', function () {
    if (body.hasClass('-navOpen')) {
      // ナビを閉じる
      headerNavClose();
    }
  });

  // ナビを開く
  function headerNavOpen() {
    // 現在のスクロール位置を取得
    navScrollpos = win.scrollTop();

    // 配列にtransform値を格納しておく(2)
    parallaxListArray = []; // 配列を空にする
    for (var i = 0; i < parallaxList.length; i++) {
      parallaxListArray.push($(parallaxList[i]).css('transform'));
      //console.log('1');
    }
    //console.log({ parallaxListArray });

    // パララックスを一旦削除(3)
    if (rellax_contents_topLayer.elems) { //存在判定
      rellax_contents_topLayer.destroy(); //パララックス削除
    }
    if (rellax_parallaxObj_target.elems) { //存在判定
      rellax_parallaxObj_target.destroy(); //パララックス削除
    }
    if (rellax_aboutus_block.elems) { //存在判定
      rellax_aboutus_block.destroy(); //パララックス削除
    }
    if (rellax_types_obj.elems) { //存在判定
      rellax_types_obj.destroy(); //パララックス削除
    }

    //console.log({ parallaxListArray });

    // 保存しておいたtransform値を設定(4)
    $(".js-rellax").each(function (index) {
      var transform = parallaxListArray[index];
      $(this).css('transform', transform);
      //console.log({ transform });
      //console.log('3');
    });

    headerOverlay.stop().fadeIn(400);

    // ページを固定(5)
    body.removeClass('-navHide').addClass('-navOpen').css({ 'top': -navScrollpos });
    //console.log('4');

    navFlag = true;


    if ($('#fullpage').length) {
      $.fn.fullpage.setAllowScrolling(false); //fullpageのスクロールを無効化
    }
  }

  // ナビを閉じる
  function headerNavClose() {
    headerOverlay.stop().fadeOut(400);
    // メニューの固定表示を解除
    body.addClass('-navHide').removeClass('-navOpen').css({ 'top': 0 });
    //元のスクロール位置へ移動
    window.scrollTo(0, navScrollpos);

    // パララックスを再度設定(6)
    if (rellax_contents_topLayer.elems) { //存在判定
      rellax_contents_topLayer.refresh(); //パララックス設定
    }
    if (rellax_parallaxObj_target.elems) { //存在判定
      rellax_parallaxObj_target.refresh(); //パララックス設定
    }
    if (rellax_aboutus_block.elems) { //存在判定
      rellax_aboutus_block.refresh(); //パララックス設定
    }
    if (rellax_types_obj.elems) { //存在判定
      rellax_types_obj.refresh(); //パララックス設定
    }


    if ($('#fullpage').length) {
      $.fn.fullpage.setAllowScrolling(true); //fullpageのスクロールを有効化
    }

    setTimeout(function () {
      body.removeClass('-navHide');
      navFlag = false;
    }, 1000);
  }

  // アコーディオンメニュー
  navAccordion();
  function navAccordion() {
    $(".nav__link.-hasChild.c-sp").on("click", function () {
      if ($(this).hasClass("-open")) {
        $(this).parent().next(".navSub").stop().slideUp(); // 次の要素をslideUp
        $(this).removeClass("-open");
      } else {
        $(this).parent().next(".navSub").stop().slideDown(); // 次の要素をslideDown
        $(this).addClass("-open");
      }
      return false;
    });
  }
}
headerNav();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * アンカーリンク
 */
function anchorLink() {
  $('a.js-scroll[href^="#"]').on("click", function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, scrollSpeed, easing);
    return false;
  });
}
anchorLink();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * スマートフォン端末以外での電話禁止
 */
function mobileTel(){
  var ua       = navigator.userAgent.toLowerCase();
  var isMobile = /iphone/.test(ua)||/android(.+)?mobile/.test(ua);
  if (!isMobile) {
    $('a[href^="tel:"]').on('click', function(e) {
      e.preventDefault();
    });
  }
}
mobileTel();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * Products
 */
function productsSlider() {
  /**
   * スライドショー
   */
  var slider_wrap = '#js-aboutSlider__wrap';
  var mySwiper = new Swiper('#js-aboutSlider' , {
    loop: false,
    //loop: true,
    effect: 'fade',
    speed: 0,
    autoplay: 0,
    loopAdditionalSlides: 0,
    //speed: 500,
    calculateHeight: true,
    //allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    on: {
      slideChange: function () {
        // 現在のスライドが何枚目かを取得
        var index = mySwiper.realIndex + 1;
        //console.log(index);
        // 「activeSlide」で始まるclassを削除
        $(slider_wrap).removeClass(function(index, className) {
            return (className.match(/\bactiveSlide\S+/g) || []).join(' ');
        });
        $(slider_wrap).addClass('activeSlide_' + index);
      },
    },
    // breakpoints: {
    //   750: {
    //     allowTouchMove: true, //スワイプ操作
    //   }
    // }
  })

}
productsSlider();


function productsTab() {
  /**
   * タブ切り替え
   */
  //var tab_active_index = $('.typesTabMenu__item.-selected').index();
	//$('.typesTabPanel').css('display','none').eq(tab_active_index).show().addClass('-show');
	//$('.typesTabPanel').css('display','none').eq(tab_active_index).show();

  $('.typesTabMenu__item').on('click', function () {
    if (!($(this).hasClass('-selected'))) {
      var tab_index = $(this).index();
      var tab_panel = $(this).parents('.typesTabMenu').next('.typesTabPanels').find('.typesTabPanel');
      //tab_panel.removeClass('-show').css('display', 'none');
      tab_panel.css('display', 'none');
      //tab_panel.eq(tab_index).addClass('-show').fadeIn(400);
      tab_panel.eq(tab_index).fadeIn(600);
      $(this).siblings('.typesTabMenu__item').removeClass('-selected');
      $(this).addClass('-selected');
    }
	});
}
productsTab();


function productsModal() {
  /**
   * モーダル
   */
  $(document).on('opening', '.remodal', function () {
    // スクロールアニメーションを削除
     $('.modalContents .js-target').removeClass('js-action');
  });

  $(document).on('opened', '.remodal', function () {
    $('#js-sizeGuide__circle').addClass('js-action');
    setTimeout(function () {
      $('.modalContents .js-target').addClass('js-action'); // スクロールアニメーションを実行
    }, 800);
  });
  $(document).on('closing', '.remodal', function (e) {
    $('#js-sizeGuide__circle').removeClass('js-action');
  });
  // $('.js-modal').modaal({
  //   //animation_speed: '500', // アニメーションのスピード
  //   overlay_opacity: '1',	// 背景のオーバーレイの透明度を変更

  //   // 開く前に行いたい処理
  //   before_open: function() {
  //     // スクロールアニメーションを削除
  //     $('.modalContents .js-target').removeClass('js-action');
  //   },
  //   //開いた後の処理
  //   after_open: function () {
  //     $('#js-sizeGuide__circle').addClass('js-action');
  //     setTimeout(function () {
  //       $('.modalContents .js-target').addClass('js-action'); // スクロールアニメーションを実行
  //     }, 800);
  //   },
  //   before_close: function () {
  //     $('#js-sizeGuide__circle').removeClass('js-action');
  //   }

  // });

  // 閉じるボタンを設定
  $('.js-modalClose').on("click", function() {
    $('[data-remodal-id=modalSizeGuide]').remodal().close();
    return false;
  });
  $('.js-modalClose_backup').on("click", function() {
    $('[data-remodal-id=modalSizeGuide_backUp]').remodal().close();
    return false;
  });

}
  productsModal();


//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
/**
 * About Us
 */
function aboutUsSvgAnim() {

  /**
   * SVGの再生設定
   */
  //ーーーーーーーーーーーーーーーーーーーー//
  // philosophy
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: target_philosophy,
  //   triggerHook: 'onLeave'
  // })
  // //.setClassToggle(target, "-active_01") // クラスの追加・削除を行う
  // .on("enter", function (event) {

  //   //console.log('no1');
  //   // 1番目のSVGを表示するアニメーション(PC)
  //   if (!svg_no1_pc_flg) {
  //     $(target).addClass('-active');
  //     svg_no1_pc.play();
  //     svg_no1_pc_flg = true;
  //   }
  // })
  // .addTo(controller); // Controllerに追加

  var scene = new ScrollMagic.Scene({
    triggerElement: target_philosophy,
  })
  //.setClassToggle(target, "-active_01") // クラスの追加・削除を行う
    .on("enter", function (event) {

    //console.log('no1');
    // 1番目のSVGを表示するアニメーション(PC)
    if (!svg_no1_pc_flg) {
      $(target).addClass('-active');
      svg_no1_pc.play();
      svg_no1_pc_flg = true;
    }
    // 1番目のSVGを表示するアニメーション(SP)
    if (!svg_no1_sp_flg) {
      svg_no1_sp.play();
      svg_no1_sp_flg = true;
    }
  })
  .addTo(controller); // Controllerに追加

  //ーーーーーーーーーーーーーーーーーーーー//
  // vision
  var vision = new ScrollMagic.Scene({
    triggerElement: target_vision,
  })
  //.setClassToggle(target, "-active_02") // クラスの追加・削除を行う
  .on("enter", function (event) {
    //$(target).removeClass('-active_01');

    //console.log('no2');
    // 2番目のSVGを表示するアニメーション(PC)
    if (!svg_no2_pc_flg) {
      svg_no2_pc.play();
      svg_no2_pc_flg = true;
    }
    // 2番目のSVGを表示するアニメーション(SP)
    if (!svg_no2_sp_flg) {
      svg_no2_sp.play();
      svg_no2_sp_flg = true;
    }
  })
  // .on("leave", function (event) {
  //   $(target).addClass('-active_01');
  // })
  .addTo(controller); // Controllerに追加

  //ーーーーーーーーーーーーーーーーーーーー//
  // mission
  var mission = new ScrollMagic.Scene({
    triggerElement: target_mission,
  })
  //.setClassToggle(target, "-active_03") // クラスの追加・削除を行う
  .on("enter", function (event) {
    //$(target).removeClass('-active_02');
    //console.log('no3');
    // 3番目のSVGを表示するアニメーション(PC)
    if (!svg_no3_pc_flg) {
      svg_no3_pc.play();
      svg_no3_pc_flg = true;
    }
    // 3番目のSVGを表示するアニメーション(SP)
    if (!svg_no3_sp_flg) {
      svg_no3_sp.play();
      svg_no3_sp_flg = true;
    }

  })
  // .on("leave", function (event) {
  //   $(target).addClass('-active_02');
  // })
  .addTo(controller); // Controllerに追加
}


})(jQuery);