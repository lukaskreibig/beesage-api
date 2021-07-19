const bcrypt = require('bcrypt');
const Users = require("../models/user-models");

const userRegistration = (req, res) => {
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        let user = {
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email         
        }
       Users.createUser(user, (error) => {
          if (error) {
            res.status(500).send(`Server Error, we could not register that user. ${error}`);
          } else {
            res.status(201).send("Successfully registered!");
          }
       })
      })
      .catch(hasError => console.error(`Error hashing password. Error: ${hasError}`))
  }


  module.exports={ userRegistration };