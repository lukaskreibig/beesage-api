const connection = require("../db/config");

const Users = {};

Users.findAllUsers = (callback) => {
  connection.query("SELECT * FROM beekeeper", (err, results) => {
    callback(err, results);
  });
};

module.exports = findAllUsers;
