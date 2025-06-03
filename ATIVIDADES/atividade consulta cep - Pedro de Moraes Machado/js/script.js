/*
    Faça um programa que consulta um cep obtido em um input e apresenta na página:
    * bairro
    * estado
    * UF
    * Localidade
    * Logradouro
*/


let btnConsulta = document.querySelector('#btnConsulta');

let form = document.querySelector('form');

const consomeApi = async(cep)=> {
    try {
    let resultado = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return resultado.data;
    } catch (erro) {
        console.error('Erro ao consultar o CEP:', erro);
        return null;
    }
};

consomeApi("12312410");

const resultado = document.createElement('p');
form.appendChild(resultado);

btnConsulta.addEventListener('click', async(e)=> {
    e.preventDefault();
    let cep = form.elements.cep.value;

    const dados = await consomeApi(cep);

    if (dados && !dados.erro){
        resultado.style.color = 'black';
        resultado.innerHTML = `
            <strong>CEP:</strong> ${cep}<br>
            <strong>Logradouro:</strong> ${dados.logradouro}<br>
            <strong>Estado:</strong> ${dados.estado}<br>
            <strong>UF:</strong> ${dados.uf}<br>
            <strong>Localidade:</strong> ${dados.localidade}<br>
            <strong>Bairro:</strong> ${dados.bairro}<br>
        `;
    } else {
        resultado.style.color = 'red';
        resultado.textContent = 'CEP não encontrado ou inválido.';
    };
});