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
  "description": "Ehsanur Rahman Rhythm is a Software Developer and Product Engineer based in Dhaka, Bangladesh. He specializes in building robust web applications and holds degrees in Computer Science and Software Engineering.",
  "image": "https://errhythm.me/path/to/your/professional-photo.jpg",
  "gender": {
    "@type": "GenderType",
    "name": "Male"
  },
  "jobTitle": [
    "Software Developer",
    "Product Engineer"
  ],
  "worksFor": [
    {
      "@type": "Organization",
      "name": "iF returns",
      "url": "https://ifreturns.com"
    },
    {
      "@type": "Organization",
      "name": "DeliveryHobe",
      "url": "https://deliveryhobe.com"
    }
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Developer",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://en.wikipedia.org/wiki/Software_developer"
    }
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Master's Degree",
      "about": "Software Engineering",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "University of Dhaka",
        "url": "https://www.du.ac.bd/"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Bachelor's Degree",
      "about": "Computer Science",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Brac University",
        "url": "https://www.bracu.ac.bd/"
      }
    }
  ],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "University of Dhaka", "url": "https://www.du.ac.bd/" },
    { "@type": "EducationalOrganization", "name": "Brac University", "url": "https://www.bracu.ac.bd/" },
    { "@type": "Organization", "name": "RhyStart Technologies" }
  ],
  "homeLocation": { "@type": "City", "name": "Dhaka" },
  "nationality": { "@type": "Country", "name": "Bangladesh" },
  "knowsAbout": [
    { "@type": "Thing", "name": "Software Development", "sameAs": "https://en.wikipedia.org/wiki/Software_development" },
    { "@type": "Thing", "name": "Product Engineering", "sameAs": "https://en.wikipedia.org/wiki/Product_engineering" },
    { "@type": "Thing", "name": "Software Engineering", "sameAs": "https://en.wikipedia.org/wiki/Software_engineering" },
    { "@type": "Thing", "name": "Computer Science", "sameAs": "https://en.wikipedia.org/wiki/Computer_science" },
    { "@type": "Thing", "name": "Web Development", "sameAs": "https://en.wikipedia.org/wiki/Web_development" }
  ],
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
