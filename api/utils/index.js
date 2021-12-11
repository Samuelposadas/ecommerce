const { Product, Category } = require("../db/db");
const dataProducts = require("../productsDB/Products.json");
const categories = require("../productsDB/Categories.json");

//funcion para hacer un get y traerse todos los productos
const incomeProductDB = async () => {
  await Category.bulkCreate(categories);
  dataProducts.forEach(async (elementProduct, i) => {
    const product = await Product.create({
      name: elementProduct.name,
      description: elementProduct.description,
      salePrice: elementProduct.salePrice,
      img: elementProduct.img,
      purchasePrice: elementProduct.purchasePrice,
      rating: elementProduct.rating,
      stock: elementProduct.stock,
      discount: elementProduct.discount,
    });
    await product.setCategories([1, 2]);
  });
};

module.exports = {
  incomeProductDB,
};
