const connection = require("../db/config");

const Leaderboard = {};

const db = connection.promise();

Leaderboard.findWd = (callback) => {
  connection.query(
    "SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience, beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture FROM beekeeper INNER JOIN weight_delta ON weight_delta.beekeeper_id=beekeeper.beekeeper_id ORDER BY weight_delta.weight_delta DESC;",
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

Leaderboard.findWdDays = (days) => {
  return db
    .query(
      "SELECT ROUND(AVG(weight_delta.weight_delta),2) AS `average_wd`, beekeeper.beekeeper_id FROM weight_delta INNER JOIN beekeeper ON beekeeper.beekeeper_id = weight_delta.beekeeper_id WHERE date > now() - INTERVAL ? day GROUP BY beekeeper.beekeeper_id ORDER BY `average_wd` DESC;",
      [days]
    )
    .then(([results]) => results);
};

module.exports = Leaderboard;

// Working Query without AVG

// Leaderboard.findWdDays = (days) => {
//   return db
//     .query(
//       "SELECT beekeeper.beekeeper_id, beekeeper.username, AVG(weight_delta.weight_delta), weight_delta.date, beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience, beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture FROM beekeeper LEFT JOIN weight_delta ON weight_delta.beekeeper_id=beekeeper.beekeeper_id GROUP BY beekeeper.beekeeper_id WHERE date > now() - INTERVAL ? day;",
//       [days]
//     )
//     .then(([results]) => results);
// };

// Today

// SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, weight_delta.date,
// beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience,
// beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture
// FROM beekeeper
// LEFT JOIN weight_delta ON weight_delta.beekeeper_id=beekeeper.beekeeper_id
// WHERE date = CURDATE();

// 7 days

// SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, weight_delta.date,
// beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience,
// beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture
// FROM beekeeper
// LEFT JOIN weight_delta ON weight_delta.beekeeper_id=beekeeper.beekeeper_id
// WHERE date > now() - INTERVAL 7 day;

// 30 days

// SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, weight_delta.date,
// beekeeper.email, beekeeper.city, beekeeper.country, beekeeper.country, beekeeper.experience,
// beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture
// FROM beekeeper
// LEFT JOIN weight_delta ON weight_delta.beekeeper_id=beekeeper.beekeeper_id
// WHERE date > now() - INTERVAL 30 day;
