import{v as F,x as T,r as _,q as v,s as S,d as e,u as d,t as o,B as l,aa as g,z as Q,Q as p,A as E,ab as I}from"./index.511ce7da.js";import{a as C,Q as q}from"./QCard.c27ef320.js";import{Q as K}from"./QPage.30c35a64.js";import{Q as U,a as N,b as s,c as M}from"./QTable.f4abf1fa.js";import{Q as $}from"./QChip.ec7c10df.js";import{Q as A}from"./QBtnGroup.79c77c2f.js";import{u as D}from"./useObtenerPeriodos.704b159e.js";import{u as G}from"./useEliminarRecurso.17e7cd53.js";import{u as j}from"./useQueryClient.esm.18f38723.js";import{_ as z}from"./DialogEliminar.6699e732.js";import{_ as O}from"./BreadcrumbNav.83440b84.js";import{g as H}from"./getUser.70da419d.js";import{Q as B}from"./QTooltip.e2728da7.js";import{u as J}from"./useRecursosEliminados.46b28af2.js";import{u as W}from"./useForzarEliminaci\xF3nRecurso.e97b01b3.js";import{u as X}from"./useRestaurarRecurso.3633c15d.js";import"./use-dark.2ddafa12.js";import"./QList.dff4fc64.js";import"./QMarkupTable.1a93edc0.js";import"./QSelect.bbb55090.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./focus-manager.05708ea9.js";import"./QItem.f46130b3.js";import"./QItemLabel.07feaa09.js";import"./QMenu.97067286.js";import"./position-engine.26205469.js";import"./selection.93e3bd86.js";import"./focusout.f4d95c7f.js";import"./QDialog.d254dd3f.js";import"./use-prevent-scroll.b0ece3de.js";import"./use-form.89097415.js";import"./format.2bc25e5f.js";import"./use-checkbox.c3671c6f.js";import"./use-fullscreen.b6949ea7.js";import"./useRecursosMultiples.e7f7cf94.js";import"./documentosApi.5a915086.js";import"./axios.a596eead.js";import"./useQuery.esm.07b4cbcd.js";import"./utils.esm.c4fd8260.js";import"./useMutation.esm.1025419c.js";import"./mutation.esm.d177ca9b.js";import"./QCardActions.2508ac56.js";import"./ClosePopup.41b92e43.js";const Y=()=>(j().invalidateQueries({queryKey:["periodo-activo"],exact:!1}),G("/periodos","Se elimin\xF3 el periodo")),L=[{field:"nombre",name:"nombre",label:"Nombre del periodo",align:"left",sortable:!0},{field:"fecha_inicio",name:"fecha_inicio",label:"Fecha de inicio.",align:"left",sortable:!0},{field:"fecha_termino",name:"fecha_termino",label:"Fecha de termino",align:"left",sortable:!0},{field:"activo",name:"activo",label:"Activo",align:"left",sortable:!1},{field:"accion",name:"accion",label:"Acci\xF3n",align:"right"}],Z=F({__name:"TablaPeriodo",setup(h){const a=T(),n=_(!1),c=_(""),{data:f,isLoading:y}=D(),{eliminarRecurso:b}=Y(),k=u=>{a.push({name:"ver-periodo",params:{id:u}})},x=u=>{a.push({name:"editar-periodo",params:{id:u}})},V=u=>{n.value=!0,c.value=u};return(u,P)=>(v(),S("div",null,[e(z,{modelValue:n.value,"onUpdate:modelValue":P[0]||(P[0]=r=>n.value=r),"recurso-id":c.value,onEliminar:d(b)},null,8,["modelValue","recurso-id","onEliminar"]),e(U,{flat:"",bordered:"",rows:d(f),columns:d(L),"row-key":"nombre",loading:d(y),pagination:{rowsPerPage:15}},{body:o(r=>[e(N,{props:r},{default:o(()=>[e(s,{key:"nombre",props:r},{default:o(()=>[l(g(r.row.nombre),1)]),_:2},1032,["props"]),e(s,{key:"fecha_inicio",props:r},{default:o(()=>[l(g(r.row.fecha_inicio),1)]),_:2},1032,["props"]),e(s,{key:"fecha_termino",props:r},{default:o(()=>[l(g(r.row.fecha_termino),1)]),_:2},1032,["props"]),e(s,{key:"fecha_termino",props:r},{default:o(()=>[r.row.activo?(v(),Q($,{key:0,dense:"",icon:"check_circle",color:"green","text-color":"white"},{default:o(()=>[l("En proceso")]),_:1})):(v(),Q($,{key:1,dense:"",icon:"block","text-color":"white",color:"red"},{default:o(()=>[l("Inactivo")]),_:1}))]),_:2},1032,["props"]),e(s,{key:"accion",props:r},{default:o(()=>[e(A,{push:""},{default:o(()=>[e(p,{size:"sm",color:"info",push:"",glossy:"",icon:"visibility",onClick:w=>k(r.row.id)},null,8,["onClick"]),e(p,{size:"sm",color:"secondary",push:"",glossy:"",icon:"edit",onClick:w=>x(r.row.id)},null,8,["onClick"]),e(p,{size:"sm",color:"negative",push:"",glossy:"",icon:"delete",onClick:w=>V(r.row.id)},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]))}}),ee=()=>(j().invalidateQueries({queryKey:["periodo-activo"],exact:!1}),J("periodos-trashed",["periodos-trashed"],{},{staleTime:1e3*60*60})),oe=()=>W("periodos-force-delete","periodos-trashed"),ie=()=>X("/periodos-restore","periodos","periodos-trashed"),re={class:"flex justify-end q-gutter-md q-mb-md"},ae=F({__name:"TablaPeriodoEliminado",setup(h){const a=_([]),n=_(!1),c=_(!1),f=_(""),{data:y,isLoading:b}=ee(),{eliminarRecurso:k}=oe(),{restaurarRecurso:x}=ie(),V=m=>{k(m)},u=()=>{n.value=!0},P=m=>{c.value=!0,f.value=m},r=()=>{const m=a.value.map(t=>t.id.toString());x(m),a.value=[]},w=()=>{const m=a.value.map(t=>t.id.toString());k(m),a.value=[]};return(m,t)=>(v(),S("div",null,[e(z,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=i=>c.value=i),"recurso-id":f.value,icon:"delete_forever",onEliminar:V,mensaje:"\xBFEstas seguro de eliminar este periodo? Si se llega a eliminar, todos los datos se perder\xE1n para simpre y por simpre. \xA1Piensalo!"},null,8,["modelValue","recurso-id"]),e(z,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=i=>n.value=i),"recurso-id":a.value,icon:"delete_forever",onEliminar:w,mensaje:"\xBFEstas seguro de eliminar estos periodos? Si se llega a eliminar, todos los datos se perder\xE1n para simpre y por simpre. \xA1Pi\xE9nsalo!"},null,8,["modelValue","recurso-id"]),E("div",re,[e(p,{disable:!a.value.length,color:"secondary",icon:"restore",onClick:r},null,8,["disable"]),e(p,{disable:!a.value.length,color:"negative",icon:"delete_forever",onClick:u},null,8,["disable"])]),e(U,{flat:"",bordered:"",rows:d(y),columns:d(L),"row-key":"id",loading:d(b),pagination:{rowsPerPage:15},selection:"multiple",selected:a.value,"onUpdate:selected":t[2]||(t[2]=i=>a.value=i)},{body:o(i=>[e(N,{props:i},{default:o(()=>[e(s,null,{default:o(()=>[e(M,{modelValue:i.selected,"onUpdate:modelValue":R=>i.selected=R},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(s,{key:"nombre",props:i},{default:o(()=>[l(g(i.row.nombre),1)]),_:2},1032,["props"]),e(s,{key:"fecha_inicio",props:i},{default:o(()=>[l(g(i.row.fecha_inicio),1)]),_:2},1032,["props"]),e(s,{key:"fecha_termino",props:i},{default:o(()=>[l(g(i.row.fecha_termino),1)]),_:2},1032,["props"]),e(s,{key:"accion",props:i},{default:o(()=>[e(A,{push:""},{default:o(()=>[e(p,{size:"sm",color:"secondary",push:"",glossy:"",icon:"restore",onClick:R=>d(x)(i.row.id)},{default:o(()=>[e(B,null,{default:o(()=>[l(" Restaurar periodo ")]),_:1})]),_:2},1032,["onClick"]),e(p,{size:"sm",color:"negative",push:"",glossy:"",icon:"delete_forever",onClick:R=>P(i.row.id)},{default:o(()=>[e(B,null,{default:o(()=>[l(" Forzar eliminaci\xF3n ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading","selected"])]))}}),te={class:"flex justify-between items-center"},le=E("div",{class:"fontsize-15 text-weight-light"},"Periodos",-1),se=E("div",{class:"fontsize-15 text-weight-light"},"Peridos eliminadas",-1),Ye=F({__name:"ListarPeriodo",setup(h){const a=T(),n=()=>{a.push({name:"crear-periodo"})},c=H(),f=[{label:"Periodos",icon:"date_range"}];return(y,b)=>(v(),Q(K,{padding:""},{default:o(()=>[e(O,{pages:f,titlePage:"Lista de periodos"}),e(q,null,{default:o(()=>[e(C,null,{default:o(()=>[E("div",te,[le,e(p,{label:"Nuevo",icon:"add_circle_outline",color:"secondary",size:"md",padding:"xs",onClick:n})])]),_:1}),e(C,null,{default:o(()=>[e(Z)]),_:1})]),_:1}),d(c)==="admin"?(v(),Q(q,{key:0,class:"q-mt-md"},{default:o(()=>[e(C,null,{default:o(()=>[se]),_:1}),e(C,null,{default:o(()=>[e(ae)]),_:1})]),_:1})):I("",!0)]),_:1}))}});export{Ye as default};
