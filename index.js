(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",function(){function r(n){const o=new Date("2025-03-01T00:00:00").getTime();function i(){const t=new Date().getTime(),e=o-t;if(e<=0){document.getElementById(n).innerHTML="Час вийшов!";return}const s=Math.floor(e/(1e3*60*60*24)),d=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(e%(1e3*60*60)/(1e3*60)),a=Math.floor(e%(1e3*60)/1e3);document.getElementById(n+"days").textContent=s.toString().padStart(2,"0"),document.getElementById(n+"hours").textContent=d.toString().padStart(2,"0"),document.getElementById(n+"minutes").textContent=u.toString().padStart(2,"0"),document.getElementById(n+"seconds").textContent=a.toString().padStart(2,"0")}i(),setInterval(i,1e3)}r("desktop-"),r("mobile-"),r("modal-")});function c(r){r.preventDefault();const n=r.target,o={name:n.querySelector('input[type="text"]').value.trim(),email:n.querySelector('input[type="email"]').value.trim(),phone:n.querySelector('input[type="tel"]').value.trim(),terms:n.querySelector('input[type="checkbox"]').checked};if(!/^\+380\d{2}\d{3}\d{2}\d{2}$/.test(o.phone)){alert("Введіть коректний номер телефону у форматі +380XX XXX XX XX");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)){alert("Введіть коректний email!");return}if(!o.terms){alert("Ви повинні погодитися з умовами!");return}fetch("https://example.com/register",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then(()=>alert("Форма відправлена!")).catch(e=>alert("Error:",e)),n.reset()}document.getElementById("register-form").addEventListener("submit",c);document.getElementById("modal-register-form").addEventListener("submit",c);
//# sourceMappingURL=index.js.map
