const express = require("express");
const router = express.Router();
const {
  postSupplier,
  getSuppliers,
  deleteSupplier,
} = require("../controllers/suppliers");

router.post("/add", postSupplier);
router.get("/", getSuppliers);
router.delete("/delete/:id", deleteSupplier);

module.exports = router;
