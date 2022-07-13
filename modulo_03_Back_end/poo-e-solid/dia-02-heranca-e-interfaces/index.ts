import Person from './src/CPerson';
import Student from './src/CStudent';

const person1 = new Person('kerli', new Date('09/12/1987'));
// new Date(Date now())

console.log('person1: ', person1);

const student1 = new Student('123', [6, 7, 8, 9], [8, 9], 'kerli', new Date('09/12/1987'));
console.log(student1);
