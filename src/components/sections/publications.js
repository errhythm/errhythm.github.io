import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { usePrefersReducedMotion } from '@hooks';

const StyledPublicationsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
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
  }
`;

const Publications = () => {
  const data = useStaticQuery(graphql`
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

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());

    sr.reveal(revealTable.current, srConfig(200, 0));
    revealPublications.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  const GRID_LIMIT = 3;
  const publications = data.allMarkdownRemark.edges;
  const firstThree = publications.slice(0, GRID_LIMIT);
  const publicationsToShow = showMore ? publications : firstThree;

  return (
    <StyledPublicationsSection id="publications">
      <header ref={revealTitle}>
        <h2 className="numbered-heading">Publications</h2>
      </header>
      <Link className="inline-link archive-link" to="/publications">
        view the archive
      </Link>

      <StyledTableContainer ref={revealTable}>
        <table>
          <thead>
            <tr>
              <th style={{ width: '550px' }}>Title</th>
              <th style={{ width: '350px' }} className="hide-on-mobile">
                Authors
              </th>
              <th>Conference</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {publicationsToShow.map(({ node }, i) => {
              const { date, title, conference, doi, url, github, authors } = node.frontmatter;
              return (
                <tr key={i} ref={el => (revealPublications.current[i] = el)}>
                  <td className="title">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
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
                            rel="noopener noreferrer"
                          >
                            <Icon name="External" />
                          </a>
                        ))}
                      {github && (
                        <a
                          href={github}
                          aria-label="GitHub Link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon name="GitHub" />
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
