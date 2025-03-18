// Interfaces e Tipagem Avançada

// Exercício 1:
// Crie uma interface chamada Carro, que contenha as seguintes propriedades:
// marca (string)
// modelo (string)
// ano (number)
// motor (opcional, string)
// Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.

interface SuperCarro {
  marca: string;
  modelo: string;
  ano: number;
  motor?: string;
}

const meuCarro: SuperCarro = {
  marca: "Chevrolet",
  modelo: "Camaro",
  ano: 2021,
  motor: "V8",
};

console.log(meuCarro);

// Exercício 2:
// Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
// Depois, implemente essa função e teste com diferentes valores.

interface Multiplicacao {
  (num1: number, num2: number): number;
}

const multiplicacao: Multiplicacao = (num1, num2) => num1 * num2;

console.log(multiplicacao(5, 3)); // 15
console.log(multiplicacao(7, 8)); // 56


