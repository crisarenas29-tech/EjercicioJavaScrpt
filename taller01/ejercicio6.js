//Ejercicio 6:
//Dado un número entero ingresado por el usuario, determinar si el número es positivo, negativo
//o cero. En caso de ser diferente de cero, indicar además si se trata de un número
//par o impar.
//ENTRADA
let numero = 0;
//PROCESO
let signo = "";
let paridad = "";
if (numero > 0) {
    signo = "Positivo";
} else if (numero < 0) {
    signo = "Negativo";
} else {
    signo = "Cero";
}
if (numero != 0) {
    if (numero % 2 == 0) {
        paridad = "Par";
    } else {
        paridad = "Impar";
    }
}
//SALIDA
console.log("Número:", numero);
console.log("Signo:", signo);
if (numero != 0) {
    console.log("Paridad:", paridad);
}