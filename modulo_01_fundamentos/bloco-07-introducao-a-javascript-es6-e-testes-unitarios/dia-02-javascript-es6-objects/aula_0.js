const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);
// objeto.nomeDaPropriedade 
customer1.lastName = 'Faria'; // adiciona uma chave e seu valor no objeto.
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};
// objeto[variavelQueContemONomeDaPropriedade] .
console.log(customer2);
customer2['lastName'] = 'Silva'; // outra forma de adicionar chave e valor no objeto.
console.log(customer2);
// adicionar algumas novas propriedades ao objeto, como a naturalidade, a data de nascimento e o estado civil.
customer2['naturalidade'] = 'Brasileira';
customer2['estadoCivil'] = 'Casada';
customer2['dataNasc'] = '09/12/1987';
console.log('primeiro exercicio', customer2);

// diferentes formas de associar chaves e valores a um objeto.
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
let newKey = 'lastName'; // nova chave criada
const lastName = 'Ferreira'; // atribuído valor a nova chave
customer[newKey] = lastName; // inserido a nova chave no objeto
newKey = 'fullName'; // outra chave criada

const fullName = `${customer.firstName} ${customer.lastName}`; //agrupada pelo template literals
customer[newKey] = fullName; // chave atribuída ao objeto
console.log(customer);

// crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

let customer = { // erro undefined na função
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

function createObj (object, key, value) { 
	object['key'] = 'value';
	console.log(value);
}
console.log(createObj('costumer', 'birthday', '20/05/1990'));

