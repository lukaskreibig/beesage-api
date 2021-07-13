const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/profile-controller");

router.get("/:user", getUser);

module.exports = router;
