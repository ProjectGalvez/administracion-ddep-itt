import{Q as y,a as p}from"./QCard.c27ef320.js";import{Q as B,a as E}from"./QForm.39cd2c48.js";import{Q as r}from"./QInput.b977ab79.js";import{v as S,aM as i,c as k,q as n,z as v,t,d as a,A as l,B as m,aa as _,u as q,s as g,ar as w,F as C,ab as N,Q as U,ac as D}from"./index.511ce7da.js";import{g as F}from"./errorUtils.9be85d5d.js";const M=l("div",{class:"fontsize-15 text-weight-light"},"Introduce los datos",-1),A={class:"row q-col-gutter-md"},T={class:"col-12"},z={class:"col-xs-12 col-sm-6"},I=l("span",{class:"required-star"},"*",-1),L={class:"col-xs-12 col-sm-6"},G=l("span",{class:"required-star"},"*",-1),R={class:"col-xs-12 col-sm-6"},j={class:"col-xs-12 col-sm-6"},H={class:"col-xs-12 col-sm-6"},J={class:"col-xs-12 col-sm-7"},Z=S({__name:"FormAsesor",props:{asesor:{},loading:{type:Boolean},errorServer:{}},emits:["guardar"],setup(V,{emit:b}){const d=V,s=i(d,"asesor"),f=i(d,"loading"),u=i(d,"errorServer"),x=u.value,h=()=>{b("guardar",s.value)},Q=k(()=>F(u.value));return(K,o)=>(n(),v(y,null,{default:t(()=>[a(p,null,{default:t(()=>[M]),_:1}),a(E,{onSubmit:D(h,["prevent"])},{default:t(()=>[a(p,null,{default:t(()=>[l("div",A,[l("div",T,[u.value?(n(),v(B,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:t(()=>{var e;return[m(_(((e=q(x))==null?void 0:e.message)||"")+" ",1),l("ul",null,[(n(!0),g(C,null,w(Q.value,c=>(n(),g("li",{key:c},_(c),1))),128))])]}),_:1})):N("",!0)]),l("div",z,[a(r,{modelValue:s.value.nombre,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value.nombre=e),"label-slot":"",rules:[e=>!!e||"El nombre del asesor es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:t(()=>[m(" Nombre del asesor "),I]),_:1},8,["modelValue","rules"])]),l("div",L,[a(r,{modelValue:s.value.apellidos,"onUpdate:modelValue":o[1]||(o[1]=e=>s.value.apellidos=e),"label-slot":"",rules:[e=>!!e||"Los apellidos son requeridos",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:t(()=>[m(" Apellidos "),G]),_:1},8,["modelValue","rules"])]),l("div",R,[a(r,{modelValue:s.value.titulo,"onUpdate:modelValue":o[2]||(o[2]=e=>s.value.titulo=e),label:"T\xEDtulo o carrera"},null,8,["modelValue"])]),l("div",j,[a(r,{modelValue:s.value.email,"onUpdate:modelValue":o[3]||(o[3]=e=>s.value.email=e),label:"Email"},null,8,["modelValue"])]),l("div",H,[a(r,{modelValue:s.value.telefono,"onUpdate:modelValue":o[4]||(o[4]=e=>s.value.telefono=e),label:"Tel\xE9fono",mask:"(###) ### - ####"},null,8,["modelValue"])]),l("div",J,[a(U,{label:"Guardar",color:"primary",type:"submit",loading:f.value},null,8,["loading"])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}});export{Z as _};
