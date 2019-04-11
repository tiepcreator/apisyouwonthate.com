const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const getMdxDataForType = async ({ type, graphql }) => {
  const { data } = await graphql(`
    {
      allMdx(filter: { frontmatter: { type: { eq: "${type}" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  console.log(
    `🔥 found ${data.allMdx.nodes.length} .mdx files with type: ${type}`
  );
  return data.allMdx.nodes;
};

const turnBlogPostsIntoPages = async ({ graphql, actions }) => {
  const blogPostTemplate = path.resolve('./src/templates/blog/Post.js');

  // Loop over the posts
  const posts = await getMdxDataForType({ type: 'blog', graphql });
  posts.forEach((post, i) => {
    let prevPost;
    let nextPost;

    if (posts.length > 1) {
      if (i !== 0) prevPost = posts[i - 1];
      if (i !== post.length - 1) nextPost = posts[i + 1];
    }
    actions.createPage({
      // What is the URL?
      path: `blog/${post.frontmatter.slug}`,
      // What react component should we use to render this page?
      component: blogPostTemplate,
      // What data should be surfaced to the Component or Query on this page?
      context: {
        id: post.id,
        prev: prevPost ? prevPost.frontmatter.slug : null,
        next: nextPost ? nextPost.frontmatter.slug : null,
      },
    });
  });
};

const turnBooksIntoPages = async ({ graphql, actions }) => {
  const bookTemplate = path.resolve('./src/templates/book/BookPage.js');
  const books = await getMdxDataForType({ type: 'book', graphql });
  books.forEach((book, i) => {
    actions.createPage({
      path: `books/${book.frontmatter.slug}`,
      component: bookTemplate,
      context: {
        id: book.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  await turnBlogPostsIntoPages({ graphql, actions });
  await turnBooksIntoPages({ graphql, actions });
};
