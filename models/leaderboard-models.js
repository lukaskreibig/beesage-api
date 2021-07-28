const connection = require("../db/config");

const Leaderboard = {};

const db = connection.promise();

Leaderboard.findWd = (callback) => {
  connection.query(
    "SELECT beekeeper.beekeeper_id, beekeeper.username, weight_delta.weight_delta, beekeeper.email, beekeeper.region, beekeeper.country,  beekeeper.experience, beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture FROM beekeeper INNER JOIN weight_delta ON weight_delta.beekeeper_id=beekeeper.beekeeper_id ORDER BY weight_delta.weight_delta DESC;",
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

Leaderboard.findWdDays = (days) => {
  return db
    .query(
      "SELECT t1.beekeeper_id, t1.avg_wd, t2.avg_wd_before, t1.wd_rank, t2.wd_rank_before, t1.username, t1.email, t1.region, t1.country, t1.experience, t1.beehives, t1.apiaries, t1.profile_picture, t1.bio FROM (SELECT ROUND(AVG(weight_delta.weight_delta),2) AS `avg_wd`, beekeeper.beekeeper_id, beekeeper.username, beekeeper.email, beekeeper.region, beekeeper.country, beekeeper.experience, beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture, beekeeper.bio, RANK () OVER ( ORDER BY ROUND(AVG(weight_delta.weight_delta),2) DESC ) wd_rank FROM weight_delta INNER JOIN beekeeper ON beekeeper.beekeeper_id = weight_delta.beekeeper_id WHERE date > now() - INTERVAL ? day GROUP BY beekeeper.beekeeper_id, beekeeper.username, beekeeper.email, beekeeper.region, beekeeper.country, beekeeper.experience, beekeeper.beehives, beekeeper.apiaries, beekeeper.profile_picture, beekeeper.bio) t1 LEFT JOIN (SELECT ROUND(AVG(weight_delta.weight_delta),2) AS `avg_wd_before`, weight_delta.beekeeper_id, RANK () OVER ( ORDER BY ROUND(AVG(weight_delta.weight_delta),2) DESC ) wd_rank_before FROM weight_delta WHERE (date BETWEEN now() - INTERVAL 2 * ? DAY AND now() - INTERVAL ? DAY) GROUP BY weight_delta.beekeeper_id) t2 ON (t1.beekeeper_id = t2.beekeeper_id) ORDER BY t1.avg_wd DESC",
      [days, days, days]
    )
    .connection.release()
    .then(([results]) => results);
};

module.exports = Leaderboard;
