console.log("Aqui inicia mi programa");
//Practicando funciones flecha
const multiplicacion = (numeroUno, numeroDos) => numeroUno * numeroDos;
const division = (numeroUno, numeroDos) => numeroUno / numeroDos;
//Practicando funciones expresadas 
const suma = function (numeroUno, numeroDos) {
    const result = numeroUno + numeroDos;
    console.log(result);
    return result;

}

const resta = function (numeroUno, numeroDos) {
    const result = numeroUno - numeroDos;
    return result;
}
/*
 En esta funcion recibimos el valor de operacion que es dado por cada
 uno de los botones de los operadores, tomamos el valor de los dos 
 input y se transfroma a tipo numerico flotante*/

function escogiendoOperacion(operacion) {
    let primerNumero = parseFloat(document.getElementById("primerNumero").value);
    let segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
    let operador = toString(operacion);
    /*Si los dos valores son correctos son llamadas las funciones
    Se va a mostrar el resultado con dos decimales*/
    if (primerNumero <= 10000000 && primerNumero >= -10000000
        && segundoNumero <= 10000000 && segundoNumero >= -10000000) {
        let valorResultado = operacion(primerNumero, segundoNumero);
        //En caso de que se intente dividir 0 entre 0 saldra una leyenda
        if (isNaN(valorResultado))
            document.getElementById("resultado").innerHTML = "No se puede dividir 0 entre 0";
        //Cambie la leyenda infinity por infinito
        else if (valorResultado == Infinity)
            document.getElementById("resultado").innerHTML = "Infinito";
        //Si todo esta corracto muestra el resultado
        else
            document.getElementById("resultado").innerHTML = valorResultado.toFixed(2);
    }
}
