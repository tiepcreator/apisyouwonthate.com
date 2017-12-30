
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'apisyouwonthate.myshopify.com',
      apiKey: '7c0d8ea3d286decd83b1ffe8cac166ff',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
			buttons = document.getElementsByClassName("shopify-product");

			for (var i=0; i < buttons.length; i++) {
				var button = buttons[i];

	      ui.createComponent('product', {
	        id: [button.attributes['data-id'].value],
	        node: button,
	        moneyFormat: '%24%7B%7Bamount%7D%7D',
	        options: {
					  "product": {
							"iframe": false,
					    "buttonDestination": "cart",
					    "variantId": "all",
					    "width": "240px",
							"classes": {
								"button": 'btn btn--huge cta btn--primary'
							},
					    "contents": {
					      "img": false,
					      "imgWithCarousel": false,
					      "title": false,
					      "variantTitle": false,
					      "price": false,
					      "description": false,
					      "buttonWithQuantity": false,
					      "quantity": false
					    },
					    "text": {
					      "button": button.attributes['data-label'].value
					    }
					  },
					  "cart": {
							"popup": false,
					    "contents": {
					      "button": true
					    }
					  },
					  "productSet": {
					    "styles": {
					      "products": {
					        "@media (min-width: 601px)": {
					          "margin-left": "-20px"
					        }
					      }
					    }
					  }
					}
	      });
    	}
		});
  }
});


// Facebook Pixel
(function() {
var _fbq = window._fbq || (window._fbq = []);
if (!_fbq.loaded) {
	var fbds = document.createElement('script');
	fbds.async = true;
	fbds.src = '//connect.facebook.net/en_US/fbds.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(fbds, s);
	_fbq.loaded = true;
}
_fbq.push(['addPixelId', '1568071020112356']);
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);
