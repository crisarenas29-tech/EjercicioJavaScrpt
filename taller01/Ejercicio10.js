//Ejercicio 10:
//Una empresa de agua cobra una tarifa base de $5.00 que incluye los primeros 15 m3 consumidos.
//Si el consumo supera los 15 m3, cada m3 adicional tiene un costo de $0.40.
//Dado el volumen de metros cúbicos consumidos en el mes, calcular el valor total de
//la planilla de agua.
//ENTRADA
let consumo = 10;
//PROCESO
let tarifaBase = 5;
let consumoAdicional = 0;
let costoAdicional = 0;
let total = tarifaBase;
if (consumo > 15) {
    consumoAdicional = consumo - 15;
    costoAdicional = consumoAdicional * 0.40;
    total = tarifaBase + costoAdicional;
}
//SALIDA
console.log("Consumo de agua:", consumo, "m3");
console.log("Consumo adicional:", consumoAdicional, "m3");
console.log("Costo adicional:", costoAdicional);
console.log("Total a pagar:", total);
