import{d,j as e}from"./styled-components.browser.esm.BThGyL2P.js";import{r as s}from"./index.Zy2U5G9J.js";import{n as p,l as x}from"./index.DDXquWCD.js";import{u as f}from"./usePrefersReducedMotion.DntroRNe.js";import{T as u}from"./TransitionGroup.owasSN1x.js";import{C as g}from"./CSSTransition.D_uahqM0.js";import"./index.8PeT5o26.js";const v=d.section`
  ${({theme:t})=>t.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
    font-size: clamp(30px, 6vw, 60px);
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({theme:t})=>t.mixins.bigButton};
    margin-top: 50px;
  }
`,S=()=>{const[t,o]=s.useState(!1),n=f();s.useEffect(()=>{if(n)return;const r=setTimeout(()=>o(!0),p);return()=>clearTimeout(r)},[]);const m=e.jsx("h1",{children:"Hi, my name is"}),l=e.jsx("h2",{className:"big-heading",children:"Ehsanur Rahman Rhythm."}),c=e.jsx("h3",{className:"big-heading",children:"I build things for the web."}),h=e.jsx(e.Fragment,{children:e.jsxs("p",{children:["I'm a software engineer specializing in startup development and creating dynamic, user-friendly web applications. Currently, I'm enhancing the returns management experience at"," ",e.jsx("a",{href:"https://ifreturns.com/",target:"_blank",rel:"noreferrer",style:{color:"#54b58f"},children:"iF returns"})," ","while revolutionizing emergency delivery systems at"," ",e.jsx("a",{href:"https://deliveryhobe.com/",target:"_blank",rel:"noreferrer",style:{color:"#ffe23d"},children:"DeliveryHobe"}),"."]})}),a=[m,l,c,h,e.jsx("a",{className:"email-link",href:"/#projects",children:"Check out my projects!"})];return e.jsx(v,{children:n?e.jsx(e.Fragment,{children:a.map((r,i)=>e.jsx("div",{children:r},i))}):e.jsx(u,{component:null,children:t&&a.map((r,i)=>e.jsx(g,{classNames:"fadeup",timeout:x,children:e.jsx("div",{style:{transitionDelay:`${i+1}00ms`},children:r})},i))})})};export{S as default};
