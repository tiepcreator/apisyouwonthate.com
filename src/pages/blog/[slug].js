import { Layout } from '../../components';

// use getstaticprops to load this page from its mdx
export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const content = await import(`../../../content/blog/${slug}.md`);
  const data = matter(content.default);
  return {
    props: {
      data,
      slug,
    },
  };
};

const BlogPage = ({ data, slug }) => {
  <Layout>
    <h1>{data?.title}</h1>
  </Layout>;
};

export default BlogPage;
