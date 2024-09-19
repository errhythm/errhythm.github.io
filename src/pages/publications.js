import React, { useRef, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion, useMediaQuery } from '@hooks';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
    table {
      display: none;
    }
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

    .publication-title {
      cursor: pointer;
    }

    .publication-abstract {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
      margin-top: 10px;
      font-size: var(--fz-sm);
      line-height: 1.5;
      font-weight: 300;
    }

    .publication-abstract.expanded {
      max-height: 1000px;
      transition: max-height 0.7s ease-in;
    }
  }
`;

const StyledCardContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  .publication-card {
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    padding: 20px;
    margin-bottom: 20px;
  }

  .card-title {
    font-size: var(--fz-lg);
    font-weight: 600;
    color: var(--lightest-slate);
    margin-bottom: 10px;
  }

  .card-authors {
    font-size: var(--fz-md);
    margin-bottom: 10px;
  }

  .card-details {
    font-size: var(--fz-sm);
    color: var(--slate);
  }

  .card-links {
    margin-top: 10px;
  }

  .icon-large {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

const PublicationsPage = ({ location, data }) => {
  const publications = data.allMarkdownRemark.edges;
  const publicationsType = publications.map(({ node }) => node.frontmatter.type);
  const uniqueTypes = [...new Set(publicationsType)];
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealPublications = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [expandedAbstracts, setExpandedAbstracts] = useState([]);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const sanitizeHtml = html => {
    if (typeof html !== 'string') {
      return '';
    }
    return html.replace(/<[^>]*>/g, '');
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealPublications.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  const toggleAbstract = index => {
    setExpandedAbstracts(prevState => {
      const newState = Array(publications.length).fill(false);
      newState[index] = !prevState[index];
      return newState;
    });
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleAbstract(index);
    }
  };

  return (
    <Layout location={location}>
      <Helmet title="Publications" />
      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Publications</h1>
          <p className="subtitle">A big list of researches I've worked on</p>
        </header>
        <StyledTableContainer>
          {uniqueTypes.map((type, index) => (
            <React.Fragment key={index}>
              <h3 style={{ marginBottom: '30px', marginTop: index === 0 ? '0' : '40px' }}>
                {type}s
              </h3>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '500px' }}>Title</th>
                    <th style={{ width: '400px' }}>Authors</th>
                    <th>Venue</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  {publications
                    .filter(({ node }) => node.frontmatter.type === type)
                    .map(({ node }, i) => {
                      const sanitizedHtml = sanitizeHtml(node.html);
                      const { date, title, conference, doi, url, github, authors } =
                        node.frontmatter;
                      return (
                        <tr key={i} ref={el => (revealPublications.current[i] = el)}>
                          <td className="title">
                            <div
                              className="publication-title"
                              onClick={() => toggleAbstract(i)}
                              onKeyDown={event => handleKeyDown(event, i)}
                              role="button"
                              tabIndex={0}>
                              {title}
                            </div>
                            <div
                              className={`publication-abstract ${
                                expandedAbstracts[i] ? 'expanded' : ''
                              }`}>
                              <p>{sanitizedHtml}</p>
                            </div>
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
                                  className="icon-large">
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
              {isMobile && (
                <StyledCardContainer>
                  {publications
                    .filter(({ node }) => node.frontmatter.type === type)
                    .map(({ node }, i) => {
                      const { date, title, conference, doi, url, github, authors } =
                        node.frontmatter;
                      return (
                        <div key={i} className="publication-card">
                          <div className="card-title">{title}</div>
                          <div className="card-authors">
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
                          </div>
                          <div className="card-details">
                            <div>{conference}</div>
                            <div>{new Date(date).getFullYear()}</div>
                          </div>
                          <div className="card-links">
                            {url || doi ? (
                              <a
                                href={url || `https://doi.org/${doi}`}
                                aria-label="External Link"
                                className="icon-large">
                                <Icon name="External" />
                              </a>
                            ) : null}
                            {github && (
                              <a href={github} aria-label="GitHub Link" className="icon-large">
                                <Icon name="GitHub" />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </StyledCardContainer>
              )}
            </React.Fragment>
          ))}
          <div
            style={{
              margin: '40px 0',
              padding: '20px',
              color: 'var(--slate)',
              textAlign: 'left',
              fontSize: '14px',
              lineHeight: '1.5',
            }}>
            <p>The * (asterisk) denotes equal contribution by both authors to the research.</p>
          </div>
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
      sort: { frontmatter: { date: DESC } }
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
            type
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
