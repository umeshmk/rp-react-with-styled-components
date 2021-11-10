import{p as c,C as d,s as r}from"./vendor.65bf52f0.js";import{F as m,B as l,j as e,a as n,C as f,G as u,I as g,b as h}from"./index.37329d84.js";function p(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 21l-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 005 7.9V21zM17.83 9L15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41L17.83 9z"}}]})(t)}const b=[{title:"Basic",price:"$7.99 user/month after offer period",numAcc:"50-100 accounts",features:["Secure accounts","Best for small business","Easy","Affordable","1GB RAM"]},{title:"Standard",price:"$18.99 user/month after offer period",numAcc:"50-500 accounts",features:["Secure accounts","Best for small business","Customizable","3GB RAM","1TB SSD"]},{title:"Premium",price:"$32.50 user/month after offer period",numAcc:"50-1000 accounts",features:["Secure accounts","Best for small business","Customizable","Easy Integration","Development Team","DNS & Domain included"]},{title:"Enterprise",price:"$55.50 user/month after offer period ",numAcc:"1000+ Accounts",features:["Unlimited Storage","Scalability","Free DNS & Domain"]}],x=d`
  min-height: 100vh;
  color: #fff;
  background-color: #101522;
  margin: 0;
  padding: 10rem 2rem;
  ${t=>t.theme.media.md} {
    padding: 7rem 5rem;
  }
`,z=r.h1`
  font-size: 4rem;
  margin: 0;
  padding-bottom: 1rem;
  color: #fff;
  text-align: center;
`,B=r.p`
  font-size: 1.2rem;
  color: #fffa;
  margin-bottom: 3rem;
  text-align: center;
`,C=r(m)`
  /* font-size: 2rem; */
  color: #fff;
  background-color: #242424;
  padding: 2rem;
  transition: all 0.3s;

  :hover {
    box-shadow: 0 0 20px 0px slateblue;
    ${t=>t.theme.media.md} {
      transform: scale(1.05);
    }
  }
`,S=r.h2`
  font-size: 2.2rem;
  margin: 0;
  padding: 0;
`,v=r.h3`
  font-size: 1.3rem;
  color: #fffa;
  padding-bottom: 1rem;
`,A=r.ul`
  font-size: 1rem;
  font-weight: 300;
  color: #fff7;
  list-style: none;
  padding: 0;
  li {
    margin-top: 1rem;
  }
  svg {
    margin-right: 1rem;
    /* font-size: 1.4rem; */
  }
`,y=r(l)`
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  color: #fffa;
  background: transparent;
  /* color: #000; */
`,D=r(({className:t})=>e("div",{className:t,children:n(f,{maxWidth:"md",children:[e(z,{children:"Pick Your Best Option"}),e(B,{children:"Create, maintain and store your data with Delta."}),e(u,{cols:{xs:"1",md:"2",lg:"4"},gap:"4rem",children:b.map(({features:i,price:s,title:a})=>n(C,{direction:"column",justifyContent:"space-between",children:[n(g,{children:[e(S,{children:a}),e(v,{children:s}),e(A,{children:i.map(o=>n("li",{children:[e(p,{}),o]},o))})]}),e(y,{children:"Get Started"})]},a))})]})}))`
  ${x}
`,k=()=>e(h,{children:e(D,{})});export{k as default};
