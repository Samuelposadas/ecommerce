const express = require("express");
const { createOrder } = require("../controllers/orders");

const router = express.Router();
router.post("/", createOrder);

module.exports = router;
