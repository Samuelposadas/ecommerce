const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ masagge: "todos los productos" });
});

module.exports = router;