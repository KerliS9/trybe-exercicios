USE sakila;
-- exercicio 1
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT act.actor_id, act.first_name, fil.film_id
	FROM actor AS act INNER JOIN film_actor AS fil
    ON act.actor_id = fil.actor_id;
-- exercicio 2
SELECT * FROM staff;
SELECT * FROM address;
SELECT st.first_name, st.last_name, ad.address
	FROM staff AS st INNER JOIN address AS ad
    ON st.address_id = ad.address_id;
-- exercicio 3
SELECT * FROM address;
SELECT * FROM customer;
SELECT cu.customer_id, cu.first_name, cu.email, ad.address_id, ad.address
	FROM customer cu INNER JOIN address ad
    ON cu.address_id = ad.address_id
    ORDER BY cu.first_name DESC
    LIMIT 100;
-- exercicio 4
SELECT cu.first_name, cu.email, ad.address_id, ad.address, ad.district
	FROM customer cu INNER JOIN address ad
    WHERE ad.district = 'California' AND cu.first_name LIKE '%rene%';
-- exercicio 5
SELECT * FROM address;
SELECT * FROM customer;
SELECT cu.first_name, COUNT(ad.address) AS quantidade_endereco
	FROM customer cu INNER JOIN address ad
    ON cu.address_id = ad.address_id
    WHERE cu.active = 1
    GROUP BY cu.first_name
    ORDER BY cu.first_name DESC;
-- exercicio 6
SELECT * FROM payment;
SELECT * FROM staff;
SELECT st.first_name, st.last_name, AVG(pa.amount) AS media_payment
	FROM staff st INNER JOIN payment pa
    ON st.staff_id = pa.staff_id
    WHERE YEAR(pa.payment_date) = 2006
    GROUP BY st.staff_id;
-- exercicio 7
SELECT * FROM actor; -- actor id
SELECT * FROM film_actor;
SELECT * FROM film; -- film id
SELECT ac.actor_id, ac.first_name, fi.film_id, fi.title
	FROM actor ac INNER JOIN film_actor fa ON ac.actor_id = fa.actor_id
    INNER JOIN film AS fi ON fi.film_id = fa.film_id;
-- LEFT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
-- RIGHT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
-- INNER JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;