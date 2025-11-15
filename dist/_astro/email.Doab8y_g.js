import{j as t,d as r,l as $}from"./styled-components.browser.esm.BThGyL2P.js";import{r as l}from"./index.Zy2U5G9J.js";import{P as v,I as M,b as z}from"./filled-star.NNGVvYJa.js";import{n as g,s as L,e as T}from"./config.Cy-9V-kn.js";import"./loader.JsRhMvrU.js";import{K as k,l as S}from"./index.DDXquWCD.js";import{u as R}from"./usePrefersReducedMotion.DntroRNe.js";import{T as y}from"./TransitionGroup.owasSN1x.js";import{C as j}from"./CSSTransition.D_uahqM0.js";import"./footer.15Uk76sv.js";import"./hero.B7MNUBum.js";import"./about.BCZA0PRe.js";import"./jobs.BfTdIhQ6.js";import"./education.BqoPxmPi.js";import"./featured.CMtaoP4d.js";import"./projects.BJyvVN3H.js";import"./publications.Bsemktfn.js";import"./contact.PV2SGBv1.js";const Y=(e,n)=>{l.useEffect(()=>{const o=a=>{!e.current||e.current.contains(a.target)||n(a)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,n])},B="up",F="down",I=({initialDirection:e,thresholdPixels:n,off:o}={})=>{const[a,p]=l.useState(e);return l.useEffect(()=>{const s=n||0;let d=window.pageYOffset,c=!1;const x=()=>{const m=window.pageYOffset;if(Math.abs(m-d)<s){c=!1;return}p(m>d?F:B),d=m>0?m:0,c=!1},u=()=>{c||(window.requestAnimationFrame(x),c=!0)};return o?p(e):window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[e,n,o]),a},O=()=>t.jsxs("svg",{id:"hex",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 84 96",children:[t.jsx("title",{children:"Hexagon"}),t.jsx("g",{transform:"translate(-8.000000, -2.000000)",children:t.jsx("g",{transform:"translate(11.000000, 5.000000)",children:t.jsx("polygon",{stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",points:"39 0 0 22 0 67 39 90 78 68 78 23",fill:"currentColor"})})})]}),A=r.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,_=r.button`
  display: none;

  @media (max-width: 768px) {
    ${({theme:e})=>e.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${e=>e.menuOpen?"0.12s":"0s"};
    transform: rotate(${e=>e.menuOpen?"225deg":"0deg"});
    transition-timing-function: cubic-bezier(
      ${e=>e.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${e=>e.menuOpen?"100%":"120%"};
      top: ${e=>e.menuOpen?"0":"-10px"};
      opacity: ${e=>e.menuOpen?0:1};
      transition: ${({menuOpen:e})=>e?"var(--ham-before-active)":"var(--ham-before)"};
    }
    &:after {
      width: ${e=>e.menuOpen?"100%":"80%"};
      bottom: ${e=>e.menuOpen?"0":"-10px"};
      transform: rotate(${e=>e.menuOpen?"-90deg":"0"});
      transition: ${({menuOpen:e})=>e?"var(--ham-after-active)":"var(--ham-after)"};
    }
  }
`,P=r.aside`
  display: none;

  @media (max-width: 768px) {
    ${({theme:e})=>e.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${e=>e.menuOpen?0:100}vw);
    visibility: ${e=>e.menuOpen?"visible":"hidden"};
    transition: var(--transition);
  }

  nav {
    ${({theme:e})=>e.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${({theme:e})=>e.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({theme:e})=>e.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`,N=()=>{const[e,n]=l.useState(!1),o=()=>n(!e),a=l.useRef(null),p=l.useRef(null);let s,d,c;const x=()=>{s=[a.current,...Array.from(p.current.querySelectorAll("a"))],d=s[0],c=s[s.length-1]},u=i=>{document.activeElement===d&&(i.preventDefault(),c.focus())},m=i=>{document.activeElement===c&&(i.preventDefault(),d.focus())},b=i=>{switch(i.key){case k.ESCAPE:case k.ESCAPE_IE11:{n(!1);break}case k.TAB:{if(s&&s.length===1){i.preventDefault();break}i.shiftKey?u(i):m(i);break}}},w=i=>{i.currentTarget.innerWidth>768&&n(!1)};l.useEffect(()=>(document.addEventListener("keydown",b),window.addEventListener("resize",w),x(),()=>{document.removeEventListener("keydown",b),window.removeEventListener("resize",w)}),[]);const h=l.useRef();return Y(h,()=>n(!1)),t.jsxs(A,{children:[t.jsx("body",{className:e?"blur":""}),t.jsxs("div",{ref:h,children:[t.jsx(_,{onClick:o,menuOpen:e,ref:a,"aria-label":"Menu",children:t.jsx("div",{className:"ham-box",children:t.jsx("div",{className:"ham-box-inner"})})}),t.jsx(P,{menuOpen:e,"aria-hidden":!e,tabIndex:e?1:-1,children:t.jsxs("nav",{ref:p,children:[g&&t.jsx("ol",{children:g.map(({url:i,name:f},D)=>t.jsx("li",{children:t.jsx("a",{href:i,onClick:()=>n(!1),children:f})},D))}),t.jsx("a",{href:"https://cdn.errhythm.me/resume.pdf",className:"resume-link",children:"Resume"})]})})]})]})},K=r.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${e=>e.orientation==="left"?"40px":"auto"};
  right: ${e=>e.orientation==="left"?"auto":"40px"};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${e=>e.orientation==="left"?"20px":"auto"};
    right: ${e=>e.orientation==="left"?"auto":"20px"};
  }

  @media (max-width: 768px) {
    display: none;
  }
