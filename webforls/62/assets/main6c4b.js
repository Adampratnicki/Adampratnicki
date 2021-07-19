var m,
    MAIN = {
        settings: {
            windowHandler: $(window),
            select: $('.select'),
            navToggle: $('#navToggle'),
            stickyBar: $('.sticky-bar'),
            filtersContainer: $('.shb-filters'),
            mobileFiltersContainer: $('#filtersMobile'),
            langSwitcher: $('.shb-lang-widget select'),
            mobileNav: $('#mobileMenu'),
            mobileLangSwitcher: $('.mobile-lang-switcher select'),
            newsletterForm: $('.shb-newsletter-form'),
            infoBar: $('body').find('.shb-info-bar'),
            searchForm: $('body').find('.shb-search-top-widget'),
            body: $('body'),
            tabs: $('[shb-tabs]')
        },

        init: function () {
            m = this.settings;
            this.windowLoadHandler();
            this.bindUIActions();
        },

        windowLoadHandler: function () {
            if($('#cartSummary').length) {
                Shop.cartHandler = $('#cartSummary').cartOptions({
                    showFreeShippingInfo: cart_free_delivery_show,
                    showDefaultDeliveryCost: cart_delivery_cost_show,
                    products: "[cart-product]:not(.shb-item-template)"
                });
            } else {
                if ($('#minicartSummary').length) {
                    Shop.cartHandler = $('#minicartSummary').cartOptions({
                        isDynamic: useDynamicCart,
                        dynamicCartType: dynamicCartType,
                        showFreeShippingInfo: cart_free_delivery_show,
                        showDefaultDeliveryCost: cart_delivery_cost_show,
                        products: "[cart-product]:not(.shb-item-template)",
                        quantityInput: "[product-quantity]",
                        priceText: "[product-price]",
                        cartPrice: "[sum-price] span",
                        productAddDone: function() {
                            if (typeof UpSellAppProduct !== "undefined" && typeof upSellData !== "undefined") {
                                if (upSellData.ajaxCart == true) {
                                    UpSellAppProduct.checkForCampaign();
                                }
                            }
                        }
                    });
                }
            }

            if (m.mobileNav.length) {
                MAIN.mobileMenuInit();
            }

            if (m.select.length) {
                MAIN.selectricInit(m.select);
            }

            if (m.filtersContainer.length) {
                if (m.windowHandler.width() < 767) {
                    m.filtersContainer = m.mobileFiltersContainer
                }
                var filterProperties = false,
                    filterVendor = false,
                    filterTags = false,
                    filterPrice = false,
                    filterSort = false,
                    filterPropertiesWrapper = m.filtersContainer.find('.shb-filters-filter-property'),
                    filterVendorWrapper = m.filtersContainer.find('.shb-filters-filter-vendor'),
                    filterTagsWrapper = m.filtersContainer.find('.shb-filters-filter-tags'),
                    filterSortWrapper = m.filtersContainer.find('.shb-filters-filter-sort'),
                    filterPriceWrapper = m.filtersContainer.find('.shb-filters-filter-price'),
                    filterPropertiesHandler,
                    filterVendorHandler,
                    filterTagsHandler,
                    filterSortHandler,
                    filterPriceHandler;


                if (filterPropertiesWrapper.length) {
                    filterProperties = true;
                    if (filterPropertiesWrapper.find('select').length) {
                        filterPropertiesHandler = 'select';
                    } else {
                        filterPropertiesHandler = 'shb-checkbox';
                    }
                }
                if (filterVendorWrapper.length) {
                    filterVendor = true;
                    if (filterVendorWrapper.find('select').length) {
                        filterVendorHandler = 'select';
                    } else {
                        filterVendorHandler = 'shb-checkbox';
                    }
                }
                if (filterTagsWrapper.length) {
                    filterTags = true;
                    if (filterTagsWrapper.find('select').length) {
                        filterTagsHandler = 'select';
                    } else {
                        filterTagsHandler = 'shb-checkbox';
                    }
                }
                if (filterSortWrapper.length) {
                    filterSort = true;
                    if (filterSortWrapper.find('select').length) {
                        filterSortHandler = 'select';
                    } else {
                        filterSortHandler = 'shb-checkbox';
                    }
                }
                if (filterPriceWrapper.length) {
                    filterPrice = true;
                    if (filterPriceWrapper.find('select').length) {
                        filterPriceHandler = 'select';
                    } else if (filterPriceWrapper.find('shb-checkbox').length){
                        filterPriceHandler = 'shb-checkbox';
                    } else {
                        filterPriceHandler = 'slider-range';
                    }
                }

                m.filtersContainer.productFilters({
                    filterProperties: filterProperties,
                    filterVendor: filterVendor,
                    filterPrice: filterPrice,
                    filterSort: filterSort,
                    filterTags: filterTags,
                    filterPropertiesHandler: filterPropertiesHandler,
                    filterVendorHandler: filterVendorHandler,
                    filterTagsHandler: filterTagsHandler,
                    filterSortHandler: filterSortHandler,
                    filterPriceHandler: filterPriceHandler

                });

            }

            if(m.infoBar.length) {
                if (document.cookie.indexOf('isInfoBarClosed') < 0) {
                    m.infoBar.addClass('active');

                    if (m.infoBar.attr('data-autoclose') === '1') {
                        setTimeout(function() { MAIN.hideInfoBar(); }, parseInt(m.infoBar.attr('data-autoclose-time')) * 1000);
                    }
                }
            }

            if (m.searchForm.length > 0) {
                MAIN.getRecentSearch();
                if ($.fn.autocompleter) {
                    MAIN.autocompleterInit(m.searchForm);
                }
            }

            if (m.tabs) {
                MAIN.tabs();
            }

            if (window.location.hash) {
                var tab = $('[shb-tabs-tab][href="'+ window.location.hash +'"]');
                if (tab.length) {
                    tab.trigger('click');
                }
            }
          if (m.windowHandler.width() < 767) {
            if ($('#filtersMobile').length) {
              $('#filtersMobile').shbSlidingMenu({
                position: 'bottom'
              });
            }

            if ($('#navListMobile').length) {
              $('#navListMobile').shbSlidingMenu({
                position: 'bottom'
              });
            }
          }

            return false;
        },

        bindUIActions: function () {
            if (!m.mobileNav.length) {
                MAIN.navToggleInit();
            }

            m.langSwitcher.change(function () {
                MAIN.changeLang(this);
            });

            m.mobileLangSwitcher.on('change', function() {
                window.location = m.body.find('.mobile-lang-switcher select').find('option:selected').val();
            });

            if (m.stickyBar.length) {
                m.windowHandler.scroll(function () {
                    MAIN.stickMenu();
                });
            }

            if (m.newsletterForm.length) {
                this.checkNewsletterClause();
            }

            if(m.infoBar.length) {
                m.infoBar.find('.shb-info-bar-close').on('click', function() { MAIN.hideInfoBar(); });
            }

            m.body.on('click', '.shb-recent-searches li', function() {
                MAIN.chooseRecentSearch($(this).parents('.shb-search-wrapper').find('form'), $(this).text());
            });

            m.body.on('submit', '.shb-search-top-widget form', function(e) {
                if (!$(this).hasClass('ready-to-submit')) {
                    e.preventDefault();
                    $(this).addClass('ready-to-submit');
                    MAIN.addToRecentSearch($(this), $(this).find('input[type="search"]').val());
                }
            });

            m.body.on('click', '[search-widget-trigger]', function(e) {
                e.preventDefault();
                m.searchForm.toggleClass('active');
            });

            $(document).click(function (e) {
                if (!$(e.target).is('.shb-search-top-widget') && !$(e.target).parents().is('.shb-search-top-widget') && !$(e.target).parent('.shb-search-widget-trigger').length) {
                    $('.shb-search-top-widget').removeClass('active');
                }
            });

        },

        hideInfoBar: function() {
            m.infoBar.removeClass('active');
            var date = new Date(),
                expires = '';

            date.setTime(date.getTime()+(7*24*60*60*1000));
            expires = '; expires='+date.toGMTString();
            document.cookie = "isInfoBarClosed=1;"+expires+'; path=/';
        },

        selectricInit: function (select) {
            select.selectric({
                disableOnMobile: true,
                nativeOnMobile: true
            });
        },

        autocompleterInit: function(autocompleterHandler) {
            var searchWithAutocompleter = autocompleterHandler.find('[search-with-autocompleter]');

            autocompleterHandler.autocompleter({
                productsCount: parseInt(searchWithAutocompleter.attr('data-products-count')),
                showVendorWithProduct: parseInt(searchWithAutocompleter.attr('data-products-show-vendors')),
                productsShowImage: parseInt(searchWithAutocompleter.attr('data-products-show-images')),
                productsShowPrice: parseInt(searchWithAutocompleter.attr('data-products-show-price')),
                showCategories: parseInt(searchWithAutocompleter.attr('data-show-categories')),
                categoriesCount: parseInt(searchWithAutocompleter.attr('data-categories-count')),
                categoriesShowImages: parseInt(searchWithAutocompleter.attr('data-categories-show-images')),
                showCollections: parseInt(searchWithAutocompleter.attr('data-show-collections')),
                collectionsCount: parseInt(searchWithAutocompleter.attr('data-collections-count')),
                collectionsShowImages: parseInt(searchWithAutocompleter.attr('data-collections-show-images')),
                showVendors: parseInt(searchWithAutocompleter.attr('data-show-vendors')),
                vendorsCount: parseInt(searchWithAutocompleter.attr('data-vendors-count')),
                vendorsShowImages: parseInt(searchWithAutocompleter.attr('data-vendors-show-images')),
            });
        },

        navToggleInit: function () {
            m.navToggle.on('click', function (e) {
                e.preventDefault();
                m.mobileNav.toggle();
            });
        },

        mobileMenuInit: function() {
            m.mobileNav.shbSlidingMenu();
        },

        getRecentSearch: function() {
            var recentSearches = localStorage.getItem('recentSearches'),
                $recentSearchesWrapper = m.body.find('.shb-recent-searches');

            if (recentSearches) {
                $recentSearchesWrapper.removeClass('is-hidden');
                recentSearches = recentSearches.split('#SR#');
                recentSearches = recentSearches.reverse();
                for(var i = 0; i < recentSearches.length; i++) {
                    $recentSearchesWrapper.find('ul').append('<li>' + recentSearches[i].replace(/(<([^>]+)>)/gi, '') + '</li>')
                }
            }
        },

        addToRecentSearch: function($form, query) {
            var recentSearches = localStorage.getItem('recentSearches'),
                max = 5;
            if ($.trim(query) !== '') {
				query = query.replace(/(<([^>]+)>)/gi, '');
                if (recentSearches) {
                    recentSearches = recentSearches.split('#SR#');
                    if (recentSearches.indexOf(query) > -1) {
                        recentSearches.splice(recentSearches.indexOf(query), 1);
                    }
                    if (recentSearches.length + 1 > max) {
                        recentSearches.splice(0, 1);
                    }
                    recentSearches.push(query);
                    recentSearches = recentSearches.join('#SR#');
                    localStorage.setItem('recentSearches', recentSearches);
                } else {
                    recentSearches = query;
                    localStorage.setItem('recentSearches', recentSearches);
                }
            }
            $form.submit();
        },

        chooseRecentSearch: function($form, query) {
            $form.find('input[type="search"]').val(query);
            $form.submit();
        },

        changeLang: function (lang) {
            window.location = lang.value
        },

        stickMenu: function () {
          var afterStickHeight = $('.unsticky-after-this').outerHeight() || 0,
                afterContainerHeight = $('.sticky-after-this').outerHeight(),
                fromTop = m.windowHandler.scrollTop();
            if (fromTop >= afterContainerHeight + afterStickHeight) {
                m.stickyBar.addClass('is-sticky');
                $('body').css('padding-top', afterContainerHeight);
            } else if (fromTop <= afterStickHeight) {
                m.stickyBar.removeClass('is-sticky');
                $('body').css('padding-top', 0);
            }
        },

        checkNewsletterClause: function () {
            m.newsletterForm.find('[type="submit"]').on('click', function (e) {
                var checkboxWrapper = $(this).parents('form').find('.shb-checkbox').parent();
                if (checkboxWrapper.find('input').length > 0 && !checkboxWrapper.find('input').is(':checked')) {
                    if (checkboxWrapper.find('.shb-error-alert').length <= 0) {
                        var errorAlert = checkboxWrapper.find('input').attr('data-required-text');
                        checkboxWrapper.prepend('<p class="shb-error-alert">' + errorAlert + '</p>');
                    }
                    return false;
                }
            });
            m.newsletterForm.find('.shb-checkbox input').on('change', function () {
                var checkboxWrapper = $(this).parents('form').find('.shb-checkbox').parent();
                if ($(this).is(':checked')) {
                    checkboxWrapper.find('p.shb-error-alert').remove();
                }
            })
        },

        tabs: function() {
            $('[shb-tabs]').on('click', '[shb-tabs-tab]', function () {
                var tabId = $(this).attr('href'),
                    tabs = $(this).closest('[shb-tabs]');

                tabs.find('li').removeClass('is-active');
                $(this).parent('li').addClass('is-active');

                tabs.find('[shb-tabs-content]:visible').fadeOut('fast', 'linear', function () {
                    tabs.find(tabId).fadeIn('fast', 'linear')
                });
            })
        }
    };

