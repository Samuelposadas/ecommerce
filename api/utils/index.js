const { Product } = require("../db/db");
const dataProducts = require("../productsDB/Products.json");

const incomeProductDB = () => {
  dataProducts.forEach(async (elementProduct) => {
    await Product.create({
      name: elementProduct.name,
      description: elementProduct.description,
      salePrice: elementProduct.salePrice,
      img: elementProduct.img,
      purchasePrice: elementProduct.purchasePrice,
      rating: elementProduct.rating,
      stock: elementProduct.stock,
      discount: elementProduct.discount,
    });
  });
};

module.exports = {
  incomeProductDB,
};
