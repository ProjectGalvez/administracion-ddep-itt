import{Q as c}from"./QPage.f47cc484.js";import{_ as d}from"./BreadcrumbNav.fba4b1cf.js";import{a as l}from"./useCrearRecurso.bf5a0489.js";import{u}from"./useQueryClient.esm.98cf75d6.js";import{_}from"./FormPeriodo.63b6f078.js";import{v as f,r as g,q as C,z as v,t as y,d as o,u as e}from"./index.b0b93e3c.js";import"./documentosApi.f427d296.js";import"./axios.a596eead.js";import"./useMutation.esm.16d51942.js";import"./utils.esm.728a0fef.js";import"./mutation.esm.2cad5aca.js";import"./QCard.4818aad5.js";import"./use-dark.63c149ae.js";import"./QForm.92d7546f.js";import"./focus-manager.05708ea9.js";import"./QInput.11ecb308.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./use-form.cb72d743.js";import"./QDate.06156675.js";import"./use-cache.b0833c75.js";import"./date.5b7a06d0.js";import"./format.2bc25e5f.js";import"./QPopupProxy.0c297a55.js";import"./QDialog.ca25ac9d.js";import"./use-prevent-scroll.71b3f740.js";import"./focusout.c03edb12.js";import"./QMenu.42e312bd.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./QToggle.7a5e863b.js";import"./use-checkbox.b6e065a6.js";import"./ClosePopup.599d60b6.js";import"./errorUtils.9be85d5d.js";const P=()=>(u().invalidateQueries({queryKey:["periodo-activo"],exact:!1}),l("/periodos","listar-periodo")),er=f({__name:"CrearPeriodo",setup(i){const t=g({id:0,nombre:"",fecha_inicio:"",fecha_termino:"",activo:!1}),{createResource:a,isLoadingCreate:p,errorServer:m}=P(),s=r=>{a(r)},n=[{label:"Periodos",icon:"date_range",to:"listar-periodo"},{label:"Crear periodo",icon:"add_circle_outline"}];return(r,h)=>(C(),v(c,{padding:""},{default:y(()=>[o(d,{pages:n,titlePage:"Registrar periodo"}),o(_,{periodo:t.value,loading:e(p),errorServer:e(m),onGuardar:s},null,8,["periodo","loading","errorServer"])]),_:1}))}});export{er as default};
