const bcrypt = require('bcrypt');
const Users = require("../models/user-models");

const register = (req, res) => {
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        let user = {
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email,
          city: req.body.city,
          country: req.body.country,
          experience: req.body.experience,
          behives: req.body.behives,
          apiaries: req.body.apiaries
        }
       Users.signup(user, (error) => {
          if (error) {
            res.status(500).send("Server Error, we could not register that user :(");
          } else {
            res.status(201).send("Successfully registered! :D");
          }
       })
      })
      .catch(hasError => console.error(`Error hashing password. Error: ${hasError}`))
  }


  module.exports={ register };