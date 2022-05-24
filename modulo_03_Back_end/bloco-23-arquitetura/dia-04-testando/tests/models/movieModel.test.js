const sinon = require('sinon');
const { expect } = require('chai');
// NAME=movieModel npm test
/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
  const MoviesModel = {
    create: () => {}
  };
*/

const connectionMovies = require('../../models/connectionMovies');
const MoviesModel = require('../../models/moviesModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste
    // console.log('before', execute);
    sinon.stub(connectionMovies, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connectionMovies.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.createMovie(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.createMovie(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});