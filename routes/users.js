const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("sending user data");
});

module.exports = router;
