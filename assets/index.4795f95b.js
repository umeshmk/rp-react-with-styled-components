import{j as w,s as r,C as m,r as g,I as W,L as j,G as _,F as z,a as F,b as D,c as E,d as O,R as A,e as h,B as T,S as M,f as y,g as N,W as V,h as q,i as H}from"./vendor.65bf52f0.js";const Y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}};Y();const K="modulepreload",G={},Q="/rp-react-with-styled-components/",C=function(o,a){return!a||a.length===0?o():Promise.all(a.map(l=>{if(l=`${Q}${l}`,l in G)return;G[l]=!0;const i=l.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${n}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":K,i||(s.as="script",s.crossOrigin=""),s.href=l,document.head.appendChild(s),i)return new Promise((c,P)=>{s.addEventListener("load",c),s.addEventListener("error",P)})})).then(()=>o())},t=w.exports.jsx,d=w.exports.jsxs,k=w.exports.Fragment,U=({className:e,children:o})=>t("section",{className:e,children:o}),S=r(U)`
  margin: 0 auto;

  // all media
  max-width: ${e=>typeof e.maxWidth===void 0&&"100vw"};
  max-width: ${e=>typeof e.maxWidth=="string"&&e.theme.maxWidth[e.maxWidth]};

  // media - xs
  ${e=>e.theme.media.xs} {
    max-width: ${e=>typeof e.maxWidth=="object"&&e.maxWidth.xs?e.theme.maxWidth[e.maxWidth.xs]:void 0};
  }

  // media - md
  ${e=>e.theme.media.md} {
    max-width: ${e=>typeof e.maxWidth=="object"&&e.maxWidth.md?e.theme.maxWidth[e.maxWidth.md]:void 0};
  }

  // media - lg
  ${e=>e.theme.media.lg} {
    max-width: ${e=>typeof e.maxWidth=="object"&&e.maxWidth.lg?e.theme.maxWidth[e.maxWidth.lg]:void 0};
  }
`,x=e=>m`
    ${e.alignContent&&`align-content: ${e.alignContent};`}
    ${e.alignItems&&`align-items: ${e.alignItems};`}
    ${e.flexDirection&&`flex-direction: ${e.flexDirection};`}
    ${e.justifyContent&&`justify-content: ${e.justifyContent};`}
    ${e.wrap&&`wrap: ${e.wrap};`}
  `,J=({className:e,children:o})=>t("div",{className:e,children:o}),f=r(J)`
  display: flex;

  /* all media */
  ${e=>x({flexDirection:typeof e.direction=="string"?e.direction:void 0,wrap:typeof e.wrap=="string"?e.wrap:void 0,justifyContent:typeof e.justifyContent=="string"?e.justifyContent:void 0,alignContent:typeof e.alignContent=="string"?e.alignContent:void 0,alignItems:typeof e.alignItems=="string"?e.alignItems:void 0})}

  // media - xs
  ${e=>e.theme.media.xs} {
    ${e=>x({flexDirection:typeof e.direction=="object"?e.direction.xs:void 0,wrap:typeof e.wrap=="object"?e.wrap.xs:void 0,justifyContent:typeof e.justifyContent=="object"?e.justifyContent.xs:void 0,alignContent:typeof e.alignContent=="object"?e.alignContent.xs:void 0,alignItems:typeof e.alignItems=="object"?e.alignItems.xs:void 0})}
  }
  // media - md
  ${e=>e.theme.media.md} {
    ${e=>x({flexDirection:typeof e.direction=="object"?e.direction.md:void 0,wrap:typeof e.wrap=="object"?e.wrap.md:void 0,justifyContent:typeof e.justifyContent=="object"?e.justifyContent.md:void 0,alignContent:typeof e.alignContent=="object"?e.alignContent.md:void 0,alignItems:typeof e.alignItems=="object"?e.alignItems.md:void 0})}
  }

  // media - lg
  ${e=>e.theme.media.lg} {
    ${e=>x({flexDirection:typeof e.direction=="object"?e.direction.lg:void 0,wrap:typeof e.wrap=="object"?e.wrap.lg:void 0,justifyContent:typeof e.justifyContent=="object"?e.justifyContent.lg:void 0,alignContent:typeof e.alignContent=="object"?e.alignContent.lg:void 0,alignItems:typeof e.alignItems=="object"?e.alignItems.lg:void 0})}
  }
`,u=e=>m`
    ${e.order&&`order: ${e.order};`}
    ${e.flexGrow&&`flex-grow: ${e.flexGrow};`}
        ${e.flexBasis&&`flex-basis: ${e.flexBasis};`}
        ${e.flexShrink&&`flex-shrink: ${e.flexShrink};`}
        ${e.alignSelf&&`align-self: ${e.alignSelf};`}
  `,X=({className:e,children:o})=>t("div",{className:e,children:o}),ke=r(X)`
  /* all media */
  ${e=>u({order:typeof e.order=="string"?e.order:void 0,flexGrow:typeof e.flexGrow=="string"?e.flexGrow:void 0,flexBasis:typeof e.flexBasis=="string"?e.flexBasis:void 0,flexShrink:typeof e.flexShrink=="string"?e.flexShrink:void 0,alignSelf:typeof e.alignSelf=="string"?e.alignSelf:void 0})}

  ${e=>e.theme.media.xs} {
    ${e=>u({order:typeof e.order=="object"?e.order.xs:void 0,flexGrow:typeof e.flexGrow=="object"?e.flexGrow.xs:void 0,flexBasis:typeof e.flexBasis=="object"?e.flexBasis.xs:void 0,flexShrink:typeof e.flexShrink=="object"?e.flexShrink.xs:void 0,alignSelf:typeof e.alignSelf=="object"?e.alignSelf.xs:void 0})}
  }

  // media - md
  ${e=>e.theme.media.md} {
    ${e=>u({order:typeof e.order=="object"?e.order.md:void 0,flexGrow:typeof e.flexGrow=="object"?e.flexGrow.md:void 0,flexBasis:typeof e.flexBasis=="object"?e.flexBasis.md:void 0,flexShrink:typeof e.flexShrink=="object"?e.flexShrink.md:void 0,alignSelf:typeof e.alignSelf=="object"?e.alignSelf.md:void 0})}
  }

  // media - lg
  ${e=>e.theme.media.lg} {
    ${e=>u({order:typeof e.order=="object"?e.order.lg:void 0,flexGrow:typeof e.flexGrow=="object"?e.flexGrow.lg:void 0,flexBasis:typeof e.flexBasis=="object"?e.flexBasis.lg:void 0,flexShrink:typeof e.flexShrink=="object"?e.flexShrink.lg:void 0,alignSelf:typeof e.alignSelf=="object"?e.alignSelf.lg:void 0})}
  }
`,v=e=>m`
    ${e.cols&&`grid-template-columns: repeat(${e.cols}, 1fr);`}
    ${e.rows&&`grid-template-rows: repeat(${e.rows}, 1fr);`}
    ${e.gap&&`grid-gap: ${e.gap};`}
    ${e.rowGap&&`row-gap: ${e.rowGap};`}
    ${e.colGap&&`col-gap: ${e.colGap};`} 
    ${e.justifyContent&&`justify-content:${e.justifyContent};`}
    ${e.alignContent&&`align-content:${e.alignContent};`}
  `,Z=({className:e,children:o})=>t("div",{className:e,children:o}),$=r(Z)`
  display: grid;

  // all media
  ${e=>v({rows:typeof e.rows=="string"?e.rows:void 0,cols:typeof e.cols=="string"?e.cols:void 0,justifyContent:typeof e.justifyContent=="string"?e.justifyContent:void 0,alignContent:typeof e.alignContent=="string"?e.alignContent:void 0,gap:typeof e.gap=="string"?e.gap:void 0,colGap:typeof e.colGap=="string"?e.colGap:void 0,rowGap:typeof e.rowGap=="string"?e.rowGap:void 0})}

  // media - xs
  ${e=>e.theme.media.xs} {
    ${e=>v({rows:typeof e.rows=="object"?e.rows.xs:void 0,cols:typeof e.cols=="object"?e.cols.xs:void 0,justifyContent:typeof e.justifyContent=="object"?e.justifyContent.xs:void 0,alignContent:typeof e.alignContent=="object"?e.alignContent.xs:void 0,gap:typeof e.gap=="object"?e.gap.xs:void 0,colGap:typeof e.colGap=="object"?e.colGap.xs:void 0,rowGap:typeof e.rowGap=="object"?e.rowGap.xs:void 0})}
  }

  // media - md
  ${e=>e.theme.media.md} {
    ${e=>v({rows:typeof e.rows=="object"?e.rows.md:void 0,cols:typeof e.cols=="object"?e.cols.md:void 0,justifyContent:typeof e.justifyContent=="object"?e.justifyContent.md:void 0,alignContent:typeof e.alignContent=="object"?e.alignContent.md:void 0,gap:typeof e.gap=="object"?e.gap.md:void 0,colGap:typeof e.colGap=="object"?e.colGap.md:void 0,rowGap:typeof e.rowGap=="object"?e.rowGap.md:void 0})}
  }

  // media - lg
  ${e=>e.theme.media.lg} {
    ${e=>v({rows:typeof e.rows=="object"?e.rows.lg:void 0,cols:typeof e.cols=="object"?e.cols.lg:void 0,justifyContent:typeof e.justifyContent=="object"?e.justifyContent.lg:void 0,alignContent:typeof e.alignContent=="object"?e.alignContent.lg:void 0,gap:typeof e.gap=="object"?e.gap.lg:void 0,colGap:typeof e.colGap=="object"?e.colGap.lg:void 0,rowGap:typeof e.rowGap=="object"?e.rowGap.lg:void 0})}
  }
`,b=e=>m`
    ${e.gridCol&&`grid-column: ${e.gridCol};`}
    ${e.gridRow&&`grid-row: ${e.gridRow};`}
  `,ee=({className:e,children:o})=>t("div",{className:e,children:o}),I=r(ee)`
  // all media
  ${e=>b({gridCol:typeof e.gridCol=="string"?e.gridCol:void 0,gridRow:typeof e.gridRow=="string"?e.gridRow:void 0})}

  // media - xs
  ${e=>e.theme.media.xs} {
    ${e=>b({gridCol:typeof e.gridCol=="object"?e.gridCol.xs:void 0,gridRow:typeof e.gridRow=="object"?e.gridRow.xs:void 0})}
  }

  // media - md
  ${e=>e.theme.media.md} {
    ${e=>b({gridCol:typeof e.gridCol=="object"?e.gridCol.md:void 0,gridRow:typeof e.gridRow=="object"?e.gridRow.md:void 0})}
  }

  // media - lg
  ${e=>e.theme.media.lg} {
    ${e=>b({gridCol:typeof e.gridCol=="object"?e.gridCol.lg:void 0,gridRow:typeof e.gridRow=="object"?e.gridRow.lg:void 0})}
  }
`,te=({className:e,children:o,open:a,handleClose:l})=>{const[i,n]=g.exports.useState(a||!1),s=()=>{n(!1),l&&l()};return g.exports.useEffect(()=>{n(a)},[a]),i?d("div",{className:e,children:[t(W,{className:"close",size:"2.5rem",onClick:s}),o]}):null},oe=r(te)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.5s;
  .close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.5rem;
    cursor: pointer;
  }
`,Se=r.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
  &:active {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.35);
  }
`,p=e=>"/rp-react-with-styled-components/"+e,ie=m`
  padding: 1rem 1.5rem;
  position: absolute;
  width: 100%;
  background: transparent;
  z-index: 10;
  .logo {
    z-index: 200;
  }
  .modal {
    background-color: #071c2f;
    padding-top: 30vh;
    .close {
      color: #fff;
    }
  }
`,B=r(j)`
  color: #fff;
  font-size: 2rem;
  margin: 0;
  padding-left: 1rem;
  text-decoration: none;
`,R=r.img`
  height: 3rem;
`,ne=r(_)`
  cursor: pointer;
  color: #fff;

  ${e=>e.theme.media.md} {
    display: none;
  }
`,re=r.div`
  a {
    display: none;
    color: #fffa;
    margin-left: 3rem;
    font-size: 1.1rem;
    text-decoration: none;
    text-transform: capitalize;
    transition: color 0.1s;
    :hover {
      color: #fff;
    }

    ${e=>e.theme.media.md} {
      display: initial;
    }
  }
`,se=r.div`
  padding-bottom: 5rem;
  a {
    color: #fff;
    font-size: 1.6rem;
    text-decoration: none;
    text-transform: capitalize;
    transition: color 0.2s;
    :hover {
      color: #fffa;
    }
  }
`,ae=[{name:"Facebook",icon:z},{name:"Instagram",icon:F},{name:"YouTube",icon:D},{name:"Twitter",icon:E},{name:"LinkedIn",icon:O}],le=[{title:"Main",links:["Blog","FAQs","Support","About us"]},{title:"Product",links:["Login","Personal","Business","Team"]},{title:"Press",links:["Logos","Events","Stories","Office"]},{title:"Legal",links:["GDPR","Privacy Policy","Terms of Service","Disclaimer"]}],de=m`
  background-color: #071c2f;
  padding: 5rem 1rem;
  ${e=>e.theme.media.md} {
    padding: 5rem;
  }
`,ce=r(f)`
  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
  }
`,fe=r.ul`
  color: #999;
  font-size: 1.1rem;
  font-weight: 300;
  list-style: none;
  padding: 0;
  li {
    cursor: pointer;
    padding-bottom: 0.5rem;
    :hover {
      color: #eee;
    }
  }
`,me=r.address`
  color: #fff8;
  font-size: 1.2rem;
  padding-top: 1.2rem;
  text-align: center;
  ${e=>e.theme.media.md} {
    text-align: left;
  }
`,ge=r.div`
  padding-top: 2rem;
  text-align: center;
  svg {
    color: #fffa;
    cursor: pointer;
  }
  ${e=>e.theme.media.md} {
    text-align: left;
  }
`,he=r(({className:e})=>t("div",{className:e,children:t(S,{maxWidth:"md",children:d($,{cols:{xs:"1",md:"5"},gap:"5rem",children:[d(I,{gridCol:"1/span 1",children:[d(f,{alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},children:[t(R,{src:p("assets/logo.png"),alt:"logo"}),t(B,{to:"/",children:"Delta"})]}),d(me,{children:["69 Street, Delta Building, ",t("br",{}),"US Road, Los Angeles 123"]}),t($,{cols:"5",children:ae.map(({name:o,icon:a})=>t(ge,{children:t(a,{})},o))})]}),t(I,{gridCol:{md:"2/span 4"},children:t($,{cols:{xs:"2",md:"4"},gap:"2rem",children:le.map(o=>d(ce,{direction:"column",justifyContent:"space-between",children:[t("h2",{children:o.title}),t(fe,{children:o.links.map(a=>t("li",{children:a},a))})]},o.title))})})]})})}))`
  ${de}
`,L=[{to:"/",hash:"#about",text:"About",id:"about"},{to:"/pricing",hash:"",text:"Pricing",id:"pricing"},{to:"/signup",hash:"",text:"Contact",id:"contact"}],ye=r(({className:e})=>{const[o,a]=g.exports.useState(!1),l=()=>a(!1);return t("nav",{className:e,children:d(S,{maxWidth:"md",children:[d(f,{justifyContent:"space-between",alignItems:"center",children:[d(f,{className:"logo",alignItems:"center",children:[t(R,{src:p("assets/logo.png"),alt:"logo"}),t(B,{to:"/",children:"Delta"})]}),d(f,{children:[t(ne,{size:"1.5rem",onClick:()=>a(!0)}),L.map(({id:i,text:n,to:s,hash:c})=>d(re,{children:[!c&&t(j,{to:s,children:n}),c&&t("a",{href:p(s+c),children:n})]},i))]})]}),t(oe,{className:"modal",open:o,handleClose:l,children:t(f,{direction:"column",alignItems:"center",children:L.map(({id:i,text:n,to:s,hash:c})=>d(se,{children:[!c&&t(j,{to:s,onClick:l,children:n}),c&&t("a",{href:s+c,onClick:l,children:n})]},i))})})]})})})`
  ${ie}
`,xe=r(A)`
  svg {
    fill: ${e=>e.theme.colors.primary};
    height: 5rem;
    width: 5rem;
  }
`,ue=r(({className:e})=>t(f,{className:e,direction:"column",justifyContent:"center",alignItems:"center",children:t(xe,{type:"bubbles"})}))`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background-color: #071c2f;
`,ve=h.lazy(()=>C(()=>import("./ContactPage.240dc3d0.js"),["assets/ContactPage.240dc3d0.js","assets/vendor.65bf52f0.js"])),be=h.lazy(()=>C(()=>import("./HomePage.f5d12d8e.js"),["assets/HomePage.f5d12d8e.js","assets/HomePage.b32ce33a.css","assets/vendor.65bf52f0.js"])),we=h.lazy(()=>C(()=>import("./PricingPage.b29ba806.js"),["assets/PricingPage.b29ba806.js","assets/vendor.65bf52f0.js"])),je=()=>t(k,{children:d(T,{basename:"/rp-react-with-styled-components/",children:[t(ye,{}),t(g.exports.Suspense,{fallback:t(ue,{}),children:d(M,{children:[t(y,{exact:!0,path:"/pricing",children:t(we,{})}),t(y,{exact:!0,path:"/signup",children:t(ve,{})}),t(y,{exact:!0,path:"/",children:t(be,{})}),t(y,{path:"*",children:t(N,{to:"/"})})]})}),t(he,{})]})}),Ce={colors:{primary:"rebeccapurple",secondary:"green"},maxWidth:{xs:"900px",md:"1536px",lg:"100%"},media:{xs:"@media screen and (min-width: 0px)",md:"@media screen and (min-width: 900px)",lg:"@media screen and (min-width: 1536px)"}},$e=V`
html{scroll-behavior:smooth}
body {
      /* css */
    font-family: "Roboto";
  }
`;function pe(){return t(k,{children:d(q,{theme:Ce,children:[t($e,{}),t(je,{})]})})}H.render(t(h.StrictMode,{children:t(pe,{})}),document.getElementById("root"));export{Se as B,S as C,f as F,$ as G,ke as I,d as a,k as b,I as c,t as j,Ce as t,p as u};
