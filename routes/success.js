const express = require("express");
const router = express.Router();

const contactusController = require("../controller/contactUs");

router.post("/success", contactusController.success);

module.exports = router;
