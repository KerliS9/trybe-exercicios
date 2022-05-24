const connectionMovies = require('./connectionMovies');

const createMovie = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connectionMovies
    .execute(
      "INSERT INTO db_movies.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );
    // console.log('moviesModel', result);

  return {
    id: result.insertId,
  };
};

module.exports = {
  createMovie,
};