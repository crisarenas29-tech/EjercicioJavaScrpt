//Ejercicio 4: Un estacionamiento cobra una tarifa fija de $2.00 por la primera hora o fracción, y $1.50 por 
//cada hora adicional. Si el tiempo total supera las 5 horas, se aplica un recargo único de $3.00.
//Dado el número total de horas que un vehículo permaneció estacionado, calcular el monto final a pagar.
//ENTRADA
let horas = 4;
//PROCESO
let total = 0;
let recargo = 0;
let horasCobradas = horas;
if (horas > 0) {
    if (horas % 1 != 0) {
        horasCobradas = horas - (horas % 1) + 1;
    }
    if (horasCobradas <= 1) {
        total = 2;
    } else {
        total = 2 + (horasCobradas - 1) * 1.50;
    }
    if (horas > 5) {
        recargo = 3;
    }
    total = total + recargo;
}
//SALIDA
if (horas > 0) {
    console.log("Horas estacionadas:", horas);
    console.log("Recargo:", recargo);
    console.log("Total a pagar:", total);
} else {
    console.log("Número de horas no válido");
}