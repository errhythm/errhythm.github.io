import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { usePrefersReducedMotion, useMediaQuery } from '@hooks';

const StyledPublicationsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;

    h2 {
      margin-bottom: 20px;
    }
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 20px;
    &:after {
      bottom: 0.1em;
    }
  }

  .publications-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledTableContainer = styled.div`
  margin-top: -10px;

  @media (max-width: 768px) {
    margin: 50px -10px;
    display: none;
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
      font-size: var(--fz-sm);
    }
    .link-icons {
      width: 50px;
    }

    .publication-title {
      cursor: pointer;
    }

    .publication-abstract {
      max-height: 0;
      overflow: hidden;
      transition:
        max-height 0.3s ease-out,
        opacity 0.3s ease-out;
      opacity: 0;
      margin-top: 10px;
      font-size: var(--fz-sm);
      line-height: 1.5;
      font-weight: 300;
    }

    .publication-abstract.expanded {
      max-height: 1000px; // Adjust this value based on your content
      opacity: 1;
      transition:
        max-height 0.5s ease-in,
        opacity 0.5s ease-in;
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
    cursor: pointer;
  }

  .card-authors {
    font-size: var(--fz-sm);
    margin-bottom: 10px;
  }

  .card-details {
    font-size: var(--fz-sm);
    color: var(--slate);
  }

  .card-links {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .card-links a {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .card-links a:last-child {
    margin-right: 0;
  }

  .card-links svg {
    width: 20px;
    height: 20px;
  }

  .card-abstract {
    max-height: 0;
    overflow: hidden;
    transition:
      max-height 0.3s ease-out,
      opacity 0.3s ease-out;
    opacity: 0;
    margin-top: 10px;
    font-size: var(--fz-sm);
    line-height: 1.5;
    font-weight: 300;
  }

  .card-abstract.expanded {
    max-height: 1000px;
    padding-bottom: 10px;
    opacity: 1;
    transition:
      max-height 0.5s ease-in,
      opacity 0.5s ease-in;
  }
`;

const Publications = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/publications/" }
          frontmatter: { featured: { eq: true } }
        }
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
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealPublications = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [expandedAbstracts, setExpandedAbstracts] = useState([]);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const GRID_LIMIT = 3;
  const publications = data.allMarkdownRemark.edges;
  const firstThree = publications.slice(0, GRID_LIMIT);
  const publicationsToShow = showMore ? publications : firstThree;

  const toggleAbstract = index => {
    setExpandedAbstracts(prevState => {
      const newState = Array(publications.length).fill(false); // Create an array with all false values
      newState[index] = !prevState[index]; // Toggle the clicked index
      return newState; // Return the updated state
    });
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());

    sr.reveal(revealTable.current, srConfig(200, 0));
    revealPublications.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleAbstract(index);
    }
  };

  return (
    <StyledPublicationsSection id="publications">
      <div className="section-header" ref={revealTitle}>
        <h2 className="numbered-heading">Publications</h2>
        <Link className="inline-link archive-link" to="/publications">
          view all publications
        </Link>
      </div>

      {!isMobile && (
        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '550px' }}>Title</th>
                <th style={{ width: '350px' }} className="hide-on-mobile">
                  Authors
                </th>
                <th>Venue</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {publicationsToShow.map(({ node }, i) => {
                const html = node.html.replace(/<[^>]*>/g, '');
                const { date, title, conference, doi, url, github, authors } = node.frontmatter;
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
                        className={`publication-abstract ${expandedAbstracts[i] ? 'expanded' : ''}`}>
                        <p dangerouslySetInnerHTML={{ __html: html }} />
                      </div>
                    </td>
                    <td className="authors hide-on-mobile">
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
                      <div className="link-icons">
                        {url ||
                          (doi && (
                            <a
                              href={url || `https://doi.org/${doi}`}
                              aria-label="External Link"
                              style={{ marginRight: '10px' }}
                              target="_blank"
                              rel="noopener noreferrer">
                              <Icon name="External" className="icon-large" />
                            </a>
                          ))}
                        {github && (
                          <a
                            href={github}
                            aria-label="GitHub Link"
                            target="_blank"
                            rel="noopener noreferrer">
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
      )}

      {isMobile && (
        <StyledCardContainer ref={revealTable}>
          {publicationsToShow.map(({ node }, i) => {
            const html = node.html.replace(/<[^>]*>/g, '');
            const { date, title, conference, doi, url, github, authors } = node.frontmatter;
            return (
              <div
                key={i}
                className="publication-card"
                ref={el => (revealPublications.current[i] = el)}>
                <div
                  className="card-title"
                  onClick={() => toggleAbstract(i)}
                  onKeyDown={event => handleKeyDown(event, i)}
                  role="button"
                  tabIndex={0}>
                  {title}
                </div>
                <div className={`card-abstract ${expandedAbstracts[i] ? 'expanded' : ''}`}>
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                </div>
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
                      target="_blank"
                      rel="noopener noreferrer">
                      <Icon name="External" />
                    </a>
                  ) : null}
                  {github && (
                    <a
                      href={github}
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Icon name="GitHub" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </StyledCardContainer>
      )}

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledPublicationsSection>
  );
};

Publications.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Publications;
