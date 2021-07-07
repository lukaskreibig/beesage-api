const Users = require("../models/user-model");

const getAllUsers = (req, res, next) => {
  Users.findAllUsers((err, results) => {
    if (err) {
      res.status(500).send("Error retrieving users");
    } else {
      res.json(results);
    }
  });
};

module.exports = { getAllUsers };
