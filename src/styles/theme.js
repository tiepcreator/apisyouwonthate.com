import { extendTheme } from '@chakra-ui/react';

import Container from './components/container';
import Link from './components/link';
import UnorderedList from './components/unorderedList';

const theme = extendTheme({
  // colors generated from https://material.io/inline-tools/color/
  // #80B682 for green
  // #89709B for purple
  colors: {
    // APIs You Won't Hate green is green.400
    green: {
      50: '#e7f2e8',
      100: '#c6dec7',
      200: '#a3c9a4',
      300: '#80b682',
      400: '#68a869',
      500: '#4d9a4f',
      600: '#458c46',
      700: '#3b7b3c',
      800: '#316a32',
      900: '#1f4c20',
    },
    purple: {
      50: '#eae6ed',
      100: '#cbc1d4',
      200: '#aa98b7',
      300: '#89709b',
      400: '#725387',
      500: '#5f367a',
      600: '#583175',
      700: '#4f296c',
      800: '#462365',
      900: '#371758',
    },
  },
  components: {
    Container,
    Link,
    List: UnorderedList,
    UnorderedList,
  },
});

export default theme;
