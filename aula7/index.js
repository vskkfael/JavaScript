// As variáveis precisam ter nomes significativos; // Ex: let 'n' = campoBasedeDados;
// Variáveis não podemos começar com números; // Ex: let 1nome = name;
// Variáveis não podem conter espaços por gerar erro no código // Ex: let nome cliente;
// Utilizamos "camelCase", ou seja, começamos com MINÚSCULO e apartir da segunda palavra começamos com MAIÚSCULO // Ex: let camelCase;
// "Case-sensitive" // Ou seja, letras maiusculas e minusculas fazem diferentes. // Ex: 'Nome' e 'nome' são diferentes os valores dela; // Ex: let nomeCliente = 'Rafael', let nomecliente = 'Dalmarco', são DIFERENTES;
// Não podemos modificar o valor de uma constante "CONST // o valor dela é absoluta;
// Não podemos declarar uma CONST sem declarar um valor à ela. // Ex: const name; (é errado!)
// Não UTILIZAR 'VAR', UTILIZAR 'LET'. (Para o valor da variável poder ser alterado);

// String "" = Texto | Number = Número;
 const nomeconst = 'Rafael';
// console.log(nomeconst);
// nome = 'Octavio'; // Não posso modificar!

 let nomelet = 'João';
// nome = 'Rafael'; // Se for a variável let é permitido modificar o valor!

// Operador aritmética
// + - * / // + = soma, - = subtração, * = multiplicação, / = divisão
const primeiroNumero = 5; // Number
const segundoNumero = 10; // Number
// const segundoNumero = '10'; // Está maneira é errada, pois o número está dentro de uma 'STRING';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof(resultado)); // 'typeof(*variáção*)' Saber o tipo da variável se é Number, String;
// console.log(typeof resultado); // Outra maneira de fazer sem os parênteses
// Em uma soma, meu Number estiver com String'', invés de somar e fazer a conta ele vai 'CONCATENAR';