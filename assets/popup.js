!function(e){var t={};function r(n){if(t[n])return t[n].exports;var d=t[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,r),d.l=!0,d.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)r.d(n,d,function(t){return e[t]}.bind(null,d));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}({7:function(e,t){(()=>{const e=document.getElementById("embed"),t=document.querySelector(".converter--embed"),r=e.querySelector(".embed--result"),n=e.querySelector(".embed--width"),d=e.querySelector(".embed--height"),i=e.querySelector(".embed--copy"),o=e.querySelector(".embed--close"),l=document.getElementById("install"),u=document.querySelector(".converter--install"),c=l.querySelector(".install--close"),a=e=>{const{x:t,y:r,width:n,height:d}=document.getElementById("converter").getBoundingClientRect();e.style.left=`${t}px`,e.style.top=`${r}px`,e.style.width=`${n}px`,e.style.height=`${d}px`},s=(e,t)=>{e.classList.remove("hidden"),e.setAttribute("aria-hidden","false"),(e=>e.querySelectorAll("button, [href], input, textarea")[0])(e).focus(),t.setAttribute("aria-expanded","true")},b=(e,t)=>{e.classList.add("hidden"),e.setAttribute("aria-hidden","true"),t.setAttribute("aria-expanded","false")},h={width:600,height:600},f=({width:e,height:t})=>{r.value=`<iframe src="https://oddsconverter.pro/embed/" width="${e}" height="${t}" frameborder="0"></iframe>`};t.addEventListener("click",()=>{a(e),s(e,t),f(h)}),o.addEventListener("click",()=>{n.value=600,d.value=600,n.removeAttribute("disabled"),d.removeAttribute("disabled"),h.width=600,h.height=600,f(h),i.innerText="Copy",b(e,t)}),i.addEventListener("click",e=>{r.select(),document.execCommand("copy"),e.target.innerText="Copied!"}),n.addEventListener("change",e=>{h.width=e.target.value,f(h)}),d.addEventListener("change",e=>{h.height=e.target.value,f(h)}),document.querySelector(".embed--width__full").addEventListener("click",()=>{n.setAttribute("disabled","disabled"),h.width="100%",f(h)}),document.querySelector(".embed--height__full").addEventListener("click",()=>{d.setAttribute("disabled","disabled"),h.height="100%",f(h)}),u.addEventListener("click",()=>{a(l),s(l,u)}),c.addEventListener("click",()=>b(l,u)),document.addEventListener("keydown",r=>{27===r.keyCode&&(b(e,t),b(l,u))})})()}});