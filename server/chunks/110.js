"use strict";exports.id=110,exports.ids=[110],exports.modules={7222:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var l=t(997),n=t(6689),r=t(271),o=t.n(r),i=t(3810),d=t.n(i),c=t(2581),m=t(3803),u=t(660),x=t(7105),h=t(5641),p=t(4723),f=t(8670),b=t(9101);t(5544);var g=t(9305),j=t(1395),N=t(2726),w=t(3725),v=t(1656),y=t(9926),I=e([x,h,p,g,j,v,y]);[x,h,p,g,j,v,y]=I.then?(await I)():I,y.z.object({page:y.z.number(),limit:y.z.number(),search:y.z.string(),offset:y.z.number(),totalPages:y.z.number(),totalRows:y.z.number(),totalDatas:y.z.number(),siswa:y.z.union([y.z.array(y.z.object({nis:y.z.number(),nama:y.z.string(),kelas:y.z.nativeEnum(f.rD),jurusan:y.z.nativeEnum(f.Kh),candidatesId:y.z.number()})),y.z.null()])});let k=y.z.object({nis:y.z.union([y.z.number(),y.z.string().min(1,{message:"NIS is required!"}).max(10),y.z.nan()]),nama:y.z.string().min(1,{message:"Nama is required!"}).max(100),password:y.z.string().max(100),kelas:y.z.nativeEnum(f.rD),jurusan:y.z.nativeEnum(f.Kh)}).required(),z={page:1,limit:10,search:"",offset:0,totalPages:0,totalRows:0,totalDatas:0,siswa:null},P={nis:"",nama:"",password:"",kelas:f.rD.X,jurusan:f.Kh.TKR},__WEBPACK_DEFAULT_EXPORT__=e=>{let{register:s,handleSubmit:t,formState:{errors:a},reset:r,setValue:i,getValues:f}=(0,h.useForm)({resolver:(0,v.zodResolver)(k)}),{admin:y}=(0,w.O)(),[I,D]=(0,n.useState)(""),[C,B]=(0,n.useState)(0),[S]=(0,x.useDebounce)(I,500),[E,_]=(0,n.useState)(z),{page:R,limit:T,offset:Z,totalPages:F,totalRows:K,totalDatas:O,siswa:A}=E,[L,X]=(0,n.useState)(!1),[q,U]=(0,n.useState)(!1),[$,J]=(0,n.useState)(!1),[M,W]=(0,n.useState)(!1),handleClickOutside=e=>{let s=document.getElementById("toggle-button"),t=document.getElementById("toggle-element");!s||t?.contains(e.target)||s.contains(e.target)||X(!1)},getPemilih=async()=>{try{let e=await p.e.get("/admin/siswa",{params:{page:R,limit:T,search:S}});_({...E,offset:e.data.offset,totalPages:e.data.totalPages,totalRows:e.data.totalRows,totalDatas:e.data.totalData,siswa:e.data.result})}catch(e){(0,m.Z)(e)}},handleCreateData=async e=>{(0,u.Z)();try{await p.e.post("/admin/siswa",e),(0,c.Z)("Data Berhasil Dibuat!"),U(!1),r(P),getPemilih()}catch(e){(0,m.Z)(e)}},handleImportData=async()=>{let{value:e}=await d()(o()).fire({titleText:"Pilih File Excel",input:"file",showConfirmButton:!0,showCancelButton:!0,showCloseButton:!0,confirmButtonText:"Oke",cancelButtonText:"Cancel",confirmButtonColor:"#22c55e",cancelButtonColor:"#3b82f6",color:"#57534e",icon:"question",inputAttributes:{accept:".xlsx, .xls","aria-label":"Upload your Excel file"},customClass:{title:"font-['Poppins'] text-xl text-stone-800",popup:"font-['Inter'] text-sm font-bold",closeButton:"text-stone-600 hover:text-rose-500",confirmButton:"mx-4",cancelButton:"mx-4"}});if(!e)return(0,m.Z)({message:"Tidak Ada File yang Diupload!"});(0,u.Z)(e);let s=new FormData;s.append("file",e);try{await p.e.post("/admin/import",s),(0,c.Z)("File Berhasil Diupload!"),getPemilih()}catch(e){(0,m.Z)(e)}},handleUpdateData=async e=>{(0,u.Z)();try{await p.e.patch(`/admin/siswa/${C}`,e),(0,c.Z)("Data Berhasil Diubah!"),J(!1),U(!1),r(P),getPemilih()}catch(e){(0,m.Z)(e)}},handleDeleteData=(e,s,t)=>{(0,j.Z)(e,s,t)},handleDeleteAllData=(e,s,t)=>{(0,g.Z)(e,s,t)},H=(0,x.useDebouncedCallback)(e=>{_({...E,page:e})},200);return(0,n.useEffect)(()=>(W(!0),r(P),J(!1),U(!1),getPemilih(),W(!1),document.addEventListener("click",handleClickOutside),()=>{document.removeEventListener("click",handleClickOutside)}),[e]),(0,n.useEffect)(()=>{getPemilih()},[S,R,T]),l.jsx("div",{className:"w-full",children:q?l.jsx("div",{className:"flex justify-center items-center font-['Poppins'] bg-white rounded-2xl border shadow-md",children:(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsxs)("button",{className:"flex items-center m-4 group gap-2",onClick:e=>{e.preventDefault(),U(!1),J(!1),r(P)},children:[l.jsx(b.ArrowLeft,{size:20,color:"#57534e"}),l.jsx("a",{className:"font-['Poppins'] text-sm text-stone-600 font-bold group-hover:underline cursor-pointer",children:"Back"})]}),(0,l.jsxs)("form",{onSubmit:t($?handleUpdateData:handleCreateData),className:"w-full",autoComplete:"off",children:[l.jsx("hr",{className:"border rounded-full"}),(0,l.jsxs)("div",{className:"text-stone-600 font-bold p-4 w-full lg:grid grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"my-2 lg:my-0",children:[l.jsx("label",{htmlFor:"nis",children:"NIS :"}),l.jsx("input",{spellCheck:!1,type:"number",className:`font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full ${a.nis?"focus:border-rose-500 border-rose-500":"focus:border-stone-800"} border rounded-lg p-2`,id:"nis",...s("nis")}),a.nis&&l.jsx("p",{className:"font-['Inter'] text-rose-500 font-bold text-sm mx-1",children:a.nis.message})]}),(0,l.jsxs)("div",{className:"my-2 lg:my-0",children:[l.jsx("label",{htmlFor:"nama",children:"Nama :"}),l.jsx("input",{spellCheck:!1,type:"text",className:`font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full ${a.nama?"focus:border-rose-500 border-rose-500":"focus:border-stone-800"} border rounded-lg p-2`,id:"nama",...s("nama")}),a.nama&&l.jsx("p",{className:"font-['Inter'] text-rose-500 font-bold text-sm mx-1",children:a.nama.message})]}),(0,l.jsxs)("div",{className:"my-2 lg:my-0",children:[l.jsx("label",{htmlFor:"password",children:"Password :"}),l.jsx("input",{spellCheck:!1,type:"text",className:`font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full ${a.password?"border-rose-500":"focus:border-stone-800"} border rounded-lg p-2`,id:"password",...s("password")}),a.password&&l.jsx("p",{className:"font-['Inter'] text-rose-500 font-bold text-sm mx-1",children:a.password.message})]}),(0,l.jsxs)("div",{className:"my-2 lg:my-0",children:[l.jsx("p",{children:"Kelas :"}),(0,l.jsxs)("select",{className:"font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full focus:border-stone-800 border rounded-lg p-2 cursor-pointer",id:"kelas",...s("kelas"),children:[l.jsx("option",{value:"X",children:"X"}),l.jsx("option",{value:"XI",children:"XI"}),l.jsx("option",{value:"XII",children:"XII"})]})]}),(0,l.jsxs)("div",{className:"my-2 lg:my-0",children:[l.jsx("p",{children:"Jurusan :"}),(0,l.jsxs)("select",{className:"font-['Inter'] text-stone-600 font-bold outline-none bg-transparent my-1 w-full focus:border-stone-800 border rounded-lg p-2 cursor-pointer",id:"jurusan",...s("jurusan"),children:[l.jsx("option",{value:"TKR",children:"TKR"}),l.jsx("option",{value:"TMI",children:"TMI"}),l.jsx("option",{value:"RPL",children:"RPL"}),l.jsx("option",{value:"Kuliner",children:"Kuliner"})]})]})]}),l.jsx("hr",{className:"border rounded-full"}),l.jsx("div",{className:"flex justify-start flex-row-reverse m-4 gap-4",children:$?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{className:"bg-emerald-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-emerald-600 cursor-pointer group",type:"submit",children:[l.jsx(b.Save,{size:24,color:"#ffffff"}),l.jsx("p",{className:"font-['Poppins'] text-sm text-white block",children:"Simpan"})]}),(0,l.jsxs)("button",{className:"bg-rose-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-red-600 cursor-pointer group",onClick:e=>{e.preventDefault(),handleDeleteData(f("nama"),`/admin/siswa/${C}`,()=>{r(P),J(!1),U(!1),getPemilih()})},children:[l.jsx(b.Trash2,{size:24,color:"#ffffff"}),l.jsx("p",{className:"font-['Poppins'] text-sm text-white block",children:"Hapus"})]})]}):(0,l.jsxs)("button",{className:"bg-emerald-500 rounded-xl shadow-md p-2 border flex items-center align-middle gap-2 hover:bg-emerald-600 cursor-pointer group",type:"submit",children:[l.jsx(b.Plus,{size:24,color:"#ffffff"}),l.jsx("p",{className:"font-['Poppins'] text-sm text-white block",children:"Buat"})]})})]})]})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"Pengawas"===y.posisi?"hidden":"relative",children:[(0,l.jsxs)("div",{className:"flex justify-start gap-4 pb-2 flex-wrap",children:[(0,l.jsxs)("button",{id:"toggle-button",className:"bg-white rounded-xl shadow-md lg:pr-2 border flex items-center hover:bg-slate-50 cursor-pointer group relative",onClick:()=>{X(!L)},children:[l.jsx(b.PlusCircle,{size:32,color:"#10b981",className:"m-2"}),l.jsx("div",{className:"border-l h-8 border lg:block hidden"}),l.jsx("p",{className:"font-['Poppins'] text-sm text-stone-800 font-bold lg:block hidden m-2",children:"Tambah"}),L?l.jsx(b.ChevronLeft,{size:16,color:"#57534e",className:"hidden lg:block"}):l.jsx(b.ChevronRight,{size:16,color:"#57534e",className:"hidden lg:block"})]}),l.jsx(N.Z,{func:()=>{handleDeleteAllData(O,"/admin/siswa",()=>{_({...z,offset:0,totalRows:0,totalPages:0,totalDatas:0,siswa:[]})})}})]}),L?(0,l.jsxs)("div",{className:"animate__animated animate__slideInLeft animate__faster absolute bg-white rounded-xl border shadow-md overflow-hidden transition-transform transform",children:[(0,l.jsxs)("button",{id:"toggle-element",className:"bg-white pr-2 flex items-center align-middle hover:bg-slate-50 cursor-pointer w-full",onClick:()=>{handleImportData()},children:[l.jsx(b.Upload,{size:24,color:"#57534e",className:"m-3"}),l.jsx("div",{className:"border-l h-8 border"}),l.jsx("p",{className:"font-['Inter'] text-sm text-stone-600 font-bold block m-2",children:"Import"})]}),l.jsx("hr",{className:"border"}),(0,l.jsxs)("button",{className:"bg-white pr-2 flex items-center align-middle hover:bg-slate-50 cursor-pointer w-full",onClick:()=>{X(!1),U(!0)},children:[l.jsx(b.Plus,{size:24,color:"#57534e",className:"m-3"}),l.jsx("div",{className:"border-l h-8 border"}),l.jsx("p",{className:"font-['Inter'] text-sm text-stone-600 font-bold block m-2",children:"Buat"})]})]}):null]}),(0,l.jsxs)("div",{className:"overflow-y-auto overflow-x-auto bg-white rounded-2xl mt-2 shadow-md",children:[(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:justify-between p-2",children:[(0,l.jsxs)("form",{className:"flex items-center w-full gap-2",onSubmit:e=>{e.preventDefault()},children:[l.jsx("label",{htmlFor:"search",children:l.jsx("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:"Search"})}),l.jsx("input",{spellCheck:!1,autoComplete:"off",id:"search",name:"search",className:"flex-1 lg:flex-none font-['Inter'] text-stone-600 font-medium outline-none bg-transparent my-1 focus:border-stone-800 border rounded-lg px-2",type:"text",value:I,required:!0,onChange:e=>{_({...E,page:1}),D(e.target.value)}})]}),(0,l.jsxs)("form",{className:"flex items-center w-full lg:justify-end",children:[l.jsx("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:"Rows per page :"}),(0,l.jsxs)("select",{name:"page",className:"p-1 cursor-pointer outline-none font-['Inter'] text-sm text-stone-600 font-medium",required:!0,value:T,onChange:e=>{_({...E,page:1,limit:parseInt(e.target.value)})},children:[l.jsx("option",{value:10,children:"10"}),l.jsx("option",{value:20,children:"20"})]})]})]}),(0,l.jsxs)("table",{className:"w-full",children:[l.jsx("thead",{className:"border",children:(0,l.jsxs)("tr",{className:"bg-sky-500 text-white font-['Poppins'] font-bold text-sm lg:text-base",children:[l.jsx("th",{className:"m-2 p-1 border",children:"NIS"}),l.jsx("th",{className:"m-2 p-1 border",children:"Nama"}),l.jsx("th",{className:"m-2 p-1 border",children:"Kelas"}),l.jsx("th",{className:"m-2 p-1 border",children:"Jurusan"}),l.jsx("th",{className:"m-2 p-1 border",children:"Status"})]})}),l.jsx("tbody",{className:"border",children:null===A||M?Array(T).fill(0).map((e,s)=>(0,l.jsxs)("tr",{className:"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base",children:[l.jsx("td",{className:"m-2 p-1 border",children:l.jsx("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})}),l.jsx("td",{className:"m-2 p-1 border",children:l.jsx("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})}),l.jsx("td",{className:"m-2 p-1 border",children:l.jsx("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})}),l.jsx("td",{className:"m-2 p-1 border",children:l.jsx("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})}),l.jsx("td",{className:"m-2 p-1 border",children:l.jsx("div",{className:"h-[14px] lg:h-[18px] bg-gray-200 rounded fadeInOut w-full"})})]},s)):A.length>0?A.map(e=>(0,l.jsxs)("tr",{className:"Pengawas"===y.posisi?"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base":"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base hover:bg-slate-50 cursor-pointer",onClick:async()=>{if("Pengawas"!==y.posisi){try{let s=await p.e.get(`/admin/siswa/${e.nis}`);B(s.data.nis),i("nis",s.data.nis),i("nama",s.data.nama),i("password",s.data.password),i("kelas",s.data.kelas),i("jurusan",s.data.jurusan)}catch(e){(0,m.Z)(e)}J(!0),U(!0)}},children:[l.jsx("td",{className:"border",children:e.nis}),l.jsx("td",{className:"border",children:e.nama}),l.jsx("td",{className:"border",children:e.kelas}),l.jsx("td",{className:"border",children:e.jurusan}),e.candidatesId?l.jsx("td",{className:"border col-span-full",children:l.jsx("div",{className:"flex justify-center items-center ",children:l.jsx("p",{className:"bg-emerald-500 rounded-2xl text-white text-sm px-2",children:"Sudah"})})}):l.jsx("td",{className:"border col-span-full",children:l.jsx("div",{className:"flex justify-center items-center ",children:l.jsx("p",{className:"bg-rose-500 rounded-2xl text-white text-sm px-2",children:"Belum"})})})]},e.nis)):l.jsx("tr",{children:l.jsx("td",{colSpan:5,className:"text-center bg-white font-['Inter'] font-medium text-stone-600 text-sm lg:text-base",children:"No Data Available"})})})]}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-between p-2",children:[(0,l.jsxs)("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium bg-slate-100 rounded-full px-2 py-1",children:[Z+1,"-",T*R>K?K:T*R," of"," ",K]}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[l.jsx("button",{className:"p-2 hover:bg-slate-50 rounded-full cursor-pointer",onClick:()=>{R>1&&H(R-1)},children:l.jsx(b.ChevronLeft,{size:16,color:"#57534e"})}),l.jsx("p",{className:"font-['Poppins'] text-sm text-stone-800 font-medium",children:R}),l.jsx("button",{className:"p-2 hover:bg-slate-50 rounded-full cursor-pointer",onClick:()=>{R<F&&H(R+1)},children:l.jsx(b.ChevronRight,{size:16,color:"#57534e"})})]})]})]})]})})};a()}catch(e){a(e)}})}};