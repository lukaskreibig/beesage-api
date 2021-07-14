const express = require('express');
const router = express.Router();
const { register } = require("../controllers/auth-controller")
const { enter } = require("../controllers/login-controller")

router.post('/signup', register);
router.post('/login', enter);

module.exports = router;