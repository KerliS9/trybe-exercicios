"use strict";
class Student {
    constructor(enrollment, name, exames, works) {
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = exames;
        this._worksGrades = works;
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(value) {
        this._worksGrades = value;
    }
}
const student1 = new Student('123', 'Kerli', [6, 7, 8, 9], [8, 9, 8]);
console.log('student1: ', student1);
const student2 = new Student('123', 'Mau', [8, 7, 8, 9], [7, 9, 8]);
console.log('student2: ', student2);
// ts-node students.ts
