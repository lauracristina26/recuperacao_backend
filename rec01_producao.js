const entrada = require('readline-sync');

const qtdCaixas = entrada.questionInt("Digite a quantidade de caixas produzidas por hora: ");
const horasTrabalhadas = entrada.questionFloat("Digite as horas trabalhados no dia: ");

const total = qtdCaixas * horasTrabalhadas;

console.log(`\n=== Relatorio de Producao ===`);
console.log(`Caixas produzidas por hora: ${qtdCaixas}`);
console.log(`Horas Trabalhadas: ${horasTrabalhadas}`);
console.log(`Total de caixas produzidas: ${total}`);