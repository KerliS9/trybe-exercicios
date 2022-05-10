const fs = require('fs').promises;
console.log(fs);

const simpsons = './simpsons.json';

// 4.a Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
/* function readSimpsons() {
    fs.readFile(simpsons)
      .then((data) => {
        const obj = JSON.parse(data);
        console.log(obj);
      })
      .catch(err => console.log(err));  
  }

function main() {
  readSimpsons();
}

main(); */


// 4.b Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
/* function getSimpsonById(id) {
  fs.readFile(simpsons)
  .then((data) => {
    const simpsons = JSON.parse(data);
    console.log(simpsons);
    const simpsonId = simpsons.find((simpson) => id === simpson.id);
    console.log(simpsonId);
    if (!simpsonId){
      throw new Error ('id não encontrado');
    };  
  })
}

function main() {
  getSimpsonById('1');
}

main(); */

// 4.c Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
/* function filterSimpsonById() {
  fs.readFile(simpsons)
  .then((data) => {
    const simpsons = JSON.parse(data);
    console.log(simpsons);
    const simpsonId = simpsons.filter((simpson) => '10' !== simpson.id && '6' !== simpson.id);
    console.log(simpsonId);
  })
}

function main() {
  filterSimpsonById();
}

main(); */

// 4.d Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
/* async function readWriteSimpsons() {
  const reading = await fs.readFile(simpsons);
    const simpsonsRead = JSON.parse(reading);
    console.log(simpsonsRead);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsRead));
    const familyIds = [1, 2, 3, 4];
    const simpsonsFamily = simpsonsRead
      .filter((simpson) => familyIds.includes(Number(simpson.id)));
    await fs.writeFile('./simpsonsIds1a4.json', JSON.stringify(simpsonsFamily))
  }

function main() {
  readWriteSimpsons();
}

main(); */

// 4.e Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
/* async function addNewSimpson() {
  const reading = await fs.readFile(simpsons);
    const simpsonsRead = JSON.parse(reading);
    console.log(simpsonsRead);
    simpsonsRead.push({ id: '11', name: 'Nelson Muntz' });
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsRead));
  }

function main() {
  addNewSimpson();
}

main(); */

// 4.f Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const simpsonFamily = './simpsonFamily.json'
async function replaceSimpson() {
  const reading = await fs.readFile(simpsonFamily);
    const simpsonsRead = JSON.parse(reading);
    console.log(simpsonsRead);
    const simpsonsfilter = simpsonsRead.filter(simpson => simpson.name !== 'Nelson Muntz');
    console.log(simpsonsfilter);
    simpsonsfilter.push({ id: '12', name: 'Maggie Simpson' });
    await fs.writeFile('./simpsonFamily2.json', JSON.stringify(simpsonsfilter));
  }

function main() {
  replaceSimpson();
}

main();