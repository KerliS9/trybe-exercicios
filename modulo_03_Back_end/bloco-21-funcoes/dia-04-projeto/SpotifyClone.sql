DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

CREATE TABLE SpotifyClone.usuarios(
    usuario_id int unsigned NOT NULL AUTO_INCREMENT,
    usuario varchar(50) NOT NULL,
    idade tinyint NOT NULL,
    plano_id tinyint unsigned NOT NULL,
    data_assinatura date NOT NULL,
    PRIMARY KEY (usuario_id),
    FOREIGN KEY (plano_id) REFERENCES planos (plano_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.planos(
    plano_id tinyint unsigned NOT NULL AUTO_INCREMENT,
    plano varchar(50) NOT NULL,
    valor_plano decimal(3,2) NOT NULL,
    PRIMARY KEY (plano_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.artistas(
    artista_id int unsigned NOT NULL AUTO_INCREMENT,
    artista varchar(100) NOT NULL,
    PRIMARY KEY (artista_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.albuns(
    album_id int unsigned NOT NULL AUTO_INCREMENT,
    album varchar(100) NOT NULL,
    ano_lancamento smallint(5) NOT NULL,
    artista_id int unsigned NOT NULL,
    PRIMARY KEY (album_id),
    FOREIGN KEY (artista_id) REFERENCES artistas (artista_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.musicas(
    musica_id int unsigned NOT NULL AUTO_INCREMENT,
    musica varchar(200) NOT NULL,
    duracao_segundos smallint(5) NOT NULL,
    album_id int unsigned NOT NULL,
    PRIMARY KEY (musica_id),
    FOREIGN KEY (album_id) REFERENCES albuns (album_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.usario_artista(
    id_usuario_artista int unsigned NOT NULL AUTO_INCREMENT,
    usuario_id int unsigned NOT NULL,
    artista_id int unsigned NOT NULL,
    PRIMARY KEY (id_usuario_artista),
    FOREIGN KEY (usuario_id) REFERENCES usuarios (usuario_id),
    FOREIGN KEY (artista_id) REFERENCES artistas (artista_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.musica_reproduzida(
    id_usuario_musica int unsigned NOT NULL AUTO_INCREMENT,
    usuario_id int unsigned NOT NULL,
    musica_id int unsigned NOT NULL,
    data_reproducao datetime NOT NULL,
    PRIMARY KEY (id_usuario_musica),
    FOREIGN KEY (usuario_id) REFERENCES usuarios (usuario_id),
    FOREIGN KEY (musica_id) REFERENCES musicas (musica_id)
) engine = InnoDB;

INSERT INTO SpotifyClone.usuarios (usuario, idade, plano_id, data_assinatura)
VALUES
  ('Thati', 23, 1, '2019-10-20'),
  ('Cintia', 35, 2, '2017-12-30'),
  ('Bill', 20, 3, '2019-06-05'),
  ('Roger', 45, 4, '2020-05-13'),
  ('Norman', 58, 4, '2017-02-17'),
  ('Patrick', 33, 2, '2017-01-06'),
  ('Vivian', 26, 3, '2018-01-05'),
  ('Carol', 19, 3, '2018-02-14'),
  ('Angelina', 42, 2, '2018-04-29'),
  ('Paul', 46, 2, '2017-01-17');

INSERT INTO SpotifyClone.planos (plano, valor_plano)
VALUES
  ('gratuito', '0.00'),
  ('familiar', '7.99'),
  ('universitário', '5.99'),
  ('pessoal', '6.99');
  
INSERT INTO SpotifyClone.artistas (artista)
VALUES
  ('Walter Phoenix'),
  ('Peter Strong'),
  ('Lance Day'),
  ('Freedie Shannon'),
  ('Tyler Isle'),
  ('Fog');
  
INSERT INTO SpotifyClone.albuns (album, ano_lancamento, artista_id)
VALUES
  ('Envious', 1990, 1),
  ('Exuberant', 1993, 1),
  ('Hallowed Steam', 1995, 2),
  ('Incandescent', 1998, 3),
  ('Temporary Culture', 2001, 4),
  ('Library of liberty', 2003, 4),
  ('Chained Down', 2007, 5),
  ('Cabinet of fools', 2012, 5),
  ('No guarantees', 2015, 5),
  ('Apparatus', 2015, 6);

INSERT INTO SpotifyClone.musicas (musica, duracao_segundos, album_id)
VALUES
  ('Envious', 1990, 1);