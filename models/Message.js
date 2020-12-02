const conn = require("../DB/connection");

class Message {
  static showAll(cb) {
    conn.query(
      "SELECT mensagem.*, nome as nome_usuario FROM mensagem" +
        " INNER JOIN usuario ON usuario_id = usuario.id" +
        " ORDER BY id ASC",
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static showAllByInstitution(data, cb) {
    conn.query(
      "SELECT mensagem.*, nome as nome_usuario FROM mensagem" +
        " INNER JOIN usuario ON usuario_id = usuario.id" +
        " WHERE mensagem.instituicao_id = ?" +
        " ORDER BY id ASC",
      data.id,
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static showOne(data, cb) {
    conn.query("SELECT * FROM mensagem WHERE id = ?", data.id, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)), err);
    });
  }

  static create(data, cb) {
    conn.query("INSERT INTO mensagem SET ?", data, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)));
    });
  }

  static update(data, cb) {
    conn.query(
      "UPDATE mensagem SET text_msg = ?, usuario_id = ?, instituicao_id = ? WHERE id = ?",
      [data.text_msg, data.usuario_id, data.instituicao_id, data.id],
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static delete(data, cb) {
    conn.query("DELETE FROM mensagem WHERE id = ?", data.id, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)), err);
    });
  }
}

module.exports = Message;
