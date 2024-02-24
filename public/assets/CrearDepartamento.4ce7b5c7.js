import{Q as f}from"./QPage.6971c865.js";import{r as d,v as g,x as v,q as c,z as D,t as y,d as u,u as s,s as C,aa as S,ab as b}from"./index.6aee2e30.js";import{_ as h}from"./BreadcrumbNav.15d15e07.js";import{_ as k}from"./FormDepartamento.642c64a6.js";import{d as w}from"./documentosApi.f9b655d1.js";import{u as x}from"./useQueryClient.esm.ef5065e6.js";import{u as Q}from"./useMutation.esm.2b00b620.js";import"./QCard.cb508ff7.js";import"./use-dark.6d3765c8.js";import"./QForm.f7dbdbf9.js";import"./focus-manager.05708ea9.js";import"./QInput.fb482f67.js";import"./use-key-composition.138705f4.js";import"./uid.42677368.js";import"./use-form.7a2b9d0c.js";import"./errorUtils.9be85d5d.js";import"./axios.a596eead.js";import"./utils.esm.df383359.js";import"./mutation.esm.5dbe1dbb.js";const q=async r=>{try{const{data:e}=await w.post("/departamentos",r);return e}catch(e){throw e}},B=()=>{const r=x(),e=d(null),{mutate:n,isLoading:i,error:m,isSuccess:a}=Q(q,{onSuccess:t=>{r.invalidateQueries({queryKey:["departamentos"],exact:!1}),r.setQueryData(["departamentos",t.id],t)},onError:t=>{var o;t.response?e.value=(o=t.response)==null?void 0:o.data:e.value=t}});return{crearDepartamento:n,isLoadingMutate:i,error:m,errorServer:e,isSuccess:a}},L={key:0},X=g({__name:"CrearDepartamento",setup(r){const e=v(),n=d({id:0,nombre:"",nombre_titular:"",apellidos_titular:"",created_at:new Date,updated_at:new Date}),{crearDepartamento:i,isLoadingMutate:m,error:a,errorServer:t,isSuccess:o}=B(),l=p=>{i(p),o&&e.push({name:"listar-departamento"})},_=[{label:"Departamentos",icon:"account_balance",to:"listar-departamento"},{label:"Crear departamento",icon:"add_circle_outline"}];return(p,M)=>(c(),D(f,{padding:""},{default:y(()=>[u(h,{pages:_,titlePage:"Registrar departamento"}),s(a)?(c(),C("div",L,S(s(a)),1)):b("",!0),u(k,{departamento:n.value,onGuardar:l,loading:s(m),errorServer:s(t)},null,8,["departamento","loading","errorServer"])]),_:1}))}});export{X as default};
