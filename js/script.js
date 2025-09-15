const resultado = document.getElementById('iResultado');
const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();

    const altura = parseFloat(document.getElementById('iAltura').value);
    const peso = parseFloat(document.getElementById('iPeso').value);

    if (!altura || !peso) {
        alert("Insira todos os dados!!");
    } else if (altura > 2.50 || altura < 1.00 || peso > 300 || peso < 30) {
        alert("Insira uma altura e peso válidos!");
    } else {
        let imc = peso / (altura * altura);

        let classificacao = "";
        let imgSrc = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
            imgSrc = "../img/magra.gif";
        } else if (imc < 24.9) {
            classificacao = "Peso normal";
            imgSrc = "../img/normal.gif";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
            imgSrc = "../img/gordo.gif";
        } else if (imc < 34.9) {
            classificacao = "Obesidade grau I";
            imgSrc = "../img/gordo.gif";
        } else if (imc < 39.9) {
            classificacao = "Obesidade grau II";
            imgSrc = "../img/gordo.gif";
        } else {
            classificacao = "Obesidade grau III (mórbida)";
            imgSrc = "../img/gordo.gif";
        }

        // limpa antes de mostrar novo resultado
        resultado.innerHTML = "";

        // cria o texto
        const texto = document.createElement('p');
        texto.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
        resultado.appendChild(texto);

        // cria a imagem
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = classificacao;
        img.style.maxWidth = "200px"; // só pra não ficar gigante
        resultado.appendChild(img);
    }
});
