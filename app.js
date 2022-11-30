import './style.css'
import './style.css'
import './style.css'
import { initComponents } from './services/initComponents.js';
import { initData } from './services/initData.js';

// DECLARACIONES
// ---------------------------------------------------

const baseUrl = `https://www.breakingbadapi.com/api/`;
const endpointAll = `characters`;
const endpointBb = `characters?category=Breaking+Bad`;
const endpointBcs = `characters?category=Better+Call+Saul`;


let urlAll = baseUrl + endpointAll;
let urlBb = baseUrl + endpointBb;
let urlBcs = baseUrl + endpointBcs;

let mappedData;
let data;
let array;

function initNav () {
    const nav_all = document.querySelector(`#nav_all`);
    const nav_bb = document.querySelector(`#nav_bb`);
    const nav_bcs = document.querySelector(`#nav_bcs`);
    
    nav_all.addEventListener("click", () => {initData(urlAll)});
    nav_bb.addEventListener("click", () => {initData(urlBb)});
    nav_bcs.addEventListener("click", () => {initData(urlBcs)});
}


// DISPARADORES
// _______________________________________________________

initComponents();
initNav();
initData (urlAll);

