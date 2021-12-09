const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Order_Detail",
    {
      cant: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priceCurrent: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
