function dividirNumeros(num1, num2) {
    if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");
    resultado = num1 / num2;
    // console.log('primeira conta', resultado);
    return resultado;
  }
  
  try {
    const resultado = dividirNumeros(2, 0);
    console.log(`resultado: ${resultado}`);
  } catch (e) {
    console.log('erro', e.message);
  }
  
  dividirNumeros(2, 0);