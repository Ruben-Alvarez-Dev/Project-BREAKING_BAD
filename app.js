import './style.css'
import './style.css'
import './style.css'
import { initComponents } from './services/initComponents.js';
import { initData } from './services/initData.js';


// DECLARACIONES
// ---------------------------------------------------

const baseUrl = `https://www.breakingbadapi.com/api/`;
const endpointCharacters = `characters`;
const endpointEpisodes = `episodes`;
const endpointQuotes = `quotes`;
const endpointDeaths = `deaths`;

let url = baseUrl + endpointCharacters;

let mappedData;
let data;
let array;


// INICIALIZO COMPONENTES
// ----------------------------------------------------

initComponents ();
initData (url);

