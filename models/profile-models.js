const connection = require("../db/config");
const db = connection.promise();

const Edit = {};

Edit.findOne = (user) => {
  return db
    .query("SELECT * FROM beekeeper WHERE beekeeper_id=?", [user])
    .then(([results]) => results);
};

Edit.update = (id, email) => {
  return db
    .query("UPDATE beekeeper SET ? WHERE beekeeper_id=?", [email, id])
    .then(([results]) => results);
};

Edit.updatePass = (id, newPass) => {
  return db
    .query("UPDATE beekeeper SET password=? WHERE beekeeper_id=?", [
      newPass,
      id,
    ])
    .then(([results]) => results);
};

module.exports = Edit;
