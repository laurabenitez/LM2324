/* Código
Javascript del convresor
*/
function convertir(divisa){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;
    if (divisa=="euros"){
        // Convierto a euros
        resultado = valor * 0.91;
        document.getElementById("resultado").innerHTML = resultado + " €";
    }
    else {
        // Convierto a dolares
        resultado = valor * 1.09;
        document.getElementById("resultado").innerHTML = resultado + " $";
    }

}