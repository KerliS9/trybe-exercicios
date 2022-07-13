import { IPerson } from './Interfaces';

class Person implements IPerson {
  name: string;

  birthday: Date;

  constructor(name: string, birthday: Date) {
    this.isNameValid(name);
    this.name = name;
    this.birthday = birthday;
  }

  public get getName(): string {
    return this.name;
  }

  public set setName(value: string) {
    this.isNameValid(value);
    this.name = value;
  }

  public get getBirthday(): Date {
    return this.birthday;
  }

  public set setBirthday(value: Date) {
    this.birthday = value;
  }

  private isNameValid(name: string): void {
    if (name.length <= 3) throw new Error('Nome com menos de 3 caracteres');
  }
}

export default Person;
