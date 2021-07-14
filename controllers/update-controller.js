const Edit = require("../models/profile-models");
const Joi = require("joi");

const updateUser = (req, res) => {
	const { username, email, bio, apiaries, beehives, experience } = req.body;
	const { error } = Joi.object({
		username: Joi.string().min(2).max(12),
		email: Joi.string().email().max(255),
		bio: Joi.string().allow(null, "").max(255),
		apiaries: Joi.number(),
		beehives: Joi.number(),
		experience: Joi.number().max(100),
	}).validate(
		{ username, email, bio, apiaries, beehives, experience },
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
