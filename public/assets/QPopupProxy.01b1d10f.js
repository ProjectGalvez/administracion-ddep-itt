import{Q as P}from"./QDialog.84ddac0d.js";import{Q as x}from"./QMenu.7408e287.js";import{u as y,c as Q}from"./position-engine.9bef8d76.js";import{j as b,r as p,c as h,w as j,aj as C,h as k,g as M}from"./index.6aee2e30.js";var O=b({name:"QPopupProxy",props:{...y,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(a,{slots:g,emit:c,attrs:f}){const{proxy:r}=M(),{$q:l}=r,n=p(!1),t=p(null),i=h(()=>parseInt(a.breakpoint,10)),{canShow:m}=Q({showing:n});function u(){return l.screen.width<i.value||l.screen.height<i.value?"dialog":"menu"}const o=p(u()),v=h(()=>o.value==="menu"?{maxHeight:"99vh"}:{});j(()=>u(),e=>{n.value!==!0&&(o.value=e)});function d(e){n.value=!0,c("show",e)}function w(e){n.value=!1,o.value=u(),c("hide",e)}return Object.assign(r,{show(e){m(e)===!0&&t.value.show(e)},hide(e){t.value.hide(e)},toggle(e){t.value.toggle(e)}}),C(r,"currentComponent",()=>({type:o.value,ref:t.value})),()=>{const e={ref:t,...v.value,...f,onShow:d,onHide:w};let s;return o.value==="dialog"?s=P:(s=x,Object.assign(e,{target:a.target,contextMenu:a.contextMenu,noParentEvent:!0,separateClosePopup:!0})),k(s,e,g.default)}}});export{O as Q};
