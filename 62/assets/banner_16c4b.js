jQuery( document ).ready(function( $ ) {
    'use strict';
    var b,
    BANNER_1 = {
        settings:{
          bannerContainer: $('.shb-banner-1'),
          bannerSlider: $('.shb-banner-1').find('.shb-slides'),
          bannerSliderWrapper: $('.shb-banner-1').find('.shb-slider-wrapper'),
          bannerContainerNav: $('.shb-banner-1').find('.prev, .next'),
          bannerLoader: $('.shb-banner-1').find('.shb-slider-loader')
        },

        init: function(){
            b = this.settings;
            this.windowLoadHandler();
            this.bindUIActions();
        },

        windowLoadHandler: function() {
          if ( b.bannerSlider.length ) {
            BANNER_1.initSlider();
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
                rows: 0
            });
            
          });
        },
    };

    BANNER_1.init();
});