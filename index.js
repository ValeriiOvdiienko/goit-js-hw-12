import{a as L,S as b,i as P}from"./assets/vendor-CesYmgD5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function f(t,r=1){const o="57395235-0ef9936ebfd59538adc74bf29";try{return await L.get("https://pixabay.com/api/",{params:{key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})}catch(e){throw console.log(e.message),e}}let w=new b(".gallery a",{overlay:!0,overlayOpacity:.8,captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function v(t){return t.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:s,comments:i,downloads:g})=>`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${o}"
      alt="${a}"
    />
  </a>
  <ul class="statistic">
  <li><h3 class="statistic-header">Likes</h3> ${e}</li>
  <li><h3 class="statistic-header">Views</h3> ${s}</li>
   <li><h3 class="statistic-header">Comments</h3> ${i}</li>
    <li><h3 class="statistic-header">Downloads</h3> ${g}</li>
  </ul>
</li>`).join("")}function m(t,r){t.insertAdjacentHTML("beforeend",v(r)),w.refresh()}function S(t){t.innerHTML=""}function y(t){t.classList.remove("hidden")}function p(t){t.classList.add("hidden")}function q(t){t.classList.remove("hidden")}function n(t){P.error({position:"topRight",timeout:5e3,message:t,icon:!1,messageColor:"#ffffff",backgroundColor:"#992a2a"})}const M=document.querySelector(".form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=document.querySelector(".load-more-btn");let c="",d=1;M.addEventListener("submit",$);async function $(t){if(t.preventDefault(),c=t.target.elements[0].value,c.trim()===""){n("Yoyr search query is empty");return}S(u),y(l);try{const o=await f(c,d);if(console.log(o),o.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}m(u,o.data.hits),q(h)}catch(o){n(o.message)}finally{p(l)}}h.addEventListener("click",E);async function E(t){d++;try{const r=await f(c,d);y(l),m(u,r)}catch(r){n(r.message)}finally{p(l)}}
//# sourceMappingURL=index.js.map
