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

module.exports = {
  create,
};