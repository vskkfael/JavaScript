// Variavel: let, const, var (var é antigo para ser usado, focar nos outros);
// Posso declarar uma variável mas não preciso declarar valor;
// O valor só deve ser declarado se for Objeto que indica com as chaves após a variável '{}'
// Não podemos criar variáveis com palavras reservadas; (let let, let console, let if, let else, const const...);
// As variáveis precisam ter nomes significativos; // Ex: let 'n' = campoBasedeDados;
// Variáveis não podemos começar com números; // Ex: let 1nome = name;
// Variáveis não podem conter espaços por gerar erro no código // Ex: let nome cliente;
// Utilizamos camelCase, ou seja, começamos com MINÚSCULO e apartir da segunda palavra começamos com MAIÚSCULO // Ex: let camelCase;
// Case-sensitive // Ou seja, letras maiusculas e minusculas fazem diferentes. // Ex: 'Nome' e 'nome' são diferentes os valores dela; // Ex: let nomeCliente = 'Rafael', let nomecliente = 'Dalmarco', são DIFERENTES;
// Não podemos redeclarar variáveis com let. // Ex: let nomeCliente = 'Rafael' | nomeCliente = 'Luiz';
// Não UTILIZAR 'VAR', UTILIZAR 'LET'. (Para o valor da variável poder ser alterado);


let name; // Apenas declaramos a variável, mas não demos características à ela;
let nome = 'João'; // String = texto // Declaramos e demos características à ela;
// nome = 'Rafael' // Mudamos o valor da variável

console.log( nome + ' nasceu em 1984.'); // String com aspas simples;
console.log(`Em 2000 ${nome} conheceu Maria.`); // String com craze, cifrão e chaves;
console.log( nome + " casou-se com Maria em 2012."); // String com aspas duplas;
console.log('Maria teve 1 filho com', nome, 'em 2015.'); // String com virgula;
console.log('O filho de ' + nome +  ' se chama Eduardo.'); // String com sinal de soma;

// Template STRINGS `${variável}`
//(`Em 2000 ${nome} conheceu Maria.`);