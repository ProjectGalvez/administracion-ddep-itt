import{Q as _}from"./QPage.30c35a64.js";import{v as f,aq as g,q as o,z as t,t as E,d as k,u as r,s as v,aa as z}from"./index.511ce7da.js";import{_ as y}from"./BreadcrumbNav.83440b84.js";import{_ as S}from"./LoaderSpinner.276bcf78.js";import{u as h}from"./useVerEmpresa.d0d87a7e.js";import{a as x}from"./useActualizarRecurso.7e28efa5.js";import{_ as A}from"./FormEmpresa.40ed52d5.js";import"./useRecursoIndividual.005d03b4.js";import"./documentosApi.5a915086.js";import"./axios.a596eead.js";import"./useQuery.esm.07b4cbcd.js";import"./useQueryClient.esm.18f38723.js";import"./utils.esm.c4fd8260.js";import"./useMutation.esm.1025419c.js";import"./mutation.esm.d177ca9b.js";import"./QCard.c27ef320.js";import"./use-dark.2ddafa12.js";import"./QForm.39cd2c48.js";import"./focus-manager.05708ea9.js";import"./QInput.b977ab79.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./use-form.89097415.js";import"./QSelect.bbb55090.js";import"./QChip.ec7c10df.js";import"./QItem.f46130b3.js";import"./QItemLabel.07feaa09.js";import"./QMenu.97067286.js";import"./position-engine.26205469.js";import"./selection.93e3bd86.js";import"./focusout.f4d95c7f.js";import"./QDialog.d254dd3f.js";import"./use-prevent-scroll.b0ece3de.js";import"./format.2bc25e5f.js";import"./errorUtils.9be85d5d.js";const B=()=>x("/empresas","listar-empresa"),R={key:2},ur=f({__name:"EditarEmpresa",setup($){const i=g(),{id:m=""}=i.params,{resource:e,isLoading:s,error:p}=h(m+""),{actalizarRecurso:n,isLoadingActualizar:c,errorServer:u}=B(),l=a=>{n(a)},d=[{label:"Empresas",icon:"domain",to:"listar-empresa"},{label:"Editar empresa",icon:"edit"}];return(a,b)=>(o(),t(_,{padding:""},{default:E(()=>[k(y,{pages:d,titlePage:"Editar periodo"}),r(s)?(o(),t(S,{key:0})):r(e)?(o(),t(A,{key:1,empresa:r(e),loading:r(c),errorServer:r(u),onGuardar:l},null,8,["empresa","loading","errorServer"])):(o(),v("div",R,z(r(p)),1))]),_:1}))}});export{ur as default};
