/* Arrays armazenam uma lista de valores, primitivos ou não. Valores do tipo array são definidos
usando colchetes. 
Podemos adicionar elementos em um array existente com a função push,
e obter seu tamanho com a propriedade length.
*/
var frutas = ['Banana', 'Maca', 'Abacaxi', 'Pera']

console.log('---- FRUTAS----')
console.log('-- Quantidade de Elementos em Frutas: ' + frutas.length);
console.log('-- Incluindo a Melancia no Array');
frutas.push('Melancia');
console.log('-- Nova Quantidade de Elementos em Frutas' + frutas.length);
console.log('Itens armazenados em FRUTAS');
console.log(frutas);

var veiculos = ['Polo', 'Virtus', 'T-Cross', 'Nivus', 'Jetta']

console.log('---- VEICULOS ---- ');
console.log('Imprimindo um veiculo de cada vez');
console.log(veiculos[0]);
console.log(veiculos[1]);
console.log(veiculos[2]);
console.log(veiculos[3]);
console.log('---ELEMENTOS NO ARRAY DE VEICULOS');
console.log(veiculos.length);
console.log('-- Incluindo o novo veiculo no array');
veiculos.push('Golf');
console.log('--ELEMENTOS NO ARRAY DE VEICULOS--' + veiculos.length);

console.log('--COMANDO DE REPETICAO FOR --');

for (i = 0; i < veiculos.length; i++) {
    console.log(veiculos[i]);
}
