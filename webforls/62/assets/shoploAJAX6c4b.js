var s,
  SHOPLOAJAX = {
      init: function(){
        console.log('SHOPLO AJAX init');
      },
      getProduct: function(productUrl){
        return $.ajax({
          url: '/products/'+ productUrl +'.js',
          dataType: "json",
          type: "GET",
        });
      },
      getVariant: function(variantId, async){
        return $.ajax({
          url: '/variants/'+ variantId +'.js',
          dataType: "json",
          type: "GET",
          async: async || false,
        });
      },
      getVariants: function(variantsIds){
        return $.ajax({
          url: '/variants.js',
          dataType: "json",
          type: "GET",
          data: variantsIds
        });
      },
      getCart: function(){
        return $.ajax({
          url: '/cart.js',
          dataType: "json",
          type: "GET",
        });
      },
      updateCart: function(data){
         return $.ajax({
          url: '/cart/update.js',
          dataType: "json",
          type: "POST",
          data: data,
        });
      },
      changeCart: function(line, quantity){
        return $.ajax({
          url: '/cart/change.js',
          dataType: 'json',
          type: 'POST',
          data: {
            line: line,
            quantity: quantity
          }
        });
      },
      clearCart: function(){
        return $.ajax({
          url: '/cart/clear.js',
          dataType: "json",
          type: "POST",
        });
      },
      addProductToCart: function(productId,productQty){
        return $.ajax({
          url: '/cart/add.js',
          data: {
            quantity: productQty,
            id: productId
          },
          dataType: "json",
          type: "POST",
        });
      },
      addProductToCartFormData: function(formData, complete){
        return $.ajax({
          url: '/cart/add.js',
          data: formData,
          contentType: false,
          processData: false,
          type: "POST",
          complete: function(data){
            complete(data);
          }
        });
      }
  };
$(function(){
SHOPLOAJAX.init();
});