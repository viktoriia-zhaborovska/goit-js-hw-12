import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'modern-normalize/modern-normalize.css';
import getImagesByQuery from './js/pixabay-api';
import * as rendered from './js/render-functions';

const closeSVGLink = new URL('./img/x-octagon.svg', import.meta.url).href;
const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.js-load-more');

let meaning = '';
let page = 1;

form.addEventListener('submit', e => {
  e.preventDefault();
  meaning = form.elements['search-text'].value.trim();
  if (!meaning) {
    return iziToast.warning({
      backgroundColor: 'orange',
      message: 'Please enter a search term!',
      messageColor: '#fafafa',
      position: 'topLeft',
    });
  }

  page = 1;
  rendered.clearGallery();
  rendered.hideLoadMoreButton();
  rendered.showLoader();

  getImagesByQuery(meaning, page)
    .then(reply => {
      rendered.hideLoader();
      form.elements['search-text'].value = '';
      if (reply.hits.length === 0) {
        return iziToast.error({
          backgroundColor: '#ef4040',
          class: 'error-message',
          message: 'No images found for your query.',
          messageColor: '#fafafb',
          iconUrl: closeSVGLink,
        });
      }

      rendered.createGallery(reply.hits);

      if (reply.totalHits > page * 15) {
        rendered.showLoadMoreButton();
      }
    })
    .catch(error => console.log(error));
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  rendered.hideLoadMoreButton();
  rendered.showLoader();

  try {
    const reply = await getImagesByQuery(meaning, page);
    rendered.hideLoader();

    rendered.createGallery(reply.hits);

    if (reply.totalHits > page * 15) {
      rendered.showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    rendered.hideLoader();
    console.log(error);
  }
});
