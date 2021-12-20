const express = require("express");
const { createComment } = require("../controllers/comments");

const router = express.Router();
router.post("/", createComment);

module.exports = router;
