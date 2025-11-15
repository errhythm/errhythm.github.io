import{d as i,j as e}from"./styled-components.browser.esm.BpgcTWLY.js";import{r as t}from"./index.Zy2U5G9J.js";import{a as l}from"./config.Cy-9V-kn.js";import{s as d}from"./sr.CL7AsJzO.js";import{u as c}from"./usePrefersReducedMotion.DntroRNe.js";const m=i.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`,p=i.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`,h=i.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({theme:r})=>r.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`,v=()=>{const r=t.useRef(null),n=c();t.useEffect(()=>{n||d.reveal(r.current,l())},[]);const a=["React.js","Express.js","Astro.js","Vanilla JavaScript","PHP","Laravel","WordPress"];return e.jsxs(m,{id:"about",ref:r,children:[e.jsx("h2",{className:"numbered-heading",children:"About Me"}),e.jsxs("div",{className:"inner",children:[e.jsxs(p,{children:[e.jsxs("div",{children:[e.jsx("p",{children:"Hello! My name is Ehsanur Rahman Rhythm, and I enjoy creating things that live on the internet. My journey in web development started during my time at Brac University, where I developed a passion for building user-friendly and dynamic web applications."}),e.jsxs("p",{children:["Fast-forward to today, I have over four years of experience working with various technologies, including PHP, Laravel, and WordPress. I’ve had the privilege of working on a range of projects, from developing a digital database management system for the"," ",e.jsx("a",{href:"https://mfacademy.gov.bd/",target:"_blank",rel:"noreferrer",children:"Marine Fisheries Academy"})," ","to creating high-traffic educational websites and news portals."]}),e.jsxs("p",{children:["Currently, I'm working at"," ",e.jsx("a",{href:"https://ifreturns.com/",target:"_blank",rel:"noreferrer",style:{color:"#54b58f"},children:"iF returns"})," ","🇪🇸 and"," ",e.jsx("a",{href:"https://deliveryhobe.com/",target:"_blank",rel:"noreferrer",style:{color:"#ffe23d"},children:"DeliveryHobe"})," ","🇧🇩 . My main goal is to build accessible, human-centered products that meet and exceed user expectations."]}),e.jsxs("p",{children:["In addition to my work in web development, I have also published research in the fields of natural language processing (NLP) and data science. I worked as a Research Assistant at"," ",e.jsx("a",{href:"https://bracu.ac.bd/",target:"_blank",rel:"noreferrer",style:{color:"#253494"},children:"Brac University"}),", researching machine learning-based accessibility systems for visually impaired individuals on campus. These ",e.jsx("a",{href:"#publications",children:"publications"})," reflect my commitment to advancing technology and contributing to the academic community."]}),e.jsx("p",{children:"Here are a few technologies I've been working with recently:"})]}),e.jsx("ul",{className:"skills-list",children:a&&a.map((s,o)=>e.jsx("li",{children:s},o))})]}),e.jsx(h,{children:e.jsx("div",{className:"wrapper",children:e.jsx(StaticImage,{className:"img",src:"https://cdn.errhythm.me/errhythm_ghibli.png",width:500,quality:95,formats:["AUTO","WEBP","AVIF"],alt:"Headshot"})})})]})]})};export{v as default};
