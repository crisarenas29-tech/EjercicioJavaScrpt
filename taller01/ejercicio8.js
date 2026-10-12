//Ejercicio 8:
//Dados tres números enteros distintos ingresados por el usuario, desarrollar la lógica mediante
//condicionales anidadas o compuestas para identificar e imprimir cuál de los tres
//números es el mayor.
//ENTRADA
let num1 = 1;
let num2 = 9;
let num3 = 6;
//PROCESO
let mayor = 0;
if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else {
    mayor = num3;
}
//SALIDA
console.log("Número 1:", num1);
console.log("Número 2:", num2);
console.log("Número 3:", num3);
console.log("El número mayor es:", mayor);
