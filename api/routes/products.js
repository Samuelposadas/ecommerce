const express = require("express");
const router = express.Router();
const { productController } = require("../controllers/products");

router.route("/").get(productController.getProductsAll);
router.route("/id/:id").get(productController.findProductById);
router.route("/search").get(productController.searchProducts);
router.route("/create").post(productController.createProduct);
router.route("/update/:id").put(productController.updateProduct);

router
  .route("/categories/change")
  .put(productController.addOrRemoveCategoryProduct);

module.exports = router;
