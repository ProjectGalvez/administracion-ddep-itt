import{d as y}from"./documentosApi.f427d296.js";import{r as f,x as v}from"./index.b0b93e3c.js";import{u as C}from"./useQueryClient.esm.98cf75d6.js";import{u as h}from"./useMutation.esm.16d51942.js";const w=(a,o)=>{const u=C(),r=f(null),c=async s=>{try{const{data:e}=await y.post(a,s);return e}catch(e){throw e}},n=a.replace(/^\//,""),i=v(),{mutate:l,isLoading:m,error:p,isSuccess:d}=h(c,{onSuccess:()=>{u.invalidateQueries({queryKey:[n],exact:!1}),i.push({name:o})},onError:s=>{var e;s.response?r.value=(e=s.response)==null?void 0:e.data:r.value=s}});return{createResource:l,isLoadingCreate:m,error:p,errorServer:r,isSuccess:d}},x=(a,o)=>{const u=C(),r=f(null),c=v(),n=async e=>{try{const{data:t}=await y.post(a,e,{headers:{"Content-Type":"multipart/form-data"}});return t}catch(t){throw t}},i=a.replace(/^\//,""),{mutate:l,isLoading:m,error:p,isSuccess:d,status:s}=h(n,{onSuccess:()=>{u.invalidateQueries({queryKey:[i],exact:!1}),c.push({name:o})},onError:e=>{var t;e.response?r.value=(t=e.response)==null?void 0:t.data:r.value=e}});return{createResource:l,isLoadingCreate:m,error:p,errorServer:r,isSuccess:d,status:s}};export{w as a,x as u};
