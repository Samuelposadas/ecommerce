const express = require("express");
const router = express.Router();
// const { findProductById, getProductsAll } = require("../controllers/products");
const { postSupplier } = require("../controllers/suppliers");

// router.get("/", getSuppliersAll);
// router.get("/:id", findProductById);

router.post("/", postSupplier);

module.exports = router;