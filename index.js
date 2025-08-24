import{a as u,S as p,i as c}from"./assets/vendor-9PRhc7sc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();u.defaults.baseURL="https://pixabay.com";async function f(a,t){return(await u.get("/api/",{params:{key:"41896213-148f054eadfc6d224b6c8f8ef",q:a,image_type:"photo",orientation:"horizontal",page:t,per_page:15,safesearch:!0}})).data}const d=new p(".gallery a",{animationSpeed:350,captionsData:"alt",captionDelay:150,widthRatio:.9});function m(a){const t=a.map(o=>`<li class="gallery-item">
      <a href="${o.largeImageURL}">
        <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}">
        <ul class="photo-details">
          <li>
            <p>Likes</p>
            <p>${o.likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${o.views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${o.comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${o.downloads}</p>
          </li>
        </ul>
      </a>
    </li>`).join("");document.querySelector("ul.gallery").insertAdjacentHTML("beforeend",t),d.refresh()}function g(){document.querySelector("ul.gallery").innerHTML=""}function y(){document.querySelector(".loader").classList.add("js-loader")}function h(){document.querySelector(".loader").classList.remove("js-loader")}const L=new URL("./img/x-octagon.svg",import.meta.url).href,i=document.querySelector(".form");let n="";i.addEventListener("submit",a=>{if(a.preventDefault(),n=i.elements["search-text"].value.trim(),n==="")return c.warning({backgroundColor:"orange",message:"Sorry, there is nothing provided here to look for. Please try again!",messageColor:"#fafafa",messageSize:"16px",messageLineHeight:1.5,position:"topLeft"});g(),y(),f(n).then(t=>{if(h(),i.elements["search-text"].value="",t.hits.length===0)return c.error({backgroundColor:"#ef4040",class:"error-message",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:1.5,position:"topRight",iconUrl:L});m(t.hits)}).catch(t=>{console.log(t)})});
//# sourceMappingURL=index.js.map
