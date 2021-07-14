const Edit = require("../models/profile-models");

const updateUser = (req, res) => {
	Edit.update(req.params.update, req.body)
		.then((results) => {
			if (results) res.json(results);
			else res.status(404).send("Not found");
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(`Error updating information in database ${err}`);
		});
};

module.exports = { updateUser };
