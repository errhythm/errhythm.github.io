import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import styled from 'styled-components';

const StyledSeriesContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 15px;
`;

const StyledSeriesHeader = styled.header`
  margin-bottom: 40px;
  text-align: center;
  padding: 30px;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px -15px var(--navy-shadow);

  h1 {
    font-size: var(--fz-heading);
    margin-bottom: 10px;
    color: var(--lightest-slate);
  }

  p {
    color: var(--light-slate);
    font-size: var(--fz-lg);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const StyledSeriesSummary = styled.div`
  margin-bottom: 40px;
  padding: 25px;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  color: var(--light-slate);
  font-size: var(--fz-md);
  line-height: 1.6;

  h2 {
    font-size: var(--fz-xl);
    margin-bottom: 15px;
    color: var(--lightest-slate);
  }

  p {
    margin-bottom: 15px;
  }
`;

const StyledSeriesList = styled.ul`
  list-style: none;
  padding: 0;
  counter-reset: series-counter;
`;

const StyledSeriesItem = styled.li`
  position: relative;
  counter-increment: series-counter;
  margin-bottom: 30px;
  padding: 25px 25px 25px 60px;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  transition: var(--transition);
  box-shadow: 0 10px 30px -15px var(--navy-shadow);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
  }

  &::before {
    content: counter(series-counter);
    position: absolute;
    top: 20px;
    left: 15px;
    width: 30px;
    height: 30px;
    background-color: var(--green);
    color: var(--navy);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-weight: bold;
    font-size: var(--fz-md);
  }

  .title {
    margin-bottom: 10px;

    a {
      color: var(--green);
      font-size: var(--fz-xxl);
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid var(--lightest-navy);
    color: var(--light-slate);
    font-size: var(--fz-sm);

    .date {
      font-family: var(--font-mono);
    }

    .read-time {
      display: flex;
      align-items: center;

      svg {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
    }
  }

  .description {
    color: var(--light-slate);
    margin: 10px 0 0;
    line-height: 1.6;
    font-size: var(--fz-md);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    gap: 10px;

    .tag {
      background-color: var(--lightest-navy);
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      padding: 5px 10px;
      border-radius: 12px;
      transition: var(--transition);

      &:hover {
        background-color: var(--green-tint);
        color: var(--green);
      }
    }
  }
`;

const calculateReadingTime = content => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

const SeriesTemplate = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark;
  const seriesName = edges[0].node.frontmatter.series;
  const totalParts = edges.length;

  return (
    <Layout location={location}>
      <Helmet title={`Series: ${seriesName}`} />
      <StyledSeriesContainer>
        <StyledSeriesHeader>
          <h1>{seriesName}</h1>
          <p>
            A {totalParts}-part series exploring {seriesName}
          </p>
        </StyledSeriesHeader>

        <StyledSeriesSummary>
          <h2>About this series</h2>
          <p>
            This series consists of {totalParts} posts that explore {seriesName} in detail. Each
            post builds upon the concepts introduced in previous parts, taking you through a
            comprehensive journey from the basics to advanced techniques.
          </p>
          <p>
            Start from Part 1 and progress sequentially through the series for the best learning
            experience, or jump to a specific topic if you're looking for particular information.
          </p>
        </StyledSeriesSummary>

        <StyledSeriesList>
          {edges.map(({ node }) => {
            const { frontmatter, html } = node;
            const readingTime = calculateReadingTime(html);

            return (
              <StyledSeriesItem key={frontmatter.slug}>
                <h2 className="title">
                  <Link to={`/blog/${frontmatter.slug}`}>{frontmatter.title}</Link>
                </h2>
                <p className="description">{frontmatter.description}</p>

                <div className="tags">
                  {frontmatter.tags &&
                    frontmatter.tags.map((tag, i) => (
                      <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="tag">
                        #{tag}
                      </Link>
                    ))}
                </div>

                <div className="meta">
                  <span className="date">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="read-time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {readingTime} min read
                  </span>
                </div>
              </StyledSeriesItem>
            );
          })}
        </StyledSeriesList>

        <div className="back-link" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            to="/blog"
            style={{
              color: 'var(--green)',
              fontFamily: 'var(--font-mono)',
              textDecoration: 'none',
            }}>
            ← Back to all blog posts
          </Link>
        </div>
      </StyledSeriesContainer>
    </Layout>
  );
};

SeriesTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default SeriesTemplate;

export const pageQuery = graphql`
  query SeriesByName($series: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { series: { eq: $series } } }
      sort: { frontmatter: { part: ASC } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            series
            part
            description
            tags
          }
        }
      }
    }
  }
`;
