const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/profile-controller");
const { authentication } = require("../middleware/authentication");

router.get("/:user", authentication, getUser);

module.exports = router;
