/**
    Dados Primitivos (Imutáveis) - String, number, boolean, undefined, null (bigint, symbol); - Valores copiados;
*/


// Valor primitivo;
//  let a = 'A';
//  let b = a; // Cópia;
//  console.log(a, b);

//  a = 'Outra coisa';
//  console.log(a, b)

/**
    Referência (mutável) - array, object, fucntion; - Passado por referência;
*/

// let a = [1, 2 ,3]
// let b = [...a]; // Spread
// console.log(a, b)

// a.push(4);
// console.log(a, b)

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;

a.nome = 'João';
console.log(a);
console.log(b);