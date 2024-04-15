export function createMarkup (arr) {
   
    return arr.map(({webformatURL, largeImageURL,tags, likes, views, comments, downloads}) =>`
<li class="gallery-item">
<a class="gallery-link" href="${largeImageURL}" >
<img class="gallery-img" src="${webformatURL}" alt=${tags} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${likes}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${views}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${comments}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${downloads}</li>
</ul> 
</li>


    `) .join("")

}
