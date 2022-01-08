/* eslint-disable */
const {
  Product,
  Op,
  Category,
  /* User, */ Supplier,
  Comment,
  SubCategory,
  Specifict_Category,
} = require("../db/db");

const newgetProductsAll = async (req, res) => {
  let {
    Pcategory,
    page,
    order,
    typeOrder,
    NProduct,
    catSpecifict,
    ram,
    typeScreen,
    sizeScreen,
    display,
    storage,
    processor,
    opeSystem,
    resolution,
  } = req.query;
  console.log("Hola2");
  /*
  category---- se desglosa a multiples
  page
  order - asc-des
  typeOrder - Price | Raiting
  marca
  */
  try {
    //Valores por defecto si no vienen por query
    const PRODUCTS_PER_PAGE = 12;
    page = page ? page : 1;
    order = order ? order : "DESC";
    typeOrder = typeOrder ? typeOrder : "rating";

    //Inicio de la paginación
    // let offsetPagination = (page - 1) * PRODUCTS_PER_PAGE;

    //Data Products
    let findByProduct;

    if (NProduct && NProduct !== "") {
      findByProduct = await Product.findAll({
        where: {
          name: { [Op.iLike]: `%${NProduct}%` },
        },
        attributes: [
          "id",
          "name",
          "salePrice",
          "img",
          "rating",
          "discount",
          "stock",
        ],
        order: [[typeOrder, order]],
      });
    }

    if (!Pcategory && !NProduct) {
      try {
        //Datos con todas las categorías
        const conditionDataProducts = {
          attributes: [
            "id",
            "name",
            "salePrice",
            "img",
            "rating",
            "discount",
            "stock",
          ],
          // offset: offsetPagination,
          // limit: PRODUCTS_PER_PAGE,
          order: [[typeOrder, order]],
        };
        findByProduct = await Product.findAll(conditionDataProducts);
      } catch (error) {
        console.log(error);
      }
    } else if (!NProduct) {
      try {
        const findCategory = await Category.findOne({
          where: { id: Pcategory },
          attributes: ["name"],
        });
        const conditionByProduct = {
          include: [
            {
              model: Category,
              where: { id: Pcategory },
            },
            {
              model: SubCategory,
            },
            {
              model: Specifict_Category,
            },
          ],
          attributes: [
            "id",
            "name",
            "salePrice",
            "img",
            "rating",
            "discount",
            "stock",
          ],
          order: [[typeOrder, order]],
        };

        findByProduct = await Product.findAll(conditionByProduct);

        if (findCategory.name !== "Accessory") {
          if (findByProduct.length > 0) {
            // -RAM
            // -TAMAÑO
            // -SIN O CON MONITOR
            // -PROCESADOR
            // -ESPACIO DISCO DURO

            // ram, sizeScreen, monitor, storage, processor,TypeScreen, Resolution

            //FILTRO POR RAM
            if (ram && ram !== "false") {
              if (ram < 4) {
                findByProduct = findByProduct.filter(
                  (elem) => elem.SubCategory.ram < 4
                );
              }
              if (ram > 16) {
                findByProduct = findByProduct.filter(
                  (elem) => elem.SubCategory.ram > 16
                );
              } else {
                findByProduct = findByProduct.filter(
                  (elem) => elem.SubCategory.ram == ram
                );
              }
            }

            //FILTRO POR ALMACENAMIENTO
            if (storage && storage !== "false") {
              if (storage < 256) {
                findByProduct = findByProduct.filter(
                  (elem) => elem.SubCategory.storage < 256
                );
              }
              if (storage >= 1024) {
                findByProduct = findByProduct.filter(
                  (elem) => elem.SubCategory.storage >= 1024
                );
              } else {
                findByProduct = findByProduct.filter(
                  (elem) => elem.SubCategory.storage == storage
                );
              }
            }

            //FILTRO POR SI EXISTE MONITOR
            if (display && display !== "false") {
              findByProduct = findByProduct.filter(
                (elem) => elem.SubCategory.display == display
              );
            }

            //FILTRO POR TAMAÑO DE PANTALLA
            if (sizeScreen && sizeScreen !== "false") {
              if (sizeScreen < 8) {
                findByProduct = findByProduct.filter(
                  (elem) => elem.SubCategory.sizeScreen < 8
                );
              }
              if (sizeScreen >= 8 && sizeScreen < 16) {
                findByProduct = findByProduct.filter(
                  (elem) =>
                    elem.SubCategory.sizeScreen >= 8 &&
                    elem.SubCategory.sizeScreen < 16
                );
              }
              if (sizeScreen >= 16 && sizeScreen < 32) {
                findByProduct = findByProduct.filter(
                  (elem) =>
                    elem.SubCategory.sizeScreen >= 16 &&
                    elem.SubCategory.sizeScreen < 32
                );
              }
              if (sizeScreen >= 32) {
                findByProduct = findByProduct.filter(
                  (elem) => elem.SubCategory.sizeScreen >= 32
                );
              }
            }

            //FILTRO DE RESOLUCION
            if (resolution && resolution !== "false") {
              findByProduct = findByProduct.filter(
                (elem) => elem.SubCategory.resolution == resolution
              );
            }

            //FILTRO DE TIPO DE PANTALLA
            if (typeScreen && typeScreen !== "false") {
              findByProduct = findByProduct.filter(
                (elem) => elem.SubCategory.typeScreen == typeScreen
              );
            }

            //FILTRO POR PROCESADOR
            if (processor && processor !== "false") {
              findByProduct = findByProduct.filter(
                (elem) => elem.SubCategory.processor == processor
              );
            }

            //FILTRO PORT SISTEMA OPERATIVO
            if (opeSystem && opeSystem !== "false") {
              findByProduct = findByProduct.filter(
                (elem) => elem.SubCategory.opeSystem == opeSystem
              );
            }
          }
        } else if (findCategory.name == "Accessory") {
          if (catSpecifict && catSpecifict !== "false") {
            findByProduct = findByProduct.filter(
              (elem) => elem.Specifict_Category.id == catSpecifict
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    //Código de paginado
    const result = findByProduct.slice(
      PRODUCTS_PER_PAGE * (page - 1),
      PRODUCTS_PER_PAGE * (page - 1) + PRODUCTS_PER_PAGE
    );
    res.json({
      count: findByProduct.length,
      totalPages: Math.ceil(findByProduct.length / PRODUCTS_PER_PAGE),
      products: result,
    });
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
        { model: SubCategory },
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
  const {
    name,
    description,
    salePrice,
    purchasePrice,
    img,
    stock,
    discount,
    category,
    supplier,
    subcategory,
    specCategory,
  } = req.body;

  try {
    const findCate = await Category.findByPk(category);

    const dataProduct = {
      name,
      description,
      salePrice,
      stock,
      img,
      discount,
      purchasePrice,
      id_Supplier: supplier,
      id_Category: category,
      id_SpeCategory: findCate.name == "Accessory" ? specCategory : null,
    };

    const [prod, createPro] = await Product.findOrCreate({
      where: {
        name: dataProduct.name,
      },
      defaults: dataProduct,
    });

    if (createPro) {
      if (findCate.name !== "Accessory") {
        prod.createSubCategory({
          ram: subcategory.ram ? subcategory.ram : null,
          storage: subcategory.storage ? subcategory.storage : null,
          processor: subcategory.processor ? subcategory.processor : null,
          sizeScreen: subcategory.sizeScreen ? subcategory.sizeScreen : null,
          display: subcategory.display ? subcategory.display : 0,
          opeSystem: subcategory.opeSystem ? subcategory.opeSystem : null,
          resolution:
            subcategory.resolution !== "false" ? subcategory.resolution : null,
          typeScreen:
            subcategory.typeScreen !== "false" ? subcategory.typeScreen : null,
        });
        res.send("Product add success");
      } else {
        res.send("Product add success");
      }
    } else {
      res.send("Product is already exist");
    }
  } catch (error) {
    console.log(error);
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

const updateRating = async ({ id, rating }) => {
  try {
    const product = await Product.findByPk(id, { include: Comment });
    let newRating;
    if (product.rating !== null) {
      let addRating = 0;
      for (let i = 0; i < product.Comments.length; i++) {
        const productRating = product.Comments[i].stars;
        addRating += productRating;
      }
      newRating = Math.round(addRating / product.Comments.length);
    } else {
      newRating = rating;
    }
    await product.update({ rating: newRating });
  } catch (e) {
    console.log(e);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ attributes: ["name"] });
    res.json(products);
  } catch (e) {
    console.log(e);
    res.error(e);
  }
};

module.exports = {
  findProductById,
  searchProducts,
  createProduct,
  addOrRemoveCategoryProduct,
  updateProduct,
  newgetProductsAll,
  updateRating,
  getAllProducts,
};
