import{d as y}from"./documentosApi.5a915086.js";import{r as f,x as h}from"./index.511ce7da.js";import{u as v}from"./useQueryClient.esm.18f38723.js";import{u as z}from"./useMutation.esm.1025419c.js";const x=(t,n)=>{const o=v(),s=f(null);let u;const i=async e=>{try{u=e.get("id"),e.append("_method","PUT");const{data:a}=await y.post(`${t}/${e.get("id")}`,e,{headers:{"Content-Type":"multipart/form-data"}});return a}catch(a){throw a}},l=h(),c=t.replace(/^\//,""),{mutate:p,isLoading:m,error:d,isSuccess:r}=z(i,{onSuccess:()=>{o.invalidateQueries({queryKey:[c],exact:!1}),o.invalidateQueries({queryKey:[c,u],exact:!1}),l.push({name:n})},onError:e=>{var a;e.response?s.value=(a=e.response)==null?void 0:a.data:s.value=e}});return{actalizarRecurso:p,isLoadingActualizar:m,error:d,errorServer:s,isSuccess:r}},A=(t,n)=>{const o=v(),s=f(null),u=async r=>{try{const{data:e}=await y.patch(`${t}/${r.id}`,r);return e}catch(e){throw e}},i=h(),l=t.replace(/^\//,""),{mutate:c,isLoading:p,error:m,isSuccess:d}=z(u,{onSuccess:()=>{o.invalidateQueries({queryKey:[l],exact:!1}),i.push({name:n})},onError:r=>{var e;r.response?s.value=(e=r.response)==null?void 0:e.data:s.value=r}});return{actalizarRecurso:c,isLoadingActualizar:p,error:m,errorServer:s,isSuccess:d}};export{A as a,x as u};
