
let btnEnviar = document.querySelector('#btnEnviar');

let form = document.querySelector('form')

function conversor_celsius(f){
    return (f-32) / 1.8;
};

function conversor_fahrenheit(c) {
    return (1.8*c) + 32;
};

const resultado = document.createElement('p');
form.appendChild(resultado);

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    let conversor = form.elements.conversor.value;
    let valor = Number(form.elements.valor.value);

    if (conversor === "Celsius") {
        valor_convertido = conversor_celsius(valor);
        console.log(`Valor convertido: °C ${valor_convertido.toFixed(2)}`);
    } else if (conversor === "Fahrenheit") {
        valor_convertido = conversor_fahrenheit(valor);
        console.log(`Valor convertido: °F ${valor_convertido.toFixed(2)}`)
    } else {
        console.log("Nenhuma opção selecionada")
    }

    let unidade;

    if (conversor === "Celsius") {
        unidade = "°C";
    } else if (conversor = "Fahrenheit") {
        unidade = "°F"
    };

    // let nome_converter;

    // if (conversor === "Celsius") {
    //     nome_converter = "Fahrenheit";
    // } else if (conversor = "Fahrenheit") {
    //     nome_converter = "Celsius"
    // };

    resultado.style.color = 'black';
    resultado.textContent = `Valor convertido: ${unidade} ${valor_convertido.toFixed(2)}`;
});