const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    salePrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min:0,
        max: 5
      }
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min:0,
        max: 100
      }
    },
    purchasePrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  },{timestamps: false});
};