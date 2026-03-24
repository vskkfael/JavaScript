// ECMAScript 2015 (ES6) JavaSript

// nome = 'Junior'; // Isto é errado, não declarar uma variável;

/* NÃO usar var nos meus códigos! VAR é uma variação antiga!
var nome = 'Luiz';
var nome = 'Rodrigo';
*/


// ---------------------------------------------

// Dados Primitivos = String, number, undefined, null, boolean, symbol;
const nome = 'Luiz'; // String;
const nome1 = "Luiz"; // String;
const nome2 = `Luiz`; // String;
const num1 = 10; // Number;
const num2 = 10.52 // Number;
let nomeAluno; // undefined = não aponta para local nenhum na memória;
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória;
const aprovado = true; // Boolean = true; or false; (lógico); // Desvio condicional

console.log(typeof aprovado, aprovado); // Saber o meu dado 'String, Number, undefined, Boolean;

// = (Operador de Atribuição)

// Dados Primitivos
let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2