import readline from "readline-sync";
import Months from './months';
import Seasons from './seasons';

const months = Object.values(Months);
// const seasons = Object.keys(Seasons);

// console.log('meses', months);
// console.log('estações', seasons);

const choiceMonth = readline.keyInSelect(months, "Escolha um mês do ano");
// console.log('choiceMonth', choiceMonth);
const seasonsSouth = {
  [Seasons.Autumn]: [Months.March, Months.April, Months.May, Months.June],
  [Seasons.Winter]: [Months.June, Months.July, Months.August, Months.September],
  [Seasons.Spring]: [Months.September, Months.October, Months.November, Months.December],
  [Seasons.Summer]: [Months.December, Months.January, Months.February, Months.March],
}

const seasonsNorth = {
  [Seasons.Spring]: seasonsSouth[Seasons.Autumn],
  [Seasons.Summer]: seasonsSouth[Seasons.Winter],
  [Seasons.Autumn]: seasonsSouth[Seasons.Spring],
  [Seasons.Winter]: seasonsSouth[Seasons.Summer],
}


const hemispheres = {
  "Sul": seasonsSouth,
  "Norte": seasonsNorth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), 'Escolha o hemisfério: ');
// console.log('choiceHemisphere', choiceHemisphere);

const monthChosen = Object.values(Months)[choiceMonth];

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
  if (months.includes(monthChosen)) console.log(`Estações: ${seasons}`)
})