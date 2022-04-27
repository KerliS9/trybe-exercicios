SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT 12 % 5;
SELECT * FROM Scientists.Scientists;
USE Scientists;
SELECT * FROM Projects;
SELECT name AS 'Nome do projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
SELECT * FROM Scientists
ORDER BY name;
SELECT * FROM Projects
ORDER BY name DESC;
SELECT CONCAT('O projeto ', name,' precisou de ', hours, ' para ser concluído') FROM Projects;
SELECT name, hours FROM Projects
ORDER BY hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT name, hours FROM Projects
ORDER BY hours DESC LIMIT 1;
SELECT name, hours FROM Projects
ORDER BY hours ASC LIMIT 1 OFFSET 1;
SELECT name, hours FROM Projects
ORDER BY hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists') FROM Scientists;
SELECT COUNT(Name) FROM Scientists;