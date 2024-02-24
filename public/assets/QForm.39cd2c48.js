import{j as P,c as C,h as f,k as b,g as k,r as E,I as _,ae as D,af as I,o as Q,ag as j,a0 as F,U as R,ah as V}from"./index.511ce7da.js";import{u as w,a as $}from"./use-dark.2ddafa12.js";import{a as O}from"./focus-manager.05708ea9.js";var z=P({name:"QBanner",props:{...w,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(o,{slots:l}){const{proxy:{$q:d}}=k(),y=$(o,d),s=C(()=>"q-banner row items-center"+(o.dense===!0?" q-banner--dense":"")+(y.value===!0?" q-banner--dark q-dark":"")+(o.rounded===!0?" rounded-borders":"")),i=C(()=>`q-banner__actions row items-center justify-end col-${o.inlineActions===!0?"auto":"all"}`);return()=>{const a=[f("div",{class:"q-banner__avatar col-auto row items-center self-start"},b(l.avatar)),f("div",{class:"q-banner__content col text-body2"},b(l.default))],c=b(l.action);return c!==void 0&&a.push(f("div",{class:i.value},c)),f("div",{class:s.value+(o.inlineActions===!1&&c!==void 0?" q-banner--top-padding":""),role:"alert"},a)}}}),G=P({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(o,{slots:l,emit:d}){const y=k(),s=E(null);let i=0;const a=[];function c(e){const u=typeof e=="boolean"?e:o.noErrorFocus!==!0,m=++i,p=(t,n)=>{d("validation"+(t===!0?"Success":"Error"),n)},S=t=>{const n=t.validate();return typeof n.then=="function"?n.then(r=>({valid:r,comp:t}),r=>({valid:!1,comp:t,err:r})):Promise.resolve({valid:n,comp:t})};return(o.greedy===!0?Promise.all(a.map(S)).then(t=>t.filter(n=>n.valid!==!0)):a.reduce((t,n)=>t.then(()=>S(n).then(r=>{if(r.valid===!1)return Promise.reject(r)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return m===i&&p(!0),!0;if(m===i){const{comp:n,err:r}=t[0];if(r!==void 0&&console.error(r),p(!1,n),u===!0){const B=t.find(({comp:A})=>typeof A.focus=="function"&&j(A.$)===!1);B!==void 0&&B.comp.focus()}}return!1})}function h(){i++,a.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function x(e){e!==void 0&&F(e);const u=i+1;c().then(m=>{u===i&&m===!0&&(o.onSubmit!==void 0?d("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function g(e){e!==void 0&&F(e),d("reset"),R(()=>{h(),o.autofocus===!0&&o.noResetFocus!==!0&&v()})}function v(){O(()=>{if(s.value===null)return;const e=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),u=>u.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}_(V,{bindComponent(e){a.push(e)},unbindComponent(e){const u=a.indexOf(e);u>-1&&a.splice(u,1)}});let q=!1;return D(()=>{q=!0}),I(()=>{q===!0&&o.autofocus===!0&&v()}),Q(()=>{o.autofocus===!0&&v()}),Object.assign(y.proxy,{validate:c,resetValidation:h,submit:x,reset:g,focus:v,getValidationComponents:()=>a}),()=>f("form",{class:"q-form",ref:s,onSubmit:x,onReset:g},b(l.default))}});export{z as Q,G as a};
