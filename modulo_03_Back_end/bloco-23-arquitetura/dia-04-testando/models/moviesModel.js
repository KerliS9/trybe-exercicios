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

const getMovieById = (id) => {
  const query = 'SELECT id, title, directed_by, releaseYear FROM db_movies.movies WHERE id = ?;';
  const [movie] = connectionMovies.execute(query, [id]);
  console.log('model', movie);
  if(movie.length === 0) return null;
  const { title, directedBy, releaseYear } = movie[0];

  return {
    id,
    title,
    directedBy,
    releaseYear,
  };
}

module.exports = {
  createMovie,
  getMovieById,
};