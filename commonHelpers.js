import{a as y,S as h,i as u}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function g(a){return a.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:s,comments:o,downloads:m})=>`
<li class="gallery-item">
<a class="gallery-link" href="${r}" >
<img class="gallery-img" src="${t}" alt=${i} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${s}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${o}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${m}</li>
</ul> 
</li>


    `).join("")}async function b(a,t){return await y("https://pixabay.com/api/",{params:{key:"43311498-bd26fa1e6ae7e25f586fd794c",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})}const L=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d=document.querySelector(".js-list"),l=document.querySelector(".js-search-form"),p=document.querySelector(".hide"),f=document.querySelector(".buttonLoad");let n=1;l.addEventListener("submit",S);f.addEventListener("click",P);async function S(a){a.preventDefault(),p.classList.remove("hide"),d.innerHTML="";const t=l.elements.picture.value;l.reset(),n=1;try{const r=await b(t,n);r.hits.length===0?(f.hide=!0,c(),u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})):(d.insertAdjacentHTML("beforeend",g(r.hits)),L.refresh(),n+1)}catch{c(),u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}async function P(a){}function c(){p.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
