const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Filter_Products",
    {
      ram: {
        type: DataTypes.INTEGER,
      },
      processor: {
        type: DataTypes.STRING,
      },
      storage: {
        type: DataTypes.INTEGER,
      },
      sizeScreen: {
        type: DataTypes.STRING,
      },
      display: {
        type: DataTypes.BOOLEAN,
      },
      opeSystem: {
        type: DataTypes.STRING,
      },
      resolution: {
        type: DataTypes.STRING,
      },
      typeScreen: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
