const app = require("./app");
const { sequelize } = require("./db/db");
const { incomeProductDB, incomeSuppliers, incomeCategory } = require("./utils");

// Syncing all the models at once.
sequelize.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    incomeCategory();
    incomeSuppliers();
    incomeProductDB();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
