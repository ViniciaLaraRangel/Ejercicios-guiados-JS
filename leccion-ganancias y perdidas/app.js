//Ingresos
var income = parseInt(prompt("¿Cuánto es el ingreso?"));
//Costo
var costs = prompt("¿Cúanto es el costo?");
//Porcentaje de Impuestos
var taxPercent = prompt("Cúanto es el porcentaje de impuestos?");
//Ganancia bruta
var grossProfit = income-costs;
//Obteniendo cantidad de Impuestos
var tax = grossProfit*taxPercent/100;
//Ganancia neta
var netIncome = grossProfit-tax;
//Mostrando ganancia neta
document.write("Tu ganancia neta es $" + netIncome);
