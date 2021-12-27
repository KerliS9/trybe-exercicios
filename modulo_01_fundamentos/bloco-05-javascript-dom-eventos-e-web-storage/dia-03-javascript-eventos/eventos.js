const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// há configuração no css para haver diferença na altura entre as caixas. Propriedade transform

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// const elementLi = document.querySelectorAll('li');
// console.log(elementLi);
function addClassTech(event) {
/*   for(let i = 0; i < elementLi.length; i += 1) {
    console.log('depois do for');
    const tech = document.querySelector('.tech');
    if(tech.classList.contains('tech')) {
      classList.remove('tech');
    } 
    event.target.classList.add('tech');
  } */
  const classTech = document.querySelector('.tech');
  classTech.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}
firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click', addClassTech);
thirdLi.addEventListener('click', addClassTech);
// elementLi.addEventListener('click', addClassTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function replaceText(event) {
  const newTech = document.querySelector('.tech');
  console.log(newTech);
  newTech.innerText = event.target.value;
  console.log(newTech);
}
input.addEventListener('input', replaceText);

/* input.addEventListener('input', function(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
}); */

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function() {
  window.location.assign('https://github.com/KerliS9');
})

/* myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
});
 */
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', function(event){
  event.target.style.color = 'red';
})
myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
}); // para retirar a cor qdo o mouse não estiver mais sobre o 

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.