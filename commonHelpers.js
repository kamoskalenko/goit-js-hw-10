import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as b,i as h}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker");document.querySelector(".timer");const n=document.querySelector("button[data-start]");let y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");function i(){n.disabled=!0,n.setAttribute("id","js-disabled"),console.log(n.getAttribute("class"))}function D(){n.disabled=!1,n.removeAttribute("id")}i();let s=null;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=Date.now();s=t[0],s<=e?h.error({title:"Error",message:"Please choose a date in the future"}):D()}};b(c,v);function C(){c.disabled=!0}function E(){c.disabled=!1}n.addEventListener("click",I);function I(){const t=setInterval(()=>{const e=Date.now(),o=s-e,r=g(o);u(r),o===0&&(clearInterval(t),E(),u(r))},1e3);i(),C()}function g(t){const d=a(Math.floor(t/864e5)),l=a(Math.floor(t%864e5/36e5)),m=a(Math.floor(t%864e5%36e5/6e4)),f=a(Math.floor(t%864e5%36e5%6e4/1e3));return{days:d,hours:l,minutes:m,seconds:f}}function a(t){return String(t).padStart(2,"0")}function u({days:t,hours:e,minutes:o,seconds:r}){y.textContent=t,S.textContent=e,p.textContent=o,q.textContent=r}
//# sourceMappingURL=commonHelpers.js.map