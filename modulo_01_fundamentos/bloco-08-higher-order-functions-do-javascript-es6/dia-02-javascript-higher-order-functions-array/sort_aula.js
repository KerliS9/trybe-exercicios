const estudantes = [
  {
    nome: 'Joel',
    Projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Mica',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Hugonardo',
    Projeto: 'Trybewarts',
    status: 97,
  },
  {
    nome: 'Aninha',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Joicy',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald',
    Projeto: 'Trybewarts',
    status: 75,
  },
];

// 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.

// escreva sua função aqui.
const ordenarEstudantes = (arr) => {
	arr.sort((a,b) => {
		if (a.nome === b.nome) { // compara entre todos os elementos
			return 0; // são iguais, não troca as posições
		}
		if (a.nome > b.nome) {
			return 1; // troca as posições
		}
		return -1; // não troca as posições, mesmo que diferentes
	});
};
ordenarEstudantes(estudantes);
console.log(estudantes);

// 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.

// escreva sua função aqui.
