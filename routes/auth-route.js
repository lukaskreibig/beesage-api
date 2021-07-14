const express = require('express');
const router = express.Router();
const { register } = require("../controllers/auth-controller")
const { enter } = require("../controllers/login-controller")
const { signupvalidate  } = require("../middleware/signupvalidate")
const { loginvalidate  } = require("../middleware/loginvalidate")

router.post('/signup', signupvalidate, register);
router.post('/login', loginvalidate, enter);

module.exports = router;