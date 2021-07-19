const express = require("express");
const {
  getAllWd,
  findWdByDays,
} = require("../controllers/leaderboard-controller");
const router = express.Router();
const { authentication } = require("../middleware/authentication");

router.get("/", authentication, getAllWd);
router.get("/:day", authentication, findWdByDays);

module.exports = router;
