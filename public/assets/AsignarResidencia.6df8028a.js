import{x as C,v as S,aq as w,r as B,y as R,q as s,z as y,t as i,d as o,u as t,s as p,aa as g,ab as h,ac as q,A as d,Q as L,B as V}from"./index.511ce7da.js";import{a as N,Q as $}from"./QForm.39cd2c48.js";import{a as E,Q as M}from"./QCard.c27ef320.js";import{Q as P}from"./QPage.30c35a64.js";import{_ as U,a as z}from"./SelectProyecto.80087e87.js";import{_ as D}from"./SelectEmpresa.a67c7420.js";import{u as F}from"./useVerPeriodoActivo.bb7a0fcd.js";import{_ as I}from"./LoaderSpinner.276bcf78.js";import{u as K}from"./useVerEstudiante.5556637f.js";import{_ as T}from"./BreadcrumbNav.83440b84.js";import{d as j}from"./documentosApi.5a915086.js";import{u as G}from"./useQueryClient.esm.18f38723.js";import{u as H}from"./useMutation.esm.1025419c.js";import"./use-dark.2ddafa12.js";import"./focus-manager.05708ea9.js";import"./QSelect.bbb55090.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./QChip.ec7c10df.js";import"./QItem.f46130b3.js";import"./QItemLabel.07feaa09.js";import"./QMenu.97067286.js";import"./position-engine.26205469.js";import"./selection.93e3bd86.js";import"./focusout.f4d95c7f.js";import"./QDialog.d254dd3f.js";import"./use-prevent-scroll.b0ece3de.js";import"./use-form.89097415.js";import"./format.2bc25e5f.js";import"./useQuery.esm.07b4cbcd.js";import"./utils.esm.c4fd8260.js";import"./useRecursoIndividual.005d03b4.js";import"./axios.a596eead.js";import"./mutation.esm.d177ca9b.js";const J=c=>{const m=async n=>{try{const{data:e}=await j.patch("/asignar-residencia/"+c,n);return e}catch(e){throw e}},_=C(),u=G(),{mutate:f,isLoading:r}=H(m,{onSuccess:()=>{u.invalidateQueries({queryKey:["estudiantes",c],exact:!1}),_.push({name:"ver-estudiante",params:{id:c}})}});return{mutate:f,isLoading:r}},O={key:1},W={key:0,class:"fontsize-14 text-center text-weight-light flex items-center"},X={class:"row q-col-gutter-md"},Y={class:"col-xs-12 col-sm-8"},Z={class:"col-xs-12 col-sm-8"},ee={class:"col-xs-12 col-sm-8"},oe={class:"col-xs-12 col-sm-7"},te={key:2},ae={key:3},ze=S({__name:"AsignarResidencia",setup(c){var v;const{resource:m,isLoading:_,error:u}=F(),f=w(),{id:r=""}=f.params,{resource:n}=K(r+""),e=B({area_id:null,proyecto_id:null,periodo_id:(v=m.value)==null?void 0:v.id,asesor_interno_id:null,estudiante_id:r}),{mutate:x,isLoading:b}=J(r+""),Q=async()=>{x(e.value)},k=[{label:"Estudiantes",icon:"school",to:"listar-estudiante"},{label:"Asignar residencia",icon:"add_reaction"}];return(se,a)=>{const A=R("RouterLink");return s(),y(P,{padding:""},{default:i(()=>[o(T,{pages:k,titlePage:"Asignar residencia"}),o(M,null,{default:i(()=>[o(E,null,{default:i(()=>[t(_)?(s(),y(I,{key:0})):t(m)?(s(),p("div",O,[t(n)?(s(),p("div",W," Asignar residencia a "+g(t(n).nombre)+" "+g(t(n).apellidos),1)):h("",!0),o(N,{onSubmit:q(Q,["prevent"])},{default:i(()=>[d("div",X,[d("div",Y,[o(D,{modelValue:e.value.area_id,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.area_id=l),label:"Selecciona una empresa"},null,8,["modelValue"])]),d("div",Z,[o(U,{modelValue:e.value.proyecto_id,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.proyecto_id=l),label:"Selecciona un proyecto"},null,8,["modelValue"])]),d("div",ee,[o(z,{modelValue:e.value.asesor_interno_id,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.asesor_interno_id=l),label:"Selecciona un asesor"},null,8,["modelValue"])]),d("div",oe,[o(L,{label:"Asignar residencia",color:"primary",type:"submit",loading:t(b)},null,8,["loading"])])])]),_:1},8,["onSubmit"])])):(s(),p("div",te,[o($,{"inline-actions":"",class:"text-white bg-red"},{default:i(()=>[V(" No hay un periodo activo, necesitas tener un periodo activo primero, puedes editar los periodos en la lista de periodos "),o(A,{to:{name:"listar-periodo"}},{default:i(()=>[V("Ir a periodos")]),_:1})]),_:1})])),t(u)?(s(),p("div",ae,g(t(u)),1)):h("",!0)]),_:1})]),_:1})]),_:1})}}});export{ze as default};