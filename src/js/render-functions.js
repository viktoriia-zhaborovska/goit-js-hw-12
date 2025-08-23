import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemLarge = new SimpleLightbox('.gallery a', {
  animationSpeed: 350,
  captionsData: 'alt',
  captionDelay: 150,
  widthRatio: 0.9,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `<li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
        <ul class="photo-details">
          <li>
            <p>Likes</p>
            <p>${image.likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${image.views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${image.comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${image.downloads}</p>
          </li>
        </ul>
      </a>
    </li>`
    )
    .join('');

  document.querySelector('ul.gallery').insertAdjacentHTML('beforeend', markup);
  galleryItemLarge.refresh();
}

export function clearGallery() {
  document.querySelector('ul.gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.add('js-loader');
}

export function hideLoader() {
  document.querySelector('.loader').classList.remove('js-loader');
}

export function showLoadMoreButton() {
  document.querySelector('.js-load-more').classList.add('load-more-btn');
}

export function hideLoadMoreButton() {
  document.querySelector('.js-load-more').classList.remove('load-more-btn');
}