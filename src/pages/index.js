import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Layout,
  Hero,
  About,
  Jobs,
  Education,
  Featured,
  Projects,
  Contact,
  Publications,
} from '@components';
import Helmet from 'react-helmet';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Education />
      <Featured />
      <Projects />
      <Publications />
      <Contact />
    </StyledMainContainer>
    <Helmet>
      <script type="application/ld+json">
        {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ehsanur Rahman Rhythm",
        "url": "https://errhythm.me",
        "jobTitle": "Web Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "RhyStart Technologies"
        },
        "sameAs": [
          "https://github.com/errhythm",
          "https://twitter.com/errhythm",
          "https://www.linkedin.com/in/errhythm",
          "https://orcid.org/0000-0002-4641-508X"
        ]
      }
    `}
      </script>
    </Helmet>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
