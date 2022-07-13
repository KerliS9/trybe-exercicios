import { IStudent } from '../interfaces/Interfaces';
import Person from './cPerson';

export default class Student extends Person implements IStudent {
  enrollment: string;

  examsGrades: number[];

  worksGrades: number[];

  constructor(enrollment: string, exames: number[], works: number[], name: string, birthday: Date) {
    super(name, birthday);
    this.enrollment = enrollment;
    this.examsGrades = exames;
    this.worksGrades = works;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades].reduce((prev, grade) => {
      const g = grade + prev;
      return g;
    }, 0);
  }
}
