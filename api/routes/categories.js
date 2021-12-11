const express = require("express");
const { createCategory, getCategory } = require("../controllers/categories");
const router = express.Router();

router.get("/", getCategory);
router.post("/create", createCategory);

module.exports = router;
