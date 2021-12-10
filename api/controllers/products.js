const { Product, Op, Category } = require("../db/db");

const productController = {
  getProductsAll: async (req, res) => {
    const { category } = req.query;
    if (category) {
      const products = await Product.findAll({ include: Category });

      try {
        const productsByCategoty = products.filter((product) => {
          if (product.Categories.length) {
            for (let i = 0; i < product.Categories.length; i++) {
              if (product.Categories[i].name === category) {
                return product;
              }
            }
          }
        });

        productsByCategoty.length
          ? res.json(productsByCategoty)
          : res.json({ messege: "No products found" });
      } catch (e) {
        console.log(e);
      }
    }
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
      categories, // Attention !! categories is an array of ID.
    } = req.body;

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
      // add the categories to the products
      newProduct.addCategories(categories);

      res.json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = { productController };
