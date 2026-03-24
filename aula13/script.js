//               01234567...   
let umaString = "o rato roeu a roupa do rei de roma;";

console.log(umaString[4]); // Procurar um indice da string.
console.log(umaString.charAt(6)); // Procurar um indice da string.

// Concatenar valores na STRING'';
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia. ');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('o')) // Mostra o indice da minha palavra no começo;
console.log(umaString.lastIndexOf('o')) // Mostra o indice da minha palavra do final pro começo;

// Expressão regular
console.log(umaString.match(/[a-z]/g)) // Retorna todas as letras de a-z do texto indicado;
console.log(umaString.search(/[a-z]/g)); // Vai retornar apenas o indice da letra que eu pedi;
console.log(umaString.replace('o', 'Outra')); // Substituí a primeira palavra pela segunda palavra;
console.log(umaString.replace(/r/g, '#')); // essa tag '/letra/g' ela diz que vai trocar todas as letras que coloquei la, pelo o que eu colocar ao lado dela como represento ali, '#';

console.log(umaString.length); // Conta as caracter da minha variáção e retorna em numero.
console.log(umaString.slice(2, 6)); // Quero pegar de um indice ao outro // Ex: rato // variáção.slice(2, 6);
console.log(umaString.substring(umaString.length -5, umaString.length -1)); // Mesma função do .slice;
console.log(umaString.split(' ', 2)) // Se eu quiser dividir as strings com algo, eu escolho dentre a string vazia ou com alguma palavra ou letra;

console.log(umaString.toUpperCase()) // Formata as letras digitadas em LETRAS MAIÚSCULAS;
console.log(umaString.toLowerCase()) // Formata as letras digitadas em letras minúsculas;