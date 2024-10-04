import React, { useEffect, useState, useRef } from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  figure img, .gatsby-resp-image-wrapper {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
`;

const StyledPostContainer = styled.main`
  max-width: 1000px;
`;
const StyledPostHeader = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const StyledPostContent = styled.div`
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

  figure {
    margin: 2em 0;
    position: relative;
    width: 100%;
    max-width: 800px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: var(--border-radius);
      box-shadow: 0 10px 30px -15px var(--navy-shadow);
      transition: var(--transition);

      &[alt=''],
      &:not([alt]) {
        -webkit-filter: none !important;
        filter: none !important;
      }
    }

    &:hover {
      img {
        box-shadow: 0 20px 30px -15px var(--navy-shadow);
        transform: translateY(-5px);
      }
    }

    figcaption {
      margin-top: 1em;
      text-align: center;
      color: var(--light-slate);
      font-style: italic;
      font-size: var(--fz-sm);
    }
  }

  .gatsby-resp-image-wrapper {
    margin: 2em 0;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
      transform: translateY(-5px);
    }
  }
`;

const StyledFeaturedImage = styled.div`
  margin: 50px auto;
  position: relative;
  width: 100%;
  max-width: 800px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--border-radius);
    border: 2px solid var(--green);
    transition: var(--transition);
    opacity: 0.1;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    opacity: 0;
    transform: translateY(20px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    &::before {
      top: 10px;
      left: 10px;
      opacity: 0.2;
    }

    img {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    margin: 40px auto;
  }
`;

const PostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const { frontmatter, html } = post;
  const { title, date, tags, image } = frontmatter;
  const [setElements, entries] = useIntersectionObserver({
    threshold: 0.25,
    rootMargin: '0px 0px -100px 0px',
  });

  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && imageRef.current) {
      const images = contentRef.current.querySelectorAll('figure img, .gatsby-resp-image-wrapper');
      setElements([imageRef.current, ...images]);
    }
  }, [setElements]);

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, [entries]);

  const processedContent = html.replace(
    /<p><img(.*?)alt="(.*?)"(.*?)><\/p>/g,
    (match, p1, p2, p3) => {
      if (p2.trim() !== '') {
        return `<figure><img${p1}alt="${p2}"${p3}><figcaption>${p2}</figcaption></figure>`;
      } else {
        return `<figure><img${p1}alt="${p2}"${p3}></figure>`;
      }
    },
  );

  // eslint-disable-next-line no-unused-vars
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const generateToken = async () => {
      if (title && tags && tags.length > 0 && date) {
        const key = await crypto.subtle.importKey(
          'raw',
          new TextEncoder().encode('rhythm'),
          { name: 'HMAC', hash: { name: 'SHA-256' } },
          false,
          ['sign'],
        );

        const token = Array.from(
          new Uint8Array(
            await crypto.subtle.sign(
              'HMAC',
              key,
              new TextEncoder().encode(JSON.stringify({ title, tag: tags[0], date })),
            ),
          ),
        )
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');

        const ogImageUrl = `https://oggy.rhystart.com/api/rhythm?title=${encodeURIComponent(title)}&tag=${encodeURIComponent(tags[0])}&date=${encodeURIComponent(date)}&token=${encodeURIComponent(token)}`;
        setImageUrl(ogImageUrl);
      }
    };

    generateToken();
  }, [title, tags, date]);

  return (
    <Layout location={location}>
      <GlobalStyle />
      <Helmet title={title}>
        <meta name="image" content={imageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All memories</Link>
        </span>

        <StyledPostHeader>
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
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
          </p>
        </StyledPostHeader>

        {image && (
          <StyledFeaturedImage>
            <img src={image} alt={title} ref={imageRef} />
          </StyledFeaturedImage>
        )}

        <StyledPostContent
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
        image
        slug
        tags
      }
    }
  }
`;
