import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_KmD42DKJ.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BrlYtSmm.mjs';
import { $ as $$BaseLayout, N as Nav, S as Social, E as Email, F as Footer } from '../../chunks/nav_ew7bo7No.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://errhythm.me");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.slug || project.data.title.toLowerCase().replace(/\s+/g, "-") },
    props: { project }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  const { Content } = await project.render();
  const formattedDate = project.data.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": project.data.title, "description": `Project: ${project.data.title}`, "image": project.data.image || project.data.featuredCover, "data-astro-cid-ovxcmftc": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", Nav, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/nav", "client:component-export": "default", "data-astro-cid-ovxcmftc": true })} ${renderComponent($$result2, "Social", Social, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/social", "client:component-export": "default", "data-astro-cid-ovxcmftc": true })} ${renderComponent($$result2, "Email", Email, { "client:load": true, "isHome": false, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/email", "client:component-export": "default", "data-astro-cid-ovxcmftc": true })} ${maybeRenderHead()}<main data-astro-cid-ovxcmftc> <article data-astro-cid-ovxcmftc> <!-- Breadcrumb --> <nav style="margin-bottom: 30px;" data-astro-cid-ovxcmftc> <a href="/projects" style="color: var(--green); font-family: var(--font-mono); font-size: var(--fz-sm);" data-astro-cid-ovxcmftc>
← Back to Projects
</a> </nav> <!-- Header --> <header style="margin-bottom: 50px;" data-astro-cid-ovxcmftc> <h1 class="big-heading" style="margin-bottom: 20px;" data-astro-cid-ovxcmftc> ${project.data.title} </h1> ${project.data.company && renderTemplate`<p style="color: var(--green); font-family: var(--font-mono); font-size: var(--fz-lg); margin-bottom: 20px;" data-astro-cid-ovxcmftc> ${project.data.company} </p>`} <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap; margin-bottom: 20px;" data-astro-cid-ovxcmftc> <time style="color: var(--light-slate); font-family: var(--font-mono); font-size: var(--fz-sm);" data-astro-cid-ovxcmftc> ${formattedDate} </time> ${project.data.tech && project.data.tech.length > 0 && renderTemplate`<div style="display: flex; flex-wrap: wrap; gap: 8px;" data-astro-cid-ovxcmftc> ${project.data.tech.map((tech) => renderTemplate`<span style="color: var(--green); font-family: var(--font-mono); font-size: var(--fz-xs); padding: 5px 10px; background-color: var(--green-tint); border-radius: var(--border-radius);" data-astro-cid-ovxcmftc> ${tech} </span>`)} </div>`} </div> <!-- Project Links --> ${(project.data.github || project.data.external) && renderTemplate`<div style="display: flex; gap: 15px; margin-top: 20px;" data-astro-cid-ovxcmftc> ${project.data.github && renderTemplate`<a${addAttribute(project.data.github, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border: 1px solid var(--green); border-radius: var(--border-radius); color: var(--green); font-family: var(--font-mono); font-size: var(--fz-sm); text-decoration: none; transition: var(--transition);" data-astro-cid-ovxcmftc>
GitHub →
</a>`} ${project.data.external && renderTemplate`<a${addAttribute(project.data.external, "href")} target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; background-color: var(--green); border-radius: var(--border-radius); color: var(--navy); font-family: var(--font-mono); font-size: var(--fz-sm); text-decoration: none; font-weight: 600; transition: var(--transition);" data-astro-cid-ovxcmftc>
View Project →
</a>`} </div>`} </header> <!-- Featured Image --> ${(project.data.image || project.data.featuredCover) && renderTemplate`<div style="margin-bottom: 50px;" data-astro-cid-ovxcmftc> <img${addAttribute(project.data.image || project.data.featuredCover, "src")}${addAttribute(project.data.title, "alt")} style="width: 100%; height: auto; border-radius: var(--border-radius);" data-astro-cid-ovxcmftc> </div>`} <!-- Content --> <div class="project-content" style="max-width: 800px;" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-ovxcmftc": true })} </div> <!-- Testimonial --> ${project.data.testimonial && renderTemplate`<div style="margin-top: 60px; padding: 30px; background-color: var(--light-navy); border-left: 3px solid var(--green); border-radius: var(--border-radius);" data-astro-cid-ovxcmftc> <h3 style="color: var(--lightest-slate); margin-bottom: 20px;" data-astro-cid-ovxcmftc>Testimonial</h3> <div style="display: flex; gap: 15px; margin-bottom: 15px;" data-astro-cid-ovxcmftc> ${project.data.testimonial.image && renderTemplate`<img${addAttribute(project.data.testimonial.image, "src")}${addAttribute(project.data.testimonial.name, "alt")} style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;" data-astro-cid-ovxcmftc>`} <div data-astro-cid-ovxcmftc> <p style="color: var(--lightest-slate); font-weight: 600; margin-bottom: 5px;" data-astro-cid-ovxcmftc> ${project.data.testimonial.name} </p> <p style="color: var(--slate); font-size: var(--fz-sm);" data-astro-cid-ovxcmftc> ${project.data.testimonial.company} </p> ${project.data.testimonial.rating && renderTemplate`<div style="color: var(--green); margin-top: 5px;" data-astro-cid-ovxcmftc> ${"\u2605".repeat(project.data.testimonial.rating)}${"\u2606".repeat(5 - project.data.testimonial.rating)} </div>`} </div> </div> <p style="color: var(--slate); font-style: italic; line-height: 1.6;" data-astro-cid-ovxcmftc>
"${project.data.testimonial.content}"
</p> </div>`} </article> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/errhythm.github.io/src/components/footer", "client:component-export": "default", "data-astro-cid-ovxcmftc": true })}  ` })}`;
}, "/home/user/errhythm.github.io/src/pages/projects/[slug].astro", void 0);

const $$file = "/home/user/errhythm.github.io/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
