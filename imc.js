

const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value); 
    const result = document.getElementById('result');

    if (nome !== '' && altura !== '' && peso !== '') {

        const imc = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc < 34.9) {
            classificacao = "Obesidade grau 1";
        } else if (imc < 39.9) {
            classificacao = "Obesidade grau 2";
        } else {
            classificacao = "Obesidade grau 3";
        }
        result.textContent = `${nome} seu IMC é de ${imc} (${classificacao}).`;
    } else {
        result.textContent = "Preencha todos os campos corretamente.";
    }
}


calcular.addEventListener('click', imc);
