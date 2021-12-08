/* eslint-disable no-unused-vars */
const { Sequelize } = require("sequelize");
const modelProduct = require("../models/Product");
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

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

// eslint-disable-next-line no-unused-vars

const { Product } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize: sequelize, // para importart la conexión { conn } = require('./db.js');
};
