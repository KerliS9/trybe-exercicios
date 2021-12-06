// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

	//quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, a propriedade do objeto destino sempre utilizará o último valor disponível.
const person1 = {
	name: 'Roberto',
};
const lastName = {
	lastName: 'Silva',
};
const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person1.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }


//passar como primeiro parâmetro do Object.assign um objeto vazio {} e faz com que a armazenagem do seu retorno ocorra em uma nova variável.
const person2 = {
  name:'Roberto',
};
const lastName = {
  lastName: 'Silva',
};
const newPerson = Object.assign({},person2,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person2);

//tipos primitivos não se alteram após a cópia ter sido realizada;
// tipos não primitivos (array e objetos) podem ser alterados por meio do .push