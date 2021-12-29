// import './node_modules/just-validate/dist/js/just-validate.js'

// erro ....

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
	for (let i in estados) { // chama a relação de itens que estão no objeto
		const option = document.createElement('option'); // cria o elemento de escolha.
		// option.setAttribute('value', i);
		option.innerText = estados[i]; // atribui o texto do objeto conforme índice.
		state.appendChild(option); // adiciona o option como filho do state.
	}
}

const validation = new JustValidate('.form-check');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);


window.onload = function () {
	criaOptions();
  // new JustValidate('.form-check');
  const validate = new window.JustValidate('.form-check');

}

/* 3. Logo abaixo do formulário, crie um botão que:
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.

4. Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também. */