import{Q as f}from"./QPage.30c35a64.js";import{_ as g}from"./FormAsesor.65d59291.js";import{v as y,aq as k,q as e,z as o,t as v,d as A,u as r,s as q,aa as z}from"./index.511ce7da.js";import{_ as C}from"./BreadcrumbNav.83440b84.js";import{_ as x}from"./LoaderSpinner.276bcf78.js";import{u as E}from"./useVerAsesor.c1426249.js";import{a as Q}from"./useActualizarRecurso.7e28efa5.js";import{u as S}from"./useQueryClient.esm.18f38723.js";import"./QCard.c27ef320.js";import"./use-dark.2ddafa12.js";import"./QForm.39cd2c48.js";import"./focus-manager.05708ea9.js";import"./QInput.b977ab79.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./use-form.89097415.js";import"./errorUtils.9be85d5d.js";import"./useRecursoIndividual.005d03b4.js";import"./documentosApi.5a915086.js";import"./axios.a596eead.js";import"./useQuery.esm.07b4cbcd.js";import"./utils.esm.c4fd8260.js";import"./useMutation.esm.1025419c.js";import"./mutation.esm.d177ca9b.js";const h=()=>(S().invalidateQueries({queryKey:["asesores"],exact:!1}),Q("/asesores","listar-asesor")),B={key:2},er=y({__name:"EditarAsesor",setup(t){const i=k(),{id:n=""}=i.params,{resource:s,isLoading:m,error:c}=E(n+""),{actalizarRecurso:p,isLoadingActualizar:u,errorServer:l}=h(),_=a=>{p(a)},d=[{label:"Asesores",icon:"supervisor_account",to:"listar-asesor"},{label:"Editar asesor",icon:"add_circle_outline"}];return(a,R)=>(e(),o(f,{padding:""},{default:v(()=>[A(C,{pages:d,titlePage:"Editar asesor"}),r(m)?(e(),o(x,{key:0})):r(s)?(e(),o(g,{key:1,asesor:r(s),loading:r(u),errorServer:r(l),onGuardar:_},null,8,["asesor","loading","errorServer"])):(e(),q("div",B,z(r(c)),1))]),_:1}))}});export{er as default};
