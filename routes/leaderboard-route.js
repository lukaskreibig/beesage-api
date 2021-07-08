const express = require("express");
const {
  getAllWd,
  getWdByDays,
} = require("../controllers/leaderboard-controller");
const router = express.Router();

router.get("/wd", getAllWd);
router.get("/wd/:id", getWdByDays);

module.exports = router;
