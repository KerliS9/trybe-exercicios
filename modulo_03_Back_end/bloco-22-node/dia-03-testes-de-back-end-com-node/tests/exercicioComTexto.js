const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const nomeDoArquivo = require('../nomeDoArquivo');

const NOME_DO_ARQUIVO = 'VQV com TDD';

describe('execute a função nomeDoArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(NOME_DO_ARQUIVO);
      // sinon.stub(fs, 'writeFileSync');
    });

    after(() => {
      fs.readFileSync.restore();
      // fs.writeFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = nomeDoArquivo('arquivo.txt', 'VQV com TDD');

        expect(resposta).to.be.a('string');
      });

      it('é igual a OK', () => {
        const resposta = nomeDoArquivo('arquivo.txt', 'VQV com TDD');

        expect(resposta).to.be.equals('VQV com TDD');
      });
    });
  });
  describe('Quando o arquivo não existe', () => {
    /* before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    }); */

    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resposta = nomeDoArquivo('arquivo_que_nao_existe.txt');

        expect(resposta).to.be.equal(null);
      });
    });
  });
});