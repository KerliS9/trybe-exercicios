function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// exercício 1 - Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  const getDaysList = document.querySelector('#days');
  for(let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    const dayElement = document.createElement('li');
    dayElement.innerHTML = day;
    dayElement.classList.add('day');
    getDaysList.appendChild(dayElement);
      if(day === 24 | day === 25 | day === 31) {
        dayElement.classList.add('holiday');
      }
      if(day === 4 | day === 11 | day === 18 | day === 25) {
        dayElement.classList.add('friday');
      }
  }
}
createDays();

// exercício 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function createButton(Feriados) {
  const btnHoliday = document.createElement('button');
  btnHoliday.innerHTML = Feriados;
  btnHoliday.id = 'btn-holiday';
  const divButton = document.querySelector('.buttons-container');
  divButton.appendChild(btnHoliday);
}
createButton('Feriados');

// exercício 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
const btnHoliday = document.querySelector('#btn-holiday');
function highlightHolidays() {
  const holiday = document.querySelectorAll('.holiday');
  for (let i = 0; i < holiday.length; i += 1) {
    holiday[i].style.backgroundColor = 'yellow';
  }
}
btnHoliday.addEventListener('click', highlightHolidays);

// exercício 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
function createBtnFriday(SextaFeira) {
  const btnFriday = document.createElement('button');
  btnFriday.innerHTML = SextaFeira;
  btnFriday.id = 'btn-friday';
  const divButton = document.querySelector('.buttons-container');
  divButton.appendChild(btnFriday);
}
createBtnFriday('Sexta-Feira');

// exercício 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
function replaceText(array) {
  const btnFriday = document.querySelector('#btn-friday');
  const friday = document.querySelectorAll('.friday');
  const textFriday = 'Sexta-feira'

  btnFriday.addEventListener('click', function() {
    for(let i = 0; i < friday.length; i += 1) {
      if(friday[i].innerHTML !== textFriday) {
        friday[i].innerHTML = textFriday;
      } else {
      friday[i].innerHTML = array[i];
    }
    }
  })
}
replaceText([4, 11, 18, 25]);

// exercício 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
const day = document.querySelectorAll('.day');
function zoom() {

  day.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
  day.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  });
}

