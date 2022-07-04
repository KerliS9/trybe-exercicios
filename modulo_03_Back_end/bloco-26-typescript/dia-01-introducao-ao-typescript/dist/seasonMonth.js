"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = __importDefault(require("./months"));
const seasons_1 = __importDefault(require("./seasons"));
const months = Object.values(months_1.default);
// const seasons = Object.keys(Seasons);
// console.log('meses', months);
// console.log('estações', seasons);
const choiceMonth = readline_sync_1.default.keyInSelect(months, "Escolha um mês do ano");
// console.log('choiceMonth', choiceMonth);
const seasonsSouth = {
    [seasons_1.default.Autumn]: [months_1.default.March, months_1.default.April, months_1.default.May, months_1.default.June],
    [seasons_1.default.Winter]: [months_1.default.June, months_1.default.July, months_1.default.August, months_1.default.September],
    [seasons_1.default.Spring]: [months_1.default.September, months_1.default.October, months_1.default.November, months_1.default.December],
    [seasons_1.default.Summer]: [months_1.default.December, months_1.default.January, months_1.default.February, months_1.default.March],
};
const seasonsNorth = {
    [seasons_1.default.Spring]: seasonsSouth[seasons_1.default.Autumn],
    [seasons_1.default.Summer]: seasonsSouth[seasons_1.default.Winter],
    [seasons_1.default.Autumn]: seasonsSouth[seasons_1.default.Spring],
    [seasons_1.default.Winter]: seasonsSouth[seasons_1.default.Summer],
};
const hemispheres = {
    "Sul": seasonsSouth,
    "Norte": seasonsNorth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), 'Escolha o hemisfério: ');
// console.log('choiceHemisphere', choiceHemisphere);
const monthChosen = Object.values(months_1.default)[choiceMonth];
const hemisphereChosen = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: ${monthChosen}`);
console.log(`Hemisfério: ${hemisphereChosen}`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
// console.log(`Estações: ${chosenHemisphereSeasons}`); // array de objetos
Object.entries(chosenHemisphereSeasons).map((value) => {
    const seasons = value[0];
    // console.log('seasons map', seasons);
    const months = value[1];
    // console.log('months map', months);
    if (months.includes(monthChosen))
        console.log(`Estações: ${seasons}`);
});
