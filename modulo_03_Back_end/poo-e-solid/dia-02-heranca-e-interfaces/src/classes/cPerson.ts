import { IPerson } from '../interfaces/Interfaces';

abstract class Person implements IPerson {
  name!: string; // ! para não precisar iniciar no constructor

  birthday!: Date;

  constructor(name: string, birthday: Date) {
    // Person.isNameValid(name);
    // Person.personAge(birthday);
    this.setName = name;
    this.setBirthday = birthday;
  }

  /* public get getName(): string {
    return this.name;
  } */

  public set setName(value: string) {
    Person.isNameValid(value);
    this.name = value;
  }

  /* public get getBirthday(): Date {
    return this.birthday;
  } */

  public set setBirthday(value: Date) {
    Person.personAge(value);
    this.birthday = value;
  }

  static isNameValid(name: string): void {
    if (name.length <= 3) throw new Error('Nome com menos de 3 caracteres');
  }

  static checkDate(value: Date): number {
    const time = Math.abs(new Date().getTime() - value.getTime());
    const years = 31_536_000_000;
    return Math.floor(time / years);
  }

  static personAge(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('Data de nascimento nao pode ser do futuro');
    if (Person.checkDate(value) > 120) throw new Error('Idade máxima permitida é 120 anos');
  }
}

export default Person;
