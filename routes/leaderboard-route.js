const express = require("express");
const {
  getAllWd,
  findWdByDays,
} = require("../controllers/leaderboard-controller");
const router = express.Router();
//const { authentication } = require("../middleware/authentication");

router.get("/", getAllWd);
router.get("/:day", findWdByDays);

module.exports = router;
