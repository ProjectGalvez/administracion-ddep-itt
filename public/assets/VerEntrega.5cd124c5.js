import{Q as D}from"./QPage.f47cc484.js";import{v as y,aM as V,c as x,q as a,z as l,t as d,d as i,A as t,ao as f,B as k,aa as s,ab as b,s as E,u,_ as w,C as Q,D as B,aq as I}from"./index.b0b93e3c.js";import{_ as S}from"./BreadcrumbNav.fba4b1cf.js";import{_ as z}from"./LoaderSpinner.b1b399dd.js";import{u as N}from"./useVerEntrega.7f61573a.js";import{Q as $,a as C}from"./QCard.4818aad5.js";import{d as q}from"./date.5b7a06d0.js";import"./useRecursoIndividual.9d4b1997.js";import"./documentosApi.f427d296.js";import"./axios.a596eead.js";import"./useQuery.esm.ec0861c0.js";import"./useQueryClient.esm.98cf75d6.js";import"./utils.esm.728a0fef.js";import"./use-dark.63c149ae.js";import"./format.2bc25e5f.js";const _=o=>(Q("data-v-9bfdb6fc"),o=o(),B(),o),L={class:"fontsize-14 text-center text-weight-light flex items-center"},P=_(()=>t("td",null,"Residente:",-1)),R=_(()=>t("td",null,"Documento:",-1)),A=["href"],F=_(()=>t("td",null,"Fecha de entrega:",-1)),M=_(()=>t("td",null,[k(" Cumplimiento "),t("small",null,"(fecha de entrega - fecha l\xEDmite):")],-1)),T=y({__name:"CardEntrega",props:{entrega:{}},setup(o){const e=V(o,"entrega"),c=x(()=>{if(!e.value||!e.value.url_documento)return!1;const r=e.value.url_documento.split(".").pop();return["pdf"].includes(r.toLowerCase())}),m=x(()=>{if(!e.value||!e.value.url_documento)return!1;const r=e.value.url_documento.split(".").pop();return["doc","docx"].includes(r.toLowerCase())});return(r,v)=>(a(),l($,null,{default:d(()=>[i(C,null,{default:d(()=>{var n;return[t("div",L,[i(f,{name:"description",class:"q-mr-xs"}),k(" "+s((n=e.value.documento)==null?void 0:n.nombre_documento),1)])]}),_:1}),i(C,null,{default:d(()=>{var n,p,h;return[t("table",null,[t("tr",null,[P,t("td",null,s((n=e.value.estudiante)==null?void 0:n.nombre)+" "+s((p=e.value.estudiante)==null?void 0:p.apellidos),1)]),t("tr",null,[R,t("td",null,[t("span",null,[c.value?(a(),l(f,{key:0,size:"2rem",color:"red",name:"picture_as_pdf"})):m.value?(a(),l(f,{key:1,size:"2rem",color:"blue",name:"description"})):b("",!0),e.value.url_documento?(a(),E("a",{key:2,href:e.value.url_documento,download:""}," Descargar ",8,A)):b("",!0)])])]),t("tr",null,[F,t("td",null,s(e.value.fecha_entrega),1)]),t("tr",null,[M,t("td",null,s(u(q).getDateDiff(e.value.fecha_entrega||"",((h=e.value.documento)==null?void 0:h.fecha_limite)||"","days"))+" d\xEDas ",1)])])]}),_:1})]),_:1}))}});var W=w(T,[["__scopeId","data-v-9bfdb6fc"]]);const j={key:2},se=y({__name:"VerEntrega",setup(o){const g=I(),{id:e=""}=g.params,{resource:c,isLoading:m,error:r}=N(e+""),v=[{label:"Entregas",icon:"assignment_turned_in",to:"listar-entrega"},{label:"Ver entrega",icon:"visibility"}];return(n,p)=>(a(),l(D,{padding:""},{default:d(()=>[i(S,{pages:v,titlePage:"Ver entrega"}),u(m)?(a(),l(z,{key:0})):u(c)?(a(),l(W,{key:1,entrega:u(c)},null,8,["entrega"])):(a(),E("div",j,s(u(r)),1))]),_:1}))}});export{se as default};