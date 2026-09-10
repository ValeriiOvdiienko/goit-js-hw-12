import axios from 'axios';
export function getImagesByQuery(query) {
  const MY_API_KEY = '57395235-0ef9936ebfd59538adc74bf29';
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: MY_API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
}
