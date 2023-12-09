const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In middleware");
  next();
});
app.use((req, res) => {
  console.log("In another middleware");
  res.send("<h1>Hello from express</h1>");
});
app.listen(3000);