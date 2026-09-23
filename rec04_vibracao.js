const entrada = require('readline-sync'); 

const sensorVibracao = entrada.questionFloat("Digite o nivel de vibracao: ");

let situacao;

if (sensorVibracao <=3) {
  situacao = "ESTAVEL";
} else if (sensorVibracao <=6) {
  situacao = "ATENCAO";
} else {
  situacao = "CRITICA";
};

console.log(`Nivel de Vibracao Informado: ${sensorVibracao}`);
console.log(`Classificacao Avaliada: ${situacao}`);