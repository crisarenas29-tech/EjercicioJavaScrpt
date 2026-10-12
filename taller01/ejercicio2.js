//Ejercicio 2:
//Un club deportivo requiere clasificar a sus inscritos según su edad: "Infantil" (menores de 12 años),
// "Juvenil" (entre 12 y 17 años) y "Mayor"(18 años o más). Dado el año de nacimiento del usuario y el año actual,
//calcular la edad y determinar la categoría correspondiente.
//ENTRADA
let anioNacimiento = 2016;
let anioActual = 2026;
//PROCESO
let edad = anioActual - anioNacimiento;
let categoria = "";
if (edad < 12) {
    categoria = "Infantil";
} else if (edad < 18) {
    categoria = "Juvenil";
} else {
    categoria = "Mayor";
}
//SALIDA
console.log("Edad:", edad);
console.log("Categoría deportiva:", categoria);
