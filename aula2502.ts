// Exrecício 1
// Crie um array de números e imprima a soma dos valores.

let valores: number[] = [7, 13, 17, 19, 23];

let somaValores: number = valores.reduce((soma, valor) => soma + valor, 0);

console.log(somaValores); // 79


// Exercício 2
// Crie uma função que recebe um nome e retorna uma mensagem personalizada.

function mensagemPersonalizada(
    nomeAluno: string,
    nomeProfessor: string
  ): string {
    return `Olá, ${nomeAluno}! Seja bem-vindo(a)! ao Typescript com ${nomeProfessor}!`;
  }
  
  console.log(mensagemPersonalizada("Leonardo Ruiz", "Hete Caetano")); // Olá, Leonardo Ruiz! Seja bem-vindo(a)! ao Typescript com Hete Caetano!

