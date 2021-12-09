const express = require("express");
const router = express.Router();
const { findProductById } = require("../controllers/products");

router.get("/", (req, res) => {
  res.json({ masagge: "todos los productos" });

  router.get("/:id", findProductById);
});

module.exports = router;


