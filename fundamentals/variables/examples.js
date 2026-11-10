// 1. Declaração de variáveis

// var: permite redeclaração e reatribuição.
var userName = "Pedro";
var userName = "Pedro Silva";
userName = "Pedro Silva Pereira";
console.log("Nome:", userName);

// let: permite reatribuição.
let userAge = 19;
userAge = 20;
console.log("Idade:", userAge);

// const: não permite reatribuição.
const birthYear = 2006;
console.log("Ano de nascimento:", birthYear);

// 2. Inicialização Reatribução

// Inicialização sem atribuição.
let balance;
balance = 200;
console.log("Saldo inicial:", balance);

// Reatribuição
balance += 100;
balance -= 50;
console.log("Saldo final: R$", balance);

// 3. Hoisting

// var: declaração içada e inicializada com undefined.
console.log(hoistedVariable);
var hoistedVariable = "JavaScript";

// let e const: permanecem na Temporal Dead Zone
// até a execução alcançar suas declarações.
// console.log(userNameTDZ);
// let userNameTDZ = "Pedro";

// 4. Exemplos práticos

// 4.1. Boas-vindas personalizadas.
const name = "Pedro Silva Pereira";
console.log("Olá,", name, "! Seja bem-vindo(a) ao curso de JavaScript!");

// 4.2. Cálculo de idade.
const currentYear = new Date().getFullYear();
const yearOfBirth = 2006;
const age = currentYear - yearOfBirth;
console.log("Você tem", age, "anos.");

// 4.3. Verificação de tipo.
const hasDriverLicense = true;
console.log("Tipo da variável:", typeof hasDriverLicense);

// 4.4. Média de notas.
const mathGrade = 5;
const portugueseGrade = 2;
const scienceGrade = 7;
const average = (mathGrade + portugueseGrade + scienceGrade) / 3;

console.log("Média final:", average);
// 4. Reajuste salarial.
let salary = 3000;
salary *= 1.1;
console.log("Salário após aumento de 10%: R$", salary);

// 4.6. Contador de cliques.
let clicks = 0;
clicks++;
clicks++;
clicks++;
console.log("O botão foi clicado", clicks, "vezes.");

// 4.7. Concatenação de tipos diferentes.
const message = "Olá";
const number = 2;
const result = message + number;
console.log("Resultado:", result);
console.log("Tipo:", typeof result);
