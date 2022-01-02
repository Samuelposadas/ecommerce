const app = require("./app");
const { sequelize } = require("./db/db");
const {
  incomeProductDB,
  incomeSuppliers,
  incomeCategory,
  incomeUserTypes,
  incomeUsers,
  incomeComments,
  addSpecifictAccesories,
} = require("./utils");
const { PORT } = process.env;
// Syncing all the models at once.
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, async () => {
    await addSpecifictAccesories();
    await incomeCategory();
    await incomeSuppliers();
    await incomeProductDB();
    await incomeUserTypes();
    await incomeUsers();
    await incomeComments();
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
