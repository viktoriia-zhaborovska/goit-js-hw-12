import{a as f,S as L,i as c}from"./assets/vendor-9PRhc7sc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();f.defaults.baseURL="https://pixabay.com";async function m(o,t){return(await f.get("/api/",{params:{key:"41896213-148f054eadfc6d224b6c8f8ef",q:o,image_type:"photo",orientation:"horizontal",page:t,per_page:15,safesearch:!0}})).data}const b=new L(".gallery a",{animationSpeed:350,captionsData:"alt",captionDelay:150,widthRatio:.9});function p(o){const t=o.map(s=>`<li class="gallery-item">
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
    </li>`).join("");document.querySelector("ul.gallery").insertAdjacentHTML("beforeend",t),b.refresh()}function w(){document.querySelector("ul.gallery").innerHTML=""}function g(){document.querySelector(".loader").classList.add("js-loader")}function u(){document.querySelector(".loader").classList.remove("js-loader")}function y(){document.querySelector(".js-load-more").classList.add("load-more-btn")}function h(){document.querySelector(".js-load-more").classList.remove("load-more-btn")}const S=new URL("./img/x-octagon.svg",import.meta.url).href,i=document.querySelector(".form"),v=document.querySelector(".js-load-more");let l="",a=1;i.addEventListener("submit",o=>{if(o.preventDefault(),l=i.elements["search-text"].value.trim(),!l)return c.warning({backgroundColor:"orange",message:"Please enter a search term!",messageColor:"#fafafa",position:"topLeft"});a=1,w(),h(),g(),m(l,a).then(t=>{if(u(),i.elements["search-text"].value="",t.hits.length===0)return c.error({backgroundColor:"#ef4040",class:"error-message",message:"No images found for your query.",messageColor:"#fafafb",iconUrl:S});p(t.hits),t.totalHits>a*15&&y()}).catch(t=>console.log(t))});v.addEventListener("click",async()=>{a+=1,h(),g();try{const o=await m(l,a);u(),p(o.hits),o.totalHits>a*15?y():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(o){u(),console.log(o)}});
//# sourceMappingURL=index.js.map
