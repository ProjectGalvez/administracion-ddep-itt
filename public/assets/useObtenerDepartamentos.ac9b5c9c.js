import{d as t}from"./documentosApi.f9b655d1.js";import{u as a}from"./useQuery.esm.76380881.js";const r=async()=>{const{data:e}=await t.get("/departamentos");return e},n=()=>a(["departamentos"],r,{staleTime:36e5});export{n as u};