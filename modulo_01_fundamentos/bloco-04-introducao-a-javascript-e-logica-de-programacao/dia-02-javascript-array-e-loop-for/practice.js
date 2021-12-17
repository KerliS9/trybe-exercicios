let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1 - percorra o array imprimindo todos os valores nele contidos
for(let index = 0; index < numbers.length; index += 1)
console.log (numbers[index]);

// exercício 2 - some todos os valores contidos no array e imprima o resultado
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0; // se operador soma, precisa iniciar em Zero. Se multiplicação iniciar em 1.

for (let i = 0; i < numbers.length; i += 1) {
	sum += (numbers[i]); // sintaxe sum = sum + numbers[i]
}
console.log (sum)

// exercício 3 - calcule e imprima a média aritmética dos valores contidos no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0; 
let medA = 0;

for (let i = 0; i < numbers.length; i += 1) {
	sum += (numbers[i]); 
	medA = sum / numbers.length
}
console.log (medA)

// exercício 4 - associar com if e else
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

// exercício 5 - descubra qual o maior valor contido no array e imprima-o
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

// exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] % 2 !== 0) {
    count ++;
    // console.log (count);
  }
  if(count === 0) {
  console.log ("nenhum valor ímpar encontrado");
  }
}
console.log (count);

// exercício 7 - descubra qual o menor valor contido no array e imprima-o
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0]; // colocar neste formato para a equação iniciar no índice 0 do array
for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] < menorValor){
    menorValor = numbers[i];
    console.log (menorValor);
  }
}
console.log (menorValor);

// exercício 8  - crie um array que vá de 1 até 25 e imprima o resultado
let array = [];
for(let i = 1; i <= 25; i += 1) {
  array.push(i);
  // console.log (array);
}
console.log (array);

// exercício 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
for(let i = 0; i < array.length; i += 1) {
  console.log (array[i] / 2);
}