`,E=({children:e,isHome:n,orientation:o})=>{const[a,p]=l.useState(!n),s=R();return l.useEffect(()=>{if(!n||s)return;const d=setTimeout(()=>p(!0),S);return()=>clearTimeout(d)},[]),t.jsx(K,{orientation:o,children:s?t.jsx(t.Fragment,{children:e}):t.jsx(y,{component:null,children:a&&t.jsx(j,{classNames:n?"fade":"",timeout:n?S:0,children:e})})})};E.propTypes={children:v.node.isRequired,isHome:v.bool,orientation:v.string};const W=r.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`,q=({isHome:e})=>t.jsx(E,{isHome:e,orientation:"left",children:t.jsx(W,{children:L&&L.map(({url:n,name:o},a)=>t.jsx("li",{children:t.jsx("a",{href:n,"aria-label":o,target:"_blank",rel:"noreferrer",children:t.jsx(M,{name:o})})},a))})});q.propTypes={isHome:v.bool};const G=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`,U=({isHome:e})=>t.jsx(E,{isHome:e,orientation:"right",children:t.jsx(G,{children:t.jsx("a",{href:`mailto:${T}`,children:T})})});U.propTypes={isHome:v.bool};r.div`
  background-color: var(--light-navy);
  border-radius: 10px;
  padding: 25px;
  margin-top: 20px;
  margin-bottom: 50px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: 'Testimonial';
    background: var(--green);
    color: var(--navy);
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 0 0 3px 3px;
    position: absolute;
    opacity: 0.5;
    top: 0;
    right: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
`;r.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;r.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;r.div`
  flex-grow: 1;
`;r.h4`
  margin: 0;
  color: var(--lightest-slate);
`;r.p`
  margin: 0;
  color: var(--slate);
  font-size: var(--fz-sm);
`;r.div`
  display: flex;
  align-items: center;
  height: 20px;
`;r.span`
  color: ${e=>e.filled?"var(--green)":"var(--slate)"};
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;r.p`
  color: var(--light-slate);
  font-style: italic;
`;const X=r.header`
  ${({theme:e})=>e.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${e=>e.scrollDirection==="up"&&!e.scrolledToTop&&$`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${e=>e.scrollDirection==="down"&&!e.scrolledToTop&&$`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`,J=r.nav`
  ${({theme:e})=>e.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({theme:e})=>e.mixins.flexCenter};

    a {
      color: var(--green);
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      .hex-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
          polygon {
            fill: var(--navy);
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
        .hex-container {
          transform: translate(4px, 3px);
        }
      }
    }
  }
`,C=r.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({theme:e})=>e.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({theme:e})=>e.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`,Q=({isHome:e})=>{const[n,o]=l.useState(!e),a=I("down"),[p,s]=l.useState(!0),d=R(),c=()=>{s(window.pageYOffset<50)};l.useEffect(()=>{if(d)return;const h=setTimeout(()=>{o(!0)},100);return window.addEventListener("scroll",c),()=>{clearTimeout(h),window.removeEventListener("scroll",c)}},[]);const x=e?S:0,u=e?"fade":"",m=e?"fadedown":"",b=t.jsx("div",{className:"logo",tabIndex:"-1",children:e?t.jsxs("a",{href:"/","aria-label":"home",children:[t.jsx("div",{className:"hex-container",children:t.jsx(O,{})}),t.jsx("div",{className:"logo-container",children:t.jsx(z,{})})]}):t.jsxs("a",{href:"/","aria-label":"home",children:[t.jsx("div",{className:"hex-container",children:t.jsx(O,{})}),t.jsx("div",{className:"logo-container",children:t.jsx(z,{})})]})}),w=t.jsx("a",{className:"resume-button",href:"https://cdn.errhythm.me/resume.pdf",target:"_blank",rel:"noopener noreferrer",children:"Resume"});return t.jsx(X,{scrollDirection:a,scrolledToTop:p,children:t.jsx(J,{children:d?t.jsxs(t.Fragment,{children:[b,t.jsxs(C,{children:[t.jsx("ol",{children:g&&g.map(({url:h,name:i},f)=>t.jsx("li",{children:t.jsx("a",{href:h,children:i})},f))}),t.jsx("div",{children:w})]}),t.jsx(N,{})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{component:null,children:n&&t.jsx(j,{classNames:u,timeout:x,children:t.jsx(t.Fragment,{children:b})})}),t.jsxs(C,{children:[t.jsx("ol",{children:t.jsx(y,{component:null,children:n&&g&&g.map(({url:h,name:i},f)=>t.jsx(j,{classNames:m,timeout:x,children:t.jsx("li",{style:{transitionDelay:`${e?f*100:0}ms`},children:t.jsx("a",{href:h,children:i})},f)},f))})}),t.jsx(y,{component:null,children:n&&t.jsx(j,{classNames:m,timeout:x,children:t.jsx("div",{style:{transitionDelay:`${e?g.length*100:0}ms`},children:w})})})]}),t.jsx(y,{component:null,children:n&&t.jsx(j,{classNames:u,timeout:x,children:t.jsx(N,{})})})]})})})};Q.propTypes={isHome:v.bool};export{U as E,Q as N,q as S};
