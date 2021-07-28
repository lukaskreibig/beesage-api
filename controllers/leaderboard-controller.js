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
      if (results) res.json(results);
      else res.status(404).send("Not found");
      connection.release();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error retrieving from databases ${err}`);
      connection.release();
    });
};

module.exports = { getAllWd, findWdByDays };
