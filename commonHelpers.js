import{a as m,S as y,i as u}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function h(o){return o.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:s,comments:i,downloads:f})=>`
<li class="gallery-item">
<a class="gallery-link" href="${r}" >
<img class="gallery-img" src="${t}" alt=${a} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${s}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${i}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${f}</li>
</ul> 
</li>


    `).join("")}async function b(o,t){const r="https://pixabay.com/api/",a="43311498-bd26fa1e6ae7e25f586fd794c";try{return(await m.get(r,{params:{key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})).data}catch(e){throw console.error("Error fetching data:",e),e}}const g=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),p=document.querySelector(".gallery"),l=document.querySelector(".js-search-form"),d=document.querySelector(".hide"),L=document.querySelector(".buttonLoad");let n=1;l.addEventListener("submit",S);async function S(o){o.preventDefault(),d.classList.remove("hide"),p.innerHTML="";const t=l.elements.picture.value;n=1,l.reset();try{const r=await b(t,n);r.hits.length===0?(L.style.display="none",c(),u.error({title:"Oooops",message:"Enter text"})):(p.insertAdjacentHTML("beforeend",h(r.hits)),g.refresh(),n+=1)}catch{c(),u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}function c(){d.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
