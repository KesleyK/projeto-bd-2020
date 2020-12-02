const Message = require("../models/Message");

exports.getAll = (req, res) => {
  Message.showAll((messages) => {
    return res.status(200).json(messages);
  });
};

exports.getAllByInstitution = (req, res) => {
  const data = {
    id: req.params.id,
  };

  Message.showAllByInstitution(data, (messages) => {
    return res.status(200).json(messages);
  });
};

exports.getOne = (req, res) => {
  const data = {
    id: req.params.id,
  };

  Message.showOne(data, (message) => {
    return res.status(200).json(message[0] ? message[0] : null);
  });
};

exports.create = (req, res) => {
  const data = {
    text_msg: req.body.text_msg,
    instituicao_id: req.body.instituicao_id,
    usuario_id: req.body.usuario_id,
  };

  Message.create(data, (messageMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    return res.status(201).json({
      message: "Mensagem enviada com sucesso.",
      messageMetadatas,
    });
  });
};

exports.update = (req, res) => {
  const data = {
    id: req.params.id,
    text_msg: req.body.text_msg,
    instituicao_id: req.body.instituicao_id,
    usuario_id: req.body.usuario_id,
  };

  Message.update(data, (messageMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const message =
      messageMetadatas.affectedRows > 0
        ? "Mensagem atualizada com sucesso."
        : "Não foi possível deletar mensagem.";

    return res.status(200).json({
      message: message,
      messageMetadatas,
    });
  });
};

exports.deleteOne = (req, res) => {
  const data = {
    id: req.params.id,
  };

  Message.delete(data, (messageMetadatas, err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const message =
      messageMetadatas.affectedRows > 0
        ? "Mensagem deletada com sucesso."
        : "Não foi possível deletar mensagem.";

    return res.status(200).json({
      message: message,
      messageMetadatas,
    });
  });
};
