# Functions

Diretório dedicado ao estudo das funções em JavaScript, reunindo conceitos, sintaxes e exemplos sobre declaração, execução e utilização de funções.

## Conteúdo

### 1. Function

Funções são blocos de código reutilizáveis, utilizados para executar tarefas específicas.

**Parâmetros e argumentos:**

- **Parâmetro:** variável definida na declaração da função, utilizada para receber valores.
- **Argumento:** valor passado para a função durante sua chamada.

**Exemplo:**

```javascript
function greeting(name) {
  console.log("Olá, " + name);
}

greeting("Pedro");
```

### 2. Return

A palavra reservada `return` permite que uma função retorne um valor para ser utilizado em outras partes do código.

**Exemplo:**

```javascript
function calculateDouble(number) {
  return number * 2;
}

const result = calculateDouble(4);
console.log(result);
```

### 3. Arrow Functions

Forma alternativa de declarar funções utilizando a sintaxe `=>`.

**Principais formatos:**

**Com bloco de código:**

```javascript
const greeting = (name) => {
  console.log("Olá, " + name);
};
```

**Com retorno implícito:**

```javascript
const calculateDouble = (number) => number * 2;
```

**Com apenas uma instrução:**

```javascript
const greeting = (name) => console.log("Olá, " + name);
```

### 4. Higher-Order Functions (HOF)

São funções que recebem outras funções como argumentos ou retornam funções. No material estudado, o exemplo utiliza uma função recebida como parâmetro, chamada de _callback_.

**Exemplo:**

```javascript
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

const result = calculate(3, 8, sum);
console.log(result);
```

### 5. Funções globais

Funções utilizadas para executar tarefas específicas, como agendar ou repetir a execução de um código.

- `setTimeout()`: executa uma função após determinado intervalo de tempo.
- `setInterval()`: executa uma função repetidamente em intervalos definidos.
- `clearInterval()`: interrompe a execução de um intervalo criado com `setInterval()`.

### 6. This

A palavra-chave `this` faz referência ao contexto de execução da função. Seu comportamento varia conforme a forma como a função é declarada.

**Função tradicional (Normal Function):**

O valor de `this` é definido pelo modo como a função é chamada.

```javascript
const person = {
  name: "Pedro",
  greeting: function () {
    console.log(this.name);
  },
};

person.greeting(); // Pedro
```

**Arrow Function:**

Não possui um `this` próprio. Em vez disso, utiliza o `this` do contexto em que foi criada.

```javascript
const person = {
  name: "Pedro",
  greeting: () => {
    console.log(this.name);
  },
};

person.greeting(); // Não acessa o name do objeto person
```

**Diferença principal:**

- **Normal Function:** o `this` depende de como a função é chamada.
- **Arrow Function:** o `this` é herdado do contexto externo em que a função foi criada.

### 7. Entrada de dados no Node.js

O módulo `readline` permite receber informações digitadas pelo usuário diretamente no terminal.

**Principais recursos utilizados:**

- `require()`: importa o módulo `readline`.
- `createInterface()`: cria uma interface de entrada e saída.
- `question()`: apresenta uma pergunta e recebe a resposta do usuário por meio de um callback.
- `close()`: encerra a interface de leitura.
