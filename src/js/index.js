function colocarNome() {

    var nomeDigitado = prompt('Digite seu nome:');

    var nomeColocado = document.getElementById("nome");

    nomeColocado.textContent = nomeDigitado;

    nomeColocado.style.fontSize = "70px";

    nomeColocado.style.color = "#0000CD";
}


colocarNome()