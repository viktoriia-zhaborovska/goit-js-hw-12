import{a as p,S as L,i as a}from"./assets/vendor-9PRhc7sc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();p.defaults.baseURL="https://pixabay.com";async function y(o,e){return(await p.get("/api/",{params:{key:"41896213-148f054eadfc6d224b6c8f8ef",q:o,image_type:"photo",orientation:"horizontal",page:e,per_page:15,safesearch:!0}})).data}const w=new L(".gallery a",{animationSpeed:350,captionsData:"alt",captionDelay:150,widthRatio:.9});function g(o){const e=o.map(s=>`<li class="gallery-item">
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
    </li>`).join("");document.querySelector("ul.gallery").insertAdjacentHTML("beforeend",e),w.refresh()}function S(){document.querySelector("ul.gallery").innerHTML=""}function h(){document.querySelector(".loader").classList.add("js-loader")}function c(){document.querySelector(".loader").classList.remove("js-loader")}function v(){document.querySelector(".js-load-more").classList.add("load-more-btn")}function f(){document.querySelector(".js-load-more").classList.remove("load-more-btn")}const b=15,d=document.querySelector(".form"),C=document.querySelector(".js-load-more");let l="",n=1,i=0;d.addEventListener("submit",async o=>{if(o.preventDefault(),l=d.elements["search-text"].value.trim(),n=1,S(),f(),!l)return a.warning({backgroundColor:"orange",message:"Please enter something to search.",position:"topLeft"});h();try{const e=await y(l,n);if(c(),i=e.totalHits,e.hits.length===0)return a.error({backgroundColor:"#ef4040",message:"Sorry, no images found.",position:"topRight"});g(e.hits),i>b?v():i===1&&a.error({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"})}catch(e){a.error({backgroundColor:"#380505ff",message:`${e}`,messageColor:"#fff"})}finally{c(),d.reset()}});C.addEventListener("click",async()=>{n+=1,h();try{const o=await y(l,n);if(c(),o.hits.length===0)return f(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"});g(o.hits);const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),n*b>=i&&(f(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}))}catch(o){console.log(o),a.error({backgroundColor:"#380505ff",message:`${o}`,messageColor:"#fff"})}finally{c()}});
//# sourceMappingURL=index.js.map
