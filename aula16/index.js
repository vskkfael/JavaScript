// Arrays // LISTAS
// Strings indexados // 123456789...

const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Otávio'); // Adiciona valores ao meu Array
// variável.lenght // ver o valor total do meu Array
// variável.indexOf(); // posição do elemento na lista
// variável.push(); // colocar um elemento na lista
// variável.join(); // colocar elementos entre as palavras na lista
// variável.shift(); // remover o primeiro elemento da lista
// variável.unshift(); // Adicionar no primeiro indice do meu array
// variável.pop(); // remover o ultimo elemento da lista
// variável[valor do elemento na lista (1,2,3...)] // substituir o valor do elemento da lista

console.log(alunos.slice(0, -2)); // Fatiando o ARRAY

console.log(alunos[50]) // Retorna undefield // Acessa o index da minha Array

// Acrescenta elementos no Array
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Ana';
console.log(alunos.length);

// Substituí o valor indexada no meu Array
alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
// console.log(alunos);

//console.log(alunos);
//console.log(alunos[0]);
//console.log(alunos[2]);