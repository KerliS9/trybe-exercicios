//exercicio 1
const a = 3;
const b = 2;

let somar = a + b;
let subtrair = b - a;
let multiplicar = a * b;
let dividir = 3 / 2;
let modular = (3 + 2)% 4;
console.log (somar);
console.log (subtrair);
console.log (multiplicar);
console.log (dividir);
console.log (modular);

//exercicio 2
const num1 = 3;
const num2 = 7;

if (num1 > num2) {
	console.log (num1)
} else if (num1 === num2) {
	console.log ('Constantes são iguais')
} else {
	console.log (num2)
}

//exercicio 3
const num1 = 31;
const num2 = 70;
const num3 = 10;

if (num1 >= num2 && num1 >= num3) {
	console.log (num1)
} else if (num2 >= num3 && num2 >= num1) {
	console.log (num2)
} else {
	console.log (num3)
}

//exercicio 4
const num1 = -1;

if (num1 > 0) {
	console.log ('Positive')
} else if (num1 < 0) {
	console.log ('Negative')
} else {
	console.log ('Zero')
}

//exercicio 5
const ang1 = -1;
const ang2 = 50;
const ang3 = 80;

if (ang1 + ang2 + ang3 === 180) {
	console.log (true);
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0){
	console.log ('Angulo negativo') 
} else {
	console.log (false)
} 

//exercicio 6
let pecaXadrez = 'Cavalo';

if (pecaXadrez.toLowerCase() == 'cavalo') {
	console.log ('Formato L');
} else if (pecaXadrez.toLowerCase() === 'bispo') {
	console.log ('Diagonal'); 
} else if (pecaXadrez.toLowerCase() === 'rainha') {
	console.log ('Uma casa por vez em todas as direções');
} else if (pecaXadrez.toLowerCase() === 'dama') {
	console.log ('Diagonais e retas');
} else if (pecaXadrez.toLowerCase() === 'torre') {
	console.log ('Linhas retas');
} else if (pecaXadrez.toLowerCase() === 'peao') {
	console.log ('Na primeira jogada do peão, este pode avançar 2 casas, depois somente uma')
} else {
	console.log ('Não é uma peça de xadrez!')
}

//exercicio 7
let grade = 80;

if (grade <= 100 && grade >= 90) {
	console.log ('A');
} else if (grade < 90 && grade >= 80) {
	console.log ('B');
} else if (grade < 80 && grade >= 70) {
	console.log ('C');
} else if (grade < 70 && grade >= 60) {
	console.log ('D');
} else if (grade < 60 && grade >= 50) {
	console.log ('E');
} else if (grade < 50 && grade > 0) {
	console.log ('F');
} else {
	console.log ('Número não se aplica a tabela')
}

//exercicio 8
const num1 = 3;
const num2 = 9;
const num3 = 7;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0 ) {
	console.log (true);
} else {
	console.log (false)
}

//exercicio 9
const num1 = 10;
const num2 = 10;
const num3 = 10;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0 ) {
	console.log (true);
} else {
	console.log (false)
}

//exercicio 10
