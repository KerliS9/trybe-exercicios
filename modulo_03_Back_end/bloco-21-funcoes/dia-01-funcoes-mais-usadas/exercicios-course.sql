SELECT SUBSTRING('Oi, eu sou uma string', 4);
SELECT SUBSTRING('Oi, eu sou uma string', 3, 2);
SELECT RIGHT('Oi, eu sou uma string', 6);
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1; -- 'ACADEMY'
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1; -- 'DINOSAUR'
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1; -- 'EM'
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1; -- 'EMY DINOSAUR'

SELECT UCASE ('trybe');
SELECT REPLACE ('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT CHAR_LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

USE sakila;
SELECT * FROM film;
SELECT film_id, title, IF( title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') FROM film;
SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS 'Público alvo'
FROM film;

SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

SELECT IF(15 MOD 2 = 0, 'Par', 'Ìmpar') AS 'Par ou Ímpar';
SELECT 220 DIV 12;
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM ', 220 MOD 12));
SELECT IF(220 MOD 12 = 0, 'SIM', (220 MOD 12));

-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);

SELECT DATEDIFF('2030-01-20', '2022-05-02');
SELECT TIMEDIFF('10:25:45', '11:00:00');

-- Usando a coluna replacement_cost (valor de substituição), vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

SELECT * FROM sakila.film;
SELECT AVG(length) AS media_de_duracao FROM film;
SELECT MIN(length) AS duracao_minima FROM film;
SELECT MAX(length) AS duracao_maxima FROM film;
SELECT SUM(length) AS tempo_de_exibicao_total FROM film;
SELECT COUNT(title) AS filmes_registrados FROM film;

SELECT first_name FROM sakila.actor
	GROUP BY first_name;
SELECT first_name, COUNT(*) FROM sakila.actor
	GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
	FROM sakila.film
	GROUP by rating;
-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
	FROM sakila.film
	GROUP by rating;
SELECT COUNT(first_name) AS status FROM sakila.customer GROUP BY active;
USE sakila;
SELECT * FROM customer;
SELECT store_id, active, COUNT(*) FROM customer GROUP BY active;
SELECT AVG(rental_duration),rating FROM film GROUP BY rating ORDER BY rental_duration DESC;
SELECT district, COUNT(*) FROM address GROUP BY district ORDER BY COUNT(*) DESC;

SELECT rating, AVG(length) AS duracao_media
    FROM sakila.film
    GROUP BY rating HAVING duracao_media BETWEEN 115.0 AND 121.5 ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) AS custo_reproducao
    FROM sakila.film
    GROUP by rating HAVING custo_reproducao > 3950.50 ORDER BY custo_reproducao DESC;