import{v as w,x as S,q as s,z as n,t,u as a,s as I,A as o,B as p,aa as Q,ab as k,d as e,Q as b,ap as y,as as f,_ as V,r as z,y as A,aR as B,ao as h,a2 as R,av as T,at as g,C as N,D as U}from"./index.6aee2e30.js";import{u as H,d as M,b as K,c as O,_ as j,a as G,Q as J,e as W}from"./useLogout.f4082247.js";import{Q as x,a as u}from"./QItem.7d9afe8e.js";import{a as X,Q as Y}from"./QList.6f85881e.js";import{Q as Z}from"./QImg.7c114304.js";import{Q as ee,a as te}from"./QLayout.9fff90a6.js";import{u as ae}from"./use-quasar.3d60f42c.js";import{u as C}from"./usePerfil.c6c76d34.js";import{Q as oe}from"./QMenu.7408e287.js";import{C as se}from"./ClosePopup.7bc30a2d.js";import{_ as re}from"./LoaderSpinner.e73a4608.js";import{d as ie}from"./documentosApi.f9b655d1.js";import{u as ne}from"./useQuery.esm.76380881.js";import"./QResizeObserver.f0e963a8.js";import"./use-prevent-scroll.46e9c667.js";import"./focusout.012d42f6.js";import"./focus-manager.05708ea9.js";import"./use-dark.6d3765c8.js";import"./TouchPan.91aa389d.js";import"./touch.3df10340.js";import"./selection.76539ba5.js";import"./format.2bc25e5f.js";import"./QToggle.8df908e5.js";import"./use-checkbox.d57b3bde.js";import"./use-form.7a2b9d0c.js";import"./useQueryClient.esm.ef5065e6.js";import"./utils.esm.df383359.js";import"./position-engine.9bef8d76.js";import"./axios.a596eead.js";const le={key:1,class:"row no-wrap q-pa-md"},ce={class:"column"},ue=o("div",{class:"text-h6 q-mb-md"},"Configuraci\xF3n",-1),de={key:0},_e={class:"text-subtitle1"},me={class:"text-center q-mt-xs"},pe={class:"column items-center"},fe=["src"],ve={class:"text-subtitle1 q-mt-md q-mb-xs"},he=w({__name:"MenuUser",setup(r){const i=S(),{logout:d}=H(),v=()=>{i.push({name:"perfil-estudiante"})},{user:c,isLoading:_}=C();return(m,F)=>(s(),n(oe,null,{default:t(()=>[a(_)?(s(),n(re,{key:0})):a(c)?(s(),I("div",le,[o("div",ce,[ue,a(c).roles?(s(),I("div",de,[p(" Rol: "),o("span",_e,Q(a(c).roles[0].name||""),1)])):k("",!0),o("div",me,[e(b,{label:"Perfil",color:"accent",onClick:v})])]),e(X,{vertical:"",inset:"",class:"q-mx-lg"}),o("div",pe,[e(y,{size:"72px"},{default:t(()=>[o("img",{src:a(c).url_foto},null,8,fe)]),_:1}),o("div",ve,Q(a(c).name),1),f(e(b,{color:"primary",label:"Cerrar sesi\xF3n",push:"",size:"sm",onClick:a(d)},null,8,["onClick"]),[[se]])])])):k("",!0)]),_:1}))}}),ge=["src"],xe=w({__name:"AvatarUsuario",setup(r){const{user:i,isLoading:d}=C();return(v,c)=>(s(),n(b,{round:"",flat:"",loading:a(d)},{default:t(()=>[e(y,{size:"30px"},{default:t(()=>{var _;return[o("img",{src:(_=a(i))==null?void 0:_.url_foto},null,8,ge)]}),_:1}),e(he)]),_:1},8,["loading"]))}}),Qe=async()=>{const{data:r}=await ie.get("estudiante-carrera");return r},be=()=>{const{isLoading:r,isError:i,data:d}=ne({queryKey:["estudiante-carrera"],queryFn:Qe});return{isLoading:r,isError:i,data:d}};const ye=r=>(N("data-v-415a793c"),r=r(),U(),r),ke=ye(()=>o("img",{src:"/src/assets/logo-180x180.png",width:"45"},null,-1)),we={class:"q-gutter-sm row items-center no-wrap"},Ce={class:"absolute-bottom bg-transparent"},Le=["src"],qe={class:"text-weight-bold"},De=w({__name:"EstudianteLayout",setup(r){ae();const i=z(!1),d=S(),v=()=>{i.value=!i.value},{data:c,isLoading:_}=be(),{user:m,isLoading:F}=C(),E=()=>{d.push("/")};return($e,L)=>{const P=A("router-view");return s(),n(ee,{view:"hHh LpR lFf"},{default:t(()=>[a(_)?k("",!0):(s(),n(M,{key:0,elevated:"",class:"text-white",style:B({backgroundColor:a(c).color||"#FFF"})},{default:t(()=>[e(G,null,{default:t(()=>{var l;return[e(b,{dense:"",flat:"",round:"",icon:"menu",onClick:v}),e(K,{onClick:E,class:"inicio"},{default:t(()=>[e(y,null,{default:t(()=>[ke]),_:1}),p(" DDEP ")]),_:1}),e(O),o("div",we,[e(j),e(xe,{avatar:(l=a(m))==null?void 0:l.url_foto},null,8,["avatar"])])]}),_:1})]),_:1},8,["style"])),e(W,{modelValue:i.value,"onUpdate:modelValue":L[0]||(L[0]=l=>i.value=l),"show-if-above":"",width:280,breakpoint:400},{default:t(()=>{var l;return[e(J,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:t(()=>[e(Y,{padding:""},{default:t(()=>[f((s(),n(x,{clickable:"",to:{name:"estudiante-inicio"}},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(h,{name:"home"})]),_:1}),e(u,null,{default:t(()=>[p(" Inicio ")]),_:1})]),_:1})),[[g]]),f((s(),n(x,{clickable:"",to:{name:"documentos-entregados"}},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(h,{name:"fact_check"})]),_:1}),e(u,null,{default:t(()=>[p(" Documentos entregados ")]),_:1})]),_:1})),[[g]]),f((s(),n(x,{clickable:"",to:{name:"estudiante-formatos"}},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(h,{name:"description"})]),_:1}),e(u,null,{default:t(()=>[p(" Formatos ")]),_:1})]),_:1})),[[g]]),f((s(),n(x,{clickable:"",to:{name:"acerca-de"}},{default:t(()=>[e(u,{avatar:""},{default:t(()=>[e(h,{name:"info"})]),_:1}),e(u,null,{default:t(()=>[p(" Acerca de ")]),_:1})]),_:1})),[[g]])]),_:1})]),_:1}),e(Z,{class:"absolute-top",src:(l=a(m))==null?void 0:l.url_portada,style:{height:"150px"}},{default:t(()=>{var q,D;return[o("div",Ce,[e(y,{size:"56px",class:"q-mb-sm"},{default:t(()=>{var $;return[o("img",{src:($=a(m))==null?void 0:$.url_foto},null,8,Le)]}),_:1}),o("div",qe,Q((q=a(m))==null?void 0:q.name),1),o("div",null,Q((D=a(m))==null?void 0:D.email),1)])]}),_:1},8,["src"])]}),_:1},8,["modelValue"]),e(te,null,{default:t(()=>[e(P,null,{default:t(({Component:l})=>[e(R,{name:"fade"},{default:t(()=>[(s(),n(T(l)))]),_:2},1024)]),_:1})]),_:1})]),_:1})}}});var rt=V(De,[["__scopeId","data-v-415a793c"]]);export{rt as default};
