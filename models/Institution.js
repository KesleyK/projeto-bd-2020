const conn = require("../DB/connection");

class Institution {
  static showAll(cb) {
    conn.query("SELECT * FROM instituicao", (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)), err);
    });
  }

  static showOne(data, cb) {
    conn.query(
      "SELECT * FROM instituicao WHERE id = ?",
      data.id,
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static create(data, cb) {
    conn.query("INSERT INTO instituicao SET ?", data, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)));
    });
  }

  static update(data, cb) {
    conn.query(
      "UPDATE instituicao SET cnpj = ?, nome = ? WHERE id = ?",
      [data.cnpj, data.nome, data.id],
      (err, rows) => {
        if (err) return cb(null, err.sqlMessage);

        cb(JSON.parse(JSON.stringify(rows)), err);
      }
    );
  }

  static delete(data, cb) {
    conn.query("DELETE FROM instituicao WHERE id = ?", data.id, (err, rows) => {
      if (err) return cb(null, err.sqlMessage);

      cb(JSON.parse(JSON.stringify(rows)), err);
    });
  }
}

module.exports = Institution;
