import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import Nav from './nav';
import Social from './social';
import Email from './email';
import Footer from './footer';

const ClientOnlyLayout = ({ isHome = false, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav isHome={isHome} />
      <Social isHome={isHome} />
      <Email isHome={isHome} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default ClientOnlyLayout;
