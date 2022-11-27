import './style.css'
import { initComponents } from './services/initComponents.js'
import { initData } from './services/initData.js';


const baseUrl = `https://www.breakingbadapi.com/api/`;
const endpointCharacters = `characters`;
const endpointEpisodes = `episodes`;
const endpointQuotes = `quotes`;
const endpointDeaths = `deaths`;

initComponents ();
initData (baseUrl + endpointCharacters);

// const heroTitle = document.querySelector(`.heroTitle`);
