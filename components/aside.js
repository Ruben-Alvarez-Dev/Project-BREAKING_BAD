import "../styles/aside.css";
export function setupAside(element) {
    
    element.innerHTML = `
    <div class="aside">
        <div class="asideTitle">Aside Title</div>
        <div id="aside1" class="asideTool"></div>
        <div id="aside2" class="asideTool"><br>Appearance</div>
    </div>
    `
    setupAsideTools()
}

const setupAsideTools = () => {

    const template1 = `
    <div class="aside1"><br>
        <div>Dead or Alive...
            <form id="deadOrAlive">
                <br>
                <input type="radio" id="dead" name="deadOrAlive" value="dead">
                    <label for="dead">Dead</label><br><br>
                <input type="radio" id="alive" name="deadOrAlive" value="alive">
                    <label for="alive">Alive</label><br><br>
                <input type="radio" id="both" name="deadOrAlive" value="both" checked>
                    <label for="both">Both</label><br>
        </form><br>
        </div>
    `
    const template2ndPartDeleded = `
    <div>Born Date...
        <br><br><select id="bornDate">
                <option>1950´s</option>
                <option>1960´s</option>
                <option>1970´s</option>
                <option>1980´s</option>
                <option>1990´s</option>
                <option>Ancient times...</option>
                <option>Unknow</option>
            </select>
        </div><br>
        
    </div>
    `

    const template2 = `
    <div class="aside2">
        
        <div class="aside2Item"><br>
            <form id="appearanceBb">Breaking Bad<br>
            <input type="checkbox" name="bb" value="1" checked> Sea.1<br>
            <input type="checkbox" name="bb" value="2" checked> Sea.2<br>
            <input type="checkbox" name="bb" value="3" checked> Sea.3<br>
            <input type="checkbox" name="bb" value="4" checked> Sea.4<br>
            <input type="checkbox" name="bb" value="5" checked> Sea.5<br>
            </form><br>
        </div>

        <div class="aside2Item"><br>
        <form id="appearanceBcs">Better Call Saul<br>
        <input type="checkbox" name="bcs" value="1" checked> Sea.1<br>
        <input type="checkbox" name="bcs" value="2" checked> Sea.2<br>
        <input type="checkbox" name="bcs" value="3" checked> Sea.3<br>
        <input type="checkbox" name="bcs" value="4" checked> Sea.4<br>
        <input type="checkbox" name="bcs" value="5" checked> Sea.5<br>
        </form><br>
    </div>
    `
    
    document.querySelector(`#aside1`).innerHTML += template1;
    document.querySelector(`#aside2`).innerHTML += template2;
}