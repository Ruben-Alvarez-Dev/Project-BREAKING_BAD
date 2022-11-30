import "../styles/aside.css";
export function setupAside(element) {
    
    element.innerHTML = `
    <div class="aside">
        <div class="asideTitle">Aside Title</div>
        <div id="aside1" class="asideTool">Aside Tool 1</div>
        <div id="aside2" class="asideTool"><br>Appearance</div>
    </div>
    `
    setupAsideTools()
}

const setupAsideTools = () => {

    const template1 = `
    <div class="aside1"><br>
        <div>Dead or Alive...
            <form>  
                <input type="radio" name="status" value="dead">Dead <br>  
                <input type="radio" name="status" value="alive">Alive <br>  
            </form><br>
        </div>
        <div>Born Date...
            <select name="birthdate">
                <option>1950´s</option>
                <option>1960´s</option>
                <option>1970´s</option>
                <option>1980´s</option>
                <option>1990´s</option>
                <option>Unknow</option>
            </select>
        </div>
        
    </div>
    `

    const template2 = `
    <div class="aside2">
        
        <div class="aside2Item">
            <form>Breaking Bad<br>
            <input type="checkbox" name="bb1" value="1"> Seas.1<br>
            <input type="checkbox" name="bb2" value="2"> Seas.2<br>
            <input type="checkbox" name="bb3" value="3"> Seas.3<br>
            <input type="checkbox" name="bb4" value="4"> Seas.4<br>
            <input type="checkbox" name="bb5" value="5"> Seas.5<br>
            </form>
        </div>

        <div class="aside2Item">
        <form>Better Call Saul<br>
        <input type="checkbox" name="bb1" value="1"> Seas.1<br>
        <input type="checkbox" name="bb2" value="2"> Seas.2<br>
        <input type="checkbox" name="bb3" value="3"> Seas.3<br>
        <input type="checkbox" name="bb4" value="4"> Seas.4<br>
        <input type="checkbox" name="bb5" value="5"> Seas.5<br>
        </form>
    </div>
    `
    
    document.querySelector(`#aside1`).innerHTML += template1;
    document.querySelector(`#aside2`).innerHTML += template2;
}