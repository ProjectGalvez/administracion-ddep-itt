import{_ as u,v as p,x as f,q as i,z as c,t as e,u as s,s as v,A as r,d as a,ap as g,aa as d,Q as x,ab as Q}from"./index.b0b93e3c.js";import{Q as h}from"./QImg.d87e827b.js";import{a as l,Q as C}from"./QCard.4818aad5.js";import{Q as y}from"./QPage.f47cc484.js";import{u as P}from"./usePerfil.dd457a57.js";import{_ as b}from"./LoaderSpinner.b1b399dd.js";import"./use-dark.63c149ae.js";import"./documentosApi.f427d296.js";import"./axios.a596eead.js";import"./useQuery.esm.ec0861c0.js";import"./useQueryClient.esm.98cf75d6.js";import"./utils.esm.728a0fef.js";const k={key:1,class:"row"},B={class:"col-md-6 col-xs-12 q-pa-lg"},w=["src"],E={class:"username"},z={class:"text-subtitle2"},N=p({__name:"PerfilEstudiante",setup(V){const{user:t,isLoading:n}=P(),_=f(),m=()=>{_.push({name:"cambiar-password-estudiante"})};return(q,A)=>(i(),c(y,{padding:""},{default:e(()=>[s(n)?(i(),c(b,{key:0})):s(t)?(i(),v("div",k,[r("div",B,[a(C,{class:"profile-card"},{default:e(()=>[a(l,{class:"cover-section"},{default:e(()=>[a(g,{class:"avatar-overlay",size:"150px"},{default:e(()=>{var o;return[r("img",{src:(o=s(t))==null?void 0:o.url_foto,alt:"Foto de perfil"},null,8,w)]}),_:1}),a(h,{class:"cover-image",src:s(t).url_portada,alt:"Portada del perfil"},null,8,["src"])]),_:1}),a(l,null,{default:e(()=>{var o;return[r("div",E,d(s(t).name),1),r("div",z,"Correo: "+d((o=s(t))==null?void 0:o.email),1)]}),_:1}),a(l,null,{default:e(()=>[a(x,{color:"deep-orange",glossy:"",label:"Cambiar contrase\xF1a",size:"xs",onClick:m})]),_:1})]),_:1})])])):Q("",!0)]),_:1}))}});var M=u(N,[["__scopeId","data-v-38eccc4e"]]);export{M as default};