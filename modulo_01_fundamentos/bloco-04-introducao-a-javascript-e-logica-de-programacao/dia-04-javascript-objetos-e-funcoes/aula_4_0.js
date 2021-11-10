//Exemplo 1
let diasDaSemana = {
	1: 'domingo',
	2: 'segunda',
	3: 'terça',
	4: 'quarta',
	5: 'quinta',
	6: 'sexta',
	7: 'sábado',
	};
	
	diasDaSemana.1; // SyntaxError: Unexpected number
	console.log(diasDaSemana['1']); // domingo

//Exemplo 2 - formas de acessar os objetos dentro das chaves
let conta = {
	agencia: '0000',
	banco: {
		cod: '012',
		id: 4,
		nome: 'TrybeBank',
	},
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

//exemplo 3 - informações adicionadas de forma encadeada
let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//exemplo 4 - objetos dentro da array
let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

//exercicio 1
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
	name: 'Marta',
	lastName: 'Silva',
	age: 34,
	medalsEarn: {
		golden: 2,
		silver: 3,
	}
}
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

let player = {
	name: 'Marta',
	lastName: 'Silva',
	age: 34,
	medalsEarn: {
		golden: 2,
		silver: 3,
		bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
	}
}

console.log(player.medalsEarn.bestInTheWorld);
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes.')
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.medalsEarn.bestInTheWorld.length + ' vezes.')

console.log('A jogadora possui ' + player.medalsEarn.golden + ' medalhas de ouro e ' + player.medalsEarn.silver + ' medalhas de prata.')