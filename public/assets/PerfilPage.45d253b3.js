import{j as H,r as f,c as $,h as S,g as W,U as G,aT as J,Q as h,aj as X,aU as w,aV as g,_ as Y,v as Z,x as ee,q as k,z as V,t as _,u as p,s as ae,A as m,d as u,ab as B,ap as te,aa as R,au as oe}from"./index.b0b93e3c.js";import{Q as re}from"./QImg.d87e827b.js";import{a as D,Q as ne}from"./QCard.4818aad5.js";import{Q as le}from"./QInput.11ecb308.js";import{Q as se}from"./QMenu.42e312bd.js";import{Q as ie}from"./QPage.f47cc484.js";import{u as ce}from"./usePerfil.dd457a57.js";import{_ as ue}from"./LoaderSpinner.b1b399dd.js";import{d as F}from"./documentosApi.f427d296.js";import{u as N}from"./useQueryClient.esm.98cf75d6.js";import{u as O}from"./useMutation.esm.16d51942.js";import"./use-dark.63c149ae.js";import"./use-key-composition.18531db8.js";import"./uid.42677368.js";import"./focus-manager.05708ea9.js";import"./use-form.cb72d743.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./focusout.c03edb12.js";import"./useQuery.esm.ec0861c0.js";import"./utils.esm.728a0fef.js";import"./axios.a596eead.js";import"./mutation.esm.2cad5aca.js";function x(e,a=new WeakMap){if(Object(e)!==e)return e;if(a.has(e))return a.get(e);const t=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const o=e.valueOf();if(Object(o)!==o){const r=new e.constructor(o);return a.set(e,r),r}}return a.set(e,t),e instanceof Set?e.forEach(o=>{t.add(x(o,a))}):e instanceof Map&&e.forEach((o,r)=>{t.set(r,x(o,a))}),Object.assign(t,...Object.keys(e).map(o=>({[o]:x(e[o],a)})))}var de=H({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:a,emit:t}){const{proxy:o}=W(),{$q:r}=o,i=f(null),d=f(""),n=f("");let y=!1;const P=$(()=>X({initialValue:d.value,validate:e.validate,set:z,cancel:b,updatePosition:Q},"value",()=>n.value,c=>{n.value=c}));function z(){e.validate(n.value)!==!1&&(A()===!0&&(t("save",n.value,d.value),t("update:modelValue",n.value)),U())}function b(){A()===!0&&t("cancel",n.value,d.value),U()}function Q(){G(()=>{i.value.updatePosition()})}function A(){return J(n.value,d.value)===!1}function U(){y=!0,i.value.hide()}function q(){y=!1,d.value=x(e.modelValue),n.value=x(e.modelValue),t("beforeShow")}function L(){t("show")}function E(){y===!1&&A()===!0&&(e.autoSave===!0&&e.validate(n.value)===!0?(t("save",n.value,d.value),t("update:modelValue",n.value)):t("cancel",n.value,d.value)),t("beforeHide")}function j(){t("hide")}function I(){const c=a.default!==void 0?[].concat(a.default(P.value)):[];return e.title&&c.unshift(S("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&c.push(S("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[S(h,{flat:!0,color:e.color,label:e.labelCancel||r.lang.label.cancel,onClick:b}),S(h,{flat:!0,color:e.color,label:e.labelSet||r.lang.label.set,onClick:z})])),c}return Object.assign(o,{set:z,cancel:b,show(c){i.value!==null&&i.value.show(c)},hide(c){i.value!==null&&i.value.hide(c)},updatePosition:Q}),()=>{if(e.disable!==!0)return S(se,{ref:i,class:"q-popup-edit",cover:e.cover,onBeforeShow:q,onShow:L,onBeforeHide:E,onHide:j,onEscapeKey:b},I)}}});const pe=async e=>{try{g.show({delay:500,message:"Actualizando..."}),e.append("_method","PUT");const{data:a}=await F.post("editar-portada",e,{headers:{"Content-Type":"multipart/form-data"}});return g.hide(),a}catch(a){throw g.hide(),a}},ve=()=>{const e=N(),{mutate:a,isLoading:t,error:o}=O(pe,{onSuccess:()=>{w.create({message:"Se actualiz\xF3 la imagen de portada",color:"positive",position:"top-right",type:"positive"}),e.invalidateQueries({queryKey:["current-user"],exact:!1})},onError:r=>{w.create({message:r+"",color:"negative",position:"top-right",type:"negative"})}});return{actalizarPortada:a,isLoadingPortada:t,errorPortada:o}},me=async e=>{try{g.show({delay:500,message:"Actualizando..."}),e.append("_method","PUT");const{data:a}=await F.post("editar-avatar",e,{headers:{"Content-Type":"multipart/form-data"}});return g.hide(),a}catch(a){throw g.hide(),a}},fe=()=>{const e=N(),{mutate:a,isLoading:t,error:o}=O(me,{onSuccess:()=>{w.create({message:"Se actualiz\xF3 la foto de perfil",color:"positive",position:"top-right",type:"positive"}),e.invalidateQueries({queryKey:["current-user"],exact:!1})},onError:r=>{w.create({message:r+"",color:"negative",position:"top-right",type:"negative"})}});return{actalizarAvatar:a,isLoadingAvatar:t,errorAvatar:o}},ge=async e=>{try{g.show({delay:500,message:"Actualizando..."}),e.append("_method","PUT");const{data:a}=await F.post("editar-name",e,{headers:{"Content-Type":"multipart/form-data"}});return g.hide(),a}catch(a){throw g.hide(),a}},ye=()=>{const e=N(),{mutate:a,isLoading:t,error:o}=O(ge,{onSuccess:()=>{w.create({message:"Se actualiz\xF3 el nombre del usuario",color:"positive",position:"top-right",type:"positive"}),e.invalidateQueries({queryKey:["current-user"],exact:!1})},onError:r=>{w.create({message:r+"",color:"negative",position:"top-right",type:"negative"})}});return{actalizarName:a,isLoadingName:t,errorName:o}};const _e={key:1,class:"row"},he={class:"col-md-6 col-xs-12 q-pa-lg"},be={class:"change-cover-button"},Ce={class:"change-avatar-button"},we=["src"],Pe={class:"cursor-pointer"},ze={class:"username"},Ae={class:"text-subtitle2"},Se=Z({__name:"PerfilPage",setup(e){const{user:a,isLoading:t}=ce(),o=ee(),r=f(!1),i=f(!1),d=f(null),n=f(null),y=f(null),P=f(null),{actalizarPortada:z,isLoadingPortada:b}=ve(),{actalizarAvatar:Q,isLoadingAvatar:A}=fe(),{actalizarName:U}=ye(),q=()=>{d.value.click()},L=()=>{n.value.click()},E=s=>{const l=s.target.files[0];if(l){const v=URL.createObjectURL(l);y.value=l,a.value.url_portada=v,r.value=!0}},j=s=>{const l=s.target.files[0];if(l){const v=URL.createObjectURL(l);a.value.url_foto=v,P.value=l,i.value=!0}},I=()=>{const s=new FormData;y.value&&(s.append("url_portada",y.value),z(s),r.value=!1)},c=()=>{const s=new FormData;P.value&&(s.append("url_foto",P.value),Q(s),i.value=!1)},T=s=>{const l=new FormData;l.append("name",s),U(l)},K=()=>{o.push({name:"cambiar-password"})};return(s,l)=>(k(),V(ie,{padding:""},{default:_(()=>[p(t)?(k(),V(ue,{key:0})):p(a)?(k(),ae("div",_e,[m("div",he,[u(ne,{class:"profile-card"},{default:_(()=>[u(D,{class:"cover-section"},{default:_(()=>[m("div",be,[u(h,{class:"glossy",size:"sm",round:"",color:"pink",icon:"image",onClick:q}),r.value?(k(),V(h,{key:0,class:"glossy",size:"sm",round:"",color:"green",icon:"save",onClick:I,isLoading:p(b)},null,8,["isLoading"])):B("",!0),m("input",{type:"file",ref_key:"coverImageUploader",ref:d,style:{display:"none"},accept:"image/jpeg, image/png",onChange:E},null,544)]),m("div",Ce,[u(h,{class:"glossy",size:"sm",round:"",color:"pink",icon:"photo",onClick:L}),i.value?(k(),V(h,{key:0,size:"sm",round:"",color:"green",icon:"save",class:"glossy",onClick:c,isLoading:p(A)},null,8,["isLoading"])):B("",!0),m("input",{type:"file",ref_key:"avatarImageUploader",ref:n,style:{display:"none"},accept:"image/jpeg, image/png",onChange:j},null,544)]),u(te,{class:"avatar-overlay",size:"150px"},{default:_(()=>{var v;return[m("img",{src:(v=p(a))==null?void 0:v.url_foto,alt:"Foto de perfil"},null,8,we)]}),_:1}),u(re,{class:"cover-image",src:p(a).url_portada,alt:"Portada del perfil"},null,8,["src"])]),_:1}),u(D,null,{default:_(()=>{var v;return[m("div",Pe,[m("span",ze,R(p(a).name),1),u(de,{modelValue:p(a).name,"onUpdate:modelValue":l[0]||(l[0]=C=>p(a).name=C),"auto-save":""},{default:_(C=>[u(le,{modelValue:C.value,"onUpdate:modelValue":M=>C.value=M,dense:"",autofocus:"",counter:"",onKeyup:oe(M=>{C.set,T(C.value)},["enter"]),required:""},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])]),m("div",Ae,"Correo: "+R((v=p(a))==null?void 0:v.email),1)]}),_:1}),u(D,null,{default:_(()=>[u(h,{color:"deep-orange",glossy:"",label:"Cambiar contrase\xF1a",size:"xs",onClick:K})]),_:1})]),_:1})])])):B("",!0)]),_:1}))}});var Je=Y(Se,[["__scopeId","data-v-55e6c96f"]]);export{Je as default};
