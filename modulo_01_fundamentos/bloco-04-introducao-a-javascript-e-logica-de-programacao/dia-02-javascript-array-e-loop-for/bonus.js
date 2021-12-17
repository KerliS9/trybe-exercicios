let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) { // compara cada índice de dois em dois
      let position = array[index]; // fixa o maior número
      array[index] = array[secondIndex]; // compara o número maior identificado na linha 4 com o próximo número no índice
      array[secondIndex] = position; // se maior passa a ser o número fixado no novo array
    }
  }
}

// exercício 1  - Ordene o array numbers em ordem crescente e imprima seus valores
console.log(array)

// exercício 2 - Ordene o array numbers em ordem decrescente e imprima seus valores
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] > array[secondIndex]) { // compara cada índice de dois em dois
      let position = array[index]; // fixa o menor número
      array[index] = array[secondIndex]; // compara o número menor identificado na linha 4 com o próximo número no índice
      array[secondIndex] = position; // se menor passa a ser o número fixado no novo array
    }
  } // a iteração ocorre na quantidade de vezes array.length - 1.
}
console.log(array)

// exercício 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push 
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
for (let index = 0; index < array.length; index += 1) {
  if (index + 1 < array.length) { // se index + 1 for menor que array.length
    newArray.push(array[index] * array[index + 1]); // a cada índice do array multiplica pelo próximo índice
  } else {
    newArray.push(array[index] * 2); // se não houver índice em sequencia multiplica por 2
  }
}
console.log(newArray);
