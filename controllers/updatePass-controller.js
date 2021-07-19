const Edit = require("../models/profile-models");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const updatePassword = (req, res) => {
	const { password, confirmPassword } = req.body;
	const { error } = Joi.object()
		.keys({
			password: Joi.string()
				.regex(/^[a-zA-Z0-9]{3,30}$/)
				.required(),
			// Force passwords to match
			confirmPassword: Joi.any().equal(Joi.ref("password")).required(),
		})
		.validate({ password, confirmPassword });
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
