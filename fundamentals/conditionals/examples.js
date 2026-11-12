// 1. If, else e else if
const age = 18;
if (age >= 18) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}

const studentGrade = 4;
if (studentGrade >= 9) {
  console.log("Nota excelente!");
} else if (studentGrade >= 7) {
  console.log("Nota boa!");
} else if (studentGrade >= 4) {
  console.log("Nota média!");
} else {
  console.log("Nota ruim!");
}

// 2. Ternary operator
age >= 18 ? console.log("É maior de idade") : console.log("É menor de idade");

// 3. Truthy e falsy
const userName = "Pedro";
if (userName) {
  console.log("Olá, " + userName);
} else {
  console.log("Ainda não sei o seu nome.");
}

const userAge = null;
if (userAge !== null && userAge >= 18) {
  console.log("Maior de idade");
} else if (userAge !== null && userAge >= 0 && userAge < 18) {
  console.log("Menor de idade");
}

// 4. Switch
switch (studentGrade) {
  case 10:
  case 9:
    console.log("Excelente!");
    break;
  case 8:
  case 7:
    console.log("Bom!");
    break;
  case 6:
  case 5:
  case 4:
    console.log("Médio!");
    break;
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Ruim!");
    break;
  default:
    console.log("Valor inválido");
}

// 5. Exercícios

// 5.1. Verificação de idade
const purchaseAge = 17;
if (purchaseAge >= 18) {
  console.log("Pode comprar bebida alcoólica");
} else {
  console.log("Venda proibida para menores de 18 anos");
}

// 5.2. Saudação de acordo com a hora
const currentHour = 8;
if (currentHour >= 6 && currentHour < 12) {
  console.log("Bom dia!");
} else if (currentHour >= 12 && currentHour < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// 5.3. Número positivo ou negativo
const number = 5;
if (number > 0) {
  console.log("Número positivo");
} else if (number < 0) {
  console.log("Número negativo");
} else {
  console.log("Igual a zero");
}

// 5.4. Conversão de nota em conceito
const grade = 8;
if (grade >= 9) {
  console.log("A (9-10)");
} else if (grade >= 8) {
  console.log("B (8-8.9)");
} else if (grade >= 6) {
  console.log("C (6-7.9)");
} else if (grade >= 4) {
  console.log("D (4-5.9)");
} else {
  console.log("E (0-3.9)");
}

// 5.5. Número par ou ímpar
const number2 = 9;
number2 % 2 === 0 ? console.log("É par") : console.log("É ímpar");

// 5.6. Menu com switch
const option = 2;
switch (option) {
  case 1:
    console.log("Cadastrar");
    break;
  case 2:
    console.log("Listar");
    break;
  case 3:
    console.log("Sair");
    break;
  default:
    console.log("Opção inválida");
}

// 5.7. Validação de campo obrigatório
const email = "";
if (email) {
  console.log("E-mail válido");
} else {
  console.log("Preencha o campo de e-mail");
}

// 5.8. Validação fictícia de senha
const password = "123";
const isPasswordValid = false;
if (isPasswordValid) {
  console.log("Senha válida");
} else {
  console.log("Senha muito curta");
}

// 5.9. Compra com saldo
const availableBalance = 100;
const purchaseValue = 80;
if (availableBalance >= purchaseValue) {
  console.log("Compra aprovada");
} else {
  console.log("Saldo insuficiente");
}
