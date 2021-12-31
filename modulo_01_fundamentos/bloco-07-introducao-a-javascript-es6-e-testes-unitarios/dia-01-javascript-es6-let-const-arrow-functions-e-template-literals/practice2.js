// parte 2
// exercício 1 - Crie uma função que receba um número e retorne seu fatorial.
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5)); // função recursiva, que já  a si mesma
/* // A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`; */

const fatorial = number => {
  let result = 1; // por ser multiplicação precisa iniciar em 1
  for (let index = 1; index <= number; index += 1) {
      result *= index;
  }
  return result;
}
console.log(fatorial(5))

// exercício 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
function longWord(phrase) {
  let word = phrase.split(' ');
  let result = '';
  for(let i = 0; i < word.length; i += 1) {
    let wordNow = word[i];
    if(wordNow.length > result.length){
      result = word[i];
    }
  }
  return result;
}
console.log(longWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';
  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }
  return result;
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

const longesWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longesWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// exercício 3 - Crie uma página que contenha:
// practice2.html
// exercício 4 - Crie um código JavaScript com a seguinte especificação:
// 4.1 - Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
function replace(param) {
  return `Tryber ${param} aqui`;
}
console.log(replace('está'));