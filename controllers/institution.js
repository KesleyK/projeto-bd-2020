const Institution = require("../models/Institution");

exports.getAll = (req, res) => {
  Institution.showAll((institutions) => {
    return res.status(200).json(institutions);
  });
};

exports.getOne = (req, res) => {
  const data = {
    id: req.params.id,
  };

  Institution.showOne(data, (institutions) => {
    return res.status(200).json(institutions[0] ? institutions[0] : null);
  });
};

exports.create = (req, res) => {
  const data = {
    cnpj: req.body.cnpj,
    nome: req.body.nome,
  };

  Institution.create(data, (institutionMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    return res.status(201).json({
      message: "Instituição cadastrada com sucesso.",
      institutionMetadatas,
    });
  });
};

exports.update = (req, res) => {
  const data = {
    id: req.params.id,
    cnpj: req.body.cnpj,
    nome: req.body.nome,
  };

  Institution.update(data, (institutionMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const message =
      institutionMetadatas.affectedRows > 0
        ? "Instituição atualizada com sucesso."
        : "Não foi possível atualizar instituição.";

    return res.status(200).json({
      message: message,
      institutionMetadatas,
    });
  });
};

exports.deleteOne = (req, res) => {
  const data = {
    id: req.params.id,
  };

  Institution.delete(data, (institutionMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const message =
      institutionMetadatas.affectedRows > 0
        ? "Instituição deletada com sucesso."
        : "Falha ao deletar instituição.";

    return res.status(200).json({
      message: message,
      institutionMetadatas,
    });
  });
};
