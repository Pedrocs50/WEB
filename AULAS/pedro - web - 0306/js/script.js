
let btnEnviar = document.querySelector('#btnEnviar');

let form = document.querySelector('form');

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    let nome = form.elements.nome.value;
    console.log(`Nome: ${nome}`);

    let idade = Number(form.elements.idade.value);
    console.log(`Idade: ${idade}`);

    console.log(e);
});