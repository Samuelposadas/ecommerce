const express = require("express");
const getProductsAll = require("../controllers/products");
const router = express.Router();

router.get("/", getProductsAll);

module.exports = router;