var ShbNotification = {
    settings: {
        shopMessageWrapper: $('#shbNotification'),
        shopMessage: $('#shopMessage'),
    },
    init: function () {
        n = this.settings;

        n.shopMessage.bind("DOMNodeInserted", function () {
            ShbNotification.showShopMessage();
        });

        if (n.shopMessage.find('p').length) {
            ShbNotification.showShopMessage();
        }
    },
    showShopMessage: function (text, type) {
        if ($.trim(n.shopMessage.text()) == '' && text && type) {
            n.shopMessage.prepend('<p class="'+type+'">'+text+'</p>');
            n.shopMessageWrapper.addClass(type);
        }
        setTimeout(function () {
            n.shopMessageWrapper.removeAttr('class');
            n.shopMessage.html('');
        }, 3500);
    },
};

Shop.shbNotification = ShbNotification;

var ShbCategoryDropdown = {
    settings: {
        categoryTitleWrapper: $('.shb-categories-list-inline .categories>li'),
    },
    init: function(){
        c = this.settings;
        ShbCategoryDropdown.createDropdownButton();
    },
    createDropdownButton: function () {
        c.categoryTitleWrapper.each(function(){
            var $this = $(this);
            if($this.children('ul.submenu').length){
                $this.addClass('shb-category-has-children')
            }
        })
    }
};

$(function(){
    MAIN.init();
    ShbNotification.init();
    if ($('.shb-categories-list-inline').length) {
        ShbCategoryDropdown.init();
    }
});
