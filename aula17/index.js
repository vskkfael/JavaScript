// Dentro da função se chama parametro para enviar dados;
// Posso deixar o dado do parâmetro quando deixo minha função fora do meu escopo;
// Funções sempre tem que ser declarada fora do escopo para funcionar;

// Tudo que estiver dentro do escopo da função está protegido e não consigo acessar;
function saudacao(nome) {
    return `Bom dia ${nome}!`
};

// Tudo que estiver dentro do escopo da função está protegido e não consigo acessar;
function soma(x, y) {
    const resultado = x + y; // Está linha eu deixo o valor aritmético que eu quero que retorne;
    return resultado // A execução vai ser pausada apartir que encontrar o 'return';
    console.log('Olá Mundo') // Não vai ser executado pois está em baixo do 'return';
}

// Dentro do parâmetro dei meu valores que quero que retorne;
// console.log(soma(5, 2)); // Saída: 7 
// console.log(soma(7, 10)); // Saída: 17 
// console.log(soma(34, 56)); // Saída: 90

// soma(2, 2)

// const variavel = saudacao('Luiz'); // Vai ser executada perfeitamente;
// console.log(variavel); // Se caso executada, a saída vai ser undefined;

// saudacao('Luiz');
// saudacao('Maria');
// saudacao('Felipé');

const raiz = (n) => n ** 0.5 // Função Arrow Function // Função Anônima
    // Posso eliminar meu return;
; // Ponto e vírgula é obrigatória;

// no meu parâmentro deve conter o número que eu quero que retorne minha função;
console.log(raiz(9)); // Saída: 3
console.log(raiz(15)); // Saída: 3.87...
console.log(raiz(24)); // Saída: 4.89...