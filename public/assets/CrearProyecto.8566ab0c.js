import{Q as c}from"./QPage.f47cc484.js";import{_ as n}from"./FormProyecto.7ed0b167.js";import{_ as l}from"./BreadcrumbNav.fba4b1cf.js";import{a as u}from"./useCrearRecurso.bf5a0489.js";import{v as _,r as d,q as f,z as g,t as y,d as o,u as t}from"./index.b0b93e3c.js";import"./QCard.4818aad5.js";import"./use-dark.63c149ae.js";import"./QForm.92d7546f.js";import"./focus-manager.05708ea9.js";import"./QInput.11ecb308.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./use-form.cb72d743.js";import"./QSelect.c888b659.js";import"./QChip.d4a91c6e.js";import"./QItem.f4f583b9.js";import"./QItemLabel.933b096b.js";import"./QMenu.42e312bd.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./focusout.c03edb12.js";import"./QDialog.ca25ac9d.js";import"./use-prevent-scroll.71b3f740.js";import"./format.2bc25e5f.js";import"./errorUtils.9be85d5d.js";import"./useObtenerCarreras.c123908e.js";import"./useRecursosMultiples.910dad85.js";import"./documentosApi.f427d296.js";import"./axios.a596eead.js";import"./useQuery.esm.ec0861c0.js";import"./useQueryClient.esm.98cf75d6.js";import"./utils.esm.728a0fef.js";import"./useMutation.esm.16d51942.js";import"./mutation.esm.2cad5aca.js";const C=()=>u("/proyectos","listar-proyecto"),or=_({__name:"CrearProyecto",setup(v){const e=d({id:0,nombre:"",tipo:"",carrera_id:null}),{createResource:i,isLoadingCreate:p,errorServer:a}=C(),m=r=>{i(r)},s=[{label:"Proyectos",icon:"engineering",to:"listar-proyecto"},{label:"Crear proyecto",icon:"add_circle_outline"}];return(r,P)=>(f(),g(c,{padding:""},{default:y(()=>[o(l,{pages:s,titlePage:"Registrar proyecto"}),o(n,{proyecto:e.value,loading:t(p),errorServer:t(a),onGuardar:m},null,8,["proyecto","loading","errorServer"])]),_:1}))}});export{or as default};