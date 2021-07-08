const connection = require("../db/config");

const Leaderboard = {};

const db = connection.promise();

Leaderboard.find = (callback) => {
  connection.query(
    "SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience, beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture FROM beekeeper INNER JOIN weight_delta ON weight_delta.id_weight_delta=beekeeper.beekeeper_id;",
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

Leaderboard.findWdDays = (days) => {
  return db
    .query(
      "SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience, beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture FROM beekeeper INNER JOIN weight_delta ON weight_delta.id_weight_delta=beekeeper.beekeeper_id WHERE date > now() - INTERVAL ? day",
      [days]
    )
    .then(([results]) => results);
};

module.exports = Leaderboard;

// 7 days

// SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, weight_delta.date,
// beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience,
// beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture
// FROM beekeeper
// LEFT JOIN weight_delta ON weight_delta.beekeeper_id=beekeeper.beekeeper_id
// WHERE date > now() - INTERVAL 7 day;
