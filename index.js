import{a as $,S as E,i as g}from"./assets/vendor-CesYmgD5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function y(e,r=1){const o="57395235-0ef9936ebfd59538adc74bf29";try{return(await $.get("https://pixabay.com/api/",{params:{key:o,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}catch(t){throw console.log(t.message),t}}let O=new E(".gallery a",{overlay:!0,overlayOpacity:.8,captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function B(e){return e.map(({webformatURL:r,largeImageURL:o,tags:a,likes:t,views:s,comments:i,downloads:q})=>`<li class="gallery-item">
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
    <li><h3 class="statistic-header">Downloads</h3> ${q}</li>
  </ul>
</li>`).join("")}function p(e,r){e.insertAdjacentHTML("beforeend",B(r)),O.refresh()}function C(e){e.innerHTML=""}function L(e){e.classList.remove("hidden")}function b(e){e.classList.add("hidden")}function P(e){e.classList.remove("hidden")}function w(e){e.classList.add("hidden")}function l(e){g.error({position:"topRight",timeout:5e3,message:e,icon:!1,messageColor:"#ffffff",backgroundColor:"#992a2a"})}function v(e){g.info({position:"topRight",timeout:5e3,message:e,icon:!1,messageColor:"#ffffff",backgroundColor:"#4e75ff"})}function D(){const e=document.querySelector(".gallery-item");if(e){const{height:r}=e.getBoundingClientRect(),o=r*2;window.scrollBy({top:o,behavior:"smooth"})}}const G=document.querySelector(".form"),h=document.querySelector(".gallery"),f=document.querySelector(".loader"),c=document.querySelector(".load-more-btn");let u="",n=0;const m=15;let d=0,M=0;const S="We're sorry, but you've reached the end of search results.";G.addEventListener("submit",H);async function H(e){if(e.preventDefault(),u=e.target.elements[0].value,u.trim()===""){l("Yoyr search query is empty");return}w(c),C(h),L(f),n=1;try{const o=await y(u,n);if(console.log(o),d=o.totalHits,M=Math.ceil(d/m),o.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}p(h,o.hits),e.target.reset(),d>m?P(c):v(S)}catch(o){l(o.message)}finally{b(f)}}c.addEventListener("click",T);async function T(e){w(c),L(f),n+=1;try{const r=await y(u,n);p(h,r.hits),D(),n<M?P(c):v(S)}catch(r){l(r.message)}finally{b(f)}}
//# sourceMappingURL=index.js.map
