const connection = require("../db/config");
const db = connection.promise();

const Edit = {};

Edit.findOne = (user) => {
	return db
		.query("SELECT * FROM beekeeper WHERE beekeeper_id=?", [user])
		.then(([results]) => results);
};

Edit.update = (update, updatedItem) => {
	return db
		.query("UPDATE beekeeper SET ? WHERE beekeeper_id=?", [updatedItem, update])
		.then(([results]) => results);
};

Edit.updatePass = (updatePass, newPass) => {
	return db
		.query("UPDATE beekeeper SET ? WHERE beekeeper_id=?", [newPass, updatePass])
		.then(([results]) => results);
};

module.exports = Edit;
