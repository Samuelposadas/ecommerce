const app = require("./app");
const { sequelize } = require("./db/db");
const { incomeProductDB, incomeSuppliers } = require("./utils");

// Syncing all the models at once.
sequelize.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    incomeProductDB();
    incomeSuppliers();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
