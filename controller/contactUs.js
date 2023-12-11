const path = require("path");

const rootDir = require("../utils/path");

exports.contactUsPage = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

exports.success = (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
