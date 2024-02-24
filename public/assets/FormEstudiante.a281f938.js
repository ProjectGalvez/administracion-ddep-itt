import{Q as O,a as U}from"./QCard.cb508ff7.js";import{Q as T,a as j}from"./QForm.f7dbdbf9.js";import{Q as n}from"./QInput.fb482f67.js";import{Q as b}from"./QSelect.e7df04d7.js";import{v as z,aM as V,r as w,c as G,q as c,z as x,t,d as s,A as o,B as r,aa as p,u as v,s as Q,ar as P,F as X,ab as C,Q as H,ao as F,ac as f}from"./index.6aee2e30.js";import{Q as J}from"./QFile.8e16de15.js";import{Q as K}from"./QImg.7c114304.js";import{g as W}from"./errorUtils.9be85d5d.js";import{u as Y}from"./useObtenerCarreras.bd3d3ae0.js";const Z=o("div",{class:"fontsize-15 text-weight-light"},"Introduce los datos",-1),$={class:"row"},ee={class:"col-xs-12 col-sm-8"},le={class:"row q-col-gutter-md"},oe={class:"col-12"},ae={class:"col-xs-12 col-sm-6"},se=o("span",{class:"required-star"},"*",-1),te={class:"col-xs-12 col-sm-6"},de=o("span",{class:"required-star"},"*",-1),re={class:"col-xs-12 col-sm-6"},ne=o("span",{class:"required-star"},"*",-1),ie={class:"col-xs-12 col-sm-6"},ue=o("span",{class:"required-star"},"*",-1),me={class:"col-xs-12 col-sm-6"},ce={class:"col-xs-12 col-sm-6"},pe=o("span",{class:"required-star"},"*",-1),ve={class:"col-xs-12 col-sm-6"},_e={class:"col-xs-12 col-sm-6"},ge={class:"col-xs-12 col-sm-6"},be={class:"col-xs-12 col-sm-6"},Ve={class:"col-xs-12 col-sm-6"},xe={class:"col-xs-12 col-sm-7"},fe={class:"col-xs-12 col-sm-4 q-pl-md"},he=o("div",{class:"text-subtitle1"},"Datos de usuario del estudiante:",-1),Se=o("div",{class:"text-weight-medium"},"Nombre:",-1),Ue={class:"text-weight-light text-subtitle1"},we=o("div",{class:"text-weight-medium"},"Correo:",-1),Qe={class:"text-weight-light text-subtitle1"},De=z({__name:"FormEstudiante",props:{estudiante:{},loading:{type:Boolean},errorServer:{}},emits:["guardar"],setup(E,{emit:q}){var h;const _=E,{data:y}=Y(),l=V(_,"estudiante"),I=V(_,"loading"),g=V(_,"errorServer"),k=g.value,i=w(null);let u=w(((h=l.value.user)==null?void 0:h.url_foto)||null);const N=()=>{const d=new FormData;d.append("id",l.value.id),d.append("nombre",l.value.nombre),d.append("apellidos",l.value.apellidos),d.append("numero_control",l.value.numero_control),d.append("telefono",l.value.telefono+""),d.append("email",l.value.email),d.append("carrera_id",l.value.carrera_id+""),d.append("seguridad_social",l.value.seguridad_social+""),d.append("no_seguridad_social",l.value.no_seguridad_social+""),d.append("domicilio",l.value.domicilio+""),d.append("genero",l.value.genero+""),d.append("password",l.value.password+""),i.value!=null&&d.append("url_foto",i.value[0]),q("guardar",d)},B=G(()=>W(g.value)),D=()=>{i.value&&(u.value=URL.createObjectURL(i.value[0]))},M=()=>{u.value="",i.value=null},R=d=>{var m,S;const a=d.target,e=((m=a.files)==null?void 0:m[0])||null;i.value=((S=a.files)==null?void 0:S[0])||null,e&&(u.value=URL.createObjectURL(e))},A=[{id:"M",name:"Masculino"},{id:"F",name:"Femenino"},{id:"X",name:"No binario"}],L=["IMSS","ISSSTE","OTROS"];return(d,a)=>(c(),x(O,null,{default:t(()=>[s(U,null,{default:t(()=>[Z]),_:1}),s(j,{onSubmit:f(N,["prevent"])},{default:t(()=>[s(U,null,{default:t(()=>[o("div",$,[o("div",ee,[o("div",le,[o("div",oe,[g.value?(c(),x(T,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:t(()=>{var e;return[r(p(((e=v(k))==null?void 0:e.message)||"")+" ",1),o("ul",null,[(c(!0),Q(X,null,P(B.value,m=>(c(),Q("li",{key:m},p(m),1))),128))])]}),_:1})):C("",!0)]),o("div",ae,[s(n,{modelValue:l.value.nombre,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.nombre=e),"label-slot":"",rules:[e=>!!e||"El nombre del estudiante es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:t(()=>[r(" Nombre(s): "),se]),_:1},8,["modelValue","rules"])]),o("div",te,[s(n,{modelValue:l.value.apellidos,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.apellidos=e),"label-slot":"",rules:[e=>!!e||"El nombre del estudiante es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:t(()=>[r(" Apellidos: "),de]),_:1},8,["modelValue","rules"])]),o("div",re,[s(n,{modelValue:l.value.numero_control,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.numero_control=e),"label-slot":"",rules:[e=>!!e||"El n\xFAmero de control es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:t(()=>[r(" N\xFAmero de control: "),ne]),_:1},8,["modelValue","rules"])]),o("div",ie,[s(b,{modelValue:l.value.carrera_id,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.carrera_id=e),options:v(y),"label-slot":"","option-value":"id","option-label":"nombre","emit-value":"","map-options":"",rules:[e=>!!e||"Selecciona una carrera"]},{label:t(()=>[r(" Carrera "),ue]),_:1},8,["modelValue","options","rules"])]),o("div",me,[s(n,{modelValue:l.value.telefono,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.telefono=e),"label-slot":"",mask:"(###) ### - ####"},{label:t(()=>[r(" Tel\xE9fono: ")]),_:1},8,["modelValue"])]),o("div",ce,[s(n,{modelValue:l.value.email,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value.email=e),"label-slot":"",rules:[e=>!!e||"El correo es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:t(()=>[r(" Correo electr\xF3nico: "),pe]),_:1},8,["modelValue","rules"])]),o("div",ve,[s(b,{modelValue:l.value.seguridad_social,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value.seguridad_social=e),options:L,label:"Seguridad social:","emit-value":"","map-options":""},null,8,["modelValue"])]),o("div",_e,[s(n,{modelValue:l.value.no_seguridad_social,"onUpdate:modelValue":a[7]||(a[7]=e=>l.value.no_seguridad_social=e),"label-slot":""},{label:t(()=>[r(" N\xFAmero de seguridad social: ")]),_:1},8,["modelValue"])]),o("div",ge,[s(n,{modelValue:l.value.domicilio,"onUpdate:modelValue":a[8]||(a[8]=e=>l.value.domicilio=e),"label-slot":""},{label:t(()=>[r(" Domicilio: ")]),_:1},8,["modelValue"])]),o("div",be,[s(n,{modelValue:l.value.ciudad,"onUpdate:modelValue":a[9]||(a[9]=e=>l.value.ciudad=e),"label-slot":""},{label:t(()=>[r(" Ciudad: ")]),_:1},8,["modelValue"])]),o("div",Ve,[s(b,{modelValue:l.value.genero,"onUpdate:modelValue":a[10]||(a[10]=e=>l.value.genero=e),options:A,label:"G\xE9nero","option-value":"id","option-label":"name","emit-value":"","map-options":""},null,8,["modelValue"])]),o("div",xe,[s(H,{label:"Guardar",color:"primary",type:"submit",loading:I.value},null,8,["loading"])])])]),o("div",fe,[he,Se,o("div",Ue,p(l.value.nombre)+" "+p(l.value.apellidos),1),we,o("div",Qe,p(l.value.email),1),o("div",null,[s(n,{modelValue:l.value.password,"onUpdate:modelValue":a[11]||(a[11]=e=>l.value.password=e),hint:"Si no coloca la contrase\xF1a, esta sera password","label-slot":""},{label:t(()=>[r(" Contrase\xF1a: ")]),_:1},8,["modelValue"])]),o("div",null,[s(J,{"bottom-slots":"",modelValue:i.value,"onUpdate:modelValue":[a[13]||(a[13]=e=>i.value=e),D],"label-slot":"",counter:"",multiple:"",accept:".jpg, image/*",onChange:R},{label:t(()=>[r(" Imagen de perfil: ")]),prepend:t(()=>[s(F,{name:"cloud_upload",onClick:a[12]||(a[12]=f(()=>{},["stop","prevent"]))})]),append:t(()=>[s(F,{name:"close",onClick:f(M,["stop","prevent"]),class:"cursor-pointer"},null,8,["onClick"])]),_:1},8,["modelValue"]),o("div",null,[v(u)?(c(),x(K,{key:0,src:v(u),alt:"Perfil"},null,8,["src"])):C("",!0)])])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}});export{De as _};
