let numberString = prompt('Digite um número');
let numero = Number(numberString);
let numeroTitulo = document.getElementById('numero-titulo')

numeroTitulo.innerHTML = `${numero}`;
document.body.innerHTML += `<p> Raiz Quadrada: ${numero ** (1/2)} <br /> </p>`
document.body.innerHTML += `<p> 55 é inteiro: ${Number.isInteger(numero)} <br /> </p>`
document.body.innerHTML += `<p> é NaN: ${Number.isNaN(numero)} <br /> </p>`
document.body.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)} <br /> </p>`
document.body.innerHTML += `<p> Arrendondado para cima: ${Math.ceil(numero)} <br /> </p>`
document.body.innerHTML += `<p> Com duas casas decimais ${numero.toFixed(2)} <br /> </p>`

if(Number.isNaN(numero) === true) {
    alert('Houve algum erro! Estamos corrigindo o quanto antes!');
} 



