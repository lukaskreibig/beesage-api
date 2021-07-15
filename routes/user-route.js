const express = require('express');
const router = express.Router();
const { userRegistration } = require("../controllers/signup-controller");
const { userSignin } = require("../controllers/login-controller");
const { signupValidate  } = require("../middleware/signup-validate");
const { loginValidate  } = require("../middleware/login-validate");

router.post('/signup', signupValidate, userRegistration);
router.post('/login', loginValidate, userSignin);

module.exports = router;