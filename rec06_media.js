const entrada = require('readline-sync');

let total = 0;

for (let tempos = 1; tempos <=6; tempos++) {
  const valor = entrada.questionInt(`Digite o valor ${tempos}: `);
  total += valor;
}

const media = total /6;

console.log(`Soma dos tempos: ${total}`);
console.log(`Média: ${media}`);