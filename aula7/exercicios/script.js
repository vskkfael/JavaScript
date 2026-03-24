// Substitua os valores importantes dessa frase com variáções;

// Enunciado:
// 'Rafael Dalmarco' tem '19' anos, pesa '90' kg tem '1.80' de altura e seu IMC é de '25.92';

// Valores foram feitos com a variáção 'const', pois são valores ABSOLUTOS;
const nome = 'Rafael'; // VALORES SEMPRE DENTRO DE STRINGS''
const sobrenome = 'Dalmarco';

// Valores foram feitos com a variáção 'let', pois são valores NÃO ABSOLUTOS, ou seja, podem houver mudanças... 
let idade = 19;
let peso = 102;
let altura = 1.65;

let imc; // peso / (altura * altura);
imc = peso / (altura * altura);
indiceMassaCorporal = imc.toFixed(2); // toFixed() // Quantas casas vai aparecer apartir da vírgula;

    // console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);

// Enunciado:
// Rafael Dalmarco nasceu no ano de 2006. Qual é a idade dele atualmente?;

let anoPessoa;
anoPessoa = 1982

function idadeAtual(){
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear(); // Vai me dar o ano! // 2026
    let descobrirIdade = anoAtual - anoPessoa;
        console.log(descobrirIdade);
}

idadeAtual()


