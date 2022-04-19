// ==UserScript==
// @name         NYR Pallets with vendor code
// @namespace    https://github.com/atehortg/scripts
// @version      1.0
// @description  Muestra los codigos de los vendor en la dashboard de NYR Pallets
// @author       atehortg@
// @match        https://aftlite-eu.amazon.com/dock_receive/view_nyr_pallets*
// @downloadURL  https://raw.githubusercontent.com/atehortg/scripts/main/FindPeopleDashboard.user.js
// @grant        none
// ==/UserScript==

(function() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "document";
    xhr.open("GET", "/dock_receive/view_received");
    xhr.onreadystatechange = function() {
        if(xhr.readyState != xhr.DONE) return;
        let table = xhr.responseXML.getElementById("received_pos");
        let NYRtable = document.getElementById("nyr_pallets");
        for(let row of NYRtable.rows) {
            let PO = row.cells[1].innerHTML.trim();
            for(let PORow of table.rows) {
                let POSearch = PORow.cells[0].innerHTML.trim();
                if(POSearch == PO) {
                    let cell = row.insertCell(0);
                    cell.style.backgroundColor = row.cells[1].style.backgroundColor;
                    cell.innerHTML = PORow.cells[1].innerHTML;
                    cell.style.textAlign = "center";
                    cell.style.width = "50px";
                    break;
                }
            }
        }
    }
    xhr.send();
})();
