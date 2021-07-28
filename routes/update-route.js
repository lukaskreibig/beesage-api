const express = require("express");
const { updateUser } = require("../controllers/update-controller");
const { getUser } = require("../controllers/profile-controller");
const router = express.Router();

router.put("/:id", updateUser, getUser);

module.exports = router;
