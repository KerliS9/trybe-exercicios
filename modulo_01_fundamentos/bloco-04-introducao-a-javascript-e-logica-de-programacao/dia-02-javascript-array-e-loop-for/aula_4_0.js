//parte 1
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];


//parte 2
let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1]; //subtrai 1, pois a contagem inicia em 0.
console.log(searchForLastTask);
// Brincar com o cachorro


//parte 3
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
tasksList.unshift('Participar das mentorias'); //adiciona um item ao início da lista
console.log (tasksList);


//parte 4
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]
tasksList.shift(); //remove o primeiro item da lista
console.log(tasksList);


//parte 5
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1


//EXERCICIOS
//Exercicio 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu;

console.log(menuServices);

//Exercicio 2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercicio 3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');
console.log(menu);
