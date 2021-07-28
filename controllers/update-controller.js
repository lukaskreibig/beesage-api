const Edit = require("../models/profile-models");
const Joi = require("joi");

const updateUser = (req, res, next) => {
	const {
		username,
		email,
		bio,
		apiaries,
		beehives,
		experience,
		country,
		region,
	} = req.body;
	const { error } = Joi.object({
		username: Joi.string().alphanum().min(2).max(12),
		email: Joi.string().email().max(255),
		bio: Joi.string().max(255).allow(null, ""),
		apiaries: Joi.number().allow(null),
		beehives: Joi.number().allow(null),
		experience: Joi.number().max(100).allow(null),
		country: Joi.string().allow(null, ""),
		region: Joi.string().allow(null, ""),
		profile_picture: Joi.any(),
	}).validate(
		{ username, email, bio, apiaries, beehives, experience, country, region },
		{ abortEarly: false }
	);

	if (error) {
		res.status(422).json({ validationErrors: error.details });
	} else {
		Edit.update(req.params.id, req.body)
			.then((results) => {
				if (results) {
					req.id = req.params.id;
					next();
				} else res.status(404).send("Not found");
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send(`Error updating information in database ${err}`);
			});
	}
};

module.exports = { updateUser };
