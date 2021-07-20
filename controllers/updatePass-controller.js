const Edit = require("../models/profile-models");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");

const updatePassword = async (req, res, next) => {
	let { password } = req.body;
	const { error } = Joi.object()
		.keys({
			password: passwordComplexity(),
		})
		.validate({ password });
	if (error) {
		res.status(422).json({ validationErrors: error.details });
	} else {
		let hash = await bcrypt
			.hash(req.body.password, 10)
			.then((hashedPassword) => hashedPassword);
		console.log(hash);
		Edit.updatePass(req.params.id, hash)
			.then(() => {
				req.userId = req.params.id;
				next();
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send(`Error updating information in database ${err}`);
			});
	}
};

const findById = (req, res, next) => {
	Edit.findOne(req.userId)
		.then((results) => {
			res.send(results);
		})
		.catch((err) => {
			res.status(500).send("Error retrieving user");
		});
};

module.exports = { updatePassword, findById };
