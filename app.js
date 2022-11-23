import './style.css'
import { setupHeader } from './components/header.js'
import { setupMain } from './components/main.js'
import { setupAside } from './components/aside.js'
import { setupFooter } from './components/footer.js'

document.querySelector(`#app`).innerHTML += `
<header id="header">
    <div class="header">
    </div>
</header>

<main id="main">
    <div class="main">
    </div>
</main>

<aside id="aside">
    <div class="aside">
    </div>
</aside>

<footer id="footer">
    <div class="footer">
    </div>
</footer>
`

setupHeader(document.querySelector('#header'));
setupMain(document.querySelector('#main'));
setupAside(document.querySelector('#aside'));
setupFooter(document.querySelector('#footer'));
