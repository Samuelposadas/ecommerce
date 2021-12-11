const { Category } = require("../db/db");

const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCategory };
