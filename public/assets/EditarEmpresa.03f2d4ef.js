import{Q as _}from"./QPage.f47cc484.js";import{v as f,aq as g,q as o,z as t,t as E,d as k,u as r,s as v,aa as z}from"./index.b0b93e3c.js";import{_ as y}from"./BreadcrumbNav.fba4b1cf.js";import{_ as S}from"./LoaderSpinner.b1b399dd.js";import{u as h}from"./useVerEmpresa.3b1c3e9a.js";import{a as x}from"./useActualizarRecurso.01120d4e.js";import{_ as A}from"./FormEmpresa.8e9f5652.js";import"./useRecursoIndividual.9d4b1997.js";import"./documentosApi.f427d296.js";import"./axios.a596eead.js";import"./useQuery.esm.ec0861c0.js";import"./useQueryClient.esm.98cf75d6.js";import"./utils.esm.728a0fef.js";import"./useMutation.esm.16d51942.js";import"./mutation.esm.2cad5aca.js";import"./QCard.4818aad5.js";import"./use-dark.63c149ae.js";import"./QForm.92d7546f.js";import"./focus-manager.05708ea9.js";import"./QInput.11ecb308.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./use-form.cb72d743.js";import"./QSelect.c888b659.js";import"./QChip.d4a91c6e.js";import"./QItem.f4f583b9.js";import"./QItemLabel.933b096b.js";import"./QMenu.42e312bd.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./focusout.c03edb12.js";import"./QDialog.ca25ac9d.js";import"./use-prevent-scroll.71b3f740.js";import"./format.2bc25e5f.js";import"./errorUtils.9be85d5d.js";const B=()=>x("/empresas","listar-empresa"),R={key:2},ur=f({__name:"EditarEmpresa",setup($){const i=g(),{id:m=""}=i.params,{resource:e,isLoading:s,error:p}=h(m+""),{actalizarRecurso:n,isLoadingActualizar:c,errorServer:u}=B(),l=a=>{n(a)},d=[{label:"Empresas",icon:"domain",to:"listar-empresa"},{label:"Editar empresa",icon:"edit"}];return(a,b)=>(o(),t(_,{padding:""},{default:E(()=>[k(y,{pages:d,titlePage:"Editar periodo"}),r(s)?(o(),t(S,{key:0})):r(e)?(o(),t(A,{key:1,empresa:r(e),loading:r(c),errorServer:r(u),onGuardar:l},null,8,["empresa","loading","errorServer"])):(o(),v("div",R,z(r(p)),1))]),_:1}))}});export{ur as default};