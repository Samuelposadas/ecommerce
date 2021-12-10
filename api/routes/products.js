const express = require("express");
const router = express.Router();
const { productController } = require("../controllers/products");

router.route("/").get(productController.getProductsAll);
router.route("/id/:id").get(productController.findProductById);
router.route("/search").get(productController.searchProducts);

router.route("/create").post(productController.createProduct);

module.exports = router;
