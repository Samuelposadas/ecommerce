const express = require("express");
const {
  getCategory,
  createCategory,
  deleteCategory,
  getSpecifictAccesory,
} = require("../controllers/categories");
const router = express.Router();

router.get("/", getCategory);
//No debería haber un create Category
router.post("/", createCategory);
router.delete("/", deleteCategory);

// get a los sub categorias de accesorios

router.get("/accesory", getSpecifictAccesory);
module.exports = router;
