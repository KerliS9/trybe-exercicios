USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT * FROM film;
SELECT title, description, release_year FROM film;
SHOW TABLES;
SELECT CONCAT(first_name, last_name) FROM sakila.actor;
-- Seu resultado ficou estranho? Eu também achei! Tente agora a query a seguir.
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
-- Muito melhor, certo? Mas dá para melhorar? Dá!
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM film;