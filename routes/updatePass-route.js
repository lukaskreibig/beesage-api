const express = require("express");
const { updatePassword } = require("../controllers/updatePass-controller");
const router = express.Router();

router.put("/:updatePass", updatePassword);

module.exports = router;
