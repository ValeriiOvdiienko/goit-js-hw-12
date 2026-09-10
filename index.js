import{a as d,S as m,i as h}from"./assets/vendor-sgVy0kkG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function y(t){return d.get("https://pixabay.com/api/",{params:{key:"57395235-0ef9936ebfd59538adc74bf29",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits)}let p=new m(".gallery a",{overlay:!0,overlayOpacity:.8,captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(t){return t.map(({webformatURL:o,largeImageURL:s,tags:r,likes:e,views:i,comments:a,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${o}"
      data-source="${s}"
      alt="${r}"
    />
  </a>
  <ul class="statistic">
  <li><h3 class="statistic-header">Likes</h3> ${e}</li>
  <li><h3 class="statistic-header">Views</h3> ${i}</li>
   <li><h3 class="statistic-header">Comments</h3> ${a}</li>
    <li><h3 class="statistic-header">Downloads</h3> ${f}</li>
  </ul>
</li>`).join("")}function L(t,o){t.insertAdjacentHTML("beforeend",g(o)),p.refresh()}function b(t){t.innerHTML=""}function P(t){t.classList.remove("hidden")}function l(t){t.classList.add("hidden")}function n(t){h.error({position:"topRight",timeout:5e3,message:t,icon:!1,messageColor:"#ffffff",backgroundColor:"#992a2a"})}const S=document.querySelector(".form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader");S.addEventListener("submit",q);function q(t){t.preventDefault();const s=t.target.elements[0].value;if(s.trim()===""){n("Yoyr search query is empty");return}b(u),P(c),y(s).then(r=>r.length===0?(n("Sorry, there are no images matching your search query. Please try again!"),null):r).then(r=>{l(c),r&&L(u,r)}).catch(r=>{n(r.message),l(c)})}
//# sourceMappingURL=index.js.map
