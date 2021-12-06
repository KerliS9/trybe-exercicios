//lista os valores de cada chave
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
for (const property in coolestTvShow) {
  console.log(coolestTvShow[property]);
}
// BoJack Horseman
// adult animation
// Raphael Bob-Waksberg
// Princess Carolyn
// Princess Carolyn always lands on her feet.
// 6
console.log(Object.values(coolestTvShow)); // com object.values retorna um array de strings.


// duas funções que retornam a mesma lista de valores
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};
const listSkillsValuesWithFor = (student) => { // usando o for in
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }
  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student); // usando o object.values

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));
//mais simples e resolve o problema da listagem de valores de forma mais direta.