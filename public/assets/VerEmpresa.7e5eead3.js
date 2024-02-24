import{Q as R}from"./QPage.f47cc484.js";import{v as S,aM as V,c as j,q as d,z as h,t as n,d as l,A as e,B as y,aa as i,u as m,s as b,ar as G,F as q,ab as F,Q as $,ac as H,r as C,as as L,aU as z,aV as B,ao as D,_ as J,C as O,D as W,aq as X}from"./index.b0b93e3c.js";import{_ as Y}from"./BreadcrumbNav.fba4b1cf.js";import{_ as I}from"./LoaderSpinner.b1b399dd.js";import{u as Z}from"./useVerEmpresa.3b1c3e9a.js";import{Q as w,a as E}from"./QCard.4818aad5.js";import{Q as M}from"./QDialog.ca25ac9d.js";import{C as T}from"./ClosePopup.599d60b6.js";import{Q as ee,a as ae}from"./QForm.92d7546f.js";import{Q as k}from"./QInput.11ecb308.js";import{g as le}from"./errorUtils.9be85d5d.js";import{d as A}from"./documentosApi.f427d296.js";import{u as U}from"./useQueryClient.esm.98cf75d6.js";import{u as P}from"./useMutation.esm.16d51942.js";import{Q as re}from"./QBtnGroup.70024cb3.js";import{Q as oe}from"./QMarkupTable.b45aab0d.js";import{_ as se}from"./DialogEliminar.7a03cb45.js";import{u as te}from"./useRecursoIndividual.9d4b1997.js";import{u as ne}from"./useQuery.esm.ec0861c0.js";import"./use-dark.63c149ae.js";import"./use-prevent-scroll.71b3f740.js";import"./focusout.c03edb12.js";import"./focus-manager.05708ea9.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./use-form.cb72d743.js";import"./axios.a596eead.js";import"./utils.esm.728a0fef.js";import"./mutation.esm.2cad5aca.js";import"./QCardActions.47971319.js";const ue=e("div",{class:"fontsize-15 text-weight-light"},"Introduce los datos",-1),ie={class:"row q-col-gutter-md"},de={class:"col-12"},me={class:"col-xs-12 col-sm-12"},ce=e("span",{class:"required-star"},"*",-1),_e={class:"col-xs-12 col-sm-6"},pe={class:"col-xs-12 col-sm-6"},ve={class:"col-xs-12 col-sm-6"},fe={class:"col-xs-12 col-sm-6"},ge={class:"col-xs-12 col-sm-7"},K=S({__name:"FormArea",props:{area:{},loading:{type:Boolean},errorServer:{}},emits:["guardar"],setup(u,{emit:_}){const o=u,r=V(o,"area"),c=V(o,"loading"),p=V(o,"errorServer"),x=p.value,v=()=>{_("guardar",r.value)},f=j(()=>le(p.value));return(Q,t)=>(d(),h(w,null,{default:n(()=>[l(E,null,{default:n(()=>[ue]),_:1}),l(ae,{onSubmit:H(v,["prevent"])},{default:n(()=>[l(E,null,{default:n(()=>[e("div",ie,[e("div",de,[p.value?(d(),h(ee,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:n(()=>{var a;return[y(i(((a=m(x))==null?void 0:a.message)||"")+" ",1),e("ul",null,[(d(!0),b(q,null,G(f.value,s=>(d(),b("li",{key:s},i(s),1))),128))])]}),_:1})):F("",!0)]),e("div",me,[l(k,{modelValue:r.value.nombre,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value.nombre=a),"label-slot":"",rules:[a=>!!a||"El nombre de la empresa es requerido",a=>a.length>3&&a.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:n(()=>[y(" Nombre del \xE1rea "),ce]),_:1},8,["modelValue","rules"])]),e("div",_e,[l(k,{modelValue:r.value.asesor_externo,"onUpdate:modelValue":t[1]||(t[1]=a=>r.value.asesor_externo=a),"label-slot":""},{label:n(()=>[y(" Nombre del asesor externo ")]),_:1},8,["modelValue"])]),e("div",pe,[l(k,{modelValue:r.value.asesor_externo_puesto,"onUpdate:modelValue":t[2]||(t[2]=a=>r.value.asesor_externo_puesto=a),"label-slot":""},{label:n(()=>[y(" Puesto del asesor externo ")]),_:1},8,["modelValue"])]),e("div",ve,[l(k,{modelValue:r.value.nombre_firmara,"onUpdate:modelValue":t[3]||(t[3]=a=>r.value.nombre_firmara=a),"label-slot":""},{label:n(()=>[y(" Nombre del que firmar\xE1 ")]),_:1},8,["modelValue"])]),e("div",fe,[l(k,{modelValue:r.value.nombre_firmara_puesto,"onUpdate:modelValue":t[4]||(t[4]=a=>r.value.nombre_firmara_puesto=a),"label-slot":""},{label:n(()=>[y(" Puesto del que firmar\xE1 ")]),_:1},8,["modelValue"])]),e("div",ge,[l($,{label:"Guardar",color:"primary",type:"submit",loading:c.value},null,8,["loading"])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}}),xe=S({__name:"BotonNuevaArea",props:{empresa_id:{}},setup(u){const o=V(u,"empresa_id"),r=C(!1),c=C({id:0,empresa_id:o.value,nombre:"",asesor_externo:"",asesor_externo_puesto:"",nombre_firmara:"",nombre_firmara_puesto:""}),p=async t=>{try{const{data:a}=await A.post("/areas",t);return a}catch(a){throw a}},x=U(),v=C(null),{mutate:f,isLoading:Q}=P(p,{onSuccess:()=>{x.invalidateQueries({queryKey:["areas"],exact:!1}),r.value=!1},onError:t=>{var a;t.response?v.value=(a=t.response)==null?void 0:a.data:v.value=t}});return(t,a)=>(d(),b(q,null,[l($,{label:"Nueva \xE1rea en esta empresa",color:"primary",onClick:a[0]||(a[0]=s=>r.value=!0)}),l(M,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=s=>r.value=s)},{default:n(()=>[l(w,null,{default:n(()=>[l(K,{area:c.value,loading:m(Q),errorServer:v.value,onGuardar:m(f)},null,8,["area","loading","errorServer","onGuardar"]),l(E,null,{default:n(()=>[L(l($,{label:"Cancelar",color:"negative"},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),he=u=>te("/areas",u,["areas",u],{staleTime:1e3*60*60}),ye=S({__name:"BotonEditarArea",props:{area_id:{}},setup(u){const o=V(u,"area_id"),r=C(!1),{resource:c,isLoading:p}=he(o.value+""),x=async a=>{try{const{data:s}=await A.patch("/areas/"+a.id,a);return s}catch(s){throw s}},v=U(),f=C(null),{mutate:Q,isLoading:t}=P(x,{onSuccess:()=>{v.invalidateQueries({queryKey:["areas"],exact:!1}),r.value=!1},onError:a=>{var s;a.response?f.value=(s=a.response)==null?void 0:s.data:f.value=a}});return(a,s)=>(d(),b(q,null,[l($,{size:"sm",color:"secondary",push:"",glossy:"",icon:"edit",onClick:s[0]||(s[0]=N=>r.value=!0)}),l(M,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=N=>r.value=N)},{default:n(()=>[l(w,null,{default:n(()=>[m(p)?(d(),h(I,{key:0})):m(c)?(d(),h(K,{key:1,area:m(c),loading:m(t),errorServer:f.value,onGuardar:m(Q)},null,8,["area","loading","errorServer","onGuardar"])):F("",!0),l(E,null,{default:n(()=>[L(l($,{label:"Cancelar",color:"negative"},null,512),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),be=async u=>{try{B.show({delay:500,message:"Eliminando..."}),await A.delete("/areas/"+u),B.hide()}catch(_){throw B.hide(),_}},Ve=u=>{const _=U(),{mutate:o}=P(be,{onSuccess:()=>{z.create({message:"Se elimin\xF3 con \xE9xito",color:"positive",position:"top-right",type:"positive"}),_.invalidateQueries({queryKey:["areas",u]})},onError:r=>{z.create({message:r+"",color:"negative",position:"top-right",type:"negative"})}});return{eliminarArea:o}},Ce={key:1},Ee=e("thead",null,[e("tr",null,[e("th",null,"Nombre"),e("th",null,"Asesor externo"),e("th",null,"Nombre del que firmar\xE1"),e("th",null,"Acciones")])],-1),Qe=S({__name:"TablaAreas",props:{empresa_id:{}},setup(u){const o=V(u,"empresa_id"),r=C(!1),c=C(0),p=async t=>{const{data:a}=await A.get("/areas-empresa/"+t);return a},{isLoading:x,data:v}=ne({queryKey:["areas",o.value],queryFn:()=>p(o.value),keepPreviousData:!0,staleTime:1e3*60*60}),{eliminarArea:f}=Ve(o.value),Q=t=>{r.value=!0,c.value=t};return(t,a)=>m(x)?(d(),h(I,{key:0})):m(v)?(d(),b("div",Ce,[l(se,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s),"recurso-id":c.value,onEliminar:m(f)},null,8,["modelValue","recurso-id","onEliminar"]),l(oe,null,{default:n(()=>[Ee,e("tbody",null,[(d(!0),b(q,null,G(m(v),s=>(d(),b("tr",{key:s.id},[e("td",null,i(s.nombre),1),e("td",null,[e("div",null,i(s.asesor_externo),1),e("div",null,[e("small",null,i(s.asesor_externo_puesto),1)])]),e("td",null,[e("div",null,i(s.nombre_firmara),1),e("div",null,[e("small",null,i(s.nombre_firmara_puesto),1)])]),e("td",null,[l(re,{push:""},{default:n(()=>[l(ye,{area_id:s.id},null,8,["area_id"]),l($,{size:"sm",color:"negative",push:"",glossy:"",icon:"delete",onClick:N=>Q(s.id)},null,8,["onClick"])]),_:2},1024)])]))),128))])]),_:1})])):F("",!0)}});const g=u=>(O("data-v-cd96bcfa"),u=u(),W(),u),$e={class:"row"},Se={class:"col-xs-12 col-md-12"},ke={class:"fontsize-14 text-center text-weight-light flex items-center"},qe={class:"flex justify-star items-center"},we=g(()=>e("td",null,"Giro:",-1)),Ae=g(()=>e("td",null,"RFC:",-1)),Ne=g(()=>e("td",null,"Domicilio:",-1)),Be=g(()=>e("td",null,"Colinia:",-1)),Fe=g(()=>e("td",null,"C\xF3digo postal:",-1)),Ie=g(()=>e("td",null,"Ciudad:",-1)),Ue=g(()=>e("td",null,"Tel\xE9fono:",-1)),Pe=g(()=>e("td",null,"Misi\xF3n:",-1)),ze=g(()=>e("td",null,"Titular:",-1)),De=g(()=>e("td",null,"Puesto del titular:",-1)),Ge={class:"fontsize-14 text-center text-weight-light flex items-center"},Le={class:"col-xs-12 col-sm-12"},Me={class:"col-xs-12 col-sm-12"},Te=S({__name:"CardEmpresa",props:{empresa:{}},setup(u){const o=V(u,"empresa");return(r,c)=>(d(),h(w,null,{default:n(()=>[e("div",$e,[e("div",Se,[l(E,null,{default:n(()=>[e("div",ke,[l(D,{name:"date_range",class:"q-mr-xs"}),y(" "+i(o.value.nombre),1)])]),_:1}),l(E,null,{default:n(()=>[e("div",qe,[e("table",null,[e("tr",null,[we,e("td",null,i(o.value.giro),1)]),e("tr",null,[Ae,e("td",null,i(o.value.rfc),1)]),e("tr",null,[Ne,e("td",null,i(o.value.domicilio),1)]),e("tr",null,[Be,e("td",null,i(o.value.colonia),1)]),e("tr",null,[Fe,e("td",null,i(o.value.cp),1)]),e("tr",null,[Ie,e("td",null,i(o.value.ciudad),1)]),e("tr",null,[Ue,e("td",null,i(o.value.telefono),1)]),e("tr",null,[Pe,e("td",null,i(o.value.mision),1)]),e("tr",null,[ze,e("td",null,i(o.value.titular),1)]),e("tr",null,[De,e("td",null,i(o.value.titular_puesto),1)])])])]),_:1}),l(E,null,{default:n(()=>[e("div",Ge,[l(D,{name:"date_range",class:"q-mr-xs"}),y(" \xC1reas de la empresa ")]),e("div",null,[e("div",Le,[l(xe,{empresa_id:o.value.id},null,8,["empresa_id"])]),e("div",Me,[l(Qe,{empresa_id:o.value.id},null,8,["empresa_id"])])])]),_:1})])])]),_:1}))}});var Ke=J(Te,[["__scopeId","data-v-cd96bcfa"]]);const Re={key:2},Va=S({__name:"VerEmpresa",setup(u){const _=X(),{id:o=""}=_.params,{resource:r,isLoading:c,error:p}=Z(o+""),x=[{label:"Empresas",icon:"domain",to:"listar-empresa"},{label:"Ver empresa",icon:"visibility"}];return(v,f)=>(d(),h(R,{padding:""},{default:n(()=>[l(Y,{pages:x,titlePage:"Ver empresa"}),m(c)?(d(),h(I,{key:0})):m(r)?(d(),h(Ke,{key:1,empresa:m(r)},null,8,["empresa"])):(d(),b("div",Re,i(m(p)),1))]),_:1}))}});export{Va as default};
