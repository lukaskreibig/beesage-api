const Leaderboard = require("../models/leaderboard-models");

const getAllWd = (req, res) => {
  Users.findWd((err, result) => {
    if (err) {
      res.status(500).send(`Error retrieving Weight Delta: ${err}`);
    } else {
      res.json(results);
    }
  });
};

const getWdByDays = (req, res) => {
  Users.findOne((err, result) => {});
};

module.exports = { getAllWd, getWdByDays };
