/* global $ */
/* jshint quotmark:single */

/**
 * BUNDLES module
 */
var bas,
    bundlesAppAddToCartButtonSelector = '[name="addToCard"], .shb-add-to-cart-button, .shb-product-list figure figcaption form button[type="submit"], [add-to-cart-button], .shb-product-list-add-to-cart',
    BUNDLES_APP = {
    settings: {
        cartHandler: null,
        widget: $('body').find('#bundlesAppWidget'),
        token: $('#bundlesAppToken').val(),
        productAddToCartButton: $('body').find(bundlesAppAddToCartButtonSelector),
        widgetSettings: {},
        variants: $('body').find(bundlesAppAddToCartButtonSelector).parents('form').find('.variants, .shb-variants'),
        closeModal: $('#bundlesAppWidget .bundles-modal-cancel'),
        variantsModal: '',
        isProductBundle: false,
        chosenVariants: '',
        addToCartButton: '',
        productForm: null,
        forceSubmit: false,
        eventBus: typeof EventBus !== 'undefined'
    },

    /**
     * Initialize
     */
    init: function () {
        bas = this.settings;
        this.runPlugins();

        this.bindUIActions();
        if (typeof Shop.cartHandler !== 'undefined') {
            bas.cartHandler = Shop.cartHandler;
        } else if (typeof Shop.cartHandling !== 'undefined') {
            bas.cartHandler = Shop.cartHandling;
        } else if (typeof cartHandler !== 'undefined') {
            bas.cartHandler = cartHandler;
        }

        console.log('BUNDLES_APP init');
        if (bas.cartHandler !== null) {
            bas.cartHandler.productAddToCartStandard = bas.cartHandler.productAddToCart;
            bas.cartHandler.productAddToCart = BUNDLES_APP.productAddButtonClick;
            bas.cartHandler.ajaxUpdateCart = BUNDLES_APP.ajaxUpdateCart;
            bas.cartHandler.updateCart();
        }
    },


    /**
     * Bind ui methods
     */
    bindUIActions: function () {
        bas.closeModal.on('click', function(){
            bas.productAddToCartButton.prop('disabled', false);
            bas.variantsModal.close();
        });
        $('body').on('change', '#bundlesAppWidget select', function () {
            BUNDLES_APP.sumBundle();
        });
        $('body').on('click', '#bundlesAppWidget .bundles-modal-button', function (e) {
            $(e.target).prop('disabled', true);
            BUNDLES_APP.checkProductsAvailability();
        });
        bas.productAddToCartButton.parents('form').on('submit', function (e) {
            if (!bas.forceSubmit) {
                e.preventDefault();
                var button = $(e.target).find(bundlesAppAddToCartButtonSelector);
                bas.productForm = $(e.target);
                BUNDLES_APP.productAddButtonClick(button);
            } else {
                bas.forceSubmit = false;
            }
        });
    },

    runPlugins: function () {
        if (typeof(REMODAL_GLOBALS) === 'undefined') {
          window.REMODAL_GLOBALS = {
            NAMESPACE: 'theme-modal',
            DEFAULTS: {
              hashTracking: true
            }
          };

          var script = document.createElement('script');

          script.type = 'text/javascript';
            script.src = 'https://bundles.shoploapp.com/bundles/base/js/lib/remodal/dist/remodal.min.js';
            script.onload = function(){
              BUNDLES_APP.initRemodal();
            };
            document.head.appendChild(script);
        } else {
          BUNDLES_APP.initRemodal();
        }

    },

    initRemodal: function() {
      bas.variantsModal = $('#bundlesAppWidget').remodal({
        hashTracking: false
      });
      bas.widget = bas.variantsModal.$modal;
    },

    connectApp: function (productId, button) {
        var data = {
            token: BUNDLES_APP_SETTINGS.token,
            shop: BUNDLES_APP_SETTINGS.shopId,
            productId: productId
        };

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: BUNDLES_APP_SETTINGS.ajaxUrl,
            data: data,
            timeout: 3000,
            error: function(){
                bas.isProductBundle = false;
                bas.productAddToCartButton.prop('disabled', false);
                $('.variants, .shb-variants').show();
                if (bas.cartHandler) {
                    bas.cartHandler.productAddToCartStandard(button);
                } else {
                    bas.forceSubmit = true;
                    bas.productForm.submit();
                }
            },
        }).done(function (data) {
            bas.forceSubmit = false;
            if (data !== 'No bundle found') {
                bas.isProductBundle = true;
                bas.widgetSettings = data;

                var i = 0,
                    products = bas.widgetSettings.products,
                    hasMultipleVariants = false,
                    chosenSingleVariants = [];
                for (i; i < products.length; i++) {
                    if (products[i].variants.length > 1) {
                        hasMultipleVariants = true;
                    } else {
                        chosenSingleVariants.push({
                            id: products[i].id,
                            productId: products[i].productId,
                            variantId: products[i].variants[0].variantId,
                            newPrice: products[i].variants[0].variantPriceInBundle,
                            originalPrice: products[i].variants[0].variantPrice,
                            quantity: products[i].productQuantityInBundle
                        })
                    }
                }
                if (hasMultipleVariants) {
                    BUNDLES_APP.fillWidgetModalData();
                    BUNDLES_APP.buildProductsView();
                    bas.variantsModal.open();
                } else {
                    bas.chosenVariants = chosenSingleVariants;
                    BUNDLES_APP.checkProductsAvailability();
                }
                bas.addToCartButton = button;
                bas.productAddToCartButton.prop('disabled', false);
            } else {
                bas.isProductBundle = false;
                bas.productAddToCartButton.prop('disabled', false);
                $('.variants, .shb-variants').show();
                if (bas.cartHandler) {
                    bas.cartHandler.productAddToCartStandard(button);
                } else if (bas.productForm) {
                    bas.forceSubmit = true;
                    if (Shop && Shop.productOptions && Shop.productOptions.settings) {
                        Shop.productOptions.settings.submittingForm = true;
                    }
                    bas.productForm.submit();
                }
            }
        });
    },

    productAddButtonClick: function ($this) {
        var productId;
        bas.forceSubmit = false;
        if ( typeof variants !== 'undefined' && variants.length ) {
            productId = variants[0].productId;
        } else {
            productId = $this.parents('form').find('[data-product-id]').data('product-id');
        }
        if (productId) {
            BUNDLES_APP.connectApp(productId, $this);
        } else {
            if (bas.cartHandler) {
                bas.cartHandler.productAddToCartStandard($this);
            } else if (bas.productForm) {
                bas.forceSubmit = true;
                bas.productForm.submit();
            }
        }
    },

    checkProductsAvailability: function () {
        var variantsArray = {
            ids: []
        };
        bas.chosenVariants.forEach(function (e) {
            variantsArray.ids.push(e.variantId);
        })

        SHOPLOAJAX.getVariants(variantsArray).done(function (data) {
            var result = data.filter(function (item) {
                return !item.available || item.quantity <= 0 && !item.available;
            });

            if (result.length) {
                var productList = '';
                result.forEach(function(e, i){
                    productList += e.name
                    if (i !== result.length-1) {
                        productList += ', '
                    }
                });
                bas.variantsModal.close();
                Shop.shbNotification.showShopMessage(BUNDLES_APP_SETTINGS.locale.missing_products + ': ' + productList, 'error');
                bas.widget.find('.bundles-modal-button').prop('disabled', false);
            } else {
                BUNDLES_APP.productAddToCart();
            }
        });
    },

    productAddToCart: function () {
        var productQty = bas.addToCartButton.parents('form').find('input[name="quantity"]').val(),
            productId = null,
            jsonKey = bas.widgetSettings.bundleName + ' (',
            localStorageBundle = {
                quantity: productQty,
                variants: []
            };

        if ( typeof variants !== 'undefined' && variants.length ) {
            productId = variants[0].productId;
        } else {
            productId = bas.addToCartButton.parents('form').find('[data-product-id]').data('product-id') || variants[0].productId;
        }

        if (productQty == undefined) {
            productQty = 1
        }

        bas.chosenVariants.forEach(function (e, i) {
            jsonKey += e.variantId + '-'+ e.quantity;
            localStorageBundle.variants.push(e.variantId);
            if (i !== bas.chosenVariants.length-1) {
                jsonKey += ',';
            }

        });
        jsonKey += ')';

        var data = {
            token: BUNDLES_APP_SETTINGS.token,
            shop: BUNDLES_APP_SETTINGS.shopId,
            productId: productId,
            variants: []
        };

        bas.chosenVariants.forEach(function (e, i) {
            var variantData = {
                variant_id: e.variantId,
                user_key: Shop.user_key,
                quantity: parseInt(e.quantity) * parseInt(productQty),
                properties: {}
            };
            var bundleProp = 'Bundle';

            if (Shop.checkout_lang === 'pl_PL') {
                bundleProp = 'Zestaw';
            }

            variantData.properties[bundleProp] = jsonKey;
            data.variants.push(variantData)
        });

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: '//bundles.shoploapp.com/shoplo/talk/cart/add',
            data: data,
            error: function(){
                bas.productAddToCartButton.prop('disabled', false);
            }
        }).done(function (data) {
            localStorage.setItem(jsonKey, JSON.stringify(localStorageBundle));

            bas.addToCartButton.prop('disabled', false);
            bas.variantsModal.close();
            bas.widget.find('.bundles-modal-button').prop('disabled', false);
            if (data.status === 'ok') {
                bas.variantsModal.close();
                if (bas.cartHandler && typeof(useDynamicCart) !== undefined && useDynamicCart !== '0') {
                    bas.cartHandler.showShopMessage($('[minicart-summary]'), data.message, 'success');
                    bas.cartHandler.updateCart();
                    $('body').toggleClass('shb-show-cart-widget');
                } else {
                    Shop.shbNotification.showShopMessage(data.message, 'success');
                    if (BUNDLES_APP_SETTINGS && BUNDLES_APP_SETTINGS.cartUrl) {
                        window.location.href = BUNDLES_APP_SETTINGS.cartUrl;
                    } else if ($('body').find('.shb-cart-icon-wrapper').length) {
                        window.location.href = $('body').find('.shb-cart-icon-wrapper').attr('href');
                    }

                }

                if (bas.cartHandler && bas.cartHandler.settings.productAddDone !== null) {
                    bas.cartHandler.settings.productAddDone.call(this);
                }
            } else {
                Shop.shbNotification.showShopMessage(data.msg, 'error');
            }

        });

    },

    buildProductsView: function () {
        var i = 0,
            length = bas.widgetSettings.products.length,
            existingProducts = bas.variantsModal.$modal.find('.bundles-modal-product-bundle:not(.bundles-modal-product-bundle-template)'),
            shopUrl = window.location.protocol + '//' + window.location.hostname;


        if (existingProducts.length) {
            existingProducts.remove();
        }
        for (i; i < length; i++) {
            var product = bas.widgetSettings.products[i],
                variants = product.variants,
                vi = 0,
                viLength = variants.length,
                productHTML = bas.variantsModal.$modal.find('.bundles-modal-product-bundle-template').clone().removeClass('bundles-modal-product-bundle-template');

            productHTML.html(
                productHTML.html()
                    .replace(new RegExp('%productId%', 'g'), product.productId)
                    .replace(new RegExp('%productQuantity%', 'g'), product.productQuantityInBundle)
                    .replace(new RegExp('%productTitle%', 'g'), product.productName)
            );

            for (vi; vi < viLength; vi++) {
                var variant = variants[vi],
                    option = '<option value="'+ variant.id +'" data-variant-id="'+ variant.variantId +'" data-price="'+ variant.variantPriceInBundle +'" data-old-price="'+ variant.variantPrice +'">'+ variant.variantProperties +'</option>';
                productHTML.find('.bundles-select').append(option);
            }

            if (viLength === 1 && !variants[0].variantProperties) {
                productHTML.find('.bundles-select').hide();
            }
            productHTML.find('.bundles-modal-item-thumb a').attr('href', shopUrl + '/' + product.productUrl);

            productHTML.find('.bundles-modal-thumb-70').html('<img src="'+ product.productThumbnail +'"/>');
            bas.variantsModal.$modal.find('.bundles-modal-summary').before(productHTML);
            BUNDLES_APP.sumBundle();

        }
    },

    sumBundle: function () {
        var summary = bas.widget.find('.bundles-modal-summary'),
            products = bas.widget.find('.bundles-modal-product-bundle:not(.bundles-modal-product-bundle-template)'),
            i = 0, length = products.length,
            sumPrice = 0;

        bas.chosenVariants = [];
        for (i; i < length; i++) {
            var select = $(products[i]).find('.bundles-select'),
                selectedOpt = select.find('option:selected'),
                productPrice = 0;
            bas.chosenVariants.push({
                "id": select.val(),
                "productId":select.data('product-id'),
                "variantId":selectedOpt.data('variant-id'),
                "newPrice": selectedOpt.data('price'),
                "originalPrice": selectedOpt.data('old-price'),
                "quantity": select.data('product-quantity')
            });
            productPrice =  Number(selectedOpt.data('price')) * Number(select.data('product-quantity'));

            sumPrice += productPrice / 100;
        }

        summary.find('strong').text(Shop.money_format.replace('{{amount}}', sumPrice.toFixed(2)));
    },

    fillWidgetModalData: function () {
        bas.widget.find('h4').text(bas.widgetSettings.settings.windowTitle);
        bas.widget.find('p').text(bas.widgetSettings.settings.windowDescription)
        if (!bas.widgetSettings.settings.useCustomCss) {
            bas.widget.css({
                'background-color': bas.widgetSettings.settings.backgroundColor,
                'border-color': bas.widgetSettings.settings.frameColor,
                'border-width': bas.widgetSettings.settings.frameSize + 'px',
                'border-radius': bas.widgetSettings.settings.frameBorderRadius + 'px',
                'font-family': bas.widgetSettings.settings.fontFamily,
                'color': bas.widgetSettings.settings.fontColor
            });

            bas.widget.find('header').css({
                'text-align': bas.widgetSettings.settings.headerAlignment
            });

            bas.widget.find('h4').css({
                'font-size': bas.widgetSettings.settings.headerFontSize + 'px',
                'color': bas.widgetSettings.settings.fontColor
            });

            bas.widget.find('p').css({
                'font-size': bas.widgetSettings.settings.subtitleFontSize + 'px',
                'color': bas.widgetSettings.settings.fontColor
            });

            bas.widget.find('a').css({
                'color': bas.widgetSettings.settings.linkFontColor
            });

            bas.widget.find('select').css({
                'color': bas.widgetSettings.settings.selectFontColor
            });

            bas.widget.find('button').css({
                'background-color': bas.widgetSettings.settings.buttonBackgroundColor,
                'border-color': bas.widgetSettings.settings.buttonBackgroundColor,
                'font-size': bas.widgetSettings.settings.buttonFontSize + 'px',
                'color': bas.widgetSettings.settings.buttonFontColor,
                'border-radius': bas.widgetSettings.settings.buttonBorderRadius + 'px',
            });

            bas.widget.find('.summary').css({
                'background-color': bas.widgetSettings.settings.summaryBackgroundColor,
                'font-size': bas.widgetSettings.settings.summaryFontSize + 'px',
            });
        } else {
            if (bas.widgetSettings.settings.useCustomStyles) {
                $('body').append('<style id="bundlesCustomStyles">' + bas.widgetSettings.settings.customCss + '</style>');
            }
        }
    },


    variantQuantityKey: function(value, variantId) {
        var property = value.substring(value.lastIndexOf('(')).replace(/[()]/g, ''),
            variantsItems = property.split(','),
            i = 0,
            length = variantsItems.length;

        if (length > 1) {
            for (i; i < length; i++) {
                var split = variantsItems[i].split('-');
                if (Number(split[0]) === Number(variantId)) {
                    return Number(split[1]);
                }

            }
        } else {
            return Number(variantsItems[0].split('-')[1]);
        }

    },

    ajaxUpdateCart: function (itemLine, qty, product) {
        var input = product.find(bas.cartHandler.gs.quantityInput),
            oldQty = input.attr('data-old') || input.data('old'),
            variantId = product.attr('data-variant-id'),
            id = product.attr('data-product-id'),
            productBundleQty = parseInt(product.data('bundle-product-qty')) || 1,
            data = {
                line_item: [],
                quantity: []
            },
            oneBundleModel = {
                line_item: [],
                quantity: []
            };

        input.prop('disabled', true);

        if (product.attr('data-bundle-key')) {
            var bundleProducts = $('body').find(bas.cartHandler.gs.products).filter(':not(.item-template)[data-bundle-key="'+ product.attr('data-bundle-key').replace(/"/g, '\\"') +'"]'),
                cartProducts = $('body').find(bas.cartHandler.gs.products).not('.item-template');

            if(bundleProducts.length) {
                var productBundleIndex = 0;
                cartProducts.each(function (i, obj) {
                    if ($(obj).data('bundle-key') === product.attr('data-bundle-key')) {
                        productBundleIndex += 1;
                        var line = $(obj).index(),
                            productQty = $(obj).data('bundle-product-qty'),
                            newQty = qty;

                        if (productQty) {
                            newQty = parseInt(productQty) * parseInt(qty);
                            oneBundleModel.quantity.push(productQty);
                        } else {
                            oneBundleModel.quantity.push(1);
                        }

                        oneBundleModel.line_item.push(line);
                    }
                });


                data.line_item = oneBundleModel.line_item;
                var j = 0, length = oneBundleModel.quantity.length;
                if (product.attr('data-bundle-product-qty')) {

                    var pieces = parseInt(qty) / productBundleQty,
                        newQty = 0,
                        change = 0;

                    if (qty !== 0) {
                        if (parseInt(oldQty) >  parseInt(qty)) {
                            pieces = Math.floor(pieces);
                        } else {
                            pieces = Math.floor(pieces) + 1;
                        }
                        newQty = pieces * productBundleQty;
                        change = newQty / productBundleQty;
                        if (newQty === 0) {
                            qty = 0;
                        }
                    }

                    for (j; j < length; j++){
                        data.quantity.push(parseInt(oneBundleModel.quantity[j]) * parseInt(change));
                    }

                } else {
                    for (j; j < length; j++){
                        data.quantity.push(parseInt(oneBundleModel.quantity[j]) * parseInt(qty));
                    }

                }

                BUNDLES_APP.changeCart(data).done(function (data) {
                    BUNDLES_APP.changeCartSuccess(itemLine, data, qty, bundleProducts, id, input);
                })
            }
        } else {
            SHOPLOAJAX.changeCart(itemLine, qty).done(function (data) {
                BUNDLES_APP.changeCartSuccess(itemLine, data, qty, product, id, input);
            });
        }
    },

    changeCart: function(data){
        return $.ajax({
            url: '/cart/changeBulk.js',
            dataType: 'json',
            type: 'POST',
            data: data
        });
    },

    changeCartSuccess: function (itemLine, data, qty, product, id, input) {
        if (data.status === 'ok') {
            var ajaxUpdateCartData = {
                itemLine: itemLine,
                qty: qty,
                product: product
            };
            if (bas.eventBus) {
                EventBus.dispatch('ajaxUpdateCartDoneOk', 'shopCart', ajaxUpdateCartData);
            }
            if (qty == 0) {
                if (bas.cartHandler.gs.isDynamic) {
                    bas.cartHandler.showShopMessage($(bas.cartHandler.cartWidgetSummary), data.message, 'success');
                } else {
                    Shop.shbNotification.showShopMessage(data.message, 'success')
                }
                if (product.length > 1) {

                    product.fadeOut(500, function () {
                        product.remove();
                        if (bas.cartHandler.gs.isDynamic) {
                            var productList = $(bas.cartHandler.gs.cartWidgetSummary).find(bas.cartHandler.gs.products)
                        } else {
                            var productList = $(bas.cartHandler.gs.cartSummary).find(bas.cartHandler.gs.products)
                        }

                        var cartHasVariants = false

                        $.each(productList, function () {
                            var productHasVariants = $(this).find('[item-properties] li').length
                            if (productHasVariants) {
                                cartHasVariants = true
                                return false
                            }
                        })

                        bas.cartHandler.sumAllProducts()
                    })
                } else {
                    bas.cartHandler.onRemoveProduct(product)
                }


            }

            if (bas.cartHandler.gs.isDynamic) {
                if($('body').find(`.product-list input[data-product-id='${id}']`).length){
                    var thisElement = $('body').find(`.product-list input[data-product-id='${id}']`);
                    bas.cartHandler.productListGetProgressivPrice(thisElement);

                }else if($('body#page-product').find('form input[data-product-id]').length){

                    var thisId = $('body#page-product').find('form input[data-product-id]').attr('data-product-id'),
                        thisVariantId = $('body#page-product').find('form input[data-product-id]').val();

                    bas.cartHandler.productGetProgressivPrice(thisId, thisVariantId);
                }
            }

            bas.cartHandler.updateCart();
        } else {
            var error = data.message;
            if (data.error_msg) {
                error = data.error_msg
            }
            if (bas.cartHandler.gs.isDynamic) {
                bas.cartHandler.showShopMessage($(bas.cartHandler.gs.cartWidgetSummary), error, 'error')
            } else {
                Shop.shbNotification.showShopMessage(error, 'error')
            }

            if (input.val() > input.data('old')) {
                input.val(input.data('old'))
                bas.cartHandler.sumAllProducts()
            }
        }
        input.prop('disabled', false)
        if (input.data('focus')) {
            input.focus()
        }
    },
};

$(function () {
    BUNDLES_APP.init();
});
