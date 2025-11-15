import{d as i,j as e}from"./styled-components.browser.esm.BThGyL2P.js";import"./index.Zy2U5G9J.js";import{I as l}from"./filled-star.NNGVvYJa.js";import{s as a}from"./config.Cy-9V-kn.js";const h=i.footer`
  ${({theme:t})=>t.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`,d=i.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({theme:t})=>t.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`,p=i.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px 0px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`,x=i.a`
  text-decoration: none;
  position: relative;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: '⏳';
    display: none;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 9999;
    font-size: 24px;
    width: 24px;
    height: 24px;
    animation: clockRotate 2s linear infinite;
  }

  @keyframes clockRotate {
    0% {
      transform: translateX(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) rotate(360deg);
    }
  }

  &:hover::before {
    display: block;
  }
`,y=()=>{const r=new Date().getFullYear();return e.jsxs(h,{children:[e.jsx(d,{children:e.jsx("ul",{children:a&&a.map(({name:n,url:o},s)=>e.jsx("li",{children:e.jsx("a",{href:o,"aria-label":n,children:e.jsx(l,{name:n})})},s))})}),e.jsx(p,{tabindex:"-1",children:e.jsxs("div",{children:["© ",r," Ehsanur Rahman Rhythm. All rights reserved. Designed by ","",e.jsx("a",{href:"https://github.com/bchiang7",children:"Brittany Chiang"}),", enhanced by ","",e.jsx("a",{href:"https://github.com/errhythm",children:"me"}),". ",e.jsx("br",{}),e.jsx(x,{href:"https://timecapsule.errhythm.me/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8em"},children:"Visit my old website!"})]})})]})};export{y as default};
