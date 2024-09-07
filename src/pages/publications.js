import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;
        font-size: var(--fz-lg);

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.conference,
      &.doi,
      &.url,
      &.abstract {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }
    }
    .title {
      padding-top: 15px;
      padding-right: 20px;
      color: var(--lightest-slate);
      font-size: var(--fz-lg);
      font-weight: 600;
      line-height: 1.25;
    }

    .authors {
      font-size: var(--fz-md);
    }
    .icon-large {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
`;

const PublicationsPage = ({ location, data }) => {
  const publications = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealPublications = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealPublications.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Publications" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Publications</h1>
          <p className="subtitle">A big list of researches I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '500px' }}>Title</th>
                <th style={{ width: '400px' }}>Authors</th>
                <th>Conference</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {publications.map(({ node }, i) => {
                const { date, title, conference, doi, url, github, authors } = node.frontmatter;
                return (
                  <tr key={i} ref={el => (revealPublications.current[i] = el)}>
                    <td className="title">
                      <a
                        href={url || `https://doi.org/${doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                    </td>
                    <td className="authors">
                      {authors.map((author, index) => (
                        <span key={index}>
                          {author.url ? (
                            <a href={author.url} target="_blank" rel="noopener noreferrer">
                              {author.name === 'Ehsanur Rahman Rhythm' ? (
                                <strong>{author.name}</strong>
                              ) : (
                                author.name
                              )}
                            </a>
                          ) : author.email ? (
                            <a href={`mailto:${author.email}`}>
                              {author.name === 'Ehsanur Rahman Rhythm' ? (
                                <strong>{author.name}</strong>
                              ) : (
                                author.name
                              )}
                            </a>
                          ) : author.name === 'Ehsanur Rahman Rhythm' ? (
                            <strong>{author.name}</strong>
                          ) : (
                            author.name
                          )}
                          {index < authors.length - 1 && <span>, </span>}
                        </span>
                      ))}
                    </td>
                    <td className="conference">{conference}</td>
                    <td className="year">{new Date(date).getFullYear()}</td>
                    <td className="links">
                      <div>
                        {url || doi ? (
                          <a
                            href={url || `https://doi.org/${doi}`}
                            aria-label="External Link"
                            className="icon-large"
                          >
                            <Icon name="External" className="icon-large" />
                          </a>
                        ) : null}
                        {github && (
                          <a href={github} aria-label="GitHub Link" className="icon-large">
                            <Icon name="GitHub" className="icon-large" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};

PublicationsPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default PublicationsPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/publications/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            conference
            doi
            url
            github
            featured
            authors {
              name
              url
              affiliation
              email
            }
          }
          html
        }
      }
    }
  }
`;
