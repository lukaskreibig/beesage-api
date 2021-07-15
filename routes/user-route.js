const express = require('express');
const router = express.Router();
const { userRegistration } = require("../controllers/auth-controller")
const { userSigin } = require("../controllers/login-controller")
const { signupvalidate  } = require("../middleware/signupvalidate")
const { loginvalidate  } = require("../middleware/loginvalidate")

router.post('/signup', signupvalidate, userRegistration);
router.post('/login', loginvalidate, userSigin);

module.exports = router;