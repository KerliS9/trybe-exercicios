USE SpotifyClone;
SHOW TABLES;
-- requisito 2
SELECT * FROM musicas; -- mu -- musica_id album_id
SELECT * FROM artistas; -- ar -- artista_id
SELECT * FROM albuns; -- al -- album_id artista_id
SELECT 
	COUNT(*) AS cancoes,
    COUNT(DISTINCT ar.artista_id) AS artistas,
    COUNT(DISTINCT mu.album_id) AS albuns
	FROM SpotifyClone.musicas AS mu 
    INNER JOIN SpotifyClone.albuns AS al ON mu.album_id = al.album_id
	INNER JOIN SpotifyClone.artistas AS ar ON ar.artista_id = al.artista_id;
-- requisito 3
SELECT * FROM usuarios; -- us -- usuario_id
SELECT * FROM musica_reproduzida; -- mp -- usuario_id --musica_id
SELECT * FROM musicas; -- mu -- musica_id -- duracao_segundos
SELECT 
	us.usuario AS usuario,
    COUNT(*) AS qtde_musicas_ouvidas,
    ROUND(SUM(duracao_segundos / 60), 2) AS total_minutos
    FROM SpotifyClone.usuarios AS us
    INNER JOIN SpotifyClone.musica_reproduzida AS mp ON us.usuario_id = mp.usuario_id
    INNER JOIN SpotifyClone.musicas AS mu ON mp.musica_id = mu.musica_id
    GROUP BY usuario;
-- requisito 4
SELECT * FROM usuarios; -- us -- usuario_id
SELECT * FROM musica_reproduzida; -- mp -- usuario_id --musica_id
-- IF (MAX(YEAR(mp.data_reproducao)) = 2021, 'Usuário ativo', 'Usuário inativo') AS condicao_usuario
SELECT 
	us.usuario AS usuario,
    CASE 
		WHEN MAX(YEAR(mp.data_reproducao)) = 2021 THEN 'Usuário ativo' ELSE 'Usuário inativo' END AS condicao_usuario
    FROM SpotifyClone.usuarios AS us
    LEFT JOIN SpotifyClone.musica_reproduzida AS mp ON us.usuario_id = mp.usuario_id
    GROUP BY us.usuario
    ORDER BY us.usuario;
-- requisito 5
SELECT * FROM musicas; -- mu -- musica_id
SELECT * FROM musica_reproduzida; -- mp --musica_id
SELECT 
	mu.musica AS cancao,
    COUNT(mp.usuario_id) AS reproducoes
    FROM SpotifyClone.musicas AS mu
    LEFT JOIN SpotifyClone.musica_reproduzida AS mp ON mu.musica_id = mp.musica_id
    GROUP BY mu.musica
    ORDER BY reproducoes DESC, mu.musica
    LIMIT 2;
-- requisito 6
SELECT * FROM planos; -- pl -- plano_id
SELECT * FROM usuarios; -- us -- plano_id
SELECT 
	MIN(pl.valor_plano) AS faturamento_minimo,
    MAX(pl.valor_plano) AS faturamento_maximo,
    ROUND(AVG(pl.valor_plano), 2) AS faturamento_medio,
    SUM(pl.valor_plano) AS faturamento_total
    FROM SpotifyClone.planos AS pl
    INNER JOIN SpotifyClone.usuarios AS us ON pl.plano_id = us.plano_id;
-- requisito 7
SELECT * FROM artistas; -- ar -- artista_id
SELECT * FROM albuns; -- al -- album_id artista_id
SELECT * FROM usuario_artista; -- us -- usuario_id artista_id
SELECT 
	ar.artista AS artista,
    al.album AS album,
    COUNT(us.usuario_id) AS seguidores
    FROM SpotifyClone.artistas AS ar
    INNER JOIN SpotifyClone.albuns AS al ON ar.artista_id = al.artista_id
    INNER JOIN SpotifyClone.usuario_artista AS us ON ar.artista_id = us.artista_id
    GROUP BY al.album, ar.artista
    ORDER BY seguidores DESC, ar.artista, al.album;
-- requisito 8
SELECT * FROM artistas; -- ar -- artista_id
SELECT * FROM albuns; -- al -- album_id artista_id
SELECT
	ar.artista AS artista,
    al.album AS album
    FROM SpotifyClone.artistas AS ar
    INNER JOIN SpotifyClone.albuns AS al ON ar.artista_id = al.artista_id
    WHERE ar.artista = 'Walter Phoenix'
    ORDER BY al.album;
-- requisito 9
SELECT * FROM musica_reproduzida; -- mp -- usuario_id
SELECT * FROM usuarios; -- us -- usuario_id
SELECT 
	COUNT(mp.musica_id) AS quantidade_musicas_no_historico
    FROM SpotifyClone.musica_reproduzida AS mp
    INNER JOIN SpotifyClone.usuarios AS us ON mp.usuario_id = us.usuario_id
    WHERE us.usuario = 'Bill';
-- requisito 10
SELECT * FROM musicas; -- mu -- musica_id, 
SELECT * FROM musica_reproduzida; -- mp -- usuario_id, musica_id
SELECT * FROM usuarios; -- us -- usuario_id, plano_id
SELECT * FROM planos; -- pl -- plano_id
SELECT
	mu.musica AS nome,
    COUNT(mp.musica_id) AS reproducoes
    FROM SpotifyClone.musicas AS mu
    INNER JOIN SpotifyClone.musica_reproduzida AS mp ON mu.musica_id = mp.musica_id
    INNER JOIN SpotifyClone.usuarios AS us ON mp.usuario_id = us.usuario_id
    INNER JOIN SpotifyClone.planos AS pl ON us.plano_id = pl.plano_id
    WHERE pl.plano = 'pessoal' OR pl.plano = 'gratuito'
    GROUP BY nome;
-- requisito 11
SELECT * FROM musicas; -- mu -- musica
SELECT
	musica AS nome_musica,
    CASE
		WHEN musica LIKE '%Streets' THEN REPLACE(musica, 'Streets', 'Code Review')
        WHEN musica LIKE '%Her Own' THEN REPLACE(musica, 'Her Own', 'Trybe')
        WHEN musica LIKE '%Inner Fire' THEN REPLACE(musica, 'Inner Fire', 'Project')
        WHEN musica LIKE '%Silly' THEN REPLACE(musica, 'Silly', 'Nice')
        WHEN musica LIKE '%Circus' THEN REPLACE(musica, 'Circus', 'Pull Request')
        ELSE musica
	END AS novo_nome
    FROM SpotifyClone.musicas
    WHERE musica LIKE '%Streets' 
		OR musica LIKE '%Her Own'
        OR musica LIKE '%Inner Fire'
        OR musica LIKE '%Silly'
        OR musica LIKE '%Circus'
    ORDER BY nome_musica;
