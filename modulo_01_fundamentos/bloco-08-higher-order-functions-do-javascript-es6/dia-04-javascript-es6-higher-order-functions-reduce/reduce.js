const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// Com .reduce 
const numbers2 = [32, 15, 3, 2, -5, 56, 10];
const sumNumbers2 = numbers2.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers2); // 113

// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers3 = numbers2.reduce(getSum);
console.log(sumNumbers3); // 113

// ---------------

const collection = [1, 2, 3, 4, 5];
const getSum2 = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10 - mostra cada soma realizada no acumulador, sem somar o último index do array
  return accumulator + number;
};
const sumNumbers4 = collection.reduce(getSum2);
console.log(sumNumbers4); // 15

// pode passar um segundo parâmetro para o reduce, logo após a função.
const numbers = [32, 15, 3, 2, -5, 56, 10];
const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


const numbers = [32, 15, 3, 2, -5, 56, 10];
const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 1); // Parâmetro adicionado ao reduce: o "1" - todos os números do novo array são acrescidos em 1
console.log(sumNumbers); // 113
// Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.

// ---------------
const numbers = [50, 85, -30, 3, 15];
let biggerNumber = 0;
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] > biggerNumber) {
    biggerNumber = numbers[i];
  }
}
console.log(biggerNumber);

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// ---------------
// faça uma função que some todos os números pares do array: filter e reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const even = (number) => number % 2 === 0
const sum = (acc, number) => acc + number;
const result = (arr) => arr.filter(even).reduce(sum);
console.log(result(numbers)); 

// com reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);
const sumNumbers = (array) => array.reduce(sumPair, 0);
console.log(sumNumbers(numbers)); // 152

// ---------------
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];
// qual matéria o estudante foi melhor
const bestClass = (acc, materia) => {
  if(acc.nota > materia.nota)
  return acc;
  return materia;
}

const betterMat = (students) => students.map((student) => ({
  name: student.name,
  materia: student.materias.reduce(bestClass).name
}));
console.log(betterMat(estudantes));

