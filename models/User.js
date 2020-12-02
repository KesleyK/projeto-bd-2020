const conn = require("../DB/connection");

class User {
  static showAll(cb) {
    conn.query(
      "SELECT usuario.* , tipo FROM usuario" +
        " INNER JOIN mapa_tipo_usuario ON usuario.id = mapa_tipo_usuario.usuario_id" +
        " INNER JOIN tipo_usuario ON tipo_usuario_id = tipo_usuario.id",
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static showOne(data, cb) {
    conn.query(
      "SELECT usuario.* , tipo FROM usuario" +
        " INNER JOIN mapa_tipo_usuario ON usuario.id = mapa_tipo_usuario.usuario_id" +
        " INNER JOIN tipo_usuario ON tipo_usuario_id = tipo_usuario.id" +
        " WHERE usuario.id = ?",
      data.id,
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static create(data, cb) {
    conn.query("INSERT INTO usuario SET ?", data, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)));
    });
  }

  static update(data, cb) {
    conn.query(
      "UPDATE usuario SET nome = ?, instituicao_id = ? WHERE id = ?",
      [data.nome, data.instituicao_id, data.id],
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static delete(data, cb) {
    conn.query("DELETE FROM usuario WHERE id = ?", data.id, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)), err);
    });
  }

  static login(data, cb) {
    conn.query(
      "SELECT id, senha FROM usuario WHERE email = ?",
      data.email,
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static appendUserType(data, cb) {
    conn.query("INSERT INTO mapa_tipo_usuario SET ?", data, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)));
    });
  }
}

module.exports = User;
