import './node_modules/just-validate/dist/js/just-validate.js'

// const btnEnviar = document.getElementById('enviar');

// btnEnviar.addEventListener('click', () => {
// 	const divBotao = document.querySelector('div.botao')
// 	console.log(divBotao);
// 	const objBotao = new bootstrap.Modal(divBotao);
// 	obj.show();
// });

// document.getElementById('enviar').DatePickerX.init();

const estados = { 
	'AC': 'Acre',
	'AL': 'Alagoas',
	'AP': 'Amapá',
	'AM': 'Amazonas',
	'BA': 'Bahia',
	'CE': 'Ceará',
	'DF': 'Distrito Federal',
	'ES': 'Espírito Santo',
	'GO': 'Goiás',
	'MA': 'Maranhão',
	'MT': 'Mato Grosso',
	'MS': 'Mato Grosso do Sul',
	'MG': 'Minas Gerais',
	'PA': 'Pará',
	'PB': 'Paraíba',
	'PR': 'Paraná',
	'PE': 'Pernambuco',
	'PI': 'Piauí',
	'RJ': 'Rio de Janeiro',
	'RN': 'Rio Grande do Norte',
	'RS': 'Rio Grande do Sul',
	'RO': 'Rondônia',
	'RR': 'Roraima',
	'SC': 'Santa Catarina',
	'SP': 'São Paulo',
	'SE': 'Sergipe',
	'TO': 'Tocantins'
	} 

const state = document.getElementById('state');

function criaOptions() {
	for (let i in estados) { // chama a relação de itens que estão no obejto
		const option = document.createElement('option');
		// option.setAttribute('value', i);
		option.innerText = estados[i];
		state.appendChild(option);
	}
}



window.onload = function () {
	criaOptions();
}