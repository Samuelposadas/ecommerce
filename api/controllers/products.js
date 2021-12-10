const { Product } = require("../db/db");

const getProductsAll = async (req, res) => {
  try {
    const productsDB = await Product.findAll();

    productsDB.length ? res.json(productsDB) : res.sendStatus(404);
  } catch (e) {
    console.log(e);
  }
};

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

const createProduct = async (req, res) => {
  const { name, description, salePrice, stock, img, discount, purchasePrice } =
    req.body;
  try {
    const newProduct = await Product.create({
      name,
      description,
      salePrice,
      stock,
      img,
      discount,
      purchasePrice,
    });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = { findProductById, getProductsAll, createProduct };
