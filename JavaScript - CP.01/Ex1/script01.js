function verificarNumero() {
    let num = parseFloat(prompt("Digite um número: "));
    let res;

    if (num > 0) {
        res = "O numero é positivo! ";
    }
    else if (num < 0) {
        res = "O número é negativo! ";
    }
    else {
        res = "O número é zero! ";
    }

document.getElementById("res").innerHTML = "<p>Resultado: " + res + "</p>";
}