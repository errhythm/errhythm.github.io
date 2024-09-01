import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import PropTypes from 'prop-types';
import { Icon } from '@components/icons';

const StyledProjectContainer = styled.main`
  max-width: 1000px;
`;
const StyledProjectHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
  .project-links {
    display: flex;
    height: 20px;
    gap: 10px;
  }
`;
const StyledProjectContent = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }
`;

const ProjectTemplate = ({ data, location }) => {
  const project = data.markdownRemark;

  // Handle case where no project is found
  if (!project) {
    return (
      <Layout location={location}>
        <Helmet title="Project Not Found" />
        <StyledProjectContainer>
          <h1>Project Not Found</h1>
          <p>Sorry, but the project you were trying to view does not exist.</p>
          <Link to="/projects">Back to Projects</Link>
        </StyledProjectContainer>
      </Layout>
    );
  }

  const { frontmatter, html } = project;
  const { title, date, github, external, tech } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <StyledProjectContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/projects">All Projects</Link>
        </span>

        <StyledProjectHeader>
          <h1 className="medium-heading">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tech &&
              tech.length > 0 &&
              tech.map((tech, i) => (
                <span key={i} className="tag">
                  #{tech}
                </span>
              ))}

            <div className="project-links">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <Icon name="GitHub" />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  target="_blank"
                  className="external"
                  rel="noopener noreferrer"
                  aria-label="External Link"
                >
                  <Icon name="External" style={{ width: '20px', height: '20px' }} />
                </a>
              )}
            </div>
          </p>
        </StyledProjectHeader>
        <StyledProjectContent dangerouslySetInnerHTML={{ __html: html }} />
      </StyledProjectContainer>
    </Layout>
  );
};

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  location: PropTypes.object.isRequired,
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        github
        external
        tech
      }
      fields {
        slug
      }
    }
  }
`;
