insert into instituicao (id, cnpj, nome) values (1,'79877185000177', 'Universidade de Brasília');
insert into instituicao (id, cnpj, nome) values (2,'51749105000189', 'Stellar Computer');
insert into instituicao (id, cnpj, nome) values (3,'81866772000102', 'Sound Art');
insert into instituicao (id, cnpj, nome) values (4,'98208314000189', 'Game Sky');
insert into instituicao (id, cnpj, nome) values (5,'03434760000103', 'Empire Geek');

insert into tipo_instituicao (id, tipo) values (1, 'Escola');
insert into tipo_instituicao (id, tipo) values (2, 'Faculdade');
insert into tipo_instituicao (id, tipo) values (3, 'Empresarial');
insert into tipo_instituicao (id, tipo) values (4, 'Estatal');
insert into tipo_instituicao (id, tipo) values (5, 'Religioso');

insert mapa_tipo_instituicao (instituicao_id, tipo_instituicao_id) values (1,4);
insert mapa_tipo_instituicao (instituicao_id, tipo_instituicao_id) values (2,3);
insert mapa_tipo_instituicao (instituicao_id, tipo_instituicao_id) values (3,5);
insert mapa_tipo_instituicao (instituicao_id, tipo_instituicao_id) values (4,1);
insert mapa_tipo_instituicao (instituicao_id, tipo_instituicao_id) values (5,2);

insert into usuario (id, nome, instituicao_id, email, senha) value (1, 'Filipe Veríssimo Barreira', 3, "felipe@email.com", "$2a$09$jxy8sA8/C8lGj2cGcahbWu4gDKiw9OrC37MNdtfFWHUXzy2peZChe");
insert into usuario (id, nome, instituicao_id, email, senha) value (2, 'Alexandre Urias Fragoso', 5, "alexandre@email.com", "$2a$09$jxy8sA8/C8lGj2cGcahbWu4gDKiw9OrC37MNdtfFWHUXzy2peZChe");
insert into usuario (id, nome, instituicao_id, email, senha) value (3, 'Maksym Lessa Fortes', 2, "maksym@email.com", "$2a$09$jxy8sA8/C8lGj2cGcahbWu4gDKiw9OrC37MNdtfFWHUXzy2peZChe");
insert into usuario (id, nome, instituicao_id, email, senha) value (4, 'Agostinho Tavares Corte-Real', 1, "agostinho@email.com", "$2a$09$jxy8sA8/C8lGj2cGcahbWu4gDKiw9OrC37MNdtfFWHUXzy2peZChe");
insert into usuario (id, nome, instituicao_id, email, senha) value (5, 'Adriele Brites Sobral', 4, "adriele@email.com", "$2a$09$jxy8sA8/C8lGj2cGcahbWu4gDKiw9OrC37MNdtfFWHUXzy2peZChe");

insert into mensagem (id, text_msg, usuario_id, instituicao_id) values (1, 'A paz mundial não é somente possível, mas inevitável.', 2, 4);
insert into mensagem (id, text_msg, usuario_id, instituicao_id) values (2, 'Note que a vulnerabilidade é no processo de geração de chaves.', 5, 1);
insert into mensagem (id, text_msg, usuario_id, instituicao_id) values (3, 'Uma pequena relíquia descoberta incrível e misteriosamente intacta.', 1, 2);
insert into mensagem (id, text_msg, usuario_id, instituicao_id) values (4, 'Só achei que daria uma história interessante.', 4, 3);
insert into mensagem (id, text_msg, usuario_id, instituicao_id) values (5, 'O herói misterioso voltou a fazer um salvamento.', 3, 5);

insert into sobre_covid (id, titulo, tipo) values (1, "Titulo #1", "sintoma");
insert into sobre_covid (id, titulo, tipo) values (2, "Titulo #2", "cuidado");
insert into sobre_covid (id, titulo, tipo) values (3, "Titulo #3", "cuidado");
insert into sobre_covid (id, titulo, tipo) values (4, "Titulo #4", "transmissao");
insert into sobre_covid (id, titulo, tipo) values (5, "Titulo #5", "sintoma");

insert into descricao_sobre_covid (id, descricao_txt, instituicao_id, sobre_covid_id) values (1, "Descriçãp #1", 3, 1);
insert into descricao_sobre_covid (id, descricao_txt, instituicao_id, sobre_covid_id) values (2, "Descrição #2", 5, 3);
insert into descricao_sobre_covid (id, descricao_txt, instituicao_id, sobre_covid_id) values (3, "Descrição #3", 1, 5);
insert into descricao_sobre_covid (id, descricao_txt, instituicao_id, sobre_covid_id) values (4, "Descrição #4", 4, 2);
insert into descricao_sobre_covid (id, descricao_txt, instituicao_id, sobre_covid_id) values (5, "Descrição #5", 2, 4);

insert into noticias (id, titulo, descricao, url_imagem, instituicao_id) values (1, 'Profissionais contam como combater o desperdício de alimentos', 'Mauris a arcu mauris.', 'https://pt.stackoverflow.com',3);
insert into noticias (id, titulo, descricao, url_imagem, instituicao_id) values (2, 'ONG transforma bazar de fim de ano em evento online', 'consectetur eget non diam. Morbi placerat, quam ', 'http://devfuria.com.br',5);
insert into noticias (id, titulo, descricao, url_imagem, instituicao_id) values (3, 'Japão vai limitar turismo após recorde de casos de coronavírus', 'Aliquam erat volutpat', 'https://www.webcodegeeks.com',1);
insert into noticias (id, titulo, descricao, url_imagem, instituicao_id) values (4, 'Aproveite cupons de desconto em diversos produtos eletrônicos', 'Cras id risus venenatis, rhoncus urna vel', 'https://www.oberlo.com.br',2);
insert into noticias (id, titulo, descricao, url_imagem, instituicao_id) values (5, 'Ataque com morteiros em Cabul deixa 8 mortos e 31 feridos', 'Aenean non malesuada odio.', 'https://bitbucket.org',4);

insert into tipo_usuario (id, tipo) values (1, 'Administrador');
insert into tipo_usuario (id, tipo) values (2, 'Professor');
insert into tipo_usuario (id, tipo) values (3, 'Aluno');
insert into tipo_usuario (id, tipo) values (4, 'Diretor');
insert into tipo_usuario (id, tipo) values (5, 'Desenvolvedor');


insert into mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (1,2);
insert into mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (2,3);
insert into mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (3,3);
insert into mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (4,1);
insert into mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (5,2);