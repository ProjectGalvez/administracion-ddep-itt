import{j as ae,r as w,c as u,w as M,$ as ne,K as se,h as A,k as ue,a2 as ie,l as le,g as re,aQ as ce,a0 as fe}from"./index.b0b93e3c.js";import{u as de,v as D,a as ve,b as ge,c as me,r as R,s as he,p as K,d as ke}from"./position-engine.3be844ea.js";import{u as ye,d as Pe,a as Te,e as Ce,b as Se,f as xe,c as Oe,g as be,h as qe,r as Be,i as H,j as Ee,k as Fe}from"./focusout.c03edb12.js";import{u as we,a as Me}from"./use-dark.63c149ae.js";import{a as Ae}from"./focus-manager.05708ea9.js";var je=ae({name:"QMenu",inheritAttrs:!1,props:{...de,...ye,...we,...Pe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:D},self:{type:String,validator:D},offset:{type:Array,validator:ve},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Te,"click","escapeKey"],setup(t,{slots:Q,emit:c,attrs:d}){let n=null,f,i,v;const P=re(),{proxy:g}=P,{$q:o}=g,a=w(null),s=w(!1),j=u(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),W=Me(t,o),{registerTick:_,removeTick:$}=Ce(),{registerTimeout:T}=Se(),{transitionProps:I,transitionStyle:L}=xe(t),{localScrollTarget:C,changeScrollEvent:U,unconfigureScrollTarget:z}=ge(t,E),{anchorEl:l,canShow:G}=me({showing:s}),{hide:S}=Oe({showing:s,canShow:G,handleShow:Y,handleHide:Z,hideOnRouteChange:j,processOnMount:!0}),{showPortal:x,hidePortal:O,renderPortal:J}=be(P,a,ee,"menu"),m={anchorEl:l,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&fe(e),!0}},b=u(()=>K(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),N=u(()=>t.cover===!0?b.value:K(t.self||"top start",o.lang.rtl)),V=u(()=>(t.square===!0?" q-menu--square":"")+(W.value===!0?" q-menu--dark q-dark":"")),X=u(()=>t.autoClose===!0?{onClick:p}:{}),q=u(()=>s.value===!0&&t.persistent!==!0);M(q,e=>{e===!0?(Ee(k),ke(m)):(H(k),R(m))});function h(){Ae(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function Y(e){if(n=t.noRefocus===!1?document.activeElement:null,qe(F),x(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const y=ne(e);if(y.left!==void 0){const{top:te,left:oe}=l.value.getBoundingClientRect();f={left:y.left-oe,top:y.top-te}}}i===void 0&&(i=M(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),_(()=>{r(),t.noFocus!==!0&&h()}),T(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),x(!0),c("show",e)},t.transitionDuration)}function Z(e){$(),O(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{O(!0),c("hide",e)},t.transitionDuration)}function B(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(Be(F),z(),R(m),H(k)),e!==!0&&(n=null)}function E(){(l.value!==null||t.scrollTarget!==void 0)&&(C.value=se(l.value,t.scrollTarget),U(C.value,r))}function p(e){v!==!0?(Fe(g,e),c("click",e)):v=!1}function F(e){q.value===!0&&t.noFocus!==!0&&ce(a.value,e.target)!==!0&&h()}function k(e){c("escapeKey"),S(e)}function r(){he({targetEl:a.value,offset:t.offset,anchorEl:l.value,anchorOrigin:b.value,selfOrigin:N.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return A(ie,I.value,()=>s.value===!0?A("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+V.value,d.class],style:[d.style,L.value],...X.value},ue(Q.default)):null)}return le(B),Object.assign(g,{focus:h,updatePosition:r}),J}});export{je as Q};