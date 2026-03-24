let num1 = 9.49;
console.log(100 / 0); // Posso dividir por 0 APENAS EM JAVASCRIPT; // Saída: Infinity;
console.log(num1 ** (1/2)) // Para pegar raiz quadrado da minha variáção;
let num2 = Math.floor(num1); // Retorna o número arredondado pra baixo; (INTEIRO) // Saída: 9
let num3 = Math.ceil(num1); // Retorna o número arredondado pra cima; (INTEIRO) // Saída: 10
let num4 = Math.round(num1); // Retorna pro número mais próximo (INTEIRO); // Saída: 10

console.log(Math.max(1, 2, 3, 4, 5,-50, +1000, 543)); // Retorna o maior número da sequencia;
console.log(Math.min(1, 2, 3, 4, 5,-50, +1000, 543)) // Retorna o menor número da sequencia;
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Retorna números aleatórios;
// Math.round = Retorna números mais próximos inteiros;
// Math.ceil(variável) = Retorna o número arredondado pra cima; (INTEIRO);
// Math.floor(variável) = Retorna o número arredondado pra baixo; (INTEIRO);
// Math.random() = Retorna números aleatórios;
// Math.max() = Retorna o maior número de uma sequencia;
// Math.min() = Retorna o menor número de uma sequencia;
// Math.PI = Retorna o número de PI;
// Math.pow(2, 10) = Retorna a elevação de número // 2 ** 10; 
console.log(aleatorio)
