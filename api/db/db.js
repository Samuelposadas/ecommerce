/* eslint-disable no-unused-vars */
require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const modelProduct = require("../models/Product");
const modelCategory = require("../models/Category");
const modelSupplier = require("../models/Supplier");
const modelUser = require("../models/User");
const modelTypeUser = require("../models/Type_User");
const modelOrder = require("../models/Order");
const modelOrderDetail = require("../models/Order_Detail");
const modelComment = require("../models/Comment");
const modelTypeOrder = require("../models/Type_Order");

const modelBrands = require("../models/Brands");
const modelSubCategories = require("../models/Sub_Categories");

const modelSpecifict_Accesories = require("../models/Specifict_Accesories");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

/* eslint-disable */
const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
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

modelBrands(sequelize);
modelSubCategories(sequelize);

modelSpecifict_Accesories(sequelize);

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

  Brands,
  Sub_Categories,

  Specifict_Accesories,
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

Supplier.hasMany(Product, { foreignKey: "id_Supplier" });
Product.belongsTo(Supplier, { foreignKey: "id_Supplier" });

Type_User.hasMany(User, { foreignKey: "id_Type_User" });
User.belongsTo(Type_User, { foreignKey: "id_Type_User" });

User.hasMany(Order, { foreignKey: "id_User" });
Order.belongsTo(User, { foreignKey: "id_User" });

Order.hasMany(Order_Detail, { foreignKey: "id_Order" });
Order_Detail.belongsTo(Order, { foreignKey: "id_Order" });

Product.hasMany(Order_Detail, { foreignKey: "id_Product" });
Order_Detail.belongsTo(Product, { foreignKey: "id_Product" });

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

Brands.hasMany(Product, { foreignKey: "id_Brand" });
Product.belongsTo(Brands, { foreignKey: "id_Brand" });

Sub_Categories.hasOne(Product, { foreignKey: "id_Sub_Categories" });
Product.belongsTo(Sub_Categories, { foreignKey: "id_Sub_Categories" });

Specifict_Accesories.hasMany(Product, { foreignKey: "id_Accesories" });
Product.belongsTo(Specifict_Accesories, { foreignKey: "id_Accesories" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize: sequelize, // para importart la conexión { conn } = require('./db.js');
  Op, // para poder importar los operadores tales como ilike en las consultas a la database
};
