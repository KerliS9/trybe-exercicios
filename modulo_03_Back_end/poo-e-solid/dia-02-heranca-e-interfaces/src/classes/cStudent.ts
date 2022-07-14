import { IStudent } from '../interfaces/Interfaces';
import Person from './cPerson';

export default class Student extends Person implements IStudent {
  enrollment!: string;

  examsGrades!: number[];

  worksGrades!: number[];

  constructor(exames: number[], works: number[], name: string, birthday: Date) {
    super(name, birthday);
    this.setEnrollment = Student.generateEnrollment();
    this.setExamsGrades = exames;
    this.setWorksGrades = works;
  }

  set setEnrollment(value: string) {
    Student.generateEnrollment();
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this.enrollment = value;
  }

  set setExamsGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error('Favor ajustar para quatro notas de exames');
    }
    this.examsGrades = value;
  }

  set setWorksGrades(value: number[]) {
    if (value.length !== 2) {
      throw new Error('Favor ajustar para duas notas de trabalhos');
    }
    this.worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades].reduce((prev, grade) => {
      const g = grade + prev;
      return g;
    }, 0);
  }

  averageGrades(): number {
    const sum = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;
    return Math.round(sum / divider);
  }

  static generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    // const randomStr = 'teste';
    return `STU${randomStr}`;
  }
}
