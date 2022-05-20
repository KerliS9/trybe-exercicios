const Author = require('../models/Author');
const { isValid } = require('../schemas/AuthorSchema');

/* const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
}; */ // Fica na camada de model, por não ser uma regra de negócio

// const isValid = (firstName, middleName, lastName) => {
/*   if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false; 
  return true */
/*   if (!firstName || typeof firstName !== 'string') return { message: 'First name é obrigatório'};
  if (!lastName || typeof lastName !== 'string') return { message: 'Last name é obrigatório'};
  if (middleName && typeof middleName !== 'string') return { message: 'Middle name deve ser no formato de texto'};

  return {};
}; */ // foi separado dentro de arquivo para apenas validar as informações

const getAll = async () => {
  const authors = await Author.getAll();

  return authors;
  // .map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);
  if (!author) return null;
  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  // const validAuthor = isValid(firstName, middleName, lastName);
  // if (!validAuthor) return false;
  /* if (!firstName || typeof firstName !== 'string') return { message: 'First name é obrigatório'};
  if (!lastName || typeof lastName !== 'string') return { message: 'Last name é obrigatório'};
  if (middleName && typeof middleName !== 'string') return { message: 'Middle name deve ser no formato de texto'}; */

  const existingAuthor = await Author.findByName(firstName, middleName, lastName);
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  const validations = isValid(firstName, middleName, lastName);
  if(validations.message) return validations;

  const [author] = await Author.createAuthor(firstName, middleName, lastName);
  return author;
  /* return getNewAuthor({
    id: author.id,
    firstName,
    middleName,
    lastName,
  }); */
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};