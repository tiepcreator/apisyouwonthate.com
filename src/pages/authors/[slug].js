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

import { CarbonAd, Colophon, Layout, NewsletterForm } from '../../components';

import { GitHubIcon, InstagramIcon, TwitterIcon } from '../../components/icons';

import { getAllAuthors, getAuthorBySlug } from '../../lib/authorLoader';

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
  const { consultingUrl, github, instagram, name, photo, shortName, twitter } =
    author.frontmatter;
  return (
    <Layout>
      <Container>
        <Stack>
          <Heading as="h1">{name}</Heading>
          <Grid gridTemplateColumns={'300px 70ch 130px'} gap={8}>
            <Stack>
              <Image
                src={`/images/authors/${photo}`}
                alt={`${name} headshot`}
              />
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
