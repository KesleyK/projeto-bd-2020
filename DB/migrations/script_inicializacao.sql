drop database if exists bd_2020;

create database bd_2020;

use bd_2020;

CREATE TABLE instituicao (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cnpj VARCHAR(15) NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE tipo_instituicao (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE mapa_tipo_instituicao (
	instituicao_id INTEGER UNSIGNED UNIQUE,
    tipo_instituicao_id INTEGER UNSIGNED,
    FOREIGN KEY(instituicao_id) references instituicao(id) ON DELETE CASCADE,
    FOREIGN KEY(tipo_instituicao_id) references tipo_instituicao(id) ON DELETE CASCADE
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

CREATE TABLE sobre_covid (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(60) NOT NULL,
    tipo ENUM('transmissao', 'sintoma', 'cuidado') NOT NULL
);

CREATE TABLE descricao_sobre_covid (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    descricao_txt TEXT NOT NULL,
    instituicao_id INTEGER UNSIGNED,
    sobre_covid_id INTEGER UNSIGNED,
    FOREIGN KEY(instituicao_id) references instituicao(id) ON DELETE CASCADE,
    FOREIGN KEY(sobre_covid_id) references sobre_covid(id) ON DELETE CASCADE
);

CREATE TABLE noticias (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(400) NOT NULL,
    url_imagem VARCHAR(60) NOT NULL,
    instituicao_id INTEGER UNSIGNED,
    FOREIGN KEY(instituicao_id) references instituicao(id) ON DELETE CASCADE
);

CREATE TABLE tipo_usuario (
	id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE mapa_tipo_usuario (
	usuario_id INTEGER UNSIGNED UNIQUE,
    tipo_usuario_id INTEGER UNSIGNED,
    FOREIGN KEY(usuario_id) references usuario(id) ON DELETE CASCADE,
    FOREIGN KEY(tipo_usuario_id) references tipo_usuario(id) ON DELETE CASCADE
);
