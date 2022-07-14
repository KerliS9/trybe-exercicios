import Employee from './cEmployee';
import Person from './cPerson';

export default class Teacher extends Person implements Employee {
  registration!: string;

  salary!: number;

  admissionDate!: Date;

  subject: string;

  constructor(name: string, birthday: Date, salary: number, subject: string, admissionDate: Date) {
    super(name, birthday);
    this.setSalary = salary;
    this.subject = subject;
    this.setEnrollment = Teacher.generateEnrollment();
    this.setAdmissionDate = admissionDate;
  }

  set setEnrollment(value: string) {
    Employee.generateEnrollment();
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this.registration = value;
  }

  static generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `EMP${randomStr}`;
  }

  set setSalary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo');
    this.salary = value;
  }

  set setAdmissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser no futuro');
    this.admissionDate = value;
  }
}
