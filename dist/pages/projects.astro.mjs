import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_KmD42DKJ.mjs';
import { g as getCollection } from '../chunks/_astro_content_BrlYtSmm.mjs';
import { $ as $$BaseLayout, N as Nav, S as Social, E as Email, F as Footer } from '../chunks/nav_ew7bo7No.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Projects Archive";
  const description = "A collection of projects I've worked on.";
  const projects = await getCollection("projects", ({ data }) => {
    return data.showInProjects !== false;
  });
  projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-aid3sr62": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", Nav, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/nav", "client:component-export": "default", "data-astro-cid-aid3sr62": true })} ${renderComponent($$result2, "Social", Social, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/social", "client:component-export": "default", "data-astro-cid-aid3sr62": true })} ${renderComponent($$result2, "Email", Email, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/email", "client:component-export": "default", "data-astro-cid-aid3sr62": true })} ${maybeRenderHead()}<main data-astro-cid-aid3sr62> <header style="max-width: 900px; margin-bottom: 60px;" data-astro-cid-aid3sr62> <h1 class="big-heading" data-astro-cid-aid3sr62>Projects Archive</h1> <p class="subtitle" style="color: var(--slate); margin: 10px 0 0; font-size: var(--fz-lg);" data-astro-cid-aid3sr62>
A big list of things I've worked on
</p> </header> <table style="width: 100%; border-collapse: collapse; font-size: var(--fz-md);" data-astro-cid-aid3sr62> <thead data-astro-cid-aid3sr62> <tr style="border-bottom: 1px solid var(--lightest-navy);" data-astro-cid-aid3sr62> <th style="padding: 10px; text-align: left; color: var(--lightest-slate);" data-astro-cid-aid3sr62>Year</th> <th style="padding: 10px; text-align: left; color: var(--lightest-slate);" data-astro-cid-aid3sr62>Title</th> <th style="padding: 10px; text-align: left; color: var(--lightest-slate); display: none;" class="hide-on-mobile" data-astro-cid-aid3sr62>Company</th> <th style="padding: 10px; text-align: left; color: var(--lightest-slate); display: none;" class="hide-on-mobile" data-astro-cid-aid3sr62>Built with</th> <th style="padding: 10px; text-align: left; color: var(--lightest-slate);" data-astro-cid-aid3sr62>Links</th> </tr> </thead> <tbody data-astro-cid-aid3sr62> ${projects.map((project) => {
    const year = project.data.date.getFullYear();
    const slug = project.slug || project.data.title.toLowerCase().replace(/\s+/g, "-");
    return renderTemplate`<tr style="border-bottom: 1px solid var(--lightest-navy); transition: var(--transition);" data-astro-cid-aid3sr62> <td style="padding: 15px 10px; color: var(--green); font-family: var(--font-mono); font-size: var(--fz-sm);" data-astro-cid-aid3sr62> ${year} </td> <td style="padding: 15px 10px;" data-astro-cid-aid3sr62> <a${addAttribute(`/projects/${slug}`, "href")} style="color: var(--lightest-slate); font-weight: 600;" data-astro-cid-aid3sr62> ${project.data.title} </a> </td> <td style="padding: 15px 10px; color: var(--light-slate); font-size: var(--fz-sm); display: none;" class="hide-on-mobile" data-astro-cid-aid3sr62> ${project.data.company || "\u2014"} </td> <td style="padding: 15px 10px; display: none;" class="hide-on-mobile" data-astro-cid-aid3sr62> <div style="display: flex; flex-wrap: wrap; gap: 5px;" data-astro-cid-aid3sr62> ${project.data.tech?.slice(0, 3).map((item) => renderTemplate`<span style="color: var(--slate); font-family: var(--font-mono); font-size: var(--fz-xs);" data-astro-cid-aid3sr62> ${item} </span>`)} </div> </td> <td style="padding: 15px 10px;" data-astro-cid-aid3sr62> <div style="display: flex; gap: 15px; align-items: center;" data-astro-cid-aid3sr62> ${project.data.github && renderTemplate`<a${addAttribute(project.data.github, "href")} target="_blank" rel="noopener noreferrer" style="color: var(--light-slate);" data-astro-cid-aid3sr62>
GitHub
</a>`} ${project.data.external && renderTemplate`<a${addAttribute(project.data.external, "href")} target="_blank" rel="noopener noreferrer" style="color: var(--light-slate);" data-astro-cid-aid3sr62>
External
</a>`} </div> </td> </tr>`;
  })} </tbody> </table> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/footer", "client:component-export": "default", "data-astro-cid-aid3sr62": true })}  ` })}`;
}, "/home/user/errhythm.github.io/src/pages/projects.astro", void 0);

const $$file = "/home/user/errhythm.github.io/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
