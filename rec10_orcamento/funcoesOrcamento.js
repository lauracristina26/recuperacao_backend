function calcularMaoDeObra(horas) {
  const valorHoras = 95;
  return horas * valorHoras;
}

function calcularTotal(valorMaterias, horas) {
  return valorMateriais + calcularMaoDeObra(horas);
}

function verificarDeconto(total) {
  if (total >=1000) {
    return 'DESCONTO DE 10%';
  }
  return 'SEM DESCONTO';
}

module.exports = {
  calcularMaoDeObra,
  calcularTotal,
  verificarDeconto
};