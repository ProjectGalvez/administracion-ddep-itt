import{a as s}from"./axios.a596eead.js";import{a9 as r}from"./index.b0b93e3c.js";const a="http://127.0.0.1:8000/api",o=s.create({baseURL:a});o.interceptors.request.use(e=>{e.headers.Accept="application/json";const t=r.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>{Promise.reject(e)});o.interceptors.response.use(e=>e,e=>(e.response&&e.response.status==401&&(localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.href="/login"),Promise.reject(e)));export{o as d};
