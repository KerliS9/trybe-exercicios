USE sakila;
SELECT * FROM staff;
INSERT INTO staff(first_name, last_name, address_id, store_id, active, username)
	VALUES
		('Kerli', 'Schroeder', 5, 2, 1, 'Kerli'),
        ('Kerli', 'Schroeder', 4, 2, 1, 'Kerli');
INSERT INTO actor (first_name, last_name)
    SELECT first_name, last_name FROM staff
    LIMIT 2;
SELECT * FROM actor
	ORDER BY first_name;
SELECT * FROM category;
INSERT INTO category(name)
	VALUES
		('Sadness'),
        ('Political');
SELECT * FROM store;
INSERT INTO store(manager_staff_id, address_id)
	VALUES
		(3, 2),
        (4, 1);
SET SQL_SAFE_UPDATES = 0;
UPDATE category
	SET name = 'Science Fiction'
    WHERE name = 'Sci-Fi';
