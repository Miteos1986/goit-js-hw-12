import axios from 'axios';

export async function searchPhoto(searchImg, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43311498-bd26fa1e6ae7e25f586fd794c';
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchImg,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}