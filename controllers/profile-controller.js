const Edit = require("../models/profile-models");

const getUser = (req, res) => {
	Edit.findOne(req.params.user)
		.then((results) => {
			if (results) res.json(results);
			else res.status(404).send("Not found");
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(`Error retrieving from databases ${err}`);
		});
};

module.exports = { getUser };
