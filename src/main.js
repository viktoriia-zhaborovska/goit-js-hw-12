import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'modern-normalize/modern-normalize.css';
import getImagesByQuery from './js/pixabay-api';
import * as rendered from './js/render-functions';

const closeSVGLink = new URL('./img/x-octagon.svg', import.meta.url).href;
const form = document.querySelector('.form');
let meaning = '';

form.addEventListener('submit', e => {
  e.preventDefault();
  meaning = form.elements['search-text'].value.trim();
  if (meaning === '') {
    return iziToast.warning({
      backgroundColor: 'orange',
      message:
        'Sorry, there is nothing provided here to look for. Please try again!',
      messageColor: '#fafafa',
      messageSize: '16px',
      messageLineHeight: 1.5,
      position: 'topLeft',
    });
  }

  rendered.clearGallery();
  rendered.showLoader();

  getImagesByQuery(meaning)
    .then(reply => {
      rendered.hideLoader();
      form.elements['search-text'].value = '';
      if (reply.hits.length === 0) {
        return iziToast.error({
          backgroundColor: '#ef4040',
          class: 'error-message',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          messageSize: '16px',
          messageLineHeight: 1.5,
          position: 'topRight',
          iconUrl: closeSVGLink,
        });
      }

      rendered.createGallery(reply.hits);
    })
    .catch(error => {
      console.log(error);
    });
});