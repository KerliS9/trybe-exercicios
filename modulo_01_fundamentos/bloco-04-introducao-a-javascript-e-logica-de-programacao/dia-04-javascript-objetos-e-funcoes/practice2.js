// exercício 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for

function isPalindrome(string) {
  let string2 = string.split('').reverse().join('');
  console.log(string2);
  if(string === string2) {
    return 'True';
  } else {
    return 'False';
  }
}
console.log(isPalindrome('arara'));

// exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function higherIndex (array) {
  let higher = 0;
  for(let index in array) {
    if(array[higher] < array[index]) {
      higher = index;
    }
  }
  return higher;
}
console.log(higherIndex([2, 3, 6, 7, 10, 1]));

// exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function lowerIndex(numbers) {
  let number = 0;
  for(let index in numbers) {
    if (numbers[number] > numbers[index]) {
      number = index;
    }
  }
  return number;
}
console.log(lowerIndex([2, 4, 6, 7, 10, 0, -3]));

// exercício 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function biggerWord(string) {
  let word = string[0];
  for(let index in string) {
    if(word.length < string[index].length) {
      word = string[index];
    }
  }
  return word;
}
console.log(biggerWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// exercício 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete
function repeat(number) {
  let count = 0;
  for(let i = 0; i < number.length; i += 1) {
    count = 0;
    for(let j = 0; j < number.length; j += 1) {
      if(number[i] === number[j]) {
        count ++;
      }
    }
  }
  return count;
}
console.log(repeat([2, 3, 2, 5, 8, 2, 3]));

function repeat(number) {
  let count = 0;
  for(let index in number) {
    count = 0;
    for(let i in number) {
      if(number[i] === number[index]) {
        count ++;
      }
    }
  }
  return count;
}
console.log(repeat([2, 3, 2, 5, 8, 2, 3]));

// exercício 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function sum(array) {
  let total = 0;
  for(let index in array) {
    total = total + array[index];
  }
  return total;
}
console.log(sum([1, 2, 3, 4, 5]));

// exercício 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function compare(string, string2) {
  string = string.split('');
  string2 = string2.split('');
  for(let index = 0; index < string2.length; index += 1) {
    if(string[string.length - string2.length + index] !== string2[index]) {
      return false;
    }
  }
  return true;
}
console.log(compare('trybe', 'be'));
