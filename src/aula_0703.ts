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

// Generics e Tipagem Avançada

// Exercício 3:
// Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
// Teste a função com um array de números e um array de strings.

function inverterArray<T>(array: T[]): T[] {
  return array.reverse();
}

const numeros: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["a", "b", "c", "d", "e"];

console.log(inverterArray(numeros)); // [5, 4, 3, 2, 1]
console.log(inverterArray(strings)); // ["e", "d", "c", "b", "a"]

// Exercício 4:
// Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
// Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).

interface Repositorio<T> {
  salvar(dado: T): void;
  obterTodos(): T[];
}

interface Usuario {
  nome: string;
  email: string;
}

class RepositorioUsuarios implements Repositorio<Usuario> {
  private usuarios: Usuario[] = [];

  salvar(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  obterTodos(): Usuario[] {
    return this.usuarios;
  }
}

const repositorioUsuarios = new RepositorioUsuarios();
repositorioUsuarios.salvar({ nome: "Fulano", email: "email@defulano.com" });
repositorioUsuarios.salvar({ nome: "Ciclano", email: "email@deciclano.com" });

console.log(repositorioUsuarios.obterTodos());

// Exercício 5:
// Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
// Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log(`Erro: ${resposta}`);
  } else {
    console.log("Sucesso!");
  }
}

processarResposta("Erro de conexão"); // Erro: Erro de conexão
processarResposta(true); // Sucesso!

// Exercício 6:
//Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
// Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.

interface Estudante {
  nome: string;
  curso: string;
}

interface Trabalhador {
  empresa: string;
  cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
  nome: "Fulano",
  curso: "Ciência da Computação",
  empresa: "Empresa X",
  cargo: "Desenvolvedor",
};

console.log("Estudante Trabalhador: ", estudanteTrabalhador);