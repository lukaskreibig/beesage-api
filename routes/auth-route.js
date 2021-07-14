const express = require('express');
const router = express.Router();
const { register } = require("../controllers/auth-controller")
const { enter } = require("../controllers/login-controller")
const { validate } = require("../middleware/validation")

router.post('/signup', validate, register);
router.post('/login', enter);

module.exports = router;