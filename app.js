import './style.css'
import { setupHeader } from './components/header.js'
import { setupMain } from './components/main.js'
import { setupAside } from './components/aside.js'
import { setupFooter } from './components/footer.js'

document.querySelector(`#app`).innerHTML += `
    <header id="header"></header>
    <main id="main"></main>
    <aside id="aside"></aside>
    <footer id="footer"></footer>
`

setupHeader(document.querySelector('#header'));
setupMain(document.querySelector('#main'));
setupAside(document.querySelector('#aside'));
setupFooter(document.querySelector('#footer'));
