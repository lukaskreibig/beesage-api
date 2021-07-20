const express = require("express");
const {
	updatePassword,
	findById,
} = require("../controllers/updatePass-controller");
const router = express.Router();

router.put("/:id", updatePassword, findById);

module.exports = router;
