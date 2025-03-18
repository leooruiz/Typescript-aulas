// Interfaces e Tipagem Avançada
const meuCarro = {
    marca: "Chevrolet",
    modelo: "Camaro",
    ano: 2021,
    motor: "V8",
};
console.log(meuCarro);
const multiplicacao = (num1, num2) => num1 * num2;
console.log(multiplicacao(5, 3)); // 15
console.log(multiplicacao(7, 8)); // 56
// Generics e Tipagem Avançada
// Exercício 3:
// Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
// Teste a função com um array de números e um array de strings.
function inverterArray(array) {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d", "e"];
console.log(inverterArray(numeros)); // [5, 4, 3, 2, 1]
console.log(inverterArray(strings)); // ["e", "d", "c", "b", "a"]
class RepositorioUsuarios {
    constructor() {
        this.usuarios = [];
    }
    salvar(usuario) {
        this.usuarios.push(usuario);
    }
    obterTodos() {
        return this.usuarios;
    }
}
const repositorioUsuarios = new RepositorioUsuarios();
repositorioUsuarios.salvar({ nome: "Fulano", email: "email@defulano.com" });
repositorioUsuarios.salvar({ nome: "Ciclano", email: "email@deciclano.com" });
console.log(repositorioUsuarios.obterTodos());
function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log(`Erro: ${resposta}`);
    }
    else {
        console.log("Sucesso!");
    }
}
processarResposta("Erro de conexão"); // Erro: Erro de conexão
processarResposta(true); // Sucesso!
const estudanteTrabalhador = {
    nome: "Fulano",
    curso: "Ciência da Computação",
    empresa: "Empresa X",
    cargo: "Desenvolvedor",
};
console.log("Estudante Trabalhador: ", estudanteTrabalhador);
