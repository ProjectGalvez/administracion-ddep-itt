import{Q as K}from"./QPage.30c35a64.js";import{Q as W,a as X}from"./QLayout.99dafb16.js";import{j as P,c as d,h as u,k as H,w as j,o as Y,l as Z,m as ee,n as te,Q as p,p as ae,g as ne,_ as L,r as z,q as x,s as S,d as r,t as m,v as oe,x as le,y as se,z as ie,A as t,u as re,B as w,C as ce,D as ue}from"./index.511ce7da.js";import{u as de}from"./use-quasar.42b52178.js";import{u as me,a as ve,b as ge,c as fe}from"./use-panel.d05e5807.js";import{u as _e,a as he}from"./use-dark.2ddafa12.js";import{u as pe,a as xe,b as be}from"./use-fullscreen.b6949ea7.js";import"./QResizeObserver.742b6703.js";import"./touch.3df10340.js";import"./selection.93e3bd86.js";import"./use-cache.b0833c75.js";var h=P({name:"QCarouselSlide",props:{...me,imgSrc:String},setup(e,{slots:a}){const s=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>u("div",{class:"q-carousel__slide",style:s.value},H(a.default))}}),ye=P({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:a}){const s=d(()=>`q-carousel__control absolute absolute-${e.position}`),l=d(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>u("div",{class:s.value,style:l.value},H(a.default))}});const Ce=["top","right","bottom","left"],qe=["regular","flat","outline","push","unelevated"];var Se=P({name:"QCarousel",props:{..._e,...ve,...pe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>qe.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ce.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...xe,...ge],setup(e,{slots:a}){const{proxy:{$q:s}}=ne(),l=he(e,s);let n=null,v;const{updatePanelsList:c,getPanelContent:k,panelDirectives:f,goToPanel:I,previousPanel:$,nextPanel:Q,getEnabledPanels:O,panelIndex:_}=fe(),{inFullscreen:T}=be(),U=d(()=>T.value!==!0&&e.height!==void 0?{height:e.height}:{}),b=d(()=>e.vertical===!0?"vertical":"horizontal"),J=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(T.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${b.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),B=d(()=>{const o=[e.prevIcon||s.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||s.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&s.lang.rtl===!0?o.reverse():o}),D=d(()=>e.navigationIcon||s.iconSet.carousel.navigationIcon),R=d(()=>e.navigationActiveIcon||D.value),E=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),y=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));j(()=>e.modelValue,()=>{e.autoplay&&C()}),j(()=>e.autoplay,o=>{o?C():n!==null&&(clearTimeout(n),n=null)});function C(){const o=te(e.autoplay)===!0?Math.abs(e.autoplay):5e3;n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,o>=0?Q():$()},o)}Y(()=>{e.autoplay&&C()}),Z(()=>{n!==null&&clearTimeout(n)});function N(o,g){return u("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${o} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[u("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},O().map(g))])}function G(){const o=[];if(e.navigation===!0){const g=a["navigation-icon"]!==void 0?a["navigation-icon"]:i=>u(p,{key:"nav"+i.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${i.active===!0?"":"in"}active`,...i.btnProps,onClick:i.onClick}),q=v-1;o.push(N("buttons",(i,V)=>{const A=i.props.name,F=_.value===V;return g({index:V,maxIndex:q,name:A,active:F,btnProps:{icon:F===!0?R.value:D.value,size:"sm",...y.value},onClick:()=>{I(A)}})}))}else if(e.thumbnails===!0){const g=e.controlColor!==void 0?` text-${e.controlColor}`:"";o.push(N("thumbnails",q=>{const i=q.props;return u("img",{key:"tmb#"+i.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${i.name===e.modelValue?"":"in"}active`+g,src:i.imgSrc||i["img-src"],onClick:()=>{I(i.name)}})}))}return e.arrows===!0&&_.value>=0&&((e.infinite===!0||_.value>0)&&o.push(u("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${b.value} absolute flex flex-center`},[u(p,{icon:B.value[0],...y.value,onClick:$})])),(e.infinite===!0||_.value<v-1)&&o.push(u("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${b.value} absolute flex flex-center`},[u(p,{icon:B.value[1],...y.value,onClick:Q})]))),ae(a.control,o)}return()=>(v=c(a),u("div",{class:J.value,style:U.value},[ee("div",{class:"q-carousel__slides-container"},k(),"sl-cont",e.swipeable,()=>f.value)].concat(G())))}});const we={setup(){return{slide:z(1),fullscreen:z(!1)}}},Pe={class:"q-pt-md"};function ke(e,a,s,l,n,v){return x(),S("div",Pe,[r(Se,{swipeable:"",animated:"",arrows:"",modelValue:l.slide,"onUpdate:modelValue":a[1]||(a[1]=c=>l.slide=c),fullscreen:l.fullscreen,"onUpdate:fullscreen":a[2]||(a[2]=c=>l.fullscreen=c),infinite:""},{control:m(()=>[r(ye,{position:"bottom-right",offset:[18,18]},{default:m(()=>[r(p,{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:l.fullscreen?"fullscreen_exit":"fullscreen",onClick:a[0]||(a[0]=c=>l.fullscreen=!l.fullscreen)},null,8,["icon"])]),_:1})]),default:m(()=>[r(h,{name:1,"img-src":"/banner-1.jpg"}),r(h,{name:2,"img-src":"/banner-2.jpg"}),r(h,{name:3,"img-src":"/banner-3.jpg"}),r(h,{name:4,"img-src":"/banner-4.jpg"})]),_:1},8,["modelValue","fullscreen"])])}var Ie=L(we,[["render",ke]]);const M=e=>(ce("data-v-2c919a90"),e=e(),ue(),e),$e={class:""},Qe={class:"alto flex justify-between items-center"},Te=M(()=>t("div",{class:"logo"},[t("div",{class:"fontsize-18 text-center text-weight-light flex items-center"}," DDEP - ITT ")],-1)),Be={class:"menu"},De={key:0},Ee={key:1},Ne=M(()=>t("div",{class:"row items-center section1"},[t("div",{class:"col-xs-12 col-sm-6 q-pa-lg items-center"},[t("div",{class:"fontsize-18 text-weight-light flex"},[w(" Bienvenido a la administraci\xF3n del "),t("span",{class:"depto"},"Departamento de Divisi\xF3n de Estudios Profesionales")]),t("p",null," Enfocados en brindar las herramientas y apoyo necesarios para que alcances el \xE9xito en tus residencias profesionales. ")]),t("div",{class:"col-xs-12 col-sm-6 items-center"},[t("div",{class:"text-center"},[t("div",{class:"image-container"},[t("img",{src:"/logo.png",style:{height:"300px","max-width":"300px"},class:"glow-image"})])])])],-1)),Ve=oe({__name:"HomePage",setup(e){const s=de().localStorage.getItem("user"),l=JSON.parse(s+""),n=le(),v=()=>{const c=l.role;c.includes("admin")?n.push({name:"dashboard-home"}):c.includes("capturista")?n.push({name:"dashboard-home"}):c.includes("estudiante")?n.push({name:"dashboard-estudiante"}):n.push({name:"not-found"})};return(c,k)=>{const f=se("router-link");return x(),ie(W,{class:"home-page"},{default:m(()=>[r(X,null,{default:m(()=>[r(K,{padding:""},{default:m(()=>[t("div",$e,[t("div",Qe,[Te,t("div",Be,[t("ul",null,[re(l)?(x(),S("li",De,[t("a",{onClick:v},"Entrar")])):(x(),S("li",Ee,[r(f,{to:{name:"login"}},{default:m(()=>[w("Inicio de Sesi\xF3n")]),_:1})])),t("li",null,[r(f,{to:{name:"about"}},{default:m(()=>[w("Acerca de")]),_:1})])])])]),Ne]),r(Ie)]),_:1})]),_:1})]),_:1})}}});var Ge=L(Ve,[["__scopeId","data-v-2c919a90"]]);export{Ge as default};
