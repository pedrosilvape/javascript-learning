// 1. Operadores Aritméticos
const num1 = 4;
const num2 = 8;

const addition = num1 + num2;
console.log("Adição:", addition);

const subtraction = num1 - num2;
console.log("Subtração:", subtraction);

const multiplication = num1 * num2;
console.log("Multiplicação:", multiplication);

const division = num1 / num2;
console.log("Divisão:", division);

const remainder = 13 % 2;
console.log("Resto da divisão:", remainder);

const exponentiation = 2 ** 3;
console.log("Potenciação:", exponentiation);

// 2. Ordem de Prioridade
const complexCalculation = (num1 + num2) * num1;
console.log("Cálculo complexo:", complexCalculation);
console.log(
  "2 + 3 * 5 =",
  2 + 3 * 5,
  ", pois a multiplicação é realizada antes da soma.",
);

// 3. Incremento e Decremento
let counter = 5;

counter++;
console.log("Incremento:", counter);

counter--;
console.log("Decremento:", counter);

// 4. Operadores de Atribuição
let number = 2;

number += 3;
console.log("Adição e atribuição:", number);

number -= 3;
console.log("Subtração e atribuição:", number);

number *= 3;
console.log("Multiplicação e atribuição:", number);

number /= 3;
console.log("Divisão e atribuição:", number);

// 5. Exemplos Praticos

// 5.1. Simulação de troco.
const purchaseValue = 35.9;
const paidValue = 50;
const change = paidValue - purchaseValue;
console.log("Troco a devolver: R$", change);

// 5.2. Média de notas.
const mathGrade = 10;
const portugueseGrade = 7;
const average = (mathGrade + portugueseGrade) / 2;
console.log("Média final:", average);

// 5.3. Controle de faltas.
const totalClasses = 100;
const absences = 25;
const absenceLimit = totalClasses * 0.25;
console.log("Faltas ultrapassaram o limite?", absences > absenceLimit);

// 5.4. Cálculo de porcentagem.
const percentageResult = 0.15 * 120;
console.log("15% de 120:", percentageResult);

// 5.5. Reajuste salarial.
let salary = 3000;
salary *= 1.1;
console.log("Salário após aumento de 10%: R$", salary);
