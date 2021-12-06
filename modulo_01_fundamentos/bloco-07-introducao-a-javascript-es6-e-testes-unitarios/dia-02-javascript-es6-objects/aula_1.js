// listar as chaves desse objeto
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) { // property foi o nome dado para para capturar as chaves do objeto.
  console.log(property);
}
// name
// genre
// author
// favoriteCharacter
// quote
// seasons

console.log(Object.keys(coolestTvShow)); // object.keys as chaves retornam num array de strings.

//Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};
const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student); //extrai primeiro as chaves.
  for(index in arrayOfSkills){ // com o for in adiciona o nível de conhecimento para cada skill, conforme o índice.
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};
// o mesmo for in foi usado para iterar os dois objetos.
console.log('Estudante 1');
listSkills(student1);//lista as skills da pessoa estudante 1
console.log('Estudante 2');
listSkills(student2);