// exercício 1 - Dada uma matriz, transforme em um array
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.flat();
}
console.log(flatten(arrays)); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

function flatten2() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flatten2(arrays));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// exercício 2 - Crie uma string com os nomes de todas as pessoas autoras
function authorName() {
  const arrName = books.reduce((acc, book) => {
    return `${acc} ${book.author.name}, `;
}, '');
  return arrName;
}
console.log(authorName());

// exercício 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  const age = books.reduce((acc, book) => (
    acc + (book.releaseYear - book.author.birthYear)
  ), 0);
  console.log(age);
  return age / books.length;
}
console.log(averageAge())

// exercício 4 - Encontre o livro com o maior nome
function longestNameBook() {
  return books.reduce((acc, book) => {
    if(book.name.length > acc.name.length) {
      return book;
    }
    return acc;
  });
}
console.log(longestNameBook());

// exercício 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => 
    acc + curr.split('').reduce((acc, curr) => {
      if(curr === 'a' || curr === 'A') 
        return acc + 1;
        return acc;
      }, 0), 0);
}
console.log(containsA());

// exercício 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } 
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const newArr = students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce((acc, curr) => acc + curr) / grades[index].length),
  }));
  return newArr;
}
console.log(studentAverage())