function submit() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.result')

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.name').value;
        const sobrenome = form.querySelector('.surname').value;
        const peso = form.querySelector('.weight').value;
        const altura = form.querySelector('.height').value;

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });
        
        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome} ${sobrenome} ${peso} ${altura} </p>`
        
    }

    form.addEventListener('submit', recebeEventoForm)
}
submit()