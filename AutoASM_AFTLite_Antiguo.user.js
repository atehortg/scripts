// ==UserScript==
// @name         AutoASM_AFTLite_Antiguo
// @namespace    https://github.com/atehortg/scripts
// @version      1
// @description  Nos loguea automaticamente cada minuto en ASM desde el AFT Lite antigüo con tan solo mantener la ventana activa en el navegador. Simplemente entra en https://aftlite-eu.amazon.com/indirect_action/signin_indirect_action y te logueas con tus datos de AFT Lite actuales.
// @downloadURL  https://raw.githubusercontent.com/atehortg/scripts/main/AutoASM_AFTLite_Antiguo.user.js
// @author       atehortg@
// @match        https://aftlite-eu.amazon.com/indirect_action/signin_indirect_action*
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function() {
        let login = document.getElementsByTagName("span")[0].innerHTML.match(/\(([^)]+)\)/)[1]; // get login from top of page
        let xhr = new XMLHttpRequest();
        xhr.reponseType = "document";
        xhr.overrideMimeType('text/xml');
        xhr.open("POST", "/indirect_action/signin_indirect_action");
        let data = new FormData();
        data.append("name", login);
        data.append("code", "ASM");
        xhr.onreadystatechange = function() {
            if(xhr.readyState != xhr.DONE) return;
            let msg = xhr.responseXML.getElementsByClassName("Positive")[0].innerHTML;
            let d = new Date();
            try {
                let flash = document.getElementsByClassName("Positive")[0];
                flash.innerHTML = msg.substring(0, msg.length - 2) + " at " + d.toLocaleTimeString();
            } catch {
                let flash = document.createElement("div");
                flash.id = "Flash";
                flash.classList.add("Flash");
                let pos = document.createElement("div");
                pos.classList.add("Positive");
                flash.appendChild(pos);
                let head = document.getElementsByTagName("h1")[0];
                pos.innerHTML = msg.substring(0, msg.length - 2) + " at " + d.toLocaleTimeString() + ".";
                head.before(flash);
            }
        };
        xhr.send(data);
    }, 60000);
    
})();
