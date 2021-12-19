const { Order } = require("../db/db");
const createOrder = async (req, res, next) => {
  try {
    res.json("oe!");
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder };
