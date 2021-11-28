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
	for (let i in estados) {
		const option = document.createElement('option');
		option.setAttribute('value', i); //
		option.innerText = estados[i];
		state.appendChild(option);
	}
}
criaOptions();

const date = document.getElementById('date');
function checkDate () {
	const dateValue = date.value;
	const dia = parseInt(dateValue.slice(0, 2));
	const mes = parseInt(dateValue.slice(3, 5));
	const ano = parseInt(dateValue.slice(6, 10));
	if ((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12) && (ano > 0)) {
		console.log('data válida');
		return true;
	} else {
		alert('Favor, preencher data no formato dd/mm/aaaa');
	}
} 
