const express = require("express");
const router = express.Router();
const { findProductById, getProductsAll } = require("../controllers/products");

router.get("/", getProductsAll);
router.get("/:id", findProductById);

module.exports = router;
