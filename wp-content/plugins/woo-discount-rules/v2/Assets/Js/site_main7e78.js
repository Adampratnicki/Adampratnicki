(function ($) {
    /**
     * refresh cart when payment method changed
     */
    if (awdr_params.refresh_order_review == '1') {
        $(document).on('change', 'input[name="payment_method"],input[name="billing_city"],input[name="billing_postcode"]', function () {
            refreshCart();
        });

        /**
         * refresh cart when Email changed
         */
        $(document).on('blur', 'input[name="billing_email"], select#billing_state', function () {
            refreshCart();
        });
    }

    function refreshCart() {
        $('body').trigger('update_checkout');
    }

    $(document).ready(function ($) {
        function init_events() {
            if (awdr_params.enable_update_price_with_qty == 'show_dynamically') {
                $(document).on('change', '[name="quantity"]', function (){
                    var awdr_qty_object = $(this);
                    setTimeout(function(){
                        var $qty = awdr_qty_object.val();
                        var $product_id = 0;
                        var $price_place = "";
                        var form = awdr_qty_object.closest("form");
                        if (form.find('button[name="add-to-cart"]').length) {
                            $product_id = form.find('button[name="add-to-cart"]').val();
                            var target = 'div.product p.price';
                            if(awdr_params.custom_target_simple_product != undefined){
                                if(awdr_params.custom_target_simple_product != ""){
                                    target = awdr_params.custom_target_simple_product;
                                }
                            }
                            $price_place = $(target).first();
                        } else if (form.find('input[name="variation_id"]').length) {
                            $product_id = form.find('input[name="variation_id"]').val();
                            var target = 'div.product .woocommerce-variation-price';
                            if(awdr_params.custom_target_variable_product != undefined){
                                if(awdr_params.custom_target_variable_product != ""){
                                    target = awdr_params.custom_target_variable_product;
                                }
                            }
                            $price_place = $(target);
                            if (!$(target+' .price').length) {
                                $price_place.html("<div class='price'></div>");
                            }

                            $price_place = $(target+' .price')
                        }
                        if(!$product_id || $product_id == 0){
                            if(awdr_params.custom_simple_product_id_selector != undefined){
                                if(awdr_params.custom_simple_product_id_selector != ""){
                                    let simple_product_id_selector = awdr_params.custom_simple_product_id_selector;
                                    $product_id = $(simple_product_id_selector).val();
                                    let target = 'div.product p.price';
                                    if(awdr_params.custom_target_simple_product != undefined){
                                        if(awdr_params.custom_target_simple_product != ""){
                                            target = awdr_params.custom_target_simple_product;
                                        }
                                    }
                                    $price_place = $(target).first();
                                }
                            }

                            if(awdr_params.custom_variable_product_id_selector != undefined){
                                if(awdr_params.custom_variable_product_id_selector != ""){
                                    let variable_product_id_selector = awdr_params.custom_variable_product_id_selector;
                                    $product_id = $(variable_product_id_selector).val();
                                    let target = 'div.product .woocommerce-variation-price';
                                    if(awdr_params.custom_target_variable_product != undefined){
                                        if(awdr_params.custom_target_variable_product != ""){
                                            target = awdr_params.custom_target_variable_product;
                                        }
                                    }
                                    if (!$(target+' .price').length) {
                                        $price_place.html("<div class='price'></div>");
                                    }
                                    $price_place = $(target+' .price')
                                }
                            }
                        }

                        if (!$product_id || !$price_place || $product_id == 0) {
                            return;
                        }

                        var data = {
                            action: 'wdr_ajax',
                            method: 'get_price_html',
                            product_id: $product_id,
                            qty: $qty,
                            awdr_nonce: awdr_params.nonce,
                        };
                        $.ajax({
                            url: awdr_params.ajaxurl,
                            data: data,
                            type: 'POST',
                            success: function (response) {
                                if (response.price_html) {
                                    $price_place.html(response.price_html)
                                } else {
                                    if(response.original_price_html != undefined){
                                        $price_place.html(response.original_price_html)
                                    }
                                }
                            },
                            error: function (response) {
                                $price_place.html("")
                            }
                        });
                    }, 0);
                });
                /*Removed as it trigger multiple time - the change event */
                /*$( ".single_variation_wrap" ).on( "show_variation", function ( event, variation, purchasable ) {
                    $(this).closest('form').find('input[name="quantity"]').trigger('change');
                });*/
            }

        }

        if (awdr_params.js_init_trigger) {
            $(document).on(awdr_params.js_init_trigger, function () {
                init_events();
            });
        }
        init_events();

        if (awdr_params.awdr_dynamic_bulk_table_status == "1") {
            if(awdr_params.awdr_dynamic_bulk_table_off == "on"){
                function awdr_load_variation_table(variation_id){
                    setTimeout(function(){
                        if(variation_id != '' && variation_id != '0'){
                            var data = {
                                action: 'wdr_ajax',
                                method: 'get_variable_product_bulk_table',
                                product_id: variation_id,
                                awdr_nonce: awdr_params.nonce,
                            };

                            let awdr_opacity = 'div.awdr-bulk-customizable-table';

                            if(awdr_params.awdr_opacity_to_bulk_table != undefined){
                                if(awdr_params.awdr_opacity_to_bulk_table != ""){
                                    awdr_opacity = awdr_params.awdr_opacity_to_bulk_table;
                                }
                            }

                            $.ajax({
                                url: awdr_params.ajaxurl,
                                data: data,
                                type: 'POST',
                                beforeSend: function () {
                                    $(awdr_opacity).css('opacity','0.5');
                                },
                                complete: function () {
                                    $(awdr_opacity).css('opacity','1');
                                },
                                success: function (response) {
                                    if (response.bulk_table) {
                                        $('.awdr-bulk-customizable-table').html(response.bulk_table);
                                    }
                                },
                                error: function (response) {
                                    $('.awdr-bulk-customizable-table').html("")
                                }
                            });
                        }
                    }, 100);
                }
                $( ".single_variation_wrap" ).on( "hide_variation", function ( event ) {
                    let variation_id = $(this).closest('form').find('input[name="product_id"]').val();
                    awdr_load_variation_table(variation_id);
                });
                $( ".single_variation_wrap" ).on( "show_variation", function ( event, variation, purchasable ) {
                    let variation_id = variation.variation_id;
                    if(variation.is_bundled != undefined){
                        if(variation.is_bundled == true){
                            return;
                        }
                    }
                    awdr_load_variation_table(variation_id);
                });
            }
        }
    });
})(jQuery);

