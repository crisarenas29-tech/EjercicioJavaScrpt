//Ejercicio 1:
//Una tienda ofrece un descuento del 15% a clientes de tipo "VIP" y un 5% a clientes "Frecuentes".
//Los clientes "Regulares" no reciben descuento. Dado el monto total de la compra y el tipo de cliente,
// determinar el descuento y el valor final a pagar.
//ENTRADA
let monto = 100;
let categoria = "Regulares";
//PROCESO
let descuento = 0;
let total = 0;
if (categoria == "VIP") {
    descuento = monto * 0.15;
} else if (categoria == "Frecuente") {
    descuento = monto * 0.05;
} else {
    descuento = 0;
}
total = monto - descuento;
//SALIDA
console.log("Descuento aplicado:", descuento);
console.log("Valor final a pagar:", total);
