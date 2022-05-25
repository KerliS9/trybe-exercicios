const { expect } = require('chai');
const sinon = require('sinon');

// NAME=movieServiceGetById npm test

const MoviesService = require('../../services/moviesService');
const MoviesModel = require('../../models/moviesModel');

describe('Encontre um filme no bancos de dados', () => {
  describe('quando não tem este id no banco de dados', () => {
    before(async () => {
      sinon.stub(MoviesModel, 'getMovieById').resolves([{}]);
    });

    after(async () => {
      MoviesModel.getMovieById.restore();
    });

    it('retorna um boolean', async () => {
      const response = await MoviesService.getMovieById();

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.getMovieById();

      expect(response).to.be.equal(false);
    });

  });

  describe('quando o filme é encontrado com sucesso', () => {
    const payloadMovie = [{
      id: 1,
      title: 'Example Movie',
      directed_by: 'Jane Dow',
      release_year: 1999,
    }];

    before(() => {
      sinon.stub(MoviesModel, 'getMovieById').resolves(payloadMovie);
    });

    after(() => {
      MoviesModel.getMovieById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.getMovieById(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui as chaves, id, title, directed_by, release_year', async () => {
      const response = await MoviesService.getMovieById(payloadMovie);

      expect(response).to.include.all.keys('id', 'title', 'directed_by', 'release_year');
    });

  });
});