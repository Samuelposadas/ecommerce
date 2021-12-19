const { response } = require("express");
const { Category } = require("../db/db");

const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { categoryName } = req.body;
    console.log(`---------> ${categoryName}`);
    if (categoryName) {
      const [newCategory, created] = await Category.findOrCreate({
        where: { name: categoryName },
        defaults: { name: categoryName },
      });
      if (created) {
        res.json(newCategory);
      } else {
        res.json({ msg: "Category  already exists" });
      }
    } else {
      res.json({ msg: "You must send a category name" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategory, createCategory };
