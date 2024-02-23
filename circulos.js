/* 
Versión cutre 
function ocultarRojo(){
    document.getElementById("rojo").style.visibility = "hidden";
}
function ocultarVerde(){
    document.getElementById("verde").style.visibility = "hidden";
}
function ocultarAzul(){
    document.getElementById("azul").style.visibility = "hidden";
}
*/
/* Versión mejorada */
function ocultar(x){
    document.getElementById(x).style.visibility = "hidden";
}
function mostrar(caja){
    document.getElementById(caja).style.visibility = "visible";
}
/* Versión con un solo boton */
function ocultar_o_mostrar(caja){
    if (document.getElementById(caja).style.visibility =="visible" || document.getElementById(caja).style.visibility =="")
        document.getElementById(caja).style.visibility = "hidden";
    else
        document.getElementById(caja).style.visibility = "visible";
}