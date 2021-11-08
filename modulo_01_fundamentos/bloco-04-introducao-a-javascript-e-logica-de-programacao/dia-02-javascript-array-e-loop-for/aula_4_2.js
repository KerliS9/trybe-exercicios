//parte 1
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

//parte 2
let word = 'Hello';
for (let letter of word) { //extrai letra a letra, separando em linhas
  console.log(letter); 
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

//parte 3
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) { //soma, devido ao sum, o valor definido a cada número da array.
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

console.log(arrOfNumbers); //a array não será alterada,o dado adicionado será temporário.
// Resultado: [10, 20, 30]

//EXERCICIO
//exercicio 1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (names of names) {
	console.log(names);
}