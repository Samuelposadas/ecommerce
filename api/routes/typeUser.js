const express = require("express");
const { createTypeUser } = require("../controllers/typeUser");

const router = express.Router();
router.post("/", createTypeUser);

module.exports = router;
