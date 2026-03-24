// alert() é um atalho para o window.alert(); // Faz um alerta na window;
// window.confirm // Gera uma janela com Boolean // True (OK) | false (Cancel);
// prompt() // Gera uma caixa de mensagem na window para respostas;
// confirm(); // Gera uma janela para dar 'OK' ou 'Cancel' em opção do usuário;

// alert('Com a nossa mensagem'); // Faz um alerta na tela!
// const confirma = confirm('Realmente deseja apagar?'); // Boolean = True (Verdadeiro) ou False (Falso);
// let num1 = prompt('Digite um número');

// Função desorganizada e usada com Number(correto!);
function somaStrings(){
const num1 = prompt('Digite um número');
const somaNum1 = Number(num1);

const num2 = prompt('Digite outro número!')
const somaNum2 = Number(num2);
console.log(somaNum1 + somaNum2);

}

// somaStrings()


// Função desorganizada!
function ForadeFunção() {
const num1 = prompt('Digite um número!')
const somaNum1 = parseInt(num1) // Number(num1)
;
const num2 = prompt('Digite seu segundo número')
const somaNum2 = parseInt(num2); //Number(num2)

const resultado = somaNum1 + somaNum2;
alert(`Seus números são '${num1}' e '${num2}', a soma dentre eles é igual à '${resultado}'.`)

}

// ForadeFunção()

// Função Organizada, usada Number(Identificar como Number;) ou parseInt (Números inteiros;) ou parseFloat(Números com pontos e virgulas;).
function corretoAprender() {
const num1 = prompt('Digite um número'); 
const num2 = prompt('Digite outro número');

const somaNum1 = Number(num1);
const somaNum2 = Number(num2);

const resultado = somaNum1 + somaNum2;
alert(`Os números escolhidos foram '${num1}' e '${num2}', somando eles o resultado é '${resultado}'.`);

}

// corretoAprender()