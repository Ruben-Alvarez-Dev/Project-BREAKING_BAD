import "../styles/main.css";
export function setupMain(element) {
    
  element.innerHTML = `
  <div class="main">
    <div id="hero" class="hero">
        <div class="heroTitle">Hero Title</div>
        <div class="heroContent">Hero Content</div>
    </div>
    <div id="gallery" class="gallery">
        <div class="galleryTitle">Gallery Title</div>
        <div class="galleryContent">Gallery Content</div>
    </div>
  </div>
  `

}
