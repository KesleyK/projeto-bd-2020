const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.getAll = (req, res) => {
  User.showAll((users) => {
    return res.status(200).json(users);
  });
};

exports.getOne = (req, res) => {
  const data = {
    id: req.params.id,
  };

  User.showOne(data, (users) => {
    return res.status(200).json(users[0] ? users[0] : null);
  });
};

exports.create = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.senha, 9);

  const data = {
    instituicao_id: req.body.instituicao_id,
    nome: req.body.nome,
    email: req.body.email,
    senha: hashedPassword,
  };

  User.create(data, (userMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const userTypeData = {
      usuario_id: userMetadatas.insertId,
      tipo_usuario_id: req.body.tipo_usuario_id,
    };

    User.appendUserType(userTypeData, (_, err) => {
      if (err) {
        return User.delete({ id: userMetadatas.insertId }, () => {
          return res
            .status(400)
            .json({ error: "Não foi possível associar tipo do usuário." });
        });
      }

      return res.status(201).json({
        message: "Usuário cadastrado com sucesso.",
        userMetadatas,
      });
    });
  });
};

exports.update = (req, res) => {
  const data = {
    id: req.params.id,
    nome: req.body.nome,
    instituicao_id: req.body.instituicao_id,
  };

  User.update(data, (userMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const message =
      userMetadatas.affectedRows > 0
        ? "Usuário atualizado com sucesso."
        : "Não foi possível atualizar usuário.";

    return res.status(200).json({
      message: message,
      userMetadatas,
    });
  });
};

exports.deleteOne = (req, res) => {
  const data = {
    id: req.params.id,
  };

  User.delete(data, (userMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const message =
      userMetadatas.affectedRows > 0
        ? "Usuário deletado com sucesso."
        : "Não foi possível deletar usuário.";

    return res.status(200).json({
      message: message,
      userMetadatas,
    });
  });
};

exports.login = (req, res) => {
  const data = {
    email: req.body.email,
  };

  User.login(data, (userMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const fetchedUser = userMetadatas[0];
    if (!fetchedUser) {
      return res.status(400).json({ error: "Senha ou email inválidos." });
    }

    const passwordDidMatch = bcrypt.compareSync(
      req.body.senha,
      fetchedUser.senha
    );
    if (!passwordDidMatch) {
      return res.status(400).json({ error: "Senha ou email inválidos." });
    }

    return res.status(200).json({ userId: fetchedUser.id });
  });
};
