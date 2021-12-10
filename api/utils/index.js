const { Product, Category } = require("../db/db");
const dataProducts = require("../productsDB/Products.json");

//funcion para hacer un get y traerse todos los productos
const incomeProductDB = async () => {
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
  await Category.create({ name: "computer" });
};

module.exports = {
  incomeProductDB,
};
