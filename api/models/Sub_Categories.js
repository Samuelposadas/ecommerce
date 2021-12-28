const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Sub_Categories",
    {
      ram: {
        type: DataTypes.ENUM,
        values: ["1", "2", "4", "8", "16", "32"],
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
        type: DataTypes.ENUM,
        values: ["Linux", "Windows", "Mac OS", "Android", "iOS"],
      },
      resolution: {
        type: DataTypes.STRING,
      },
      typeScreen: {
        type: DataTypes.ENUM,
        values: [
          "LCD",
          "LED",
          "TouchScreen",
          "Amoled",
          "OLED",
          "Gorilla Glass",
        ],
      },
    },
    { timestamps: false }
  );
};
