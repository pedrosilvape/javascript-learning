// 1. For
for (let counter = 1; counter <= 10; counter++) {
  console.log("Número atual: " + counter);
}

// Verificação de números pares e ímpares.
for (let number = 0; number <= 15; number++) {
  if (number % 2 === 0) {
    console.log("Número par encontrado: " + number);
  } else {
    console.log("Número ímpar encontrado: " + number);
  }
}

// Percorrendo uma string.
const word = "calopsita";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// 2. While
let counter = 1;
while (counter <= 10) {
  console.log("Número atual: " + counter);
  counter++;
}

// 3. Do while
let number = 1;
do {
  console.log("Número atual: " + number);
  number++;
} while (number <= 10);

// 4. For...of
const text = "exemplo";
for (const character of text) {
  console.log(character);
}

// 5. Exercícios

// 5.1. Contagem de números pares e ímpares.
let totalEvenNumbers = 0;
let totalOddNumbers = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    totalEvenNumbers++;
  } else {
    totalOddNumbers++;
  }
}
console.log("Total de números pares: " + totalEvenNumbers);
console.log("Total de números ímpares: " + totalOddNumbers);

// 5.2. Conversão de temperatura.
for (let celsius = 0; celsius <= 100; celsius += 10) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(celsius + "°C = " + fahrenheit + "°F");
}

// 5.3. Fatorial de um número.
const factorialNumber = 5;
let factorial = 1;
for (let i = 2; i <= factorialNumber; i++) {
  factorial *= i;
}
console.log("Fatorial: " + factorial);

// 5.4. Sequência de Fibonacci.
let previous = 0;
let current = 1;
for (let i = 0; i < 15; i++) {
  const next = previous + current;
  console.log(next);
  previous = current;
  current = next;
}

// 5.5. Soma dos dígitos de um número.
const numberToSum = 4821;
let remaining = numberToSum;
let digitSum = 0;
while (remaining > 0) {
  const lastDigit = remaining % 10;
  digitSum += lastDigit;
  remaining = Math.floor(remaining / 10);
}
console.log("Soma dos dígitos: " + digitSum);

// 5.6. Pirâmide de asteriscos.
const height = 5;
for (let i = 1; i <= height; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// 5.7. Contagem de notas.
let value = 287;
let remainingValue = value;
let notes100 = 0;
let notes50 = 0;
let notes20 = 0;
let notes10 = 0;
while (remainingValue >= 100) {
  remainingValue -= 100;
  notes100++;
}
while (remainingValue >= 50) {
  remainingValue -= 50;
  notes50++;
}
while (remainingValue >= 20) {
  remainingValue -= 20;
  notes20++;
}
while (remainingValue >= 10) {
  remainingValue -= 10;
  notes10++;
}
console.log(notes100 + " nota(s) de 100");
console.log(notes50 + " nota(s) de 50");
console.log(notes20 + " nota(s) de 20");
console.log(notes10 + " nota(s) de 10");
console.log("Sobraram " + remainingValue + " reais em moedas");

// 5.8. Sorteio de dois dados.
let rounds = 100;
let sevens = 0;
for (let i = 1; i <= rounds; i++) {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  if (dice1 + dice2 === 7) {
    sevens++;
  }
}
console.log("Saiu 7 em " + sevens + " de " + rounds + " rodadas.");

// 5.9. Tentativas para adivinhar um número.
const secretNumber = 42;
let attempts = 0;
let guess;
do {
  guess = Math.floor(Math.random() * 100) + 1;
  attempts++;
  if (guess > secretNumber) {
    console.log("Tentativa " + attempts + ": " + guess + " — muito alto");
  } else if (guess < secretNumber) {
    console.log("Tentativa " + attempts + ": " + guess + " — muito baixo");
  }
} while (guess !== secretNumber);
console.log(
  "Acertou o número " + secretNumber + " em " + attempts + " tentativas.",
);

// 5.10. Contagem de vogais.
const wordToCheck = "Jujutsu Kaisen";
const normalizedWord = wordToCheck.toLowerCase();
let vowelCount = 0;
for (const character of normalizedWord) {
  if ("aeiou".includes(character)) {
    vowelCount++;
  }
}
console.log("A palavra tem " + vowelCount + " vogais.");
