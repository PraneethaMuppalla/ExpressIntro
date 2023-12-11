const path = require("path");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactUsRoutes = require("./routes/contactUs");
const successRoutes = require("./routes/success");
const rootDir = require("./utils/path");

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use(contactUsRoutes);
app.use(successRoutes);
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "not-found.html"));
});

app.listen(3000);
