import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";const s=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),h=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),b=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-seconds]");let r;e.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<new Date?(e.disabled=!0,f.show({message:"Please, choose a date in the future!",messageColor:"white",backgroundColor:"red",position:"topRight"})):(e.disabled=!1,e.classList.add("button-start-date"))}};m(s,S);function a(t){return t.toString().padStart(2,"0")}function C({days:t,hours:o,minutes:n,seconds:c}){h.textContent=`${a(t)}`,y.textContent=`${a(o)}`,b.textContent=`${a(n)}`,p.textContent=`${a(c)}`}function g(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}function k(){e.disabled=!0,e.classList.remove("button-start-date"),s.disabled=!0;let t=r-Date.now();const o=setInterval(()=>{t-=1e3;const n=g(t);C(n),t<=1e3&&(clearInterval(o),s.disabled=!1)},1e3)}e.addEventListener("click",k);
//# sourceMappingURL=commonHelpers.js.map