import{c as o,H as ae,s as de,h as v,g as F,D as fe,I as N,J as ve,K as ge,L as re,M as me,r as H,a as be,A as he,N as P,T as ye,l as ke,O as pe}from"./index.5c85c559.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},ie={size:String};function ue(e,t=Q){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const V=e=>ae(de(e)),xe=e=>ae(e);function qe(e,t){return e!==void 0&&e()||t}function Ze(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function z(e,t){return e!==void 0?t.concat(e()):t}const U="0 0 24 24",W=e=>e,D=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},se={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(le).join("|")+")"),Ee=new RegExp("^("+Object.keys(se).join("|")+")"),X=new RegExp("^("+Object.keys(oe).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,we=/^img:/,Re=/^svguse:/,Ce=/^ion-/,Le=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var J=V({name:"QIcon",props:{...ie,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=F(),a=ue(e),l=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=o(()=>{let c,r=e.name;if(r==="none"||!r)return{none:!0};if(n.iconMapFn!==null){const s=n.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Se.test(r)===!0){const[s,y=U]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,b,p]=u.split("@@");return v("path",{style:b,d:k,transform:p})})}}if(we.test(r)===!0)return{img:!0,src:r.substring(4)};if(Re.test(r)===!0){const[s,y=U]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=r.match($e);if(h!==null)c=le[h[1]](r);else if(Le.test(r)===!0)c=r;else if(Ce.test(r)===!0)c=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(X.test(r)===!0){c="notranslate material-symbols";const s=r.match(X);s!==null&&(r=r.substring(6),c+=oe[s[1]]),q=r}else{c="notranslate material-icons";const s=r.match(Ee);s!==null&&(r=r.substring(2),c+=se[s[1]]),q=r}return{cls:c,content:q}});return()=>{const c={class:l.value,style:a.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?v(e.tag,c,qe(t.default)):d.value.img===!0?v("span",c,z(t.default,[v("img",{src:d.value.src})])):d.value.svg===!0?v("span",c,z(t.default,[v("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?v("span",c,z(t.default,[v("svg",{viewBox:d.value.viewBox},[v("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(c.class+=" "+d.value.cls),v(e.tag,c,z(t.default,[d.value.content])))}}});const Be={size:{type:[Number,String],default:"1em"},color:String};function _e(e){return{cSize:o(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Pe=V({name:"QSpinner",props:{...Be,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=_e(e);return()=>v("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Oe(e,t){const n=e.style;for(const a in t)n[a]=t[a]}function et(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=fe(e);if(t)return t.$el||t}function tt(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function Te(e,t=250){let n=!1,a;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),a=e.apply(this,arguments)),a}}function Y(e,t,n,a){n.modifiers.stop===!0&&re(e);const l=n.modifiers.color;let d=n.modifiers.center;d=d===!0||a===!0;const c=document.createElement("span"),r=document.createElement("span"),q=me(e),{left:h,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),b=k/2,p=`${(y-k)/2}px`,f=d?p:`${q.left-h-b}px`,x=`${(u-k)/2}px`,_=d?x:`${q.top-s-b}px`;r.className="q-ripple__inner",Oe(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${f},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${l?" text-"+l:""}`,c.setAttribute("dir","ltr"),c.appendChild(r),t.appendChild(c);const L=()=>{c.remove(),clearTimeout(B)};n.abort.push(L);let B=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,B=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,B=setTimeout(()=>{c.remove(),n.abort.splice(n.abort.indexOf(L),1)},275)},250)},50)}function G(e,{modifiers:t,value:n,arg:a}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||a,keyCodes:[].concat(l.keyCodes||13)}}var Ae=xe({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const a={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){a.enabled===!0&&l.qSkipRipple!==!0&&l.type===(a.modifiers.early===!0?"pointerdown":"click")&&Y(l,e,a,l.qKeyEvent===!0)},keystart:Te(l=>{a.enabled===!0&&l.qSkipRipple!==!0&&N(l,a.modifiers.keyCodes)===!0&&l.type===`key${a.modifiers.early===!0?"down":"up"}`&&Y(l,e,a,!0)},300)};G(a,t),e.__qripple=a,ve(a,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&G(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),ge(t,"main"),delete e._qripple)}});const ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(ce),Me={align:{type:String,validator:e=>je.includes(e)}};function ze(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function nt(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function Ke(e){return e.appContext.config.globalProperties.$router!==void 0}function at(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ie(e,t){for(const n in t){const a=t[n],l=e[n];if(typeof a=="string"){if(a!==l)return!1}else if(Array.isArray(l)===!1||l.length!==a.length||a.some((d,c)=>d!==l[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function De(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ne(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(De(e[n],t[n])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Fe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=F(),{props:a,proxy:l,emit:d}=n,c=Ke(n),r=o(()=>a.disable!==!0&&a.href!==void 0),q=t===!0?o(()=>c===!0&&a.disable!==!0&&r.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""):o(()=>c===!0&&r.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""),h=o(()=>q.value===!0?_(a.to):null),s=o(()=>h.value!==null),y=o(()=>r.value===!0||s.value===!0),u=o(()=>a.type==="a"||y.value===!0?"a":a.tag||e||"div"),k=o(()=>r.value===!0?{href:a.href,target:a.target}:s.value===!0?{href:h.value.href,target:a.target}:{}),b=o(()=>{if(s.value===!1)return-1;const{matched:g}=h.value,{length:$}=g,S=g[$-1];if(S===void 0)return-1;const R=l.$route.matched;if(R.length===0)return-1;const C=R.findIndex(ee.bind(null,S));if(C>-1)return C;const K=Z(g[$-2]);return $>1&&Z(S)===K&&R[R.length-1].path!==K?R.findIndex(ee.bind(null,g[$-2])):C}),p=o(()=>s.value===!0&&b.value!==-1&&Ie(l.$route.params,h.value.params)),f=o(()=>p.value===!0&&b.value===l.$route.matched.length-1&&Ne(l.$route.params,h.value.params)),x=o(()=>s.value===!0?f.value===!0?` ${a.exactActiveClass} ${a.activeClass}`:a.exact===!0?"":p.value===!0?` ${a.activeClass}`:"":"");function _(g){try{return l.$router.resolve(g)}catch{}return null}function L(g,{returnRouterError:$,to:S=a.to,replace:R=a.replace}={}){if(a.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||a.target==="_blank")return Promise.resolve(!1);g.preventDefault();const C=l.$router[R===!0?"replace":"push"](S);return $===!0?C:C.then(()=>{}).catch(()=>{})}function B(g){if(s.value===!0){const $=S=>L(g,S);d("click",g,$),g.defaultPrevented!==!0&&$()}else d("click",g)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:u,resolvedLink:h,linkIsActive:p,linkIsExactActive:f,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:L,navigateOnClick:B}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ve={xs:8,sm:10,md:14,lg:20,xl:24},He=["button","submit","reset"],Ue=/[^\s]\/[^\s]/,We=["flat","outline","push","unelevated"],Xe=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Je={...ie,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...We.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ye(e){const t=ue(e,Ve),n=ze(e),{hasRouterLink:a,hasLink:l,linkTag:d,linkAttrs:c,navigateOnClick:r}=Fe({fallbackTag:"button"}),q=o(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):f}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),u=o(()=>Xe(e,"standard")),k=o(()=>{const f={tabindex:y.value};return l.value===!0?Object.assign(f,c.value):He.includes(e.type)===!0&&(f.type=e.type),d.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),a.value!==!0&&Ue.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),b=o(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(f!==void 0?" "+f:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:d,navigateOnClick:r,isActionable:s}}const{passiveCapture:E}=ke;let O=null,T=null,A=null;var rt=V({name:"QBtn",props:{...Je,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:a}=F(),{classes:l,style:d,innerClasses:c,attributes:r,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Ye(e),u=H(null),k=H(null);let b=null,p,f;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),L=o(()=>({center:e.round})),B=o(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),g=o(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const i={onClick:S,onKeydown:R,onMousedown:K};if(a.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";i[`onTouchstart${m}`]=C}return i}return{onClick:P}}),$=o(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:d.value,...r.value,...g.value}));function S(i){if(u.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const I=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",I,E),u.value!==null&&u.value.removeEventListener("blur",I,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",I,E),u.value.addEventListener("blur",I,E)}}s(i)}}function R(i){u.value!==null&&(n("keydown",i),N(i,[13,32])===!0&&T!==u.value&&(T!==null&&j(),i.defaultPrevented!==!0&&(u.value.focus(),T=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,E)),P(i)))}function C(i){u.value!==null&&(n("touchstart",i),i.defaultPrevented!==!0&&(O!==u.value&&(O!==null&&j(),O=u.value,b=i.target,b.addEventListener("touchcancel",w,E),b.addEventListener("touchend",w,E)),p=!0,clearTimeout(f),f=setTimeout(()=>{p=!1},200)))}function K(i){u.value!==null&&(i.qSkipRipple=p===!0,n("mousedown",i),i.defaultPrevented!==!0&&A!==u.value&&(A!==null&&j(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(i){if(u.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===u.value)){if(i!==void 0&&i.type==="keyup"){if(T===u.value&&N(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&pe(m),i.cancelBubble===!0&&re(m),u.value.dispatchEvent(m),P(i),i.qKeyEvent=!0}n("keyup",i)}j()}}function j(i){const m=k.value;i!==!0&&(O===u.value||A===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),O===u.value&&(b!==null&&(b.removeEventListener("touchcancel",w,E),b.removeEventListener("touchend",w,E)),O=b=null),A===u.value&&(document.removeEventListener("mouseup",w,E),A=null),T===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,E),T=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function M(i){P(i),i.qSkipRipple=!0}return be(()=>{j(!0)}),Object.assign(a,{click:S}),()=>{let i=[];e.icon!==void 0&&i.push(v(J,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=z(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(J,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},i)),e.loading!==null&&m.push(v(ye,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Pe)])]:null)),he(v(h.value,$.value,m),[[Ae,_.value,void 0,L.value]])}}});export{rt as Q,Ze as a,z as b,V as c,J as d,Pe as e,ie as f,xe as g,qe as h,Oe as i,et as j,Ke as k,tt as l,nt as m,Me as n,ze as o,ue as u,at as v};