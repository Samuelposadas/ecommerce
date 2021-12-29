const {
  Product,
  Op,
  Category,
  /* User, */ Supplier,
  Comment,
  Sub_Categories,
} = require("../db/db");

const getProductsAll = async (req, res) => {
  let { category, orderPrice, page, nameproduct } = req.query;

  //variable para mandar a paginar
  let resultData;

  //Valores por defecto si no vienen por query
  page = page ? page : 1;
  orderPrice = orderPrice ? orderPrice : "ASC";

  const PRODUCTS_PER_PAGE = 12;

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
  } else if (nameproduct) {
    try {
      const condition = {
        where: { name: { [Op.iLike]: `%${nameproduct}%` } },
        attributes: { exclude: ["id_Supplier"] },
        include: [
          { model: Category },
          { model: Supplier, attributes: ["name"] },
        ],
        order: [["salePrice", orderPrice]],
      };
      const products = await Product.findAll(condition);
      // res.json(products.length ? products : { message: "No products found" });
      resultData = [...products];
    } catch (error) {
      console.log(error);
    }
  } else if (!nameproduct && !category) {
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

const newgetProductsAll = async (req, res) => {
  let { Pcategory, page, order, typeOrder, nameProduct } = req.query;
  /*
  category---- se desglosa a multiples
  page
  order - asc-des
  typeOrder - Price | Raiting
  marca
  */
  try {
    //Valores por defecto si no vienen por query
    const PRODUCTS_PER_PAGE = 5;
    page = page ? page : 1;
    order = order ? order : "DESC";
    typeOrder = typeOrder ? typeOrder : "rating";

    //Inicio de la paginación
    let offsetPagination = (page - 1) * PRODUCTS_PER_PAGE;

    if (!Pcategory) {
      try {
        //Datos con todas las categorías
        const conditionDataProducts = {
          attributes: ["id", "name", "salePrice", "img", "rating", "discount"],
          offset: offsetPagination,
          limit: PRODUCTS_PER_PAGE,
          order: [[typeOrder, order]],
        };
        const dataProducts = await Product.findAll(conditionDataProducts);
        res.json(dataProducts);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const findCategory = await Category.findOne({
          where: { id: Pcategory },
          attributes: ["name"],
        });

        switch (findCategory.name) {
          case "Computer":
            // -RAM
            // -TAMAÑO
            // -SIN O CON MONITOR
            // -PROCESADOR
            // -ESPACIO DISCO DURO
            const conditionByComputer = {
              include: [
                {
                  model: Category,
                  where: { id: Pcategory },
                },
                {
                  model: Sub_Categories,
                  // where: { RAM: 5 },
                },
              ],
              attributes: [
                "id",
                "name",
                "salePrice",
                "img",
                "rating",
                "discount",
              ],
              offset: offsetPagination,
              limit: PRODUCTS_PER_PAGE,
              order: [[typeOrder, order]],
            };
            const findByComputer = await Product.findAll(conditionByComputer);

            res.json(findByComputer);
            break;
          case "TV":
            res.json(findCategory);
            break;
          case "Mobile":
            res.json(findCategory);
            break;
          case "Tablet":
            res.json(findCategory);
            break;
          case "Laptop":
            res.json(findCategory);
            break;
          case "Accessory":
            res.json(findCategory);
            break;
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const findProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Product.findOne({
      where: { id },
      attributes: { exclude: ["id_Supplier"] },
      include: [
        { model: Category },
        { model: Supplier, attributes: ["name", "id"] },
        { model: Comment },
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
      const condition = {
        where: { name: { [Op.iLike]: `%${name}%` } },
        attributes: { exclude: ["id_Supplier"] },
        include: [
          { model: Category },
          { model: Supplier, attributes: ["name"] },
        ],
        // order: [["salePrice", orderPrice]],
      };
      const products = await Product.findAll(condition);
      // res.json(products.length ? products : { message: "No products found" });
      res.json({
        count: products.length,
        totalPages: Math.ceil(products.length / 10),
        products: products,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.send("No se encontraron coincidencias");
  }
};

const createProduct = async (req, res) => {
  console.log(req.body);
  const {
    name,
    description,
    salePrice,
    purchasePrice,
    img,
    rating,
    stock,
    discount,
    categories,
    supplier,
  } = req.body;
  try {
    const [product, created] = await Product.findOrCreate({
      where: { name },
      defaults: {
        description,
        salePrice,
        img,
        purchasePrice,
        rating,
        stock,
        discount,
      },
    });
    if (created) {
      product.addCategories(categories);
      product.setSupplier(supplier);
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
    supplier,
  } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(400).send("Product not found");
    }
    if (categories) {
      await product.setCategories(categories);
    }
    if (supplier) {
      await product.setSupplier(supplier);
    }
    const update = {};
    if (name) update.name = name;
    if (description) update.description = description;
    if (salePrice) update.salePrice = salePrice;
    if (stock) update.stock = stock;
    if (img) update.img = img;
    if (discount) update.discount = discount;
    if (purchasePrice) update.purchasePrice = purchasePrice;
    // if (categories) update.categories = categories;
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
  newgetProductsAll,
};
