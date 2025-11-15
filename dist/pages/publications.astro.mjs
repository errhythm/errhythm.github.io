import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_KmD42DKJ.mjs';
import { g as getCollection } from '../chunks/_astro_content_BrlYtSmm.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_4boyFQ7E.mjs';
import { N as Nav, S as Social, E as Email, F as Footer } from '../chunks/nav_DXOWMPp6.mjs';
export { renderers } from '../renderers.mjs';

const $$Publications = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Publications";
  const description = "Academic publications and research work.";
  const publications = await getCollection("publications");
  publications.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", Nav, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/nav", "client:component-export": "default" })} ${renderComponent($$result2, "Social", Social, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/social", "client:component-export": "default" })} ${renderComponent($$result2, "Email", Email, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/email", "client:component-export": "default" })} ${maybeRenderHead()}<main> <header style="max-width: 900px; margin-bottom: 60px;"> <h1 class="big-heading">Publications</h1> <p class="subtitle" style="color: var(--slate); margin: 10px 0 0; font-size: var(--fz-lg);">
Academic publications and research work
</p> </header> <div style="max-width: 900px;"> ${publications.map((pub, index) => renderTemplate`<article style="margin-bottom: 40px; padding-bottom: 40px; border-bottom: 1px solid var(--lightest-navy);"> <h3 style="color: var(--lightest-slate); margin-bottom: 10px; font-size: var(--fz-xxl);"> ${pub.data.url ? renderTemplate`<a${addAttribute(pub.data.url, "href")} target="_blank" rel="noopener noreferrer" style="color: var(--lightest-slate);"> ${pub.data.title} </a>` : pub.data.title} </h3> ${pub.data.authors && renderTemplate`<p style="color: var(--slate); font-size: var(--fz-md); margin-bottom: 8px;"> ${pub.data.authors.join(", ")} </p>`} ${pub.data.venue && renderTemplate`<p style="color: var(--green); font-family: var(--font-mono); font-size: var(--fz-sm); margin-bottom: 8px;"> ${pub.data.venue} </p>`} <time style="color: var(--light-slate); font-size: var(--fz-sm);"> ${pub.data.date.toLocaleDateString("en-US", { year: "numeric", month: "long" })} </time> </article>`)} </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/footer", "client:component-export": "default" })} ` })}`;
}, "/home/user/errhythm.github.io/src/pages/publications.astro", void 0);

const $$file = "/home/user/errhythm.github.io/src/pages/publications.astro";
const $$url = "/publications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Publications,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
