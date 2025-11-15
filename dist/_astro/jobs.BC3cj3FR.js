import{d as s,j as e}from"./styled-components.browser.esm.BpgcTWLY.js";import{r as o}from"./index.Zy2U5G9J.js";import{a as S}from"./config.Cy-9V-kn.js";import{K as h}from"./index.DDXquWCD.js";import{s as k}from"./sr.CL7AsJzO.js";import{u as R}from"./usePrefersReducedMotion.DntroRNe.js";import{C as T}from"./CSSTransition.D_uahqM0.js";import"./index.8PeT5o26.js";const $=s.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`,z=s.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`,C=s.button`
  ${({theme:a})=>a.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({isActive:a})=>a?"var(--green)":"var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({theme:a})=>a.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`,D=s.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({activeTabId:a})=>a} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({activeTabId:a})=>a} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`,E=s.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`,N=s.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({theme:a})=>a.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`,J=()=>{const l=useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `).jobs.edges,[n,f]=o.useState(0),[i,m]=o.useState(null),d=o.useRef([]),p=o.useRef(null),g=R();o.useEffect(()=>{g||k.reveal(p.current,S())},[]);const b=()=>{if(d.current[i]){d.current[i].focus();return}i>=d.current.length&&m(0),i<0&&m(d.current.length-1)};o.useEffect(()=>b(),[i]);const u=r=>{switch(r.key){case h.ARROW_UP:{r.preventDefault(),m(i-1);break}case h.ARROW_DOWN:{r.preventDefault(),m(i+1);break}}};return e.jsxs($,{id:"jobs",ref:p,children:[e.jsx("h2",{className:"numbered-heading",children:"Where I’ve Worked"}),e.jsxs("div",{className:"inner",children:[e.jsxs(z,{role:"tablist","aria-label":"Job tabs",onKeyDown:r=>u(r),children:[l&&l.map(({node:r},t)=>{const{company:c}=r.frontmatter;return e.jsx(C,{isActive:n===t,onClick:()=>f(t),ref:x=>d.current[t]=x,id:`tab-${t}`,role:"tab",tabIndex:n===t?"0":"-1","aria-selected":n===t,"aria-controls":`panel-${t}`,children:e.jsx("span",{children:c})},t)}),e.jsx(D,{activeTabId:n})]}),e.jsx(E,{children:l&&l.map(({node:r},t)=>{const{frontmatter:c,html:x}=r,{title:v,url:w,company:y,range:j}=c;return e.jsx(T,{in:n===t,timeout:250,classNames:"fade",children:e.jsxs(N,{id:`panel-${t}`,role:"tabpanel",tabIndex:n===t?"0":"-1","aria-labelledby":`tab-${t}`,"aria-hidden":n!==t,hidden:n!==t,children:[e.jsxs("h3",{children:[e.jsx("span",{children:v}),e.jsxs("span",{className:"company",children:[" @ ",e.jsx("a",{href:w,className:"inline-link",children:y})]})]}),e.jsx("p",{className:"range",children:j}),e.jsx("div",{dangerouslySetInnerHTML:{__html:x}})]})},t)})})]})]})};export{J as default};
