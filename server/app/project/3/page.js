(()=>{var e={};e.id=198,e.ids=[198],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1183:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>c});var o=r(482),s=r(9108),i=r(2563),n=r.n(i),a=r(8300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["project",{children:["3",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,616)),"/home/runner/work/Portfolio/Portfolio/monportfolio/src/app/project/3/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1655)),"/home/runner/work/Portfolio/Portfolio/monportfolio/src/app/project/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6033)),"/home/runner/work/Portfolio/Portfolio/monportfolio/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/home/runner/work/Portfolio/Portfolio/monportfolio/src/app/project/3/page.tsx"],d="/project/3/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/project/3/page",pathname:"/project/3",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5303:()=>{},616:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var o=r(5036),s=r(8367),i=r(2767);function n(){return o.jsx(o.Fragment,{children:o.jsx(i.Z,{project:s.HH})})}},2767:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(5036),s=r(7222),i=r(1333);function n(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex flex-col items-center m-4 relative",children:[o.jsx("img",{src:e.project.getimgPATH(),alt:"",width:400}),(0,o.jsxs)("div",{className:"flex items-center justify-center relative",children:[o.jsx("h1",{className:"font-serif text-4xl pt-3",children:e.project.getName()}),o.jsx(i.Z,{text:"Vous pouvez cliquer sur les cartes des technologies pour aller voir leur documentation respective qui a \xe9t\xe9 utilis\xe9e durant mon apprentissage"})]})]}),o.jsx("div",{className:"flex-1 text-center",children:o.jsx("p",{children:e.project.getDescription()})}),o.jsx("div",{className:"sm:grid md:grid-cols-3 justify-items-center place-items-stretch py-6",children:e.project.getLibrairies().sort((e,t)=>e.getName().toLowerCase()>t.getName().toLowerCase()?1:e.getName().toLowerCase()<t.getName().toLowerCase()?-1:0).map((e,t)=>o.jsx(s.Z,{id:e.getId(),nom:e.getName(),imgPATH:e.getImgURL(),docLink:e.getDocLink()},e.getId()))})]})}},1655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(5036);function s({children:e}){return o.jsx(o.Fragment,{children:e})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,969,337,202],()=>r(1183));module.exports=o})();