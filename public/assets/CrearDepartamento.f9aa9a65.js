import{Q as f}from"./QPage.30c35a64.js";import{r as d,v as g,x as v,q as c,z as D,t as y,d as u,u as s,s as C,aa as S,ab as b}from"./index.511ce7da.js";import{_ as h}from"./BreadcrumbNav.83440b84.js";import{_ as k}from"./FormDepartamento.5de883f5.js";import{d as w}from"./documentosApi.5a915086.js";import{u as x}from"./useQueryClient.esm.18f38723.js";import{u as Q}from"./useMutation.esm.1025419c.js";import"./QCard.c27ef320.js";import"./use-dark.2ddafa12.js";import"./QForm.39cd2c48.js";import"./focus-manager.05708ea9.js";import"./QInput.b977ab79.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./use-form.89097415.js";import"./errorUtils.9be85d5d.js";import"./axios.a596eead.js";import"./utils.esm.c4fd8260.js";import"./mutation.esm.d177ca9b.js";const q=async r=>{try{const{data:e}=await w.post("/departamentos",r);return e}catch(e){throw e}},B=()=>{const r=x(),e=d(null),{mutate:n,isLoading:i,error:m,isSuccess:a}=Q(q,{onSuccess:t=>{r.invalidateQueries({queryKey:["departamentos"],exact:!1}),r.setQueryData(["departamentos",t.id],t)},onError:t=>{var o;t.response?e.value=(o=t.response)==null?void 0:o.data:e.value=t}});return{crearDepartamento:n,isLoadingMutate:i,error:m,errorServer:e,isSuccess:a}},L={key:0},X=g({__name:"CrearDepartamento",setup(r){const e=v(),n=d({id:0,nombre:"",nombre_titular:"",apellidos_titular:"",created_at:new Date,updated_at:new Date}),{crearDepartamento:i,isLoadingMutate:m,error:a,errorServer:t,isSuccess:o}=B(),l=p=>{i(p),o&&e.push({name:"listar-departamento"})},_=[{label:"Departamentos",icon:"account_balance",to:"listar-departamento"},{label:"Crear departamento",icon:"add_circle_outline"}];return(p,M)=>(c(),D(f,{padding:""},{default:y(()=>[u(h,{pages:_,titlePage:"Registrar departamento"}),s(a)?(c(),C("div",L,S(s(a)),1)):b("",!0),u(k,{departamento:n.value,onGuardar:l,loading:s(m),errorServer:s(t)},null,8,["departamento","loading","errorServer"])]),_:1}))}});export{X as default};