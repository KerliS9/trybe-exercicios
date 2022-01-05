// usa quando chama a função - separa
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

console.log('//---------------')
// com spread operator
// const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

console.log('//---------------')
// combinar arrays
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

console.log('//---------------');
// na função
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];
console.log(imc(60, 1.7));
console.log(imc(...patientInfo)); // 20.76

console.log('//---------------');
// usar em funções prontas
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

console.log('//---------------');
// agrupar objetos
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};
const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};
const customer = { ...people, ...about };
console.log(customer); 
/* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

console.log('//---------------');
// exercício 1 
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'melancia', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'canela'];

const fruitSalad = (fruit, additional) => {
  const fruits = [...fruit, ...additional];
  return fruits;
};
console.log(fruitSalad(specialFruit, additionalItens));