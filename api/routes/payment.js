const express = require("express");
const router = express.Router();
const { postPayment } = require("../controllers/payment");

router.post("/addPayment", postPayment);

module.exports = router;
