// exercicio 1
/* const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
}; */
const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(employeeGenerator));

// exercicio 2 -  Desenvolva uma HOF que retorna o resultado de um sorteio
const numberChecker = (myBet, number) => myBet === number;
const lottery = (myBet, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  console.log('Número sorteado:' + number);
  return callback(myBet, number) ? 'You are lucky!' : 'Not today, please, try again!';
};
console.log(lottery(5, numberChecker));

// exercicio 3 - Comparar respostas do gabarito e somar notas
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const repeat = (rightAnswers, studentAnswers, action) => {
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    count += actionReturn;
  }
  return `Your score was: ${count} corrects answers`;
}
console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rightAnswer, userAnswer) => {
  if(rightAnswer === userAnswer) {
    return 1;
  } if(userAnswer === 'N.A') {
    return 0;
  }
  return -0,5;
}));
