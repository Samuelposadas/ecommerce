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
const modelUsuario = require("../models/usuario");

const modelBrands = require("../models/Brands");
const modelSubCategories = require("../models/SubCategory");

const modelSpecifict_Category = require("../models/Specifict_Category");

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

modelSpecifict_Category(sequelize);

modelUsuario(sequelize);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

// eslint-disable-next-line no-unused-vars

const {
  Product,
  Category,
  Supplier,
  User,
  Order,
  Order_Detail,
  Comment,
  Brands,
  SubCategory,
  Specifict_Category,
  Type_User,
  Usuario,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Category.hasMany(Product, { foreignKey: "id_Category" });
Product.belongsTo(Category, { foreignKey: "id_Category" });

Supplier.hasMany(Product, { foreignKey: "id_Supplier" });
Product.belongsTo(Supplier, { foreignKey: "id_Supplier" });

User.hasMany(Order, { foreignKey: "id_User" });
Order.belongsTo(User, { foreignKey: "id_User" });

Order.hasMany(Order_Detail, { foreignKey: "id_Order" });
Order_Detail.belongsTo(Order, { foreignKey: "id_Order" });

Type_User.hasMany(User, { foreignKey: "id_Type_User" });
User.belongsTo(Type_User, { foreignKey: "id_Type_User" });

Type_User.hasMany(Usuario, { foreignKey: "id_Type_usuario" });
Usuario.belongsTo(Type_User, { foreignKey: "id_Type_usuario" });

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

Brands.hasMany(Product, { foreignKey: "id_Brand" });
Product.belongsTo(Brands, { foreignKey: "id_Brand" });

SubCategory.hasOne(Product, { foreignKey: "id_Sub_Categories" });
Product.belongsTo(SubCategory, { foreignKey: "id_Sub_Categories" });

Category.hasMany(Specifict_Category, { foreignKey: "id_Category" });
Specifict_Category.belongsTo(Category, { foreignKey: "id_Category" });

Specifict_Category.hasMany(Product, { foreignKey: "id_SpeCategory" });
Product.belongsTo(Specifict_Category, { foreignKey: "id_SpeCategory" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize: sequelize, // para importart la conexión { conn } = require('./db.js');
  Op, // para poder importar los operadores tales como ilike en las consultas a la database
};
