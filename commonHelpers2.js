import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault();const o=i.elements.delay.value.trim(),r=t.target.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(o):m(o)},o)}).then(e=>{s.show({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"white",backgroundColor:"#59A10D",position:"topRight"})}).catch(e=>{s.show({message:`❌ Rejected promise in ${e}ms`,messageColor:"white",backgroundColor:"#EF4040",position:"topRight"})}),t.target.reset()});
//# sourceMappingURL=commonHelpers2.js.map