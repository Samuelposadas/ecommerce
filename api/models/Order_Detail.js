const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Order_Detail",
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priceCurrent: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
