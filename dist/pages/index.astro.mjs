import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_KmD42DKJ.mjs';
import { $ as $$BaseLayout, L as Loader, N as Nav, S as Social, E as Email, H as Hero, A as About, J as Jobs, a as Education, b as Featured, P as Projects, c as Publications, C as Contact, F as Footer } from '../chunks/nav_ew7bo7No.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const schemaData = {
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
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "isHome": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Loader", Loader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/loader", "client:component-export": "default" })} ${renderComponent($$result2, "Nav", Nav, { "client:load": true, "isHome": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/nav", "client:component-export": "default" })} ${renderComponent($$result2, "Social", Social, { "client:load": true, "isHome": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/social", "client:component-export": "default" })} ${renderComponent($$result2, "Email", Email, { "client:load": true, "isHome": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/email", "client:component-export": "default" })} ${maybeRenderHead()}<main class="fillHeight" style="counter-reset: section;"> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/sections/hero", "client:component-export": "default" })} ${renderComponent($$result2, "About", About, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/sections/about", "client:component-export": "default" })} ${renderComponent($$result2, "Jobs", Jobs, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/sections/jobs", "client:component-export": "default" })} ${renderComponent($$result2, "Education", Education, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/sections/education", "client:component-export": "default" })} ${renderComponent($$result2, "Featured", Featured, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/sections/featured", "client:component-export": "default" })} ${renderComponent($$result2, "Projects", Projects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/sections/projects", "client:component-export": "default" })} ${renderComponent($$result2, "Publications", Publications, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/sections/publications", "client:component-export": "default" })} ${renderComponent($$result2, "Contact", Contact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/sections/contact", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/footer", "client:component-export": "default" })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(schemaData))) })}` })}`;
}, "/home/user/errhythm.github.io/src/pages/index.astro", void 0);

const $$file = "/home/user/errhythm.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
