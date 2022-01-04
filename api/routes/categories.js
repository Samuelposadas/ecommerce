const express = require("express");
const {
  getCategory,
  createCategory,
  deleteCategory,
  getSpecifictCategory,
} = require("../controllers/categories");
const router = express.Router();

router.get("/", getCategory);
//No debería haber un create Category
router.post("/", createCategory);
router.delete("/", deleteCategory);

// get a los sub categorias de accesorios

router.get("/accesory", getSpecifictCategory);
module.exports = router;
