USE sakila;
SELECT * FROM staff;
SELECT COUNT(password) FROM staff;
SELECT COUNT(staff_id) FROM staff;
SELECT COUNT(email) FROM staff;
SELECT COUNT(*) FROM rental;
SELECT * FROM rental;
# Query + LIMIT quantidade_de_resultados
SELECT * FROM rental LIMIT 10;
# Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
SELECT * FROM rental LIMIT 10 OFFSET 3;
SELECT * FROM actor;
SELECT * FROM actor LIMIT 10 OFFSET 5;
SELECT * FROM address
ORDER BY district ASC, address DESC;