-- exercicio 1
USE Pixar;
SELECT * FROM Movies;
SELECT * FROM BoxOffice; -- movie_id
SELECT * FROM Theater;
SELECT mo.title, bo.domestic_sales, bo.international_sales
	FROM Movies mo INNER JOIN BoxOffice bo
    ON mo.id = bo.movie_id;
-- exercicio 2
SELECT mo.title, bo.domestic_sales, bo.international_sales
	FROM Movies mo INNER JOIN BoxOffice bo
    ON mo.id = bo.movie_id
    WHERE bo.international_sales > bo.domestic_sales;
-- exercicio 3
SELECT mo.title, bo.rating
	FROM Movies mo INNER JOIN BoxOffice bo
    ON mo.id = bo.movie_id
    ORDER BY bo.rating DESC;
-- exercicio 6
SELECT mo.id, mo.title, mo.director, mo.year, mo.length_minutes, mo.theater_id
	FROM Movies mo INNER JOIN BoxOffice bo
    ON mo.id = bo.movie_id
	WHERE theater_id IS NOT NULL AND rating > 8;
-- view
CREATE VIEW top_10_movies AS
	SELECT mo.title, bo.rating
	FROM Movies mo INNER JOIN BoxOffice bo
    ON mo.id = bo.movie_id
    ORDER BY bo.rating DESC
    LIMIT 10;
SELECT * FROM top_10_movies;