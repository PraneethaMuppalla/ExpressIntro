const path = require("path");

const express = require("express");
const router = express.Router();

const contactusController = require("../controller/contactUs");
router.get("/contact-us", contactusController.contactUsPage);

module.exports = router;
