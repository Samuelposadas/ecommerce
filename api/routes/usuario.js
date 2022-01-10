const express = require("express");
const {
  createAndLogin,
  verifyTokens,
  profile,
  addOrUpdateAddress,
  login,
} = require("../controllers/usuario");

const router = express.Router();
router.post("/login", login);
router.post("/signup", createAndLogin);
router.get("/profile", verifyTokens, profile);

router.post("/update", verifyTokens, addOrUpdateAddress, login);

module.exports = router;
