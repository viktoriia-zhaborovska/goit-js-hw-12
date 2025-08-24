import{a as f,S as b,i as n}from"./assets/vendor-9PRhc7sc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();f.defaults.baseURL="https://pixabay.com";async function m(r,e){return(await f.get("/api/",{params:{key:"41896213-148f054eadfc6d224b6c8f8ef",q:r,image_type:"photo",orientation:"horizontal",page:e,per_page:15,safesearch:!0}})).data}const w=new b(".gallery a",{animationSpeed:350,captionsData:"alt",captionDelay:150,widthRatio:.9});function y(r){const e=r.map(s=>`<li class="gallery-item">
      <a href="${s.largeImageURL}">
        <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}">
        <ul class="photo-details">
          <li>
            <p>Likes</p>
            <p>${s.likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${s.views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${s.comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${s.downloads}</p>
          </li>
        </ul>
      </a>
    </li>`).join("");document.querySelector("ul.gallery").insertAdjacentHTML("beforeend",e),w.refresh()}function S(){document.querySelector("ul.gallery").innerHTML=""}function g(){document.querySelector(".loader").classList.add("js-loader")}function l(){document.querySelector(".loader").classList.remove("js-loader")}function v(){document.querySelector(".js-load-more").classList.add("load-more-btn")}function h(){document.querySelector(".js-load-more").classList.remove("load-more-btn")}const L=15,p=document.querySelector(".form"),q=document.querySelector(".js-load-more");let i="",a=1,d=0;p.addEventListener("submit",async r=>{if(r.preventDefault(),i=p.elements["search-text"].value.trim(),a=1,S(),h(),!i)return n.warning({backgroundColor:"orange",message:"Please enter something to search.",position:"topLeft"});g();try{const e=await m(i,a);if(l(),d=e.totalHits,e.hits.length===0)return n.error({backgroundColor:"#ef4040",message:"Sorry, no images found.",position:"topRight"});y(e.hits),d>L?v():n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})}catch(e){console.log(e),l()}});q.addEventListener("click",async()=>{a+=1,g();try{const r=await m(i,a);l(),y(r.hits);const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),a*L>=d&&(h(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}))}catch(r){console.log(r),l()}});
//# sourceMappingURL=index.js.map
