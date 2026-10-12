//Ejercicio 9:
//Un restaurante ofrece las siguientes opciones al momento de pagar la cuenta: Si el pago es en "Efectivo", se otorga
//un 10% de descuento. Si es con "Tarjeta de Débito", el monto se mantiene igual.
//Si es con "Tarjeta de Crédito", se aplica un recargo del 5%. Dado el subtotal del consumo y el método
//de pago elegido, calcular el monto final.
//ENTRADA
let subtotal = 100;
let metodo = "Efectivo";
//PROCESO
let descuento = 0;
let recargo = 0;
let total = subtotal;

if (metodo == "Efectivo") {
    descuento = subtotal * 0.10;
    total = subtotal - descuento;
} else if (metodo == "Tarjeta de Débito") {
    total = subtotal;
} else if (metodo == "Tarjeta de Crédito") {
    recargo = subtotal * 0.05;
    total = subtotal + recargo;
}
//SALIDA
console.log("Subtotal:", subtotal);
console.log("Método de pago:", metodo);
console.log("Descuento:", descuento);
console.log("Recargo:", recargo);
console.log("Total a pagar:", total);
