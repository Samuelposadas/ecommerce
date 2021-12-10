const express = require("express");
const router = express.Router();
const { postSupplier, getSuppliers, deleteSupplier } = require("../controllers/suppliers");


router.post("/", postSupplier);
router.get("/", getSuppliers);
router.delete("/:id", deleteSupplier);


module.exports = router;