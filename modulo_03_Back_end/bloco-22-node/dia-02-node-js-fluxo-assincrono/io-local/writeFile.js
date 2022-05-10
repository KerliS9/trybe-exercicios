const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão') // subscreve a informação do arquivo
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  // async e await

const fs = require('fs').promises;

// para podermos utilizar o async/await, precisamos criar uma função main e colocar nossa lógica dentro dela. Isso acontece porque, por enquanto, o await só pode ser utilizado dentro de funções async
async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão async');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()

// colocando flags
const fs = require('fs').promises;

 //  A flag ``´wx`` abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado:

fs.writeFile('./io-local/meu-arquivo3.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error('err', err);
  });