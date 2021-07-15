const connection = require("../db/config");

const Users = {};

Users.findUsers = (callback) => {
  connection.query("SELECT * FROM beekeeper", (err, results, fields) => {
    callback(err, results, fields);
  });
};

Users.createUser = (user, callback) => {
  connection.query(
    "INSERT INTO beekeeper SET ?", user, (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

Users.getUser = (user, callback) => {
  connection.query(
    `SELECT * FROM beekeeper WHERE username=?`, user, (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

Users.userValidate = (email, callback) => {
  connection.query(
    "SELECT * FROM beekeeper WHERE email = ?", [email], (error, result) => {
      callback(error, result);
    }
  );
};

module.exports = Users;


