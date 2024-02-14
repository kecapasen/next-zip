"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{7586:function(e,s,t){t.r(s);var a=t(5893),l=t(7294),r=t(2581),n=t(3803),o=t(660),i=t(9305),d=t(2726),c=t(4697),m=t(7536),x=t(4723),p=t(8670),f=t(2371),u=t(3789),h=t(833),b=t(1896),g=t(2493),j=t(2528),N=t(628);t(9396);var w=t(1395),v=t(3725),y=t(6312),D=t(1604);D.z.object({page:D.z.number(),limit:D.z.number(),search:D.z.string(),offset:D.z.number(),totalPages:D.z.number(),totalRows:D.z.number(),totalDatas:D.z.number(),admins:D.z.union([D.z.array(D.z.object({id:D.z.number(),nama:D.z.string(),posisi:D.z.nativeEnum(p.iV)})),D.z.null()])});let z=D.z.object({no:D.z.number(),nama:D.z.string().min(1,{message:"Nama is required!"}).max(100),password:D.z.string().max(100),posisi:D.z.nativeEnum(p.iV)}),P={page:1,limit:10,search:"",offset:0,totalPages:0,totalRows:0,totalDatas:0,admins:null},k={no:0,nama:"",password:"",posisi:p.iV.Kordinator};s.default=e=>{let{register:s,handleSubmit:t,formState:{errors:D},reset:Z,setValue:C,getValues:I}=(0,m.cI)({resolver:(0,y.F)(z)}),{admin:S}=(0,v.O)(),[A,V]=(0,l.useState)(""),[E,F]=(0,l.useState)(0),[R]=(0,c.Nr)(A,500),[B,O]=(0,l.useState)(P),{page:_,limit:q,offset:K,totalPages:U,totalRows:H,totalDatas:T,admins:G}=B,[J,L]=(0,l.useState)(!1),[M,Q]=(0,l.useState)(!1),[W,X]=(0,l.useState)(!1),getAdmin=async()=>{try{let e=await x.e.get("/admin/staf",{params:{page:_,limit:q,search:R}});O({...B,offset:e.data.offset,totalPages:e.data.totalPages,totalRows:e.data.totalRows,totalDatas:e.data.totalData,admins:e.data.result})}catch(e){(0,n.Z)(e)}},handleCreateData=async e=>{(0,o.Z)();try{await x.e.post("/admin/staf",e),(0,r.Z)("Data Berhasil Dibuat!"),Z(k),L(!1),getAdmin()}catch(e){(0,n.Z)(e)}},handleUpdateData=async e=>{(0,o.Z)();try{await x.e.patch("/admin/staf/".concat(E),e),(0,r.Z)("Data Berhasil Diubah!"),Z(k),Q(!1),L(!1),getAdmin()}catch(e){(0,n.Z)(e)}},handleDeleteData=(e,s,t)=>{(0,w.Z)(e,s,t)},handleDeleteAllData=(e,s,t)=>{(0,i.Z)(e,s,t)},Y=(0,c.y1)(e=>{O({...B,page:e})},200);return(0,l.useEffect)(()=>{X(!0),Z(k),Q(!1),L(!1),getAdmin(),X(!1)},[e]),(0,l.useEffect)(()=>{getAdmin()},[R,_,q]),(0,a.jsx)("div",{className:"w-full",children:J?(0,a.jsx)("div",{className:"flex justify-center items-center font-['Poppins'] bg-white rounded-2xl border shadow-md",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("button",{className:"flex items-center m-4 group gap-2",onClick:e=>{e.preventDefault(),L(!1),Q(!1),Z(k)},children:[(0,a.jsx)(f.Z,{size:20,color:"#57534e"}),(0,a.jsx)("a",{className:"font-['Poppins'] text-sm text-stone-600 font-bold group-hover:underline cursor-pointer",children:"Back"})]}),(0,a.jsx)("hr",{className:"border rounded-full"}),(0,a.jsxs)("form",{onSubmit:t(M?handleUpdateData:handleCreateData),className:"w-full",autoComplete:"off",children:[(0,a.jsxs)("div",{className:"text-stone-600 font-bold p-4 w-full lg:grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"my-2 lg:my-0",children:[(0,a.jsx)("label",{htmlFor:"nama",children:"Nama :"}),(0,a.jsx)("input",{spellCheck:!1,type:"text",className:"font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full ".concat(D.nama?"focus:border-rose-500 border-rose-500":"focus:border-stone-800"," border rounded-lg p-2"),id:"nama",...s("nama")}),D.nama&&(0,a.jsx)("p",{className:"font-['Inter'] text-rose-500 font-bold text-sm mx-1",children:D.nama.message})]}),(0,a.jsxs)("div",{className:"my-2 lg:my-0",children:[(0,a.jsxs)("label",{htmlFor:"password",children:[M?"Password Baru":"Password"," :"]}),(0,a.jsx)("input",{spellCheck:!1,type:"text",className:"font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full ".concat(D.password?"focus:border-rose-500 border-rose-500":"focus:border-stone-800"," border rounded-lg p-2"),id:"nis",...s("password")}),D.password&&(0,a.jsx)("p",{className:"font-['Inter'] text-rose-500 font-bold text-sm mx-1",children:D.password.message})]}),(0,a.jsxs)("div",{className:"my-2 lg:my-0",children:[(0,a.jsx)("p",{children:"Posisi :"}),(0,a.jsxs)("select",{className:"font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full focus:border-stone-800 border rounded-lg p-2 cursor-pointer",id:"posisi",...s("posisi"),children:["Developer"===S.posisi&&(0,a.jsx)("option",{value:p.iV.Developer,children:p.iV.Developer.toString()}),(0,a.jsx)("option",{value:p.iV.Kordinator,children:p.iV.Kordinator.toString()}),(0,a.jsx)("option",{value:p.iV.Pengawas,children:p.iV.Pengawas.toString()})]})]})]}),(0,a.jsx)("hr",{className:"border rounded-full"}),(0,a.jsx)("div",{className:"flex justify-start flex-row-reverse m-4 gap-4",children:M?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{className:"bg-emerald-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-emerald-600 cursor-pointer group",type:"submit",children:[(0,a.jsx)(u.Z,{size:24,color:"#ffffff"}),(0,a.jsx)("p",{className:"font-['Poppins'] text-sm text-white block",children:"Simpan"})]}),(0,a.jsxs)("button",{className:"bg-rose-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-rose-600 cursor-pointer group",onClick:e=>{e.preventDefault(),handleDeleteData(I("nama"),"/admin/staf/".concat(E),()=>{Z(k),Q(!1),L(!1),getAdmin()})},children:[(0,a.jsx)(h.Z,{size:24,color:"#ffffff"}),(0,a.jsx)("p",{className:"font-['Poppins'] text-sm text-white block",children:"Hapus"})]})]}):(0,a.jsxs)("button",{className:"bg-emerald-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-emerald-600 cursor-pointer group",type:"submit",children:[(0,a.jsx)(b.Z,{size:24,color:"#ffffff"}),(0,a.jsx)("p",{className:"font-['Poppins'] text-sm text-white block",children:"Buat"})]})})]})]})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"Pengawas"===S.posisi?"hidden":"relative",children:(0,a.jsxs)("div",{className:"flex justify-start gap-4 pb-2 flex-wrap",children:[(0,a.jsxs)("button",{className:"bg-white rounded-xl shadow-md lg:pr-2 border flex items-center hover:bg-slate-50 cursor-pointer group relative",onClick:e=>{e.preventDefault(),L(!0)},children:[(0,a.jsx)(g.Z,{size:32,color:"#10b981",className:"m-2"}),(0,a.jsx)("div",{className:"border-l h-8 border lg:block hidden"}),(0,a.jsx)("p",{className:"font-['Poppins'] text-sm text-stone-800 font-bold lg:block hidden m-2",children:"Tambah"})]}),(0,a.jsx)(d.Z,{func:()=>{handleDeleteAllData(T,"/admin/staf",()=>{O({...P,offset:0,totalRows:0,totalPages:0,totalDatas:0,admins:[]})})}})]})}),(0,a.jsxs)("div",{className:"overflow-y-auto overflow-x-auto bg-white rounded-2xl mt-2 shadow-md",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:justify-between p-2",children:[(0,a.jsxs)("form",{className:"flex items-center w-full gap-2",onSubmit:e=>{e.preventDefault()},children:[(0,a.jsx)("label",{htmlFor:"search",children:(0,a.jsx)("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:"Search"})}),(0,a.jsx)("input",{spellCheck:!1,autoComplete:"off",id:"search",name:"search",className:"flex-1 lg:flex-none font-['Inter'] text-stone-600 font-medium outline-none bg-transparent my-1 focus:border-stone-800 border rounded-lg px-2",type:"text",value:A,required:!0,onChange:e=>{O({...B,page:1}),V(e.target.value)}})]}),(0,a.jsxs)("form",{className:"flex items-center w-full lg:justify-end",children:[(0,a.jsx)("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:"Rows per page :"}),(0,a.jsxs)("select",{name:"page",className:"p-1 cursor-pointer outline-none font-['Inter'] text-sm text-stone-600 font-medium",required:!0,value:q,onChange:e=>{O({...B,page:1,limit:parseInt(e.target.value)})},children:[(0,a.jsx)("option",{value:10,children:"10"}),(0,a.jsx)("option",{value:20,children:"20"})]})]})]}),(0,a.jsxs)("table",{className:"w-full",children:[(0,a.jsx)("thead",{className:"border",children:(0,a.jsxs)("tr",{className:"bg-rose-500 text-white font-['Poppins'] font-bold text-sm lg:text-base",children:[(0,a.jsx)("th",{className:"m-2 p-1 border",children:"No"}),(0,a.jsx)("th",{className:"m-2 p-1 border",children:"Nama"}),(0,a.jsx)("th",{className:"m-2 p-1 border",children:"Posisi"})]})}),(0,a.jsx)("tbody",{className:"border",children:null===G||W?Array(q).fill(0).map((e,s)=>(0,a.jsxs)("tr",{className:"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base",children:[(0,a.jsx)("td",{className:"m-2 p-1 border",children:(0,a.jsx)("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})}),(0,a.jsx)("td",{className:"m-2 p-1 border",children:(0,a.jsx)("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})}),(0,a.jsx)("td",{className:"m-2 p-1 border",children:(0,a.jsx)("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})})]},s)):G.length>0?G.map((e,s)=>(0,a.jsxs)("tr",{className:"Pengawas"===S.posisi?"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base":"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base hover:bg-slate-50 cursor-pointer",onClick:async()=>{if("Pengawas"!==S.posisi){try{let s=await x.e.get("/admin/staf/".concat(e.id));C("nama",s.data.nama),C("password",s.data.password),C("posisi",s.data.posisi),F(s.data.id)}catch(e){(0,n.Z)(e)}Q(!0),L(!0)}},children:[(0,a.jsx)("td",{className:"border",children:s+1}),(0,a.jsx)("td",{className:"border",children:e.nama}),(0,a.jsx)("td",{className:"border",children:e.posisi})]},e.id)):(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:3,className:"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base",children:"No Data Available"})})})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between p-2",children:[(0,a.jsxs)("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium bg-slate-100 rounded-full px-2 py-1",children:[K+1,"-",q*_>H?H:q*_," of"," ",H]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("button",{className:"p-2 hover:bg-slate-50 rounded-full cursor-pointer",onClick:()=>{_>1&&Y(_-1)},children:(0,a.jsx)(j.Z,{size:16,color:"#57534e"})}),(0,a.jsx)("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:_}),(0,a.jsx)("button",{className:"p-2 hover:bg-slate-50 rounded-full cursor-pointer",onClick:()=>{_<U&&Y(_+1)},children:(0,a.jsx)(N.Z,{size:16,color:"#57534e"})})]})]})]})]})})}}}]);