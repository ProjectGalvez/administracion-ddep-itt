import{j as te,r as T,c,w as R,l as oe,h as d,a2 as O,k as ie,g as ne,aQ as ae}from"./index.6aee2e30.js";import{u as le,a as se}from"./use-prevent-scroll.46e9c667.js";import{u as ue,d as re,a as ce,b as de,e as fe,f as me,g as ge,c as ve,r as j,i as K,h as he,j as xe}from"./focusout.012d42f6.js";import{a as ye}from"./focus-manager.05708ea9.js";let v=0;const be={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},L={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Te=te({name:"QDialog",inheritAttrs:!1,props:{...ue,...re,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ce,"shake","click","escapeKey"],setup(e,{slots:$,emit:s,attrs:E}){const h=ne(),i=T(null),l=T(!1),u=T(!1);let n=null,a=null,f,x;const S=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:_}=se(),{registerTimeout:C}=de(),{registerTick:A,removeTick:F}=fe(),{transitionProps:I,transitionStyle:z}=me(e,()=>L[e.position][0],()=>L[e.position][1]),{showPortal:D,hidePortal:H,portalIsAccessible:Q,renderPortal:V}=ge(h,i,ee,"dialog"),{hide:m}=ve({showing:l,hideOnRouteChange:S,handleShow:N,handleHide:X,processOnMount:!0}),{addToHistory:p,removeFromHistory:W}=le(l,m,S),U=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${be[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),g=c(()=>l.value===!0&&e.seamless!==!0),G=c(()=>e.autoClose===!0?{onClick:Y}:{}),J=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${g.value===!0?"modal":"seamless"}`,E.class]);R(()=>e.maximized,t=>{l.value===!0&&q(t)}),R(g,t=>{_(t),t===!0?(he(k),xe(b)):(j(k),K(b))});function N(t){p(),a=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,q(e.maximized),D(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),A(r)):F(),C(()=>{if(h.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:w}=document.activeElement.getBoundingClientRect(),{innerHeight:P}=window,B=window.visualViewport!==void 0?window.visualViewport.height:P;o>0&&w>B/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-B,w>=P?1/0:Math.ceil(document.scrollingElement.scrollTop+w-B/2))),document.activeElement.scrollIntoView()}x=!0,i.value.click(),x=!1}D(!0),u.value=!1,s("show",t)},e.transitionDuration)}function X(t){F(),W(),M(!0),u.value=!0,H(),a!==null&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),C(()=>{H(!0),u.value=!1,s("hide",t)},e.transitionDuration)}function r(t){ye(()=>{let o=i.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function y(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):r(),s("shake");const o=i.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,i.value!==null&&(o.classList.remove("q-animate--scale"),r())},170))}function b(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&y():(s("escapeKey"),m()))}function M(t){n!==null&&(clearTimeout(n),n=null),(t===!0||l.value===!0)&&(q(!1),e.seamless!==!0&&(_(!1),j(k),K(b))),t!==!0&&(a=null)}function q(t){t===!0?f!==!0&&(v<1&&document.body.classList.add("q-body--dialog"),v++,f=!0):f===!0&&(v<2&&document.body.classList.remove("q-body--dialog"),v--,f=!1)}function Y(t){x!==!0&&(m(t),s("click",t))}function Z(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?m(t):e.noShake!==!0&&y()}function k(t){e.allowFocusOutside!==!0&&Q.value===!0&&ae(i.value,t.target)!==!0&&r('[tabindex]:not([tabindex="-1"])')}Object.assign(h.proxy,{focus:r,shake:y,__updateRefocusTarget(t){a=t||null}}),oe(M);function ee(){return d("div",{role:"dialog","aria-modal":g.value===!0?"true":"false",...E,class:J.value},[d(O,{name:"q-transition--fade",appear:!0},()=>g.value===!0?d("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,onClick:Z}):null),d(O,I.value,()=>l.value===!0?d("div",{ref:i,class:U.value,style:z.value,tabindex:-1,...G.value},ie($.default)):null)])}return V}});export{Te as Q};
