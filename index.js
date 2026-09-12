import{a as v,S as M,i as g}from"./assets/vendor-CesYmgD5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function y(e,r=1){const o="57395235-0ef9936ebfd59538adc74bf29";try{return await v.get("https://pixabay.com/api/",{params:{key:o,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})}catch(t){throw console.log(t.message),t}}let S=new M(".gallery a",{overlay:!0,overlayOpacity:.8,captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function q(e){return e.map(({webformatURL:r,largeImageURL:o,tags:a,likes:t,views:s,comments:i,downloads:w})=>`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${o}"
      alt="${a}"
    />
  </a>
  <ul class="statistic">
  <li><h3 class="statistic-header">Likes</h3> ${t}</li>
  <li><h3 class="statistic-header">Views</h3> ${s}</li>
   <li><h3 class="statistic-header">Comments</h3> ${i}</li>
    <li><h3 class="statistic-header">Downloads</h3> ${w}</li>
  </ul>
</li>`).join("")}function p(e,r){e.insertAdjacentHTML("beforeend",q(r)),S.refresh()}function $(e){e.innerHTML=""}function L(e){e.classList.remove("hidden")}function b(e){e.classList.add("hidden")}function E(e){e.classList.remove("hidden")}function O(e){e.classList.add("hidden")}function n(e){g.error({position:"topRight",timeout:5e3,message:e,icon:!1,messageColor:"#ffffff",backgroundColor:"#992a2a"})}function B(e){g.info({position:"topRight",timeout:5e3,message:e,icon:!1,messageColor:"#ffffff",backgroundColor:"#4e75ff"})}function C(){const e=document.querySelector(".gallery-item");if(e){const{height:r}=e.getBoundingClientRect(),o=r*2;window.scrollBy({top:o,behavior:"smooth"})}}const D=document.querySelector(".form"),f=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=document.querySelector(".load-more-btn");let c="",u=1;const m=15;let d=0,P=0;D.addEventListener("submit",G);async function G(e){if(e.preventDefault(),c=e.target.elements[0].value,c.trim()===""){n("Yoyr search query is empty");return}$(f),L(l);try{const o=await y(c);if(console.log(o),d=o.data.totalHits,P=Math.ceil(d/m),o.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}p(f,o.data.hits),e.target.reset(),d>m&&E(h)}catch(o){n(o.message)}finally{b(l)}}h.addEventListener("click",H);async function H(e){if(u++,u>=P){const r="We're sorry, but you've reached the end of search results.";O(h),B(r)}try{L(l),C();const r=await y(c,u);p(f,r.data.hits)}catch(r){n(r.message)}finally{b(l)}}
//# sourceMappingURL=index.js.map
