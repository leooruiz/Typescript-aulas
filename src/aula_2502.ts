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

// Exercício 3
// Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.

class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    public ano: number
  ) {}
  detalhesCarro(): string {
    return 'Marca: ' + this.marca + ', Modelo: ' + this.modelo + ', Ano: ' + this.ano;
  }
}
const carro1 = new Carro('Fiat', 'Uno', 2010);
console.log(carro1.detalhesCarro()); // Marca: Fiat, Modelo: Uno, Ano: 2010