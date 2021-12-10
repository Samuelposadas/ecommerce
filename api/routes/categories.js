const express = require("express");
const { createCategory } = require("../controllers/categories");
const router = express.Router();

router.post("/create", createCategory);

module.exports = router;
