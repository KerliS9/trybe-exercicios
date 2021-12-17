// exercício 1 - crie um algoritmo que retorne o fatorial de 10

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
let fatorial = 1;
for(let i = 10; i > 0; i -= 1) { // faz em ordem decrescente, pois é fatorial
  fatorial *= i;
  // console.log(fatorial);
}
console.log(fatorial);

// exercício 2 - desenvolva um algoritmo que é capaz de inverter uma palavra
let word = 'kerli';
let reverse = word.split('').reverse().join('');
console.log(reverse);

let word = 'tryber';
let newWord = '';
for(let i = word.length - 1; i >= 0; i -= 1) {
  newWord += word[i];
}
console.log(newWord);

// exercício 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0];
for(let i = 0; i < array.length; i += 1) {
  if(array[i].length > biggerWord.length) { // verifica o tamanho da palavra
    biggerWord = array[i]; // armazena a maior palavra
  }
  if(array[i].length < smallerWord.length) {
    smallerWord = array[i];
  }
}
console.log(biggerWord);
console.log(smallerWord);

// exercício 4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50
let impares = [];
for(let i = 0; i <= 50; i += 1) {
  if([i] % 2 !== 0) {
    impares.push(i);
    // console.log(primos);
  }
}
console.log(impares);

let primos = [];
for(let i = 0; i <= 50; i += 1) {
  let isPrime = true;
  for(let divide = 2; divide < i; divide += 1) {
    if(i % divide === 0) { // se a divisão der resultado 0 entre o índice do primeiro for com índice do segundo for, não é um número primo
      isPrime = false;
    }
  }
  if(isPrime) {
    primos.push(i);
  }
}
console.log(primos);

let biggestPrimeNumber = 0;
for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}
console.log(biggestPrimeNumber);