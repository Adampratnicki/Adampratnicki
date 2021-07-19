jQuery( document ).ready(function( $ ) {
    'use strict';
    var b,
    BANNER_7 = {
        settings:{
          bannerContainer: $('.shb-banner-7'),
          bannerSlider: $('.shb-banner-7').find('.shb-slides'),
          bannerSliderWrapper: $('.shb-banner-7').find('.shb-slider-wrapper'),
          bannerContainerNav: $('.shb-banner-7').find('.prev, .next'),
          bannerLoader: $('.shb-banner-7').find('.shb-slider-loader')
        },

        init: function(){
            b = this.settings;
            this.windowLoadHandler();
            this.bindUIActions();
        },

        windowLoadHandler: function() {
          if ( b.bannerSlider.length ) {
            BANNER_7.initSlider();
          }

          return false;
        },

        bindUIActions: function(){
        },

        initSlider: function(){
          b.bannerSliderWrapper.imagesLoaded(function(){
            b.bannerSlider.on('init', function(){ 
                b.bannerLoader.hide();
                b.bannerSliderWrapper.fadeTo("slow", 1);
            });
            var fadeOption = false;
            if (b.bannerSliderWrapper.data('animation') == 'fading') {
              fadeOption = true;
            }
            b.bannerSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: b.bannerSliderWrapper.data('show-arrows'),
                adaptiveHeight: false,
                dots: true,
                autoplay: b.bannerSliderWrapper.data('autoplay'),
                autoplaySpeed: b.bannerSliderWrapper.data('duration') * 1000,
                fade: fadeOption,
                cssEase: 'linear',
                rows: 0
            });
          });
        },

    };

    BANNER_7.init();
});