// імпорти js
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createMarckup,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
// імпорт ізітост + створюємо сповіщення
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
function onError(message) {
  iziToast.error({
    position: 'topRight',
    timeout: 5000,
    message: message,
    icon: false,
    messageColor: '#ffffff',
    backgroundColor: '#992a2a',
  });
}

// отримуємо форму, лофдук і список в ДОМ
const form = document.querySelector('.form');
const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// створюємо івент і додаємо слухач подій
form.addEventListener('submit', searchPicks);
function searchPicks(event) {
  // прибираємо дефолтну поведінку
  event.preventDefault();
  // отримуємо лінк на інпут і в змінну присвоюємо введені в нього дані
  let input = event.target.elements[0];
  const query = input.value;
  if (query.trim() === '') {
    const emptyStringError = `Yoyr search query is empty`;
    onError(emptyStringError);
    return;
  }
  // функція, яка робить ресет форми і очищає лист
  clearGallery(list, form);
  // до опрацювання промісу показуємо завантаження
  showLoader(loader);
  // викликаємо функцію, яка опрацьовує проміс за пошуковим запитом
  getImagesByQuery(query)
    .then(response => {
      // додаємо перевірку чи масив із картинками не порожній
      if (response.length === 0) {
        const message = `Sorry, there are no images matching your search query. Please try again!`;
        onError(message);
        return null;
      }
      return response;
    })
    .then(data => {
      hideLoader(loader);
      if (!data) return;
      //   тут будемо опрацьовувати масив і робити розмітку
      createGallery(list, data);
    })
    .catch(error => {
      onError(error.message);
      hideLoader(loader);
    });
}
// // створюємо функцію, яка за допомогою аксіос робить запит на бекенд і повертає проміс
// function getImagesByQuery(query) {
//   const MY_API_KEY = '57395235-0ef9936ebfd59538adc74bf29';
//   return axios.get('https://pixabay.com/api/', {
//     params: {
//       key: MY_API_KEY,
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//     },
//   });
// }
// // функції для розмітки
// function createGallery(images) {
//   return images
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `<li class="gallery-item">
//   <a class="gallery-link" href="${largeImageURL}">
//     <img
//       class="gallery-image"
//       src="${webformatURL}"
//       data-source="${largeImageURL}"
//       alt="${tags}"
//     />
//   </a>
//   <ul class="statistic">
//   <li><h3 class="statistic-header">Likes</h3> ${likes}</li>
//   <li><h3 class="statistic-header">Views</h3> ${views}</li>
//    <li><h3 class="statistic-header">Comments</h3> ${comments}</li>
//     <li><h3 class="statistic-header">Downloads</h3> ${downloads}</li>
//   </ul>
// </li>`;
//       }
//     )
//     .join('');
// }
// function clearGallery() {
//   list.innerHTML = '';
//   form.reset();
// }
// function showLoader() {
//   loader.classList.remove('hidden');
// }
// function hideLoader() {
//   loader.classList.add('hidden');
// }
