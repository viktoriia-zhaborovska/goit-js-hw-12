import{a as u,S as d,i as c}from"./assets/vendor-9PRhc7sc.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function p(a,r){return(await u.get("/api/",{params:{key:"51453441-8ba936d16adf232cd1ca4d1fd",q:a,image_type:"photo",orientation:"horizontal",page:r,per_page:15,safesearch:!0}})).data}const f=new d(".gallery a",{animationSpeed:350,captionsData:"alt",captionDelay:150,widthRatio:.9});function m(a){const r=a.map(o=>`<li class="gallery-item">
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
    </li>`).join("");document.querySelector("ul.gallery").insertAdjacentHTML("beforeend",r),f.refresh()}function g(){document.querySelector("ul.gallery").innerHTML=""}function y(){document.querySelector(".loader").classList.add("js-loader")}function h(){document.querySelector(".loader").classList.remove("js-loader")}const L=new URL("./img/x-octagon.svg",import.meta.url).href,i=document.querySelector(".form");let n="";i.addEventListener("submit",a=>{if(a.preventDefault(),n=i.elements["search-text"].value.trim(),n==="")return c.warning({backgroundColor:"orange",message:"Sorry, there is nothing provided here to look for. Please try again!",messageColor:"#fafafa",messageSize:"16px",messageLineHeight:1.5,position:"topLeft"});g(),y(),p(n).then(r=>{if(h(),i.elements["search-text"].value="",r.hits.length===0)return c.error({backgroundColor:"#ef4040",class:"error-message",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:1.5,position:"topRight",iconUrl:L});m(r.hits)}).catch(r=>{console.log(r)})});
//# sourceMappingURL=index.js.map
