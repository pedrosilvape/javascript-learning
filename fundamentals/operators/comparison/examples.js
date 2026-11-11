// 1. Operadores de Comparação
const age = 36;
const ageBrother = 16;
const referenceAge = "36";

// Igualdade (==).
console.log("São iguais?", age == referenceAge);

// Diferença (!=).
console.log("São diferentes?", age != referenceAge);

// Maior que (>).
console.log("É maior que 18?", age > 18);

// Menor que (<).
console.log("É menor que 18?", age < 18);

// Maior ou igual (>=).
console.log("É maior de idade?", age >= 18);

// Menor ou igual (<=).
console.log("É menor ou igual a 18?", ageBrother <= 18);

// Igualdade estrita (===).
console.log("São estritamente iguais?", age === referenceAge);

// Diferença estrita (!==).
console.log("São estritamente diferentes?", age !== referenceAge);

// 2. Exemplos Práticos

// 2.1. Verificação de maioridade.
const isAdult = age >= 18;
console.log("Maior de idade?", isAdult);

// 2.2. Situação do aluno.
const grade1 = 10;
const grade2 = 7;
const average = (grade1 + grade2) / 2;
console.log("Aprovado na média?", average >= 7);

// 2.3. Validação de senha.
const password1 = "123";
const password2 = "123";
const passwordChecker = password1 === password2;
console.log("As senhas são iguais?", passwordChecker);

// 2.4. Controle de faltas.
const totalClasses = 100;
const absences = 25;
const absenceLimit = totalClasses * 0.25;
console.log("Faltas ultrapassaram o limite?", absences > absenceLimit);
