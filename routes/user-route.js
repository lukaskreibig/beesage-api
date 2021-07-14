const express = require("express");
const { getAllUsers } = require("../controllers/users-controller");
const router = express.Router();
const {authentication} = require("../middleware/authentication")

router.get("/", authentication, getAllUsers);

module.exports = router;
