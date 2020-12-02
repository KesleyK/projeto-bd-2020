const UserType = require("../models/UserType");

exports.getAll = (req, res) => {
  UserType.showAll((userTypes) => {
    return res.status(200).json(userTypes);
  });
};

exports.getOne = (req, res) => {
  const data = {
    id: req.params.id,
  };

  UserType.showOne(data, (userTypes) => {
    return res.status(200).json(userTypes[0] ? userTypes[0] : null);
  });
};

exports.create = (req, res) => {
  const data = {
    tipo: req.body.tipo,
  };

  UserType.create(data, (userTypesMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    return res.status(201).json({
      message: "Tipo de usuário cadastrado com sucesso.",
      userTypesMetadatas,
    });
  });
};

exports.update = (req, res) => {
  const data = {
    id: req.params.id,
    tipo: req.body.tipo,
  };

  UserType.update(data, (userTypesMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const message =
      userTypesMetadatas.affectedRows > 0
        ? "Tipo de usuário atualizado com sucesso."
        : "Não foi possível atualizar tipo de usuário.";

    return res.status(200).json({
      message: message,
      userTypesMetadatas,
    });
  });
};
