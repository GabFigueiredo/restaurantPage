(()=>{"use strict";var e={552:(e,t,n)=>{var o=n(644);const a=document.getElementById("menu"),d=document.getElementById("home"),c=document.getElementById("contact");a.addEventListener("click",(function(){(0,o.z)()})),d.addEventListener("click",(function(){!function(){const e=document.getElementById("content"),t=document.getElementById("removeContainer");e.removeChild(t);const n=document.createElement("div");n.classList.add("container"),n.setAttribute("id","removeContainer");const o=document.createElement("h3");o.textContent="Our Beautiful Restaurant",n.appendChild(o);const a=document.createElement("img");a.src="../assets/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg",n.appendChild(a);const d=document.createElement("p");d.textContent="Bem-vindo ao nosso restaurante, onde a arte da culinária encontra-se com a beleza da natureza! Localizado em um ambiente encantador, oferecemos uma experiência gastronômica excepcional para todos os que buscam sabores autênticos e um ambiente acolhedor",n.appendChild(d),e.appendChild(n)}()})),c.addEventListener("click",(function(){!function(){const e=document.getElementById("content"),t=document.getElementById("removeContainer");e.removeChild(t);const n=document.createElement("div");n.classList.add("container"),n.setAttribute("id","removeContainer");const o=document.createElement("h3");o.textContent="Phone",n.appendChild(o);const a=document.createElement("p");a.textContent="+55 11 792238463",n.appendChild(a);const d=document.createElement("h3");d.textContent="Website",n.appendChild(d);const c=document.createElement("p");c.textContent="theodinproject.com.br",n.appendChild(c),e.appendChild(n)}()}))},644:(e,t,n)=>{function o(){const e=document.getElementById("content"),t=document.getElementById("removeContainer");e.removeChild(t);const n=document.createElement("div");n.classList.add("container"),n.setAttribute("id","removeContainer"),e.appendChild(n);const o=document.createElement("div");o.classList.add("foodContainer");const a=document.createElement("div");a.classList.add("foodContainer");const d=document.createElement("div");d.classList.add("foodContainer");const c=document.createElement("h2");c.textContent="Breakfast",n.appendChild(c),["Scrambled Eggs","Oatmeal","Fresh fuit"].forEach((e=>{const t=document.createElement("p");t.textContent=e,o.appendChild(t),n.appendChild(o)}));const r=document.createElement("h2");r.textContent="Lunch",n.appendChild(r),["Smoked Salmon","Oatmeal","Fresh fuit"].forEach((e=>{const t=document.createElement("p");t.textContent=e,a.appendChild(t),n.appendChild(a)}));const i=document.createElement("h2");i.textContent="Dinner",n.appendChild(i),["Scrambled Eggs","Oatmeal","Fresh fuit"].forEach((e=>{const t=document.createElement("p");t.textContent=e,d.appendChild(t),n.appendChild(d)}))}n.d(t,{z:()=>o})}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(552),n(644)})();