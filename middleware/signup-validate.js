const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const Users = require("../models/user-models");

const signupValidate = (req, res, next) => {
	const { username, password, email } = req.body;

	Users.userValidate(email, (error, result) => {
		if (result[0]) {
			res.status(409).json({ message: "This email is already in use." });
		} else {
			const { error } = Joi.object({
				username: Joi.string().alphanum().min(2).max(12),
				email: Joi.string().email().max(255).required(),
				password: passwordComplexity(),
			}).validate({ username, email, password }, { abortEarly: false });
			if (error) {
				res.status(422).json({ validationErrors: error.details });
			} else {
				next();
			}
		}
	});
};

module.exports = {
	signupValidate,
};
