import { serialize } from 'next-mdx-remote/serialize';
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import {
  CarbonAd,
  Colophon,
  Layout,
  NewsletterForm,
  Seo,
} from '../../components';

import { GitHubIcon, InstagramIcon, TwitterIcon } from '../../components/icons';

import { getAllAuthors, getAuthorBySlug } from '../../lib/authorLoader';

import config from '../../../config';

export async function getStaticPaths() {
  const authors = await getAllAuthors();

  return {
    paths: authors.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const author = await getAuthorBySlug(params.slug);

  const mdxSource = await serialize(author.content);

  return {
    props: {
      slug: params.slug,
      author: {
        ...author,
        source: mdxSource,
      },
    },
  };
}

const AuthorPage = ({ author }) => {
  const {
    consultingUrl,
    github,
    instagram,
    isStaff,
    name,
    photo,
    shortName,
    shortBio,
    twitter,
  } = author.frontmatter;

  const pageTitle = `${name}, ${isStaff ? 'staff' : 'contributing'} author`;

  const { siteUrl } = config.siteMetadata;
  const authorImageUrl = `/images/authors/${photo}`;
  return (
    <Layout>
      <Seo title={pageTitle} description={shortBio} imageUrl={authorImageUrl} />
      <Container>
        <Stack>
          <Heading as="h1">{name}</Heading>
          <Grid gridTemplateColumns={['1fr', '1fr', '300px 1fr 130px']} gap={8}>
            <Stack>
              <Image src={authorImageUrl} alt={`${name} headshot`} />
              {consultingUrl && (
                <Button>
                  <a
                    href={consultingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire {shortName || name}
                  </a>
                </Button>
              )}
              {twitter && (
                <Link href={`https://twitter.com/${twitter}`}>
                  <Stack direction="row" alignItems="center">
                    <TwitterIcon />
                    <a target="_blank" rel="noopener noreferrer">
                      {twitter}
                    </a>
                  </Stack>
                </Link>
              )}
              {github && (
                <Stack direction="row" alignItems="center">
                  <GitHubIcon />
                  <a
                    href={`https://github.com/${github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {github}
                  </a>
                </Stack>
              )}
              {instagram && (
                <Stack direction="row" alignItems="center">
                  <InstagramIcon />
                  <a
                    href={`https://instagram.com.com/${github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {instagram}
                  </a>
                </Stack>
              )}
            </Stack>
            <Box fontSize={'lg'} mt={0}>
              <MDXRemote {...author.source} />
            </Box>
            <CarbonAd />
          </Grid>
          <Colophon />
          <NewsletterForm />
        </Stack>
      </Container>
    </Layout>
  );
};

export default AuthorPage;
