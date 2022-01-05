const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
console.log(product.name);
console.log(product.price);
console.log(product.seller);

console.log('//---------------');
// desestruturando objetos
const { name } = product;
console.log(name); // Smart TV Crystal UHD

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(name, seller); // Casas de Minas

console.log('//---------------');
// objetos dentro de objetos
// definindo o objeto
// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

console.log('//---------------');
// desestrutura o objeto e usa o spread_operator
const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};
const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']
const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log('//---------------');
// renomear propriedades
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const { a: name, b: classAssigned, c: subject } = student;
console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
console.log(student.a);
console.log(student.name); // não imprime, pois a alteração não ocorreu no objeto

console.log('//---------------');
// passar os valores de um objeto como parâmetros para uma função
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

console.log('//---------------');
// exercício 1 - criar um terceiro objeto
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};
const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};
const employeeDate = { ...user, ...jobInfos};
console.log(employeeDate);

// exercício 2 - imprima a frase "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
const phrase = ({name, age, nationality, profession, squad, squadInitials}) => {
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
}
phrase(employeeDate);