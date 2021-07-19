jQuery( document ).ready(function( $ ) {
    'use strict';
    var p,
        productContainer = $('.shb-product-5'),
        PRODUCT_5 = {
            settings:{
                productContainer: productContainer,
                mainGallery: productContainer.find('.shb-main-gallery'),
                thumbsGallery: productContainer.find('.shb-thumbs-gallery'),
                isMobile: 0,
                windowWidth: $(window).width(),
                variantsHandler: productContainer.find('.shb-variants')

            },

            init: function(){
                p = this.settings;
                console.log('PRODUCT_5 INIT', p.productContainer);
                this.windowLoadHandler();
                this.bindUIActions();
            },

            windowLoadHandler: function() {
                if ( p.windowWidth < '768' )
                {
                    p.isMobile = 1;
                }

                if ( p.isMobile === 1 ) {
                    PRODUCT_5.mobileGallery();
                } else {
                    PRODUCT_5.desktopGallery();
                }

                if ( p.variantsHandler.length ) {
                    Shop.productHandler = p.productContainer.productVariants({
                        productSectionContainer: '.shb-product-5',
                        selectricSelect: p.variantsHandler.find('.selectric').length > 0
                    });
                }
                return false;
            },

            bindUIActions: function(){
                p.thumbsGallery.on('click', '.shb-thumb-item', function(e){
                    e.preventDefault();
                    var itemIndex = $(this).data('index');
                    p.mainGallery.slick('slickGoTo',itemIndex);
                });

                $('.slick-slider').on('beforeChange', function(){
                    $('.slick-track').attr('inChange', '1')
                });

                $('.slick-slider').on('afterChange', function(){
                    $('.slick-track').attr('inChange', '0')
                });
            },

            mobileGallery: function() {
                p.mainGallery.on('init', function(){
                    p.mainGallery.fadeTo("slow", 1);
                    p.mainGallery.find('.shb-gallery-item').css("position", "relative");
                    p.mainGallery.find('a').on('click', function(e) {e.preventDefault();})
                });
                p.mainGallery.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    rows: 0,
                    fade: p.mainGallery.data('fade')
                });
                initPhotoSwipeFromDOM('.shb-product-5 .shb-main-gallery img', p.mainGallery.data('zoom-ratio'));
            },

            desktopGallery: function() {
                var thumbItem = p.thumbsGallery.find('.shb-thumb-item'),
                    maxThumbsToShow = PRODUCT_5.slidesToShow();
                p.mainGallery.on('init', function(){
                    p.mainGallery.fadeTo("slow", 1);
                    p.mainGallery.find('.shb-gallery-item').css("position", "relative");
                });
                p.mainGallery.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false,
                    dots: false,
                    fade: p.mainGallery.data('fade'),
                    rows: 0
                });

                if (p.mainGallery.data('type') === 'lightbox') {
                    initPhotoSwipeFromDOM('.shb-product-5 .shb-main-gallery img', p.mainGallery.data('zoom-ratio'));
                } else {
                    p.mainGallery.find('figure').each(function(){
                        $(this).zoom({
                            url: $(this).find('img').data('large')
                        });
                    })
                }
                p.thumbsGallery.imagesLoaded(function(){
                    if (thumbItem.length > maxThumbsToShow) {
                        thumbItem.each(function(){
                            $(this).css('position', 'relative');
                        });
                        p.thumbsGallery.slick({
                            slidesToShow: maxThumbsToShow,
                            adaptiveHeight: false,
                            variableWidth: false,
                            infinite: false,
                            rows: 0
                        });
                        p.thumbsGallery.on('init', function(){
                            p.thumbsGallery.fadeTo('slow', 1);
                        });
                    } else {
                        PRODUCT_5.showThumbsGallery(thumbItem);
                    }

                });
            },

            showThumbsGallery: function(thumbItem) {
                thumbItem.each(function(){
                    $(this).css('position', 'relative');
                });
                p.thumbsGallery.fadeTo('slow', 1);
            },


            slidesToShow: function () {
                var width = p.thumbsGallery.width(),
                    itemWidth = p.thumbsGallery.find('.shb-thumb-item').width();

                return Math.floor(width / itemWidth)
            }

        };

    if (productContainer.length) {
        PRODUCT_5.init();
    }
});