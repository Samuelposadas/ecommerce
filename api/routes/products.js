const express = require("express");
const getProductsAll = require("../controllers/products");
const router = express.Router();
const { findProductById } = require("../controllers/products");


router.get("/", getProductsAll);


module.exports = router;


