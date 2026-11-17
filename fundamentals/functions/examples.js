// 1. Função de saudação
function greeting() {
  console.log("Olá, seja bem-vindo(a)!");
}
greeting();

// 2. Função com parâmetros
function introducePerson(name, age) {
  console.log("Olá, meu nome é " + name + " e tenho " + age + " anos.");
}
introducePerson("Pedro", 20);

// 3. Cálculo de IMC
function calculateBMI(weight, height) {
  return weight / (height * height);
}
const bmi = calculateBMI(80, 1.75);
console.log("Resultado do IMC: " + bmi.toFixed(2));

// 4. Verificar aprovação
function checkApproval(grade) {
  if (grade >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
const approvalResult = checkApproval(2);
console.log("Resultado da aprovação: " + approvalResult);

// 5. Número par ou ímpar
function isEven(number) {
  return number % 2 === 0;
}
const numberIsEven = isEven(6);
console.log("O número é par? " + numberIsEven);

// 6. Função soma
function sum(num1, num2) {
  return num1 + num2;
}
const sumResult = sum(8, 15);
console.log("A soma dos números: " + sumResult);

// 7. Reutilizando código
function calculateChange(purchaseValue, paidValue) {
  return paidValue - purchaseValue;
}
const change = calculateChange(50, 60);
console.log("Troco a ser devolvido: " + change);

// 8. Arrow function
const sumArrow = (num1, num2) => num1 + num2;
console.log("A soma dos números: " + sumArrow(8, 15));

// 9. Callback simples
function executeAction(action) {
  return action();
}
function messageAction() {
  return "Executando ação!";
}
console.log(executeAction(messageAction));

// 10. Desafio do quiz
function askQuestion(question, correctAnswer, userAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("Resposta correta!");
  } else {
    console.log("Resposta errada!");
  }
}
askQuestion("Qual é a capital do Brasil?", "Brasília", "Brasília");
