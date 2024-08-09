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

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.conference,
      &.doi,
      &.url,
      &.abstract,
      &.authors {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }
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
          <p className="subtitle">A big list of things I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Conference</th>
                <th>DOI</th>
                <th>Abstract</th>
                <th>Authors</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {publications.map(({ node }, i) => {
                const { date, title, conference, doi, url, github, abstract, authors } =
                  node.frontmatter;
                return (
                  <tr key={i} ref={el => (revealPublications.current[i] = el)}>
                    <td className="year">{date}</td>
                    <td className="title">{title}</td>
                    <td className="conference">{conference}</td>
                    <td className="doi">{doi}</td>
                    <td className="abstract">{abstract}</td>
                    <td className="authors">
                      {authors.map((author, index) => (
                        <div key={index}>
                          <a href={author.url} target="_blank" rel="noopener noreferrer">
                            {author.name}
                          </a>
                        </div>
                      ))}
                    </td>
                    <td className="links">
                      <div>
                        {url && (
                          <a href={url} aria-label="External Link" style={{ marginRight: '10px' }}>
                            <Icon name="External" />
                          </a>
                        )}
                        {github && (
                          <a href={github} aria-label="GitHub Link">
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
            abstract
            authors {
              name
              url
            }
          }
          html
        }
      }
    }
  }
`;
