class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = Array();
  private _worksGrades: number[] = Array();
  
  constructor(enrollment: string, name: string, exames: number[], works: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = exames;
    this.worksGrades = works;
  }
  
  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }
  
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  
  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error ('Favor ajustar para quatro notas de exames')
    }
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    if (value.length !== 2) {
      throw new Error ('Favor ajustar para duas notas de trabalhos')
    }
    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades]
    .reduce((prev, grade) => {
      grade += prev;
      return grade;
    }, 0)
  }

  averageGrades(): number {
    const sum = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;
    return Math.round(sum / divider);
  }
}

const student1 = new Student('123', 'Kerli', [6, 7, 8, 9], [8, 9]);
console.log('student1: ', student1)
console.log('sum', student1.sumGrades())
const student2 = new Student('456', 'Mau', [8, 7, 8, 9], [7, 9]);
console.log('student2: ', student2);
console.log('average', student1.averageGrades())
// ts-node students.ts

// npm run dev:student