// NOTE: because the shopify libraries we use access `document`, they won't
// work when gatsby tries to SSR-ify them. Because of that, we use react-loadable
// to load just this component as a separate bundle, so that it isn't ever pulled
// server-side, and  it works in our scenario.
// for more information, check out this comment:
// https://github.com/gatsbyjs/gatsby/issues/13355#issuecomment-483265025
import Loadable from 'react-loadable';

// this can be replaced with a loading indicator if we deem it necessary 👍
const Loading = () => null;

const LoadableBuyButton = Loadable({
  loader: () => import('./ShopifyBuyButton'),
  loading: Loading,
});

export { LoadableBuyButton as ShopifyBuyButton };
