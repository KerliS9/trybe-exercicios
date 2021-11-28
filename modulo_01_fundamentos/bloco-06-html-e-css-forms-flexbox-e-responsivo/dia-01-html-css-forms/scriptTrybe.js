// script.js
// código copiado do gabarito do curso
function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) { 
    let option = document.createElement('option');
    option.innerText = stateOptions[index]; // busca o texto de dn
    option.value = stateOptions[index]; // equivale ao name do input. Faz a relação com o servidor.
    states.appendChild(option);
  } // https://www.w3schools.com/tags/att_option_value.asp
} // https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input

let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  address: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

function defaultValidation(input, name){ // name é o atributo name do html.
  let trimmed = input.value.trim(); // apara/retira os espaços em branco no início e fim do input.
  let validation = inputs[name]; // name é nome da chave dos objetos.

  if(validation.required && trimmed.length === 0){
    return {
			message: `Campo ${name} vazio`
		}
  }

  if(validation.maxLength && trimmed.length > validation.maxLength){
    return false;
  }
  
  return true;
}

function dateValidation(input, name){ // campos atribuídos no html.
  if(input.value.length === 0){
    return {
      message: 'A data não foi preenchida!' // retorna como objeto como uma string dentro. Conectada a função date: dateValidation, atribuída dentro da variável let validationStrategies.
    }
  }
  let regex = /^\d\d\/\d\d\/\d\d\d\d$/; /* Primeiro definimos uma expressão regular abrindo duas barras invertidas. Dentro delas nós colocamos as configurações que acharmos pertinentes. Nesse caso, a primeira exigência é o ^ , que configura nosso texto para ignorar quebras de linhas antes de qualqer caracter que digitarmos. Depois disso, a primeira exigência é o \d , que representa que aquele campo deve ser preenchido com um número entre 0 e 9,999..., depois dos dois \d referentes ao dia, vem a "/", para separar os campos de dia, mês e ano. Essa cofiguração se repete para o restante da data. Por fim, temos o $ , que sinaliza que nosso input não aceita quebras de linha dali em diante. 
	A barra invertida - delimita o primeiro grupo de caracteres, tornando a próxima barra um caracter normal. */
  if(!regex.test(input.value)){ // test função do regex
    return {
      message: 'Data: Formato inválido'
    };
  }
  let splitted = input.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];
  if(day < 1 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }
  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }
  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }
  return true;
}

function getSelectedOption(select){
  return select.options[select.selectedIndex];
}
function selectValidation(select, name){
  let option = getSelectedOption(select);
  let validation = inputs[name];
  if(validation.required && (!option || option.disabled)){ // verifica se as condições predefinidas estão sendo respeitadas. Função para obrigar a seleção de estado, antes de enviar o formulário.
    return false;
  }
  return true;
}

function radioValidation(radio, name){
  let checked = document.querySelector(`[name=${name}]:checked`) // verifica se o atributo checked foi colocado a um dos tipos radio, de mesmo grupo atributo name.
  if(checked === null){
    return false;
  }
  return true;
}

let validationStrategies = {
  default: defaultValidation,
  date: dateValidation,
  select: selectValidation,
  radio: radioValidation,
}

function validateInput(inputName){
  let inputType = inputs[inputName].type;
  let input = document.querySelector(`[name=${inputName}]`)
  if(inputType){
    let validationFunction = validationStrategies[inputType];
    return validationFunction(input, inputName);
  }
  return validationStrategies.default(input, inputName);
}
  
function renderErrorMessages(messages){
  let form = document.querySelector('#cv-form');
  let messageDiv = document.createElement('div');
  messageDiv.className = 'error';
  form.prepend(messageDiv);

  for(let message of messages){
    let p = document.createElement('p');
    p.innerText = message;

    messageDiv.appendChild(p);
  }
}

function defaultRendering(input){
  let p = document.createElement('p');
  p.innerText = input.value;

  return p;
}

function radioRendering(input){
  let p = document.createElement('p');
  let name = input.getAttribute('name');
  let checked = document.querySelector(`[name=${name}]:checked`);

  if(checked){
    p.innerText = checked.value;
  }

  return p;
}

function selectRendering(input){
  let p = document.createElement('p');
  let option = getSelectedOption(input)
  p.innerText = option.value;
  
  return p;
}

let renderStrategies = {
  default: defaultRendering,
  radio: radioRendering,
  select: selectRendering,
}

function renderData(){
  let dataDiv = document.createElement('div');
  dataDiv.className = 'data';

  let form = document.querySelector('#cv-form');
  form.prepend(dataDiv);

  for(let name in inputs){
    let inputType = inputs[name].type;
    let input = document.querySelector(`[name=${name}]`);

    let element;

    if(renderStrategies[inputType]){
      element = renderStrategies[inputType](input, dataDiv)
    } else {
      element = renderStrategies.default(input, dataDiv)
    }

    dataDiv.appendChild(element);
  }
}

function validateData(){
  let validationsList = {};

  for(let inputName in inputs){
    let isValid = validateInput(inputName);
    validationsList[inputName] = isValid;
  }
  
  let counter = 0;
  let messages = [];

  for(let index in validationsList){
    if(validationsList[index] === false){
      counter += 1;
    }

    if(validationsList[index].message){
      counter += 1;
      messages.push(validationsList[index].message);
    }
  }

  return {
    errorQtd: counter,
    messages,
  }
}

function clearDivs(){
  let errorDivs = document.querySelectorAll('.error');

  for(div of errorDivs){
    div.remove();
  }

  let dataDiv = document.querySelector('.data');

  if(dataDiv){
    dataDiv.remove();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let validation = validateData();

  clearDivs();
  
  if(validation.errorQtd === 0){
    renderData();
  } else {
    validation.messages.unshift('Dados Inválidos') // adiciona elementos dentro de um array no início.

    renderErrorMessages(validation.messages)
  }
}

function clearFields() {
  let formElements = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea')
  let div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    let userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

window.onload = function () {
  createStateOptions();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields)
}