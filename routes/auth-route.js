const express = require('express');
const router = express.Router();
const { register } = require("../controllers/auth-controller")
const { enter } = require("../controllers/login-controller")

//on app we will define it as /tours
router.post('/signup', register);
router.post('/login', enter);

module.exports = router;