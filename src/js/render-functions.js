// імпорт лайтбокс + сторюємо новий екземпляр
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
//
let gallery = new SimpleLightbox('.gallery a', {
  overlay: true,
  overlayOpacity: 0.8,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
//
export function createMarckup(imageList) {
  return imageList
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
  </a>
  <ul class="statistic">
  <li><h3 class="statistic-header">Likes</h3> ${likes}</li>
  <li><h3 class="statistic-header">Views</h3> ${views}</li>
   <li><h3 class="statistic-header">Comments</h3> ${comments}</li>
    <li><h3 class="statistic-header">Downloads</h3> ${downloads}</li>
  </ul>
</li>`;
      }
    )
    .join('');
}
export function createGallery(container, imageList) {
  container.insertAdjacentHTML('beforeend', createMarckup(imageList));
  gallery.refresh();
}
export function clearGallery(list) {
  list.innerHTML = '';
}
export function showLoader(loader) {
  loader.classList.remove('hidden');
}
export function hideLoader(loader) {
  loader.classList.add('hidden');
}
