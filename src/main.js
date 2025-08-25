import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'modern-normalize/modern-normalize.css';
import getImagesByQuery from './js/pixabay-api';
import * as rendered from './js/render-functions';

const perPage = 15; 
const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".js-load-more");

let meaning = "";
let currentPage = 1;
let totalHits = 0;

form.addEventListener("submit", async e => {
  e.preventDefault();

  meaning = form.elements["search-text"].value.trim();
  currentPage = 1;
  rendered.clearGallery();
  rendered.hideLoadMoreButton();

  if (!meaning) {
    return iziToast.warning({
      backgroundColor: "orange",
      message: "Please enter something to search.",
      position: "topLeft"
    });
  }

  rendered.showLoader();

  try {
    const reply = await getImagesByQuery(meaning, currentPage);
    rendered.hideLoader();
    totalHits = reply.totalHits;

    if (reply.hits.length === 0) {
      return iziToast.error({
        backgroundColor: "#ef4040",
        message: "Sorry, no images found.",
        position: "topRight"
      });
    }

    rendered.createGallery(reply.hits);

   
    if (totalHits > perPage) {
      rendered.showLoadMoreButton();
    } else if (totalHits === 1) {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: "bottomCenter"
      });
    }
  } catch (error) { iziToast.error({
      backgroundColor: '#380505ff',
      message: `${error}`,
      messageColor: '#fff',
    });
  }  finally {
    rendered.hideLoader();
    form.reset();
  }
});

loadMoreBtn.addEventListener("click", async () => {
  currentPage += 1;
  rendered.showLoader();

  try {
    const reply = await getImagesByQuery(meaning, currentPage);
    rendered.hideLoader();

    if (reply.hits.length === 0) {
      rendered.hideLoadMoreButton();
      return iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "bottomCenter"
      });
    }

    rendered.createGallery(reply.hits);

    const { height: cardHeight } = document
      .querySelector(".gallery")
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });

    if (currentPage * perPage >= totalHits) {
      rendered.hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "bottomCenter"
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      backgroundColor: '#380505ff',
      message: `${error}`,
      messageColor: '#fff',
    });
  } finally {
    rendered.hideLoader();
  }
});
