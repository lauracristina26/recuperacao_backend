const entrada = require('readline-sync');

const nome = entrada.question("Digite o nome da peca: ");
const qtdComprada = entrada.questionInt("Digite a quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Digite o preco unitario: ");

const total = qtdComprada * precoUnitario;

console.log(`\n=== Relatorio de Compra ===`);
console.log(`Nome da peca: ${nome}`);
console.log(`Quantidade Comprada: ${qtdComprada}`);
console.log(`Preco Unitario: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);