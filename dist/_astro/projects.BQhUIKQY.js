import{d as k,j as e}from"./styled-components.browser.esm.BpgcTWLY.js";import{r as o}from"./index.Zy2U5G9J.js";import{a as m}from"./config.Cy-9V-kn.js";import{s as p}from"./sr.CL7AsJzO.js";import{I as x}from"./filled-star.CVRkkLQo.js";import{u as L}from"./usePrefersReducedMotion.DntroRNe.js";import{l as M}from"./lodash.C3lvw97o.js";import{T as P}from"./TransitionGroup.owasSN1x.js";import{C as R}from"./CSSTransition.D_uahqM0.js";import"./index.8PeT5o26.js";const{kebabCase:C}=M,E=k.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({theme:t})=>t.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({theme:t})=>t.mixins.button};
    margin: 80px auto 0;
  }
`,y=k.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({theme:t})=>t.mixins.boxShadow};
    ${({theme:t})=>t.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({theme:t})=>t.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({theme:t})=>t.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({theme:t})=>t.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`,Q=()=>{const t=useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false }, title: { ne: "Dummy" } }
        }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `),[l,S]=o.useState(!1),d=o.useRef(null),f=o.useRef(null),h=o.useRef([]),u=L();o.useEffect(()=>{u||(p.reveal(d.current,m()),p.reveal(f.current,m()),h.current.forEach((i,r)=>p.reveal(i,m(r*100))))},[]);const s=6,j=t.projects.edges.filter(({node:i})=>i),N=j.slice(0,s),n=l?j:N,g=i=>{const{frontmatter:r,html:c}=i,{github:v,external:b,title:a,tech:w}=r,z=`/projects/${C(a)}`;return e.jsxs("div",{className:"project-inner",children:[e.jsxs("header",{children:[e.jsxs("div",{className:"project-top",children:[e.jsx("div",{className:"folder",children:e.jsx(x,{name:"Folder"})}),e.jsxs("div",{className:"project-links",children:[v&&e.jsx("a",{href:v,"aria-label":"GitHub Link",target:"_blank",rel:"noreferrer",children:e.jsx(x,{name:"GitHub"})}),b&&e.jsx("a",{href:b,"aria-label":"External Link",className:"external",target:"_blank",rel:"noreferrer",children:e.jsx(x,{name:"External"})})]})]}),e.jsx("h3",{className:"project-title",children:e.jsx("a",{href:z,children:a.length>100?`${a.substring(0,100)}...`:a})}),e.jsx("div",{className:"project-description",dangerouslySetInnerHTML:{__html:`${c.substring(0,160)}...`}})]}),e.jsx("footer",{children:w&&e.jsx("ul",{className:"project-tech-list",children:w.map(($,I)=>e.jsx("li",{children:$},I))})})]})};return e.jsxs(E,{children:[e.jsx("h2",{ref:d,children:"Other Noteworthy Projects"}),e.jsx("a",{className:"inline-link archive-link",to:"/projects",ref:f,children:"view the archive"}),e.jsx("ul",{className:"projects-grid",children:u?e.jsx(e.Fragment,{children:n&&n.map(({node:i},r)=>e.jsx(y,{children:g(i)},r))}):e.jsx(P,{component:null,children:n&&n.map(({node:i},r)=>e.jsx(R,{classNames:"fadeup",timeout:r>=s?(r-s)*300:300,exit:!1,children:e.jsx(y,{ref:c=>h.current[r]=c,style:{transitionDelay:`${r>=s?(r-s)*100:0}ms`},children:g(i)},r)},r))})}),e.jsxs("button",{className:"more-button",onClick:()=>S(!l),children:["Show ",l?"Less":"More"]})]})};export{Q as default};
