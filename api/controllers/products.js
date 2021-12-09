const Product = require("../models/Product");

const findProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findByPk(id);
    if (data) {
      res.status(201).json(data);
    } else {
      res.status(404).json({ mesagge: "producto no encontrado" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { findProductById };
