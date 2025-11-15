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
`,E=s.button`
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
`,C=s.div`
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
`,D=s.div`
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
`,L=()=>{const l=useStaticQuery(graphql`
    query {
      education: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/education/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              degree
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
  `).education.edges,[n,f]=o.useState(0),[r,c]=o.useState(null),d=o.useRef([]),p=o.useRef(null),g=R();o.useEffect(()=>{g||k.reveal(p.current,S())},[]);const u=()=>{if(d.current[r]){d.current[r].focus();return}r>=d.current.length&&c(0),r<0&&c(d.current.length-1)};o.useEffect(()=>u(),[r]);const b=i=>{switch(i.key){case h.ARROW_UP:{i.preventDefault(),c(r-1);break}case h.ARROW_DOWN:{i.preventDefault(),c(r+1);break}}};return e.jsxs($,{id:"education",ref:p,children:[e.jsx("h2",{className:"numbered-heading",children:"Where I’ve Studied"}),e.jsxs("div",{className:"inner",children:[e.jsxs(z,{role:"tablist","aria-label":"Job tabs",onKeyDown:i=>b(i),children:[l&&l.map(({node:i},t)=>{const{degree:m}=i.frontmatter;return e.jsx(E,{isActive:n===t,onClick:()=>f(t),ref:x=>d.current[t]=x,id:`tab-${t}`,role:"tab",tabIndex:n===t?"0":"-1","aria-selected":n===t,"aria-controls":`panel-${t}`,children:e.jsx("span",{children:m})},t)}),e.jsx(C,{activeTabId:n})]}),e.jsx(D,{children:l&&l.map(({node:i},t)=>{const{frontmatter:m,html:x}=i,{title:v,url:w,company:y,range:j}=m;return e.jsx(T,{in:n===t,timeout:250,classNames:"fade",children:e.jsxs(N,{id:`panel-${t}`,role:"tabpanel",tabIndex:n===t?"0":"-1","aria-labelledby":`tab-${t}`,"aria-hidden":n!==t,hidden:n!==t,children:[e.jsxs("h3",{children:[e.jsx("span",{children:v}),e.jsx("p",{className:"company",children:e.jsx("a",{href:w,className:"inline-link",children:y})})]}),e.jsx("p",{className:"range",children:j}),e.jsx("div",{dangerouslySetInnerHTML:{__html:x}})]})},t)})})]})]})};export{L as default};
