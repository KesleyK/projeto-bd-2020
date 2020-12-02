drop database if exists bd_2020;

create database bd_2020;

use bd_2020;

CREATE TABLE instituicao (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cnpj VARCHAR(15) NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE usuario (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    instituicao_id INTEGER UNSIGNED,
    email VARCHAR(70) NOT NULL UNIQUE,
    senha VARCHAR (105) NOT NULL,
    FOREIGN KEY(instituicao_id) references instituicao(id) ON DELETE CASCADE
);

CREATE TABLE mensagem (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    text_msg VARCHAR(201) NOT NULL,
    usuario_id INTEGER UNSIGNED,
    instituicao_id INTEGER UNSIGNED,
    FOREIGN KEY(instituicao_id) references instituicao(id) ON DELETE CASCADE,
    FOREIGN KEY(usuario_id) references usuario(id) ON DELETE CASCADE
);

CREATE TABLE sobre (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `status` INT NOT NULL,
    instituicao_id INTEGER UNSIGNED,
    FOREIGN KEY(instituicao_id) references instituicao(id)

);

CREATE TABLE transmissao (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(60) NOT NULL,
    descricao VARCHAR(400) NOT NULL,
    sobre_id INTEGER UNSIGNED,
    FOREIGN KEY(sobre_id) references sobre(id)
);

CREATE TABLE sintomas (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(60) NOT NULL,
    descricao VARCHAR(400) NOT NULL,
    sobre_id INTEGER UNSIGNED,
    FOREIGN KEY(sobre_id) references sobre(id)
);

CREATE TABLE cuidados (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(60) NOT NULL,
    descricao VARCHAR(400) NOT NULL,
    sobre_id INTEGER UNSIGNED,
    FOREIGN KEY(sobre_id) references sobre(id)
);

CREATE TABLE noticias (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(400) NOT NULL,
    url_imagem VARCHAR(60) NOT NULL,
    instituicao_id INTEGER UNSIGNED,
    FOREIGN KEY(instituicao_id) references instituicao(id)
);

CREATE TABLE tipo_usuario (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE mapa_tipo_usuario (
	usuario_id INTEGER UNSIGNED,
    tipo_usuario_id INTEGER UNSIGNED,
    FOREIGN KEY(usuario_id) references usuario(id) ON DELETE CASCADE,
    FOREIGN KEY(tipo_usuario_id) references tipo_usuario(id) ON DELETE CASCADE
);
