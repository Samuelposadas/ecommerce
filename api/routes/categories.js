const express = require("express");
const { getCategory } = require("../controllers/categories");
const router = express.Router();

router.get("/", getCategory);
//No debería haber un create Category

module.exports = router;
