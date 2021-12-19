const express = require("express");
const {
  getCategory,
  createCategory,
  deleteCategory,
} = require("../controllers/categories");
const router = express.Router();

router.get("/", getCategory);
//No debería haber un create Category
router.post("/", createCategory);
router.delete("/", deleteCategory);

module.exports = router;
