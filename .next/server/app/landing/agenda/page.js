(()=>{var e={};e.id=664,e.ids=[664],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6758:(e,a,n)=>{"use strict";n.r(a),n.d(a,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=n(7096),t=n(6132),s=n(7284),o=n.n(s),l=n(2564),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);n.d(a,i);let d=["",{children:["landing",{children:["agenda",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,2820)),"D:\\@apollo\\@work\\@next\\src\\app\\landing\\agenda\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,8754)),"D:\\@apollo\\@work\\@next\\src\\app\\landing\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,4553)),"D:\\@apollo\\@work\\@next\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(n.bind(n,8481)),"D:\\@apollo\\@work\\@next\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(n.bind(n,2610)),"D:\\@apollo\\@work\\@next\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(n.bind(n,220)),"D:\\@apollo\\@work\\@next\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\@apollo\\@work\\@next\\src\\app\\landing\\agenda\\page.js"],p="/landing/agenda/page",m={require:n,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/landing/agenda/page",pathname:"/landing/agenda",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5303:()=>{},2820:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>Agenda});var r=n(4656);let t=[{id:1,date:"2022/07/18",content:[{hour:"9 - 9:15am",name:"Jackson"},{hour:"9 - 9:15am",name:"Jackson"},{hour:"9 - 9:15am",name:"Jackson"}]},{id:2,date:"2022/07/17",content:[{hour:"9 - 9:15am",name:"Jackson"},{hour:"9 - 9:15am",name:"Jackson"},{hour:"9 - 9:15am",name:"Jackson"},{hour:"9 - 9:15am",name:"Jackson"},{hour:"9 - 9:15am",name:"Jackson"}]},{id:3,date:"2022/07/15",content:[{hour:"9 - 9:15am",name:"Jackson"}]}];function Agenda(){let renderDate=e=>new Date(e).getDate(),renderMonth=e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(e).getMonth()],renderDay=e=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(e).getDay()];return(0,r.jsxs)("div",{className:"pt-12",children:[r.jsx("h1",{className:"font-semibold text-2xl m-12 px-6 lg:px-8",children:"Agenda"}),r.jsx("div",{className:"mt-12",children:r.jsx("table",{className:"w-full text-center",children:r.jsx("tbody",{className:"w-full",children:t.map(e=>(0,r.jsxs)("tr",{className:"border-t border-gray",children:[r.jsx("td",{className:"p-2 align-baseline",children:(0,r.jsxs)("div",{className:"flex gap-3 justify-center items-center",children:[r.jsx("p",{className:"bg-main text-white rounded-full w-10 h-10 leading-10",children:renderDate(e.date)}),(0,r.jsxs)("p",{className:"text-main",children:[renderMonth(e.date),", ",renderDay(e.date)]})]})}),r.jsx("td",{className:"p-2 align-baseline",children:e.content.map((e,a)=>(0,r.jsxs)("div",{className:"flex gap-3 items-center py-2",children:[r.jsx("p",{className:"flex-1 flex items-center relative before:absolute before:left-0 before:w-3 before:h-3 before:content-[''] before:bg-main before:rounded-full",children:(0,r.jsxs)("span",{className:"ml-12",children:[" ",e.hour]})}),r.jsx("p",{className:"flex-1",children:e.name}),r.jsx("button",{className:"h-10 ml-4 bg-transparent border border-main text-main rounded-xl py-1 px-4 hover:bg-main hover:text-white",children:"View Profile"}),r.jsx("div",{className:"flex-1"})]},a))})]},e.id))})})})]})}}};var a=require("../../../webpack-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),n=a.X(0,[217,49,66,883,110],()=>__webpack_exec__(6758));module.exports=n})();