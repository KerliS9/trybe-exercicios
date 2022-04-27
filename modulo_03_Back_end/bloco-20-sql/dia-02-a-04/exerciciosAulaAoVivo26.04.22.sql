USE sakila;
-- 1. Adicione os dois principais atores do novo filme Matrix na tabela actor;
SELECT * FROM actor
	ORDER BY actor_id DESC;
INSERT INTO actor(first_name, last_name)
	VALUES
    ('Keanu', 'Reeves'),
    ('Carrie-Anne', 'Moss');
-- 2. Adicione o filme Matrix 4 na tabela film;
SELECT * FROM film;
INSERT INTO film(title, language_id, rental_duration, rental_rate, replacement_cost)
	VALUES('Matrix 4', 1, 5, 5.00, 25.99);
-- 3. Faça a ligação na tabela film_actor destes registros inseridos anteriormente; 
SELECT * FROM film_actor
	ORDER BY film_id DESC;
INSERT INTO film_actor(actor_id, film_id)
	VALUES
		(205, 1001),
        (204, 1001);
-- 4. Insira na tabela inventory um registro com o id deste filme para a loja com id igual a 1;
SELECT * FROM inventory
	ORDER BY inventory_id DESC;
INSERT INTO inventory(film_id, store_id)
	VALUES 
		(1001, 1);
-- 5. Crie você como pessoa usuária na tabela customer (faça a associação do seu cadastro com um registro já existente na tabela address);
SELECT * FROM customer
	ORDER BY customer_id DESC;
INSERT INTO customer(store_id, first_name, last_name, address_id, active)
	VALUES (1, 'Kerli', 'Schroeder', 605, 1);
SELECT * FROM address
	ORDER BY address_id DESC;
-- 6. Insira os dados de aluguel na tabela rental deste filme, como sendo realizado a retirada do filme no dia 25/04/2022;
SELECT * FROM rental
	ORDER BY rental_id DESC;
INSERT INTO rental(rental_date, inventory_id, customer_id, staff_id)
    VALUES('2022-04-25 18:00:01', 4582, 600, 1);
-- 7. Faça a atualização com a devolução do filme no dia de hoje (26/04/2022) na tabela rental, no registro que foi inserido anteriormente (return_date);
UPDATE rental
	SET return_date = '2022-04-26 18:10:00'
	WHERE rental_id = 16050;
SELECT * FROM customer
	ORDER BY customer_id DESC;
-- 8. Faça o delete lógico (update) do seu usuário na tabela customer (mudar o status de active para 0);
UPDATE customer
	SET active = 0
    WHERE customer_id = 600;