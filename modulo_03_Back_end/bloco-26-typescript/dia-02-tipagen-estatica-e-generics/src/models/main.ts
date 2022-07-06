import connection  from './connection';
import BookModel from "./book";

/* const main = async () => {
  const result = await connection.execute('SELECT * FROM books');
  const [rows] = result;
  console.log(rows);
} */

const main = async () => {
  const bookModel = new BookModel(connection);

  const books = await bookModel.getAll();
  console.log(books)
}

main();

/* [
  {
    id: 1,
    title: 'Código Limpo',
    price: '125.90',
    author: 'Robert C Martin',
    isbn: '8576082675'
  },
  {
    id: 2,
    title: 'Refatoração',
    price: '129.90',
    author: 'Martin Fowler',
    isbn: '8575227246'
  },
  {
    id: 3,
    title: 'Padrões de Projetos',
    price: '141.98',
    author: 'Erich Gamma',
    isbn: '8573076100'
  }
] */