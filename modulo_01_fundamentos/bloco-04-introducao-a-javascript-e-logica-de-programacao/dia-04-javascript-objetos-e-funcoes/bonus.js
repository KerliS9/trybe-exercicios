// exercício 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function toRoman(num) {
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for(let i = 0; i < decimals.length; i += 1) {
    if(num < 1) {
      return '';
    }
    if(num >= decimals[i]) {
      return roman[i] + toRoman(num - decimals[i]);
    }
  }
}
console.log(toRoman(39));

function toNumber(roman) {
  let objRomans = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  roman = roman.toLowerCase(); // torna os inputs em minúsculas
  let len = roman.length // verifica o comprimento da string
  let sum = 0;
  // console.log(sum);
  let current = 0;
  // console.log(current);
  for(let i = 1; i <= len; i += 1) {
    let next = objRomans[roman[len - i]]; // comprimento menos o índice para verificar o próximo número
    // console.log(next);
    if(current <= next) { // verifica a string de trás para frente
      sum += next;
    } else {
      sum -= next;
    }
    current = next;
  }
  return sum;
}
console.log(toNumber('ix'));

// exercício 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função
function arrayOfNumbers(vector) {
  let newArray = [];
  for(let index = 0; index < vector.length; index += 1) { // verifica os arrays em macros
    let number = vector[index];
    // console.log(number);
    for(let indexInt = 0; indexInt < number.length; indexInt += 1) { // verifica os arrays dentro de arrays
      let current = number[indexInt];
      if(current % 2 === 0) {
        newArray.push(current);
      }
    }
  }
  return newArray;
}
console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

// exercício 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função
function countFruits(basket) {
  basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  let result = {};
  for(let index = 0; index < basket.length; index += 1) {
    let fruit = basket[index]; // separa todas as frutas que estão na cesta
    if(!result[fruit]) 
    result[fruit] = 0 // para iniciar o contador em 0
    result[fruit] += 1; // adiciona conforme a repetição acontece
  }
  let count = []
  for(fruit in result) { // iterar o objeto para torná-lo um array e assim adicionar o texto
    let message = ` ${result[fruit]} ${fruit}s`;
    // console.log(message);
    count.push(message);
  };
  return `Sua cesta possui: ${count}.`;
}
console.log(countFruits());

// exercício 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}.`)

// exercício 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.
function people() {
  let result = [];
  for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    result.push(`${moradores.blocoUm[index].nome} ${moradores.blocoUm[index].sobrenome}`)
    // return (`São moradores do bloco 1 ${moradores.blocoUm[index].nome} ${moradores.blocoUm[index].sobrenome}`);
  }

  for (let index = 0; index < moradores.blocoDois.length; index++) {
    result.push(`${moradores.blocoDois[index].nome} ${moradores.blocoDois[index].sobrenome}`)
    // console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
  }
  return result;
}
console.log(people());