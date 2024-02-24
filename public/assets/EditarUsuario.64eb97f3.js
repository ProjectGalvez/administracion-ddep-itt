import{Q as z}from"./QPage.6971c865.js";import{v as B,aM as S,r as q,c as D,q as u,z as _,t as s,d as l,A as r,B as d,aa as k,u as n,s as y,ar as N,F as A,ab as M,ao as I,ac as U,Q as $,aq as j,x as P}from"./index.6aee2e30.js";import{_ as G}from"./BreadcrumbNav.15d15e07.js";import{_ as O}from"./LoaderSpinner.e73a4608.js";import{u as T}from"./useVerUser.98f3aef3.js";import{u as H}from"./useActualizarRecurso.db1af633.js";import{Q as J,a as R}from"./QCard.cb508ff7.js";import{Q as K,a as W}from"./QForm.f7dbdbf9.js";import{Q as w}from"./QInput.fb482f67.js";import{Q as X}from"./QSelect.e7df04d7.js";import{Q as Y}from"./QFile.8e16de15.js";import{Q as Z}from"./QImg.7c114304.js";import{g as ee}from"./errorUtils.9be85d5d.js";import"./useRecursoIndividual.f5a01979.js";import"./documentosApi.f9b655d1.js";import"./axios.a596eead.js";import"./useQuery.esm.76380881.js";import"./useQueryClient.esm.ef5065e6.js";import"./utils.esm.df383359.js";import"./useMutation.esm.2b00b620.js";import"./mutation.esm.5dbe1dbb.js";import"./use-dark.6d3765c8.js";import"./focus-manager.05708ea9.js";import"./use-key-composition.138705f4.js";import"./uid.42677368.js";import"./use-form.7a2b9d0c.js";import"./QChip.ec11ad7b.js";import"./QItem.7d9afe8e.js";import"./QItemLabel.7e1a4be7.js";import"./QMenu.7408e287.js";import"./position-engine.9bef8d76.js";import"./selection.76539ba5.js";import"./focusout.012d42f6.js";import"./QDialog.84ddac0d.js";import"./use-prevent-scroll.46e9c667.js";import"./format.2bc25e5f.js";const oe=()=>H("/users","listar-usuario"),ae=r("div",{class:"fontsize-15 text-weight-light"},"Introduce los datos",-1),re={class:"row q-col-gutter-md"},se={class:"col-12"},le={class:"col-xs-12 col-sm-4"},te=r("span",{class:"required-star"},"*",-1),ie={class:"col-xs-12 col-sm-4"},ne=r("span",{class:"required-star"},"*",-1),ue={class:"col-xs-12 col-sm-4"},me=r("span",{class:"required-star"},"*",-1),de={class:"col-xs-12 col-sm-4"},ce=r("span",{class:"required-star"},"*",-1),pe={class:"col-xs-12 col-sm-4"},ve={class:"col-xs-12 col-sm-7"},_e="Si no se ingresa la contrase\xF1a, esta seguir\xE1 siendo la misma.",ge=B({__name:"FormEditarUser",props:{user:{},loading:{type:Boolean},errorServer:{}},emits:["guardar"],setup(C,{emit:f}){const c=C,o=S(c,"user"),b=S(c,"loading"),p=S(c,"errorServer"),x=p.value;let m=q(o.value.url_foto);const i=q(null),V=()=>{const t=new FormData;t.append("id",o.value.id+""),t.append("name",o.value.name),t.append("email",o.value.email),t.append("rol",o.value.rol+""),i.value&&t.append("url_foto",i.value[0]),o.value.password!=""&&t.append("password",o.value.password+""),f("guardar",t)},Q=D(()=>ee(p.value)),h=()=>{i.value&&(m.value=URL.createObjectURL(i.value[0]))},g=()=>{m.value="",i.value=null},E=t=>{var v,F;const a=t.target,e=((v=a.files)==null?void 0:v[0])||null;i.value=((F=a.files)==null?void 0:F[0])||null,e&&(m.value=URL.createObjectURL(e))},L=[{id:"admin",nombre:"admin"},{id:"capturista",nombre:"capturista"}];return(t,a)=>(u(),_(J,null,{default:s(()=>[l(R,null,{default:s(()=>[ae]),_:1}),l(W,{onSubmit:U(V,["prevent"])},{default:s(()=>[l(R,null,{default:s(()=>[r("div",re,[r("div",se,[p.value?(u(),_(K,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:s(()=>{var e;return[d(k(((e=n(x))==null?void 0:e.message)||"")+" ",1),r("ul",null,[(u(!0),y(A,null,N(Q.value,v=>(u(),y("li",{key:v},k(v),1))),128))])]}),_:1})):M("",!0)]),r("div",le,[l(w,{modelValue:o.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value.name=e),"label-slot":"",rules:[e=>!!e||"El nombre del usuario es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:s(()=>[d(" Nombre completo del usuario "),te]),_:1},8,["modelValue","rules"])]),r("div",ie,[l(w,{modelValue:o.value.email,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value.email=e),"label-slot":"",rules:[e=>!!e||"El correo es requerido",e=>e.length>3&&e.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:s(()=>[d(" Correo electr\xF3nico "),ne]),_:1},8,["modelValue","rules"])]),r("div",ue,[l(w,{modelValue:o.value.password,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value.password=e),"label-slot":"",type:"password",hint:_e},{label:s(()=>[d(" Contrase\xF1a "),me]),_:1},8,["modelValue"])]),r("div",de,[l(X,{modelValue:o.value.rol,"onUpdate:modelValue":a[3]||(a[3]=e=>o.value.rol=e),options:L,"label-slot":"","option-value":"id","option-label":"nombre","emit-value":"","map-options":"",rules:[e=>!!e||"Selecciona un rol"]},{label:s(()=>[d(" Selecciona rol "),ce]),_:1},8,["modelValue","rules"])]),r("div",pe,[l(Y,{"bottom-slots":"",modelValue:i.value,"onUpdate:modelValue":[a[5]||(a[5]=e=>i.value=e),h],"label-slot":"",counter:"",multiple:"",accept:".jpg, image/*",onChange:E},{label:s(()=>[d(" Imagen de perfil: ")]),prepend:s(()=>[l(I,{name:"cloud_upload",onClick:a[4]||(a[4]=U(()=>{},["stop","prevent"]))})]),append:s(()=>[l(I,{name:"close",onClick:U(g,["stop","prevent"]),class:"cursor-pointer"},null,8,["onClick"])]),_:1},8,["modelValue"]),r("div",null,[l(Z,{src:n(m),alt:"Perfil"},null,8,["src"])])]),r("div",ve,[l($,{label:"Guardar",color:"primary",type:"submit",loading:b.value},null,8,["loading"])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}}),fe={key:2},eo=B({__name:"EditarUsuario",setup(C){const f=j();P();const{id:c=""}=f.params,{resource:o,isLoading:b,error:p}=T(c+""),{actalizarRecurso:x,isLoadingActualizar:m,isSuccess:i,errorServer:V}=oe(),Q=g=>{x(g)},h=[{label:"Usuarios",icon:"people",to:"listar-usuario"},{label:"Editar usuario",icon:"edit"}];return(g,E)=>(u(),_(z,{padding:""},{default:s(()=>[l(G,{pages:h,titlePage:"Editar usuario"}),n(b)?(u(),_(O,{key:0})):n(o)?(u(),_(ge,{key:1,user:n(o),loading:n(m),errorServer:n(V),onGuardar:Q},null,8,["user","loading","errorServer"])):(u(),y("div",fe,k(n(p)),1))]),_:1}))}});export{eo as default};
