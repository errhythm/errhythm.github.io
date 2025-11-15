import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';

const ClientOnly404 = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav isHome={false} />
      <Social isHome={false} />
      <Email isHome={false} />
      <Footer />
    </ThemeProvider>
  );
};

export default ClientOnly404;
