const express = require("express");
const router = express.Router();
const {
  getProductsAll,
  findProductById,
  searchProducts,
  createProduct,
  updateProduct,
  addOrRemoveCategoryProduct,
} = require("../controllers/products");

router.route("/").get(getProductsAll);
router.route("/search").get(searchProducts);
router.route("/create").post(createProduct);
router.route("/update/:id").put(updateProduct);
router.route("/:id").get(findProductById);

router.route("/categories/change").put(addOrRemoveCategoryProduct);

module.exports = router;
