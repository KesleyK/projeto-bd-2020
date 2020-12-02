insert into instituicao (id, cnpj, nome) values (1,'79877185000177', 'Universidade de Brasília');
insert into instituicao (id, cnpj, nome) values (2,'51749105000189', 'Stellar Computer');
insert into instituicao (id, cnpj, nome) values (3,'81866772000102', 'Sound Art');
insert into instituicao (id, cnpj, nome) values (4,'98208314000189', 'Game Sky');
insert into instituicao (id, cnpj, nome) values (5,'03434760000103', 'Empire Geek');

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

insert into sobre (id, `status`, instituicao_id) values (1, 0, 3);
insert into sobre (id, `status`, instituicao_id) values (2, 1, 5);
insert into sobre (id, `status`, instituicao_id) values (3, 1, 1);
insert into sobre (id, `status`, instituicao_id) values (4, 0, 4);
insert into sobre (id, `status`, instituicao_id) values (5, 1, 2);

insert into transmissao (id, titulo, descricao, sobre_id) values (1, 'Só é preciso uma pequena quantidade.', 'O laptop que você está usando e porquê?', 3);
insert into transmissao (id, titulo, descricao, sobre_id) values (2, 'Até agora, tenho estado a evitar', 'Só achei que daria uma história intrigante.', 5);
insert into transmissao (id, titulo, descricao, sobre_id) values (3, 'Áreas plantadas são protegidos por barreiras', 'As pessoas devem observar opticamente mim para a consistência e perseverança.', 1);
insert into transmissao (id, titulo, descricao, sobre_id) values (4, 'O número de combinações possíveis', 'Só achei que daria uma história fascinante.', 2);
insert into transmissao (id, titulo, descricao, sobre_id) values (5, 'Ficaremos extremamente felizes se cantar alguma coisa.', 'Ele tinha ordens para examinar visualmente, mas não interferir.', 4);

insert into sintomas (id, titulo, descricao, sobre_id) values (1, 'De onde é que ele vem?', 'Curabitur eros orci, aliquam aliquet sollicitudin rutrum, congue eget tortor. Cras semper tortor non tincidunt molestie. Pellentesque ex leo, commodo sed lorem at, tincidunt aliquet tortor. In lobortis in eros pharetra dignissim.', 3);
insert into sintomas (id, titulo, descricao, sobre_id) values (2, 'Onde posso arranjar algum?', 'Sed condimentum tortor ac justo varius, a auctor ligula malesuada. Phasellus volutpat tincidunt elit, ac aliquet tortor tempus non. Duis auctor urna vitae mi efficitur lobortis.', 1);
insert into sintomas (id, titulo, descricao, sobre_id) values (3, 'Curabitur eros orci', 'Praesent tempor ante non pulvinar accumsan. Aliquam erat volutpat. Nunc eu ex sem. Mauris dignissim dolor in dictum commodo.', 5);
insert into sintomas (id, titulo, descricao, sobre_id) values (4, 'In sodales pulvinar tristique. ', 'Curabitur eget ante auctor, convallis nisi ac, consequat massa.', 4);
insert into sintomas (id, titulo, descricao, sobre_id) values (5, 'Sed condimentum tortor ac justo varius', 'Cras varius accumsan lacus, nec facilisis augue vulputate ut.', 2);

insert into cuidados (id, titulo, descricao, sobre_id) values (1, 'mauris. Proin eget efficitur era', 'Praesent tempor ante non pulvinar accumsan. Aliquam erat volutpat.', 2);
insert into cuidados (id, titulo, descricao, sobre_id) values (2, 'Praesent ullamcorper libero convallis ullamcorper interdum.', 'Curabitur vehicula vulputate nisi', 4);
insert into cuidados (id, titulo, descricao, sobre_id) values (3, 'In sodales pulvinar tristique.', 'Cras ullamcorper est in turpis tempus', 3);
insert into cuidados (id, titulo, descricao, sobre_id) values (4, 'a auctor ligula malesuada.', 'Cras id risus venenatis', 5);
insert into cuidados (id, titulo, descricao, sobre_id) values (5, 'Aliquam erat volutpat. Nunc eu ex sem.', 'hasellus fringilla commodo massa mollis suscipit.', 1);

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

insert mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (1,2);
insert mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (2,3);
insert mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (3,3);
insert mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (4,1);
insert mapa_tipo_usuario (usuario_id, tipo_usuario_id) values (5,2);