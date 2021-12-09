// Crie uma função que retorne a string 'Acordando!!'

const wakeUp = () => 'Acordando!!';
console.log(wakeUp());

// Crie outra função que retorne a string 'Bora tomar café!!'
const drinkCoffee = () => 'Bora tomar café!!';
console.log(drinkCoffee());

// Crie mais uma função que retorne a string 'Partiu dormir!!'
const wentToSleep = () => 'Partiu dormir!!';
console.log(wentToSleep());

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

const doingThings = (callback) => {
	const result = callback();
	console.log(result);
}
doingThings(wakeUp);
doingThings(drinkCoffee);
doingThings(wentToSleep);

