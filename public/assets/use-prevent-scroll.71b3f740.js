import{l as u,a7 as n,az as l}from"./index.b0b93e3c.js";function d(o,r,i){let e;function t(){e!==void 0&&(n.remove(e),e=void 0)}return u(()=>{o.value===!0&&t()}),{removeFromHistory:t,addToHistory(){e={condition:()=>i.value===!0,handler:r},n.add(e)}}}function v(){let o;return{preventBodyScroll(r){r!==o&&(o!==void 0||r===!0)&&(o=r,l(r))}}}export{v as a,d as u};
