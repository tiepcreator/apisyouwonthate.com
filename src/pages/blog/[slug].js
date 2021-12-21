import { serialize } from 'next-mdx-remote/serialize';

import { Container } from '@chakra-ui/react';

import { Layout, Seo } from '../../components';

import { getAllPosts, getPostBySlug } from '../../lib/blogPostLoader';

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  const mdxSource = await serialize(post.content);

  return {
    props: {
      slug: params.slug,
      post: {
        ...post,
        source: mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

const BlogPage = ({ post, slug }) => {
  const { author, title, subtitle } = post.frontmatter;
  return (
    <Layout>
      <Container>
        <Seo title={title} description={subtitle} author={author} />
        <h1>{title}</h1>
      </Container>
    </Layout>
  );
};

export default BlogPage;
