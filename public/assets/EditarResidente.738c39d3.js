import{a as A,Q as B}from"./QCard.4818aad5.js";import{a as L,Q as U}from"./QForm.92d7546f.js";import{v as S,c as Q,r as g,q as b,z as y,x as $,aq as R,w as M,t as V,d as c,u as m,s as h,A as i,aa as x,ac as N,B as T,F as P,ar as j,ab as q,Q as D}from"./index.b0b93e3c.js";import{Q as K}from"./QPage.f47cc484.js";import{Q as z}from"./QSelect.c888b659.js";import{d as C}from"./documentosApi.f427d296.js";import{_ as O}from"./SelectEmpresa.bc48c733.js";import{_ as G}from"./SelectPeriodo.391cdb6c.js";import{g as H}from"./errorUtils.9be85d5d.js";import{u as I}from"./useVerResidente.ad1bdba6.js";import{_ as J}from"./BreadcrumbNav.fba4b1cf.js";import{_ as W}from"./LoaderSpinner.b1b399dd.js";import{u as X}from"./useQueryClient.esm.98cf75d6.js";import{u as Y}from"./useMutation.esm.16d51942.js";import"./use-dark.63c149ae.js";import"./focus-manager.05708ea9.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./QChip.d4a91c6e.js";import"./QItem.f4f583b9.js";import"./QItemLabel.933b096b.js";import"./QMenu.42e312bd.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./focusout.c03edb12.js";import"./QDialog.ca25ac9d.js";import"./use-prevent-scroll.71b3f740.js";import"./use-form.cb72d743.js";import"./format.2bc25e5f.js";import"./axios.a596eead.js";import"./useObtenerPeriodos.eb4b45ff.js";import"./useRecursosMultiples.910dad85.js";import"./useQuery.esm.ec0861c0.js";import"./utils.esm.728a0fef.js";import"./mutation.esm.2cad5aca.js";const Z=S({__name:"SelectProyObj",props:{modelValue:{},label:{}},emits:["update:modelValue"],setup(v,{emit:n}){const u=v,p=Q({get:()=>u.modelValue,set:a=>n("update:modelValue",a)}),e=g([]),l=g(!1);let o=null;function f(a,t){if(o&&(o.abort(),o=null),a.length<3){t(()=>{e.value=[],l.value=!1});return}l.value=!0,o=new AbortController,setTimeout(async()=>{try{t(async()=>{const{data:d}=await C.get("/proyectos-autocomplete",{params:{q:a}});e.value=d,l.value=!1})}catch{l.value=!1}},500)}return(a,t)=>(b(),y(z,{"use-input":"",label:a.label,modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=d=>p.value=d),loading:l.value,"option-label":"nombre",options:e.value,hint:"Escibre 3 o m\xE1s caracteres para realizar la b\xFAsqueda",onFilter:f,"emit-value":"","map-options":""},null,8,["label","modelValue","loading","options"]))}}),ee=S({__name:"SelectAsesorObject",props:{modelValue:{},label:{}},emits:["update:modelValue"],setup(v,{emit:n}){const u=v,p=Q({get:()=>u.modelValue,set:a=>n("update:modelValue",a)}),e=g([]),l=g(!1);let o=null;function f(a,t){if(o&&(o.abort(),o=null),a.length<3){t(()=>{e.value=[],l.value=!1});return}l.value=!0,o=new AbortController,setTimeout(async()=>{try{t(async()=>{const{data:d}=await C.get("/asesores-autocomplete",{params:{q:a}});e.value=d,l.value=!1})}catch{l.value=!1}},0)}return(a,t)=>(b(),y(z,{"use-input":"",modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=d=>p.value=d),label:u.label,loading:l.value,"option-label":"nombre_completo",options:e.value,hint:"Escribe 3 o m\xE1s caracteres para realizar la b\xFAsqueda",onFilter:f,"emit-value":"","map-options":""},null,8,["modelValue","label","loading","options"]))}}),ae=async v=>{const{data:n}=await C.post("residentes-actualizar",v,{headers:{"Content-Type":"multipart/form-data"}});return n},oe=v=>{const n=g(null),u=X(),p=$(),{mutate:e,isLoading:l}=Y(ae,{onSuccess:()=>{u.invalidateQueries({queryKey:["residentes"],exact:!1}),u.invalidateQueries({queryKey:["residente",v],exact:!1}),p.push({name:"listar-residente"})},onError:o=>{var f;o.response?n.value=(f=o.response)==null?void 0:f.data:n.value=o}});return{mutate:e,errorServer:n,isLoading:l}},te={key:1,class:"row"},le={class:"col-12"},se={class:"fontsize-15 text-weight-light"},re={class:"row"},ie={class:"col-xs-12 col-sm-8"},ne={class:"row q-col-gutter-md"},ue={class:"col-12"},de={class:"col-xs-12 col-sm-10"},me={class:"col-xs-12 col-sm-10"},ce={class:"col-xs-12 col-sm-10"},pe={class:"col-xs-12 col-sm-10"},_e={class:"col-xs-12 col-sm-7"},We=S({__name:"EditarResidente",setup(v){const n=R(),{id:u=""}=n.params,{isLoading:p,residente:e}=I(u+""),{mutate:l,errorServer:o,isLoading:f}=oe(u+""),a=g({id:0,nombre_completo:""}),t=g({id:0,nombre:""});M(e,(r,_)=>{r&&(a.value.id=r.asesor_id,a.value.nombre_completo=r.nombre_asesor,t.value.id=r.proyecto_id,t.value.nombre=r.proyecto)});const d=()=>{const r=new FormData;r.append("estudiante_id",u+""),r.append("area_id",e.value.area_id),r.append("proyecto_id",t.value.id+""),r.append("periodo_id",e.value.id_periodo),r.append("asesor_interno_id",a.value.id+""),l(r)},E=o.value,F=Q(()=>H(o.value)),k=[{label:"Residentes",icon:"history_edu",to:"listar-residente"},{label:"Editar residente",icon:"edit"}];return(r,_)=>(b(),y(K,{padding:""},{default:V(()=>[c(J,{pages:k,titlePage:"Editar residente"}),m(p)?(b(),y(W,{key:0})):m(e)?(b(),h("div",te,[i("div",le,[c(B,null,{default:V(()=>[c(A,null,{default:V(()=>[i("div",se," Actualizar residencia de "+x(m(e).nombre_estudiante)+" "+x(m(e).apellidos),1)]),_:1}),c(L,{onSubmit:N(d,["prevent"])},{default:V(()=>[c(A,null,{default:V(()=>[i("div",re,[i("div",ie,[i("div",ne,[i("div",ue,[m(o)?(b(),y(U,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:V(()=>{var s;return[T(x(((s=m(E))==null?void 0:s.message)||"")+" ",1),i("ul",null,[(b(!0),h(P,null,j(F.value,w=>(b(),h("li",{key:w},x(w),1))),128))])]}),_:1})):q("",!0)]),i("div",de,[c(Z,{modelValue:t.value,"onUpdate:modelValue":_[0]||(_[0]=s=>t.value=s),label:"Selecciona un proyecto"},null,8,["modelValue"])]),i("div",me,[c(ee,{modelValue:a.value,"onUpdate:modelValue":_[1]||(_[1]=s=>a.value=s),label:"Selecciona un asesor"},null,8,["modelValue"])]),i("div",ce,[c(G,{modelValue:m(e).id_periodo,"onUpdate:modelValue":_[2]||(_[2]=s=>m(e).id_periodo=s),label:"Selecciona un periodo",rules:[s=>!!s||"Selecciona un periodo"]},null,8,["modelValue","rules"])]),i("div",pe,[c(O,{modelValue:m(e).area_id,"onUpdate:modelValue":_[3]||(_[3]=s=>m(e).area_id=s),label:"Selecciona una empresa",rules:[s=>!!s||"Selecciona una empresa"]},null,8,["modelValue","rules"])]),i("div",_e,[c(D,{label:"Actualizar residencia",color:"primary",type:"submit",loading:m(f)},null,8,["loading"])])])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1})])])):q("",!0)]),_:1}))}});export{We as default};
