const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

/* com o npm init -y dará retorno ao obejto abaixo
package.json é um objeto que armazena uma série de informações sobre o seu projeto.
Wrote to /home/cleyton/Documents/meuApp/package.json:

{
  "name": "dia-03-primeiros-passos-em-jest", - A primeira chave "name", por padrão, terá o mesmo nome do diretório em que você criou o arquivo package.json . Ele representa o nome do seu projeto;
  "version": "1.0.0", - A versão atual do projeto é "1.0.0", ou seja a primeira versão
  "description": "", - Podemos adicionar alguma descrição na chave "description";
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" - A chave "scripts" define um conjunto de scripts Node que podem ser executados.
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

script rpara lidar com o teste. 
"test": "jest" */

/* para instalar o jest 
npm install --save-dev jest */

/* // sum.js - 
const sum = (a, b) => a + b;

module.exports = sum; // a função sum é exportada pra outros modulos que podem sem outros arquivos dentro da pasta e/ou com outros nomes

// sum.test.js
const sum = require('./sum'); a função é conectada pelo require.

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
}); */

/* A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. No segundo arquivo, utilizamos require('./sum') para importar a função sum  */