const app = require("./app");
const { sequelize } = require("./db/db");
const { incomeProductDB, incomeSuppliers, incomeCategory } = require("./utils");
const { PORT } = process.env;
// Syncing all the models at once.
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    incomeCategory();
    incomeSuppliers();
    incomeProductDB();
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
