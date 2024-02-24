import{a as M,Q as P}from"./QForm.92d7546f.js";import{Q as R}from"./QSelect.c888b659.js";import{r as w,x as N,v as U,aq as Y,c as $,q as c,z as x,t as o,d as t,u as n,s as f,aa as g,ab as C,ac as D,A as l,B as v,ar as z,F as I,ao as k,as as K,Q as L}from"./index.b0b93e3c.js";import{Q as T}from"./QDate.06156675.js";import{Q as j}from"./QPopupProxy.0c297a55.js";import{Q as O}from"./QInput.11ecb308.js";import{Q as G}from"./QFile.eb1a7647.js";import{a as H,Q as J}from"./QCard.4818aad5.js";import{Q as W}from"./QPage.f47cc484.js";import{C as X}from"./ClosePopup.599d60b6.js";import{u as Z}from"./useVerEstudiante.0ff2d26f.js";import{_ as ee}from"./LoaderSpinner.b1b399dd.js";import{_ as oe}from"./BreadcrumbNav.fba4b1cf.js";import{u as te}from"./useObtenerPendientesEstudiante.d3300115.js";import{d as ae}from"./date.5b7a06d0.js";import{d as se}from"./documentosApi.f427d296.js";import{u as re}from"./useQueryClient.esm.98cf75d6.js";import{u as ne}from"./useMutation.esm.16d51942.js";import{g as le}from"./errorUtils.9be85d5d.js";import"./use-dark.63c149ae.js";import"./focus-manager.05708ea9.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./QChip.d4a91c6e.js";import"./QItem.f4f583b9.js";import"./QItemLabel.933b096b.js";import"./QMenu.42e312bd.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./focusout.c03edb12.js";import"./QDialog.ca25ac9d.js";import"./use-prevent-scroll.71b3f740.js";import"./use-form.cb72d743.js";import"./format.2bc25e5f.js";import"./use-cache.b0833c75.js";import"./useRecursoIndividual.9d4b1997.js";import"./useQuery.esm.ec0861c0.js";import"./utils.esm.728a0fef.js";import"./axios.a596eead.js";import"./mutation.esm.2cad5aca.js";const ie=Q=>{const _=re(),i=w(null),u=N(),b=async m=>{try{const{data:r}=await se.post("/entregas",m,{headers:{"Content-Type":"multipart/form-data"}});return r}catch(r){throw r}},{mutate:y,isLoading:h,error:s,isSuccess:d,status:V}=ne(b,{onSuccess:()=>{_.invalidateQueries({queryKey:["entregas"],exact:!1}),_.invalidateQueries({queryKey:["entrega-por-residente",Q],exact:!1}),u.push({name:"ver-residente",params:{id:Q}})},onError:m=>{var r;m.response?i.value=(r=m.response)==null?void 0:r.data:i.value=m}});return{createEntrega:y,isLoadingCreate:h,error:s,errorServer:i,isSuccess:d,status:V}},ue={key:1},de={key:0,class:"fontsize-14 text-center text-weight-light flex items-center"},me={class:"row q-col-gutter-md"},ce={class:"col-12"},pe={class:"col-xs-12 col-sm-8"},_e=l("span",{class:"required-star"},"*",-1),fe={class:"col-xs-12 col-sm-8"},ge=l("span",{class:"required-star"},"*",-1),ve={class:"row items-center justify-end"},Qe={class:"col-xs-12 col-sm-8"},be={class:"col-xs-12 col-sm-7"},no=U({__name:"AgregarDocumentoResidente",setup(Q){var S;const _=Y(),{id:i=""}=_.params,{resource:u,isLoading:b}=Z(i+""),{data:y,isLoading:h}=te(i+""),s=w({estudiante_id:(S=u.value)==null?void 0:S.id,documento_id:"",url_documento:null,fecha_entrega:"",estado:!0}),d=w(ae.formatDate(new Date,"YYYY/MM/DD")),{createEntrega:V,isLoadingCreate:m,errorServer:r}=ie(i+""),E=r.value,F=()=>{const p=new FormData;p.append("estudiante_id",i+""),p.append("documento_id",s.value.documento_id+""),p.append("fecha_entrega",d.value+""),s.value.url_documento&&p.append("url_documento",s.value.url_documento[0]),V(p)},A=$(()=>le(r.value)),B=[{label:"Residentes",icon:"school",to:"listar-residente"},{label:"Agregar documentos",icon:"assignment_turned_in"}];return(p,a)=>(c(),x(W,{padding:""},{default:o(()=>[t(oe,{pages:B,titlePage:"Agregar documento"}),t(J,null,{default:o(()=>[t(H,null,{default:o(()=>[n(b)?(c(),x(ee,{key:0})):n(u)?(c(),f("div",ue,[n(u)?(c(),f("div",de," Asignar documentos de "+g(n(u).nombre)+" "+g(n(u).apellidos),1)):C("",!0)])):C("",!0),t(M,{onSubmit:D(F,["prevent"])},{default:o(()=>[l("div",me,[l("div",ce,[n(r)?(c(),x(P,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:o(()=>{var e;return[v(g(((e=n(E))==null?void 0:e.message)||"")+" ",1),l("ul",null,[(c(!0),f(I,null,z(A.value,q=>(c(),f("li",{key:q},g(q),1))),128))])]}),_:1})):C("",!0)]),l("div",pe,[t(R,{modelValue:s.value.documento_id,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value.documento_id=e),options:n(y),"option-value":"id","option-label":"nombre","emit-value":"","map-options":"","label-slot":"",rules:[e=>!!e||"Selecciona un documeto"],loading:n(h)},{label:o(()=>[v(" Documento: "),_e]),_:1},8,["modelValue","options","rules","loading"])]),l("div",fe,[t(O,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value=e),mask:"date",rules:[e=>!!e||"La fecha es requerida"],"label-slot":""},{label:o(()=>[v(" Fecha de entrega "),ge]),append:o(()=>[t(k,{name:"event",class:"cursor-pointer"},{default:o(()=>[t(j,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:o(()=>[t(T,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value=e)},{default:o(()=>[l("div",ve,[K(t(L,{label:"Close",color:"primary",flat:""},null,512),[[X]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"])]),l("div",Qe,[t(G,{"bottom-slots":"",modelValue:s.value.url_documento,"onUpdate:modelValue":a[5]||(a[5]=e=>s.value.url_documento=e),"label-slot":"",counter:"",multiple:"",accept:".doc, .docx, .pdf"},{label:o(()=>[v(" Formato llenado: ")]),prepend:o(()=>[t(k,{name:"cloud_upload",onClick:a[3]||(a[3]=D(()=>{},["stop","prevent"]))})]),append:o(()=>[t(k,{name:"close",onClick:a[4]||(a[4]=D(e=>s.value.url_documento=null,["stop","prevent"])),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),l("div",be,[t(L,{label:"Agregar documento",color:"primary",type:"submit",loading:n(m)},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1}))}});export{no as default};
