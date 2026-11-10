# Variables in JavaScript

## 1. Introdução

Variáveis são identificadores utilizados para armazenar e referenciar valores durante a execução de um programa.

Em JavaScript, as variáveis podem ser declaradas utilizando três palavras-chave principais: `var`, `let` e `const`. Cada uma possui características específicas relacionadas ao escopo, à inicialização e à possibilidade de reatribuição.

## 2. Declaração de variáveis

### `var`

- Possui escopo global ou de função (_function scope_).
- Permite redeclaração e reatribuição.
- Quando declarada sem inicialização, recebe `undefined`.
- Suas declarações são içadas (_hoisting_), sendo inicializadas com `undefined`.

### `let`

- Possui escopo de bloco (_block scope_).
- Permite reatribuição, mas não redeclaração no mesmo escopo.
- Pode ser declarada sem inicialização, recebendo `undefined`.
- Está sujeita à Zona Morta Temporal (_Temporal Dead Zone_), impedindo seu acesso antes da declaração.

### `const`

- Possui escopo de bloco (_block scope_).
- Não permite redeclaração nem reatribuição no mesmo escopo.
- Exige inicialização no momento da declaração.
- Também está sujeita à Zona Morta Temporal (_Temporal Dead Zone_).

**Observação:** a utilização de `const` não impede a modificação de propriedades de objetos ou elementos de arrays. A restrição está na reatribuição da variável.

## 3. Tipos de dados

JavaScript possui sete tipos primitivos e um tipo não primitivo:

| Categoria     | Tipo        | Descrição                                                               |
| ------------- | ----------- | ----------------------------------------------------------------------- |
| Primitivo     | `String`    | Representa textos.                                                      |
| Primitivo     | `Number`    | Representa números inteiros e decimais.                                 |
| Primitivo     | `BigInt`    | Representa números inteiros de grande magnitude.                        |
| Primitivo     | `Boolean`   | Representa valores `true` ou `false`.                                   |
| Primitivo     | `Undefined` | Representa uma variável declarada sem valor atribuído.                  |
| Primitivo     | `Null`      | Representa a ausência intencional de valor.                             |
| Primitivo     | `Symbol`    | Representa identificadores únicos.                                      |
| Não primitivo | `Object`    | Representa estruturas que armazenam coleções de propriedades e valores. |

## 4. Escopo de variáveis

O escopo (_scope_) determina onde uma variável pode ser acessada no código.

| Tipo de escopo     | Descrição                                                   |
| ------------------ | ----------------------------------------------------------- |
| **Global scope**   | Permite acesso à variável no contexto global.               |
| **Function scope** | Limita o acesso ao contexto da função em que foi declarada. |
| **Block scope**    | Limita o acesso ao bloco delimitado por chaves `{}`.        |

`var` respeita o escopo global ou de função, enquanto `let` e `const` respeitam também o escopo de bloco.

## 5. Hoisting

_Hoisting_ é o comportamento pelo qual determinadas declarações são processadas antes da execução do código dentro de seu respectivo escopo.

- `var`: pode ser acessada antes da declaração, retornando `undefined` caso ainda não tenha sido inicializada.
- `let` e `const`: não podem ser acessadas antes da declaração, pois permanecem na _Temporal Dead Zone_.

## 6. Boas práticas

- Priorize `const` quando não houver necessidade de reatribuição.
- Utilize `let` quando precisar alterar o valor de uma variável.
- Evite `var` em códigos modernos, priorizando declarações com escopo de bloco.
- Utilize nomes descritivos para facilitar a compreensão do código.
- Adote **camelCase** para nomear variáveis, iniciando com letra minúscula e utilizando letras maiúsculas para separar palavras (ex.: `userName`, `birthYear`).
- Utilize nomes em inglês, seguindo as convenções comuns de desenvolvimento.

## 7. Exemplos práticos

Os exemplos de declaração, inicialização, reatribuição e _hoisting_ estão disponíveis em [`examples.js`](./examples.js).
