/*jslint browser: true*/
/*global $, jQuery, alert, console, dict, prices, pricesRegular, images, shipping*/

(function($) {
	'use strict';
	$.fn.productFilters = function(options) {
		var s,
			selector = this,
			gs = $.extend({}, $.fn.productFilters.defaults, options),
			ProductFilters = {
				settings: {
					filtersToggleBtn: $('.shb-toggle-filters'),

					filterActiveProperty: window.location.search,
					filterSectionHandler: selector.find(gs.filterSectionHandler),

					filterProperties: gs.filterProperties,
					filterPropertiesHandler: gs.filterPropertiesHandler,
					filterPropertiesWrapper: selector.find(gs.filterPropertiesWrapper),
					filterPropertiesMultiple: gs.filterPropertiesMultiple,

					filterVendor: gs.filterVendor,
					filterVendorHandler: gs.filterVendorHandler,
					filterVendorWrapper: selector.find(gs.filterVendorWrapper),
					filterVendorMultiple: gs.filterVendorMultiple,

					filterPrice: gs.filterPrice,
					filterPriceHandler: gs.filterPriceHandler,
					filterPriceWrapper: selector.find(gs.filterPriceWrapper),
					filterPriceMultiple: gs.filterPriceMultiple,

					filterSort: gs.filterSort,
					filterSortHandler: gs.filterSortHandler,
					filterSortWrapper: selector.find(gs.filterSortWrapper),
					filterSortMultiple: gs.filterSortMultiple,

					filterTags: gs.filterTags,
					filterTagsHandler: gs.filterTagsHandler,
					filterTagsWrapper: selector.find(gs.filterTagsWrapper),
					filterTagsMultiple: gs.filterTagsMultiple,

					filterUseSelectric: gs.filterUseSelectric,

					sliderRangeHandler: selector.find(gs.sliderRangeHandler),
					sliderRangeInputHandler: gs.sliderRangeInputHandler,
					sliderRangeAmountMinHandler: selector.find(gs.sliderRangeAmountMinHandler),
					sliderRangeAmountMaxHandler: selector.find(gs.sliderRangeAmountMaxHandler),
					sliderRangeConfirmHandler: selector.find(gs.sliderRangeConfirmHandler),
					sliderRangeMinValueDefault: gs.sliderRangeMinValueDefault,
					sliderRangeMaxValueDefault: gs.sliderRangeMaxValueDefault,
					sliderRangeCurrency: gs.sliderRangeCurrency,

					filterSingleClearHandler: selector.find(gs.filterSingleClearHandler),
					filterActiveFilterRemove: $(gs.filterActiveFilterRemove),

					prodListContainer: gs.prodListContainer,
					gridCol2: selector.find(gs.gridCol2),
					gridCol3: selector.find(gs.gridCol3),

					filterSubmitButton: selector.find(gs.filterSubmitButton),

					selectUrl: selector.find(gs.selectUrl)
				},
				init: function() {
					s = this.settings;
					if ($(window).width() < 767) {
						s.filterUseSelectric = false;
					}
					this.bindUIActions();
					this.initFilters();
				},

				bindUIActions: function() {
					s.filtersToggleBtn.on('click', function() {
						ProductFilters.toggleFiltersContainer($(this));
					});

					s.filterSectionHandler.find('input[type="checkbox"]').on('click', function(e) {
						var $this = $(this),
							$thisParentType = $(this)
						.closest(s.filterSectionHandler)
						.data('filter-type');
						if (
							$thisParentType == 'filter-property' &&
							(s.filterPropertiesHandler == 'shb-checkbox' || s.filterPropertiesHandler == 'shb-checkbox-color') &&
							s.filterPropertiesMultiple === false
						) {
							ProductFilters.checkActiveCheckboxOption($this);
						} else if (
							$thisParentType == 'filter-vendor' &&
							s.filterVendorHandler == 'shb-checkbox' &&
							s.filterVendorMultiple === false
						) {
							ProductFilters.checkActiveCheckboxOption($this);
						} else if (
							$thisParentType == 'filter-tags' &&
							s.filterTagsHandler == 'shb-checkbox' &&
							s.filterTagsMultiple === false
						) {
							ProductFilters.checkActiveCheckboxOption($this);
						} else if ($thisParentType == 'filter-sort' && s.filterSortHandler == 'shb-checkbox') {
							ProductFilters.checkActiveCheckboxOption($this);
						} else if ($thisParentType == 'filter-price' && s.filterPriceHandler == 'shb-checkbox') {
							ProductFilters.checkActiveCheckboxOption($this);
						}
						if (selector[0].id !== 'filtersMobile') {
							ProductFilters.filterResults();
						}
					});

					s.filterSectionHandler.find('select').on('change', function() {
						var $this = $(this);
						if (selector[0].id !== 'filtersMobile') {
							ProductFilters.filterResults();
						}
					});

					s.sliderRangeConfirmHandler.on('click', function(e) {
						e.preventDefault();
						if (selector[0].id !== 'filtersMobile') {
							ProductFilters.filterResults();
						}
					});
					s.gridCol2.on('click', function() {
						$(this).addClass('active');
						s.gridCol3.removeClass('active');
						s.prodListContainer
							.find('.span-prod-3')
							.removeClass('span-prod-3')
							.addClass('span-prod-2');
					});
					s.gridCol3.on('click', function() {
						$(this).addClass('active');
						s.gridCol2.removeClass('active');
						s.prodListContainer
							.find('.span-prod-2')
							.removeClass('span-prod-2')
							.addClass('span-prod-3');
					});

					s.selectUrl.on('change', function() {
						var $this = $(this);
						ProductFilters.selectGoToUrl($this);
					});

					s.filterSingleClearHandler.on('click', function() {
						var section = $(this).parents('.shb-filters-filter-section'),
							propertiesStorage = '';

						if (section.find('input[type="checkbox"]').length) {
							section.find('input[type="checkbox"]').prop('checked', false);
						} else if (section.find('select').length) {
							section.find('select').val('0');
						} else if (section.find(s.sliderRangeInputHandler).length) {
							section
								.find(s.sliderRangeInputHandler)
								.val(ProductFilters.setRangeValue(s.sliderRangeMinValueDefault, s.sliderRangeMaxValueDefault))
								.change();
						}
						ProductFilters.clearLocalStorageSingleFilter(section.data('filter-type'));
						if (selector[0].id !== 'filtersMobile') {
							ProductFilters.filterResults();
						}
					});

					s.filterSubmitButton.on('click', function() {
						ProductFilters.filterResults();
					});

					s.filterActiveFilterRemove.on('click', function() {
						var filter = $(this).data('filter'),
							split = filter.split('='),
							type = split[0],
							value = split[1];

						if (type.indexOf('properties') !== -1) {
							var propName = type.replace('properties[', '').replace(']', '');
							ProductFilters.removeActiveFilter(propName, value);
						} else if (type === 'vendor' || type === 'tags') {
							ProductFilters.removeActiveFilter(type, value);
						} else if (type === 'sort') {
							ProductFilters.removeActiveFilter('sort', filter);
						} else {
							selector
								.find(s.sliderRangeInputHandler)
								.val(ProductFilters.setRangeValue(s.sliderRangeMinValueDefault, s.sliderRangeMaxValueDefault));
						}

						ProductFilters.filterResults();

						$(this).fadeOut();
					});
				},

				toggleFiltersContainer(elem) {
					var containerClass = elem.data('filters-container'),
						container = $('.' + containerClass);

					container.toggleClass('shb-collapse');

					if (container.hasClass('shb-collapse')) {
						container.slideUp('easeIn');
					} else {
						container.slideDown('easeIn');
					}
				},
				removeActiveFilter: function(name, value) {
					var element;
					if (name == 'sort') {
						element = selector.find('[name="sort"]') || selector.find('[name="' + value + '"]');
					} else {
						element = selector.find('[name="' + name + '"]');
					}

					if (element.is('select')) {
						element.val(element.find('option:first').val());
					} else {
						selector.find('input[name="' + name + '"][value="' + value + '"]').prop('checked', false);
					}
				},
				checkActiveCheckboxOption: function(target) {
					if (target.is(':checked')) {
						target
							.closest(s.filterSectionHandler)
							.find('input[type="checkbox"]')
							.each(function() {
							$(this).prop('checked', false);
						});
						target.prop('checked', true);
					}
				},

				findActiveFilterProperties: function(filterActiveProperty) {
					var propertiesStorage = [];

					if (s.filterPropertiesHandler == 'shb-checkbox' || s.filterPropertiesHandler == 'shb-checkbox-color') {
						s.filterPropertiesWrapper.find('input[type="checkbox"]').each(function() {
							propertiesStorage.push('properties[' + $(this).attr('data-name') + ']');

							clearPropertiesStorage(propertiesStorage);

							var $this = $(this);
							if (s.filterPropertiesMultiple === true) {
								$.each(propertiesStorage, function(i, val) {
									if (localStorage.getItem(val) !== null) {
										var localStoragePropertyValues = localStorage.getItem(val).split('+');
										if (localStoragePropertyValues.indexOf($this.val()) > -1) {
											$this.attr('checked', 'checked');
										}
									}
								});
							} else {
								$.each(propertiesStorage, function(i, val) {
									if (localStorage.getItem(val) == $this.val()) {
										$this.attr('checked', 'checked');
									}
								});
							}
						});
					} else if (s.filterPropertiesHandler == 'select') {
						s.filterPropertiesWrapper.find('select option').each(function() {
							propertiesStorage.push(
								'properties[' +
								$(this)
								.parent()
								.attr('data-name') +
								']'
							);
							var $this = $(this);

							clearPropertiesStorage(propertiesStorage);

							$.each(propertiesStorage, function(i, val) {
								if (localStorage.getItem(val) == $this.val()) {
									$this.attr('selected', 'selected');
								}
							});
						});
						if (s.filterUseSelectric === true) {
							s.filterPropertiesWrapper.find('select').selectric('refresh');
						}
					}
					function clearPropertiesStorage(propertiesStorage) {
						if (filterActiveProperty == '') {
							$.each(propertiesStorage, function(i, val) {
								localStorage.removeItem(val);
							});
						}
					}
				},

				findActiveFilterVendors: function(filterActiveProperty) {
					var vendorsStorage = [];

					if (filterActiveProperty == '') {
						localStorage.removeItem('vendor');
					}

					if (s.filterVendorHandler == 'shb-checkbox') {
						s.filterVendorWrapper.find('input[type="checkbox"]').each(function() {
							var $this = $(this);
							if (s.filterVendorMultiple === true && localStorage.getItem('vendor') !== null) {
								vendorsStorage = localStorage.getItem('vendor').split('+');
								$.each(vendorsStorage, function(i, val) {
									if (val == $this.val()) {
										$this.attr('checked', 'checked');
									}
								});
							} else {
								if (localStorage.getItem('vendor') == $this.val()) {
									$this.attr('checked', 'checked');
								}
							}
						});
					} else if (s.filterVendorHandler == 'select') {
						s.filterVendorWrapper.find('select option').each(function() {
							var $this = $(this);

							if (localStorage.getItem('vendor') == $this.val()) {
								$this.attr('selected', 'selected');
							}
						});
						if (s.filterUseSelectric === true) {
							s.filterVendorWrapper.find('select').selectric('refresh');
						}
					}
				},

				findActiveFilterTags: function(filterActiveProperty) {
					var tagsStorage = [];

					if (filterActiveProperty == '') {
						localStorage.removeItem('tags');
					}

					if (s.filterTagsHandler == 'shb-checkbox') {
						s.filterTagsWrapper.find('input[type="checkbox"]').each(function() {
							var $this = $(this);
							if (s.filterTagsMultiple === true && localStorage.getItem('tags') !== null) {
								tagsStorage = localStorage.getItem('tags').split('+');
								$.each(tagsStorage, function(i, val) {
									if (val == $this.val()) {
										$this.attr('checked', 'checked');
									}
								});
							} else {
								if (localStorage.getItem('tags') == $this.val()) {
									$this.attr('checked', 'checked');
								}
							}
						});
					} else if (s.filterTagsHandler == 'select') {
						s.filterTagsWrapper.find('select option').each(function() {
							var $this = $(this);

							if (localStorage.getItem('tags') == $this.val()) {
								$this.attr('selected', 'selected');
							}
						});
						if (s.filterUseSelectric === true) {
							s.filterTagsWrapper.find('select').selectric('refresh');
						}
					}
				},

				findActiveFilterSort: function(filterActiveProperty) {
					var sortStorage = [];

					if (filterActiveProperty == '') {
						localStorage.removeItem('sort');
					}

					if (s.filterSortHandler == 'shb-checkbox') {
						s.filterSortWrapper.find('input[type="checkbox"]').each(function() {
							var $this = $(this);

							if (localStorage.getItem('sort') == $this.val()) {
								$this.attr('checked', 'checked');
							}
						});
					} else if (s.filterSortHandler == 'select') {
						s.filterSortWrapper.find('select option').each(function() {
							var $this = $(this);

							if (localStorage.getItem('sort') == $this.val()) {
								$this.attr('selected', 'selected');
							}
						});
						if (s.filterUseSelectric === true) {
							s.filterSortWrapper.find('select').selectric('refresh');
						}
					}
				},

				findActiveFilterPrice: function(filterActiveProperty) {
					if (filterActiveProperty == '') {
						localStorage.removeItem('price_from');
						localStorage.removeItem('price_to');
					}

					var priceFrom = localStorage.getItem('price_from'),
						priceTo = localStorage.getItem('price_to');

					if (s.filterPriceHandler == 'checkbox') {
						s.filterPriceWrapper.find('input[type="checkbox"]').each(function() {
							var $this = $(this),
								dataMin = $this.data('min'),
								dataMax = $this.data('max');

							if (priceFrom == dataMin && priceTo == dataMax) {
								$this.attr('checked', 'checked');
							}
						});
					} else if (s.filterPriceHandler == 'select') {
						s.filterPriceWrapper.find('select option').each(function() {
							var $this = $(this),
								dataMin = $this.data('min'),
								dataMax = $this.data('max');

							if (priceFrom == dataMin && priceTo == dataMax) {
								$this.attr('selected', 'selected');
							}
						});
						if (s.filterUseSelectric === true) {
							s.filterPriceWrapper.find('select').selectric('refresh');
						}
					} else if (s.filterPriceHandler == 'slider-range') {
						var priceMin = priceFrom;
						var priceMax = priceTo;
						var currency = s.sliderRangeCurrency;
						if (priceMin === null) {
							priceMin = s.sliderRangeMinValueDefault;
						}
						if (priceMax === null) {
							priceMax = s.sliderRangeMaxValueDefault;
						}

						selector.find(gs.sliderRangeInputHandler).val(ProductFilters.setRangeValue(priceMin, priceMax));

						selector.find(gs.sliderRangeInputHandler).jRange({
							from: s.sliderRangeMinValueDefault,
							to: s.sliderRangeMaxValueDefault,
							format: '%s' + currency,
							width: 235,
							isRange: true,
							showLabels: true,
							showScale: false,
							snap: true,
							onstatechange: ProductFilters.debounceHelper(function() {
								if (selector[0].id !== 'filtersMobile') {
									ProductFilters.watchPriceChange();
								}
							}, 500)
						});
					}
				},

				setRangeValue: function(min, max) {
					min = String(min);
					max = String(max);
					return min + ',' + max;
				},

				watchPriceChange: function() {
					ProductFilters.filterResults();
				},

				filterResultsProperties: function() {
					var properties = [],
						propertiesStorage = {};

					if (s.filterPropertiesHandler == 'shb-checkbox') {
						s.filterPropertiesWrapper.find('input[type="checkbox"]').each(function() {
							if ($(this).is(':checked')) {
								if (s.filterPropertiesMultiple === true) {
									var key = 'properties[' + $(this).attr('data-name') + ']';
									if (propertiesStorage[key]) {
										propertiesStorage[key] += '+' + $(this).val();
									} else {
										propertiesStorage[key] = $(this).val();
									}
									if (Object.keys(propertiesStorage).length) {
										properties += '&';
									}
									properties += 'properties[' + $(this).attr('data-name') + ']=' + $(this).val();
								} else {
									properties.push('properties[' + $(this).attr('data-name') + ']=' + encodeURIComponent($(this).val()));
									localStorage.removeItem('properties[' + $(this).attr('data-name') + ']');
									localStorage.setItem('properties[' + $(this).attr('data-name') + ']', $(this).val());
								}
							}
						});
						if (s.filterPropertiesMultiple === true) {
							for (var key in propertiesStorage) {
								localStorage.setItem(key, propertiesStorage[key]);
							}
						} else {
							properties = properties.join('&');
						}
					} else if (s.filterPropertiesHandler == 'select') {
						s.filterPropertiesWrapper.find('select').each(function() {
							if (
								$(this)
								.find('option:selected')
								.val() != 0
							) {
								properties.push(
									'properties[' +
									$(this).attr('data-name') +
									']=' +
									encodeURIComponent(
										$(this)
										.find('option:selected')
										.val()
									)
								);
								localStorage.removeItem('properties[' + $(this).attr('data-name') + ']');
								localStorage.setItem('properties[' + $(this).attr('data-name') + ']', $(this).val());
							} else if (
								$(this)
								.find('option:selected')
								.val() == 0
							) {
								localStorage.removeItem('properties[' + $(this).attr('data-name') + ']');
							}
						});
						properties = properties.join('&');
					}
					return properties;
				},

				filterResultsVendors: function() {
					var vendors = [],
						vendorsArray = [];

					if (s.filterVendorHandler == 'shb-checkbox') {
						s.filterVendorWrapper.find('input[type="checkbox"]').each(function() {
							if ($(this).is(':checked')) {
								if ($(this).val() != 0) {
									if (s.filterTagsMultiple === true) {
										vendors.push($(this).val());
										vendorsArray = vendors.join('+');
									} else {
										vendorsArray.push($(this).val());
									}
								}
							}
						});
					} else if (s.filterVendorHandler == 'select') {
						s.filterVendorWrapper.find('select').each(function() {
							if (
								$(this)
								.find('option:selected')
								.val() != 0
							) {
								vendorsArray.push($(this).val());
							}
						});
					}
					localStorage.removeItem('vendor');
					if (vendorsArray.length !== 0) {
						localStorage.setItem('vendor', vendorsArray);
					}
					return vendorsArray;
				},

				filterResultsTags: function() {
					var tags = [],
						tagsArray = [];

					if (s.filterTagsHandler == 'shb-checkbox') {
						s.filterTagsWrapper.find('input[type="checkbox"]').each(function() {
							if ($(this).is(':checked')) {
								if ($(this).val() != 0) {
									if (s.filterTagsMultiple === true) {
										tags.push($(this).val());
										tagsArray = tags.join('+');
									} else {
										tagsArray.push($(this).val());
									}
								}
							}
						});
					} else if (s.filterTagsHandler == 'select') {
						s.filterTagsWrapper.find('select').each(function() {
							if (
								$(this)
								.find('option:selected')
								.val() != 0
							) {
								tagsArray.push($(this).val());
							}
						});
					}

					localStorage.removeItem('tags');
					if (tagsArray != '') {
						localStorage.setItem('tags', tagsArray);
					}

					return tagsArray;
				},

				filterResultsSort: function() {
					var sortArray = [];

					if (s.filterSortHandler == 'shb-checkbox') {
						s.filterSortWrapper.find('input[type="checkbox"]').each(function() {
							if ($(this).is(':checked')) {
								if ($(this).val() != 0) {
									sortArray.push($(this).val());
								}
							}
						});
					} else if (s.filterSortHandler == 'select') {
						s.filterSortWrapper.find('select').each(function() {
							if (
								$(this)
								.find('option:selected')
								.val() != 0
							) {
								sortArray.push($(this).val());
							}
						});
					}

					localStorage.removeItem('sort');
					if (sortArray.length !== 0) {
						localStorage.setItem('sort', sortArray);
					}
					return sortArray;
				},

				filterResultsPrice: function() {
					var priceUrl = '',
						priceFrom = '',
						priceTo = '';

					if (s.filterPriceHandler == 'shb-checkbox') {
						s.filterPriceWrapper.find('input[type="checkbox"]').each(function() {
							if ($(this).is(':checked')) {
								priceFrom = $(this).data('min');
								priceTo = $(this).data('max');
							}
						});
					} else if (s.filterPriceHandler == 'select') {
						s.filterPriceWrapper.find('select').each(function() {
							if (
								$(this)
								.find('option:selected')
								.val() != 0
							) {
								priceFrom = $(this)
									.find('option:selected')
									.attr('data-min');
								priceTo = $(this)
									.find('option:selected')
									.attr('data-max');
							}
						});
					} else if (s.filterPriceHandler == 'slider-range') {
						var priceRange = selector
						.find(gs.sliderRangeInputHandler)
						.val()
						.split(',');
						priceFrom = priceRange[0];
						priceTo = priceRange[1];
					}

					localStorage.removeItem('price_from');
					localStorage.removeItem('price_to');
					if (
						(priceFrom !== '' && priceTo !== '' && Number(priceFrom) !== s.sliderRangeMinValueDefault) ||
						Number(priceTo) !== s.sliderRangeMaxValueDefault
					) {
						localStorage.setItem('price_from', priceFrom);
						localStorage.setItem('price_to', priceTo);
						priceUrl = 'price_from=' + priceFrom + '&price_to=' + priceTo;
					} else {
						priceUrl = '';
					}

					return priceUrl;
				},

				filterResults: function() {
					var url = window.location.origin + window.location.pathname,
						propertiesAll = [];

					if (s.filterProperties === true && ProductFilters.filterResultsProperties().length !== 0) {
						propertiesAll.push(ProductFilters.filterResultsProperties());
					}
					if (s.filterVendor === true && ProductFilters.filterResultsVendors().length !== 0) {
						propertiesAll.push('vendor=' + ProductFilters.filterResultsVendors());
					}

					if (s.filterPrice === true && ProductFilters.filterResultsPrice().length !== 0) {
						propertiesAll.push(ProductFilters.filterResultsPrice());
					}

					if (s.filterTags === true && ProductFilters.filterResultsTags().length !== 0) {
						propertiesAll.push('tags=' + ProductFilters.filterResultsTags());
					}

					if (s.filterSort === true && ProductFilters.filterResultsSort().length !== 0) {
						propertiesAll.push(ProductFilters.filterResultsSort());
					}

					propertiesAll = propertiesAll.join('&');
					window.location.href = url + '?' + propertiesAll;
				},

				clearLocalStorageSingleFilter: function(filterType) {
					if (filterType === 'filter-property') {
						ProductFilters.findActiveFilterProperties('');
					}
					if (filterType === 'filter-vendor') {
						ProductFilters.findActiveFilterVendors('');
					}
					if (filterType === 'filter-tags') {
						ProductFilters.findActiveFilterTags('');
					}
					if (filterType === 'filter-sort') {
						ProductFilters.findActiveFilterSort('');
					}
					if (filterType === 'filter-price') {
						ProductFilters.findActiveFilterPrice('');
					}
				},

				selectGoToUrl: function($this) {
					window.location.replace($this.val());
				},

				debounceHelper: function(callback, delay) {
					var timeout;
					return function() {
						var args = arguments;
						clearTimeout(timeout);
						timeout = setTimeout(
							function() {
								callback.apply(this, args);
							}.bind(this),
							delay
						);
					};
				},

				initFilters: function() {
					if (s.filterProperties == true) {
						ProductFilters.findActiveFilterProperties(s.filterActiveProperty);
					}
					if (s.filterVendor == true) {
						ProductFilters.findActiveFilterVendors(s.filterActiveProperty);
					}
					if (s.filterTags == true) {
						ProductFilters.findActiveFilterTags(s.filterActiveProperty);
					}
					if (s.filterSort == true) {
						ProductFilters.findActiveFilterSort(s.filterActiveProperty);
					}
					if (s.filterPrice == true) {
						ProductFilters.findActiveFilterPrice(s.filterActiveProperty);
					}
				}
			};

		return ProductFilters.init();
	};

	$.fn.productFilters.defaults = {
		filterSectionHandler: '.shb-filters-filter-section',

		filterProperties: true,
		filterPropertiesHandler: 'shb-checkbox', // can be 'select', 'checkbox'
		filterPropertiesWrapper: '.shb-filters-filter-property',
		filterPropertiesMultiple: false, // not work with select

		filterVendor: true,
		filterVendorHandler: 'shb-checkbox', // can be 'select', 'checkbox'
		filterVendorWrapper: '.shb-filters-filter-vendor',
		filterVendorMultiple: true, // not work with select

		filterPrice: true,
		filterPriceHandler: 'slider-range', // can be 'select', 'checkbox' or 'slider-range'
		filterPriceWrapper: '.shb-filters-filter-price',
		// slider-range settings
		sliderRangeHandler: '.shb-filters-price-range',
		sliderRangeInputHandler: '.shb-price-range-input',
		sliderRangeAmountMinHandler: '.amount-min',
		sliderRangeAmountMaxHandler: '.amount-max',
		sliderRangeConfirmHandler: '.subFilter',
		sliderRangeMinValueDefault: Math.floor(parseFloat($('.shb-filters-price-range').data('price-min'))),
		sliderRangeMaxValueDefault: Math.ceil(parseFloat($('.shb-filters-price-range').data('price-max'))),
		sliderRangeCurrency: $('.shb-filters-price-range').data('currency'),

		filterSort: true,
		filterSortHandler: 'select', // can be 'select', 'checkbox'
		filterSortWrapper: '.shb-filters-filter-sort',

		filterTags: true,
		filterTagsHandler: 'shb-checkbox', // can be 'select', 'checkbox'
		filterTagsWrapper: '.shb-filters-filter-tags',
		filterTagsMultiple: true,

		filterSingleClearHandler: '.shb-filters-clear',
		filterActiveFilterRemove: '.shb-active-filters-remove-filter',

		filterSubmitButton: '.shb-filters-submit',

		filterUseSelectric: true,

		selectUrl: '.select-url'
	};
})(jQuery);
