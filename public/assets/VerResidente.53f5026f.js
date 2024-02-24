import{Q as k,a as f}from"./QCard.4818aad5.js";import{Q as I,a as C,_ as N,b as V}from"./EntregasEstudiante.fe6106b4.js";import{Q as S}from"./QPage.f47cc484.js";import{v as w,aM as Q,q as _,z as u,t as d,d as o,Q as v,A as t,u as e,s as q,ab as R,F as E,ar as U,as as B,ap as T,B as g,aa as i,ao as D,at as z,x as G,r as A,_ as j,C as M,D as K,aq as Y}from"./index.b0b93e3c.js";import{a as y,Q as H}from"./QItem.f4f583b9.js";import{Q as $}from"./QItemLabel.933b096b.js";import{Q as F}from"./QTooltip.2842ecd4.js";import{Q as J,a as P}from"./QList.28d6af9b.js";import{_ as L}from"./LoaderSpinner.b1b399dd.js";import{d as O}from"./documentosApi.f427d296.js";import{u as W}from"./useQuery.esm.ec0861c0.js";import{Q as X}from"./QImg.d87e827b.js";import{u as Z}from"./useVerResidente.ad1bdba6.js";import{_ as tt}from"./BreadcrumbNav.fba4b1cf.js";import"./use-dark.63c149ae.js";import"./focusout.c03edb12.js";import"./focus-manager.05708ea9.js";import"./uid.42677368.js";import"./QBtnGroup.70024cb3.js";import"./QTimeline.5d3d9222.js";import"./useQueryClient.esm.98cf75d6.js";import"./utils.esm.728a0fef.js";import"./useMutation.esm.16d51942.js";import"./mutation.esm.2cad5aca.js";import"./DialogEliminar.7a03cb45.js";import"./QCardActions.47971319.js";import"./QDialog.ca25ac9d.js";import"./use-prevent-scroll.71b3f740.js";import"./ClosePopup.599d60b6.js";import"./position-engine.3be844ea.js";import"./selection.c0619a19.js";import"./axios.a596eead.js";const et=t("div",{class:"fontsize-14 text-weight-light q-mb-xs"}," Generar formatos de residencia ",-1),st=w({__name:"GenerarFormatos",props:{id:{}},setup(l){const c=Q(l,"id"),n="http://127.0.0.1:8000/api",s=()=>{const r=n+"/formato-carta-presentacion/"+c.value;window.open(r,"_blank")},x=()=>{const r=n+"/formato-informe-semestral/"+c.value;window.open(r,"_blank")},h=()=>{const r=n+"/formato-registro-asesoria/"+c.value;window.open(r,"_blank")},p=()=>{const r=n+"/formato-solicitud-residencia/"+c.value;window.open(r,"_blank")},b=()=>{const r=n+"/formato-asignacion-residencia/"+c.value;window.open(r,"_blank")};return(r,Ye)=>(_(),u(k,null,{default:d(()=>[o(f,null,{default:d(()=>[et]),_:1}),o(f,{class:"q-gutter-md"},{default:d(()=>[o(v,{color:"primary",label:"Solicitud de residencia profesional",onClick:p}),o(v,{color:"primary",label:"Fomato de asignaci\xF3n de asesor interno",onClick:b}),o(v,{color:"primary",label:"Carta de presentaci\xF3n y agradecimiento",onClick:s}),o(v,{color:"primary",label:"Informe semestral",onClick:x}),o(v,{color:"primary",label:"Registro asesoria",onClick:h})]),_:1})]),_:1}))}}),ot=async l=>{const{data:m}=await O.get("/residentes-doc-pendientes/"+l);return m},it=l=>{const{isLoading:m,data:c}=W({queryKey:["documentos-pendientes",l],queryFn:()=>ot(l),keepPreviousData:!0,staleTime:36e5});return{isLoading:m,data:c}},at={key:1,class:"q-pa-md q-gutter-md"},dt=t("div",{class:"fontsize-14 text-weight-light q-mb-xs"}," Documentos pendientes por entregar ",-1),ct=w({__name:"DocumentosPendientes",props:{id:{}},setup(l){const c=Q(l,"id"),{data:n,isLoading:s}=it(c.value);return(x,h)=>e(s)?(_(),u(L,{key:0})):e(n)?(_(),q("div",at,[dt,o(J,{bordered:"",padding:"",class:"rounded-borders"},{default:d(()=>[(_(!0),q(E,null,U(e(n),p=>B((_(),u(H,{key:p.documento_id},{default:d(()=>[o(y,{avatar:"",top:""},{default:d(()=>[o(T,{icon:"assignment",color:"grey","text-color":"white"})]),_:1}),o(y,null,{default:d(()=>[o($,{lines:"1"},{default:d(()=>[g(i(p.nombre_documento),1)]),_:2},1024),o($,{caption:""},{default:d(()=>[g(i(p.fecha_limite),1)]),_:2},1024)]),_:2},1024),p.fecha_limite_vencida?(_(),u(y,{key:0,side:""},{default:d(()=>[o(D,{name:"event_busy",color:"negative"},{default:d(()=>[o(F,null,{default:d(()=>[g(" Ya pas\xF3 la fecha l\xEDmite de entrega ")]),_:1})]),_:1})]),_:1})):(_(),u(y,{key:1,side:""},{default:d(()=>[o(D,{name:"event_available",color:"green"},{default:d(()=>[o(F,null,{default:d(()=>[g(" A\xFAn pendiente la fecha de entrega ")]),_:1})]),_:1})]),_:1}))]),_:2},1024)),[[z]])),128))]),_:1})])):R("",!0)}}),lt=w({__name:"FabResidente",props:{id:{}},setup(l){const c=Q(l,"id"),n=G(),s=()=>{n.push({name:"asignar-documento-residente",params:{id:c.value}})},x=()=>{n.push({name:"editar-residente",params:{id:c.value}})},h=A(!1);return(p,b)=>(_(),u(I,{modelValue:h.value,"onUpdate:modelValue":b[0]||(b[0]=r=>h.value=r),"vertical-actions-align":"right",color:"primary",glossy:"",icon:"keyboard_arrow_up",direction:"up"},{default:d(()=>[o(C,{"label-position":"left",color:"secondary",onClick:x,icon:"edit",label:"Editar"}),o(C,{"label-position":"left",color:"orange",onClick:s,icon:"post_add",label:"Agregar documentos"})]),_:1},8,["modelValue"]))}});const a=l=>(M("data-v-7c015ca4"),l=l(),K(),l),nt={class:"text-weight-medium"},rt={class:"text-data"},_t={class:"text-weight-medium"},ut={class:"text-weight-medium"},mt={class:"text-data"},ht=a(()=>t("div",{class:"fontsize-14 text-weight-light q-mb-xs"}," Datos de la/el residente ",-1)),pt={class:"row"},gt={class:"col-xs-12 col-sm-6 col-md-3 q-mb-xs"},xt={class:"col-xs-12 col-sm-6 col-md-9"},vt={class:"row wrap justify-start items-start content-start q-gutter-md"},ft={class:"col-auto"},wt=a(()=>t("div",{class:"text-weight-medium"},"Nombre:",-1)),bt={class:"text-subtitle1 text-weight-light"},yt={class:"col-auto"},kt=a(()=>t("div",{class:"text-weight-medium"},"N\xFAmero de control:",-1)),Qt={class:"text-subtitle1 text-weight-light"},Rt={class:"col-auto"},Ct=a(()=>t("div",{class:"text-weight-medium"},"Carrera:",-1)),qt={class:"text-subtitle1 text-weight-light"},Dt={class:"col-auto"},$t=a(()=>t("div",{class:"text-weight-medium"},"Domicilio:",-1)),Ft={class:"text-subtitle1 text-weight-light"},Pt={class:"col-auto"},At=a(()=>t("div",{class:"text-weight-medium"},"E-mail:",-1)),Lt={class:"text-subtitle1 text-weight-light"},It={class:"col-auto"},Nt=a(()=>t("div",{class:"text-weight-medium"}," Para seguridad social acudir: ",-1)),Vt={class:"text-subtitle1 text-weight-light"},St={class:"col-auto"},Et=a(()=>t("div",{class:"text-weight-medium"},"N\xFAmero de seguridad social:",-1)),Ut={class:"text-subtitle1 text-weight-light"},Bt={class:"col-auto"},Tt=a(()=>t("div",{class:"text-weight-medium"},"Ciudad:",-1)),zt={class:"text-subtitle1 text-weight-light"},Gt={class:"col-auto"},jt=a(()=>t("div",{class:"text-weight-medium"},"Tel\xE9fono:",-1)),Mt={class:"text-subtitle1 text-weight-light"},Kt=a(()=>t("div",{class:"fontsize-14 text-weight-light q-mb-xs"}," Datos de la empresa ",-1)),Yt={class:"row wrap justify-start items-start content-start q-gutter-md"},Ht={class:"col-auto"},Jt=a(()=>t("div",{class:"text-weight-medium"},"Nombre:",-1)),Ot={class:"text-subtitle1 text-weight-light"},Wt={class:"col-auto"},Xt=a(()=>t("div",{class:"text-weight-medium"},"Giro, ramo o sector:",-1)),Zt={class:"text-subtitle1 text-weight-light"},te={class:"col-auto"},ee=a(()=>t("div",{class:"text-weight-medium"},"RFC:",-1)),se={class:"text-subtitle1 text-weight-light"},oe={class:"col-auto"},ie=a(()=>t("div",{class:"text-weight-medium"},"Domicilio:",-1)),ae={class:"text-subtitle1 text-weight-light"},de={class:"col-auto"},ce=a(()=>t("div",{class:"text-weight-medium"},"Colonia:",-1)),le={class:"text-subtitle1 text-weight-light"},ne={class:"col-auto"},re=a(()=>t("div",{class:"text-weight-medium"},"C.P.:",-1)),_e={class:"text-subtitle1 text-weight-light"},ue={class:"col-auto"},me=a(()=>t("div",{class:"text-weight-medium"},"Ciudad:",-1)),he={class:"text-subtitle1 text-weight-light"},pe={class:"col-auto"},ge=a(()=>t("div",{class:"text-weight-medium"},"Telefono:",-1)),xe={class:"text-subtitle1 text-weight-light"},ve={class:"col-auto"},fe=a(()=>t("div",{class:"text-weight-medium"},"Misi\xF3n de la empresa:",-1)),we={class:"text-subtitle1 text-weight-light"},be={class:"col-auto"},ye=a(()=>t("div",{class:"text-weight-medium"},"Titular de la empresa:",-1)),ke={class:"text-subtitle1 text-weight-light"},Qe={class:"col-auto"},Re=a(()=>t("div",{class:"text-weight-medium"}," Puesto del titular de la empresa: ",-1)),Ce={class:"text-subtitle1 text-weight-light"},qe={class:"col-auto"},De=a(()=>t("div",{class:"text-weight-medium"},"Nombre de la asesor\xEDa externa:",-1)),$e={class:"text-subtitle1 text-weight-light"},Fe={class:"col-auto"},Pe=a(()=>t("div",{class:"text-weight-medium"},"Puesto de la asesor\xEDa externa:",-1)),Ae={class:"text-subtitle1 text-weight-light"},Le={class:"col-auto"},Ie=a(()=>t("div",{class:"text-weight-medium"}," Nombre de la persona que firmar\xE1: ",-1)),Ne={class:"text-subtitle1 text-weight-light"},Ve={class:"col-auto"},Se=a(()=>t("div",{class:"text-weight-medium"}," Puesto de la persona que firmar\xE1: ",-1)),Ee={class:"text-subtitle1 text-weight-light"},Ue=w({__name:"DatosResidencia",props:{id:{}},setup(l){const c=Q(l,"id"),{isLoading:n,residente:s}=Z(c.value+"");return(x,h)=>e(n)?(_(),u(L,{key:0})):e(s)?(_(),u(k,{key:1},{default:d(()=>[o(f,null,{default:d(()=>[t("div",nt,[g(" Nombre del proyecto: "),t("span",rt,i(e(s).proyecto),1),t("small",null,"["+i(e(s).tipo_proyecto)+"]",1)]),t("div",_t,[g(" Asesor interno: "),t("span",null,i(e(s).nombre_asesor),1)]),t("div",ut,[g(" Periodo proyectado: "),t("span",mt,i(e(s).nombre_periodo),1)]),o(P,{color:"orange"}),ht,t("div",pt,[t("div",gt,[e(s).url_foto?(_(),u(X,{key:0,src:e(s).url_foto,width:"200px"},null,8,["src"])):R("",!0)]),t("div",xt,[t("div",vt,[t("div",ft,[wt,t("div",bt,i(e(s).nombre_estudiante)+" "+i(e(s).apellidos),1)]),t("div",yt,[kt,t("div",Qt,i(e(s).numero_control),1)]),t("div",Rt,[Ct,t("div",qt,i(e(s).nombre_carrera),1)]),t("div",Dt,[$t,t("div",Ft,i(e(s).domicilio_estudiante),1)]),t("div",Pt,[At,t("div",Lt,i(e(s).email),1)]),t("div",It,[Nt,t("div",Vt,i(e(s).seguridad_social),1)]),t("div",St,[Et,t("div",Ut,i(e(s).no_seguridad_social),1)]),t("div",Bt,[Tt,t("div",zt,i(e(s).ciudad_estudiante),1)]),t("div",Gt,[jt,t("div",Mt,i(e(s).telefono_estudiante),1)])])])]),o(P,{color:"orange"}),Kt,t("div",Yt,[t("div",Ht,[Jt,t("div",Ot,i(e(s).nombre),1)]),t("div",Wt,[Xt,t("div",Zt,i(e(s).giro),1)]),t("div",te,[ee,t("div",se,i(e(s).rfc),1)]),t("div",oe,[ie,t("div",ae,i(e(s).domicilio),1)]),t("div",de,[ce,t("div",le,i(e(s).colonia),1)]),t("div",ne,[re,t("div",_e,i(e(s).cp),1)]),t("div",ue,[me,t("div",he,i(e(s).ciudad),1)]),t("div",pe,[ge,t("div",xe,i(e(s).telefono),1)]),t("div",ve,[fe,t("div",we,i(e(s).mision),1)]),t("div",be,[ye,t("div",ke,i(e(s).titular),1)]),t("div",Qe,[Re,t("div",Ce,i(e(s).titular_puesto),1)]),t("div",qe,[De,t("div",$e,i(e(s).asesor_externo),1)]),t("div",Fe,[Pe,t("div",Ae,i(e(s).asesor_externo_puesto),1)]),t("div",Le,[Ie,t("div",Ne,i(e(s).nombre_firmara),1)]),t("div",Ve,[Se,t("div",Ee,i(e(s).nombre_firmara_puesto),1)])])]),_:1})]),_:1})):R("",!0)}});var Be=j(Ue,[["__scopeId","data-v-7c015ca4"]]);const Te={class:"row"},ze={class:"col-12"},Ge={class:"row q-pt-md"},je={class:"col-xs-12 col-md-6 q-pr-xs"},Me={class:"col-xs-12 col-md-6 q-pl-xs"},Ke={class:"col-xs-12 col-md-6 q-pl-xs"},Cs=w({__name:"VerResidente",setup(l){const m=Y(),{id:c=""}=m.params,n=[{label:"Residentes",icon:"history_edu",to:"listar-residente"},{label:"Ver residente",icon:"visibility"}],s=A([18,18]);return(x,h)=>(_(),u(S,{padding:""},{default:d(()=>[o(tt,{pages:n,titlePage:"Ver Residente"}),t("div",Te,[t("div",ze,[o(Be,{id:e(c)+""},null,8,["id"])])]),t("div",Ge,[t("div",je,[o(k,null,{default:d(()=>[o(f,null,{default:d(()=>[o(N,{id:e(c)+""},null,8,["id"])]),_:1})]),_:1})]),t("div",Me,[o(k,null,{default:d(()=>[o(f,null,{default:d(()=>[o(ct,{id:e(c)+""},null,8,["id"])]),_:1})]),_:1})]),t("div",Ke,[o(st,{id:e(c)+""},null,8,["id"])])]),o(V,{position:"bottom-right",offset:s.value},{default:d(()=>[o(lt,{id:e(c)+""},null,8,["id"])]),_:1},8,["offset"])]),_:1}))}});export{Cs as default};
