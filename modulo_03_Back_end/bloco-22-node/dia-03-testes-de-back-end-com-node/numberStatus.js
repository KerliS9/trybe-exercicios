function numberStatus(a) {
  if (typeof a !== 'number') return 'o valor deve ser um número'
  if (a > 0) return 'positivo';
  if (a < 0) return 'negativo';
  return 'neutro';
}


module.exports = numberStatus;
/* module.exports = (a) => {
  if (a > 0) return 'positivo';
  if (a < 0) return 'negativo';
  return 'neutro';
} */