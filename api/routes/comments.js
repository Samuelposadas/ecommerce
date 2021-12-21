const express = require("express");
const { createComment, editComment } = require("../controllers/comments");

const router = express.Router();
router.post("/", createComment);
router.put("/edit/:id", editComment);

module.exports = router;
