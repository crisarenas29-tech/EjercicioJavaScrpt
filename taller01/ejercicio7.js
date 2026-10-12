//Ejercicio 7:
//Dados el peso en kilogramos y la estatura en metros de una persona, calcular su IMC.IMC = peso / (estatura * estatura).
// Clasificar el estado nutricional en:"Bajo peso" (IMC menor que 18.5),"Peso normal" (IMC desde 18.5 hasta menos de 25)
//o "Sobrepeso" (IMC mayor o igual a 25).
//ENTRADA
let peso = 120;
let estatura = 1.78;
//PROCESO
let imc = 0;
let categoria = "";

if (peso > 0 && estatura > 0) {
    imc = peso / (estatura * estatura);
    if (imc < 18.5) {
        categoria = "Bajo peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else {
        categoria = "Sobrepeso";
    }
}
//SALIDA
if (peso > 0 && estatura > 0) {
    console.log("IMC:", imc);
    console.log("Categoría:", categoria);
} else {
    console.log("Peso o estatura no válidos");
}