CREATE PROCEDURE verInstituicao(usuario_id INT)
	SELECT CONCAT('O usuario ', usuario.nome, 
		' pertence a instituicao ', instituicao.nome,
        ' e possui permissao de ', tipo_usuario.tipo) AS 'Instituicao Pertencente'
	FROM usuario, instituicao, mapa_tipo_usuario, tipo_usuario
    WHERE usuario_id = usuario.id
    AND instituicao.id = usuario.instituicao_id
    AND mapa_tipo_usuario.usuario_id = usuario_id
    AND mapa_tipo_usuario.tipo_usuario_id = tipo_usuario.id;
    
-- CALL verInstituicao(3);
-- DROP PROCEDURE verInstituicao;

