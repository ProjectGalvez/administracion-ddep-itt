import{aU as i,aV as o}from"./index.511ce7da.js";import{d as u}from"./documentosApi.5a915086.js";import{u as p}from"./useQueryClient.esm.18f38723.js";import{u as l}from"./useMutation.esm.1025419c.js";const f=(t,r)=>{const a=p(),s=async e=>{try{o.show({delay:500,message:"Eliminando..."}),await u.delete(t,{params:{ids:e}}),o.hide()}catch(m){throw o.hide(),m}},{mutate:n,isLoading:c}=l(s,{onSuccess:()=>{i.create({message:"Se elimin\xF3 correctamente",color:"positive",position:"top-right",type:"positive"}),a.invalidateQueries({queryKey:[r],exact:!1})},onError:e=>{i.create({message:e+"",color:"negative",position:"top-right",type:"negative"})}});return{eliminarRecurso:n,isLoading:c}};export{f as u};
