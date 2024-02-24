import{a as M,Q as P}from"./QForm.39cd2c48.js";import{Q as N}from"./QSelect.bbb55090.js";import{r as w,x as U,v as Y,aq as K,c as R,q as c,z as V,t,d as o,u as n,s as f,aa as g,ab as C,ac as D,A as l,B as v,ar as $,F as z,ao as k,as as I,Q as E}from"./index.511ce7da.js";import{Q as T}from"./QDate.127338c4.js";import{Q as j}from"./QPopupProxy.e548b4b3.js";import{Q as O}from"./QInput.b977ab79.js";import{Q as G}from"./QFile.d5529012.js";import{a as H,Q as J}from"./QCard.c27ef320.js";import{Q as W}from"./QPage.30c35a64.js";import{C as X}from"./ClosePopup.41b92e43.js";import{u as Z}from"./useVerEstudiante.5556637f.js";import{_ as ee}from"./LoaderSpinner.276bcf78.js";import{_ as te}from"./BreadcrumbNav.83440b84.js";import{u as oe}from"./useObtenerPendientesEstudiante.e520497e.js";import{d as ae}from"./date.0cc50602.js";import{d as se}from"./documentosApi.5a915086.js";import{u as re}from"./useQueryClient.esm.18f38723.js";import{u as ne}from"./useMutation.esm.1025419c.js";import{g as le}from"./errorUtils.9be85d5d.js";import"./use-dark.2ddafa12.js";import"./focus-manager.05708ea9.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./QChip.ec7c10df.js";import"./QItem.f46130b3.js";import"./QItemLabel.07feaa09.js";import"./QMenu.97067286.js";import"./position-engine.26205469.js";import"./selection.93e3bd86.js";import"./focusout.f4d95c7f.js";import"./QDialog.d254dd3f.js";import"./use-prevent-scroll.b0ece3de.js";import"./use-form.89097415.js";import"./format.2bc25e5f.js";import"./use-cache.b0833c75.js";import"./useRecursoIndividual.005d03b4.js";import"./useQuery.esm.07b4cbcd.js";import"./utils.esm.c4fd8260.js";import"./axios.a596eead.js";import"./mutation.esm.d177ca9b.js";const ie=Q=>{const _=re(),i=w(null),u=U(),y=async m=>{try{const{data:r}=await se.post("/entregas",m,{headers:{"Content-Type":"multipart/form-data"}});return r}catch(r){throw r}},{mutate:b,isLoading:h,error:s,isSuccess:d,status:x}=ne(y,{onSuccess:()=>{_.invalidateQueries({queryKey:["entregas"],exact:!1}),_.invalidateQueries({queryKey:["entrega-por-residente",Q],exact:!1}),_.invalidateQueries({queryKey:["documentos-pendientes"],exact:!1}),u.push({name:"ver-estudiante",params:{id:Q}})},onError:m=>{var r;m.response?i.value=(r=m.response)==null?void 0:r.data:i.value=m}});return{createEntrega:b,isLoadingCreate:h,error:s,errorServer:i,isSuccess:d,status:x}},ue={key:1},de={key:0,class:"fontsize-14 text-center text-weight-light flex items-center"},me={class:"row q-col-gutter-md"},ce={class:"col-12"},pe={class:"col-xs-12 col-sm-8"},_e=l("span",{class:"required-star"},"*",-1),fe={class:"col-xs-12 col-sm-8"},ge=l("span",{class:"required-star"},"*",-1),ve={class:"row items-center justify-end"},Qe={class:"col-xs-12 col-sm-8"},ye={class:"col-xs-12 col-sm-7"},nt=Y({__name:"AgregarDocumento",setup(Q){var S;const _=K(),{id:i=""}=_.params,{resource:u,isLoading:y}=Z(i+""),{data:b,isLoading:h}=oe(i+""),s=w({estudiante_id:(S=u.value)==null?void 0:S.id,documento_id:"",url_documento:null,fecha_entrega:"",estado:!0}),d=w(ae.formatDate(new Date,"YYYY/MM/DD")),{createEntrega:x,isLoadingCreate:m,errorServer:r}=ie(i+""),L=r.value,F=()=>{const p=new FormData;p.append("estudiante_id",i+""),p.append("documento_id",s.value.documento_id+""),p.append("fecha_entrega",d.value+""),s.value.url_documento&&p.append("url_documento",s.value.url_documento[0]),x(p)},A=R(()=>le(r.value)),B=[{label:"Estudiantes",icon:"school",to:"listar-estudiante"},{label:"Agregar documentos",icon:"assignment_turned_in"}];return(p,a)=>(c(),V(W,{padding:""},{default:t(()=>[o(te,{pages:B,titlePage:"Agregar documento"}),o(J,null,{default:t(()=>[o(H,null,{default:t(()=>[n(y)?(c(),V(ee,{key:0})):n(u)?(c(),f("div",ue,[n(u)?(c(),f("div",de," Asignar documentos de "+g(n(u).nombre)+" "+g(n(u).apellidos),1)):C("",!0)])):C("",!0),o(M,{onSubmit:D(F,["prevent"])},{default:t(()=>[l("div",me,[l("div",ce,[n(r)?(c(),V(P,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:t(()=>{var e;return[v(g(((e=n(L))==null?void 0:e.message)||"")+" ",1),l("ul",null,[(c(!0),f(z,null,$(A.value,q=>(c(),f("li",{key:q},g(q),1))),128))])]}),_:1})):C("",!0)]),l("div",pe,[o(N,{modelValue:s.value.documento_id,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value.documento_id=e),options:n(b),"option-value":"id","option-label":"nombre","emit-value":"","map-options":"","label-slot":"",rules:[e=>!!e||"Selecciona un documeto"],loading:n(h)},{label:t(()=>[v(" Documento: "),_e]),_:1},8,["modelValue","options","rules","loading"])]),l("div",fe,[o(O,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value=e),mask:"date",rules:[e=>!!e||"La fecha es requerida"],"label-slot":""},{label:t(()=>[v(" Fecha de entrega "),ge]),append:t(()=>[o(k,{name:"event",class:"cursor-pointer"},{default:t(()=>[o(j,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:t(()=>[o(T,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value=e)},{default:t(()=>[l("div",ve,[I(o(E,{label:"Close",color:"primary",flat:""},null,512),[[X]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"])]),l("div",Qe,[o(G,{"bottom-slots":"",modelValue:s.value.url_documento,"onUpdate:modelValue":a[5]||(a[5]=e=>s.value.url_documento=e),"label-slot":"",counter:"",multiple:"",accept:".doc, .docx, .pdf"},{label:t(()=>[v(" Formato llenado: ")]),prepend:t(()=>[o(k,{name:"cloud_upload",onClick:a[3]||(a[3]=D(()=>{},["stop","prevent"]))})]),append:t(()=>[o(k,{name:"close",onClick:a[4]||(a[4]=D(e=>s.value.url_documento=null,["stop","prevent"])),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),l("div",ye,[o(E,{label:"Agregar documento",color:"primary",type:"submit",loading:n(m)},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1}))}});export{nt as default};
