CREATE VIEW usuarios_instituicao AS
SELECT cnpj AS instituicao_cnpj, usuario.nome AS nome_usuario, instituicao.nome AS nome_instituicao
FROM usuario
RIGHT JOIN instituicao
ON usuario.instituicao_id = instituicao.id;

-- Execução:
-- SELECT * FROM usuarios_instituicao;