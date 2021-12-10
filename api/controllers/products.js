const { Product, Op } = require("../db/db");

const productController = {
  getProductsAll: async (req, res) => {
    try {
      const productsDB = await Product.findAll();

      productsDB.length ? res.json(productsDB) : res.sendStatus(404);
    } catch (e) {
      console.log(e);
    }
  },

  findProductById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const data = await Product.findByPk(id);
      if (data) {
        res.status(201).json(data);
      } else {
        res.status(404).json({ mesagge: "producto no encontrado" });
      }
    } catch (error) {
      console.error(error);
    }
  },

  searchProducts: async (req, res, next) => {
    try {
      const { name } = req.query;
      const condition = name
        ? { where: { name: { [Op.iLike]: `%${name}%` } } }
        : {};
      condition.attributes = { exclude: ["description"] };
      const products = await Product.findAll(condition);
      console.log(products.map((p) => p.toJSON()));
      res.json(products.length ? products : "No products found");
    } catch (error) {
      next(error);
    }
  },

  createProduct: async (req, res) => {
    const {
      name,
      description,
      salePrice,
      stock,
      img,
      discount,
      purchasePrice,
    } = req.body;
    try {
      const [product, created] = await Product.findOrCreate({
        where: { name },
        defaults: {
          description,
          salePrice,
          stock,
          img,
          discount,
          purchasePrice,
        },
      });
      if (created) {
        res.send("product created");
      } else {
        res.send("this product is already created");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = { productController };
