import{Q as f}from"./QPage.f47cc484.js";import{v as g,aq as y,q as o,z as e,t as v,d as k,u as r,s as P,aa as q}from"./index.b0b93e3c.js";import{_ as x}from"./BreadcrumbNav.fba4b1cf.js";import{_ as z}from"./LoaderSpinner.b1b399dd.js";import{u as Q}from"./useVerPeriodo.42202856.js";import{a as C}from"./useActualizarRecurso.01120d4e.js";import{u as E}from"./useQueryClient.esm.98cf75d6.js";import{_ as S}from"./FormPeriodo.63b6f078.js";import"./useRecursoIndividual.9d4b1997.js";import"./documentosApi.f427d296.js";import"./axios.a596eead.js";import"./useQuery.esm.ec0861c0.js";import"./utils.esm.728a0fef.js";import"./useMutation.esm.16d51942.js";import"./mutation.esm.2cad5aca.js";import"./QCard.4818aad5.js";import"./use-dark.63c149ae.js";import"./QForm.92d7546f.js";import"./focus-manager.05708ea9.js";import"./QInput.11ecb308.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./use-form.cb72d743.js";import"./QDate.06156675.js";import"./use-cache.b0833c75.js";import"./date.5b7a06d0.js";import"./format.2bc25e5f.js";import"./QPopupProxy.0c297a55.js";import"./QDialog.ca25ac9d.js";import"./use-prevent-scroll.71b3f740.js";import"./focusout.c03edb12.js";import"./QMenu.42e312bd.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./QToggle.7a5e863b.js";import"./use-checkbox.b6e065a6.js";import"./ClosePopup.599d60b6.js";import"./errorUtils.9be85d5d.js";const h=()=>{const i=E();return i.invalidateQueries({queryKey:["periodo-activo"],exact:!1}),i.invalidateQueries({queryKey:["residentes"],exact:!1}),C("/periodos","listar-periodo")},A={key:2},fr=g({__name:"EditarPeriodo",setup(i){const s=y(),{id:p=""}=s.params,{resource:t,isLoading:m,error:n}=Q(p+""),{actalizarRecurso:d,isLoadingActualizar:c,errorServer:u}=h(),l=a=>{d(a)},_=[{label:"Periodos",icon:"date_range",to:"listar-periodo"},{label:"Editar periodo",icon:"add_circle_outline"}];return(a,B)=>(o(),e(f,{padding:""},{default:v(()=>[k(x,{pages:_,titlePage:"Editar periodo"}),r(m)?(o(),e(z,{key:0})):r(t)?(o(),e(S,{key:1,periodo:r(t),loading:r(c),errorServer:r(u),onGuardar:l},null,8,["periodo","loading","errorServer"])):(o(),P("div",A,q(r(n)),1))]),_:1}))}});export{fr as default};
