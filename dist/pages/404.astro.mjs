import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_KmD42DKJ.mjs';
import { $ as $$BaseLayout, N as Nav, S as Social, E as Email, F as Footer } from '../chunks/nav_ew7bo7No.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "404: Not Found";
  const description = "The page you are looking for does not exist.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", Nav, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/nav", "client:component-export": "default" })} ${renderComponent($$result2, "Social", Social, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/social", "client:component-export": "default" })} ${renderComponent($$result2, "Email", Email, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/email", "client:component-export": "default" })} ${maybeRenderHead()}<main> <section style="text-align: center; padding: 100px 0;"> <h1 class="big-heading" style="font-size: clamp(100px, 25vw, 200px);">404</h1> <h2 style="font-size: clamp(30px, 5vw, 50px); color: var(--green);">
Page Not Found
</h2> <p style="margin-top: 20px;"> <a href="/" class="inline-link">Go Home</a> </p> </section> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/footer", "client:component-export": "default" })} ` })}`;
}, "/home/user/errhythm.github.io/src/pages/404.astro", void 0);

const $$file = "/home/user/errhythm.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
