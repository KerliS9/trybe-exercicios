export interface IPerson {
  name: string;
  birthday: Date;
}

export interface IStudent {
  enrollment: string;
  examsGrades: number[];
  worksGrades: number[];
}

export interface IEmployee {
  registration: string;
  salary: number;
  admissionDate: Date;
}

export interface ISubject {
  subject: string;
}

export interface IEnrollable {
  enrollment: string;
  generateEnrollment(): string;
}
