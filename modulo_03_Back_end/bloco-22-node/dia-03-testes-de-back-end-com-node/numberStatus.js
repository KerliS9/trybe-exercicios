function numberStatus(a) {
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