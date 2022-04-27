USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;
SELECT title, description, release_year, replacement_cost, rating FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;
SELECT COUNT(*) FROM customer
WHERE active IS TRUE AND store_id = 1;
SELECT * FROM customer
WHERE active IS FALSE AND store_id = 1;
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
-- select com like
SELECT * FROM film
WHERE title LIKE '%ace%';
SELECT * FROM film
WHERE description LIKE '%china';
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
SELECT * FROM film
WHERE title LIKE '___gon%';
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%documentary%';
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
-- select com in e between
SELECT * FROM payment
WHERE rental_id IN (269, 239, 126, 399, 142);
SELECT * FROM address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
SELECT * FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');
SELECT * FROM address
WHERE address_id BETWEEN 172 AND 176;
SELECT * FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
SELECT * FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
-- DATE E DATETIME
SELECT * FROM payment
WHERE DATE(payment_date) = '2005-05-25';
SELECT COUNT(*) FROM payment
WHERE payment_date LIKE '2005-05-25%';
SELECT DATE(rental_id) FROM rental
WHERE rental_id = 10330;
SELECT MINUTE(rental_id) FROM rental
WHERE rental_id = 10330;
SELECT * FROM payment
WHERE payment_date LIKE '2005-07-28 22%';