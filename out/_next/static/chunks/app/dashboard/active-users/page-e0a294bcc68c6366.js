(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{90490:function(e,t,a){Promise.resolve().then(a.bind(a,9695))},7743:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(57437);a(2265);var s=a(36463),n=a.n(s);function c(e){let{selectedDate:t,onChange:a}=e;return(0,r.jsx)(n(),{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",selected:t,onChange:e=>a(e),showTimeSelect:!1,timeIntervals:15,dateFormat:"yyyy/MM/dd"})}a(54575)},93435:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(57437);function s(e){let{children:t}=e;return(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:t})}a(2265)},9695:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(57437),s=a(36077),n=a(96264),c=a(2265),d=a(7743),l=a(93435),i=a(21821),o=a(2393),u=a(3689);function h(){let[e,t]=(0,c.useState)((0,i.l)(new Date,{months:3})),[a,h]=(0,c.useState)((0,o.I)()),[x,m]=(0,c.useState)([]),f=async()=>{let t={from:"",to:""};e&&(t.from=(0,u.WU)(e,"yyyy-MM-dd")),a&&(t.to=(0,u.WU)(a,"yyyy-MM-dd")),m(await (0,n.A)("/dashboard/api/dashboard/active_users",t))};return(0,c.useEffect)(()=>{f()},[]),(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{className:"mb-4 text-xl md:text-2xl",children:"ActiveUsers"}),(0,r.jsxs)("form",{className:"w-full max-w-lg mb-4",onSubmit:e=>{e.preventDefault(),f()},children:[(0,r.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-2",children:[(0,r.jsxs)("div",{className:"px-3 mb-6 md:mb-0",children:[(0,r.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"From"}),(0,r.jsx)(d.Z,{selectedDate:e,onChange:e=>{t(e)}})]}),(0,r.jsxs)("div",{className:"px-3 mb-6 md:mb-0",children:[(0,r.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"To"}),(0,r.jsx)(d.Z,{selectedDate:a,onChange:e=>{h(e)}})]})]}),(0,r.jsx)(l.Z,{children:"Search"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{title:"ActiveUsers",data:x})}),(0,r.jsx)("div",{className:"mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"})]})}},36077:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(57437);a(2265);var s=a(35231),n=a(53436),c=a(54142),d=a(2842),l=a(9542),i=a(85475),o=a(20153),u=a(16638);function h(e){let{title:t,data:a,linkHref:h}=e;return(0,r.jsxs)("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-[50px] w-[100%] h-[250px]",children:[(0,r.jsx)("a",{href:null!=h?h:"#",children:(0,r.jsx)("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:t})}),(0,r.jsx)(s.h,{width:"100%",height:"100%",children:(0,r.jsxs)(n.w,{width:500,height:300,data:a,margin:{top:5,right:30,left:20,bottom:5},children:[(0,r.jsx)(c.q,{strokeDasharray:"3 3"}),(0,r.jsx)(d.K,{dataKey:"date"}),(0,r.jsx)(l.B,{dataKey:"count"}),(0,r.jsx)(i.u,{}),(0,r.jsx)(o.D,{}),(0,r.jsx)(u.x,{type:"linear",dataKey:"count",stroke:"#82ca9d"})]})})]})}},96264:function(e,t,a){"use strict";a.d(t,{A:function(){return c}});var r=a(38472),s=a(44785);let n=()=>{var e,t,a;let r={};return s.Z.get("uid")&&(r.uid=null!==(e=s.Z.get("uid"))&&void 0!==e?e:""),s.Z.get("client")&&(r.client=null!==(t=s.Z.get("client"))&&void 0!==t?t:""),s.Z.get("access-token")&&(r["access-token"]=null!==(a=s.Z.get("access-token"))&&void 0!==a?a:""),r},c=async(e,t)=>{let a="".concat("https://demo-app.offhack.jp").concat(e);try{return(await r.default.get(a,{headers:n(),params:t})).data}catch(e){return e}}}},function(e){e.O(0,[223,544,475,883,934,971,23,744],function(){return e(e.s=90490)}),_N_E=e.O()}]);