let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1
console.log (numbers);

//exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0; //se operador soma, precisa iniciar em Zero. Se multitiplicação iniciar em 1.

for (let i = 0; i < numbers.length; i += 1) {
	sum += (numbers[i]); //sintaxe sum = sum + numbers[i]
}
console.log (sum)

//exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0; 
let medA = 0;

for (let i = 0; i < numbers.length; i += 1) {
	sum += (numbers[i]); 
	medA = sum / numbers.length
}
console.log (medA)

//exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0; 
let medA = 0;

for (let i = 0; i < numbers.length; i += 1) {
	sum += (numbers[i]); 
	medA = sum / numbers.length
}
if (medA > 20) {
	console.log('Valor maior que 20');
} else {
	console.log ('Valor menor ou igual a 20');
}

//exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for (let i = 0; i < numbers.length; i += 1) {
	if (numbers[i] > maiorValor) {
	maiorValor = numbers[i];
	}
}
console.log (maiorValor);


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for (const number of numbers) {
	if (number > maiorValor) {
		maiorValor = number;
	}
}
console.log(maiorValor);

//exercicio 6