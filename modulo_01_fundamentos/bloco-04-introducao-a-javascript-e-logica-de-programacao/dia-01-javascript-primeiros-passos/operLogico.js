//operador &&, lê-se and
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo); // retorna false pois uma das condições é false;

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'salsicha') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
} // retorna a segunda mensagem, pois a comida que veio foi salsicha.

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
//enquanto for true para as constantes, da esquerda para a direira a resposta será true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// o resultado somente será true se todas as condições com && serem true.

const currentHour = 2;
let message = '';

if (currentHour >= 22) {
	console.log ('Não deveríamos comer nada, é hora de dormir');
} else if (currentHour >= 18 && currentHour < 22) {
	console.log ('Rango da noite, vamos jantar :D');
} else if (currentHour >= 14 && currentHour < 18) {
	console.log ('Vamos fazer um bolo pro café da tarde?');
} else if (currentHour >= 11 && currentHour < 14) {
	console.log ('Hora do almoço!!!');
} else if (currentHour >= 4 && currentHour < 11) {
	console.log ('Hmmm, cheiro de café recém passado.')
} else {
	console.log (message);
} 
//se a hora for menor que 4, a mensagem fica vazia, pois não a mensagem prevista para imprimir.

//operador ||, lê-se or
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
} // o pipe duplo indica OU, sendo necessário somente uma das condiçõe ser verdadeiras.

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// resultado false somente ocorrerá se todas as condições forem falsas.

let weekDay = 'sábado'

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
	console.log ('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
	console.log ('FINALMENTE, descanso merecido UwU.')
}

//operador !, lê-se not. Inverte o valor boleano.
console.log((2 + 2) === 4); // resultado true

console.log(!(2 + 2) === 4); // resultado false

const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false - strings

console.log(!42); // false - números
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true - valores nulos

console.log(!undefined); // true - valores indefinidos