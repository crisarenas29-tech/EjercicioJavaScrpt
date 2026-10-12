//Ejercicio 3:
//Para aprobar un módulo académico, un estudiante debe tener una calificación final mayor o igual
// a 70 puntos y un porcentaje de asistencia igual o superior al 80%.
//Dados la nota final y el porcentaje de asistencia, determinar si está "Aprobado" o "Reprobado".
//ENTRADA
let nota = 40;
let asistencia = 75;
//PROCESO
let resultado = "";
if (nota >= 70 && asistencia >= 80) {
    resultado = "Aprobado";
} else {
    resultado = "Reprobado";
}
//SALIDA
console.log("Calificación final:", nota);
console.log("Asistencia:", asistencia, "%");
console.log("Resultado:", resultado);
