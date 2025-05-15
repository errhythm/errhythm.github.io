/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Handle redirects for SPA on GitHub Pages
export const onRouteUpdate = () => {
  const redirectMatch = window.location.search.match(/\?\/(.*)/);
  if (redirectMatch) {
    window.history.replaceState(null, null, `/${redirectMatch[1]}`);
  }
};
