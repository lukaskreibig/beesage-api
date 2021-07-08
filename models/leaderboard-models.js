const connection = require("../db/config");

const Leaderboard = {};

Leaderboard.findUsers = (callback) => {
  connection.query("SELECT * FROM beekeeper", (err, results, fields) => {
    callback(err, results, fields);
  });
};

module.exports = Users;
