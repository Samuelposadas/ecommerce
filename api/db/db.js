/* eslint-disable no-unused-vars */
const { Sequelize } = require("sequelize");
const modelProduct = require("../models/Product");
const modelCategory = require("../models/Category");
const modelSupplier = require("../models/Supplier");
const modelUser = require("../models/User");
const modelTypeUser = require("../models/Type_User");
const modelOrder = require("../models/Order");
const modelOrderDetail = require("../models/Order_Detail");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);



// Injectamos la conexion (sequelize) a todos los modelos

modelProduct(sequelize);
modelCategory(sequelize);
modelSupplier(sequelize);
modelUser(sequelize);
modelTypeUser(sequelize);
modelOrder(sequelize);
modelOrderDetail(sequelize);


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

// eslint-disable-next-line no-unused-vars

const { Product, Category, Supplier, User, Type_User, Order, Order_Detail } = sequelize.models;



// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Creando tabla intermedia de muchos a muchos de productos y categorías de productos
Product.belongsToMany(Category, {through: "Product_Category", timestamps:false});
Category.belongsToMany(Product, {through: "Product_Category", timestamps:false});


Supplier.hasMany(Product); //Un proveedor tiene muchos Productos
Product.belongsTo(Supplier); //Muchos productos pertenecen a un proveedor

Type_User.hasMany(User); // Un tipo de usuario puede pertenecer a multiples usuarios
User.belongsTo(Type_User); //Múltiples usuarios pueden tener un tipo




module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize: sequelize, // para importart la conexión { conn } = require('./db.js');
};