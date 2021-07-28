const Leaderboard = require("../models/leaderboard-models");

const getAllWd = (req, res) => {
  Leaderboard.findWd((err, results) => {
    if (err) {
      res.status(500).send(`Error retrieving Weight Delta: ${err}`);
    } else {
      res.json(results);
    }
  });
};

const findWdByDays = (req, res) => {
  Leaderboard.findWdDays(req.params.day)
    .then((results) => {
      connection.release();
      if (results) res.json(results);
      else res.status(404).send("Not found");
    })
    .catch((err) => {
      connection.release();
      console.log(err);
      res.status(500).send(`Error retrieving from databases ${err}`);
    });
};

module.exports = { getAllWd, findWdByDays };
