import{x as C,v as S,aq as w,r as B,y as R,q as s,z as y,t as i,d as o,u as t,s as p,aa as g,ab as h,ac as q,A as d,Q as L,B as V}from"./index.6aee2e30.js";import{a as N,Q as $}from"./QForm.f7dbdbf9.js";import{a as E,Q as M}from"./QCard.cb508ff7.js";import{Q as P}from"./QPage.6971c865.js";import{_ as U,a as z}from"./SelectProyecto.67dafd0f.js";import{_ as D}from"./SelectEmpresa.b2bc6e0d.js";import{u as F}from"./useVerPeriodoActivo.6be1c370.js";import{_ as I}from"./LoaderSpinner.e73a4608.js";import{u as K}from"./useVerEstudiante.0e8b5ee9.js";import{_ as T}from"./BreadcrumbNav.15d15e07.js";import{d as j}from"./documentosApi.f9b655d1.js";import{u as G}from"./useQueryClient.esm.ef5065e6.js";import{u as H}from"./useMutation.esm.2b00b620.js";import"./use-dark.6d3765c8.js";import"./focus-manager.05708ea9.js";import"./QSelect.e7df04d7.js";import"./use-key-composition.138705f4.js";import"./uid.42677368.js";import"./QChip.ec11ad7b.js";import"./QItem.7d9afe8e.js";import"./QItemLabel.7e1a4be7.js";import"./QMenu.7408e287.js";import"./position-engine.9bef8d76.js";import"./selection.76539ba5.js";import"./focusout.012d42f6.js";import"./QDialog.84ddac0d.js";import"./use-prevent-scroll.46e9c667.js";import"./use-form.7a2b9d0c.js";import"./format.2bc25e5f.js";import"./useQuery.esm.76380881.js";import"./utils.esm.df383359.js";import"./useRecursoIndividual.f5a01979.js";import"./axios.a596eead.js";import"./mutation.esm.5dbe1dbb.js";const J=c=>{const m=async n=>{try{const{data:e}=await j.patch("/asignar-residencia/"+c,n);return e}catch(e){throw e}},_=C(),u=G(),{mutate:f,isLoading:r}=H(m,{onSuccess:()=>{u.invalidateQueries({queryKey:["estudiantes",c],exact:!1}),_.push({name:"ver-estudiante",params:{id:c}})}});return{mutate:f,isLoading:r}},O={key:1},W={key:0,class:"fontsize-14 text-center text-weight-light flex items-center"},X={class:"row q-col-gutter-md"},Y={class:"col-xs-12 col-sm-8"},Z={class:"col-xs-12 col-sm-8"},ee={class:"col-xs-12 col-sm-8"},oe={class:"col-xs-12 col-sm-7"},te={key:2},ae={key:3},ze=S({__name:"AsignarResidencia",setup(c){var v;const{resource:m,isLoading:_,error:u}=F(),f=w(),{id:r=""}=f.params,{resource:n}=K(r+""),e=B({area_id:null,proyecto_id:null,periodo_id:(v=m.value)==null?void 0:v.id,asesor_interno_id:null,estudiante_id:r}),{mutate:x,isLoading:b}=J(r+""),Q=async()=>{x(e.value)},k=[{label:"Estudiantes",icon:"school",to:"listar-estudiante"},{label:"Asignar residencia",icon:"add_reaction"}];return(se,a)=>{const A=R("RouterLink");return s(),y(P,{padding:""},{default:i(()=>[o(T,{pages:k,titlePage:"Asignar residencia"}),o(M,null,{default:i(()=>[o(E,null,{default:i(()=>[t(_)?(s(),y(I,{key:0})):t(m)?(s(),p("div",O,[t(n)?(s(),p("div",W," Asignar residencia a "+g(t(n).nombre)+" "+g(t(n).apellidos),1)):h("",!0),o(N,{onSubmit:q(Q,["prevent"])},{default:i(()=>[d("div",X,[d("div",Y,[o(D,{modelValue:e.value.area_id,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.area_id=l),label:"Selecciona una empresa"},null,8,["modelValue"])]),d("div",Z,[o(U,{modelValue:e.value.proyecto_id,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.proyecto_id=l),label:"Selecciona un proyecto"},null,8,["modelValue"])]),d("div",ee,[o(z,{modelValue:e.value.asesor_interno_id,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.asesor_interno_id=l),label:"Selecciona un asesor"},null,8,["modelValue"])]),d("div",oe,[o(L,{label:"Asignar residencia",color:"primary",type:"submit",loading:t(b)},null,8,["loading"])])])]),_:1},8,["onSubmit"])])):(s(),p("div",te,[o($,{"inline-actions":"",class:"text-white bg-red"},{default:i(()=>[V(" No hay un periodo activo, necesitas tener un periodo activo primero, puedes editar los periodos en la lista de periodos "),o(A,{to:{name:"listar-periodo"}},{default:i(()=>[V("Ir a periodos")]),_:1})]),_:1})])),t(u)?(s(),p("div",ae,g(t(u)),1)):h("",!0)]),_:1})]),_:1})]),_:1})}}});export{ze as default};