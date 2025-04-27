/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);
  const tagTemplate = path.resolve('src/templates/tag.js');
  const projectTemplate = path.resolve(`src/templates/project.js`);

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/posts/" }
          frontmatter: { title: { ne: "Dummy" } }
        }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create post detail pages
  const posts = result.data.postsRemark.edges;

  // First, collect all posts by series for navigation
  const seriesPosts = {};
  posts.forEach(({ node }) => {
    const { frontmatter } = node;
    if (frontmatter.series) {
      if (!seriesPosts[frontmatter.series]) {
        seriesPosts[frontmatter.series] = [];
      }
      seriesPosts[frontmatter.series].push(node);
    }
  });

  // Sort posts in each series by part number
  Object.keys(seriesPosts).forEach(seriesName => {
    seriesPosts[seriesName].sort((a, b) => a.frontmatter.part - b.frontmatter.part);
  });

  posts.forEach(({ node }) => {
    const path = `/blog/${node.frontmatter.slug}`;
    const { frontmatter } = node;
    const { series, part } = frontmatter;

    // Default context with just the slug
    const context = {
      slug: frontmatter.slug,
    };

    // If this post is part of a series, add series info to context
    if (series && part) {
      context.series = series;

      // Find previous and next parts in the series
      const seriesIndex = seriesPosts[series].findIndex(post => post.frontmatter.part === part);

      // Previous part
      if (seriesIndex > 0) {
        context.seriesPartPrev = seriesPosts[series][seriesIndex - 1].frontmatter.part;
      }

      // Next part
      if (seriesIndex < seriesPosts[series].length - 1) {
        context.seriesPartNext = seriesPosts[series][seriesIndex + 1].frontmatter.part;
      }
    }

    createPage({
      path: path,
      component: postTemplate,
      context: context,
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  const projectsResult = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { title: { ne: "Dummy" } }
        }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (projectsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const projects = projectsResult.data.allMarkdownRemark.edges;

  projects.forEach(({ node }) => {
    const slug = `/projects/${_.kebabCase(node.frontmatter.title)}`;
    createPage({
      path: slug,
      component: projectTemplate,
      context: {
        slug: slug,
      },
    });
  });

  // Create series pages
  const seriesTemplate = path.resolve('src/templates/series.js');
  const seriesResult = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { series: { ne: null } } }) {
        group(field: { frontmatter: { series: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  if (seriesResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for series.`);
    return;
  }

  const series = seriesResult.data.allMarkdownRemark.group;
  series.forEach(serie => {
    createPage({
      path: `/blog/series/${_.kebabCase(serie.fieldValue)}/`,
      component: seriesTemplate,
      context: {
        series: serie.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === `MarkdownRemark` &&
    node.fileAbsolutePath.includes('/content/projects/')
  ) {
    const slug = `/projects/${_.kebabCase(node.frontmatter.title)}`;
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
          {
            test: /miniraf/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
