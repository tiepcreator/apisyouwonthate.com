const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const turnBlogPostsIntoPages = async ({ graphql, actions }) => {
  const blogPostTemplate = path.resolve('./src/templates/blog/Post.js');
  const { data } = await graphql(`
    {
      allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
        nodes {
          id
          code {
            body
            scope
          }
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  // Loop over the posts
  const posts = data.allMdx.nodes;

  console.group('Blog Posts');
  posts.forEach((post, i) => {
    console.log(
      `Found post: [${post.frontmatter.slug}] ${post.frontmatter.title}`
    );
    console.log('post id is', post.id);
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
  console.groupEnd();
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
};
