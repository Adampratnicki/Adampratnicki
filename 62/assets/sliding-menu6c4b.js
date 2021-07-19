/*jslint browser: true*/

;(function ($) {
    'use strict'

    $.fn.shbSlidingMenu = function (options) {
        var s,
            selector = this,
            gs = $.extend({}, $.fn.shbSlidingMenu.defaults, options),
            shbSlidingMenu = {
                settings: {
                    html: $('html'),
                    body: $('body'),
                    menuContents: selector.find(gs.menuContents),
                    menuContent: selector.find(gs.menuContent),
                    showSubmenuButton: selector.find(gs.showSubmenuButton),
                    closeMenuButton: selector.find(gs.closeMenuButton),
                    offcanvasElement: $(gs.offcanvasElement),
                    menuTrigger: $('body').find('[href="#'+ selector[0].id +'"]'),
                    openClass: 'shb-sliding-menu-open-' + gs.position + ' shb-sliding-menu-open-' + selector[0].id
                },

                init: function () {
                    s = this.settings;

                    this.prepareChildsContents(s.menuContent.filter('[shb-sliding-menu-content="categories-list"]'));
                    this.bindUIActions();
                    return shbSlidingMenu;
                },
                bindUIActions: function () {
                    s.menuContent.on('click', 'a', function(e){
                        if (e.target.nodeName === 'I' || e.target.nodeName === 'SPAN') {
                            e.preventDefault();
                        }
                    });

                    selector.on('click', gs.showSubmenuButton, function(e){
                        e.preventDefault();
                        shbSlidingMenu.toggleSubmenu($(this))
                    });

                    s.menuTrigger.on('click', function (e) {
                        e.stopPropagation();
                        if (s.html.hasClass(s.openClass)) {
                            shbSlidingMenu.toggleSlidingMenu('close');
                        } else {
                            shbSlidingMenu.toggleSlidingMenu('open');
                        }
                    });

                    s.offcanvasElement.on('click', function(e) {
                        shbSlidingMenu.toggleSlidingMenu('close');
                    });

                    $('.shb-curtain').on('click', function(e) {
                        shbSlidingMenu.toggleSlidingMenu('close');
                    });

                    s.closeMenuButton.on('click',function(e) {
                        shbSlidingMenu.toggleSlidingMenu('close');
                        if ($(this).data('href')) {
                            window.location.replace($(this).data('href'));
                        }
                    });

                },

                toggleSlidingMenu: function(state) {
                    if (state === 'open') {
                        s.html.addClass(s.openClass);
                        $(selector).removeClass(gs.hideMenuClass);
                    } else {
                        s.html.removeClass(s.openClass);
                        $(selector).addClass(gs.hideMenuClass);
                        shbSlidingMenu.toggleSubmenu($(selector).find('[shb-sliding-menu-content="0"]'));
                    }
                },

                toggleSubmenu(elem) {
                    selector.find(gs.menuContent).each(function (i, e) {
                        var item = $(e),
                            attr = item.attr('shb-sliding-menu-content');
                        if (attr === $(elem).attr('shb-sliding-menu-show-submenu') || attr === elem.attr('shb-sliding-menu-content')) {
                            $(item).removeClass('shb-menu-content-hide');
                            $(item).addClass('shb-menu-content-show');
                        } else {
                            $(item).removeClass('shb-menu-content-show');
                            $(item).addClass('shb-menu-content-hide');
                        }
                    });
                },

                prepareChildsContents(list) {
                    var i = 0,
                        elements = list.find('ul > li'),
                        length = elements.length,
                        contentTemplate = '';

                    for (i; i < length; i++) {
                        var element = elements.eq(i);


                        if (element.find('ul').length) {
                            shbSlidingMenu.createChildContent(element);
                        }
                    }
                },

                createChildContent(element) {
                    var link = element.find('a').eq(0),
                        title = link.text(),
                        parentId = element.parents('[shb-sliding-menu-content]').attr('shb-sliding-menu-content'),
                        href = link.attr('href'),
                        childList = element.find('ul:first').clone(),
                        childListElement = childList.find('li'),
                        contentTemplate = $('<div/>').attr('shb-sliding-menu-content', 'category-' + href.substr(href.lastIndexOf('/')+1, href.length)).addClass('shb-sliding-menu-content shb-menu-content-hide');
                    if (childList.length) {
                        var i = 0,
                            length = childListElement.length,
                            newChildsContent = childList.clone();


                        element.find('a').append('<span shb-sliding-menu-show-submenu="category-'+ href.substr(href.lastIndexOf('/')+1, href.length) +'" class="shb-menu-next"><i class="shb-icon shb-icon-next"></i></span>');
                        $(childList).find('li').first().before('<li><a shb-sliding-menu-show-submenu="'+ parentId +'" class="align-center"><span class="shb-menu-prev"><i class="shb-icon shb-icon-previous"></i></span>'+ title +'</a></li>');
                        contentTemplate.html(childList);
                        s.menuContents.append(contentTemplate);


                        for (i; i < length; i++) {
                            var childElement = childListElement.eq(i),
                                childListChilds = childElement.find('ul');

                            if (childListChilds.length) {
                                shbSlidingMenu.createChildContent(childElement);
                            }
                        }
                        element.find('ul').remove();

                    }

                },


            };

        return shbSlidingMenu.init();
    };
    $.fn.shbSlidingMenu.defaults = {
        menuContents: '[shb-sliding-menu-contents]',
        menuContent: '[shb-sliding-menu-content]',
        showSubmenuButton: '[shb-sliding-menu-show-submenu]',
        offcanvasElement: '#page',
        hideMenuClass: 'shb-sliding-menu-hide',
        position: 'right',
        closeMenuButton: '[shb-sliding-menu-close-button]'
    }
}(jQuery));
