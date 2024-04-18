import{a as L,S as P,i as l}from"./assets/vendor-eded45c0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function f(o){return o.map(({webformatURL:r,largeImageURL:t,tags:a,likes:e,views:s,comments:n,downloads:b})=>`
<li class="gallery-item">
<a class="gallery-link" href="${t}" >
<img class="gallery-img" src="${r}" alt=${a} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${s}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${n}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${b}</li>
</ul> 
</li>


    `).join("")}async function h(o,r){const t="https://pixabay.com/api/",a="43311498-bd26fa1e6ae7e25f586fd794c";try{return(await L.get(t,{params:{key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}})).data}catch(e){throw console.error("Error fetching data:",e),e}}const y=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),p=document.querySelector(".gallery"),u=document.querySelector(".js-search-form"),m=document.querySelector(".hide"),d=document.querySelector(".buttonLoad"),S=document.querySelector(".gallery-item");let i=1,g=15;u.addEventListener("submit",v);d.addEventListener("click",w);async function v(o){o.preventDefault(),m.classList.remove("hide"),p.innerHTML="";const r=u.elements.picture.value;i=1,u.reset();try{const t=await h(r,i);if(t.hits.length===0)d.style.display="none",c(),l.error({title:"Oooops",message:"Enter text"});else{p.insertAdjacentHTML("beforeend",f(t.hits)),y.refresh(),i+=1;const a=Math.ceil(t.totalHits/g);console.log(a),i<a&&(d.hidden=!1)}}catch{c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}async function w(o){try{const r=u.elements.picture.value,t=await h(r,i),a=Math.ceil(t.totalHits/g);p.insertAdjacentHTML("beforeend",f(t.hits)),y.refresh(),i+=1;const e=S.getBoundingClientRect().height;window.scrollBy(0,2*e),i>=a&&(d.style.display="none",l.show({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}function c(){m.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
