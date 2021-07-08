const connection = require("../db/config");

const Leaderboard = {};

Leaderboard.findUsers = (callback) => {
  connection.query(
    "SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience, beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture FROM beekeeper INNER JOIN weight_delta ON weight_delta.id_weight_delta=beekeeper.beekeeper_id;",
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

module.exports = Users;
