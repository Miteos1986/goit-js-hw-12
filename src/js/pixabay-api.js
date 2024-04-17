import axios from 'axios';


export async function searchPhoto (searchImg, page){

  const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43311498-bd26fa1e6ae7e25f586fd794c";

const response = await axios (BASE_URL, {
  
  params: {
    key: API_KEY,
    q: searchImg,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: 15,
    page
  },
});

return response
}