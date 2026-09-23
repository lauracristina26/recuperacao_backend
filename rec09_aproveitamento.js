const entrada = require('readline-sync');

function calcularAproveitamento(util, total) {
  return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
  if (percentual >= 90) {
    return "EXCENLENTE";
  } else if (percentual >= 75 && percentual <=89.99) {
    return "ADEQUADO";
  } else {
    return "REVISAR PROCESSO";
  }
}

const qtdTotal = entrada.questionFloat("Digite a quantidade total: ");
const qtdUtil = entrada.questionFloat ("Digite a quantidade util: ");

const aproveitamento = calcularAproveitamento(qtdUtil, qtdTotal);
const classificacao = classificarAproveitamento(aproveitamento);

console.log(`\n=== RELATORIO DE APROVEITAMENTO ===`);
console.log(`Total: ${qtdTotal}`);
console.log(`Quantidade Util: ${qtdUtil}`);
console.log(`Aproveitamento: ${aproveitamento.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);