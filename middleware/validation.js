const Joi = require("joi");
const Users = require("../models/user-models");

const validate = (req, res, next) => {
  const { username, password, email } = req.body;

  Users.userValidate(email, (error, result) => {
    if (result[0]) {
      res.status(409).json({ message: "This email is already used" });
    } else {
      const err = Joi.object({
        username: Joi.string().min(2).max(255).required(),
        password: Joi.string().min(6).max(255).required(),
        email: Joi.string().email().max(255).required(),
      }).validate({ username, password, email }, { abortEarly: false }).error;
      if (err) {
        res.status(422).json({ err: err });
      } else {
        next();
      }
    }
  });
};

module.exports = {
  validate,
};
