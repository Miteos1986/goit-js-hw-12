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
const list = document.querySelector(".js-list")
const searchForm = document.querySelector(".js-search-form");
const loader = document.querySelector(".hide")
const buttonLoad = document.querySelector(".buttonLoad")



searchForm.addEventListener("submit", handleSubmit);
function handleSubmit (event){
event.preventDefault();
loader.classList.remove("hide");
list.innerHTML="";
const input = searchForm.elements.picture.value;
searchForm.reset();
searchPhoto (input)

  .then ((data)=>{
    if (data.hits.length === 0) {
      loaderOff();
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!'
        });
    } else 
   { 
    // console.log("data",data);
   
 
  list.insertAdjacentHTML("beforeend",createMarkup(data.hits));
  lightbox.refresh();}
})

  .catch((error) => {console.log("error",error);
  
  loaderOff();
    iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!'
    });
  })
  .finally(()=>{
    loaderOff();
  }
);
  
  function loaderOff (){
    loader.classList.add("hide")
    
  }

}
