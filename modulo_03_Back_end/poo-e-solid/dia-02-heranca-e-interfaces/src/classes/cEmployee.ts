import { IEmployee } from '../interfaces/Interfaces';

export default class Employee implements IEmployee {
  registration!: string;

  salary!: number;

  admissionDate!: Date;

  set setEnrollment(value: string) {
    Employee.generateEnrollment();
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this.registration = value;
  }

  static generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    // const randomStr = 'teste';
    return `EMP${randomStr}`;
  }
}
