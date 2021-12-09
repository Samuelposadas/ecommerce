const { Product } = require("../db/db");

const getProductsAll = async (req, res) => {
  try {
    const productsDB = await Product.findAll();

    productsDB.length ? res.send(200).json(productsDB) : res.sendStatus(404);
  } catch (e) {
    console.log(e);
  }
};

module.exports = getProductsAll;
