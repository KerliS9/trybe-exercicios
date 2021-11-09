const n = 10;

let resultado = 0;
for (let i = 0; i <= n; i += 1) {
	resultado -= i;
}
console.log(resultado)

//EXERCICIOS
//exercicio 1
let n = 5;
let line = '';
let item = '*';

for (i = 0; i < n; i += 1) { //não usa lenght, porque não é array
	line += item;
	}
for (i = 0; i < n; i += 1) {
console.log(line);
}

//solução 2 - exercicio 1
const n = 5;	
for (let i = 0; i < n; i += 1) {
	let num = '';
	for (let i1 = 0; i1 < n; i1 += 1) {
	num += '*';
	}
console.log(num);
} 
