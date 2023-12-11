const path = require("path");

const express = require("express");
const router = express.Router();

const rootDir = require("../utils/path");
const productsController = require("../controller/products");

router.get("/", productsController.getProducts);

module.exports = router;
