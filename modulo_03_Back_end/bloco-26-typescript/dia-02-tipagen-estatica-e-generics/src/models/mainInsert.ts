import readline from 'readline-sync';
// import { ResultSetHeader } from "mysql2";
import BookModel, { Book } from "./book";
import connection from './connection';

/* const main = async () => {
  const title = readline.question('Digite o nome do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
    [title, price, author, isbn]
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  console.log(insertId);
} */

const main = async () => {
  const bookModel = new BookModel(connection);

  const title = readline.question('Digite o título do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const newBook: Book = { title , price , author , isbn };

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook)
}

main();