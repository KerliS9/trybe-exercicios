/* A resolução do problema acontece em 3 etapas:
Interpretação;
Criação do algoritmo;
Codificação do algoritmo.*/

let fruits = [3, 4, 10, 1, 12]; //Adicionar o array
let sum = 0; // Criar uma variável com valor 0

for (let i = 0; i < fruits.length; i += 1) { //Criar um loop que percorre o array
	sum += fruits[i]; //Incrementar a variável com o valor correspondente a cada loop
}
if (sum < 15) { //Criar um if com a condição da variável ser menor que 15
	console.log('Valor menor que 16'); // Caso a variável obedeça a condição
} else { //Caso a variável não obedeça a condição
	console.log(sum);
}
