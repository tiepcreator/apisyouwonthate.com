import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Client from 'shopify-buy';
import ShopifyBuy from '@shopify/buy-button-js';

class ShopifyBuyButton extends Component {
  constructor(props) {
    super(props);
    this.buyButton = React.createRef();

    const token = '1e06188f9ab2509e9ebe7dcf1340948c';
    const domain = 'apisyouwonthate.myshopify.com';

    this.shopifyClient = Client.buildClient({
      domain,
      appId: '6',
      apiKey: '7c0d8ea3d286decd83b1ffe8cac166ff',
      storefrontAccessToken: token,
    });
    this.shopifyUi = ShopifyBuy.UI.init(this.shopifyClient);

    this.state = {
      initialized: false,
    };
  }

  componentDidMount(prevProps) {
    const { label, productId } = this.props;
    const { initialized } = this.state;

    if (!this.buyButton.current || initialized) return;

    const node = this.buyButton.current;

    this.shopifyUi.createComponent('product', {
      node,
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      id: productId,
      options: {
        cart: {
          popup: false,
        },
        product: {
          iframe: false,
          contents: {
            img: false,
            title: false,
            price: false,
          },
          text: {
            button: label,
          },
        },
      },
    });

    if (!initialized) {
      this.setState({ initialized: true });
    }
  }

  render() {
    const { label, productId, ...rest } = this.props;
    return <div ref={this.buyButton} {...rest} />;
  }
}

ShopifyBuyButton.propTypes = {
  label: PropTypes.string,
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ShopifyBuyButton;
