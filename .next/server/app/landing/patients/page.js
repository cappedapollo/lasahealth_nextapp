(()=>{var e={};e.id=943,e.ids=[943],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1819:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>p,routeModule:()=>x,tree:()=>d});var n=t(7096),a=t(6132),r=t(7284),i=t.n(r),l=t(2564),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let d=["",{children:["landing",{children:["patients",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3949)),"D:\\@apollo\\@work\\@next\\src\\app\\landing\\patients\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,8754)),"D:\\@apollo\\@work\\@next\\src\\app\\landing\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,4553)),"D:\\@apollo\\@work\\@next\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(t.bind(t,8481)),"D:\\@apollo\\@work\\@next\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(t.bind(t,2610)),"D:\\@apollo\\@work\\@next\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,220)),"D:\\@apollo\\@work\\@next\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\@apollo\\@work\\@next\\src\\app\\landing\\patients\\page.js"],c="/landing/patients/page",m={require:t,loadChunk:()=>Promise.resolve()},x=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/landing/patients/page",pathname:"/landing/patients",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8620:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,614,23))},3949:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>Patients});var n=t(4656),a=t(4353),r=t.n(a);let i=[{id:1,name:"Brenna Foster",signupDate:"5/7/23 9:15am",appointmentDate:"5/12/23 2:00pm",likes:3,dislikes:4},{id:2,name:"Brenna Test",signupDate:"5/7/23 9:15am",appointmentDate:"5/12/23 2:00pm",likes:13,dislikes:5},{id:3,name:"Perry Foster",signupDate:"5/7/23 9:15am",appointmentDate:"5/12/23 2:00pm",likes:6,dislikes:4},{id:4,name:"Perry Foster",signupDate:"5/7/23 9:15am",appointmentDate:"5/12/23 2:00pm",likes:6,dislikes:4},{id:5,name:"Perry Foster",signupDate:"5/7/23 9:15am",appointmentDate:"5/12/23 2:00pm",likes:6,dislikes:4},{id:6,name:"Perry Foster",signupDate:"5/7/23 9:15am",appointmentDate:"5/12/23 2:00pm",likes:6,dislikes:4}];function Patients(){return(0,n.jsxs)("div",{className:"px-6 pt-12 lg:px-8",children:[n.jsx("h1",{className:"font-semibold text-2xl m-12",children:"Newest Patients"}),n.jsx("div",{className:"mt-12 mx-6",children:(0,n.jsxs)("table",{className:"w-full text-left",children:[(0,n.jsxs)("thead",{className:"w-full",children:[n.jsx("tr",{children:n.jsx("th",{className:"pb-4 pl-2",colSpan:4,children:n.jsx("p",{className:"text-gray text-xl",children:"Filters"})})}),(0,n.jsxs)("tr",{children:[n.jsx("th",{className:"pb-5",children:n.jsx("input",{className:"h-10 rounded-lg border border-main px-2 focus:outline-none text-main",placeholder:"Search Name",type:"text"})}),n.jsx("th",{className:"pb-5",children:n.jsx("select",{className:"h-10 rounded-lg border border-main px-2 focus:outline-none text-main",children:n.jsx("option",{children:"Signup Date Range"})})}),n.jsx("th",{className:"pb-5",children:n.jsx("select",{className:"h-10 rounded-lg border border-main px-2 focus:outline-none text-main",children:n.jsx("option",{children:"Appointment Date Range"})})}),n.jsx("th",{className:"pb-5",children:(0,n.jsxs)("div",{className:"flex gap-1",children:[n.jsx("select",{className:"h-10 rounded-lg border border-main px-2 focus:outline-none text-main",children:n.jsx("option",{children:"Likely Condition"})}),n.jsx("select",{className:"h-10 rounded-lg border border-main px-2 focus:outline-none text-main",children:n.jsx("option",{children:"Unlikely Condition"})})]})})]}),(0,n.jsxs)("tr",{children:[n.jsx("th",{className:"p-2",children:"Name"}),n.jsx("th",{className:"p-2",children:"Signup Date"}),n.jsx("th",{className:"p-2",children:"Appointment Date"}),n.jsx("th",{className:"p-2",children:"Health Profile Flags"})]})]}),n.jsx("tbody",{className:"w-full",children:i.map(e=>(0,n.jsxs)("tr",{children:[n.jsx("td",{className:"p-2",children:e.name}),n.jsx("td",{className:"p-2",children:e.signupDate}),n.jsx("td",{className:"p-2",children:e.appointmentDate}),n.jsx("td",{className:"p-2",children:(0,n.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,n.jsxs)(r(),{href:"#",className:"flex-1 text-orange",children:[e.likes," likely"]}),(0,n.jsxs)(r(),{href:"#",className:"flex-1 text-main",children:[e.dislikes," likely"]}),n.jsx("button",{className:"h-10 ml-4 bg-transparent border border-main text-main rounded-xl py-1 px-4 hover:bg-main hover:text-white",children:"View Profile"}),n.jsx("div",{className:"flex-1"})]})})]},e.id))})]})})]})}}};var s=require("../../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[217,49,66,883,110],()=>__webpack_exec__(1819));module.exports=t})();