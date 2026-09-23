const entrada = require('readline-sync');

const produtosPorCiclo = entrada.questionInt("Digite quantos produtos foram produzidos por ciclo: ");

let acumulado = 0;

for (let ciclo = 1; ciclo <= 12; ciclo ++) {
  acumulado += produtosPorCiclo;
  console.log(`Ciclo ${ciclo} - ${acumulado}`);
};