import{Q as d}from"./QPage.30c35a64.js";import{v as f,aq as g,x as k,q as o,z as a,t as C,d as v,u as r,s as y,aa as z}from"./index.511ce7da.js";import{u as S}from"./useVerCarrera.42b76098.js";import{_ as x}from"./BreadcrumbNav.83440b84.js";import{_ as E}from"./LoaderSpinner.276bcf78.js";import{u as R}from"./useActualizarRecurso.7e28efa5.js";import{_ as b}from"./FormCarrera.90e5f257.js";import"./useRecursoIndividual.005d03b4.js";import"./documentosApi.5a915086.js";import"./axios.a596eead.js";import"./useQuery.esm.07b4cbcd.js";import"./useQueryClient.esm.18f38723.js";import"./utils.esm.c4fd8260.js";import"./useMutation.esm.1025419c.js";import"./mutation.esm.d177ca9b.js";import"./QCard.c27ef320.js";import"./use-dark.2ddafa12.js";import"./QForm.39cd2c48.js";import"./focus-manager.05708ea9.js";import"./QInput.b977ab79.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./use-form.89097415.js";import"./TouchPan.c79a76af.js";import"./touch.3df10340.js";import"./selection.93e3bd86.js";import"./format.2bc25e5f.js";import"./QResizeObserver.742b6703.js";import"./focusout.f4d95c7f.js";import"./QSelect.bbb55090.js";import"./QChip.ec7c10df.js";import"./QItem.f46130b3.js";import"./QItemLabel.07feaa09.js";import"./QMenu.97067286.js";import"./position-engine.26205469.js";import"./QDialog.d254dd3f.js";import"./use-prevent-scroll.b0ece3de.js";import"./use-panel.d05e5807.js";import"./use-cache.b0833c75.js";import"./QPopupProxy.e548b4b3.js";import"./QFile.d5529012.js";import"./QImg.6210f979.js";import"./errorUtils.9be85d5d.js";import"./useObtenerDepartamentos.aa39f08a.js";const h=()=>R("/carreras","listar-carrera"),A={key:2},Sr=f({__name:"EditarCarrera",setup(B){const e=g();k();const{id:m=""}=e.params,{resource:t,isLoading:s,error:p}=S(m+""),{actalizarRecurso:c,isLoadingActualizar:n,isSuccess:$,errorServer:u}=h(),l=i=>{c(i)},_=[{label:"Carreras",icon:"local_library",to:"listar-carrera"},{label:"Editar carrera",icon:"edit"}];return(i,q)=>(o(),a(d,{padding:""},{default:C(()=>[v(x,{pages:_,titlePage:"Editar carrera"}),r(s)?(o(),a(E,{key:0})):r(t)?(o(),a(b,{key:1,carrera:r(t),loading:r(n),errorServer:r(u),onGuardar:l},null,8,["carrera","loading","errorServer"])):(o(),y("div",A,z(r(p)),1))]),_:1}))}});export{Sr as default};
