import { initData } from "../services/initData";
import "../styles/header.css";
export function setupHeader(element) {
    
    element.innerHTML = `
    <div class="header">
        <div class="navLogo"><img src="../resources/bb_icon2.png"</div>
        <div class="navItemsContainer">
            
            <div class="navItem">
                <button id="nav_all">All Characters</button>
            </div>
            
            <div class="navItem">
                <button id="nav_bb">Breaking Bad</button>
            </div>
            
            <div class="navItem">
                <button id="nav_bcs">Better Call Saul</button>
            </div>
            
        </div>
        
    </div>
    `
}
