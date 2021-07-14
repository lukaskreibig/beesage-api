const Joi = require("joi");
const Users = require("../models/user-models");

const loginvalidate = (req, res, next) => {
  const { username, password } = req.body;

  const err = Joi.object({
    username: Joi.string().min(2).max(255).required(),
    password: Joi.string().min(6).max(255).required(),
  }).validate({ username, password }, { abortEarly: false }).error;
  if (err) {
    res.status(422).json({ err: err });
  } else {
    next();
  }
};

module.exports = {
  loginvalidate,
};
