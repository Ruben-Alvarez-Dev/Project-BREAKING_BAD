export const initData = async (url) => {
  getData(url);
};

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  transformData(data);
};

const transformData = (rawArray) => {
  const mappedArray = rawArray.map((elem) => {
    return {
      name: elem.name,
      nick: elem.nickname,
      status: elem.status,
      occupation: elem.occupation,
      age: elem.birthday,
      seassons: elem.appearance,
      status: elem.status,
      img: elem.img,
    };
  });

  replaceBroken(mappedArray);
};

const replaceBroken = (mappedArray) => {
  const index1 = mappedArray.findIndex((n) => n.nick == "Skinny");
  mappedArray[
    index1
  ].img = `https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg`;

  const index2 = mappedArray.findIndex((n) => n.nick == "Holly");
  mappedArray[
    index2
  ].img = `https://ichef.bbci.co.uk/news/624/cpsprodpb/D174/production/_92502635__92374015_gettyimages-599941526.jpg.webp`;

  printData(mappedArray);
};

const printData = (mappedArray) => {
  mappedArray.forEach((element) => {
    const galleryDisplay = document.querySelector(`#galleryDisplay`);

    galleryDisplay.innerHTML += `
        <div class="galleryItem">
        ${element.nick}<br>
        <img src="${element.img}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg'"><br>
        </div>`;
  });

  let current = 0;
  printHero(mappedArray, current);
};

const printHero = (mappedArray, current) => {

// Places

  const heroTitle = document.querySelector(`.heroTitle`);
  const heroContent = document.querySelector(`.heroContent`);
  const heroContentText = document.querySelector(`.heroContentText`);
  const heroContentImg = document.querySelector(`.heroContentImg`);

// Content

  const cardTitle = mappedArray[current].nick;
  const cardImg = `<img src="${mappedArray[current].img}">`;
  const cardText = `
        <h4>Name:    ${mappedArray[current].name}</h4>
        Occupation:  ${mappedArray[current].occupation}<br>
        Age:         ${mappedArray[current].age}<br>
        Status:      ${mappedArray[current].status}<br>
        Nick:        ${mappedArray[current].nick}<br>
        Seassons:    ${mappedArray[current].seassons}<br>

        `;
  
// Injections
    
  heroTitle.innerHTML = cardTitle;
  heroContentText.innerHTML = cardText;
  heroContentImg.innerHTML = cardImg;
};
