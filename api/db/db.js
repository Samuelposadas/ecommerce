/* eslint-disable no-unused-vars */
const { Sequelize } = require("sequelize");
const modelProduct = require("../models/Product");
const modelCategory = require("../models/Category");
const modelSupplier = require("../models/Supplier");
const modelUser = require("../models/User");
const modelTypeUser = require("../models/Type_User");
const modelOrder = require("../models/Order");
const modelOrderDetail = require("../models/Order_Detail");
const modelComment = require("../models/Comment");
const modelTypeOrder = require("../models/Type_Order");
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
modelComment(sequelize);
modelTypeOrder(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

// eslint-disable-next-line no-unused-vars

const {
  Product,
  Category,
  Supplier,
  User,
  Type_User,
  Order,
  Order_Detail,
  Comment,
  Type_Order,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Creando tabla intermedia de muchos a muchos de productos y categorías de productos
Product.belongsToMany(Category, {
  through: "Product_Category",
  foreignKey: "id_Product",
  timestamps: false,
});
Category.belongsToMany(Product, {
  through: "Product_Category",
  foreignKey: "id_Category",
  timestamps: false,
});

Supplier.hasMany(Product, { foreignKey: "id_Supplier" }); //Un proveedor tiene muchos Productos
Product.belongsTo(Supplier, { foreignKey: "id_Supplier" }); //Muchos productos pertenecen a un proveedor

Type_User.hasMany(User, { foreignKey: "id_Type_User" }); // Un tipo de usuario puede pertenecer a multiples usuarios
User.belongsTo(Type_User, { foreignKey: "id_Type_User" }); //Múltiples usuarios pueden tener un tipo

User.hasMany(Order, { foreignKey: "id_User" }); //Un usuario puede tener múltiples ordenes
Order.belongsTo(User, { foreignKey: "id_User" }); // Multiples ordenes pueden pertenecer a un usuario

Order.hasMany(Order_Detail, { foreignKey: "id_Order" }); //Una orden puede tener múltiples detalles
Order_Detail.belongsTo(Order, { foreignKey: "id_Order" }); //Múltiples detalles pueden pertenecer a una Orden

Product.hasMany(Order_Detail, { foreignKey: "id_Product" }); //Un producto puede estar en múltiples detalles de la orden
Order_Detail.belongsTo(Product, { foreignKey: "id_Product" }); // Multiples detalles de la orden pueden tener un producto

//Creando la tabla Favorites
Product.belongsToMany(User, {
  through: "Favorite",
  foreignKey: "id_Producto",
  timestamps: false,
});
User.belongsToMany(Product, {
  through: "Favorite",
  foreignKey: "id_User",
  timestamps: false,
});

Product.hasMany(Comment, { foreignKey: "id_Product" });
Comment.belongsTo(Product, { foreignKey: "id_Product" });

User.hasMany(Comment, { foreignKey: "id_User" });
Comment.belongsTo(User, { foreignKey: "id_User" });

Type_Order.hasMany(Order, { foreignKey: "id_Type_Order" });
Order.belongsTo(Type_Order, { foreignKey: "id_Type_Order" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize: sequelize, // para importart la conexión { conn } = require('./db.js');
};
