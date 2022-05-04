USE sakila;
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT act.actor_id, act.first_name, fil.film_id
	FROM actor AS act INNER JOIN film_actor AS fil
    ON act.actor_id = fil.actor_id;

SELECT * FROM staff;
SELECT * FROM address;
SELECT st.first_name, st.last_name, ad.address
	FROM staff AS st INNER JOIN address AS ad
    ON st.address_id = ad.address_id;
    
SELECT * FROM address;
SELECT * FROM customer;
SELECT cu.customer_id, cu.first_name, cu.email, ad.address_id, ad.address
	FROM customer cu INNER JOIN address ad
    ON cu.address_id = ad.address_id
    ORDER BY cu.first_name DESC
    LIMIT 100;

SELECT cu.first_name, cu.email, ad.address_id, ad.address, ad.district
	FROM customer cu INNER JOIN address ad
    WHERE ad.district = 'California' AND cu.first_name LIKE '%rene%';
    
SELECT * FROM payment;
SELECT * FROM staff;
SELECT st.first_name, st.last_name, AVG(pa.amount) AS media_payment
	FROM staff st INNER JOIN payment pa
    ON st.staff_id = pa.staff_id
    WHERE YEAR(pa.payment_date) = 2006
    GROUP BY st.staff_id;
