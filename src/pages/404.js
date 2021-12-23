import { Container, Heading, Text } from '@chakra-ui/react';

import { Layout, Seo } from '../components';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Seo title="404: Not found" />
      <Heading as="h1">404: Not Found</Heading>
      <Text>Damn, sorry. This page doesn&apos;t exist.</Text>
    </Container>
  </Layout>
);

export default NotFoundPage;
