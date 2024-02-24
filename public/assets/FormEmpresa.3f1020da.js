import{Q as U,a as p}from"./QCard.cb508ff7.js";import{Q as S,a as C}from"./QForm.f7dbdbf9.js";import{Q as d}from"./QInput.fb482f67.js";import{Q as y}from"./QSelect.e7df04d7.js";import{v as B,aM as m,c as D,r as _,q as i,z as v,t as a,d as t,A as o,B as r,aa as b,u as F,s as V,ar as k,F as w,ab as M,Q as N,ac as I}from"./index.6aee2e30.js";import{g as P}from"./errorUtils.9be85d5d.js";const T=o("div",{class:"fontsize-15 text-weight-light"},"Introduce los datos",-1),z={class:"row q-col-gutter-md"},A={class:"col-12"},G={class:"col-xs-12 col-sm-6"},L=o("span",{class:"required-star"},"*",-1),R={class:"col-xs-12 col-sm-2"},O=o("span",{class:"required-star"},"*",-1),j={class:"col-xs-12 col-sm-2"},H={class:"col-xs-12 col-sm-2"},J={class:"col-xs-12 col-sm-6"},K=o("span",{class:"required-star"},"*",-1),W={class:"col-xs-12 col-sm-2"},X=o("span",{class:"required-star"},"*",-1),Y={class:"col-xs-12 col-sm-2"},Z={class:"col-xs-12 col-sm-2"},$={class:"col-xs-12 col-sm-12"},ee={class:"col-xs-12 col-sm-6"},le=o("span",{class:"required-star"},"*",-1),se={class:"col-xs-12 col-sm-6"},oe=o("span",{class:"required-star"},"*",-1),ae={class:"col-xs-12 col-sm-7"},ce=B({__name:"FormEmpresa",props:{empresa:{},loading:{type:Boolean},errorServer:{}},emits:["guardar"],setup(g,{emit:x}){const u=g,l=m(u,"empresa"),f=m(u,"loading"),n=m(u,"errorServer"),h=n.value,q=()=>{x("guardar",l.value)},E=D(()=>P(n.value)),Q=["Industrial","Servicios","P\xFAblico","Privado","Otro"];return _(!1),_({id:0,empresa_id:"",nombre:"",asesor_externo:"",asesor_externo_puesto:"",nombre_firmara:"",nombre_firmara_puesto:""}),(te,s)=>(i(),v(U,null,{default:a(()=>[t(p,null,{default:a(()=>[T]),_:1}),t(C,{onSubmit:I(q,["prevent"])},{default:a(()=>[t(p,null,{default:a(()=>[o("div",z,[o("div",A,[n.value?(i(),v(S,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:a(()=>{var e;return[r(b(((e=F(h))==null?void 0:e.message)||"")+" ",1),o("ul",null,[(i(!0),V(w,null,k(E.value,c=>(i(),V("li",{key:c},b(c),1))),128))])]}),_:1})):M("",!0)]),o("div",G,[t(d,{modelValue:l.value.nombre,"onUpdate:modelValue":s[0]||(s[0]=e=>l.value.nombre=e),"label-slot":"",rules:[e=>!!e||"El nombre de la empresa es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:a(()=>[r(" Nombre de la empresa "),L]),_:1},8,["modelValue","rules"])]),o("div",R,[t(y,{modelValue:l.value.giro,"onUpdate:modelValue":s[1]||(s[1]=e=>l.value.giro=e),"label-slot":"",options:Q,rules:[e=>!!e||"El giro de la empresa es requerido"]},{label:a(()=>[r(" Giro "),O]),_:1},8,["modelValue","rules"])]),o("div",j,[t(d,{modelValue:l.value.rfc,"onUpdate:modelValue":s[2]||(s[2]=e=>l.value.rfc=e),"label-slot":""},{label:a(()=>[r(" RFC ")]),_:1},8,["modelValue"])]),o("div",H,[t(d,{modelValue:l.value.telefono,"onUpdate:modelValue":s[3]||(s[3]=e=>l.value.telefono=e),"label-slot":"",mask:"(###) ### - ####"},{label:a(()=>[r(" Tel\xE9fono ")]),_:1},8,["modelValue"])]),o("div",J,[t(d,{modelValue:l.value.domicilio,"onUpdate:modelValue":s[4]||(s[4]=e=>l.value.domicilio=e),"label-slot":"",rules:[e=>!!e||"El domicilio de la empresa es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres"]},{label:a(()=>[r(" Domicilio de la empresa "),K]),_:1},8,["modelValue","rules"])]),o("div",W,[t(d,{modelValue:l.value.colonia,"onUpdate:modelValue":s[5]||(s[5]=e=>l.value.colonia=e),"label-slot":"",rules:[e=>!!e||"La colonia de la empresa es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres"]},{label:a(()=>[r(" Colonia "),X]),_:1},8,["modelValue","rules"])]),o("div",Y,[t(d,{modelValue:l.value.cp,"onUpdate:modelValue":s[6]||(s[6]=e=>l.value.cp=e),"label-slot":""},{label:a(()=>[r(" Codigo postal ")]),_:1},8,["modelValue"])]),o("div",Z,[t(d,{modelValue:l.value.ciudad,"onUpdate:modelValue":s[7]||(s[7]=e=>l.value.ciudad=e),"label-slot":""},{label:a(()=>[r(" Ciudad ")]),_:1},8,["modelValue"])]),o("div",$,[t(d,{modelValue:l.value.mision,"onUpdate:modelValue":s[8]||(s[8]=e=>l.value.mision=e),"label-slot":"",type:"textarea"},{label:a(()=>[r(" Misi\xF3n ")]),_:1},8,["modelValue"])]),o("div",ee,[t(d,{modelValue:l.value.titular,"onUpdate:modelValue":s[9]||(s[9]=e=>l.value.titular=e),"label-slot":"",rules:[e=>!!e||"El nombre del titular es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres"]},{label:a(()=>[r(" Titular de la empresa "),le]),_:1},8,["modelValue","rules"])]),o("div",se,[t(d,{modelValue:l.value.titular_puesto,"onUpdate:modelValue":s[10]||(s[10]=e=>l.value.titular_puesto=e),"label-slot":"",rules:[e=>!!e||"El puesto del titular es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres"]},{label:a(()=>[r(" Puesto del titular"),oe]),_:1},8,["modelValue","rules"])]),o("div",ae,[t(N,{label:"Guardar",color:"primary",type:"submit",loading:f.value},null,8,["loading"])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}});export{ce as _};
