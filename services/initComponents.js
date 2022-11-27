import { setupHeader } from '../components/header.js';
import { setupMain } from '../components/main.js';
import { setupAside } from '../components/aside.js';
import { setupFooter } from '../components/footer.js';

export const initComponents = () => {

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

}