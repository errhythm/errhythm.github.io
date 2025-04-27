import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { IconBookmark, IconEye, IconHeart, IconTag } from '@components/icons';
import { useViewCount, useLikeCount } from '../../hooks/useFirebase';

const StyledMainContainer = styled.main`
  & > header {
    margin-bottom: 100px;
    text-align: center;

    a {
      &:hover,
      &:focus {
        cursor:
          url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
  }
`;
const StyledGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 50px;
  position: relative;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
const StyledPost = styled.li`
  transition: var(--transition);
  cursor: default;

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post__inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .post__inner {
    ${({ theme }) => theme.mixins.boxShadow};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    background-color: var(--light-navy);
  }

  .post__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  .post__icon {
    ${({ theme }) => theme.mixins.flexCenter};
    color: var(--green);
    flex-shrink: 0;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  .post__stats {
    display: flex;
    align-items: center;

    .stat {
      display: flex;
      align-items: center;
      color: var(--light-slate);
      font-size: var(--fz-sm);

      &:first-of-type {
        margin-right: 15px;
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }

      span {
        margin-top: 5px; // Add this line to align text with icon
      }
    }
  }

  .post__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .post__title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .post__desc {
    color: var(--light-slate);
    font-size: 17px;
    margin-bottom: 20px;
  }

  footer {
    margin-top: auto;
    width: 100%;
  }

  .post__date {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .post__tag {
    display: flex;
    align-items: center;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);

    svg {
      width: 14px;
      height: 14px;
      margin-right: 5px;
    }
  }
`;

const truncateDescription = (description, maxLength = 160) => {
  if (!description) {
    return '';
  }
  if (description.length <= maxLength) {
    return description;
  }
  return `${description.slice(0, maxLength).trim()}...`;
};

const blogPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet>
        <title>Blog</title>
        <link rel="alternate" type="application/rss+xml" href="https://errhythm.me/rss.xml" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "url": "https://errhythm.me/blog",
        "name": "Ehsanur Rahman Rhythm's Blog",
        "description": "A collection of thoughts and ideas",
        "author": {
          "@type": "Person",
          "name": "Ehsanur Rahman Rhythm",
          "url": "https://errhythm.me"
        },
        "blogPost": [
          ${posts
      .map(
        ({ node }) => `
            {
              "@type": "BlogPosting",
              "url": "https://errhythm.me/blog/${node.frontmatter.slug}",
              "name": "${node.frontmatter.title}",
              "headline": "${node.frontmatter.title}",
              "keywords": "${node.frontmatter.tags.join(', ')}",
              "datePublished": "${node.frontmatter.date}",
              "description": "${node.frontmatter.description}",
              "author": {
                "@type": "Person",
                "name": "Ehsanur Rahman Rhythm",
                "url": "https://errhythm.me"
              }
            }
          `,
      )
      .join(',')}
            ]
          }
          `}
        </script>
      </Helmet>

      <StyledMainContainer>
        <header>
          <h1 className="big-heading">blog</h1>
          <p className="subtitle">a collection of thoughts and ideas</p>
        </header>

        <StyledGrid>
          {posts.length > 0 &&
            posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, slug, date, tags } = frontmatter;
              const prefix = '/blog/';
              const formattedDate = new Date(date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              });

              const viewCount = useViewCount('blog', slug, false);
              const { likeCount } = useLikeCount('blog', slug);

              return (
                <StyledPost key={i}>
                  <div className="post__inner">
                    <div className="post__top">
                      <div className="post__icon">
                        <IconBookmark />
                      </div>
                      <div className="post__stats">
                        <span className="stat">
                          <IconEye />
                          <span>{viewCount}</span>
                        </span>
                        <span className="stat">
                          <IconHeart />
                          <span>{likeCount}</span>
                        </span>
                      </div>
                    </div>
                    <div className="post__content">
                      <h5 className="post__title">
                        <Link to={`${prefix}${slug}`}>{title}</Link>
                      </h5>
                      {description && (
                        <p className="post__desc">{truncateDescription(description)}</p>
                      )}
                    </div>
                    <footer>
                      <span className="post__date">{formattedDate}</span>
                      {tags.length > 0 && (
                        <Link to={`/blog/tags/${kebabCase(tags[0])}/`} className="post__tag">
                          <IconTag />
                          {tags[0]}
                        </Link>
                      )}
                    </footer>
                  </div>
                </StyledPost>
              );
            })}
        </StyledGrid>
      </StyledMainContainer>
    </Layout>
  );
};

blogPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default blogPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { draft: { ne: true }, title: { ne: "Dummy" } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
            draft
          }
          html
        }
      }
    }
  }
`;
