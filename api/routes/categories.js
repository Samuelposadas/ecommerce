const express = require("express");
const { getCategory, createCategory } = require("../controllers/categories");
const router = express.Router();

router.get("/", getCategory);
//No debería haber un create Category
router.post("/", createCategory);

module.exports = router;
