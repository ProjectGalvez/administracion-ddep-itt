import{Q as S}from"./QImg.6210f979.js";import{Q as V,a as m}from"./QCard.c27ef320.js";import{Q as F,a as L}from"./QForm.39cd2c48.js";import{Q as x}from"./QInput.b977ab79.js";import{r as u,x as B,a9 as Q,_ as P,v as q,y as E,q as v,z as b,t as a,d as e,u as p,s as N,B as y,aa as D,ab as w,ac as A,Q as T,C as U,D as z,A as k}from"./index.511ce7da.js";import{Q as R}from"./QPage.30c35a64.js";import{Q as H,a as J}from"./QLayout.99dafb16.js";import{d as M}from"./documentosApi.5a915086.js";import"./use-dark.2ddafa12.js";import"./focus-manager.05708ea9.js";import"./use-key-composition.8ed1270c.js";import"./uid.42677368.js";import"./use-form.89097415.js";import"./QResizeObserver.742b6703.js";import"./axios.a596eead.js";const O=()=>{const t=u(null),o=u(!1),r=u(!1),i=B(),f=s=>{s.includes("admin")?i.push({name:"dashboard-home"}):s.includes("capturista")?i.push({name:"dashboard-home"}):s.includes("estudiante")?i.push({name:"dashboard-estudiante"}):i.push({name:"not-found"})};return{isLoading:o,error:t,hasError:r,login:async(s,_,g)=>{r.value=!1,o.value=!0,await M.post("/login",{email:s,password:_,device_name:g}).then(n=>{const d=n.data;Q.set("token",d.user_token),Q.set("user",JSON.stringify(d)),f(d.role),o.value=!1}).catch(n=>{console.log(n),t.value=n.response.data,r.value=!0,o.value=!1})}}};const C=t=>(U("data-v-2317d51c"),t=t(),z(),t),j=C(()=>k("div",{class:"text-h5 text-weight-bold"},"Iniciar sesi\xF3n",-1)),G=C(()=>k("div",{class:"text-h6"}," Departamento de Divisi\xF3n de Estudios Profesionales ",-1)),K={key:0},W=q({__name:"LoginPage",setup(t){var n;const o=u(""),r=u(""),i=(n=navigator.userAgent)!=null?n:"Unknow",{login:f,isLoading:h,error:s,hasError:_}=O(),g=async()=>{await f(o.value,r.value,i)};return(d,c)=>{const I=E("router-link");return v(),b(H,{view:"lHh Lpr lFf"},{default:a(()=>[e(J,null,{default:a(()=>[e(R,{class:"flex flex-center fondo"},{default:a(()=>[e(V,{class:"q-pa-md shadow-2 my_card",bordered:""},{default:a(()=>[e(m,{class:"text-center"},{default:a(()=>[j,G,e(S,{src:"/logo.png",alt:"logo-ITT",class:"logo"})]),_:1}),p(s)?(v(),N("div",K,[p(_)?(v(),b(F,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:a(()=>[y(D(p(s).message),1)]),_:1})):w("",!0)])):w("",!0),e(L,{onSubmit:A(g,["prevent"])},{default:a(()=>[e(m,null,{default:a(()=>[e(x,{outlined:"",modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=l=>o.value=l),label:"Correo electr\xF3nico",rules:[l=>!!l||"El correo electr\xF3nico es requerido"]},null,8,["modelValue","rules"]),e(x,{outlined:"",class:"q-mt-md",modelValue:r.value,"onUpdate:modelValue":c[1]||(c[1]=l=>r.value=l),type:"password",label:"Contrase\xF1a",rules:[l=>!!l||"La contrase\xF1a es requerida"]},null,8,["modelValue","rules"])]),_:1}),e(m,null,{default:a(()=>[e(T,{style:{"border-radius":"8px"},color:"primary",rounded:"",size:"md",label:"Iniciar sesi\xF3n","no-caps":"",class:"full-width",type:"submit",loading:p(h)},null,8,["loading"])]),_:1}),e(m,null,{default:a(()=>[e(I,{to:{name:"home"}},{default:a(()=>[y("Ir al inicio")]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})}}});var ce=P(W,[["__scopeId","data-v-2317d51c"]]);export{ce as default};
