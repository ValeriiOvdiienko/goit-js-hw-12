import axios from 'axios';
// export function getImagesByQuery(query) {
//   const MY_API_KEY = '57395235-0ef9936ebfd59538adc74bf29';
//   return axios
//     .get('https://pixabay.com/api/', {
//       params: {
//         key: MY_API_KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//       },
//     })
//     .then(response => response.data.hits);
// }
export async function getImagesByQuery(query, currentPage = 1) {
  const MY_API_KEY = '57395235-0ef9936ebfd59538adc74bf29';
  const picsPerPage = 15;
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: MY_API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: picsPerPage,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
