import{Q as _}from"./QPage.f47cc484.js";import{v as f,aq as g,q as r,z as o,t as E,d as k,u as t,s as v,aa as z}from"./index.b0b93e3c.js";import{_ as h}from"./BreadcrumbNav.fba4b1cf.js";import{_ as y}from"./LoaderSpinner.b1b399dd.js";import{u as S}from"./useVerEstudiante.0ff2d26f.js";import{u as x}from"./useActualizarRecurso.01120d4e.js";import{_ as A}from"./FormEstudiante.d29e3376.js";import"./useRecursoIndividual.9d4b1997.js";import"./documentosApi.f427d296.js";import"./axios.a596eead.js";import"./useQuery.esm.ec0861c0.js";import"./useQueryClient.esm.98cf75d6.js";import"./utils.esm.728a0fef.js";import"./useMutation.esm.16d51942.js";import"./mutation.esm.2cad5aca.js";import"./QCard.4818aad5.js";import"./use-dark.63c149ae.js";import"./QForm.92d7546f.js";import"./focus-manager.05708ea9.js";import"./QInput.11ecb308.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./use-form.cb72d743.js";import"./QSelect.c888b659.js";import"./QChip.d4a91c6e.js";import"./QItem.f4f583b9.js";import"./QItemLabel.933b096b.js";import"./QMenu.42e312bd.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./focusout.c03edb12.js";import"./QDialog.ca25ac9d.js";import"./use-prevent-scroll.71b3f740.js";import"./format.2bc25e5f.js";import"./QFile.eb1a7647.js";import"./QImg.d87e827b.js";import"./errorUtils.9be85d5d.js";import"./useObtenerCarreras.c123908e.js";import"./useRecursosMultiples.910dad85.js";const B=()=>x("/estudiantes","listar-estudiante"),R={key:2},ft=f({__name:"EditarEstudiante",setup($){const a=g(),{id:s=""}=a.params,{resource:i,isLoading:m,error:p}=S(s+""),{actalizarRecurso:n,isLoadingActualizar:u,errorServer:c}=B(),d=e=>{n(e)},l=[{label:"Estudiantes",icon:"school",to:"listar-estudiante"},{label:"Editar estudiante",icon:"edit"}];return(e,b)=>(r(),o(_,{padding:""},{default:E(()=>[k(h,{pages:l,titlePage:"Editar estudiante"}),t(m)?(r(),o(y,{key:0})):t(i)?(r(),o(A,{key:1,estudiante:t(i),loading:t(u),errorServer:t(c),onGuardar:d},null,8,["estudiante","loading","errorServer"])):(r(),v("div",R,z(t(p)),1))]),_:1}))}});export{ft as default};
