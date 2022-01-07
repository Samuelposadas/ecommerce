const express = require("express");
const router = express.Router();
const {
  findProductById,
  searchProducts,
  createProduct,
  updateProduct,
  addOrRemoveCategoryProduct,
  newgetProductsAll,

  getAllProducts,
} = require("../controllers/products");

router.route("/").get(newgetProductsAll);
router.route("/all").get(getAllProducts);
router.route("/search").get(searchProducts);
router.route("/create").post(createProduct);
router.route("/update/:id").put(updateProduct);
router.route("/:id").get(findProductById);

router.route("/categories/change").put(addOrRemoveCategoryProduct);

module.exports = router;
