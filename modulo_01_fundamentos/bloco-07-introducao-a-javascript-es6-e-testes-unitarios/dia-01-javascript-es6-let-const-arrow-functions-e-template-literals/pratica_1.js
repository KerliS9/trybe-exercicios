/* //função normal
function testingScope(escopo) {
	if (escopo === true) {
		var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
		ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
		console.log(ifScope);
	} else {
		var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
		console.log(elseScope);
	}
	console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//alteração para arrow functions e concatenações para template literals
const testingScope = escopo => { 
	if (escopo === true) { 
		let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
		ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
		console.log(ifScope);
	} else {
		const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
		console.log(elseScope);
	}
}
testingScope(true); */


//template literals
let oddsAndEvens = [13, 3, 4, 10, 7, 2];
function sortNumbers (){
	oddsAndEvens.sort()
	return oddsAndEvens;
}
sortNumbers();
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`); // será necessário alterar essa linha 😉

//arrow function
//let oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortNumbers2 = () => {
	oddsAndEvens.sort()
	return oddsAndEvens;
}
sortNumbers2();
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`); // será necessário alterar essa linha 😉

/* https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona?gclid=Cj0KCQiAnaeNBhCUARIsABEee8VrIzfv4UsYNorbn0-OHRN30lbAa1Z62NhSQWJQk6b51rp7PWNzD4waAtHaEALw_wcB */
