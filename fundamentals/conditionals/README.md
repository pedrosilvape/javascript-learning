# Conditionals

Diretório dedicado ao estudo das estruturas condicionais da linguagem JavaScript, reunindo conceitos, anotações e exemplos práticos sobre tomada de decisões e controle do fluxo de execução.

## Conteúdo

### 1. if, else e else if

Estruturas utilizadas para executar diferentes blocos de código de acordo com condições estabelecidas.

### 2. Ternary Operator

Operador condicional utilizado como uma alternativa mais compacta ao `if...else`.

**Sintaxe:**

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### 3. Truthy e Falsy

Valores que são interpretados como verdadeiros (_truthy_) ou falsos (_falsy_) em contextos booleanos, como condições `if`.

**Valores Falsy e Truthy:**

| Falsy       | Descrição                     | Truthy         | Descrição                |
| ----------- | ----------------------------- | -------------- | ------------------------ |
| `false`     | Booleano falso                | `true`         | Booleano verdadeiro      |
| `0`         | Número zero                   | `1`            | Número diferente de zero |
| `-0`        | Zero negativo                 | `-1`           | Número negativo          |
| `0n`        | BigInt zero                   | `"JavaScript"` | String não vazia         |
| `""`        | String vazia                  | `"0"`          | String contendo zero     |
| `null`      | Ausência intencional de valor | `[]`           | Array vazio              |
| `undefined` | Valor não definido            | `{}`           | Objeto vazio             |
| `NaN`       | Não é um número válido        | —              | —                        |

Todos os valores que não são _falsy_ são considerados _truthy_ em contextos booleanos.

### 4. Switch

Estrutura utilizada para executar diferentes blocos de código com base no valor de uma expressão.

**Palavras reservadas:**

- `switch`: inicia a estrutura de seleção.
- `case`: define um valor para comparação.
- `break`: interrompe a execução do bloco `switch`.
- `default`: define o bloco executado quando nenhum `case` corresponde ao valor.

## Objetivos

- Compreender o funcionamento das estruturas condicionais.
- Utilizar condições para controlar o fluxo de execução.
- Identificar valores truthy e falsy.
- Aplicar diferentes estruturas condicionais em situações práticas.
- Desenvolver a lógica de programação por meio de exercícios.

## Exemplos práticos

Os exemplos estão disponíveis no arquivo [examples.js](examples.js).
