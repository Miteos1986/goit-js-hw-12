import{a as P,S,i as l}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function p(s){return s.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:r,comments:n,downloads:L})=>`
<li class="gallery-item">
<a class="gallery-link" href="${a}" >
<img class="gallery-img" src="${t}" alt=${o} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${r}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${n}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${L}</li>
</ul> 
</li>


    `).join("")}async function y(s,t){const a="https://pixabay.com/api/",o="43311498-bd26fa1e6ae7e25f586fd794c";try{return(await P.get(a,{params:{key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})).data}catch(e){throw console.error("Error fetching data:",e),e}}const m=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d=document.querySelector(".gallery"),h=document.querySelector(".js-search-form"),g=document.querySelector(".hide"),u=document.querySelector(".buttonLoad");let f,i=1,b=15;h.addEventListener("submit",w);u.addEventListener("click",q);async function w(s){s.preventDefault(),g.classList.remove("hide"),d.innerHTML="",f=h.elements.picture.value.trim(),i=1,h.reset();try{const t=await y(f,i);if(t.hits.length===0)u.hidden=!0,c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});else{d.insertAdjacentHTML("beforeend",p(t.hits)),m.refresh();const a=Math.ceil(t.totalHits/b);console.log(a),i<a&&(u.hidden=!1)}}catch{c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}async function q(){i+=1;try{const s=await y(f,i),t=Math.ceil(s.totalHits/b);d.insertAdjacentHTML("beforeend",p(s.hits)),m.refresh();const{height:a}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"}),i>=t&&(u.hidden=!0,l.show({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch{c(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}finally{c()}}function c(){g.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
