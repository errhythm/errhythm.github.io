import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@styles';

const StyledComponentsProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledComponentsProvider;
