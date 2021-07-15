const Edit = require("../models/profile-models");
// const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const updateUser = (req, res) => {
	const {
		username,
		email,
		bio,
		apiaries,
		beehives,
		experience,
		country,
		region,
		// password,
		// oldPassword,
		// confirmPassword,
	} = req.body;
	const { error } = Joi.object({
		username: Joi.string().alphanum().min(2).max(12),
		email: Joi.string().email().max(255),
		bio: Joi.string().allow(null, "").max(255),
		apiaries: Joi.number().min(1),
		beehives: Joi.number().min(1),
		experience: Joi.number().max(100),
		country: Joi.string(),
		region: Joi.string(),
		// password: passwordComplexity(),
		// oldPassword: passwordComplexity(),
		// confirmPassword: passwordComplexity(),
	}).validate(
		{
			username,
			email,
			bio,
			apiaries,
			beehives,
			experience,
			country,
			region,
			// password,
			// oldPassword,
			// confirmPassword,
		},
		{ abortEarly: false }
	);

	if (error) {
		res.status(422).json({ validationErrors: error.details });
	} else {
		Edit.update(req.params.update, req.body)
			.then((results) => {
				if (results) res.json(results);
				else res.status(404).send("Not found");
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send(`Error updating information in database ${err}`);
			});
	}
};

module.exports = { updateUser };
