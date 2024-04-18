import{a as L,S as P,i as l}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function h(o){return o.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:n,downloads:b})=>`
<li class="gallery-item">
<a class="gallery-link" href="${t}" >
<img class="gallery-img" src="${s}" alt=${a} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${r}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${n}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${b}</li>
</ul> 
</li>


    `).join("")}async function y(o,s){const t="https://pixabay.com/api/",a="43311498-bd26fa1e6ae7e25f586fd794c";try{return(await L.get(t,{params:{key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s}})).data}catch(e){throw console.error("Error fetching data:",e),e}}const f=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),p=document.querySelector(".gallery"),u=document.querySelector(".js-search-form"),m=document.querySelector(".hide"),d=document.querySelector(".buttonLoad");let i=1,g=15;u.addEventListener("submit",S);d.addEventListener("click",v);async function S(o){o.preventDefault(),m.classList.remove("hide"),p.innerHTML="";const s=u.elements.picture.value;i=1,u.reset();try{const t=await y(s,i);if(t.hits.length===0)d.style.display="none",c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});else{p.insertAdjacentHTML("beforeend",h(t.hits)),f.refresh(),i+=1;const a=Math.ceil(t.totalHits/g);console.log(a),i<a&&(d.hidden=!1)}}catch{c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}async function v(o){try{const s=u.elements.picture.value,t=await y(s,i),a=Math.ceil(t.totalHits/g);p.insertAdjacentHTML("beforeend",h(t.hits)),f.refresh(),i+=1;const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),i>=a&&(d.style.display="none",l.show({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}function c(){m.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
