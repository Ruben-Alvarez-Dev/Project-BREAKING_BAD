
export const initData = (url) => {
  getData(url);
}

const getData = async (url) => {
  try {
  	  const response = await fetch(url);
	    const array = await response.json();
      // printData(array)
      clearBrokens(array);
  } catch (error) {
      console.log(error);
  }
}

const clearBrokens = (array) => {
  array.forEach(element => {
    if (element.nickname == "Holly") {
        element.img = `https://www.cidob.org/dass-2019041701/var/plain/storage/images/new_site/biografias_lideres_politicos/america_del_norte/estados_unidos/donald_trump/1993720-58-esl-ES/donald_trump_biography.jpg`
    } else if (element.nickname == "Lydia") {
        element.img = `https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Elon_Musk_Colorado_2022_%28cropped%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped%29.jpg`
    } else if (element.nickname == "Skinny") {
        element.img = `https://static.posters.cz/image/1300/art-photo/the-lord-of-the-rings-gandalf-i132723.jpg`
    }
  });
  printData(array);
}

const printData = (mappedArray) => {
  mappedArray.forEach(element => {
    const galleryContent = document.querySelector(`.galleryContent`);
    const galleryCard = ` 
            <button id="btn${element.char_id}" class="galleryItem">
              ${element.nickname}<br><br>
              <img src="${element.img}">
            </button>`
    galleryContent.innerHTML += galleryCard;
  });
  putListeners(mappedArray)
}

const putListeners = (mappedArray) => {
  mappedArray.forEach(element => {
    document.querySelector(`#btn${element.char_id}`).addEventListener("click", () => {printHero(element)})
  })
}

const printHero = (fullActiveElement) => {
  const heroCard = `
   <br>
   <div>
        <div class="heroTitle">
                ${fullActiveElement.nickname}
        </div><br>

        <div class="heroContent">
            <div class="heroText">
                ${fullActiveElement.name}<br>
                ${fullActiveElement.occupation}<br>
                ${fullActiveElement.seassons}<br>
                ${fullActiveElement.birthday}<br>
            </div><br>
            <div class="heroImg">
                  <img src="${fullActiveElement.img}">
            </div>
        </div>

   </div>   
   `
  const hero = document.querySelector(`#hero`)
  hero.innerHTML = heroCard;
}