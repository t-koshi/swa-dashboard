(()=>{var e={};e.id=565,e.ids=[565],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},15206:e=>{"use strict";e.exports=require("zlib")},11825:()=>{},57690:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>l}),s(25618),s(13321),s(11506),s(35866);var r=s(23191),a=s(88716),o=s(37922),i=s.n(o),d=s(95231),n={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>d[e]);s.d(t,n);let l=["",{children:["dashboard",{children:["likes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,25618)),"/Users/koshi/project/swap/swap-dashboard/app/dashboard/likes/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,13321)),"/Users/koshi/project/swap/swap-dashboard/app/dashboard/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,11506)),"/Users/koshi/project/swap/swap-dashboard/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/koshi/project/swap/swap-dashboard/app/dashboard/likes/page.tsx"],p="/dashboard/likes/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/likes/page",pathname:"/dashboard/likes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},15814:(e,t,s)=>{Promise.resolve().then(s.bind(s,92747))},40216:(e,t,s)=>{Promise.resolve().then(s.bind(s,26745))},31127:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},62049:()=>{},71021:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(10326);s(17577);var a=s(64047);function o({selectedDate:e,onChange:t}){return r.jsx(a.ZP,{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",selected:e,onChange:e=>t(e),showTimeSelect:!1,timeIntervals:15,dateFormat:"yyyy/MM/dd"})}s(82094)},34857:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);function a({children:e}){return r.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:e})}s(17577)},92747:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var r=s(10326),a=s(90434),o=s(60982),i=s(35047),d=s(41135);let n=[{name:"Dashboard",href:"/dashboard",icon:o.Z}];function l(){let e=(0,i.usePathname)();return r.jsx(r.Fragment,{children:n.map((t,s)=>{let o=t.icon;return(0,r.jsxs)(a.default,{href:t.href,className:(0,d.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium bg-sky-100 text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[r.jsx(o,{className:"w-6"}),r.jsx("p",{className:"hidden md:block",children:t.name})]},s)})})}function c(){return(0,r.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[r.jsx(a.default,{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/dashboard",children:r.jsx("div",{className:"w-32 text-white md:w-40",children:"Swap.inc"})}),r.jsx("div",{className:"flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:r.jsx(l,{})})]})}var p=s(50833),u=s(6824),x=s(66562);let h=async()=>{let e=await (0,u.A)("/dashboard/api/dashboard/check_auth");return!(e instanceof p.d7)||e.response?.status!=401||(x.Z.remove("uid"),x.Z.remove("client"),x.Z.remove("access-token"),document.location.href="https://demo-app.offhack.jp",!1)};var m=s(17577);function b({children:e}){let[t,s]=(0,m.useState)(!1);return(async()=>{s(await h())})(),t&&(0,r.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[r.jsx("div",{className:"w-full flex-none md:w-64",children:r.jsx(c,{})}),r.jsx("div",{className:"grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},26745:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(10326),a=s(13246),o=s(6824),i=s(17577),d=s(71021),n=s(34857),l=s(86718),c=s(61752),p=s(46951);function u(){let[e,t]=(0,i.useState)((0,l.l)(new Date,{months:3})),[s,u]=(0,i.useState)((0,c.I)()),[x,h]=(0,i.useState)([]),m=async()=>{let t={from:"",to:""};e&&(t.from=(0,p.WU)(e,"yyyy-MM-dd")),s&&(t.to=(0,p.WU)(s,"yyyy-MM-dd")),h(await (0,o.A)("/dashboard/api/dashboard/likes",t))};return(0,r.jsxs)("main",{children:[r.jsx("h1",{className:"mb-4 text-xl md:text-2xl",children:"いいね"}),(0,r.jsxs)("form",{className:"w-full max-w-lg mb-4",onSubmit:e=>{e.preventDefault(),m()},children:[(0,r.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-2",children:[(0,r.jsxs)("div",{className:"px-3 mb-6 md:mb-0",children:[r.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"From"}),r.jsx(d.Z,{selectedDate:e,onChange:e=>{t(e)}})]}),(0,r.jsxs)("div",{className:"px-3 mb-6 md:mb-0",children:[r.jsx("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"To"}),r.jsx(d.Z,{selectedDate:s,onChange:e=>{u(e)}})]})]}),r.jsx(n.Z,{children:"Search"})]}),r.jsx("div",{children:r.jsx(a.Z,{title:"Likes",data:x})}),r.jsx("div",{className:"mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"})]})}},13246:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(10326);s(17577);var a=s(30660),o=s(47537),i=s(18423),d=s(62637),n=s(9997),l=s(44675),c=s(69274),p=s(74390);function u({title:e,data:t,linkHref:s}){return(0,r.jsxs)("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-[50px] w-[100%] h-[250px]",children:[r.jsx("a",{href:s??"#",children:r.jsx("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:e})}),r.jsx(a.h,{width:"100%",height:"100%",children:(0,r.jsxs)(o.w,{width:500,height:300,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[r.jsx(i.q,{strokeDasharray:"3 3"}),r.jsx(d.K,{dataKey:"date"}),r.jsx(n.B,{dataKey:"count"}),r.jsx(l.u,{}),r.jsx(c.D,{}),r.jsx(p.x,{type:"linear",dataKey:"count",stroke:"#82ca9d"})]})})]})}},6824:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var r=s(44099),a=s(66562);let o=()=>{let e={};return a.Z.get("uid")&&(e.uid=a.Z.get("uid")??""),a.Z.get("client")&&(e.client=a.Z.get("client")??""),a.Z.get("access-token")&&(e["access-token"]=a.Z.get("access-token")??""),e},i=async(e,t)=>{let s=`https://demo-app.offhack.jp${e}`;try{return(await r.default.get(s,{headers:o(),params:t})).data}catch(e){return e}}},13321:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>d});var r=s(68570);let a=(0,r.createProxy)(String.raw`/Users/koshi/project/swap/swap-dashboard/app/dashboard/layout.tsx`),{__esModule:o,$$typeof:i}=a;a.default;let d=(0,r.createProxy)(String.raw`/Users/koshi/project/swap/swap-dashboard/app/dashboard/layout.tsx#default`)},25618:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>d});var r=s(68570);let a=(0,r.createProxy)(String.raw`/Users/koshi/project/swap/swap-dashboard/app/dashboard/likes/page.tsx`),{__esModule:o,$$typeof:i}=a;a.default;let d=(0,r.createProxy)(String.raw`/Users/koshi/project/swap/swap-dashboard/app/dashboard/likes/page.tsx#default`)},11506:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>i});var r=s(19510),a=s(85384),o=s.n(a);s(67272);let i={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:o().className,children:e})})}},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,892,809,435,181],()=>s(57690));module.exports=r})();