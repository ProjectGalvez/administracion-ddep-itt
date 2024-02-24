import{i as j,E as $,c as i,G as H,k as z,h as f,g as P,j as L,Q as C,J,b4 as D,ao as F,p as M,r as S,I as X,aU as V,aV as Q,v as Y,aM as Z,x as ee,q as h,s as x,d as _,u as k,A as q,B as O,z as E,t as B,F as R,ar as te,aa as ae,ab as oe}from"./index.511ce7da.js";import{u as ne,a as ie,c as le}from"./focusout.f4d95c7f.js";import{u as se}from"./uid.42677368.js";import{Q as re}from"./QBtnGroup.79c77c2f.js";import{Q as ce,a as ue}from"./QTimeline.1291702f.js";import{d as T}from"./documentosApi.5a915086.js";import{u as de}from"./useQuery.esm.07b4cbcd.js";import{_ as fe}from"./LoaderSpinner.276bcf78.js";import{u as ge}from"./useQueryClient.esm.18f38723.js";import{u as ve}from"./useMutation.esm.1025419c.js";import{_ as be}from"./DialogEliminar.6699e732.js";const me={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function he(){const{props:e,proxy:{$q:a}}=P(),o=j(H,$);if(o===$)return console.error("QPageSticky needs to be child of QLayout"),$;const n=i(()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),r=i(()=>o.header.offset),u=i(()=>o.right.offset),l=i(()=>o.footer.offset),d=i(()=>o.left.offset),m=i(()=>{let t=0,c=0;const g=n.value,s=a.lang.rtl===!0?-1:1;g.top===!0&&r.value!==0?c=`${r.value}px`:g.bottom===!0&&l.value!==0&&(c=`${-l.value}px`),g.left===!0&&d.value!==0?t=`${s*d.value}px`:g.right===!0&&u.value!==0&&(t=`${-s*u.value}px`);const v={transform:`translate(${t}, ${c})`};return e.offset&&(v.margin=`${e.offset[1]}px ${e.offset[0]}px`),g.vertical===!0?(d.value!==0&&(v[a.lang.rtl===!0?"right":"left"]=`${d.value}px`),u.value!==0&&(v[a.lang.rtl===!0?"left":"right"]=`${u.value}px`)):g.horizontal===!0&&(r.value!==0&&(v.top=`${r.value}px`),l.value!==0&&(v.bottom=`${l.value}px`)),v}),p=i(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function y(t){const c=z(t.default);return f("div",{class:p.value,style:m.value},e.expand===!0?c:[f("div",c)])}return{$layout:o,getStickyContent:y}}var Me=L({name:"QPageSticky",props:me,setup(e,{slots:a}){const{getStickyContent:o}=he();return()=>o(a)}});const pe=["top","right","bottom","left"],K={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>pe.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function U(e,a){return{formClass:i(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:i(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:i(()=>{if(e.externalLabel===!0){const o=e.hideLabel===null?a.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(o===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const G={start:"self-end",center:"self-center",end:"self-start"},ye=Object.keys(G);var Te=L({name:"QFabAction",props:{...K,icon:{type:String,default:""},anchor:{type:String,validator:e=>ye.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:a,emit:o}){const n=j(D,()=>({showing:{value:!0},onChildClick:J})),{formClass:r,labelProps:u}=U(e,n.showing),l=i(()=>{const t=G[e.anchor];return r.value+(t!==void 0?` ${t}`:"")}),d=i(()=>e.disable===!0||n.showing.value!==!0);function m(t){n.onChildClick(t),o("click",t)}function p(){const t=[];return a.icon!==void 0?t.push(a.icon()):e.icon!==""&&t.push(f(F,{name:e.icon})),(e.label!==""||a.label!==void 0)&&t[u.value.action](f("div",u.value.data,a.label!==void 0?a.label():[e.label])),M(a.default,t)}const y=P();return Object.assign(y.proxy,{click:m}),()=>f(C,{class:l.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:d.value,onClick:m},p)}});const _e=["up","right","down","left"],xe=["left","center","right"];var Ke=L({name:"QFab",props:{...K,...ne,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>_e.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>xe.includes(e)}},emits:ie,setup(e,{slots:a}){const o=S(null),n=S(e.modelValue===!0),r=se(),{proxy:{$q:u}}=P(),{formClass:l,labelProps:d}=U(e,n),m=i(()=>e.persistent!==!0),{hide:p,toggle:y}=le({showing:n,hideOnRouteChange:m}),t=i(()=>({opened:n.value})),c=i(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${l.value}`+(n.value===!0?" q-fab--opened":" q-fab--closed")),g=i(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${n.value===!0?"opened":"closed"}`),s=i(()=>{const b={id:r,role:"menu"};return n.value!==!0&&(b["aria-hidden"]="true"),b}),v=i(()=>`q-fab__icon-holder  q-fab__icon-holder--${n.value===!0?"opened":"closed"}`);function w(b,I){const A=a[b],N=`q-fab__${b} absolute-full`;return A===void 0?f(F,{class:N,name:e[I]||u.iconSet.fab[I]}):f("div",{class:N},A(t.value))}function W(){const b=[];return e.hideIcon!==!0&&b.push(f("div",{class:v.value},[w("icon","icon"),w("active-icon","activeIcon")])),(e.label!==""||a.label!==void 0)&&b[d.value.action](f("div",d.value.data,a.label!==void 0?a.label(t.value):[e.label])),M(a.tooltip,b)}return X(D,{showing:n,onChildClick(b){p(b),o.value!==null&&o.value.$el.focus()}}),()=>f("div",{class:c.value},[f(C,{ref:o,class:l.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":n.value===!0?"true":"false","aria-haspopup":"true","aria-controls":r,onClick:y},W),f("div",{class:g.value,...s.value},z(a.default))])}});const ke=async e=>{const{data:a}=await T.get("entrega-por-residente",{params:{id:e}});return a},qe=e=>{const{isLoading:a,isError:o,data:n}=de({queryKey:["entrega-por-residente",e],queryFn:()=>ke(e),staleTime:36e5});return{isLoading:a,isError:o,data:n}},Ce=()=>{const e=ge(),a=async l=>{try{Q.show({delay:500,message:"Eliminando..."}),await T.delete(`entregas/${l}`),Q.hide()}catch(d){throw Q.hide(),d}},{mutate:o,isLoading:n,error:r,isSuccess:u}=ve(a,{onSuccess:()=>{V.create({message:"Se elimin\xF3 la entrega",color:"positive",position:"top-right",type:"positive"}),e.invalidateQueries({queryKey:["entregas-trashed"],exact:!1}),e.invalidateQueries({queryKey:["residentes"],exact:!1}),e.invalidateQueries({queryKey:["entregas"],exact:!1}),e.invalidateQueries({queryKey:["entrega-por-residente"],exact:!1})},onError:l=>{V.create({message:l+"",color:"negative",position:"top-right",type:"negative"})}});return{eliminarRecurso:o,loadingEliminar:n,error:r,isSuccess:u}},Se={class:"q-px-lg q-py-md"},$e={class:"fontsize-14 text-center text-weight-light flex items-center"},Qe={key:0},Ee={key:0},Be=["href"],Pe={class:"flex justify-end"},Le={key:2},Ue=Y({__name:"EntregasEstudiante",props:{id:{}},setup(e){const o=Z(e,"id"),{isLoading:n,data:r}=qe(o.value),u=ee(),l=S(!1),d=S(""),{eliminarRecurso:m}=Ce(),p=c=>{u.push({name:"ver-entrega",params:{id:c}})},y=c=>{u.push({name:"editar-entrega",params:{id:c}})},t=c=>{l.value=!0,d.value=c};return(c,g)=>(h(),x(R,null,[_(be,{modelValue:l.value,"onUpdate:modelValue":g[0]||(g[0]=s=>l.value=s),"recurso-id":d.value,onEliminar:k(m)},null,8,["modelValue","recurso-id","onEliminar"]),q("div",Se,[q("div",$e,[_(F,{name:"post_add",class:"q-mr-xs"}),O(" Documentos entregados ")]),k(n)?(h(),E(fe,{key:0})):k(r)?(h(),E(ce,{key:1,color:"secondary"},{default:B(()=>[k(r).length===0?(h(),x("div",Qe,"No hay documentos agregados a\xFAn")):(h(!0),x(R,{key:1},te(k(r),s=>(h(),E(ue,{key:s.Id,title:s.NombreDocumento,subtitle:s.FechaEntrega.toString(),icon:s.Icono},{default:B(()=>[q("div",null,[O(" Entrega de "+ae(s.NombreDocumento)+" ",1),s.URLDocumento?(h(),x("span",Ee,[q("a",{href:s.URLDocumento},"Descargar archivo",8,Be)])):oe("",!0),q("div",Pe,[_(re,{push:""},{default:B(()=>[_(C,{size:"sm",color:"info",push:"",glossy:"",icon:"visibility",onClick:v=>p(s.Id)},null,8,["onClick"]),_(C,{size:"sm",color:"secondary",push:"",glossy:"",icon:"edit",onClick:v=>y(s.Id)},null,8,["onClick"]),_(C,{size:"sm",color:"negative",push:"",glossy:"",icon:"delete",onClick:v=>t(s.Id)},null,8,["onClick"])]),_:2},1024)])])]),_:2},1032,["title","subtitle","icon"]))),128))]),_:1})):(h(),x("div",Le,"No hay documentos entregados"))])],64))}});export{Ke as Q,Ue as _,Te as a,Me as b};
