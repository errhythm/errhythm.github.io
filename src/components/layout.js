import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Loader, Nav, Social, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(true);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  useEffect(() => {
    const spotlight = document.getElementById('cursor-spotlight');

    const handleMouseMove = e => {
      const x = e.clientX;
      const y = e.clientY;

      spotlight.style.background = `radial-gradient(
        600px at ${x}px ${y}px,
        rgba(29, 78, 216, 0.15),
        transparent 80%
      )`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = new Date().getTime();
    const showLoaderThreshold = 1 * 60 * 60 * 1000; // 1 hour in milliseconds

    if (lastVisit && currentTime - parseInt(lastVisit) <= showLoaderThreshold) {
      setIsLoading(false);
    }
    localStorage.setItem('lastVisit', currentTime.toString());
  }, []);

  return (
    <>
      <Head />
      <div id="root">
        <div
          id="cursor-spotlight"
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
