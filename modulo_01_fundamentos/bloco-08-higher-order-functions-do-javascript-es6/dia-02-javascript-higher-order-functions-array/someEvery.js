// some
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

console.log('//---------------');
// every
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};
const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);
console.log(verifyGrades(grades));

console.log('//---------------');
// exercício 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  return arr.some((currName) => currName === name);
}
console.log('exercicio 1: ' + hasName(names, 'Ana'));

console.log('//---------------');
// exercicio 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, minimumAge) => {
  return arr.every((age) => age >= minimumAge);
  }

console.log('exercicio 2: ' + verifyAges(people, 18));