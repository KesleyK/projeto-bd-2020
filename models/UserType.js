const conn = require("../DB/connection");

class UserType {
  static showAll(cb) {
    conn.query("SELECT * FROM tipo_usuario", (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)), err);
    });
  }

  static showOne(data, cb) {
    conn.query(
      "SELECT * FROM tipo_usuario WHERE id = ?",
      data.id,
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static create(data, cb) {
    conn.query("INSERT INTO tipo_usuario SET ?", data, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)));
    });
  }

  static update(data, cb) {
    conn.query(
      "UPDATE tipo_usuario SET tipo = ? WHERE id = ?",
      [data.tipo, data.id],
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static delete(data, cb) {
    conn.query(
      "DELETE FROM tipo_usuario WHERE id = ?",
      data.id,
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }
}

module.exports = UserType;
