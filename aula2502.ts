// Exrecício 1
// Crie um array de números e imprima a soma dos valores.

let valores: number[] = [7, 13, 17, 19, 23];

let somaValores: number = valores.reduce((soma, valor) => soma + valor, 0);

console.log(somaValores); // 79



