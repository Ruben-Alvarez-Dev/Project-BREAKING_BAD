import './style.css'
import { setupHeader } from './components/header.js'
import { setupMain } from './components/main.js'
import { setupAside } from './components/aside.js'
import { setupFooter } from './components/footer.js'

document.querySelector(`#app`).innerHTML += `
    <header id="header"></header>
    <div id="center">
        <main id="main"></main>
        <aside id="aside"></aside>
    </div>
    <footer id="footer"></footer>
`

setupHeader(document.querySelector('#header'));
setupMain(document.querySelector('#main'));
setupAside(document.querySelector('#aside'));
setupFooter(document.querySelector('#footer'));


const baseUrl = `https://www.breakingbadapi.com/api/`;
const endpointCharacters = `characters`;
const endpointEpisodes = `episodes`;
const endpointQuotes = `quotes`;
const endpointDeaths = `deaths`;

let data;

const getData = async (endpoint) => {
    const response = await fetch(baseUrl + endpoint);
    const dataJson = await response.json();
    data = dataJson
    printData(data)
}

const printData = (param) => {

    const display = document.querySelector(`#galleryDisplay`);
    
    param.forEach(element => {
    
        const template = `
            <div class="galleryItem">
                <span>${element.nickname}</span>
                <p><img height=80px width=80px src="${element.img}"></p>
            </div>`;

            display.innerHTML += template;


    });

    
}

getData (endpointCharacters);