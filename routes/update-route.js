const express = require("express");
const { updateUser } = require("../controllers/update-controller");
const router = express.Router();

router.put("/:id", updateUser);
// router.put("/:category",  updateUser);

module.exports = router;
