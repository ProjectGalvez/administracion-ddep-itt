import{d as t}from"./documentosApi.5a915086.js";import{u as a}from"./useQuery.esm.07b4cbcd.js";const r=async()=>{const{data:e}=await t.get("/departamentos");return e},n=()=>a(["departamentos"],r,{staleTime:36e5});export{n as u};
