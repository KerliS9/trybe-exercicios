// ./tests/integration/employeeCreation.test.js

const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

const { Employee, Address } = require('../../src/models');
const { Employee: employeeMock } = require('../mock/models');

chai.use(chaiHttp);

const { expect } = chai;

const server = require('../../index');
// const routerEmployee = require('../../controllers/employeeController')

// omitir os `console.log`s dos testes gerando um `stub` pra função

/* describe('Rota POST do Course /employees', () => {
  // const consoleLogStub = stub(console, 'log');
  // before(()=> consoleLogStub.returns(true));
  // after(()=> consoleLogStub.restore()); 
  before(() => {
    stub(Employee, 'findAll')
      .callsFake(employeeMock.findAll);
    stub(Employee, 'create')
      .callsFake(employeeMock.create);
  });
  after(() => {
    Employee.findAll.restore();
    Employee.create.restore();
  })

  describe('quando os dados do `body` são válidos', () => {
    let postEmployee;
    let getEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(server)
          .post('/employees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            city: "TrybeCity",
            street: "Rua Teste",
            number: 42
          });
          console.log('test', postEmployee);
        const { body : { id } } = postEmployee;

        getEmployee = await chai.request(server)
          .get(`/employees/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    });

    it('retorna 201 - Created', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(201);
    });

    it('retorna um atributo `id`, que é um número', async () => {
      const { body: { id } } = postEmployee;

      expect(typeof id).to.be.equals("number");
    });

    it('retorna uma mensagem `Cadastrado com sucesso`', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Cadastrado com sucesso');
    });

    it('é possível consultar a pessoa criada através do `id` retornado', async () => {
      const { body: { id: postId } } = postEmployee;
      const { body: { id: getId } } = getEmployee;

      expect(postId).to.be.equals(getId);
    });

    it('essa consulta também retornou um atributo `addresses`, com pelo menos um item', async () => {
      const { body: { addresses } } = getEmployee;

      expect(addresses.length).to.be.greaterThanOrEqual(1);
    });
  });

  describe('quando os dados do `body` não são válidos', () => {
    let postEmployee;

    before(async () => {
      try{
        // removendo city
        postEmployee = await chai.request(server)
          .post('/employees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            street: "Rua Teste",
            number: 42
          });
      } catch (error) {
        console.error(error.message);
      }
    });

    it('retorna 500 - Internal Server Error', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(500);
    });

    it('retorna uma mensagem `Algo deu errado`', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Algo deu errado');
    });
  });  
}); */

describe('Rota GET /employees', () => {
  before(() => {
    stub(Employee, 'findAll')
        .callsFake(employeeMock.findAll);
  });

  after(() => {
      Employee.findAll.restore();
  });
  describe('consulta a lista de pessoas funcionárias', () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get('/employees');
      });
      
      it('Essa requisição deve retornar código de status 200', async () => {
        expect(response).to.have.status(200);
      });
      
      it('A requisição GET para a rota traz uma lista inicial contendo pessoas', async () => {
      expect(response.body).to.be.an("array");
    });
  });
});

describe('Rota POST /employees', () => {
  before(() => {
    stub(Employee, 'create')
      .callsFake(employeeMock.create);
    stub(Address, 'create')
      .callsFake(employeeMock.create);
      // console.log('test function', employeeMock.create);
    stub(Employee, 'findAll')
      .callsFake(employeeMock.findAll);
  });
  after(() => {
    Employee.create.restore();
    Employee.findAll.restore();
  })

  describe('Insere um novo registro', () => {
    let createRequest;
    let firstUserList;
    let secondUserList;
    const newUser = {
      firstName: "Rodrigo",
      lastName: "Oliveira",
      age: 30,
      city: "TrybeCity",
      street: "Rua Teste",
      number: 42
    };

  before(async () => {
    firstUserList = await chai
      .request(server)
      .get('/employees');
      // console.log('test firstUserList', firstUserList.body);
    createRequest = await chai
      .request(server)
      .post('/employees')
      .send(newUser);
      // console.log('test createRequest', createRequest.body);
    secondUserList = await chai
      .request(server)
      .get('/employees');
      console.log('test secondUserList', secondUserList.body);
  });

  it('firstUserList: A primeira requisição GET para a rota deve retornar 4 registros', () => {
    expect(firstUserList.body).to.have.length(4);
  });

  it('createRequest: A requisição POST para a rota retorna o código de status 201', () => {
    expect(createRequest).to.have.status(201);
  });

  it('createRequest: A requisição deve retornar um objeto no corpo da resposta', () => {
    expect(createRequest.body).to.be.a('object');
  });

  it('createRequest: O objeto possui a propriedade "message"', () => {
    expect(createRequest.body)
      .to.have.property('message');
  });

  it('createRequest: A propriedade "message" possui o texto "Cadastrado com sucesso"',
  () => {
    expect(createRequest.body.message)
      .to.be.equal('Cadastrado com sucesso');
  }
  );

  it('secondUserList: A segunda requisição GET para rota deve retornar, por tanto, 5 registros', () => {
    expect(secondUserList.body).to.have.length(5);
  });

  it('secondUserList: O registro criado deve corresponder ao enviado na requisição POST', () => {
    expect(secondUserList[4]).to.contain(newUser);
  })
  });
});