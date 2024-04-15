export function searchPhoto (searchImg){

  const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43311498-bd26fa1e6ae7e25f586fd794c";

const params = new URLSearchParams ({
    key: API_KEY,
    q: searchImg,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
})

const url = `${BASE_URL}?${params}`
return fetch(url)
  .then((response) => {
    if (!response.ok) {
throw new Error (response.status)
    }
    
    return response.json();
  });
}