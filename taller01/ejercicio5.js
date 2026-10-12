//Ejercicio 5:
//Una empresa paga a sus empleados una tarifa de $5.00 por hora regular (hasta 40 horas
//a la semana). Las horas trabajadas que excedan las 40 horas se pagan como horas extras a un
//valor de $7.50 cada una. Dado el número de horas trabajadas en la semana,
//determinar el salario bruto, el pago por horas extras (si aplica) y el salario total.
//ENTRADA
let horas = 30;
//PROCESO
let salarioRegular = 0;
let pagoExt = 0;
let salarioBruto = 0;
let salarioTotal = 0;
if (horas <= 40) {
    salarioRegular = horas * 5;
} else {
    salarioRegular = 40 * 5;
    pagoExt = (horas - 40) * 7.50;
}
salarioBruto = salarioRegular + pagoExt;
salarioTotal = salarioBruto;
//SALIDA
console.log("Horas trabajadas:", horas);
console.log("Salario bruto:", salarioBruto);
console.log("Pago por horas extras:", pagoExt);
console.log("Salario total:", salarioTotal);
