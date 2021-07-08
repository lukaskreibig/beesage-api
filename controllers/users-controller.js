const Users = require("../models/user-models");

const getAllUsers = (req, res, next) => {
  Users.findUsers((err, results) => {
    if (err) {
      res.status(500).send("error retrieving users");
    } else {
      res.json(results);
    }
  });
};

module.exports = { getAllUsers };
