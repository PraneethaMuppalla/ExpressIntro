const path = require("path");

const express = require("express");
const router = express.Router();

const rootDir = require("../utils/path");

router.get("/contact-us", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

module.exports = router;
