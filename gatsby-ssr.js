/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction) {
    setHeadComponents([
      <script
        key="spa-redirect"
        dangerouslySetInnerHTML={{
          __html: `
            // Single Page Apps for GitHub Pages
            // MIT License
            // Based on https://github.com/rafgraph/spa-github-pages
            (function(l) {
              if (l.search[1] === '/') {
                var decoded = l.search.slice(1).split('&').map(function(s) {
                  return s.replace(/~and~/g, '&')
                }).join('?');
                window.history.replaceState(null, null,
                  l.pathname.slice(0, -1) + decoded + l.hash
                );
              }
            }(window.location))
          `,
        }}
      />,
    ]);
  }
};
