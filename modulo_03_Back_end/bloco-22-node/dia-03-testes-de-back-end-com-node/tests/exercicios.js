const { expect } = require('chai');

const numberStatus = require('../numberStatus');

describe('Verifica a função numberStatus, se retorno é string e positivo', () => {
  it('retorna "string"', () => {
    const resposta = numberStatus(4);
    console.log('resposta', resposta);

    expect(resposta).to.be.a('string');
  });
  it('retorna "positivo"', () => {
    const resposta = numberStatus(4);
    
    expect(resposta).to.be.equals('positivo');
  });
});

describe('Verifica a função numberStatus, se retorno é string e negativo', () => {
  it('retorna "string"', () => {
    const resposta = numberStatus(-4);

    expect(resposta).to.be.a('string');
  });
  it('retorna "negativo"', () => {
    const resposta = numberStatus(-4);

    expect(resposta).to.be.equals('negativo');
  });
});

  describe('Verifica a função numberStatus, se retorno é string e neutro', () => {
    it('retorna "string"', () => {
      const resposta = numberStatus(0);
  
      expect(resposta).to.be.a('string');
    });
    it('retorna "neutro"', () => {
      const resposta = numberStatus(0);
  
      expect(resposta).to.be.equals('neutro');
    });
});
