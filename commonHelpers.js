import{a as d,S as f,i as c}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function m(a){return a.map(({webformatURL:t,largeImageURL:o,tags:r,likes:e,views:s,comments:i,downloads:p})=>`
<li class="gallery-item">
<a class="gallery-link" href="${o}" >
<img class="gallery-img" src="${t}" alt=${r} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${s}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${i}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${p}</li>
</ul> 
</li>


    `).join("")}async function h(a,t){return await d("https://pixabay.com/api/",{params:{key:"43311498-bd26fa1e6ae7e25f586fd794c",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})}const y=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),l=document.querySelector(".js-list"),n=document.querySelector(".js-search-form"),u=document.querySelector(".hide"),g=document.querySelector(".buttonLoad");let b=1;n.addEventListener("submit",L);async function L(a){a.preventDefault(),u.classList.remove("hide"),l.innerHTML="";const t=n.elements.picture.value;n.reset(),await h(t,b).then(r=>{r.hits.length===0?(g.hide=!0,o(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})):(l.insertAdjacentHTML("beforeend",m(r.hits)),y.refresh())}).catch(r=>{console.log("error",r),o(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{o()});function o(){u.classList.add("hide")}}
//# sourceMappingURL=commonHelpers.js.map
