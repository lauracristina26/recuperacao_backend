const entrada = require('readline-sync');
const orcamento = require('./funcoesOrcamento');

const nome = entrada.question('Digite o nome do Cliente: ');
const valorMateriais = entrada.questionFloat('Digite o valor dos materiais: ');
const horas = entrada.questionFloat('Digite as horas de servico: ');

const maoDeObra = orcamento.calcularMaoDeObra(horas);
const total = orcamento.calcularTotal(valorMateriais, horas);
const desconto = orcamento.verificarDesconto(total);

console.log(`=== RELATORIO DE ORCAMENTO ===`);
console.log(`Cliente: ${nome}`);
console.log(`Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mao de Obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situacao do Desconto: ${desconto}`);