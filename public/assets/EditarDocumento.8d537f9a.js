import{Q as f}from"./QPage.30c35a64.js";import{v as g,aq as y,q as r,z as t,t as k,d as v,u as o,s as D,aa as q}from"./index.511ce7da.js";import{u as z}from"./useVerDocumento.07d18461.js";import{_ as C}from"./BreadcrumbNav.83440b84.js";import{_ as x}from"./LoaderSpinner.276bcf78.js";import{u as E}from"./useActualizarRecurso.7e28efa5.js";import{u as Q}from"./useQueryClient.esm.18f38723.js";import{_ as S}from"./FormDocumento.d85e03a5.js";import"./useRecursoIndividual.005d03b4.js";import"./documentosApi.5a915086.js";import"./axios.a596eead.js";import"./useQuery.esm.07b4cbcd.js";import"./utils.esm.c4fd8260.js";import"./useMutation.esm.1025419c.js";import"./mutation.esm.d177ca9b.js";import"./QCard.c27ef320.js";import"./use-dark.2ddafa12.js";import"./QForm.39cd2c48.js";import"./focus-manager.05708ea9.js";import"./QInput.b977ab79.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./use-form.89097415.js";import"./QDate.127338c4.js";import"./use-cache.b0833c75.js";import"./date.0cc50602.js";import"./format.2bc25e5f.js";import"./QPopupProxy.e548b4b3.js";import"./QDialog.d254dd3f.js";import"./use-prevent-scroll.b0ece3de.js";import"./focusout.f4d95c7f.js";import"./QMenu.97067286.js";import"./position-engine.26205469.js";import"./selection.93e3bd86.js";import"./QFile.d5529012.js";import"./QChip.ec7c10df.js";import"./QBtnGroup.79c77c2f.js";import"./QTooltip.e2728da7.js";import"./QItem.f46130b3.js";import"./use-fullscreen.b6949ea7.js";import"./QToggle.098b013d.js";import"./use-checkbox.c3671c6f.js";import"./ClosePopup.41b92e43.js";import"./errorUtils.9be85d5d.js";const h=()=>(Q().invalidateQueries({queryKey:["documentos-pendientes"],exact:!1}),E("/documentos","listar-documento")),A={key:2},zo=g({__name:"EditarDocumento",setup(m){const a=y(),{id:s=""}=a.params,{resource:e,isLoading:p,error:n}=z(s+""),{actalizarRecurso:c,isLoadingActualizar:u,errorServer:d}=h(),l=i=>{c(i)},_=[{label:"Documentos",icon:"description",to:"listar-documento"},{label:"Editar carrera",icon:"add_circle_outline"}];return(i,B)=>(r(),t(f,{padding:""},{default:k(()=>[v(C,{pages:_,titlePage:"Editar documento"}),o(p)?(r(),t(x,{key:0})):o(e)?(r(),t(S,{key:1,documento:o(e),loading:o(u),errorServer:o(d),onGuardar:l},null,8,["documento","loading","errorServer"])):(r(),D("div",A,q(o(n)),1))]),_:1}))}});export{zo as default};
