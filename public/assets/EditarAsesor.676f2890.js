import{Q as f}from"./QPage.6971c865.js";import{_ as g}from"./FormAsesor.5a43d4db.js";import{v as y,aq as k,q as e,z as o,t as v,d as A,u as r,s as q,aa as z}from"./index.6aee2e30.js";import{_ as C}from"./BreadcrumbNav.15d15e07.js";import{_ as x}from"./LoaderSpinner.e73a4608.js";import{u as E}from"./useVerAsesor.65881d8b.js";import{a as Q}from"./useActualizarRecurso.db1af633.js";import{u as S}from"./useQueryClient.esm.ef5065e6.js";import"./QCard.cb508ff7.js";import"./use-dark.6d3765c8.js";import"./QForm.f7dbdbf9.js";import"./focus-manager.05708ea9.js";import"./QInput.fb482f67.js";import"./use-key-composition.138705f4.js";import"./uid.42677368.js";import"./use-form.7a2b9d0c.js";import"./errorUtils.9be85d5d.js";import"./useRecursoIndividual.f5a01979.js";import"./documentosApi.f9b655d1.js";import"./axios.a596eead.js";import"./useQuery.esm.76380881.js";import"./utils.esm.df383359.js";import"./useMutation.esm.2b00b620.js";import"./mutation.esm.5dbe1dbb.js";const h=()=>(S().invalidateQueries({queryKey:["asesores"],exact:!1}),Q("/asesores","listar-asesor")),B={key:2},er=y({__name:"EditarAsesor",setup(t){const i=k(),{id:n=""}=i.params,{resource:s,isLoading:m,error:c}=E(n+""),{actalizarRecurso:p,isLoadingActualizar:u,errorServer:l}=h(),_=a=>{p(a)},d=[{label:"Asesores",icon:"supervisor_account",to:"listar-asesor"},{label:"Editar asesor",icon:"add_circle_outline"}];return(a,R)=>(e(),o(f,{padding:""},{default:v(()=>[A(C,{pages:d,titlePage:"Editar asesor"}),r(m)?(e(),o(x,{key:0})):r(s)?(e(),o(g,{key:1,asesor:r(s),loading:r(u),errorServer:r(l),onGuardar:_},null,8,["asesor","loading","errorServer"])):(e(),q("div",B,z(r(c)),1))]),_:1}))}});export{er as default};
