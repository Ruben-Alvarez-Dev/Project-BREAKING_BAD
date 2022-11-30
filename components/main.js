import "../styles/main.css";
import "../styles/hero.css";
import "../styles/gallery.css";
export function setupMain(element) {
  
const template = `

  <div class="main">
    <div id="hero" class="hero">
        
    </div>
    <div id="gallery" class="gallery">
        <div class="galleryTitle">Gallery Title</div>
        <div id="galleryDisplay" class="galleryContent"></div>
    </div>
  </div>

`
element.innerHTML = template;


}

