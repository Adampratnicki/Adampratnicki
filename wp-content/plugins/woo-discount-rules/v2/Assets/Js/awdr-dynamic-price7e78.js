(function ($) {
    $.extend({
        AdvanceWooDiscountRules: {
            form: null,
            product_id: null,
            quantity: 0,
            options: [],
            target: null,
            getDynamicDiscountPriceFromCartForm: function($form, $target, $options){
                if (typeof $options !== 'undefined') {
                    this.options = $options;
                }
                if (typeof $target !== 'undefined') {
                    this.target = $target;
                }
                if (typeof $form !== 'undefined' && $form.is('form')) {
                    this.form = $form;
                } else {
                    this.logError("Incorrect form provided");
                }
                this.product_id = this.getProductIdFromForm();

                this.quantity = this.getProductQuantityFromForm();
                this.getDiscountPriceForProduct();
            },
            getDiscountPriceForProduct: function () {
                if(this.product_id === null || this.product_id == 0){
                    this.logError("Invalid product");
                    return [];
                }
                var data = {
                    action: 'awdr_get_product_discount',
                    product_id: this.product_id,
                    qty: this.quantity,
                    awdr_nonce: awdr_params.nonce,
                };
                if (typeof this.options.custom_price !== 'undefined') {
                    data.custom_price = this.options.custom_price;
                }
                var $target = this.target;
                var $options = this.options;
                $.ajax({
                    url: awdr_params.ajaxurl,
                    data: data,
                    type: 'POST',
                    success: function (response) {
                        $(document.body).trigger("advanced_woo_discount_rules_on_get_response_for_dynamic_discount", [ response, $target, $options ]);
                        //return response;
                    },
                    error: function (response) {
                    }
                });
            },
            getProductIdFromForm: function () {
                var variationIdEl = this.form.find('[name="variation_id"]');
                var productIdEl = this.form.find('[name="add-to-cart"]');

                if (variationIdEl.length) {
                    return parseInt(variationIdEl.val());
                } else if (productIdEl.length) {
                    return parseInt(productIdEl.val());
                }

                return false;
            },
            getProductQuantityFromForm: function () {
                var $input = this.form.find('input[name="quantity"]');
                if ($input.length === 0) {
                    return 0;
                }

                return $input.val();
            },
            logError: function($text) {
                console.error("Advance discount rule error: %s", $text);
            }
        }
    });
})(jQuery);

