import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { IconArrowLeft, IconArrowRight } from './icons';

const StyledSeriesContainer = styled.div`
  margin-top: 50px;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  overflow: hidden;
`;

const StyledSeriesHeader = styled.div`
  padding: 20px;
  text-align: center;
  background-color: var(--navy);
  border-bottom: 1px solid var(--lightest-navy);

  h3 {
    margin: 0;
    font-size: var(--fz-lg);
    color: var(--lightest-slate);
  }

  p {
    margin: 10px 0 0;
    color: var(--light-slate);
    font-size: var(--fz-sm);
  }

  .part-indicator {
    display: inline-block;
    background-color: var(--green);
    color: var(--navy);
    padding: 3px 8px;
    border-radius: 12px;
    font-size: var(--fz-xxs);
    font-weight: 600;
    margin-left: 8px;
  }
`;

const StyledSeriesProgress = styled.div`
  padding: 0 20px;
  margin-top: 10px;

  .progress-bar {
    width: 100%;
    height: 6px;
    background-color: var(--lightest-navy);
    border-radius: 3px;
    overflow: hidden;

    .progress-fill {
      height: 100%;
      background-color: var(--green);
      transition: width 0.3s ease-in-out;
    }
  }
`;

const StyledSeriesNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .nav-button {
    display: flex;
    align-items: center;
    color: ${props => (props.disabled ? 'var(--light-slate)' : 'var(--green)')};
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

    svg {
      width: 20px;
      height: 20px;
      margin: ${props => (props.isPrev ? '0 8px 0 0' : '0 0 0 8px')};
    }

    &:hover {
      color: var(--lightest-green);
      transform: translateY(-2px);
    }
  }

  .series-link {
    padding: 8px 16px;
    background-color: var(--green);
    color: var(--navy);
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: var(--fz-sm);
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      background-color: var(--lightest-green);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;

    .series-link {
      order: -1;
    }
  }
`;

const SeriesPostList = styled.ul`
  list-style: none;
  padding: 0 20px 10px;
  margin: 15px 0;
  max-height: ${props => (props.isExpanded ? 'none' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  li {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: var(--border-radius);
    background-color: ${props => (props.isExpanded ? 'var(--lightest-navy)' : 'transparent')};
    transition: background-color 0.3s ease;

    &.current {
      background-color: var(--green-tint);
      border-left: 3px solid var(--green);
    }

    a {
      color: var(--light-slate);
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        color: var(--lightest-slate);
      }

      .part {
        font-family: var(--font-mono);
        font-size: var(--fz-xxs);
        color: var(--green);
      }
    }
  }
`;

const SeriesToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--green);
  font-size: var(--fz-sm);
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 5px 10px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--lightest-green);
    transform: translateY(-2px);
  }

  svg {
    margin-left: 5px;
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    transform: ${props => (props.isExpanded ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const SeriesNavigation = ({ seriesName, seriesPosts, currentPart, prevPost, nextPost }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Calculate the progress percentage
  const totalParts = seriesPosts.length;
  const currentIndex = seriesPosts.findIndex(post => post.part === currentPart);
  const progressPercentage = ((currentIndex + 1) / totalParts) * 100;

  return (
    <StyledSeriesContainer>
      <StyledSeriesHeader>
        <h3>
          {seriesName}
          <span className="part-indicator">
            Part {currentPart}/{totalParts}
          </span>
        </h3>
        <p>This post is part of the &quot;{seriesName}&quot; series</p>
      </StyledSeriesHeader>

      <StyledSeriesProgress>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
        </div>
      </StyledSeriesProgress>

      <SeriesToggleButton onClick={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded}>
        {isExpanded ? 'Hide all posts' : 'View all posts in this series'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </SeriesToggleButton>

      <SeriesPostList isExpanded={isExpanded}>
        {seriesPosts.map(post => (
          <li key={post.slug} className={post.part === currentPart ? 'current' : ''}>
            <Link to={`/blog/${post.slug}`}>
              <span>{post.title}</span>
              <span className="part">Part {post.part}</span>
            </Link>
          </li>
        ))}
      </SeriesPostList>

      <StyledSeriesNavigation>
        <Link
          to={prevPost ? `/blog/${prevPost.frontmatter.slug}` : '#'}
          className="nav-button"
          isPrev={true}
          disabled={!prevPost}>
          <IconArrowLeft />
          <span>Previous Part</span>
        </Link>

        <Link to={`/blog/series/${kebabCase(seriesName)}/`} className="series-link">
          View Series Page
        </Link>

        <Link
          to={nextPost ? `/blog/${nextPost.frontmatter.slug}` : '#'}
          className="nav-button"
          isPrev={false}
          disabled={!nextPost}>
          <span>Next Part</span>
          <IconArrowRight />
        </Link>
      </StyledSeriesNavigation>
    </StyledSeriesContainer>
  );
};

SeriesNavigation.propTypes = {
  seriesName: PropTypes.string.isRequired,
  seriesPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      part: PropTypes.number.isRequired,
    }),
  ).isRequired,
  currentPart: PropTypes.number.isRequired,
  prevPost: PropTypes.object,
  nextPost: PropTypes.object,
};

export default SeriesNavigation;
