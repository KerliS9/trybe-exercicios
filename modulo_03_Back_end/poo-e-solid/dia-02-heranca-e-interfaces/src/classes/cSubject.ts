import { ISubject } from '../interfaces/Interfaces';

export default class Subject implements ISubject {
  subject!: string;

  constructor(subject: string) {
    this.setSubject = subject;
  }

  set setSubject(value: string) {
    if (value.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    this.subject = value;
  }
}
