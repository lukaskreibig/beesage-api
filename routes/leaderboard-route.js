const express = require("express");
const {
  getAllWd,
  findWdByDays,
} = require("../controllers/leaderboard-controller");
const router = express.Router();

router.get("/wd", getAllWd);
router.get("/wd/:id", findWdByDays);

module.exports = router;
