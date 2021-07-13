const connection = require("../db/config");
const db = connection.promise();

const Edit = {};

Edit.findOne = (user) => {
	return db
		.query("SELECT * FROM beekeeper WHERE beekeeper_id=?", [user])
		.then(([results]) => results);
};

Edit.update = (update, username) => {
	return db
		.query("UPDATE beekeeper SET ? WHERE beekeeper_id=?", [username, update])
		.then(([results]) => results);
};

module.exports = Edit;
