import{Q as g}from"./QPage.6971c865.js";import{v as f,aq as y,q as t,z as e,t as E,d as k,u as r,s as v,aa as q}from"./index.6aee2e30.js";import{_ as z}from"./BreadcrumbNav.15d15e07.js";import{_ as C}from"./LoaderSpinner.e73a4608.js";import{u as x}from"./useVerEntrega.7c5961eb.js";import{u as Q}from"./useActualizarRecurso.db1af633.js";import{u as S}from"./useQueryClient.esm.ef5065e6.js";import{_ as h}from"./FormEntrega.2b40c055.js";import"./useRecursoIndividual.f5a01979.js";import"./documentosApi.f9b655d1.js";import"./axios.a596eead.js";import"./useQuery.esm.76380881.js";import"./utils.esm.df383359.js";import"./useMutation.esm.2b00b620.js";import"./mutation.esm.5dbe1dbb.js";import"./QForm.f7dbdbf9.js";import"./use-dark.6d3765c8.js";import"./focus-manager.05708ea9.js";import"./QSelect.e7df04d7.js";import"./use-key-composition.138705f4.js";import"./uid.42677368.js";import"./QChip.ec11ad7b.js";import"./QItem.7d9afe8e.js";import"./QItemLabel.7e1a4be7.js";import"./QMenu.7408e287.js";import"./position-engine.9bef8d76.js";import"./selection.76539ba5.js";import"./focusout.012d42f6.js";import"./QDialog.84ddac0d.js";import"./use-prevent-scroll.46e9c667.js";import"./use-form.7a2b9d0c.js";import"./format.2bc25e5f.js";import"./QDate.90d9c8b6.js";import"./use-cache.b0833c75.js";import"./date.9286e3a5.js";import"./QPopupProxy.01b1d10f.js";import"./QInput.fb482f67.js";import"./QFile.8e16de15.js";import"./QCard.cb508ff7.js";import"./ClosePopup.7bc30a2d.js";import"./errorUtils.9be85d5d.js";import"./useObtenerDocumentos.ece55dd1.js";import"./useRecursosMultiples.c09a7537.js";const A=()=>(S().invalidateQueries({queryKey:["documentos-pendientes"],exact:!1}),Q("/entregas","listar-entrega")),B={key:2},vr=f({__name:"EditarEntrega",setup(a){const m=y(),{id:n=""}=m.params,{resource:o,isLoading:s,error:p}=x(n+""),{actalizarRecurso:c,isLoadingActualizar:u,errorServer:l}=A(),d=i=>{c(i)},_=[{label:"Entregas",icon:"assignment_turned_in",to:"listar-entrega"},{label:"Editar entrega",icon:"add_circle_outline"}];return(i,R)=>(t(),e(g,{padding:""},{default:E(()=>[k(z,{pages:_,titlePage:"Editar entrega"}),r(s)?(t(),e(C,{key:0})):r(o)?(t(),e(h,{key:1,entrega:r(o),loading:r(u),errorServer:r(l),onGuardar:d},null,8,["entrega","loading","errorServer"])):(t(),v("div",B,q(r(p)),1))]),_:1}))}});export{vr as default};
