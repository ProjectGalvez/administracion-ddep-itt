import{Q as c}from"./QPage.6971c865.js";import{_ as n}from"./FormProyecto.30fdd53e.js";import{_ as l}from"./BreadcrumbNav.15d15e07.js";import{a as u}from"./useCrearRecurso.c98ef555.js";import{v as _,r as d,q as f,z as g,t as y,d as o,u as t}from"./index.6aee2e30.js";import"./QCard.cb508ff7.js";import"./use-dark.6d3765c8.js";import"./QForm.f7dbdbf9.js";import"./focus-manager.05708ea9.js";import"./QInput.fb482f67.js";import"./use-key-composition.138705f4.js";import"./uid.42677368.js";import"./use-form.7a2b9d0c.js";import"./QSelect.e7df04d7.js";import"./QChip.ec11ad7b.js";import"./QItem.7d9afe8e.js";import"./QItemLabel.7e1a4be7.js";import"./QMenu.7408e287.js";import"./position-engine.9bef8d76.js";import"./selection.76539ba5.js";import"./focusout.012d42f6.js";import"./QDialog.84ddac0d.js";import"./use-prevent-scroll.46e9c667.js";import"./format.2bc25e5f.js";import"./errorUtils.9be85d5d.js";import"./useObtenerCarreras.bd3d3ae0.js";import"./useRecursosMultiples.c09a7537.js";import"./documentosApi.f9b655d1.js";import"./axios.a596eead.js";import"./useQuery.esm.76380881.js";import"./useQueryClient.esm.ef5065e6.js";import"./utils.esm.df383359.js";import"./useMutation.esm.2b00b620.js";import"./mutation.esm.5dbe1dbb.js";const C=()=>u("/proyectos","listar-proyecto"),or=_({__name:"CrearProyecto",setup(v){const e=d({id:0,nombre:"",tipo:"",carrera_id:null}),{createResource:i,isLoadingCreate:p,errorServer:a}=C(),m=r=>{i(r)},s=[{label:"Proyectos",icon:"engineering",to:"listar-proyecto"},{label:"Crear proyecto",icon:"add_circle_outline"}];return(r,P)=>(f(),g(c,{padding:""},{default:y(()=>[o(l,{pages:s,titlePage:"Registrar proyecto"}),o(n,{proyecto:e.value,loading:t(p),errorServer:t(a),onGuardar:m},null,8,["proyecto","loading","errorServer"])]),_:1}))}});export{or as default};