import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'React.js',
    'Express.js',
    'Astro.js',
    'Vanilla JavaScript',
    'PHP',
    'Laravel',
    'WordPress',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Ehsanur Rahman Rhythm, and I enjoy creating things that live on the
              internet. My journey in web development started during my time at Brac University,
              where I developed a passion for building user-friendly and dynamic web applications.
            </p>

            <p>
              Fast-forward to today, I have over four years of experience working with various
              technologies, including PHP, Laravel, and WordPress. I’ve had the privilege of working
              on a range of projects, from developing a digital database management system for the{' '}
              <a href="https://mfacademy.gov.bd/" target="_blank" rel="noreferrer">
                Marine Fisheries Academy
              </a>{' '}
              to creating high-traffic educational websites and news portals.
            </p>

            <p>
              Currently, I'm working at{' '}
              <a
                href="https://ifreturns.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#54b58f' }}>
                iF returns
              </a>{' '}
              🇪🇸 and{' '}
              <a
                href="https://deliveryhobe.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#ffe23d' }}>
                DeliveryHobe
              </a>{' '}
              🇧🇩 . My main goal is to build accessible, human-centered products that meet and exceed
              user expectations.
            </p>

            <p>
              In addition to my work in web development, I have also published research in the
              fields of natural language processing (NLP) and data science. I worked as a Research
              Assistant at{' '}
              <a
                href="https://bracu.ac.bd/"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#253494' }}>
                Brac University
              </a>
              , researching machine learning-based accessibility systems for visually impaired
              individuals on campus. These <a href="#publications">publications</a> reflect my
              commitment to advancing technology and contributing to the academic community.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="https://cdn.errhythm.me/errhythm_ghibli.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
