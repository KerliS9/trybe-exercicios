const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

console.log('//---------------');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('//---------------');
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

console.log('//---------------');
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort((a, b) => b - a);
console.log(points2); // [ 100, 40, 25, 10, 5, 1 ]

console.log('//---------------');
// exercício 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
 people.sort((a, b) => a.age - b.age);
console.log(people);

console.log('//---------------');
// exercício 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente 
const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
 people2.sort((a, b) => b.age - a.age);
console.log(people2);