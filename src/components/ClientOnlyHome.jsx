import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import Loader from './loader';
import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';
import Hero from './sections/hero';
import About from './sections/about';
import Jobs from './sections/jobs';
import Education from './sections/education';
import Featured from './sections/featured';
import Projects from './sections/projects';
import Publications from './sections/publications';
import Contact from './sections/contact';

const ClientOnlyHome = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Loader />
      <Nav isHome={true} />
      <Social isHome={true} />
      <Email isHome={true} />

      <main className="fillHeight" style={{ counterReset: 'section' }}>
        <Hero />
        <About />
        <Jobs />
        <Education />
        <Featured />
        <Projects />
        <Publications />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
};

export default ClientOnlyHome;
