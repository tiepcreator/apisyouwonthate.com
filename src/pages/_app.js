import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';

import '../styles/_variables.css';
import '../components/CarbonAd/CarbonAds.css';
import MDXProviderWrapper from '../utils/MDXProviderWrapper';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_ID, {
      includedDomains: ['apisyouwonthate.com', 'www.apisyouwonthate.com'],
      url: 'https://cattle.apisyouwonthate.com/script.js',
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  });

  return (
    <ChakraProvider theme={theme}>
      <MDXProviderWrapper>
        <Component {...pageProps} />
      </MDXProviderWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
