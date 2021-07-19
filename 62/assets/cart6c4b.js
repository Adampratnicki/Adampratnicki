/*jslint browser: true*/
/*global $, jQuery, alert, //console,*/

;(function ($) {
	'use strict'

	$.fn.cartOptions = function (options) {
		var s,
			gs = $.extend({}, $.fn.cartOptions.defaults, options),
			cartOptions = {
				settings: {
					cart: $(gs.cartSummary),
					products: $(gs.cartSummary).find(gs.products),
					quantityInput: $(gs.products).find(gs.quantityInput),
					deleteItem: $(gs.products).find(gs.deleteItem),
					cartPrice: $(gs.cartPrice),
					cartWidgetPrice: $(gs.cartWidgetPrice),
					cartItemCount: $(gs.cartItemCount),
					decreaseButton: $(gs.decreaseButton),
					increaseButton: $(gs.increaseButton),
					removeAllButton: $(gs.removeAllButton),
					cartList: $(gs.cartList),
					sideMenu: $(gs.sideMenu),
					productAddToCartButton: $('.shb-product-list figure figcaption form button[type="submit"], [add-to-cart-button]'),
					slidingCartWidgetTrigger: $('[cart-widget-trigger]'),
					productAddDone: gs.productAddDone,
					cartDefaultDeliveryCostWrapper: $(gs.cartDefaultDeliveryCostWrapper),
					eventBus: typeof EventBus !== 'undefined'
				},

				init: function () {
					s = this.settings;
					this.bindUIActions()
					if (gs.showFreeShippingInfo == true) {
						this.updateFreeShippingInfo($(gs.cartSumPrice).data('sum'))
					}
					if (gs.showDefaultDeliveryCost == true) {
						cartOptions.sumAllProducts()
					}
					cartOptions.gs = gs;
					if (s.eventBus) {
						setTimeout(function(){
							EventBus.dispatch('cartOptionsInit', 'shopCart');
						}, 100)

					}
					return cartOptions;
				},
				productCartEvents: function () {
					$(gs.increaseButton).on('click', function () {
						var input = $(this).siblings(gs.quantityInput)
						if (!input.prop('disabled')) {
							var val = parseInt(input.val())
							input.val(val + 1)
							input.change()
						}
					});
					$(gs.decreaseButton).on('click', function () {
						var input = $(this).siblings(gs.quantityInput)
						if (!input.prop('disabled')) {
							var val = parseInt(input.val())
							input.val(val - 1)
							input.change()
						}
					});
					$(gs.quantityInput).keypress(function (event) {
						if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
							event.preventDefault()
						}
					});
					$(gs.quantityInput).on('focusin', function(){
						$(this).data('old', $(this).val());
					});
					$(gs.quantityInput).keyup(function (event) {
						var keyCode = event.which
						if (keyCode > 57) {
							keyCode -= 48
						}
						if (event.which != 8 && isNaN(String.fromCharCode(keyCode))) {
							event.preventDefault()
						} else {
							cartOptions.onInputChange($(this), false)
						}
					});
					$(gs.quantityInput).on('change', function () {
						if (!$.isNumeric($(this).val()) || $(this).val() <= 0) {
							$(this).val(1)
						}
						cartOptions.onInputChange($(this), true)
					});
					$(gs.deleteItem).on('click', function (e) {
						e.preventDefault()
						var product = $(this).parents(gs.products),
							line = product.index('[cart-product]:not(.shb-item-template)')+1;

						cartOptions.ajaxUpdateCart(line, 0, product)
					});
				},
				bindUIActions: function () {
					cartOptions.productCartEvents()
					$(gs.removeAllButton).on('click', function (e) {
						e.preventDefault()
						cartOptions.ajaxClearCart()
					});
					// dynamic things
					if (gs.isDynamic) {
						s.slidingCartWidgetTrigger.on('click', function (e) {
							e.preventDefault()
							cartOptions.toggleSlidingCartWidget('toggle')
						});
						$(document).keyup(function (e) {
							if (e.keyCode == 27) { // escape key maps to keycode `27`
								cartOptions.toggleSlidingCartWidget('close')
							}
						});
						$(document).mouseup(function (e) {
							var container = $('[sliding-cart-widget]')

							if (!container.is(e.target) // if the target of the click isn't the container...
								&& container.has(e.target).length === 0) // ... nor a descendant of the container
							{
								cartOptions.toggleSlidingCartWidget('close')
							}
						});

						s.productAddToCartButton.on('click', function (e) {

							$(this).attr('disabled','true');
							e.preventDefault()
							var thisElement = $(this)
							cartOptions.productAddToCart(thisElement)

							if(thisElement.parents().find('.product-list').length){
								cartOptions.productListGetProgressivPrice(thisElement)
							}
						});
					}
				},
				productAddToCart: function ($this) {
					var thisForm = $this.parents('form'),
						productId = thisForm.find('input[name="id"]').val(),
						id = thisForm.find('input[name="id"]').attr('data-product-id'),
						productQty = thisForm.find('input[name="quantity"]').val()
					if (productQty == undefined) {
						productQty = 1
					}
					cartOptions.productAddToCartDynamic(productId, productQty, id, $this)
					
										if ($('.mini-products-list-total-price').text().replace(' zł','') * 1 > 2200) {

						$('#valueInfo').addClass('visible-value-info');

						$('#toCartBtn').addClass('hidden-button');


					} else {
						$('#valueInfo').removeClass('visible-value-info');
						$('#toCartBtn').removeClass('hidden-button');


					}
					
				},


				productAddToCartDynamic: function(variantId, productQty, productId, $button) {
					if (s.eventBus) {
						EventBus.dispatch('beforeProductAdd', 'shopCart', variantId);
					}
					SHOPLOAJAX.addProductToCart(variantId, productQty).done(function (data) {
						if ($button) {
							$button.removeAttr('disabled');
						}
						if (data.result === true) {
							if (gs.isDynamic) {
								if (productId){
									cartOptions.productGetProgressivPrice(productId, variantId);
								}
							} else {
								Shop.shbNotification.showShopMessage(data.message, 'success')
							}

							cartOptions.updateCart()
							$('body').toggleClass('shb-show-cart-widget')
							if (s.productAddDone !== null) {
								s.productAddDone.call(this)
								if (s.eventBus) {
									EventBus.dispatch('afterProductAdd', 'shopCart', productId);
								}
							}
						} else {
							Shop.shbNotification.showShopMessage(data.message, 'error')
						}

					})
				},

				productGetProgressivPrice: function(id, variantId){


					if (typeof isProgressiv !== 'undefined') {

						$.ajax({
							type: 'GET',
							url: '/ajax/?method=shop.products.info',
							data: {
								id: id
							},
							dataType: 'json'
						}).done(function(data) {

							$.each(data.variants, function(k, v) {
								if (variants[k]) {
									variants[k].price = parseFloat(v.price/100, 10).toFixed(2);
								}

								if(v.id == variantId){
									var price = parseFloat(v.price/100, 10),
										priceRegular = parseFloat(v.price_regular/100, 10);

									if(price != priceRegular){
										$('body').find('[product-price-new]').find('span').text(Shop.money_format.replace('{{amount}}', price.toFixed(2)));

										if($('body').find('[product-price-old]').length == 0){
											$('body').find('[product-price]:not([cart-list] [product-price])').append('<span class="shb-old-price" product-price-old><span>' + Shop.money_format.replace('{{amount}}', priceRegular.toFixed(2)) + '</span></span>');
										}

									}else{
										$('body').find('[product-price-new]').removeClass('red').find('span').text(Shop.money_format.replace('{{amount}}', price.toFixed(2)));

										if($('body').find('[product-price-old]').length != 0){
											$('body').find('[product-price-old]').remove();
										}
									}

									if($('body').find('[product-properties]').length){
										$('body').find('[product-properties]').blur();
									}
								}
							});
						});
					}
				},

				productListGetProgressivPrice: function($this){

					var $product = $this.parents('figcaption'),
						variantId = $product.find('input[name="id"]').val(),
						id = $product.find('input[name="id"]').attr('data-product-id');


					$.ajax({
						type: 'GET',
						url: '/ajax/?method=shop.products.info',
						data: {
							id: id
						},
						dataType: 'json'
					}).done(function(data) {

						$.each(data.variants, function(k, v) {

							if(v.id == variantId){

								var price = parseFloat(v.price/100, 10),
									priceRegular = parseFloat(v.price_regular/100, 10);

								if(price != priceRegular){
									if($product.find('.shb-product-list-price .shb-product-list-old-price').length == 0){
										$product.find('.shb-product-list-price span').remove();
										$product.find('.shb-product-list-price').append('<span class="shb-product-list-old-price">' + Shop.money_format.replace('{{amount}}', priceRegular.toFixed(2)) + '</span>');
										$product.find('.shb-product-list-price').append('<span class="shb-product-list-new-price">' + Shop.money_format.replace('{{amount}}', price.toFixed(2)) + '</span>');
									}else{
										$product.find('.shb-product-list-price .shb-product-list-new-price').text(Shop.money_format.replace('{{amount}}', price.toFixed(2)));
									}


								}else{
									$product.find('.shb-product-list-price .shb-product-list-new-price').text(Shop.money_format.replace('{{amount}}', price.toFixed(2)));

									if($product.find('.shb-product-list-price .shb-product-list-old-price').length != 0){
										$product.find('.shb-product-list-price .shb-product-list-old-price').remove();
									}
								}
							}
						});
					});
				},

				cartGetProgressivPrice: function(id, variantId){

					$.ajax({
						type: 'GET',
						url: '/ajax/?method=shop.products.info',
						data: {
							id: id
						},
						dataType: 'json'
					}).done(function(data) {

						$.each(data.variants, function(k, v) {

							if(v.id == variantId){
								var price = parseFloat(v.price/100, 10);

								$('body').find(`[cart-product][data-variant-id='${variantId}']`).find('[product-quantity]').attr('data-price', price.toFixed(2));
								$('body').find(`[cart-product][data-variant-id='${variantId}']`).find('[product-price]').text(Shop.money_format.replace('{{amount}}', price.toFixed(2)));

								cartOptions.sumAllProducts()
							}
						});
					});
				},

				updateCart: function ($this) {
					if ($('.mini-products-list-total-price').text().replace(' zł','') * 1 > 2200) {

						$('#valueInfo').addClass('visible-value-info');

						$('#toCartBtn').addClass('hidden-button');


					} else {
						$('#valueInfo').removeClass('visible-value-info');
						$('#toCartBtn').removeClass('hidden-button');


					}
					setTimeout(function() {
						if ($('.mini-products-list-total-price').text().replace(' zł','') * 1 > 2200) {

							$('#valueInfo').addClass('visible-value-info');
							$('#toCartBtn').addClass('hidden-button');
							console.log('wincyj')

						} else {

							$('#valueInfo').removeClass('visible-value-info');
							$('#toCartBtn').removeClass('hidden-button');
							console.log('mnij')

						}
						if ($('span.shb-total-price').text().replace(' zł','') * 1 > 2200) {

							$('#valueInfoCart').addClass('visible-value-info');
							$('#toCheckout').addClass('hidden-button');
							console.log('wincyj')

						} else {

							$('#valueInfoCart').removeClass('visible-value-info');
							$('#toCheckout').removeClass('hidden-button');
							console.log('mnij')

						}
					}, 300);


					console.log('Test')



					if (s.eventBus) {
						EventBus.dispatch('beforeUpdateCart', 'shopCart');
					}
					var cartList = $('[cart-list]'),
						itemTemplate = cartList.find('.shb-item-template'),
						cartListEmpty = $('[empty-cart]');

					SHOPLOAJAX.getCart().done(function (data) {
						if (data.item_count != 0) {
							if(itemTemplate.length) {
								s.cartList.parents('form').removeClass('is-hidden');
								cartListEmpty.addClass('is-hidden');
								$(gs.products).remove()
							}

							$.each(data.items, function (i, val) {
								var price = parseFloat(val.price / 100).toFixed(2),
									priceOriginal = parseFloat(val.price_original / 100).toFixed(2);

								if(itemTemplate.length){
									var newItem = itemTemplate.clone();

									if (val.properties.length) {
										$.each(val.properties, function (i, item) {
											if (typeof item.value === 'string' && item.title !== Shop.bogo_property_name) {
												if (item.value.indexOf('/storeuploads') !== -1) {
													var prop = '<li>' + val.title + ': ' +   '<a href="' + item.value + '" target="_blank">' + uploadedFileTrans + '</a></li>'
													} else {
														var prop = '<li>' + item.title + ': ' + item.value + '</li>'
														}
												newItem.find('[item-properties]').append(prop);
											} else if (item.title === Shop.bogo_property_name) {
												newItem.find('[increase-quantity]').remove();
												if (newItem.find('[decrease-quantity]').length) {
													newItem.find('[product-quantity]').attr('readonly', true);
												}
											}
											if (typeof BUNDLES_APP !== 'undefined') {
												if ((item.title === 'Zestaw' || item.title === 'Bundle')) {
													newItem.attr('data-bundle-key', item.value);
													var variantQuantityKey = BUNDLES_APP.variantQuantityKey(item.value, val.variant_id);
													if (variantQuantityKey > 1) {
														newItem.attr('data-bundle-product-qty', variantQuantityKey);
													}
												}
											}
										});
									}

									newItem.attr('data-variant-id', val.variant_id);
									newItem.attr('data-product-id', val.product_id)
									newItem.find(gs.priceText).text(Shop.money_format.replace('{{amount}}', price))
									if (val.price_original && price < priceOriginal) {
										$('<span product-price-original class="shb-item-price shb-item-price-old">' + Shop.money_format.replace('{{amount}}', priceOriginal) + '</span>').insertBefore(newItem.find(gs.priceText));
									}
									newItem.find('[item-image] img').attr('src', val.image.replace('th1024', 'th160'))
									newItem.find('a[item-image]').attr('href', val.url)
									newItem.find('[product-quantity]').val(val.quantity)
									newItem.find('[product-quantity]').attr('data-current-id', val.variant_id)
									newItem.find('[product-quantity]').attr('data-price', price)
									$.each(val.variant_properties, function (i, val) {
										var variant = '<li>' + val.name + ': ' + val.value + '</li>'
										newItem.find('[item-properties]').append(variant)
									})
									newItem.find('[item-title]').text(val.product_title)
									if (val.vendor != '') {
										newItem.find('[product-vendor]').text(val.vendor)
									}
									newItem.hide()
									newItem.removeClass('shb-item-template').appendTo(cartList).fadeIn()

									if (gs.isDynamic) {
										if ($('body').find(`.product-list input[data-product-id='${val.product_id}']`).length) {
											var thisElement = $('body').find(`.product-list input[data-product-id='${val.product_id}']`);
											cartOptions.productListGetProgressivPrice(thisElement);

										}
									}
								}else{
									var cartItem = $('body').find(`[cart-product][data-product-id='${val.product_id}']`);

									if (val.properties.length) {
										$.each(val.properties, function (i, item) {
											if (typeof item.value === 'string') {
												if (val.value.indexOf('/storeuploads') !== -1) {
													var prop = '<li>' + val.title + ': ' + '<a href="' + val.value + '" target="_blank">' + uploadedFileTrans + '</a></li>'
													} else {
														var prop = '<li>' + item.title + ': ' + item.value + '</li>'
														}
											}
											if (typeof BUNDLES_APP !== 'undefined') {
												if ((item.title === 'Zestaw' || item.title === 'Bundle')) {
													cartItem.attr('data-bundle-key', item.value);
													var variantQuantityKey = BUNDLES_APP.variantQuantityKey(item.value, val.variant_id);
													if (variantQuantityKey > 1) {
														cartItem.attr('data-bundle-product-qty', variantQuantityKey);
													}
												}
											}
										});
									}

									cartItem.find('[product-quantity]').val(val.quantity);
									cartItem.find('[product-quantity]').attr('data-price', price);
									cartItem.find('[product-price]').not('.product-price-sum').text(Shop.money_format.replace('{{amount}}', price));
								}
							});
							cartOptions.productCartEvents()
						} else {
							cartList.parents('form').addClass('is-hidden')
							cartListEmpty.removeClass('is-hidden')
						}
						if (s.eventBus) {
							EventBus.dispatch('afterUpdateCart', 'shopCart');
						}
						cartOptions.sumAllProducts()
					})
				},

				toggleSlidingCartWidget: function (action) {
					if (action == 'toggle') {
						$('body').toggleClass('shb-show-cart-widget')
					} else if (action == 'close') {
						$('body').removeClass('shb-show-cart-widget')
					}
					return false
				},

				onInputChange: function (input, change) {
					if (input.data('last') != input.val()) {
						var product = input.parents(gs.products),
							variantID = product.attr('data-variant-id'),
							id = product.attr('data-product-id'),
							line = product.index('[cart-product]:not(.shb-item-template)')+1;



						input.data('last', input.val())
						input.data('focus', !change)
						if (input.val() > 0) {
							cartOptions.ajaxUpdateCart(line, input.val(), product);
							if (!gs.isDynamic) {
								cartOptions.cartGetProgressivPrice(id, variantID);
							}else{
								cartOptions.sumAllProducts()
							}
						}
					}
				},
				sumAllProducts: function () {
					if (s.eventBus) {
						EventBus.dispatch('beforeSumAllProductsCart', 'shopCart');
					}
					var overall = 0
					var count = 0
					$.each($(gs.products), function () {
						var amount = parseFloat($.trim($(this).find(gs.quantityInput).val() | 0), 10)
						var price = parseFloat($.trim($(this).find(gs.quantityInput).attr('data-price')), 10)
						var childsPrice = parseFloat($(this).attr('data-childs-price'), 10) || 0;
						if (childsPrice) {
							var productOverall = amount * (price + childsPrice),
								productPrice = (price + childsPrice);
							overall += productOverall
						} else {
							var productOverall = amount * price
							overall += amount * price
						}


						count += amount

						if ($(this).find(gs.priceText).length && typeof productPrice !== 'undefined') {
							$(this).find(gs.priceText).text(Shop.money_format.replace('{{amount}}', productPrice.toFixed(2)))
						}

						if ($(this).find(gs.productPriceSumWrapper).length) {
							$(this).find(gs.productPriceSumWrapper).text(Shop.money_format.replace('{{amount}}', productOverall.toFixed(2)))
						}
					})
					var priceWithoutDelivery = parseFloat(overall).toFixed(2)
					if ($('[cart-sum-without-shipping]').length) {
						$('[cart-sum-without-shipping]').find('p').text(Shop.money_format.replace('{{amount}}', priceWithoutDelivery))
					}
					if (gs.showDefaultDeliveryCost && (gs.showFreeShippingInfo && ((parseFloat(overall) < parseFloat(cart_free_delivery_price))) || !gs.showFreeShippingInfo)) {
						var newPrice = parseFloat(overall) + parseFloat(gs.cartDefaultDeliveryCost)
						newPrice = newPrice.toFixed(2)
					} else {
						var newPrice = parseFloat(overall).toFixed(2)
						}


					if (parseFloat(s.cartPrice.text()) != newPrice) {
						$(gs.cartPrice).text(Shop.money_format.replace('{{amount}}', newPrice));
						$(gs.cartWidgetPrice).text(Shop.money_format.replace('{{amount}}', newPrice));
						$(gs.cartSumPrice).data(priceWithoutDelivery);
						$(gs.cartItemCount).text(count);
					}
					if (gs.showFreeShippingInfo == true && $(gs.products).length != 0) {
						cartOptions.updateFreeShippingInfo(priceWithoutDelivery)
					}

					if (gs.isDynamic) {
						if ($(gs.cartWidgetSummary).find(gs.products).length == 0) {
							$('[minicart-summary]').addClass('is-hidden')
							$('[empty-cart]').removeClass('is-hidden')
							$('.shb-cart-free-shipping-info').remove()
						}
					} else {
						if ($(gs.cartSummary).find(gs.products).length == 0) {
							$('[cart-summary]').addClass('is-hidden')
							$('[empty-cart]').removeClass('is-hidden')
							$('.shb-cart-free-shipping-info').remove()
						}
					}
					if (s.eventBus) {
						EventBus.dispatch('afterSumAllProductsCart', 'shopCart');
					}
				},
				onRemoveProduct: function (product) {
					if (s.eventBus) {
						EventBus.dispatch('beforeRemoveProduct', 'shopCart', product);
					}
					product.fadeOut(500, function () {
						product.remove()
						if (gs.isDynamic) {
							var productList = $(gs.cartWidgetSummary).find(gs.products)
							} else {
								var productList = $(gs.cartSummary).find(gs.products)
								}
						s.products = $(gs.cartSummary).find(gs.products);
						cartOptions.sumAllProducts();
						if (s.eventBus) {
							EventBus.dispatch('afterRemoveProduct', 'shopCart', product);
						}
					})
				},

				ajaxUpdateCart: function (itemLine, qty, product) {
					var ajaxUpdateCartData = {
						itemLine: itemLine,
						qty: qty,
						product: product
					}
					if (s.eventBus) {
						EventBus.dispatch('beforeAjaxUpdateCart', 'shopCart', ajaxUpdateCartData);
					}
					var input = product.find(gs.quantityInput),
						variantId = product.attr('data-variant-id'),
						id = product.attr('data-product-id');

					input.prop('disabled', true)
					SHOPLOAJAX.changeCart(itemLine, qty)
						.done(function (data) {
						if (data.status === 'ok') {
							if (s.eventBus) {
								EventBus.dispatch('ajaxUpdateCartDoneOk', 'shopCart', ajaxUpdateCartData);
							}
							if (qty == 0) {
								if (!gs.isDynamic) {
									Shop.shbNotification.showShopMessage(data.message, 'success')
								}
								cartOptions.onRemoveProduct(product)
							}

							if (gs.isDynamic) {
								if($('body').find(`.product-list input[data-product-id='${id}']`).length){
									var thisElement = $('body').find(`.product-list input[data-product-id='${id}']`);
									cartOptions.productListGetProgressivPrice(thisElement);

								}else if($('body#page-product').find('form input[data-product-id]').length){

									var thisId = $('body#page-product').find('form input[data-product-id]').attr('data-product-id'),
										thisVariantId = $('body#page-product').find('form input[data-product-id]').val();

									cartOptions.productGetProgressivPrice(thisId, thisVariantId);
								}

							}
						} else {
							if (gs.isDynamic) {
								cartOptions.showShopMessage($(gs.cartWidgetSummary), data.message, 'error')
							} else {
								Shop.shbNotification.showShopMessage(data.message, 'error')
							}

							if (input.val() > data.max_quantity) {
								input.val(data.max_quantity)
								input.data('last', data.max_quantity)
								cartOptions.sumAllProducts()
							}
						}
						cartOptions.updateCart();
						input.prop('disabled', false)
						if (input.data('focus')) {
							input.focus()
						}
						if (s.eventBus) {
							EventBus.dispatch('afterAjaxUpdateCart', 'shopCart');
						}
					})
				},
				ajaxClearCart: function () {
					SHOPLOAJAX.clearCart()
						.done(function (data) {
						s.products.each(function () {
							cartOptions.onRemoveProduct($(this))
						})

						if (gs.isDynamic) {
							$('[minicart-summary]').addClass('is-hidden')
							$('[empty-cart]').removeClass('is-hidden')
						} else {
							$('[cart-summary]').addClass('is-hidden')
							$('[empty-cart]').removeClass('is-hidden')
						}
						// todo backend zwracać wiadomość i status
						/*if(data.result === true) {
                             Shop.shbNotification.showShopMessage(data.message, 'success')
                             s.products.each(function() {
                             cartOptions.onRemoveProduct($(this))
                             })
                             } else {
                             Shop.shbNotification.showShopMessage(data.message, 'error')
                             }*/
					})
				},
				updateFreeShippingInfo: function (total_price) {
					var infoBlock = $('<p />', {'class': gs.freeShippingInfoClass}),
						priceFreeShippingLabel = cart_free_delivery_info,
						priceToFreeShipping = parseFloat(cart_free_delivery_price),
						cartTotalPrice = parseFloat(total_price),
						freeShippingMessage = $('.shb-cart-free-shipping-info')

					if (cartTotalPrice < priceToFreeShipping) {
						var priceToGetFree = priceToFreeShipping - cartTotalPrice,
							message = cart_free_delivery_info.replace('{price}', '<b>' + Shop.money_format.replace('{{amount}}', priceToGetFree.toFixed(2)) + '</b>')
						infoBlock.append(message)
						if (freeShippingMessage.length) {
							freeShippingMessage.replaceWith(infoBlock)
						} else {
							infoBlock.hide()
							if ($('body').find('.shb-cart-free-shipping-info-wrapper').length) {
								$('body').find('.shb-cart-free-shipping-info-wrapper').removeClass('is-hidden').append(infoBlock.fadeIn())
							} else {
								$(gs.cartWidgetSummary).before(infoBlock.fadeIn())
							}
						}
						if (gs.showDefaultDeliveryCost) {
							s.cartDefaultDeliveryCostWrapper.removeClass('is-hidden');
						}
					} else {
						if (freeShippingMessage.length) {
							freeShippingMessage.fadeOut(function () {
								freeShippingMessage.remove();
								if ($('body').find('.shb-cart-free-shipping-info-wrapper').length) {
									$('body').find('.shb-cart-free-shipping-info-wrapper').addClass('is-hidden');
								}
							});
						}
						if (gs.showDefaultDeliveryCost) {
							s.cartDefaultDeliveryCostWrapper.addClass('is-hidden');
						}
					}
				},

				showShopMessage: function (parent, text, type) {
					if ($.trim(parent.find('.shb-cart-msg').text()) == '' && text && type) {
						parent.prepend('<p class="shb-cart-msg ' + type + '">' + text + '</p>')
					}
					setTimeout(function () {
						parent.find('.shb-cart-msg').fadeOut(function () {
							$(this).remove()
						})
					}, 3500)
				}
			}
		cartOptions.updateCartOutside = function () {
			cartOptions.updateCart()
			$('body').toggleClass('shb-show-cart-widget')
		}

		return cartOptions.init()
	}
	$.fn.cartOptions.defaults = {
		removeAllButton: '[remove-all-products]',
		products: '[cart-product]',
		cartSummary: 'form[cart-summary]',
		cartWidgetSummary: '[minicart-summary]',
		deleteItem: '[delete-item]',
		quantityInput: '[product-quantity]',
		productPriceSumWrapper: '[product-price-sum]',
		priceText: '[product-price]',
		increaseButton: '[increase-quantity]',
		decreaseButton: '[decrease-quantity]',
		cartSumPrice: '[sum-price]',
		cartPrice: '[sum-price] span',
		cartWidgetPrice: '[mini-products-list-total-price]',
		cartItemCount: '[cart-widget-total-count]',
		cartList: '[cart-list]',
		slidingCartWidget: '[sliding-cart-widget]',
		showFreeShippingInfo: true,
		freeShippingInfoClass: 'shb-cart-free-shipping-info',
		showDefaultDeliveryCost: true,
		cartDefaultDeliveryCost: cart_delivery_cost,
		cartDefaultDeliveryCostWrapper: '[cart-delivery-cost-wrapper]',
		isDynamic: false,
		dynamicCartType: 'right',
		productAddDone: null
	}
}(jQuery))
