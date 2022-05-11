// exercício 1
function threeParams(a, b, c) {
  const promise = new Promise((resolve, reject) =>{
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error('Informe apenas números'));
    const result = (a + b) * c;
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  })
  return promise;
}

/* threeParams(2, 110, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
 */

// exercício 2
function randomNumbers() {
  return Math.floor(Math.random() * 100 + 1);
}
const paramsA = randomNumbers();
// console.log('paramsA', paramsA);
const paramsB = randomNumbers();
// console.log('paramsB', paramsB);
const paramsC = randomNumbers();
// console.log('paramsC', paramsC);

threeParams(paramsA, paramsB, paramsC)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

  // exercício 3  
  function doMath(a, b, c) {
    const promise = new Promise((resolve, reject) =>{
      if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(new Error('Informe apenas números'));
      const result = (a + b) * c;
      if (result < 50) reject(new Error('Valor muito baixo'));
      resolve(result);
    })
    return promise;
  }

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  console.log(randomNumbers);
  return randomNumbers;
}
callDoMath();

doMath(...randomNumbers) // não está espalhando estes números
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));