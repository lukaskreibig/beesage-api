const express = require("express");
const { updateUser } = require("../controllers/update-controller");
const router = express.Router();

router.put("/:update", updateUser);

module.exports = router;
