const entrada = require('readline-sync');

const ferramentas = [];

for(let i = 0; i < 4; i++) {
  const ferramenta = {
    nome: entrada.question(`Digite o nome da ferramenta: `),
    quantidade: entrada.questionInt(`Digite a quantidade disponivel: `),
    qtdMinima: entrada.questionInt(`Digite a quantidade minima: `)
  }
  ferramentas.push(ferramenta);
};
console.log("\n=== RELATORIO DE ALMOXARIFADO ===");

for(let i = 0; i <ferramentas.length; i++ ) {
  const ferramenta = ferramentas[i];

  let situacao;
  if (ferramenta.quantidade < ferramenta.qtdMinima) {
    situacao = "REPOR";
  } else {
    situacao = "ESTOQUE SUFICIENTE";
  };

  console.log(`Nome da Ferramenta: ${ferramenta.nome}`);
  console.log(`Quantidade Disponivel: ${ferramenta.quantidade}`);
  console.log(`Quantidade Minima: ${ferramenta.qtdMinima}`);
  console.log(`Situacao: ${situacao}`);
  console.log("-".repeat(20));
};