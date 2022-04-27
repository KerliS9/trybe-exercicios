SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;
SELECT * FROM sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT * FROM sakila.actor
ORDER BY last_name DESC, first_name ASC;
SELECT * FROM sakila.language;
SELECT DISTINCT name='English' FROM sakila.language;
SELECT * FROM sakila.language;
SELECT * FROM sakila.language LIMIT 10 OFFSET 1;
SELECT * FROM sakila.film;
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC LIMIT 20;