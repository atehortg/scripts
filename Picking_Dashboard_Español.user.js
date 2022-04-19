// ==UserScript==
// @name         Dashboard de picking en Español
// @namespace    https://github.com/atehortg/scripts
// @version      1
// @description  Muestra la dashboard de picking en español y con los minutos más claros de facil comprensión.
// @author       atehortg@
// @match        https://aftlite-portal-eu.amazon.com/ojs/OrchaJSFaaSTCoreProcess/OutboundDashboard

// ==/UserScript==
setTimeout(function(){

var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
if(m >= 15 && (h == 1 || h == 3 || h == 5 || h== 7 || h == 9 || h == 11 || h == 13 || h == 15 || h == 17 || h == 19 || h == 21 || h == 23)){
    var a = "Scheduled 1HR Orders<BR>"
    } else if( m < 30 && (h == 2 || h == 4 || h == 6 || h == 8 || h == 10 || h == 12 || h == 14 || h == 16 || h == 18 || h == 20 || h == 22)){
        var b = "<75m Para SLAM<BR>"
    } else if( m < 45 && (h == 2 || h == 4 || h == 6 || h == 8 || h == 10 || h == 12 || h == 14 || h == 16 || h == 18 || h == 20 || h == 22)){
        var f = "<60m Para SLAM<BR>"
    } else if( m <= 59 && (h == 2 || h == 4 || h == 6 || h == 8 || h == 10 || h == 12 || h == 14 || h == 16 || h == 18 || h == 20 || h == 22)){
        var g = "<45m Para SLAM<BR>"
    } else if( m < 15 && (h == 1 || h == 3 || h == 5 || h== 7 || h == 9 || h == 11 || h == 13 || h == 15 || h == 17 || h == 19 || h == 21 || h == 23)){
        var c = "<75m Para SLAM<BR>"
    }


//<45 min block
if(m < 10 || m >= 30){
    setInterval(function(){ location.reload(); }, 300000);
    var y="<30m Para SLAM<BR>"
    }else if(m < 20){
        setInterval(function(){ location.reload(); }, 300000);
        var x="<20m Para SLAM<BR>"
        }else if(m < 25){
            setInterval(function(){ location.reload(); }, 300000);
            var z="<10m Para SLAMBR>"
            }else if(m < 29){
                setInterval(function(){ location.reload(); }, 60000);
                var v="<5m Para SLAM<BR>"
                }else if(m == 29){
setInterval(function(){ location.reload(); }, 60000);
                    var q="Último minuto!!<BR>"
                    }

document.getElementById('orchajs_obd_heading_missed').innerHTML = "1h Tarde";
document.getElementById('orchajs_obd_heading_less5min' ).innerHTML = "<5m Para SLAM<BR>";
document.getElementById('orchajs_obd_heading_less15min').innerHTML = "<15m Para SLAMs";
document.getElementById('orchajs_obd_heading_less45min').innerHTML = "¡Vamos Tarde!<BR>";
document.getElementById('orchajs_obd_heading_less75min').innerHTML = (y || x || z || v || q);
document.getElementById('orchajs_obd_heading_less2h').innerHTML = (a || b || c || f || g);
document.getElementById('orchajs_obd_heading_less4h').innerHTML = "Siguiente Ventana<BR>";
document.getElementById('orchajs_obd_heading_more4h').innerHTML = "Futuras Ventanas<BR>";
document.getElementById('orchajs_obd_heading_total').innerHTML = "Total de Picking<BR>";


setInterval(function(){location.reload()}, 60000)
}, 3000)
