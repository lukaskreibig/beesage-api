const Edit = require("../models/profile-models");

const getUser = (req, res) => {
	if (req.params.user) {
		Edit.findOne(req.params.user)
			.then((results) => {
				if (results) res.json(results);
				else res.status(404).send("Not found");
				console.log(err);
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		Edit.findOne(req.id)
			.then((results) => {
				if (results) res.json(results);
				else res.status(404).send("Not found");
				console.log(results);
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

module.exports = { getUser };
