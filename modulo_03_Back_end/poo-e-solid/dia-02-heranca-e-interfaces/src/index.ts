import Person from './classes/cPerson';
import Student from './classes/cStudent';

const person1 = new Person('kerli', new Date('09/12/1987'));
// new Date(Date now())

console.log('person1: ', person1);

const student1 = new Student('123', [6, 7, 8, 9], [8, 9], 'kerli', new Date('09/12/1987'));
console.log(student1);

/* "rules": {
  "no-console": 0,
  "no-underscore-dangle": 0,
  "no-param-reassign": 1,
  "no-new-object": 1
} */
