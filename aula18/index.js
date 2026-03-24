//             0  1  2  4  5  6
// const array = [1, 2, 3]; 
// array.push(4);
// array[0] = 'Luiz';
// array = 'Outra'; // Não posso reatribuir o valor ao 'const';
// console.log(array)

// Criar varias variaveis para por características;
// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nome02 = 'Caio';
// const sobrenome02 = 'Ribeiro';
// const idade02 = 19;

// Mesma coisa só que simplificado (Objeto);

// const pessoa1 = { // Usar vírgula ao final;
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Caio',
//     sobrenome: 'Ribeiro',
//     idade: 19
// };

// Posso filtrar por dentro dos meus objetos; // variável.filtro;
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

function criaPessoa(nome, sobrenome, idade) { // Paramêtro;
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa7 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 26,

    fala () { // Método // Funções métodos executam ações;
        console.log(`A minha idade atual é: ${this.idade}`);
        // ${this.nome} // Ele pega a informação do Objeto e executa;
    },
    
    incrementaIdade() {
        this.idade++;
    }
}

pessoa7.fala();
pessoa7.incrementaIdade();
pessoa7.fala();
pessoa7.incrementaIdade();
pessoa7.fala();

const pessoa1 = criaPessoa('Luiz', 'Henrique', 39); // Argumentos;
const pessoa2 = criaPessoa('Maria', 'Miranda', 25); // Argumentos;
const pessoa3 = criaPessoa('João', 'Olveira', 35); // Argumentos;
const pessoa4 = criaPessoa('Jean', 'Moreira', 32); // Argumentos;
const pessoa5 = criaPessoa('Junior', 'Otávio', 29); // Argumentos;

console.log(pessoa5.nome, pessoa2.nome, pessoa3.nome);

