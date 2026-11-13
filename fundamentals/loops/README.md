# Loops

Diretório dedicado ao estudo das estruturas de repetição da linguagem JavaScript, utilizadas para executar blocos de código repetidamente enquanto determinadas condições forem atendidas.

## Conteúdo

### 1. For

Estrutura de repetição utilizada quando a quantidade de iterações é conhecida ou controlada por um contador.

**Sintaxe:**

```javascript
for (initialization; condition; increment) {
  // Código executado a cada iteração
}
```

### 2. While

Estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira. A condição é verificada antes de cada execução.

**Sintaxe:**

```javascript
while (condition) {
  // Código executado enquanto a condição for verdadeira
}
```

### 3. Do While

Estrutura semelhante ao `while`, mas com a condição verificada após a execução do bloco. Por isso, o código é executado pelo menos uma vez.

**Sintaxe:**

```javascript
do {
  // Código executado
} while (condition);
```

### 4. Iteração com For...Of

Alternativa para percorrer elementos de estruturas iteráveis, como strings e arrays, sem precisar controlar manualmente um contador ou acessar posições por índice.

**Exemplo:**

```javascript
const word = "JavaScript";

for (const character of word) {
  console.log(character);
}
```

### 5. Cuidados com estruturas de repetição

- Atualize a variável de controle quando necessário para evitar laços infinitos.
- Verifique a condição de parada para evitar execuções desnecessárias.
- Observe os limites do contador para evitar erros na quantidade de iterações.
- Utilize a estrutura mais adequada para cada situação.

## Objetivos

- Compreender o funcionamento das estruturas de repetição.
- Identificar as diferenças entre `for`, `while` e `do...while`.
- Percorrer strings e trabalhar com índices.
- Aplicar laços de repetição em cálculos e situações práticas.
- Desenvolver a lógica de programação por meio de exercícios.
