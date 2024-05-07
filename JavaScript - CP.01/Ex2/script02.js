function verificarVotacao(idade) {
    if (idade >= 18 && idade <= 70) {
        return "Voto obrigatório.";
    } else if ((idade === 16 || idade === 17) || idade > 70) {
        return "Voto facultativo.";
    } else {
        return "Você não pode votar.";
    }
}

// Exemplo de uso:
console.log(verificarVotacao(20)); // Saída: Voto obrigatório.
console.log(verificarVotacao(16)); // Saída: Voto facultativo.
console.log(verificarVotacao(72)); // Saída: Voto facultativo.
console.log(verificarVotacao(15)); // Saída: Você não pode votar.