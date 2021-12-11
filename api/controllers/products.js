const { Product, Op, Category, User } = require("../db/db");

const productController = {
  getProductsAll: async (req, res, next) => {
    const PRODUCTS_PER_PAGE = 10;
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
    } else {
      try {
        const page = req.query.page ? parseInt(req.query.page) : 0;
        const query = {
          offset: page * PRODUCTS_PER_PAGE,
          limit: PRODUCTS_PER_PAGE,
        };
        query.attributes = ["id", "name", "img", "salePrice"];
        const { count, rows } = await Product.findAndCountAll(query);
        console.log(count);
        console.log(rows.map((p) => p.toJSON()));
        const response = {
          count,
          totalPages: Math.ceil(count / PRODUCTS_PER_PAGE),
          products: [...rows],
        };
        res.json(rows.length ? response : { message: "No products found" });
      } catch (error) {
        next(error);
      }
    }
  },

  findProductById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await Product.findOne({
        where: { id },
        include: [
          { model: Category, through: { attributes: [] } },
          { model: User, through: { attributes: [] } },
        ],
      });
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
    try {
      const { name } = req.query;
      const condition = name
        ? { where: { name: { [Op.iLike]: `%${name}%` } } }
        : {};
      condition.attributes = ["id", "name", "img", "salePrice"];
      const products = await Product.findAll(condition);
      res.json(products.length ? products : { message: "No products found" });
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

  updateProduct: async (req, res) => {
    const { id } = req.params;
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
      const product = await Product.findByPk(id);
      if (!product) {
        res.status(400).send("Product not found");
      }
      const update = {};
      if (name) update.name = name;
      if (description) update.description = description;
      if (salePrice) update.salePrice = salePrice;
      if (stock) update.stock = stock;
      if (img) update.img = img;
      if (discount) update.discount = discount;
      if (purchasePrice) update.purchasePrice = purchasePrice;
      if (categories) update.categories = categories;
      const updateProduct = await product.update(update);
      res.json(updateProduct);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = { productController };
