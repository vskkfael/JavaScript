// Mudando os valores do let de uma forma diferente;

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);