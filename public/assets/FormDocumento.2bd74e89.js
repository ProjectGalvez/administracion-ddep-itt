import{Q as He,a as Y}from"./QCard.cb508ff7.js";import{Q as Oe,a as $e}from"./QForm.f7dbdbf9.js";import{Q as U}from"./QInput.fb482f67.js";import{J as Ee,j as ie,bb as ae,r as P,c as w,w as F,o as re,h as m,ao as A,k as se,Q as L,g as ue,ak as ce,bc as Ae,ai as de,an as Z,l as Ne,a0 as De,U as Fe,v as Qe,aM as I,q as D,z as ee,t as k,d as y,A as C,B as E,aa as te,u as Re,s as oe,ar as je,F as Ue,ab as Ie,as as Me,ac as M}from"./index.6aee2e30.js";import{Q as Ke}from"./QDate.90d9c8b6.js";import{Q as We}from"./QPopupProxy.01b1d10f.js";import{Q as Ge}from"./QFile.8e16de15.js";import{Q as Ve}from"./QBtnGroup.36c427f5.js";import{Q as Je}from"./QMenu.7408e287.js";import{d as Xe}from"./focusout.012d42f6.js";import{u as Ye}from"./uid.42677368.js";import{Q as Ze}from"./QTooltip.91dcf398.js";import{a as ne,Q as et}from"./QItem.7d9afe8e.js";import{u as tt,a as ot}from"./use-dark.6d3765c8.js";import{u as nt,a as lt,b as it}from"./use-fullscreen.26bf297d.js";import{e as at}from"./use-key-composition.138705f4.js";import{a as rt}from"./focus-manager.05708ea9.js";import{Q as st}from"./QToggle.8df908e5.js";import{C as ut}from"./ClosePopup.7bc30a2d.js";import{g as ct}from"./errorUtils.9be85d5d.js";function fe(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const l=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,a=l.display;return a==="block"||a==="table"?e:fe(e.parentNode)}function K(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function me(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let l=0;t.count!==0&&l<e.childNodes.length;l++)o=me(e.childNodes[l],t,o);return o}const dt=/^https?:\/\//;class ft{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(K(t.anchorNode,this.el,!0)&&K(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?fe(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),l=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),l.removeAllRanges(),l.addRange(o)):(l.selectAllChildren(this.el),l.collapseToEnd())}savePosition(){let t=-1,o;const l=document.getSelection(),a=this.el.parentNode;if(l.focusNode&&K(l.focusNode,a))for(o=l.focusNode,t=l.focusOffset;o&&o!==a;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),l=me(this.el,{count:this.savedPos});l&&(l.collapse(!1),o.removeAllRanges(),o.addRange(l))}}hasParent(t,o){const l=o?this.parent:this.blockParent;return l!==null?l.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,l=this.parent){return l===null?!1:t.includes(l.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,l.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const l=document.queryCommandValue(t);return l===`"${o}"`||l===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const a=document.queryCommandState(t);return o!==void 0?a===o:a}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,l=Ee){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){l();const a=window.open();a.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),a.print(),a.close();return}else if(t==="link"){const a=this.getParentAttribute("href");if(a===null){const c=this.selectWord(this.selection),s=c?c.toString():"";if(!s.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=dt.test(s)?s:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(c.getRangeAt(0))}else this.eVm.editLinkUrl.value=a,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),l();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),l();return}document.execCommand(t,!1,o),l()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const l=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const a=t.focusNode,c=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",l[0],"character"),t.modify("move",l[1],"word"),t.extend(a,c),t.modify("extend",l[1],"character"),t.modify("extend",l[0],"word"),t}}const mt=Object.keys(ae),pt=e=>mt.reduce((t,o)=>{const l=e[o];return l!==void 0&&(t[o]=l),t},{});var ht=ie({name:"QBtnDropdown",props:{...ae,...Xe,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:o}){const{proxy:l}=ue(),a=P(e.modelValue),c=P(null),s=Ye(),p=w(()=>{const d={"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s,"aria-label":e.toggleAriaLabel||l.$q.lang.label[a.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(d["aria-disabled"]="true"),d}),v=w(()=>"q-btn-dropdown__arrow"+(a.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),x=w(()=>Ae(e)),h=w(()=>pt(e));F(()=>e.modelValue,d=>{c.value!==null&&c.value[d?"show":"hide"]()}),F(()=>e.split,H);function g(d){a.value=!0,o("beforeShow",d)}function u(d){o("show",d),o("update:modelValue",!0)}function r(d){a.value=!1,o("beforeHide",d)}function _(d){o("hide",d),o("update:modelValue",!1)}function B(d){o("click",d)}function O(d){ce(d),H(),o("click",d)}function q(d){c.value!==null&&c.value.toggle(d)}function $(d){c.value!==null&&c.value.show(d)}function H(d){c.value!==null&&c.value.hide(d)}return Object.assign(l,{show:$,hide:H,toggle:q}),re(()=>{e.modelValue===!0&&$()}),()=>{const d=[m(A,{class:v.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&d.push(m(Je,{ref:c,id:s,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:g,onShow:u,onBeforeHide:r,onHide:_},t.default)),e.split===!1?m(L,{class:"q-btn-dropdown q-btn-dropdown--simple",...h.value,...p.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:B},{default:()=>se(t.label,[]).concat(d),loading:t.loading}):m(Ve,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...x.value,glossy:e.glossy,stretch:e.stretch},()=>[m(L,{class:"q-btn-dropdown--current",...h.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:O},{default:t.label,loading:t.loading}),m(L,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...p.value,...x.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>d)])}}});function pe(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function G(e){return m("div",{class:"q-editor__toolbar-group"},e)}function he(e,t,o,l=!1){const a=l||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),c=[];if(t.tip&&e.$q.platform.is.desktop){const s=t.key?m("div",[m("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;c.push(m(Ze,{delay:1e3},()=>[m("div",{innerHTML:t.tip}),s]))}return m(L,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:a?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:a&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(s){o&&o(),pe(s,t,e)}},()=>c)}function gt(e,t){const o=t.list==="only-icons";let l=t.label,a=t.icon!==null?t.icon:void 0,c,s;function p(){x.component.proxy.hide()}if(o)s=t.options.map(h=>{const g=h.type===void 0?e.caret.is(h.cmd,h.param):!1;return g&&(l=h.tip,a=h.icon!==null?h.icon:void 0),he(e,h,p,g)}),c=e.toolbarBackgroundClass.value,s=[G(s)];else{const h=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,g=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,u=t.list==="no-icons";s=t.options.map(r=>{const _=r.disable?r.disable(e):!1,B=r.type===void 0?e.caret.is(r.cmd,r.param):!1;B&&(l=r.tip,a=r.icon!==null?r.icon:void 0);const O=r.htmlTip;return m(et,{active:B,activeClass:h,clickable:!0,disable:_,dense:!0,onClick(q){p(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),pe(q,r,e)}},()=>[u===!0?null:m(ne,{class:B?h:g,side:!0},()=>m(A,{name:r.icon!==null?r.icon:void 0})),m(ne,O?()=>m("div",{class:"text-no-wrap",innerHTML:r.htmlTip}):r.tip?()=>m("div",{class:"text-no-wrap"},r.tip):void 0)])}),c=[e.toolbarBackgroundClass.value,g]}const v=t.highlight&&l!==t.label,x=m(ht,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:v?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:v&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:l,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:a,contentClass:c,onShow:h=>e.emit("dropdownShow",h),onHide:h=>e.emit("dropdownHide",h),onBeforeShow:h=>e.emit("dropdownBeforeShow",h),onBeforeHide:h=>e.emit("dropdownBeforeHide",h)},()=>s);return x}function vt(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>G(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?se(e.slots[o.slot]):o.type==="dropdown"?gt(e,o):he(e,o))))}function bt(e,t,o,l={}){const a=Object.keys(l);if(a.length===0)return{};const c={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return a.forEach(s=>{const p=l[s];c[s]={cmd:"fontName",param:p,icon:o,tip:p,htmlTip:`<font face="${p}">${p}</font>`}}),c}function yt(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const l=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[m("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),m("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:a=>{ce(a),o=a.target.value},onKeydown:a=>{if(de(a)!==!0)switch(a.keyCode){case 13:return Z(a),l();case 27:Z(a),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),G([m(L,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),m(L,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:l})])]}}const wt=Object.prototype.toString,W=Object.prototype.hasOwnProperty,kt=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function le(e){if(e!==Object(e)||kt.has(wt.call(e))===!0||e.constructor&&W.call(e,"constructor")===!1&&W.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||W.call(e,t)}function ge(){let e,t,o,l,a,c,s=arguments[0]||{},p=1,v=!1;const x=arguments.length;for(typeof s=="boolean"&&(v=s,s=arguments[1]||{},p=2),Object(s)!==s&&typeof s!="function"&&(s={}),x===p&&(s=this,p--);p<x;p++)if((e=arguments[p])!==null)for(t in e)o=s[t],l=e[t],s!==l&&(v===!0&&l&&((a=Array.isArray(l))||le(l)===!0)?(a===!0?c=Array.isArray(o)===!0?o:[]:c=le(o)===!0?o:{},s[t]=ge(v,c,l)):l!==void 0&&(s[t]=l));return s}var Ct=ie({name:"QEditor",props:{...tt,...nt,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...lt,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:o,attrs:l}){const{proxy:a,vnode:c}=ue(),{$q:s}=a,p=ot(e,s),{inFullscreen:v,toggleFullscreen:x}=it(),h=at(l,c),g=P(null),u=P(null),r=P(null),_=P(!1),B=w(()=>!e.readonly&&!e.disable);let O,q,$=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),O=window.getComputedStyle(document.body).fontFamily;const H=w(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),d=w(()=>{const n=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:n,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!B.value,size:"sm"}}),N=w(()=>{const n=s.lang.editor,i=s.iconSet.editor;return{bold:{cmd:"bold",icon:i.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:i.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:i.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:i.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:i.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:i.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:i.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:i.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:f=>f.caret&&!f.caret.can("link"),icon:i.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:i.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:i.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:i.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:i.left,tip:n.left},center:{cmd:"justifyCenter",icon:i.center,tip:n.center},right:{cmd:"justifyRight",icon:i.right,tip:n.right},justify:{cmd:"justifyFull",icon:i.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:i.print,tip:n.print,key:80},outdent:{type:"no-state",disable:f=>f.caret&&!f.caret.can("outdent"),cmd:"outdent",icon:i.outdent,tip:n.outdent},indent:{type:"no-state",disable:f=>f.caret&&!f.caret.can("indent"),cmd:"indent",icon:i.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:i.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:i.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:i.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:i.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:i.heading1||i.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:i.heading2||i.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:i.heading3||i.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:i.heading4||i.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:i.heading5||i.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:i.heading6||i.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:i.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:i.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:i.size1||i.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:i.size2||i.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:i.size3||i.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:i.size4||i.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:i.size5||i.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:i.size6||i.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:i.size7||i.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),V=w(()=>{const n=e.definitions||{},i=e.definitions||e.fonts?ge(!0,{},N.value,n,bt(O,s.lang.editor.defaultFont,s.iconSet.editor.font,e.fonts)):N.value;return e.toolbar.map(f=>f.map(b=>{if(b.options)return{type:"dropdown",icon:b.icon,label:b.label,size:"sm",dense:!0,fixedLabel:b.fixedLabel,fixedIcon:b.fixedIcon,highlight:b.highlight,list:b.list,options:b.options.map(Le=>i[Le])};const T=i[b];return T?T.type==="no-state"||n[b]&&(T.cmd===void 0||N.value[T.cmd]&&N.value[T.cmd].type==="no-state")?T:Object.assign({type:"toggle"},T):{type:"slot",slot:b}}))}),S={$q:s,props:e,slots:t,emit:o,inFullscreen:v,toggleFullscreen:x,runCmd:R,isViewingSource:_,editLinkUrl:r,toolbarBackgroundClass:H,buttonProps:d,contentRef:u,buttons:V,setContent:Q};F(()=>e.modelValue,n=>{$!==n&&($=n,Q(n,!0))}),F(r,n=>{o(`link${n?"Show":"Hide"}`)});const ve=w(()=>e.toolbar&&e.toolbar.length!==0),be=w(()=>{const n={},i=f=>{f.key&&(n[f.key]={cmd:f.cmd,param:f.param})};return V.value.forEach(f=>{f.forEach(b=>{b.options?b.options.forEach(i):i(b)})}),n}),ye=w(()=>v.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),we=w(()=>`q-editor q-editor--${_.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(v.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(p.value===!0?" q-editor--dark q-dark":"")),ke=w(()=>[e.contentClass,"q-editor__content",{col:v.value,"overflow-auto":v.value||e.maxHeight}]),Ce=w(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function Se(){if(u.value!==null){const n=`inner${_.value===!0?"Text":"HTML"}`,i=u.value[n];i!==e.modelValue&&($=i,o("update:modelValue",i))}}function xe(n){if(o("keydown",n),n.ctrlKey!==!0||de(n)===!0){z();return}const i=n.keyCode,f=be.value[i];if(f!==void 0){const{cmd:b,param:T}=f;De(n),R(b,T,!1)}}function _e(n){z(),o("click",n)}function Te(n){if(u.value!==null){const{scrollTop:i,scrollHeight:f}=u.value;q=f-i}S.caret.save(),o("blur",n)}function Be(n){Fe(()=>{u.value!==null&&q!==void 0&&(u.value.scrollTop=u.value.scrollHeight-q)}),o("focus",n)}function qe(n){const i=g.value;if(i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)){const f=`inner${_.value===!0?"Text":"HTML"}`;S.caret.restorePosition(u.value[f].length),z()}}function ze(n){const i=g.value;i!==null&&i.contains(n.target)===!0&&(n.relatedTarget===null||i.contains(n.relatedTarget)!==!0)&&(S.caret.savePosition(),z())}function J(){q=void 0}function X(n){S.caret.save()}function Q(n,i){if(u.value!==null){i===!0&&S.caret.savePosition();const f=`inner${_.value===!0?"Text":"HTML"}`;u.value[f]=n,i===!0&&(S.caret.restorePosition(u.value[f].length),z())}}function R(n,i,f=!0){j(),S.caret.restore(),S.caret.apply(n,i,()=>{j(),S.caret.save(),f&&z()})}function z(){setTimeout(()=>{r.value=null,a.$forceUpdate()},1)}function j(){rt(()=>{u.value!==null&&u.value.focus({preventScroll:!0})})}function Pe(){return u.value}return re(()=>{S.caret=a.caret=new ft(u.value,S),Q(e.modelValue),z(),document.addEventListener("selectionchange",X)}),Ne(()=>{document.removeEventListener("selectionchange",X)}),Object.assign(a,{runCmd:R,refreshToolbar:z,focus:j,getContentEl:Pe}),()=>{let n;if(ve.value){const i=[m("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+H.value},vt(S))];r.value!==null&&i.push(m("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+H.value},yt(S))),n=m("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},i)}return m("div",{ref:g,class:we.value,style:{height:v.value===!0?"100%":null},...Ce.value,onFocusin:qe,onFocusout:ze},[n,m("div",{ref:u,style:ye.value,class:ke.value,contenteditable:B.value,placeholder:e.placeholder,...h.listeners.value,onInput:Se,onKeydown:xe,onClick:_e,onBlur:Te,onFocus:Be,onMousedown:J,onTouchstartPassive:J})])}}});const St=C("div",{class:"fontsize-15 text-weight-light"},"Introduce los datos",-1),xt={class:"row q-col-gutter-md"},_t={class:"col-12"},Tt={class:"col-xs-12 col-sm-8"},Bt=C("span",{class:"required-star"},"*",-1),qt={class:"col-xs-12 col-sm-4"},zt={class:"col-xs-12 col-sm-6"},Pt=C("span",{class:"required-star"},"*",-1),Lt={class:"row items-center justify-end"},Ht={class:"col-xs-12 col-sm-6"},Ot={class:"col-xs-12 col-sm-8"},$t={class:"col-xs-12 col-sm-4"},Et={class:"col-xs-12 col-sm-7"},oo=Qe({__name:"FormDocumento",props:{documento:{},loading:{type:Boolean},errorServer:{}},emits:["guardar"],setup(e,{emit:t}){const o=e,l=I(o,"documento"),a=I(o,"loading"),c=I(o,"errorServer"),s=c.value,p=P(null),v=P(l.value.fecha_limite+""),x=()=>{const g=new FormData;g.append("id",l.value.id+""),g.append("nombre_documento",l.value.nombre_documento),g.append("abrev_nombre",l.value.abrev_nombre+""),g.append("fecha_limite",v.value),g.append("entrega_estudiante",l.value.entrega_estudiante+""),g.append("descripcion",l.value.descripcion+""),p.value&&g.append("url_formato",p.value[0]),t("guardar",g)},h=w(()=>ct(c.value));return(g,u)=>(D(),ee(He,null,{default:k(()=>[y(Y,null,{default:k(()=>[St]),_:1}),y($e,{onSubmit:M(x,["prevent"])},{default:k(()=>[y(Y,null,{default:k(()=>[C("div",xt,[C("div",_t,[c.value?(D(),ee(Oe,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:k(()=>{var r;return[E(te(((r=Re(s))==null?void 0:r.message)||"")+" ",1),C("ul",null,[(D(!0),oe(Ue,null,je(h.value,_=>(D(),oe("li",{key:_},te(_),1))),128))])]}),_:1})):Ie("",!0)]),C("div",Tt,[y(U,{modelValue:l.value.nombre_documento,"onUpdate:modelValue":u[0]||(u[0]=r=>l.value.nombre_documento=r),"label-slot":"",hint:"Nombre completo del documento: Solicitud de residencia profesional.",rules:[r=>!!r||"El nombre del documento es requerido",r=>r.length>3&&r.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:k(()=>[E(" Nombre del documento "),Bt]),_:1},8,["modelValue","rules"])]),C("div",qt,[y(U,{modelValue:l.value.abrev_nombre,"onUpdate:modelValue":u[1]||(u[1]=r=>l.value.abrev_nombre=r),hint:"Abreviaci\xF3n del nombre del documento: Sol. residencia. \u{1F61C}","label-slot":"",rules:[r=>r.length<255||"Debe tener m\xE1s de 3 caracteres y menos de 255"]},{label:k(()=>[E(" Abreviaci\xF3n del nombre del documento ")]),_:1},8,["modelValue","rules"])]),C("div",zt,[y(U,{modelValue:v.value,"onUpdate:modelValue":u[3]||(u[3]=r=>v.value=r),hint:"Fecha programada para su entrega o fecha que deber\xEDa llevar el documento.",mask:"date",rules:[r=>!!r||"La fecha es requerida"],"label-slot":""},{label:k(()=>[E(" Fecha l\xEDmite de entrega "),Pt]),append:k(()=>[y(A,{name:"event",class:"cursor-pointer"},{default:k(()=>[y(We,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:k(()=>[y(Ke,{modelValue:v.value,"onUpdate:modelValue":u[2]||(u[2]=r=>v.value=r)},{default:k(()=>[C("div",Lt,[Me(y(L,{label:"Close",color:"primary",flat:""},null,512),[[ut]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"])]),C("div",Ht,[y(Ge,{"bottom-slots":"",modelValue:p.value,"onUpdate:modelValue":u[6]||(u[6]=r=>p.value=r),hint:"Archivo de formato del documento (imagen, word, pdf), es opcional.","label-slot":"",counter:"",multiple:"",accept:".jpg, image/*, .doc, .docx, .pdf"},{label:k(()=>[E(" Formato del documento: ")]),prepend:k(()=>[y(A,{name:"cloud_upload",onClick:u[4]||(u[4]=M(()=>{},["stop","prevent"]))})]),append:k(()=>[y(A,{name:"close",onClick:u[5]||(u[5]=M(r=>p.value=null,["stop","prevent"])),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),C("div",Ot,[C("div",null,[E(" Descripci\xF3n del formato con lujo de detalles \u{1F60A} "),y(Ct,{modelValue:l.value.descripcion,"onUpdate:modelValue":u[7]||(u[7]=r=>l.value.descripcion=r),toolbar:[["bold","italic","underline"],[{label:g.$q.lang.editor.formatting,icon:g.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h3","h4","h5","h6","code"]}],[{label:"Dynamic label",icon:"help_outline",options:["left","center","right","justify"]}]],"min-height":"5rem"},null,8,["modelValue","toolbar"])])]),C("div",$t,[y(st,{"false-value":0,"true-value":1,modelValue:l.value.entrega_estudiante,"onUpdate:modelValue":u[8]||(u[8]=r=>l.value.entrega_estudiante=r),label:"Entegado por estudiante","left-label":""},null,8,["modelValue"])]),C("div",Et,[y(L,{label:"Guardar",color:"primary",type:"submit",loading:a.value},null,8,["loading"])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}});export{oo as _};
