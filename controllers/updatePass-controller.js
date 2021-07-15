const Edit = require("../models/profile-models");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const updatePassword = (req, res) => {
	const { password, oldPassword, confirmPassword } = req.body;
	const { error } = Joi.object({
		password: passwordComplexity(),
		oldPassword: passwordComplexity(),
		confirmPassword: passwordComplexity(),
	}).validate({ password, oldPassword, confirmPassword });
	if (error) {
		res.status(422).json({ validationErrors: error.details });
	} else {
		Edit.updatePass(req.params.updatePass, req.body)
			.then((results) => {
				if (results) res.json(results);
				else res.status(404).send("Not found");
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send(`Error updating information in database ${err}`);
				console.log(err);
			});
	}
};

module.exports = { updatePassword };
