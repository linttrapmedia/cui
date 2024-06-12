(()=>{var I=new Map,U=new MutationObserver(e=>{e.forEach(n=>{if(n.addedNodes.length>0&&n.type==="childList"){for(let r of n.addedNodes)if(r instanceof Element)for(let[o,[i,a]]of I.entries()){let l=r.querySelectorAll(o);for(let s of l)M(s,i,a)}}})});U.observe(document,{attributes:!0,childList:!0,subtree:!0});function W(e,n=!0,r){return(...o)=>{n&&I.set(e,[o,r]);let i=document.querySelectorAll(e);for(let a of i)M(a,o,r)}}function $(e,n){return(...r)=>M(e,r,n)}function G(e,n){return(...r)=>{let o="http://www.w3.org/1999/xhtml",i=document.createElementNS(o,e);return M(i,r,n)}}function M(e,n=[],r={}){n.forEach(([i,...a])=>r[i](e,...a));function o(...i){return i.forEach(a=>e.append(a)),e}return o}function _(e){return new Proxy({},{get:(n,r)=>r==="el"?o=>$(o,e):r==="$el"?(o,i)=>W(o,i,e):G(r,e)})}function H(e){let{event:n=null,eventElement:r=window,hideOnFalse:o=!0,invokeImmediately:i=!0,mediaMinWidth:a=0,mediaMaxWidth:l=1/0,state:s=void 0}=e??{};return(...p)=>{let[y,m,d,c]=p,b=()=>{if(!(window.innerWidth>=a&&window.innerWidth<=l))return;let S=s&&typeof d=="function"?d(s.get()):d,C=String(S)==="true"||String(S)==="false",O=typeof c=="function"?c(s?s.get():void 0):c??!0;if(C&&o&&String(S)==="false"||C&&O===!1)return y.removeAttribute(m);O!==!1&&y.setAttribute(m,String(S))};s&&s.sub(b),n&&(y??r).addEventListener(n,b),window.addEventListener("resize",b),i&&b()}}function w(e){let{event:n=null,eventElement:r=window,invokeImmediately:o=!0,mediaMinWidth:i=0,mediaMaxWidth:a=1/0,method:l="classList",state:s=null}=e??{};return(...p)=>{let[y,m,d]=p,c=()=>{if(!(window.innerWidth>=i&&window.innerWidth<=a))return;let x=typeof m=="function"?m(s?s.get():void 0):m;(typeof d=="function"?d(s?s.get():void 0):d??!0)&&(l==="className"?y.setAttribute("class",x):y.classList.add(x))};s&&s.sub(c),n&&(y??r).addEventListener(n,c),window.addEventListener("resize",c),o&&c()}}var L=e=>(n,r,o)=>{(typeof o=="function"?o():o??!0)&&n.addEventListener(e,r)};function v(e){let{state:n}=e??{};return(...r)=>{let[o,i,a]=r,l=()=>{let s=n?i(n.get()):i();(typeof a=="function"?a(n?n.get():void 0):a??!0)&&(o.innerHTML="",Array.isArray(s)?s.forEach(y=>{y instanceof HTMLElement?o.appendChild(y):o.appendChild(document.createTextNode(String(y)))}):s instanceof HTMLElement?o.appendChild(s):o.innerHTML=String(s))};n&&n.sub(l),l()}}function F(e){let{event:n=null,eventElement:r=window,invokeImmediately:o=!0,mediaMinWidth:i=0,mediaMaxWidth:a=1/0,state:l=void 0}=e??{};return(...s)=>{let[p,y,m,d]=s,c=()=>{if(!(window.innerWidth>=i&&window.innerWidth<=a))return;let x=String(typeof m=="function"?m(l?l.get():void 0):m);(typeof d=="function"?d(l?l.get():void 0):d??!0)&&(y.startsWith("--")?p.style.setProperty(y,x):p.style[y]=x)};l&&l.sub(c),window.addEventListener("resize",c),n&&(p??r).addEventListener(n,c),o&&!n&&c()}}function P(e){let{event:n,eventElement:r,state:o}=e??{};return(...i)=>{let[a,l,s]=i,p=()=>{let y=typeof l=="function"?l(o?o.get():void 0):l;(typeof s=="function"?s(o?o.get():void 0):s??!0)&&(a.textContent=String(y))};o&&o.sub(p),window.addEventListener("resize",p),n&&(a??r).addEventListener(n,p),p()}}function k(e,n){let r=e;if(n){let d=n.storage.getItem(n.key),c=JSON.parse(d),b=c!=null;(n.overwrite??!0)&&b&&(e=c),!(n.overwrite??!0)&&b&&(Array.isArray(e)&&Array.isArray(c)?e=[...e,...c]:typeof e=="object"&&typeof c=="object"&&(e={...e,...c}))}let o=e,i=[],a=()=>o,l=d=>()=>p(d(o)),s=()=>p(r),p=d=>{o=d,i.forEach(c=>c(o)),n&&n.storage.setItem(n.key,JSON.stringify(o))};return{get:a,reset:s,reduce:l,set:p,sub:d=>i.push(d),unsub:d=>i.splice(i.indexOf(d),1)}}var u=k({colors:{accent:["#FF5A5F","#FFFFFF"],black:["#1F1F1F","#FFFFFF"],brand:["#4A90E2","#FFFFFF"],error:["#FF6347","#FFFFFF"],grey:["#757575","#FFFFFF"],info:["#3E82FC","#FFFFFF"],primary:["#1E88E5","#FFFFFF"],secondary:["#4CAF50","#FFFFFF"],success:["#00C853","#FFFFFF"],warning:["#FFC107","#FFFFFF"],white:["#FFFFFF","#000000"]},fonts:{primary:"Arial, sans-serif",secondary:"Arial, sans-serif",tertiary:"Arial, sans-serif"}},{key:"tokens",storage:sessionStorage}),f=k("black",{key:"colorPicker",storage:sessionStorage}),z=new URLSearchParams(window.location.search).get("page"),g=k(z??"HOME",{key:"page",storage:sessionStorage}),E=k("COLOR_PICKER",{key:"properties",storage:sessionStorage});var h=e=>{switch(e.action){case"SET_PAGE":g.set(e.page),window.history.pushState(null,"",`?page=${e.page}`);break;case"SET_PROPERTIES":E.set(e.properties);break;case"SET_COLOR_PICKER":E.set("COLOR_PICKER"),f.set(e.colorKey);break;case"SET_COLOR_TOKEN":u.set({...u.get(),colors:{...u.get().colors,[e.key]:[e.color,e.contrast]}});break}};var t=_({"innerHTML:pages":v({state:g}),"innerHTML:properties":v({state:E}),"innerHTML:colorPicker":v({state:f}),"innerHTML:static":v(),"innerText:pages":P({state:g}),"innerHTML:tokens":v({state:u}),"style:tokens":F({state:u}),attr:H(),class:w(),click:L("click"),input:L("input"),style:F()});var A=()=>{let e=()=>f.get(),n=()=>u.get().colors[f.get()][0],r=()=>u.get().colors[f.get()][1],l=["-01","-02","-03","-04","-05","-06","-07","-08","-09","-10","-20","-30","-40","-50","-60","-70","-80","-90"];return t.div(["innerHTML:colorPicker",()=>[t.div()(f.get()),t.div(["style","opacity","0.35"],["style","fontSize","0.8em"])("Set the color and it's contrast"),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Color"),t.div(["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(t.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",s=>{let p=u.get().colors[f.get()];h({action:"SET_COLOR_TOKEN",key:f.get(),color:s.target.value,contrast:p[1]})}],["attr","value",n()])()),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Contrast"),t.div(["style","borderRadius","5px"],["style","width",`${150-20}px`],["style","height",`${80-20}px`],["style","overflow","hidden"],["style","position","relative"])(t.input(["style","position","absolute"],["style","top",`-${20/2}px`],["style","left",`-${20/2}px`],["attr","type","color"],["style","width",`${150}px`],["style","height",`${80}px`],["style","backgroundColor","transparent"],["input",s=>{let p=u.get().colors[f.get()];h({action:"SET_COLOR_TOKEN",key:f.get(),color:p[0],contrast:s.target.value})}],["attr","value",r()])()),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Token"),t.div(["style","whiteSpace","nowrap"],["style","fontSize","0.8em"],["style","opacity","0.35"])(`--token-${e()}`),t.div(["style","fontSize","0.85em"],["style","opacity",.6])("Modifiers"),t.div(["style","fontSize","0.75em"],["style","opacity",.4])("Opacity"),t.div()(...l.map(s=>t.div(["style","whiteSpace","nowrap"],["style","fontSize","0.8em"],["style","opacity","0.25"])(`--token-${e()}${s}`)))]],["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])()};var B=e=>{let n=()=>u.get().colors[e][0],r=()=>u.get().colors[e][1];return t.div(["class","flexgrid__item"])(t.div(["class","card"],["class","card--small"],["class","card--light"],["class","card--ghost"],["style:tokens","--card-bg-color",n],["style","--card-transition-duration",0],["click",()=>h({action:"SET_COLOR_PICKER",colorKey:e})],["style","cursor","pointer"])(t.div(["class","card__title"],["style:tokens","--card-text-color",r])(e),t.div(["class","card__actions"])(t.div(["style","width","8px"],["style","height","8px"],["style","borderRight","1px solid rgba(255,255,255,1)"],["style","borderBottom","1px solid rgba(255,255,255,1)"],["style","display","flex"],["style","transform","rotate(-45deg)"])("")),t.div(["class","card__body"],["style","display","flex"],["style","gap","20px"],["style","flexWrap","wrap"],["style","alignItems","center"],["style","position","relative"],["style","alignItems","flex-start"],["style","justifyContent","flex-start"])(t.div(["style","borderRadius","2px"],["style","display","flex"],["style","flexDirection","column"],["style","height","30px"],["style","width","30px"],["style:tokens","backgroundColor",r])())))},R=()=>{let e=u.get().colors;return t.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(t.section(["style","display","flex"],["style","flexDirection","column"],["style","gap","20px"])(t.div()("Colors"),t.div(["class","flexgrid"],["style","--mobile-width","200px"],["style","--tablet-width","200px"],["style","--desktop-width","200px"],["style","--mobile-gap","10px"],["style","--tablet-gap","10px"],["style","--desktop-gap","10px"])(...Object.keys(e).map(B))),t.section()(t.h2()("Fonts")))};var N=()=>t.div()("ThemePicker");var D=t.div(["class","dashboard__nav-header"])(t.img(["attr","src","/images/capui-transparent.png"],["attr","height","80"])()),T=[["class","button"],["class","button--light"],["class","button--ghost"],["class","button--block"],["class","button--justify-start"]],K=t.nav(["class","dashboard__nav"])(t.div(["style","display","flex"],["style","flexDirection","column"],["style","gap","3px"],["style","alignItems","flex-start"],["style","width","100%"])(t.button(["class","button"],["class","button--light"],["class","button--block"],["style","marginBottom","10px"],["style","gap","10px"],["class","button--justify-start"],["click",()=>g.set("HOME")])(t.span()("capui.zip"),t.span()("[\u2193]")),t.button(["class","button"],["class","button--light"],["class","button--outline"],["class","button--block"],["style","marginBottom","10px"],["class","button--justify-start"],["click",()=>g.set("HOME")])("Home"),t.button(...T,["click",()=>h({action:"SET_PAGE",page:"THEME"})])("Theme"),t.button(...T,["click",()=>h({action:"SET_PAGE",page:"UTILITY"})])("Utility"),t.button(...T,["click",()=>h({action:"SET_PAGE",page:"ACCORDION"})])("Accordion"),t.button(...T)("Alerts"),t.button(...T)("Badge"),t.button(...T)("Button"),t.button(...T)("Card"),t.button(...T)("Dashboard"),t.button(...T)("Dialog"),t.button(...T)("Flexpane"),t.button(...T)("Grid"),t.button(...T)("Tag"))),j=t.div(["class","dashboard__nav-footer"],["style","padding","20px"],["style","opacity","0.5"],["style","fontSize","12px"])("\xA9Copyright 2024"),V=t.div(["class","dashboard__main-header"],["innerHTML:pages",()=>"Home",()=>g.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>g.get()==="ACCORDION"],["innerHTML:pages",N,()=>g.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>g.get()==="UTILITY"])(),Y=t.div(["class","dashboard__main"],["innerHTML:pages",()=>"Home",()=>g.get()==="HOME"],["innerHTML:pages",()=>"Accordion",()=>g.get()==="ACCORDION"],["innerHTML:pages",R,()=>g.get()==="THEME"],["innerHTML:pages",()=>"Utility",()=>g.get()==="UTILITY"])(),q=t.div(["class","dashboard__main-footer"],["class","dashboard__nav-footer"],["style","padding","20px"],["style","opacity","0.5"],["style","fontSize","12px"])(t.span()("All rights reserved. Made in the USA \u{1F1FA}\u{1F1F8} by ",t.a(["attr","href","https://kevinlint.com"],["attr","target","_blank"],["style","color","white"])("Kevin Lint")," as a product of ",t.a(["attr","href","https://github.com/linttrapmedia"],["attr","target","_blank"],["style","color","white"])("Lint Trap Media."))),J=t.div(["class","dashboard__aside-header"])("Aside Header"),Q=t.aside(["class","dashboard__aside"],["innerHTML:properties",A,()=>E.get()==="COLOR_PICKER"])(),X=t.aside(["class","dashboard__aside-footer"])("Aside footer");document.addEventListener("DOMContentLoaded",()=>{t.$el("#root")(["class","dashboard"],["innerHTML:static",()=>[D,K,j,V,Y,q,J,Q,X]])});})();
//# sourceMappingURL=ui.js.map
