
/*jslint browser: true*/
/*global $, jQuery, alert, console, dict, prices, pricesRegular, images, shipping*/

(function ($) {
  'use strict';

  $.fn.productVariants = function  (options) {
    var s,
      element = $(this),
      gs = $.extend({}, $.fn.productVariants.defaults, options),
      ProductVariants = {
        settings: {
          inputVariantId: $(gs.productSectionContainer).find(gs.inputVariantId),
          newPriceWrapper: $(gs.productSectionContainer).find(gs.newPriceWrapper),
          oldPriceWrapper: $(gs.productSectionContainer).find(gs.oldPriceWrapper),
          thumbsWrapper: $(gs.productSectionContainer).find(gs.thumbsWrapper),
          shippingInfoWrapper: $(gs.productSectionContainer).find(gs.shippingInfoWrapper),
          shippingInfo: gs.shippingInfo,
          propertyHandler: $(gs.productSectionContainer).find(gs.propertyHandler),
          propertiesHandler: $(gs.productSectionContainer).find(gs.propertiesHandler),
          propertyContainer: $(gs.productSectionContainer).find(gs.propertyContainer),
          options: $(gs.productSectionContainer).find(gs.variantsContainer).find(gs.propertyContainer),
          addToCartButton: $(gs.productSectionContainer).find(gs.addToCartButton),
          changeAddToCartButtonState: gs.changeAddToCartButtonState,
          selectricSelect: gs.selectricSelect,
          currentVariant: null,
          eventBus: typeof EventBus !== 'undefined'
        },

        init: function () {
          s = this.settings;
          this.bindUIActions();
          this.initForm();
          return ProductVariants;

        },

        bindUIActions: function () {
          s.propertyHandler.on('click', function () {
            var $this = $(this);
            $this.parent().children().removeClass('active');
            $this.addClass('active');
            ProductVariants.getVariant();
            ProductVariants.setVariant();
            // ProductVariants.deactivateUnavailableProperties();
          });

          s.propertiesHandler.on('change', function () {
            var $this = $(this);

            if (s.selectricSelect === true) {
              s.options.find('select').selectric('refresh');
            }
            $this.find('option').each(function() {
              if(this.selected) {
                $(this).addClass('active');
              } else {
                $(this).removeClass('active');
              }
            });
            ProductVariants.getVariant();
            ProductVariants.setVariant();
            // ProductVariants.deactivateUnavailableProperties();

          });
        },

        setVariant: function() {
          var selectProps = s.options.find(gs.propertiesHandler);

          $.each(selectProps, function () {
            var currentProperty = $(this);
            $.each(currentProperty.find(gs.propertyHandler), function () {
              var propName = currentProperty.data('property-name');
              var propValue = $(this).data('property-value');
              if (s.currentVariant.hasProperty({name: propName, value: propValue})) {
                $(this).addClass("active");
                $(this).prop("selected", "selected");
              } else {
                $(this).removeClass('active');
                $(this).removeProp("selected");
              }
            });
          });
          ProductVariants.deactivateUnavailableProperties();
          ProductVariants.setNewImage();
          ProductVariants.setNewPrice();
          ProductVariants.setNewShippingInfo();
          ProductVariants.setAddToCartButton();

          s.inputVariantId.val(s.currentVariant.id);

          // ProductOptions app additional function
          var productsOptionsWrapper = $('body').find('#variantsPO'),
            additionalProperties = productsOptionsWrapper.find('[name^="properties["]');
          if (productsOptionsWrapper.length && additionalProperties.length) {

            additionalProperties.each(function () {
              var newName = $(this).attr('name').replace(/properties\[.*?\]/, 'properties[' + s.currentVariant.id + ']');
              $(this).attr('name', newName);
            });
          }


          //additional
          $('#quantityInfo span').text(s.currentVariant.quantity);
          $('#refNumber span').text(s.currentVariant.sku);
          if (s.selectricSelect === true) {
            s.options.find('select').selectric('refresh');
          }
        },
        getVariant: function() {
          var selectsProps = s.options.find(gs.propertiesHandler);
          var options = [];
          selectsProps.each(function() {
            var prop = $(this).find('.active').first();
            var propName = $(this).data('property-name');
            var propValue = prop.data('property-value');

            options.push({name: propName, value: propValue});
          });

          var variant = getVariant(options);
          if(variant == null) {
            for(var c=options.length;c > 0; c=c-1) {
              var opt = [];
              for(var d=0;d < c;d++) {
                opt.push(options[d]);
              }
              var newVariant = getVariants(opt);
              if(newVariant != null) {
                return s.currentVariant = newVariant[0];
              }
            }
            s.currentVariant =  variants[0];
          } else s.currentVariant =  variant;

        },
        deactivateProperty: function(property) {
          property.addClass('unavailable');

        },
        activateProperty: function(property) {
          property.removeClass('unavailable');

        },
        deactivateAllProperties: function() {
          var propsSelects = s.options.find(gs.propertiesHandler);
          propsSelects.each(function(index) {
            var propName = $(this).data('property-name');
            var opt = $(this).find(gs.propertyHandler);

            opt.each(function() {
              ProductVariants.deactivateProperty($(this));
            });
          });
          if (s.selectricSelect === true) {
            s.options.find('select').selectric('refresh');
          }

        },
        deactivateUnavailableProperties: function() {
          var props = s.currentVariant.properties;
          var propsSelects = s.options.find(gs.propertiesHandler);
          propsSelects.each(function(index) {

            var propName = $(this).data('property-name');
            var opt = $(this).find(gs.propertyHandler);
            opt.each(function() {
              var count = 0;
              var propValue = $(this).data('property-value');
              var options = [];
              for(var j=0; j < index;j++) {
                options.push({name: props[j].name,value: props[j].value})
              }
              options.push({name: propName, value: propValue});
              var variants = getVariants(options);
              if(variants != undefined) {
                for(j=0; j < variants.length;j++) {
                  if (ProductVariants.checkVariantAvailability(variants[j])) {
                    if(variants[j].hasProperty({name: propName, value: propValue})) {
                      count+=1;
                    }
                  }
                }}

              if(count==0) {
                ProductVariants.deactivateProperty($(this));
              }
              else {
                ProductVariants.activateProperty($(this));
              }
            });

          });
          if (s.selectricSelect === true) {
            s.options.find('select').selectric('refresh');
          }
        },
        setAddToCartButton: function () {
          if (ProductVariants.checkVariantAvailability(s.currentVariant)) {
            if (s.eventBus) {
              EventBus.dispatch('setVariant', 'productVariants', 'available');
            }
            element.trigger('setVariant', 'available');
            s.addToCartButton.prop('disabled', false);
            s.addToCartButton.find('span').text(addToCartAvailable);
            s.addToCartButton.find('i').show();
          } else {
            if (s.eventBus) {
              EventBus.dispatch('setVariant', 'productVariants', 'unavailable');
            }
            s.addToCartButton.prop('disabled', true);
            s.addToCartButton.find('span').text(addToCartUnavailable);
            s.addToCartButton.find('i').hide();
          }

        },

        setNewPrice: function () {
          s.newPriceWrapper.text(Shop.money_format.replace('{{amount}}', s.currentVariant.price));
          if (s.oldPriceWrapper) {
            s.oldPriceWrapper.text(Shop.money_format.replace('{{amount}}', s.currentVariant.priceRegular));
          }
          var productIdPo = $('body').find('#productIdPo');
          if (productIdPo.length) {
            productIdPo.attr('data-price', s.currentVariant.price).attr('data-regular-price', s.currentVariant.priceRegular);
            Shop.productOptions.setNewPrice()
          }
        },


        setNewImage: function () {
          s.thumbsWrapper.imagesLoaded(function() {
            var thumb = s.thumbsWrapper.find('.shb-thumb-item') || s.galleryWrapper.find('.shb-gallery-item'),
              i;

            for (i = 0; i < thumb.length; i += 1) {
              if (s.thumbsWrapper.length) {
                if ($(thumb[i]).find('img').attr('src') === s.currentVariant.image) {
                  $(thumb[i]).find('img').trigger('click');
                }
              } else {
                if ($(thumb[i]).data('thumb') === s.currentVariant.image) {
                  var index = $(thumb[i]).data('hash');
                  s.galleryWrapper.find('.slick-dots li:eq('+ index +') button').trigger('click');

                }
              }
            }
          })
        },

        setNewShippingInfo: function (variant) {
          var shippingDefault = s.shippingInfoWrapper.data('shipping-default');
          if (s.shippingInfoWrapper.length) {
            if (s.currentVariant.shipping.length) {
              s.shippingInfoWrapper.find(s.shippingInfo).html(s.currentVariant.shipping);
            } else {
              s.shippingInfoWrapper.find(s.shippingInfo).html(shippingDefault);
            }
          }
        },

        checkVariantAvailability: function (variant) {
          if (parseInt(variant.quantity) > 0 || variant.quantity === '0' && variant.available === '1') {
            return true;
          } else {
            return false;
          }
        },


        initForm: function () {
          var selectProperties = s.options.first().find(gs.propertiesHandler),
            properties,
            propertyVariants,
            currentProperty,
            urlParams = ProductVariants.getUrlParams(),
            paramProperty = null,
            paramVariantId = null;
          properties = selectProperties.find(gs.propertyHandler);

          if (Object.keys(urlParams).length) {
            paramProperty = Object.keys(urlParams).some(function(k){ return ~k.indexOf('property') });
            paramVariantId = urlParams.variant_id;
          }

          if (paramVariantId) {
            var variant = variants.filter(function(variant){
              return variant.id === parseInt(paramVariantId);
            });
            s.currentVariant = variant[0];
            ProductVariants.setVariant();
            return false;
          } else if (paramProperty) {
            var propertiesArray = [];
            propertyVariants = [];
            for (var key in urlParams) {
              if (key.startsWith('property')) {
                var propName = key.replace('property[','').replace(']', ''),
                  propValue = urlParams[key];
                propertiesArray.push({name: decodeURI(propName), value: decodeURI(propValue)})
              }
            }
            propertyVariants = getVariants(propertiesArray);
            s.currentVariant = propertyVariants[0];
            ProductVariants.setVariant();
            return false;
          } else {
            $.each(properties, function(){
              currentProperty = $(this);
              var propName = selectProperties.data('property-name');
              var propValue = currentProperty.data('property-value');
              propertyVariants = getVariants([{name: propName, value: propValue}]);
              if(propertyVariants != null && ProductVariants.checkVariantAvailability(propertyVariants[0])) {
                s.currentVariant = propertyVariants[0];
                ProductVariants.setVariant();
                return false;
              }
            });
          }

          if(s.currentVariant == null)
            ProductVariants.deactivateAllProperties();
        },

        getUrlParams: function(url) {
          if (typeof url == 'undefined') {
            url = window.location.search
          }
          var url = url.split('#')[0],
            urlParams = {},
            queryString = url.split('?')[1];

          if (!queryString) {
            if (url.search('=') !== false) {
              queryString = url
            }
          }
          if (queryString) {
            var keyValuePairs = queryString.split('&')
            for (var i = 0; i < keyValuePairs.length; i++) {
              var keyValuePair = keyValuePairs[i].split('=')
              var paramName = keyValuePair[0]
              var paramValue = keyValuePair[1] || ''
              urlParams[paramName] = decodeURIComponent(paramValue.replace(/\+/g, ' '))
            }
          }
          return urlParams
        }
      };

    return ProductVariants.init();

  };

  $.fn.productVariants.defaults = {
    variantsContainer: '.shb-variants',
    propertyContainer: '.shb-variant-option',
    propertyHandler: '.shb-property',   // for box properties
    propertiesHandler: '.shb-properties', //for properties in select input
    addToCartButton: '[add-to-cart-button]',
    changeAddToCartButtonState: true, //if active, we change add to cart button to disable when current variant i disabled
    inputVariantId: 'input[name=id]',
    newPriceWrapper: '.shb-new-price span',
    oldPriceWrapper: '.shb-old-price span',
    galleryWrapper: '.shb-main-gallery',
    thumbsWrapper: '.shb-thumbs-gallery',
    shippingInfoWrapper: '.shb-shipping-info',
    shippingInfo: 'span',
    selectricSelect: true
  };

}(jQuery));
