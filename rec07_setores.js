const entrada = require('readline-sync');

const setores = [];

for (let nomesSetores = 0; nomesSetores <6; nomesSetores++) {
  const nome = entrada.question(`Digite o nome do setor ${nomesSetores + 1}: `);
  setores.push(nome);
};

for (let i = 0; i <setores.length; i++) {
  console.log(`${i+1} - ${setores[i]}`);
};