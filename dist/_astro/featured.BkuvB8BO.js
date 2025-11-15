import{d as j,j as e}from"./styled-components.browser.esm.BpgcTWLY.js";import{r as m}from"./index.Zy2U5G9J.js";import{l as S}from"./lodash.C3lvw97o.js";import{s as f}from"./sr.CL7AsJzO.js";import{a as u}from"./config.Cy-9V-kn.js";import{I as v}from"./filled-star.CVRkkLQo.js";import{u as N}from"./usePrefersReducedMotion.DntroRNe.js";const{kebabCase:$}=S,C=j.ul`
  ${({theme:t})=>t.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`,E=j.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({theme:t})=>t.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    max-width: 90%;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(20px, min(5vw, 28px), 28px);
    line-height: 1.2;
    word-wrap: break-word;
    position: relative;
    z-index: 10;
    max-width: 100%;

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);
      font-size: clamp(18px, min(4vw, 24px), 24px);

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
  }

  .project-description {
    ${({theme:t})=>t.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({theme:t})=>t.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    align-items: center;
    gap: 20px;

    li {
      margin: 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;
      gap: 10px;

      li {
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({theme:t})=>t.mixins.flexCenter};
      padding: 10px;

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

    .cta {
      ${({theme:t})=>t.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({theme:t})=>t.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`,A=()=>{const x=useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { featured: { eq: true }, title: { ne: "Dummy" } }
        }
        sort: [{ frontmatter: { featuredSort: ASC } }, { frontmatter: { date: ASC } }]
      ) {
        edges {
          node {
            frontmatter {
              title
              image
              tech
              github
              external
              cta
              featuredMessage
              featuredCover
            }
            html
          }
        }
      }
    }
  `).featured.edges.filter(({node:i})=>i),p=m.useRef(null),c=m.useRef([]),w=N();return m.useEffect(()=>{w||(f.reveal(p.current,u()),c.current.forEach((i,r)=>f.reveal(i,u(r*100))))},[]),e.jsxs("section",{id:"projects",children:[e.jsx("h2",{className:"numbered-heading",ref:p,children:"Some Things I've Built"}),e.jsx(C,{children:x&&x.map(({node:i},r)=>{const{frontmatter:b,html:h}=i,{external:a,title:o,tech:g,github:n,cta:l,featuredMessage:y,featuredCover:s}=b,k=s?.startsWith("http");return e.jsxs(E,{ref:d=>c.current[r]=d,children:[e.jsx("div",{className:"project-content",children:e.jsxs("div",{children:[e.jsx("p",{className:"project-overline",children:"Featured Project"}),e.jsx("h3",{className:"project-title",children:e.jsx("a",{href:`/projects/${$(o)}`,children:o})}),e.jsx("div",{className:"project-description",dangerouslySetInnerHTML:{__html:y||h&&`${h.split("</p>")[0]}</p>`}}),e.jsxs("div",{className:"project-tech-list",children:[e.jsx("span",{style:{color:"var(--light-slate)",fontFamily:"var(--font-mono)",fontSize:"var(--fz-xs)"},children:"Tech Stack:"}),g.length&&g.map((d,z)=>e.jsx("li",{children:d},z))]}),e.jsxs("div",{className:"project-links",children:[l&&e.jsx("a",{href:l,"aria-label":"Course Link",className:"cta",children:"Learn More"}),n&&e.jsx("a",{href:n,"aria-label":"GitHub Link",children:e.jsx(v,{name:"GitHub"})}),a&&!l&&e.jsx("a",{href:a,"aria-label":"External Link",className:"external",children:e.jsx(v,{name:"External"})})]})]})}),e.jsx("div",{className:"project-image",children:e.jsx("a",{href:a||n||"#",children:k?e.jsx("img",{src:s,alt:o,className:"img"}):s&&e.jsx(GatsbyImage,{image:getImage(s),alt:o,className:"img"})})})]},r)})})]})};export{A as default};
