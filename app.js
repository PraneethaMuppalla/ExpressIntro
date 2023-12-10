const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><label for="product">Product</label><input id="product" type="text" name="product" /><br><label for="quantity">Quantity</label><input id="quantity" type="number" name="quantity"><br><button type="submit">Send</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log("product", req.body.product, "quantity", req.body.quantity);
  res.redirect("/add-product");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express Js</h1>");
});

app.listen(3000);
