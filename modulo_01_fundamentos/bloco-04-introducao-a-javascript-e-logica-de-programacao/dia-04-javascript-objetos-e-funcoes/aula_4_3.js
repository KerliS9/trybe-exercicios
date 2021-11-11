/*Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.*/

//exercicio 1
function sum(a, b) {
	return a + b;
}
console.log(sum(2, 3));

function sub(a, b) {
	return a - b;
}
console.log(sub(2, 3));

function mult(a, b) {
	return a * b;
}
console.log(mult(2, 3));

function div(a, b) {
	return a / b;
}
console.log(div(2, 3));

function mod(a, b) {
	return a % b;
}
console.log(mod(2, 3));

//exercicio 2
function higher (a, b) {
	if (a > b) {
		return a;
	} else if (a === b) {
		return 'Iguais';
	} else {
		return b;
	}
}
console.log(higher(2, 2));

//exercicio 3
function higher(a, b, c) {
	if (a > b && a > c) {
		return "Maior número é a";
	} else if (a < b && c < b) {
		return "Maior número é b";
	} else if (a < c && b < c){
		return "Maior número é c";
	} else {
		return "Iguais";
	}
}
console.log(higher(7, 3, 5));

//exercicio 4
function boolean(num) {
	if (num > 0){
		return "Positive"
	} else if (num < 0) {
		return "Negative"
	} else {
		return "Zero"
	}
}
console.log(boolean(-1));

//exercicio 5
function triangule(ang1, ang2, ang3) {
	if (ang1 + ang2 + ang3 === 180){
		return "true";
	} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
		return "Há números negativos, favor revisar";
	} else {
		return "false";
	}
}
console.log(triangule(50, 50, -80));