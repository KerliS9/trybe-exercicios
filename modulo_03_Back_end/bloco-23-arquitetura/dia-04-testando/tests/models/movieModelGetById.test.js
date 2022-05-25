const sinon = require('sinon');
const { expect } = require('chai');
// NAME=movieModelGet npm test

const connectionMovies = require('../../models/connectionMovies');
const MoviesModel = require('../../models/moviesModel');

describe('Encontre um filme no bancos de dados', () => {
  
  describe('quando o filme é encontrado com sucesso', () => {
    const payloadMovie = {
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }
    // console.log(payloadMovie);
  
    before(async () => {
      sinon.stub(MoviesModel, 'getMovieById').resolves(payloadMovie);
    });

    after(async () => {
      MoviesModel.getMovieById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getMovieById(1);

      expect(response).to.be.an('object');
      expect(response).not.to.be.empty;
      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });

  });

  describe('quando não tem este id no banco de dados', () => {

    /* before(async () => {
      sinon.stub(connectionMovies, 'execute').resolves([[]]);
    });

    after(async () => {
      connectionMovies.execute.restore();
    }); */

    it('quando o filme não é encontrado', async () => {
      const response = await MoviesModel.getMovieById();

      // expect(response).to.be.empty;
      // expect(response).to.be.an('object');
      expect(response).to.be.equal(null);
    });
  });
});