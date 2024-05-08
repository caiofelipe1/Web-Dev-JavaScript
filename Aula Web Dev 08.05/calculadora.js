function calculadora() {
    let n1 = Number(prompt("Primeiro valor: "));
    let n2 = Number(prompt("Primeiro valor: "));
    let op = prompt(`Valores informados: ${n1} e ${n2}. \n O que vamos fazer? \n[+]
Somar \n[-] Subtrair \n[*] Multiplicar \n [/] Dividir`)
    }

    let saida = document.getElementById('saida');
    let funcao = document.getElementById('funcaoutilizada');

    saida.innerHTML = null;
    funcao.innerHTML = null;

    switch(op) {
// A estrutura switch basicamente permite você testar valores dentro de uma variável 
// ou expressão. Ela é compatível apenas com números inteiros e strings
        case '+':
            let n3 = adicao(n1,n2);
            saida.innerHTML += `<p>${n1} + ${n2} = ${n3}</p>`;
            funcao.innerHTML += `Funcao adicao(n1,n2) com return n1 + n2`;
            break; // O break é obrigatório em cada case. Se não for colocado,
            //acontecerá a execução de vários comandos indesejados de outros cases
        case '-':
            saida.innerHTML += `<p>${n1} - ${n2} = ${subtracao(n1, n2)}</p>`;
            funcao.innerHTML += `Funcao subtracao(n1,n2) com return n1 - n2`;
            break;
        case '*':
            saida.innerHTML += `<p>${n1} x ${n2} = ${multiplicacao(n1, n2)}</p>`;
            funcao.innerHTML += `Funcao multiplicacao(n1,n2) com return n1 * n2`;
            break;
        case '/':
            saida.innerHTML += `<p>${n1} + ${n2} = ${divisao(n1, n2)}</p>`;
            funcao.innerHTML += `Funcao divisao(n1,n2) com return n1 / n2`;
            break;
    }