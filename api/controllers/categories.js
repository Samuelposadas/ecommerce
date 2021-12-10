const { Category } = require("../db/db");

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const [newCategory, created] = await Category.findOrCreate({
      where: { name },
    });
    if (created) {
      res.send("category created");
    } else {
      res.send("category already exists");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { createCategory };
