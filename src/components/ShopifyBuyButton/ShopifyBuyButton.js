import PropTypes from 'prop-types';
// import ShopifyBuy from '@shopify/buy-button-js';

const ShopifyBuyButton = () => {
  return <h1>ShopifyBuyButton</h1>;
};

// class ShopifyBuyButton extends Component {
//   constructor(props) {
//     super(props);
//     this.buyButton = React.createRef();

//     this.shopifyClient = ShopifyBuy.buildClient({
//       domain: process.env.GATSBY_SHOPIFY_DOMAIN,
//       storefrontAccessToken: 'fc0600a4e4b6ae63d1386e4755de6050',
//     });

//     this.shopifyUi = ShopifyBuy.UI.init(this.shopifyClient);

//     this.state = {
//       initialized: false,
//     };
//   }

//   componentDidMount(prevProps) {
//     const { label, productId } = this.props;
//     const { initialized } = this.state;

//     if (!this.buyButton.current || initialized) return;

//     const node = this.buyButton.current;

//     this.shopifyUi.createComponent('product', {
//       node,
//       moneyFormat: '%24%7B%7Bamount%7D%7D',
//       id: productId,
//       options: {
//         cart: {
//           popup: false,
//         },
//         product: {
//           iframe: false,
//           contents: {
//             img: false,
//             title: false,
//             price: false,
//           },
//           text: {
//             button: label,
//           },
//         },
//       },
//     });

//     if (!initialized) {
//       this.setState({ initialized: true });
//     }
//   }

//   render() {
//     const { label, productId, ...rest } = this.props;
//     return <div ref={this.buyButton} {...rest} />;
//   }
// }

// ShopifyBuyButton.propTypes = {
//   label: PropTypes.string,
//   productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

// export default ShopifyBuyButton;
