console.log("Aqui inicia mi programa");
//Practicando funciones flecha
const multiplicacion = (numeroUno, numeroDos) => numeroUno*numeroDos;
const division = (numeroUno , numeroDos) => numeroUno / numeroDos;
//Practicando funciones expresadas 
const suma = function(numeroUno,numeroDos){
    const result = numeroUno + numeroDos;
    console.log(result);
    return result;

}

const resta = function (numeroUno,numeroDos){
const result = numeroUno - numeroDos;
return result;
}

function escogiendoOperacion(operacion)
{
    let primerNumero = parseInt(document.getElementById("primerNumero").value);
    let segundoNumero = parseInt(document.getElementById("segundoNumero").value);
    let valorResultado= operacion(primerNumero,segundoNumero);
    if(isNaN(valorResultado))
    alert("Vuelve a ingresar los numeros, resultado no valido");
    else
    document.getElementById("resultado").innerHTML = valorResultado;
}
