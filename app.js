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
    
    nav_all.addEventListener("click", () => {initData(urlAll, "All Characters")});
    nav_bb.addEventListener("click", () => {initData(urlBb, "Breaking Bad Characters")});
    nav_bcs.addEventListener("click", () => {initData(urlBcs, "Better Call Saul Characters")});
}

const initListeners = () => {

    let res1, res2, res3;
    
    const form1 = document.querySelectorAll(`[name=deadOrAlive]`);
    form1.forEach(btn1 => {
        btn1.addEventListener("change", () => {alert(btn1.value)})
    });

    //const form2 = document.querySelector(`#bornDate`);
    // form2.addEventListener("change", () => {alert(form2.value)})

    const form3 = document.querySelectorAll(`[name=bb]`);
    form3.forEach(btn3 => {
        btn3.addEventListener("change", () => {alert(btn3.value)})
    });

    const form4 = document.querySelectorAll(`[name=bcs]`);
    form4.forEach(btn4 => {
        btn4.addEventListener("change", () => {alert(btn4.value)})
    });

    const checkForm1 = () => {
        if (document.querySelector(`#dead`).checked) {
            let filterStatus = "dead";
        } else if (document.querySelector(`#alive`).checked) {
            let filterStatus = "alive";
        } else if (document.querySelector(`#both`).checked) {
            let filterStatus = "both";
        };
        return filterStatus;
    }

    /* const checkForm2 = () => {
        let bornDate = form2.value;
        return bornDate;
    } */

    const checkForm3 = () => {
        let bb = [];
        form3.forEach(element => {
            (element.checked) ? bb.push(element.value) : 0 ;
        })
        return bb
    }

    const checkForm4 = () => {
        let bcs = [];
        form4.forEach(element => {
            (element.checked) ? bcs.push(element.value) : 0 ;
        })
        return bcs
    }
    
    res1 = checkForm1();
    // checkForm2();
    res3 = checkForm3();
    res4 = checkForm4();

    console.log(res1, res3, res4)
}


// DISPARADORES
// _______________________________________________________

initComponents();
initNav();
initData (urlAll,  "All Characters");
initListeners();
