const express = require("express");
const router = express.Router();
const {
  findProductById,
  getProductsAll,
  createProduct,
} = require("../controllers/products");

router.get("/", getProductsAll);
router.get("/:id", findProductById);
router.post("/create", createProduct);

module.exports = router;
