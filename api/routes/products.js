const express = require("express");
const router = express.Router();
const { Product } = require("../db/db");

router.get("/", async (req, res) => {
  const productsDB = await Product.findAll();

  res.json(productsDB);
});

module.exports = router;
