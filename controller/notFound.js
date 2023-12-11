const path = require("path");

const rootDir = require("../utils/path");

module.exports = (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "not-found.html"));
};
