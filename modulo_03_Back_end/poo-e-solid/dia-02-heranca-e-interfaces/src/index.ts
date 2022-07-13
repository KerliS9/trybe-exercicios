import Person from './classes/cPerson';
import Student from './classes/cStudent';

const person1 = new Person('kerli', new Date('09/12/1987'));
// new Date(Date now())

console.log('person1: ', person1);

const student1 = new Student('123', [6, 7, 8, 9], [8, 9], 'kerli', new Date('09/12/1987'));
console.log(student1);
// npm install --save-dev eslint
// npx eslint --init
/* Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm // javaScript(import/export)
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes // yes
✔ Where does your code run? · node // node - barra de espaço para desmarcar e marcar a opção correta
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON */
