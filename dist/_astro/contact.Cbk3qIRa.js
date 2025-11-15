import{d as n,j as e}from"./styled-components.browser.esm.BpgcTWLY.js";import{r as o}from"./index.Zy2U5G9J.js";import{a,e as i}from"./config.Cy-9V-kn.js";import{s}from"./sr.CL7AsJzO.js";import{u as l}from"./usePrefersReducedMotion.DntroRNe.js";const m=n.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({theme:t})=>t.mixins.bigButton};
    margin-top: 50px;
  }
`,d=()=>{const t=o.useRef(null),r=l();return o.useEffect(()=>{r||s.reveal(t.current,a())},[]),e.jsxs(m,{id:"contact",ref:t,children:[e.jsx("h2",{className:"numbered-heading overline",children:"What’s Next?"}),e.jsx("h2",{className:"title",children:"Get In Touch"}),e.jsx("p",{children:"Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"}),e.jsx("a",{className:"email-link",href:`mailto:${i}`,children:"Say Hello"})]})};export{d as default};
