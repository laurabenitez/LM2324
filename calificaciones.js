/**
 * Realizado por Laura Benitez Marquez
 * para calcular las calificaciones del ciclo
 */
var notas=();
function añadir(){
    let numero = parseFloat(document.getElementById("numero")).value;
    // borramos cualquier mensaje de error previo
        document.getElementById("aviso").innerHTML="";
        if(install(numero)){ // si true significa que no es un numero
            document.getElementById("aviso").innerHTML="Debes introducir un numero del  0 al 10"
        }
    else{
        // compruebo que esta comprendido entre el 0 y el 10
        if(numero<0 || numero>10){
            document.getElementById("aviso").innerHTML="Debes introducir un numero entre o y 10"
        }        
        else{
            notas.push(numero);
            document.getElementById("notas").innerHTML = notas;
        }
    }
}
function borrar(){

}
function calcularMedia(){
    let total=0.0;
    for (var i=0;i<notas.lenght;i++){
        total += notas(i);
    }
    total = total/notas.lenght;
    document.getElementById("resultado").innerHTML = total.toFixed(2);
}