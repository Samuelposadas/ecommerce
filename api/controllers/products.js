const { Product } = require("../db/db");

const getProductsAll = async (req, res) => {
  const productsDB = await Product.findAll();

  res.json(productsDB);
};

module.exports = getProductsAll;
