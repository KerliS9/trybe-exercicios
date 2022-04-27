USE PecasFornecedores;
SHOW TABLES;
SELECT * FROM Pecas
 WHERE name LIKE 'gr%';
SELECT * FROM Fornecimentos
	WHERE peca = 2
	ORDER BY Fornecedor;
SELECT * FROM Fornecimentos
	WHERE Fornecedor LIKE '%N%';
SELECT * FROM Fornecedores
	WHERE name LIKE '%LTDA'
    ORDER BY name DESC;
SELECT COUNT(*) FROM Fornecedores
	WHERE name LIKE '%F%';
SELECT * FROM Fornecimentos
	WHERE Preco BETWEEN 15 AND 40;
SELECT COUNT(order_date) FROM Vendas
	WHERE order_date BETWEEN '2018-04-15%' AND '2019-07-30%'
    ORDER BY order_date;