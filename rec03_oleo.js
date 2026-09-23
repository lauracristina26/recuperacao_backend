const entrada = require('readline-sync');

const nivelOleo = entrada.questionInt("Digite o nivel de oleo: ")

let situacao

if (nivelOleo >=40 && nivelOleo <=80) {
  situacao = "NIVEL NORMAL";
} else {
  situacao = "INSPECAO NECESSARIA";
};

console.log(`Nivel de Oleo: ${nivelOleo} %`);
console.log(`Situacao: ${situacao}`);