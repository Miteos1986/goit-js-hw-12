import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
 
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createMarkup } from "./js/render-functions"
import { searchPhoto } from "./js/pixabay-api";

const lightbox = new SimpleLightbox('.gallery a', {  
    
  captionsData: "alt",
  captionPosition:"bottom",
  captionDelay: 250
});
const list = document.querySelector(".gallery")
const searchForm = document.querySelector(".js-search-form");
const loader = document.querySelector(".hide")
const buttonLoad = document.querySelector(".buttonLoad")

let page = 1;
let per_page = 15;

searchForm.addEventListener("submit", handleSubmit);
// buttonLoad.addEventListener("click", nextPage);


async function handleSubmit (event){
event.preventDefault();
loader.classList.remove("hide");
list.innerHTML="";
const input = searchForm.elements.picture.value;
page = 1;
searchForm.reset();

try {
  
 const data = await searchPhoto (input, page);
 
     if (data.hits.length === 0) {
      buttonLoad.style.display = "none";
      loaderOff();
      iziToast.error({
        title: 'Oooops',
        message: 'Enter text'
        });
    } else { 
    
  list.insertAdjacentHTML("beforeend",createMarkup(data.hits));
  lightbox.refresh();
  page += 1;
}

}
  catch(error)  {
  
  loaderOff();
    iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!'
    });
  }
  finally {
    loaderOff();
  }
}

async  function nextPage (event) {

}

function loaderOff (){
  loader.classList.add("hide")
  
}