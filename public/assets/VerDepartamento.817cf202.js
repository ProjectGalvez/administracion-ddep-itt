import{Q as k}from"./QPage.6971c865.js";import{_ as C}from"./BreadcrumbNav.15d15e07.js";import{u as D}from"./useVerDepartamento.d57117b3.js";import{_ as y}from"./LoaderSpinner.e73a4608.js";import{v as b,aM as Q,y as V,q as a,z as i,t as n,A as e,d,ao as x,B as f,aa as l,u,s as h,F as w,ar as F,ab as M,_ as I,C as S,D as B,aq as N}from"./index.6aee2e30.js";import{Q as q,a as m}from"./QCard.cb508ff7.js";import{Q as $}from"./QImg.7c114304.js";import"./documentosApi.f9b655d1.js";import"./axios.a596eead.js";import"./useQuery.esm.76380881.js";import"./useQueryClient.esm.ef5065e6.js";import"./utils.esm.df383359.js";import"./use-dark.6d3765c8.js";const g=r=>{const _=new Date(r),o=Math.floor((new Date().getTime()-_.getTime())/1e3);let t=o/31536e3;return t>1?Math.floor(t)===1?Math.floor(t)+" a\xF1o":Math.floor(t)+" a\xF1os":(t=o/2592e3,t>1?Math.floor(t)===1?Math.floor(t)+" mes":Math.floor(t)+" meses":(t=o/86400,t>1?Math.floor(t)===1?Math.floor(t)+" d\xEDa":Math.floor(t)+" d\xEDas":(t=o/3600,t>1?Math.floor(t)===1?Math.floor(t)+" hora":Math.floor(t)+" horas":(t=o/60,t>1?Math.floor(t)===1?Math.floor(t)+" minuto":Math.floor(t)+" minutos":Math.floor(t)===1?Math.floor(t)+" segundo":Math.floor(t)+" segundos"))))};const c=r=>(S("data-v-53add976"),r=r(),B(),r),z={class:"row"},E={class:"col-xs-12 col-md-6"},T={class:"fontsize-14 text-center text-weight-light flex items-center"},A=c(()=>e("td",null,"Nombre del titular:",-1)),H=c(()=>e("td",null,"Apellidos titular:",-1)),L=c(()=>e("td",null,"Fecha de registro:",-1)),P={class:"col-xs-12 col-md-6"},R={class:"fontsize-14 text-center text-weight-light flex items-center"},O={key:0},j=c(()=>e("td",null,"Carrera:",-1)),G=c(()=>e("td",null,"Clave:",-1)),J=c(()=>e("td",null,"Fecha de registro:",-1)),K=b({__name:"CardDepartamento",props:{departamento:{}},setup(r){const o=Q(r,"departamento");return(t,v)=>{const p=V("router-link");return a(),i(q,null,{default:n(()=>[e("div",z,[e("div",E,[d(m,null,{default:n(()=>[e("div",T,[d(x,{name:"account_balance",class:"q-mr-xs"}),f(" "+l(o.value.nombre),1)])]),_:1}),d(m,null,{default:n(()=>[e("table",null,[e("tr",null,[A,e("td",null,l(o.value.nombre_titular),1)]),e("tr",null,[H,e("td",null,l(o.value.apellidos_titular),1)]),e("tr",null,[L,e("td",null,"Hace "+l(u(g)(o.value.created_at+"")),1)])])]),_:1})]),e("div",P,[d(m,null,{default:n(()=>[e("div",R,[d(x,{name:"local_library",class:"q-mr-xs"}),f(" Carreras ")])]),_:1}),o.value.carreras?(a(),h("div",O,[(a(!0),h(w,null,F(o.value.carreras,s=>(a(),i(m,{key:s.id},{default:n(()=>[e("table",null,[s.escudo?(a(),i($,{key:0,src:s.escudo},null,8,["src"])):M("",!0),e("tr",null,[j,e("td",null,[d(p,{class:"color-link",to:{name:"ver-carrera",params:{id:s.id}}},{default:n(()=>[f(l(s.nombre),1)]),_:2},1032,["to"])])]),e("tr",null,[G,e("td",null,l(s.clave),1)]),e("tr",null,[J,e("td",null,"Hace "+l(u(g)(s.created_at+"")),1)])])]),_:2},1024))),128))])):M("",!0)])])]),_:1})}}});var U=I(K,[["__scopeId","data-v-53add976"]]);const W={key:2},ut=b({__name:"VerDepartamento",setup(r){const _=N(),{id:o=""}=_.params,{departamento:t,isLoading:v}=D(o+""),p=[{label:"Departamentos",icon:"account_balance",to:"listar-departamento"},{label:"Ver departamento",icon:"visibility"}];return(s,X)=>(a(),i(k,{padding:""},{default:n(()=>[d(C,{pages:p,titlePage:"Ver departamento"}),u(v)?(a(),i(y,{key:0})):u(t)?(a(),i(U,{key:1,departamento:u(t)},null,8,["departamento"])):(a(),h("div",W,"Ocurri\xF3 un error desconocido"))]),_:1}))}});export{ut as default};
