// EXEMPLO FOR DENTRO DE FOR
let qtd = 5;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];
let ingredientesBolo = ["farinha", "óleo", "ovos", "fermento", "chocolate"];


for(let index = 0; index < 5; index+=1){
	console.log('executou fora: ', index)

	let pao = [];

	for( let index = 0; index < ingredientes.length; index+=1){
		console.log('executou dentro: ', index);
		pao.push(ingredientes[index])
	}
	sacola.push(pao);
}
for(let index = 0; index < 5; index+=1){
	console.log('executou fora: ', index)
	
	let bolo = [];
	
	for( let index = 0; index < ingredientesBolo.length; index+=1){
	console.log('executou dentro: ', index);
	bolo.push(ingredientesBolo[index])
	}
sacola.push(bolo);
}
console.log (sacola);
