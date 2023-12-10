const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><label for="product">Product</label><input id="product" type="text" name="product" /><br><label for="quantity">Quantity</label><input id="quantity" type="number" name="quantity"><br><button type="submit">Send</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log("product", req.body.product, "quantity", req.body.quantity);
  res.redirect("/admin/add-product");
});

module.exports = router;
