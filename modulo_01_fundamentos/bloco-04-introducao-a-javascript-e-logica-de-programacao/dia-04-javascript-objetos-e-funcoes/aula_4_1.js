//exemplo 1
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]); //cars[index] retorna conteúdo da array
}

//exemplo 2
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]); //retorna index(propriedade) e car[index] o conteúdo da propriedade
}

//exemplo 3 - IN retorna o índice da array
let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position); //retorna as posições (índice) que tem dentro da array
};

//exemplo 4 - OF retorna os valores da array
let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};

//exercicio 1
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for(let key in names){
	console.log('Olá ' + names[key]);
}

//exercicio 2
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let key in car) {
	console.log(key, car[key]);
}