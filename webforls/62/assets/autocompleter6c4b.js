(function ($) {
    'use strict';

    $.fn.autocompleter = function (options) {
        var s,
            gs = $.extend({}, $.fn.autocompleter.defaults, options),
            autocompleter = {
                settings: {
                    searchInput: $(gs.searchInput),
                    searchResults: $(gs.searchResults),
                    searchLoad: $(gs.searchLoad),
                    searchMain: $(gs.searchMain),
                    actualRequest: 0
                },
                data: {
                    products: {},
                    categories: {},
                    collections: {},
                    vendors: {}
                },
                init: function () {
                    s = this.settings;
                    autocompleter.toggleWrapper(true);
                    s.searchMain.find('.loader').removeClass('show');
                    this.bindUIActions();
                    this.initForm();
                },

                bindUIActions: function () {
                    s.searchInput.on('keyup', function(e) {
                        var blocked = [37,38,39,40,16,17,18,20,144, 13];
                        if($.inArray(e.which, blocked) == -1) {
                            if(s.searchInput.val().length >= gs.keysToAjax) {
                                s.searchMain.find('.loader').addClass('show');
                                if(s.actualRequest != 0) {
                                    s.actualRequest.abort();
                                }

                                autocompleter.getResponse(s.searchInput.val());
                            } else {
                                autocompleter.toggleWrapper(true);
                            }
                        }

                    });
                    $('body').on('click', function(e) {
                        if($(e.target).parents('#search').length > 0 && s.searchInput.val().length >= gs.keysToAjax) {
                            autocompleter.toggleWrapper(false);
                        } else {
                            autocompleter.toggleWrapper(true);
                        }
                    })
                },

                getResponse: function(searchWord) {

                    s.actualRequest = $.ajax({
                        url: '/ajax?method=shop.search.search',
                        data: {
                            query: searchWord,
                            limit_products: gs.productsCount,
                            limit_collections: gs.collectionsCount,
                            limit_categories: gs.categoriesCount,
                            limit_vendors: gs.vendorsCount,
                            show_collections: gs.showCollections,
                            show_categories: gs.showCategories,
                            show_vendors: gs.showVendors
                        },
                        dataType: "json",
                        type: "POST",
                    })
                        .done(function(data) {
                            autocompleter.parseResponse(data)
                            autocompleter.createDOM(searchWord);


                            s.searchMain.find('.loader').removeClass('show');
                            return data;
                        });
                },
                parseResponse: function(data) {
                    autocompleter.data.products = data.products.hits.slice(0, gs.productsCount);
                    autocompleter.data.categories = data.categories.hits.slice(0, gs.showCategories ? gs.categoriesCount : 0);
                    autocompleter.data.collections = data.collections.hits.slice(0, gs.showCollections ? gs.collectionsCount : 0);
                    autocompleter.data.vendors = data.vendors.hits.slice(0, gs.showVendors ? gs.vendorsCount : 0);
                },
                createDOM: function(query) {
                    s.searchResults.find('[autocompleter-item]:not(.shb-item-template)').remove();
                    var elementsCount = 0;
                    for(var data in autocompleter.data) {
                        if(autocompleter.data[data].length > 0) {
                            s.searchResults.find('.'+data).show();
                            elementsCount += autocompleter.data[data].length;
                            for(var i = 0; i < autocompleter.data[data].length; i++) {
                                var clone = s.searchResults.find('.'+data).find('.shb-item-template').clone();
                                var element = autocompleter.data[data][i];
                                clone.attr('href', element.url)
                                clone.find('.shb-name').text(element.name);

                                if(data == "products") {
                                    if(gs.productsShowImage) {
                                        if(element.main_image !=='') clone.find('img').attr('src', element.main_image);
                                    } else   clone.find('.shb-image').remove();
                                    if(gs.productsShowPrice) {
                                        clone.find('.shb-price').text(Shop.money_format.replace('{{amount}}',parseFloat(element.price_min/100).toFixed(2)));
                                    } else {clone.find('.shb-price').remove()}
                                    if(gs.showVendorWithProduct) {
                                        clone.find('.shb-vendor').text(element.vendor[0]);
                                    }
                                } else if(data=='categories') {
                                    if(gs.categoriesShowImages) {
                                        if(element.img !== '') clone.find('img').attr('src', element.img);
                                    } else   clone.find('.shb-image').remove();
                                } else if(data=='collections') {
                                    if(gs.collectionsShowImages) {
                                        if(element.img !== '') clone.find('img').attr('src', element.img);
                                    } else   clone.find('.shb-image').remove();
                                } else if(data=='vendors') {
                                    if(gs.vendorsShowImages) {
                                        if(element.img !== '') clone.find('img').attr('src', element.img);
                                    } else clone.find('.shb-image').remove();
                                }

                                autocompleter.boldQuery(clone.find('.shb-name'), query);
                                clone.removeClass('shb-item-template');
                                s.searchResults.find('.'+data+' .shb-autocompleter-items-list .shb-item-template').after(clone);

                            }
                        } else s.searchResults.find('.'+data).hide();
                    }
                    if(elementsCount > 0) s.searchResults.find('.shb-no-results').hide(); else s.searchResults.find('.shb-no-results').show();

                    autocompleter.toggleWrapper(false);

                },
                boldQuery: function(nameEl, query) {
                    var text = nameEl.text().toLowerCase();
                    query = query.toLowerCase();
                    if(text.toLowerCase().indexOf(query.toLowerCase()) != -1) {
                        query = nameEl.text().substring(text.indexOf(query), text.indexOf(query)+query.length)
                        var name = nameEl.text().replace(query, '<strong>'+query+'</strong>');
                        nameEl.html(name);
                    }
                },
                toggleWrapper: function(hide) {
                    if(hide) {
                        s.searchResults.fadeOut(gs.fadeOutTime, function() {

                        });
                    } else {

                        s.searchResults.fadeIn(gs.fadeInTime, function() {

                        });

                    }
                },

                initForm: function () {
                    s.searchInput.attr('autocomplete', 'off');
                    if (s.searchMain.find('.shb-autocompleter-search-results').length < 1) {
                        var position = parseInt(s.searchInput.css('height'));
                        $('[search-results]').css('top', position+'px').addClass('shb-search-results-absolute');
                    }
                }
            };

        return autocompleter.init();

    };

    $.fn.autocompleter.defaults = {
        //general
        searchMain: '[search-with-autocompleter]',
        searchInput: '[search-with-autocompleter] input',
        searchResults: '[search-results]',
        searchLoad: '#searchLoad',
        keysToAjax: 2,
        fadeOutTime: 150,
        fadeInTime: 150,

        //products
        productsCount: 5,
        showVendorWithProduct: true,
        productsShowImage: true,
        productsShowPrice: true,

        //categories
        showCategories: true,
        categoriesCount: 3,
        categoriesShowImages: false,

        //collections
        showCollections: true,
        collectionsCount: 3,
        collectionsShowImages: false,

        //vendors
        showVendors: true,
        vendorsCount: 3,
        vendorsShowImages: true
    };

}(jQuery));