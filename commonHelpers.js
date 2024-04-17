import{a as b,S as L,i as l}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(o){return o.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:n,downloads:g})=>`
<li class="gallery-item">
<a class="gallery-link" href="${r}" >
<img class="gallery-img" src="${s}" alt=${a} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${t}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${n}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${g}</li>
</ul> 
</li>


    `).join("")}async function y(o,s){const r="https://pixabay.com/api/",a="43311498-bd26fa1e6ae7e25f586fd794c";try{return(await b.get(r,{params:{key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s}})).data}catch(e){throw console.error("Error fetching data:",e),e}}const h=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),p=document.querySelector(".gallery"),u=document.querySelector(".js-search-form"),m=document.querySelector(".hide"),d=document.querySelector(".buttonLoad");let i=1,v=15;u.addEventListener("submit",P);d.addEventListener("click",S);async function P(o){o.preventDefault(),m.classList.remove("hide"),p.innerHTML="";const s=u.elements.picture.value;i=1,u.reset();try{const r=await y(s,i);r.hits.length===0?(d.style.display="none",c(),l.error({title:"Oooops",message:"Enter text"})):(p.insertAdjacentHTML("beforeend",f(r.hits)),h.refresh(),i+=1,d.hidden=!1)}catch{c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}async function S(o){try{const s=u.elements.picture.value,r=await y(s,i),a=Math.ceil(r.totalHits/v);p.insertAdjacentHTML("beforeend",f(r.hits)),h.refresh(),i+=1,i>=a&&(d.style.display="none",l.show({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}function c(){m.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
