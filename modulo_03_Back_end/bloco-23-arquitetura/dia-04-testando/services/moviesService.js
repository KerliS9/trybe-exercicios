const MoviesModel = require('../models/moviesModel');

const changedToCamelCase = (movieData) => ({
	id: movieData.id,
	firstName: movieData.title,
	middleName: movieData.directed_by,
	lastName: movieData.release_year,
});

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .createMovie({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getMovieById = async (id) => {
  const movie = await MoviesModel.getMovieById(id);
  console.log('service', movie);
  if (movie.length === 0) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um filme com o id ${id}`,
      },
    };
  }
  return movie.map(changedToCamelCase);
}

module.exports = {
  create,
  getMovieById,
};