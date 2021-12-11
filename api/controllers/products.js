const { Product, Op, Category, User, Supplier } = require("../db/db");

const getProductsAll = async (req, res) => {
  let { category, orderPrice, page } = req.query;

  //variable para mandar a paginar
  let resultData;

  //Valores por defecto si no vienen por query
  page = page ? page : 1;
  orderPrice = orderPrice ? orderPrice : "ASC";
  const PRODUCTS_PER_PAGE = 10;

  if (category) {
    try {
      const products = await Product.findAll({
        attributes: { exclude: ["id_Supplier"] },
        include: [
          { model: Category },
          { model: Supplier, attributes: ["name"] },
        ],
        order: [["salePrice", orderPrice]],
      });
      // order: [["salePrice", orderPrice]]
      //Filtrado de productos por ID de la categoría
      const productsByCategory = products.filter((product) => {
        if (product.Categories.length) {
          for (let i = 0; i < product.Categories.length; i++) {
            if (product.Categories[i].id === +category) {
              return product;
            }
          }
        }
      });
      resultData = [...productsByCategory];
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      //Datos con todas las categorías

      const dataProducts = await Product.findAll({
        attributes: { exclude: ["id_Supplier"] },
        include: [
          { model: Category },
          { model: Supplier, attributes: ["name"] },
        ],
        order: [["salePrice", orderPrice]],
      });
      resultData = [...dataProducts];
    } catch (error) {
      console.log(error);
    }
  }

  //Código de paginado
  const result = resultData.slice(
    PRODUCTS_PER_PAGE * (page - 1),
    PRODUCTS_PER_PAGE * (page - 1) + PRODUCTS_PER_PAGE
  );

  res.json({
    count: resultData.length,
    totalPages: Math.ceil(resultData.length / PRODUCTS_PER_PAGE),
    products: result,
  });
};

const findProductById = async (req, res) => {
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
    console.log(error);
  }
};

const searchProducts = async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const condition = name
        ? { where: { name: { [Op.iLike]: `%${name}%` } } }
        : {};
      condition.attributes = ["id", "name", "img", "salePrice"];
      const products = await Product.findAll(condition);
      res.json(products.length ? products : { message: "No products found" });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.send("No se encontraron coincidencias");
  }
};

const createProduct = async (req, res) => {
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
};

const addOrRemoveCategoryProduct = async (req, res) => {
  const { idProduct, idCategories, action } = req.body;
  try {
    const product = await Product.findByPk(idProduct);
    if (action === "add") {
      await product.addCategories(idCategories);
      res.send("Categories were added successfully");
    }
    if (action === "remove") {
      await product.removeCategories(idCategories);
      res.send("Categories were removed correctly");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
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
  }
};

module.exports = {
  getProductsAll,
  findProductById,
  searchProducts,
  createProduct,
  addOrRemoveCategoryProduct,
  updateProduct,
};
