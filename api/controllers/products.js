const { Product, Op, Category } = require("../db/db");

const productController = {
  getProductsAll: async (req, res, next) => {
    const PRODUCTS_PER_PAGE = 3;
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
      const page = req.query.page ? parseInt(req.query.page) : 0;
      const query = {
        offset: page * PRODUCTS_PER_PAGE,
        limit: PRODUCTS_PER_PAGE,
      };
      const { count, rows } = await Product.findAndCountAll(query);
      console.log(count);
      console.log(rows.map((p) => p.toJSON()));
      const response = {
        totalPages: Math.ceil(count / PRODUCTS_PER_PAGE),
        products: [...rows],
      };
      res.json(rows.length ? response : { message: "No products found" });
    } catch (error) {
      next(error);
    }
  },

  findProductById: async (req, res, next) => {
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
      next(error);
    }
  },

  searchProducts: async (req, res, next) => {
    const { name } = req.query;
    if (name) {
      try {
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
      categories,
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
        product.addCategories(categories);
        res.json(product);
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
